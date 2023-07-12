import React from 'react';
import "./Intro.css";
import icon1 from "../assets/cardicon1.svg";
import icon2 from "../assets/cardicon2.svg";
import icon3 from "../assets/cardicon3.svg";
import icon4 from "../assets/cardicon4.svg";
// import bg from "../assets/mainbg.png";
// intro images
import managmanet from "../assets/managment.svg";
import customer from "../assets/customer.svg";
import customerIcon1 from "../assets/customer-icon1.svg";
import customerIcon2 from "../assets/customer-icon2.svg";
import customerIcon3 from "../assets/customer-icon3.svg";
import collImage from "../assets/coll-image.svg";




const Intro = () => {
  return (
    <>
    <div className='wrapper'>
        <h2>Product was Built Specifically for You</h2>
        <div className="cards">
        <div className="card">
          <img className='cardImg'  src={icon1} alt="icon" />
          <h3>First click tests</h3>
          <p>While most people enjoy casino gambling,</p>
        </div>
        <div className="card">
          <img className='cardImg'  src={icon2} alt="icon" />
          <h3>Design surveys</h3>
          <p>Sports betting, lottery and bingo playing for the fun</p>
        </div>
        <div className="card">
          <img className='cardImg'  src={icon3} alt="icon" />
          <h3>Preference tests</h3>
          <p>The Myspace page defines the individual.</p>
        </div>
        <div className="card">
          <img className='cardImg' src={icon4} alt="icon" />
          <h3>Five second tests</h3>
          <p>Personal choices and the overall personality of the person. </p>
        </div>
        </div>
        <button className='intro-btn'>SIGN UP NOW</button>
    </div>

    {/* Managment start */}

    <div className="intro">

      <div className="managment">
        <div className="text">
          <p>Effortless Validation for</p>
          <h2>Management</h2>
          <h4 className='mang-body'>Accessory makers</h4>
          <p>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun</p>
          <h4>Alterationists</h4>
          <p>If you are looking for a new way to promote your business that won’t cost you more money, </p>
        </div>
        <div className="image">
          <img className='manageImage' src={managmanet} alt="managment" />
        </div>
      </div>

      <div className="customer">
        <div className="image">
          <img className='custumeImage' src={customer} alt="customer" />
        </div>
        <div className="customer-text">
          <p>Easier decision making for</p>
          <h2>Customer Support</h2>
          <p>The Myspace page defines the individual, his or her characteristics, traits, personal choices and the overall personality of the person. </p>
          <div className="customer-text-body">
            <div className="body-text">
              <img src={customerIcon1} alt="icon" /> 
              <p>Never worry about overpaying for your energy again. </p>
            </div>
            <div className="body-text">
              <img src={customerIcon2} alt="icon" /> 
              <p>We will only switch you to energy companies that we trust and will treat you right.</p>
            </div>
            <div className="body-text">
              <img src={customerIcon3} alt="icon" /> 
              <p>We track the markets daily and know where the savings are.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="collaborative">
        <div className="coll-text">
          <p>Optimisation for</p>
          <h2>Collaborative</h2>
          <p>Few would argue that, despite the advancements of feminism over the past three decades, women still face a double standard when it comes to their behavior. </p>
          <h4>Accessory makers</h4>
          <p>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun</p>
          <h4>Alterationists</h4>
          <p>If you are looking for a new way to promote your business that won’t cost you more money, </p>
        </div>
        <div className="image">
          <img className='collImage' src={collImage} alt="image" />
        </div>
      </div>

    </div>

    </>
  )
}

export default Intro