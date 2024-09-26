import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter> 



  /*
  TODO: bootstrap 
  TODO: react-router Dom kur
  TODO Ana Sayfa, her ap için kategori
  TODO .env yapisi oluştur
  TODO: Container ve Row için component oluştur 
  TODO: Cat API kullan
  TODO: Cat api yapısını fetch ile kullan
  TODO: Cat api Custom hook yap
  TODO: CAT API kategori detay sayfası yap
  TODO: UI Düzenlemesi yap
  TODO: Axios ile ayni işlemi yap
  TODO: RTK Query ile ayni işlemi yap
  */  

)
