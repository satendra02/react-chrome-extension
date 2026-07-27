import { crx } from '@crxjs/vite-plugin'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import manifest from './manifest.config'

export default defineConfig({
  plugins: [react(), crx({ manifest })],
  build: {
    // The popup is not referenced from the manifest by default (see the note
    // in manifest.config.ts), so declare it here to keep it built and
    // type-checked until you decide to switch it on.
    rollupOptions: {
      input: {
        popup: 'src/popup/index.html',
      },
    },
  },
  server: {
    port: 5173,
    strictPort: true,
    hmr: { port: 5173 },
    // The dev server has to answer requests coming from the chrome-extension://
    // origin, otherwise HMR for the content script is blocked by CORS.
    cors: { origin: [/chrome-extension:\/\//] },
  },
})
