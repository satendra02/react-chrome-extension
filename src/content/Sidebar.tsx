import Frame from 'react-frame-component'
import App from '../components/App'
import appCss from '../styles/app.css?inline'
import sidebarCss from './sidebar.css?inline'

/*
 * `?inline` hands us the compiled CSS as a string instead of injecting it into
 * the host page. That is what lets the sidebar's styles live inside its iframe
 * — and it means the extension needs no `web_accessible_resources` entry for
 * stylesheets, so a hostile page can no longer probe for those files to
 * fingerprint the extension.
 */
const iframeStyles = `${sidebarCss}\n${appCss}`

/**
 * Everything React renders lives inside this iframe. Positioning the container
 * in the host page is the content script's job (see `index.tsx`), which keeps
 * host-page DOM mutation out of the component tree entirely.
 */
export default function Sidebar() {
  return (
    <Frame head={<style>{iframeStyles}</style>} title="React extension sidebar">
      <App surface="sidebar" />
    </Frame>
  )
}
