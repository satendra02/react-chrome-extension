import { useState } from 'react'
import App from '../components/App'
import { saveSettings, type SidebarSide } from '../lib/settings'
import { useSettings } from '../lib/useSettings'

const SIDES: readonly SidebarSide[] = ['left', 'right']

const MIN_WIDTH = 280
const MAX_WIDTH = 720

/**
 * A working `chrome.storage.sync` example.
 *
 * `useSettings` re-renders from storage whenever it changes, so an open
 * sidebar and this page can never disagree about the current values.
 */
export default function Options() {
  const { side, width } = useSettings()

  // While the slider is being dragged its value is held locally and nothing is
  // written. `chrome.storage.sync` allows only 120 writes per minute, and a
  // range input fires on every step — a single drag across this range would
  // blow through the quota and start throwing. The value is committed once,
  // when the user lets go.
  const [draftWidth, setDraftWidth] = useState<number | null>(null)
  const shownWidth = draftWidth ?? width

  const commitWidth = () => {
    if (draftWidth !== null && draftWidth !== width) {
      void saveSettings({ width: draftWidth })
    }
    setDraftWidth(null)
  }

  return (
    <main className="options">
      <h1 className="options-heading">Extension options</h1>
      <p className="options-note">
        These are stored in <code>chrome.storage.sync</code> and applied to the
        injected sidebar immediately — try it with the sidebar open.
      </p>

      <fieldset className="options-field">
        <legend>Sidebar position</legend>
        {SIDES.map((value) => (
          <label key={value} className="options-radio">
            <input
              type="radio"
              name="side"
              value={value}
              checked={side === value}
              onChange={() => void saveSettings({ side: value })}
            />
            {value === 'left' ? 'Left' : 'Right'}
          </label>
        ))}
      </fieldset>

      <div className="options-field">
        <label className="options-label" htmlFor="width">
          Sidebar width — {shownWidth}px
        </label>
        <input
          id="width"
          type="range"
          min={MIN_WIDTH}
          max={MAX_WIDTH}
          step={10}
          value={shownWidth}
          onChange={(event) => setDraftWidth(Number(event.target.value))}
          onPointerUp={commitWidth}
          onKeyUp={commitWidth}
          onBlur={commitWidth}
        />
      </div>

      <section className="options-preview">
        <h2 className="options-subheading">Preview</h2>
        <div className="options-preview-frame" style={{ width: shownWidth }}>
          <App surface="options" />
        </div>
      </section>
    </main>
  )
}
