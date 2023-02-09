import React from 'react'
import cartLogo from '../Images/shopping-cart-logo.png'
import logo from '../Images/logo.png'
import '../Styles/Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link to="/">
            <img src={logo} alt="Logo" width="100" height="60" className="d-inline-block align-text-top logo" /></Link>
          {/* <a className="navbar-brand" href="/">Become a Seller</a> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex" role="search">
              <input className="form-control me-2 search-inpt" type="search" placeholder="Search" aria-label="Search" />
            </form>
          <Link to="/login">
          <button className='login-btn'>Login</button>
          </Link>
          <p className="more">More</p>
          <Link to = "/cart" className='cart'>
          <img src={cartLogo} alt="Logo" width="40" height="40" className="d-inline-block align-text-top mx-3" />
          <p className="txt">Cart</p>
          </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
