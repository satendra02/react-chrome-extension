import { sendToTab } from '../lib/messages'

/**
 * The toolbar button has no popup, so Chrome delivers the click here along
 * with the tab it happened on — there is no need to query for the active tab
 * the way the pre-MV3 version of this boilerplate did.
 */
chrome.action.onClicked.addListener((tab) => {
  if (typeof tab.id !== 'number') return
  void sendToTab(tab.id, { type: 'toggle-sidebar' })
})
