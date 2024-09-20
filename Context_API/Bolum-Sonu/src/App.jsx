import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import SiteRoutes from './SiteRoutes'
import { useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate()
 

  

  

  return (
    <>
      <Navbar user={user} handleLogout={handleLogout} />
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <SiteRoutes handleLogin={handleLogin} user={user} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
