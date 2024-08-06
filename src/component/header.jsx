import React from 'react'
import { useContext } from 'react'
import { GlobalDataContext } from '../store/context'

function Header() {

  const{handleLogout} = useContext(GlobalDataContext)

  return (
    <div className="container">
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#" className="nav-link px-2 link-secondary">Home</a></li>
        <li><a href="#" className="nav-link px-2 link-dark">Features</a></li>
        <li><a href="#" className="nav-link px-2 link-dark">Pricing</a></li>
        <li><a href="#" className="nav-link px-2 link-dark">FAQs</a></li>
        <li><a href="#" className="nav-link px-2 link-dark">About</a></li>
      </ul>

      <div className="col-md-3 text-end">
        
        <button type="button" className="btn btn-primary" onClick={handleLogout}>Log Out</button>
      </div>
    </header>
  </div>
  )
}

export default Header