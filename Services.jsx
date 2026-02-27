import React from "react";
import "./Services.css";
import website from "./images/web.png";
import UI from "./images/ui.png";
import consulting from "./images/consulting.png";

function Services() {
  return (
    <section className="services">
      <div className="services-header">
        <div>
          <p className="small-title">OUR SERVICES</p>
          <h1>
            What we Have to Offer <br />
            For your <span>SERVICES</span>
          </h1>
        </div>

        <div className="view-all">
          <span>View all services</span>
          <div className="arrow-btn">➜</div>
        </div>
      </div>

      <div className="services-cards">
        <div className="card">
          <div className="icon-box">
            <img src={website} alt="webicon" />
          </div>
          <h2>Web Development</h2>
          <p>
            nulla pariatur Ut enim ad minima veniam, quis nostrum enim ad
            minima
          </p>
          <a href="./Services.jsx" className="read-more">
            Read More →
          </a>
        </div>

        <div className="card">
          <div className="icon-box">
            <img src={UI} alt="ui design" />
          </div>
          <h2>Ui/ux design</h2>
          <p>
            nulla pariatur Ut enim ad minima veniam, quis nostrum enim ad
            minima
          </p>
          <a href="./Services.jsx" className="read-more">
            Read More →
          </a>
        </div>

        <div className="card">
          <div className="icon-box">
            <img src={consulting} alt="consulting" />
          </div>
          <h2>Consulting Pro Service</h2>
          <p>
            nulla pariatur Ut enim ad minima veniam, quis nostrum enim ad
            minima
          </p>
          <a href="./Services.jsx" className="read-more">
            Read More →
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;