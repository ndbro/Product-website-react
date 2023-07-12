import "./Header.css";
import React from 'react';
import logo from "../assets/logo.svg";
import darkmode from "../assets/darklightmode.svg";
import burgerMenu from "../assets/burger-menu.svg";

const Header = () => {
  return (
    <>
    <header>
      <nav className="navbar">
        <a href="#" className="nav-logo">
          <img src={logo} alt="logo" />
          <h2>Product</h2>
        </a>
        <ul className="list-items">
          <li className="list-item"><a href="#">Product</a></li>
          <li className="list-item"><a href="#">Customers</a></li>
          <li className="list-item"><a href="#">Pricing</a></li>
          <li className="list-item"><a href="#">Resources</a></li>
          <li className="list-item"><a href="#" className="signin">Sign in</a></li>
          <li className="list-item"><a href="#" className="signup">Sign up</a></li>
          <li><a href="#"><img src={darkmode} alt="darkmode" /></a></li>
          <li className="burgermenu"><a href="#"><img src={burgerMenu} alt="menu" /></a></li>
        </ul>
      </nav>
    </header>
    </>
  )
}

export default Header;