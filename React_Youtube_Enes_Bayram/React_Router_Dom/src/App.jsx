
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'
import NotFoundPages from './pages/NotFoundPages'
import Header from './Components/Header'
import employeeAbout from './pages/employeeAbout'
import CompanyAbout from './pages/CompanyAbout'
import ProductDetails from './pages/ProductDetails'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} >
          <Route path='employee' element={<employeeAbout />} />
          <Route path='company' element={<CompanyAbout />} />
        </Route>
        <Route path='/products' element={<Products />} />
        <Route path ='/product-details/:id' element={<ProductDetails />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFoundPages />} />
      </Routes>
    </>
  );
}

export default App
