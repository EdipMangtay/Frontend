import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { SiteContext, SiteContextProvider } from './context/siteContext.jsx'

createRoot(document.getElementById('root')).render(
  <SiteContextProvider>
    <App />
  </SiteContextProvider>,
)
