import React, { Component } from 'react';
import "./Main.css";
import mainImage from "../assets/mainimage.svg";
import mainPlayIcon from "../assets/mainplayicon.svg";

export default class Main extends Component {
  render() {
    return (
      <>
      <main className="main">
        <div className="text-wrapper">
          <h2>Work  at the speed of thought</h2>
          <p>Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience.</p>
          <button className='getstarted'>Get started</button>
          <a href="#" className='watchBtn'>
            <img src={mainPlayIcon} alt="Playicon" />
            Watch the Video
          </a>
        </div>
        <div className="image-wrapper">
          <img className='main-image' src={mainImage} alt="Main image" />
        </div>
      </main>
      </>
    )
  }
}
