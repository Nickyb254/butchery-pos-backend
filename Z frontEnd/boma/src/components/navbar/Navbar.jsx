import React from 'react';
import './navbar.css';
import logo from '../assets/logo.png';
import loginIcon from '../assets/login_icon.png';


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>BOMA DIETS</p>
      </div>
      <div>
        <ul className='nav-menu'>
          <li>HOME</li>
          <li>PRODUCTS</li>
          <li>OFFERS</li>
          <li>CONTACT US</li>
        </ul>
      </div>
      <div className="nav-login-cart">
        <img src={loginIcon} alt="" />
      </div>
    </div>
  )
}

export default Navbar;