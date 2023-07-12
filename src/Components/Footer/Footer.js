import React from 'react';
import "./Footer.css";
import footerLogo from "../assets/logo.svg";
import instagram from "../assets/footericon.svg";
import facebook from "../assets/footericon2.svg";
import twiter from "../assets/footericon3.svg";

const Footer = () => {
  return (
    <>
    <footer className='footer'>
      <div className="links">
        <a href="#" className='footer-logo'>
        <img src={footerLogo} alt="logo" />
        <h2>Product</h2>
        </a>
        <img src={instagram} alt="instagram" width={'40px'}/>
        <img src={facebook} alt="facebook" width={'40px'}/>
        <img src={twiter} alt="twiter" width={'40px'}/>
      </div>
      <div className="resource">
        <h2>Resource</h2>
        <p>About Us</p>
        <p>Blog</p>
        <p>Contact</p>
        <p>FAQ</p>
      </div>
      <div className="legal">
        <h2>Legal Stuff</h2>
        <p>Disclaimer</p>
        <p>Financing</p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
      </div>
      <div className="footer-input">
        <h4>knowing you're always on the best energy deal. </h4>
        <input type="text"  className='footer-input'/>
        <button className='footerBtn'>Sign up now</button>
      </div>
    </footer>
    </>
  )
}

export default Footer;