import React, { Component } from 'react';
import "./Contents.css";
import cardImage1 from "../assets/contents-img1.svg";
import cardImage2 from "../assets/contents-img2.svg";
import cardImage3 from "../assets/contents-img3.svg";
import image from "../assets/contents-image.svg";


export default class Contents extends Component {
  render() {
    return (
      <>
      <div className="contents">
        <h2>Contents Strategies</h2>
        <p>We focus on ergonomics and meeting you where you work. It's only a keystroke away. </p>

        <div className="cards-wrapper">
          <div className="content-card">
            <img src={cardImage1} alt="img" />
            <p>By Wahid Ari |  03 March 2019</p>
            <h3>Increasing Prosperity With Positive Thinking</h3>
          </div>

          <div className="content-card">
            <img src={cardImage2} alt="img" />
            <p>By Wahid Ari |  03 March 2019</p>
            <h3>Motivation Is The First Step To Success</h3>
          </div>

          <div className="content-card">
            <img src={cardImage3} alt="img" />
            <p>By Wahid Ari |  03 March 2019</p>
            <h3>Success Steps For Your Personal Or Business</h3>
          </div>
        </div>
      </div>
      <img src={image} alt="image"  className='contents-image'/>
      </>
    )
  }
}
