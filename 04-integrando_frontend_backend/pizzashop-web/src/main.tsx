import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app'
import { enableMWS } from './api/mocks'

enableMWS().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
})
