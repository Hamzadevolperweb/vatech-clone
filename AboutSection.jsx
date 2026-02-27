import React from "react";
import AboutS from './images/about.png';
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section className="about">
      <div className="about-container">
        
        {/* Left Image Section */}
        <div className="about-image">
          <div className="image-wrapper">
            <img src={AboutS} alt="About"/>
          </div>
        </div>

        {/* Divider Line */}
        <div className="divider"></div>

        {/* Right Content Section */}
        <div className="about-content">
          <h5 className="about-subtitle">ABOUT US</h5>
          <h1 className="about-title">
            MOST TRUSTED SERVICE <br /> SINCE 2000.
          </h1>

          <p className="about-text">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Ut enim ad minima veniam,
            quis nostrum exercitationem ullam corporis suscipit.
          </p>

          <div className="stats">
            <div className="stat-box">
              <h2>3K+</h2>
              <p>Project Completed</p>
            </div>

            <div className="stat-box">
              <h2>2K+</h2>
              <p>Happy Customers</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;