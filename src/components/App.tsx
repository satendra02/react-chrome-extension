import logo from '../assets/logo.svg'

/**
 * Which of the extension's rendering surfaces this tree is mounted in.
 * The same component is reused by the injected sidebar, the options page and
 * the optional popup.
 */
export type Surface = 'sidebar' | 'popup' | 'options'

type AppProps = {
  surface: Surface
}

/**
 * Note that this component deliberately does not import its own stylesheet.
 * Each surface supplies `styles/app.css` itself, because the sidebar has to
 * inject it *inside* its iframe rather than into the host page. See
 * `src/content/Sidebar.tsx`.
 */
export default function App({ surface }: AppProps) {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="" />
        <h1 className="app-title">Welcome to React</h1>
      </header>
      <p className="app-intro">
        Rendered in the <code>{surface}</code> surface. Edit{' '}
        <code>src/components/App.tsx</code> and save — Vite hot-reloads it in
        place, no extension reload needed.
      </p>
    </div>
  )
}
