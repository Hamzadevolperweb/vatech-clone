import React from "react";
import office from "./images/banerhome.png";
import girl from "./images/banner2 (2).png";
import "./Hero.css";

function Hero() {
  return (
  <div className="hero">
  <img src={office} alt="Office" className="office-img" />
  
  <div className="girl-wrapper">
    <img src={girl} alt="Girl" className="girl-img" />
  </div>
</div>
  );
}

export default Hero;
