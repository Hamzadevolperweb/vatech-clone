import React, { useState } from "react";
import "./CaseStudy.css";
import img1 from "./images/case (1).png";
import img2 from "./images/case.png";
import img3 from "./images/case2.png";

function CaseStudy() {
  const [activeFilter, setActiveFilter] = useState("All");

  // Sample case data with categories
  const cases = [
    { img: img1, category: "Business" },
    { img: img2, category: "Consulting" },
    { img: img3, category: "Digital Marketing" },
  ];

  // Filtered cases based on active filter
  const filteredCases =
    activeFilter === "All"
      ? cases
      : cases.filter((c) => c.category === activeFilter);

  return (
    <section className="case-study">
      <div className="case-header">
        <div>
          <p className="small-title">CASE STUDY</p>
          <h1 className="main-title">EFFECTIVE CASE STUDY</h1>
        </div>

        <div className="filter-menu">
          {["All", "Business", "Consulting", "Digital Marketing"].map(
            (filter) => (
              <span
                key={filter}
                className={activeFilter === filter ? "active" : ""}
                onClick={() => setActiveFilter(filter)}
                style={{ cursor: "pointer" }}
              >
                {filter}
              </span>
            )
          )}
        </div>
      </div>

      <div className="case-cards">
        {filteredCases.map((c, index) => (
          <div className="card" key={index}>
            <img src={c.img} alt={`case${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default CaseStudy;