import React from "react";
import "./TeamSection.css";
import team1 from "./images/team.png";
import team2 from "./images/team2.png";
import team3 from "./images/team3.png";

const TeamSection = () => {
  return (
    <section className="team">
      <h4>DEDICATED TEAM</h4>
      <h1>PROFESSIONAL TEAM MEMBERS</h1>

      <div className="team-container">
        <div className="card">
          <img src={team1} alt="team1" />
          <div className="info">
            <h3>Rianne Russell</h3>
            <p>Designer</p>
          </div>
        </div>

        <div className="card">
          <img src={team2} alt="team2" />
          <div className="info">
            <h3>Kathryn Murphy</h3>
            <p>Developer</p>
          </div>
        </div>

        <div className="card">
          <img src={team3} alt="team3" />
          <div className="info">
            <h3>John Smith</h3>
            <p>Manager</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;