import { useState } from 'react'
import Navbar from './Components/Navbar'
import Footer from './components/Footer'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="row">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hakkimizda" element={<About />} />
          <Route path="/iletisim" element={<Contact />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
