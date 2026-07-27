/**
 * A small, typed `chrome.storage.sync` layer.
 *
 * The options page writes these settings and the injected sidebar reacts to
 * them live, which is the usual shape of extension state: one writer, several
 * readers in different execution contexts.
 */

export type SidebarSide = 'left' | 'right'

export type Settings = {
  side: SidebarSide
  width: number
}

export const DEFAULT_SETTINGS: Settings = {
  side: 'right',
  width: 400,
}

const STORAGE_AREA = 'sync' as const

export async function getSettings(): Promise<Settings> {
  const stored = await chrome.storage[STORAGE_AREA].get(DEFAULT_SETTINGS)
  return { ...DEFAULT_SETTINGS, ...stored } as Settings
}

export async function saveSettings(patch: Partial<Settings>): Promise<void> {
  await chrome.storage[STORAGE_AREA].set(patch)
}

/**
 * Subscribe to setting changes from any context. Returns an unsubscribe
 * function, so React effects can clean up after themselves.
 */
export function onSettingsChanged(
  listener: (settings: Settings) => void,
): () => void {
  const handler = (
    changes: Record<string, chrome.storage.StorageChange>,
    areaName: string,
  ) => {
    if (areaName !== STORAGE_AREA) return
    const touched = Object.keys(changes).some((key) => key in DEFAULT_SETTINGS)
    if (!touched) return
    void getSettings().then(listener)
  }

  chrome.storage.onChanged.addListener(handler)
  return () => chrome.storage.onChanged.removeListener(handler)
}
