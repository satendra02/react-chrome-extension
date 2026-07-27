# Banner to add at the top of the 2018 post

Paste this directly under the title of *Create chrome extension with ReactJs using inject page strategy*, before the first paragraph. Replace `NEW_POST_URL` once the follow-up is published.

---

> **Update, July 2026 — this post's build steps are out of date.**
>
> The inject-page strategy itself still holds up, and the reasoning below is still the reasoning. But everything about *how* you build it has changed: Manifest V2 has been wound down, `create-react-app` is no longer maintained, and the eject-and-edit-webpack workaround at the heart of this post is no longer necessary at all.
>
> I have rewritten the boilerplate on Vite, Manifest V3 and React 19, and written up what changed and why: **[Eight years later: rebuilding the React Chrome extension boilerplate](NEW_POST_URL)**.
>
> Read this post for the *why*. Follow the new one for the *how*.

---

## Optional: a second note further down

The section headed **"Injecting React app to page as content script"** is where the post tells you to eject and strip `[contenthash:8]`. If you want to catch people mid-scroll, adding this right there is worth more than the banner alone:

> **This workaround is obsolete.** `@crxjs/vite-plugin` generates `manifest.json` from your source files at build time, so content hashes can stay exactly as they are. See the [2026 rewrite](NEW_POST_URL).
