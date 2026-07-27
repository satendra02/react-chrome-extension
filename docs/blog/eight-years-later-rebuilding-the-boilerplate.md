# Eight years later: rebuilding the React Chrome extension boilerplate

*A follow-up to [Create chrome extension with ReactJs using inject page strategy](https://itnext.io/create-chrome-extension-with-reactjs-using-inject-page-strategy-137650de1f39) (ITNEXT, July 2018).*

---

In July 2018 I wrote about injecting a React app into a page as a content script, instead of settling for Chrome's built-in popup. The idea holds up: an iframe-isolated sidebar is still a better UX than a 400×600 popup that vanishes when you click away, and it is still the thing the [boilerplate repo](https://github.com/satendra02/react-chrome-extension) exists to give you for free.

Almost everything *around* that idea has expired.

The original post told you to run `create-react-app`, then `yarn eject`, then hand-edit `webpack.config.prod.js` to add a second entry point — and then, crucially, to **strip `[contenthash:8]` out of the output filenames**, because `manifest.json` needs a filename it can predict and webpack wanted to give you `content.a3f9c1.js`. That workaround was the load-bearing hack of the whole approach.

Here is what each piece looks like now.

| 2018 | 2026 |
| --- | --- |
| Manifest V2, `browser_action` | Manifest V3, `action`, background service worker |
| `create-react-app` | Vite (CRA is no longer maintained) |
| `yarn eject` + hand-edited webpack config | `@crxjs/vite-plugin` — nothing to eject |
| Strip `[contenthash]` so the manifest can name files | Unnecessary: the manifest is *generated*, hashes stay |
| `chrome.browserAction.onClicked` + `chrome.tabs.query` | `chrome.action.onClicked(tab)` hands you the tab |
| `ReactDOM.render` | `createRoot` — `render` was removed in React 19 |
| `getURL` + `web_accessible_resources` for the iframe's CSS | Vite's `?inline` — the CSS arrives as a string |
| Rebuild, then reload the extension, every single edit | HMR straight into the running sidebar |

## The hack that stopped being necessary

The reason we ejected in 2018 was to control output filenames. `manifest.json` was a static file committed to the repo, so it could only reference paths known ahead of time.

CRXJS inverts this. The manifest becomes a TypeScript module:

```ts
// manifest.config.ts
import { defineManifest } from '@crxjs/vite-plugin'
import pkg from './package.json' with { type: 'json' }

export default defineManifest({
  manifest_version: 3,
  name: 'React Chrome Extension',
  version: pkg.version,
  background: {
    service_worker: 'src/background/index.ts',
    type: 'module',
  },
  content_scripts: [
    {
      matches: ['<all_urls>'],
      js: ['src/content/index.tsx'],
      run_at: 'document_idle',
    },
  ],
  permissions: ['storage', 'activeTab'],
})
```

You point it at **source** files. The plugin builds them, hashes them, and rewrites the manifest with the real output paths. Content hashing comes back, and with it proper cache behaviour.

There is a smaller win hiding in `version: pkg.version`. In the old repo the committed manifest said `1.1` while `package.json` said `0.1.0` — nobody noticed for years, because nothing connected them. Now they cannot disagree.

## Manifest V3, briefly

MV2 has been wound down in Chrome, so this is no longer optional. Two changes matter for this pattern:

The background page became a **service worker**. It is not a persistent page any more — it starts on an event and is torn down when idle. Anything you were keeping in a module-level variable needs to live in `chrome.storage` instead.

The click handler got simpler, which is a rare and pleasant thing:

```ts
// 2018
chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { message: 'clicked_browser_action' })
  })
})

// now — onClicked already knows which tab you clicked on
chrome.action.onClicked.addListener((tab) => {
  if (typeof tab.id !== 'number') return
  void sendToTab(tab.id, { type: 'toggle-sidebar' })
})
```

One thing the original post did not mention, and should have: `chrome.tabs.sendMessage` **rejects** when nothing is listening. That happens on restricted URLs like `chrome://` pages, and — more confusingly — on any tab that was already open when you installed or reloaded the extension, because content scripts are only injected on navigation. In the old code that surfaced as an unhandled rejection in the service worker console. Catch it and say something useful.

## Getting CSS into an iframe, without `web_accessible_resources`

The iframe is still the right answer for style isolation. Nothing that has landed since — Shadow DOM, `@scope`, CSS layers — gives you the same guarantee, because none of them stop the host page's `* { box-sizing }` or a stray `!important` from reaching in.

What changed is how the CSS gets *in*. The 2018 approach loaded it over `chrome.runtime.getURL`, which meant declaring the stylesheet in `web_accessible_resources` so the page could fetch it. Vite offers something better:

```tsx
import appCss from '../styles/app.css?inline'
import sidebarCss from './sidebar.css?inline'

const iframeStyles = `${sidebarCss}\n${appCss}`

export default function Sidebar() {
  return (
    <Frame head={<style>{iframeStyles}</style>} title="React extension sidebar">
      <App surface="sidebar" />
    </Frame>
  )
}
```

`?inline` returns the compiled CSS as a **string** instead of injecting it into the page. It goes straight into a `<style>` tag in the iframe's head. No network fetch, no `web_accessible_resources` entry for stylesheets, one less thing a hostile page can probe for.

There is a consequence worth internalising: your shared components must not import their own stylesheets. If `App.tsx` does `import './App.css'`, the bundler injects that CSS **into the host page** when `App` is pulled into the content script — which is precisely the leak the iframe was protecting you from. Each surface supplies the CSS itself. The sidebar inlines it; the popup and options pages import it normally.

## The bug I shipped in 2018

While rewriting this I went back through the boilerplate properly, and found that the stylesheet it injects into every page began like this:

```css
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
```

That is a content-script stylesheet. It applied to **every site anyone with this extension installed ever visited**. Any page relying on the browser's default 8px body margin quietly lost it.

The post you are reading now was supposed to be about tooling, and instead here is the actual lesson: the file that gets injected into other people's pages deserves more scrutiny than any other file in an extension. Every rule in it is now scoped:

```css
#my-extension-root { /* ... */ }
#my-extension-root[data-side='right'] { right: 0; }
#my-extension-root iframe { /* ... */ }
```

Rules for things *inside* the iframe live in a different file, which can safely style bare `body` — because that `body` is the iframe's own document. That was the point all along.

A few more that were sitting in plain sight:

- The webpack config had `optimization.minimize: false` hardcoded, so every user of the boilerplate shipped an unminified 58 KB content script to every page.
- React mounted into **every** page on load, then hid itself. Pages where the user never opened the sidebar paid for a full React mount they never used. It now mounts lazily on first toggle.
- The build emitted a `service-worker.js` from `sw-precache` — a leftover of create-react-app's PWA support, entirely unrelated to the MV3 background service worker, and shipped in every zip.

## Routing

The 2018 post recommended `route-lite`, because `react-router` wrote to the address bar and a URL-free stack router was the only clean option.

You do not need a separate package now. React Router ships `MemoryRouter`, which keeps history in memory and never touches `window.location`:

```tsx
import { MemoryRouter, Route, Routes } from 'react-router'

<MemoryRouter initialEntries={['/']}>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/settings" element={<Settings />} />
  </Routes>
</MemoryRouter>
```

Same property the old post wanted — the host page's URL and back button stay untouched — with a router you are probably already using.

## HMR, which is the part you will actually feel

In 2018 the loop was: edit a file, run a build, open `chrome://extensions`, click reload, refresh the tab, re-open the sidebar. Every time.

CRXJS keeps a dev server running and pushes updates into the extension. Edit a component and the sidebar updates in place, with its state intact. Change the service worker and the extension reloads itself.

```bash
npm run dev
```

Load `dist/` once and leave it. That is the whole loop.

Two things I got wrong the first time I tried this, so you don't have to:

1. Point **Load unpacked** at `dist/`, not the project root. There is no manifest at the root any more — it's generated at build time.
2. `npm run dev` and `npm run build` both write to `dist/`, but only the dev output is wired for HMR. Load a production build and you will sit there wondering why nothing hot-reloads.

## What the numbers look like

Deleting the ejected CRA machinery removed about **1,200 lines** of `config/` and `scripts/` that every user of the boilerplate previously inherited and had to maintain.

The dependency situation is the starker one. The old tree could not be installed at all on current Node — `node-sass@9` publishes no binding for Node 22's ABI and is end-of-life upstream, so a fresh clone failed at `install` while my years-old `node_modules` kept working and hid it. GitHub reported **103 known vulnerabilities** on the default branch, 10 of them critical. Swapping the toolchain wholesale cleared all of it, along with 26 stale dependabot branches.

The finished extension packages to **87 KB**. CI — typecheck, lint, build, upload the zip — runs in about 15 seconds.

## What is still not solved

Two things, stated plainly, because posts like this tend to end on a victory lap.

**The extension is still detectable.** CRXJS loads the content script as an ES module, so its chunks have to be listed in `web_accessible_resources`, at stable URLs. Any page can fetch one and learn the extension is installed. Chrome's `use_dynamic_url` would fix this, but CRXJS only applies it to dynamically registered scripts. Its `standaloneFiles` option bypasses the whole mechanism, and I tried it — as of `@crxjs/vite-plugin@2.7.1` it leaves `process.env.NODE_ENV` unreplaced (an instant `ReferenceError` in a content script) and silently drops the content script's CSS from the manifest. So: documented, not fixed.

**`<all_urls>` is a blunt instrument.** The boilerplate registers on every site so the toolbar button responds instantly. If you are shipping something real, narrow `matches` to the sites you actually target. The Web Store reviews broad host access closely, and rightly.

## Get it

```bash
git clone https://github.com/satendra02/react-chrome-extension.git
cd react-chrome-extension
npm install
npm run dev
```

React 19, TypeScript, Vite, Manifest V3, an options page wired to `chrome.storage.sync`, and a popup you can switch on with one line.

The 2018 post is still up, and still worth reading if you want the reasoning behind the inject-page strategy itself — that part has not aged. Just don't follow its build steps.
