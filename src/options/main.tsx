import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Options from './Options'
import './options.css'

const container = document.getElementById('root')
if (!container) throw new Error('Options mount point #root is missing')

createRoot(container).render(
  <StrictMode>
    <Options />
  </StrictMode>,
)
