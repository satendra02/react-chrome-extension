import { useEffect, useState } from 'react'
import {
  DEFAULT_SETTINGS,
  getSettings,
  onSettingsChanged,
  type Settings,
} from './settings'

/**
 * Reads settings once, then keeps them in sync with `chrome.storage`.
 *
 * Because the subscription is global, the options page and the injected
 * sidebar stay in agreement without either knowing the other exists.
 */
export function useSettings(): Settings {
  const [settings, setSettings] = useState<Settings>(DEFAULT_SETTINGS)

  useEffect(() => {
    let active = true

    void getSettings().then((stored) => {
      if (active) setSettings(stored)
    })

    const unsubscribe = onSettingsChanged((next) => {
      if (active) setSettings(next)
    })

    return () => {
      active = false
      unsubscribe()
    }
  }, [])

  return settings
}
