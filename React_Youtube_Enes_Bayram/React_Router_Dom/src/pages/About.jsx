import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function About() {
  return (
    <div>
      <h1>About</h1>
      <hr />
      <Link to='/about/employee'>Employee</Link>
      <Link to='/about/company'>Company</Link>


      <Outlet />  
    </div>
  )
}

export default About
