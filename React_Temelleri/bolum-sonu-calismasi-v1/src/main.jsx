import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "@picocss/pico"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
// Yapılacak islemler:
// TODO: 1 Ana Görsel olsun
// TODO: hemen altta 5 adet küçük görsel
// TODO: küçük görsellere tıklandığında ana görsel değişsin
// TODO: Görseller Loremden gelsin
// TODO Default oalrak 100 nolu ID alınsın
// TODO :Gorseller Array olarak [200,201,202,203,204] şeklinde gelsin
// TODO: Pico CSS kullanılsın