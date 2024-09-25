import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyle } from './components/styled/GlobalStyle.js'

createRoot(document.getElementById('root')).render(
  <GlobalStyle>
    <App />
  </Globa>,
)
