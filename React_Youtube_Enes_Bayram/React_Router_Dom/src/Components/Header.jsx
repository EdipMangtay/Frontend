import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <Link className="link" to="/" >Anasayfa</Link>
      <Link className="link" to="/about" >Hakkımızda</Link>
      <Link className="link" to="/products" >Ürünlerimiz</Link>
      <Link className="link" to="/contact" >iletişim</Link>

    </div>
  )
}

export default Header
