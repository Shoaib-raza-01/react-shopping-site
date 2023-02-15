import React from 'react'
import cartLogo from '../Images/shopping-cart-logo.png'
import logo from '../Images/logo.png'
import '../Styles/Navbar.css'
import { Link } from 'react-router-dom'
import { CartProvider } from 'react-use-cart'

function Navbar(props) {
  const handleOnChange = (event) => {
    const query = event.target.value;
    props.categoryOfProd(query)
  }
  return (
    <>
      <CartProvider>
        <nav className="navbar navbar-expand-lg bg-light">
          <Link to="/">
            <img src={logo} alt="Logo" width="100" height="60" className="d-inline-block align-text-top logo" /></Link>
          <form className="d-flex" role="search">
            <input className="me-2 search-inpt" type="search" placeholder="Search" aria-label="Search" onChange={handleOnChange} />
          </form>
          <Link to="/login">
            <button className='login-btn'>Login</button>
          </Link>
          <p className="more">More</p>
          <Link to="/cart" className='cart'>
            <img src={cartLogo} alt="Logo" width="40" height="40" className="d-inline-block align-text-top mx-3" />
            <p className="txt">Cart</p>
          </Link>

        </nav>
      </CartProvider>
    </>
  )
}

export default Navbar
