# Blog drafts

Source for the writing about the boilerplate, kept alongside the boilerplate itself. Nothing in this directory is part of the extension or the build — you can safely delete it in a fork.

The follow-up post is published: **[Eight years later: rebuilding the React Chrome extension boilerplate](https://medium.com/@satendrarai/eight-years-later-rebuilding-the-react-chrome-extension-boilerplate-fe6463ed8d99)**.

| File | What it is |
| --- | --- |
| [eight-years-later-rebuilding-the-boilerplate.md](eight-years-later-rebuilding-the-boilerplate.md) | Follow-up post covering the move to Vite, Manifest V3 and React 19 |
| [2018-post-update-banner.md](2018-post-update-banner.md) | Update banner to add to the original 2018 article, pointing forward to the follow-up |
| [assets/header-2400.png](assets/header-2400.png) | Header image for the follow-up post, 2400×1260 |
| [assets/header.html](assets/header.html) | Source the header renders from — edit this, not the PNG |

## Regenerating the header

The header is a 1200×630 HTML page rendered at 2× with headless Chrome. Both code fragments in it are real: the left panel is the `output` block from `config/webpack.config.prod.js` as it stood before the rebuild (`git show 3931051^:config/webpack.config.prod.js`), the right is the current `manifest.config.ts`.

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --hide-scrollbars \
  --force-device-scale-factor=2 --window-size=1200,630 \
  --screenshot=docs/blog/assets/header-2400.png \
  "file://$PWD/docs/blog/assets/header.html"
```

1200×630 is the 1.91:1 social-card ratio, so the image is not cropped on Medium, Twitter or LinkedIn. Suggested alt text: *"Split panel comparing a 2018 webpack config with a 2026 CRXJS manifest config."*

The original post is [Create chrome extension with ReactJs using inject page strategy](https://itnext.io/create-chrome-extension-with-reactjs-using-inject-page-strategy-137650de1f39) (ITNEXT, July 2018). It is still linked from the top-level README as background on the inject-page strategy; its build steps are superseded by the follow-up.

The banner in `2018-post-update-banner.md` still needs adding to the original article by hand — Medium has no API for editing an existing post.
