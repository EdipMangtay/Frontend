import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter } from 'react-router-dom'
import { ThemeContextProvider } from './Context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <ThemeContextProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </ThemeContextProvider>
)
