import React from "react";
import "./Hero.css";
import crculer from "./images/circle.png";
function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">

        {/* Left Content */}

        <div className="hero-text">
          <h1>
            Solutions For  <span>Tomorrow</span>
          </h1>
          <h2>Was Challenges</h2>
        </div>
         <div className="hero-image">
          <img src={crculer} alt="circle" />
        </div>
        </div>
      
      

      
    </section>
  );
}

export default Hero;


