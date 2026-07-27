import { createRoot, type Root } from 'react-dom/client'
import { isExtensionMessage } from '../lib/messages'
import {
  DEFAULT_SETTINGS,
  getSettings,
  onSettingsChanged,
  type Settings,
} from '../lib/settings'
import Sidebar from './Sidebar'
import './host.css'

const CONTAINER_ID = 'my-extension-root'

let container: HTMLElement | null = null
let root: Root | null = null
let unsubscribeSettings: (() => void) | null = null

function applySettings(element: HTMLElement, { side, width }: Settings): void {
  element.dataset.side = side
  element.style.setProperty('--rce-width', `${width}px`)
}

function ensureContainer(): HTMLElement {
  if (container?.isConnected) return container

  const element = document.createElement('div')
  element.id = CONTAINER_ID
  element.hidden = true
  // Start from the defaults so the panel is never briefly unpositioned while
  // the real values are read out of storage.
  applySettings(element, DEFAULT_SETTINGS)
  document.body.append(element)
  container = element

  void getSettings().then((settings) => applySettings(element, settings))

  // Re-subscribe rather than stacking listeners, in case a single-page app
  // tore the container out of the DOM and we had to rebuild it.
  unsubscribeSettings?.()
  unsubscribeSettings = onSettingsChanged((settings) =>
    applySettings(element, settings),
  )

  return element
}

/**
 * React is mounted lazily, the first time the user actually opens the sidebar.
 *
 * The old version rendered the whole tree into every page at load and then hid
 * it, which meant every site the user visited paid for a React mount it may
 * never have used. Now a page the user never toggles costs one message
 * listener and nothing else.
 */
function toggle(): void {
  const element = ensureContainer()
  const shouldShow = element.hidden

  if (shouldShow && !root) {
    root = createRoot(element)
    root.render(<Sidebar />)
  }

  element.hidden = !shouldShow
}

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (isExtensionMessage(message) && message.type === 'toggle-sidebar') {
    toggle()
  }
  // Respond synchronously so the sender's promise settles instead of warning
  // about a closed message port.
  sendResponse({ received: true })
})
