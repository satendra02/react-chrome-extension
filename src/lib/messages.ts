/**
 * Typed wrapper around the handful of messages this extension exchanges
 * between its background service worker and its content script.
 *
 * Keeping the shapes in one place means the compiler catches a renamed or
 * misspelled message instead of it silently doing nothing at runtime.
 */

export type ExtensionMessage = { type: 'toggle-sidebar' }

export function isExtensionMessage(value: unknown): value is ExtensionMessage {
  return (
    typeof value === 'object' &&
    value !== null &&
    'type' in value &&
    (value as { type: unknown }).type === 'toggle-sidebar'
  )
}

/**
 * Send a message to a tab's content script.
 *
 * `chrome.tabs.sendMessage` rejects when nothing is listening — most commonly
 * on a restricted URL (chrome://, the Web Store, a PDF viewer) or on a tab
 * that was already open when the extension was installed or reloaded, since
 * content scripts are only injected on navigation. Neither case is a bug, so
 * report it rather than letting it surface as an unhandled rejection.
 */
export async function sendToTab(
  tabId: number,
  message: ExtensionMessage,
): Promise<boolean> {
  try {
    await chrome.tabs.sendMessage(tabId, message)
    return true
  } catch {
    console.info(
      '[react-chrome-extension] No content script in this tab. ' +
        'Reload the page, or check that the URL is one content scripts are allowed to run on.',
    )
    return false
  }
}
