import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '../components/App'
import '../styles/app.css'
import './popup.css'

/*
 * This page is built but not wired to the toolbar button by default, because
 * declaring `action.default_popup` would stop `chrome.action.onClicked` from
 * firing and break the injected sidebar. See "Using a popup instead" in the
 * README for the one-line switch.
 */
const container = document.getElementById('root')
if (!container) throw new Error('Popup mount point #root is missing')

createRoot(container).render(
  <StrictMode>
    <App surface="popup" />
  </StrictMode>,
)
