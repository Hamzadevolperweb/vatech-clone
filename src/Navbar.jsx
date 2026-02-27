import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const menuItems = [
    { name: "Home" },
    { name: "About" },
    { name: "Services" },
    { name: "Projects" },
    { name: "News" },
    { name: "Pages" },
  ];

  return (
    <header className="navbar">
      <div className="container">
        
        {/* Logo */}
        <div className="logo">
          <h2>Vatech</h2>
        </div>

        {/* Navigation */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <ul>
            {menuItems.map((item, index) => (
              <li key={index} className="menu-item">
                <span onClick={() => toggleDropdown(index)}>
                  {item.name} ▾
                </span>

                {dropdownOpen === index && (
                  <ul className="dropdown">
                    <li>Option 1</li>
                    <li>Option 2</li>
                    <li>Option 3</li>
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Quote Button */}
        <div className="quote-btn">
          <a href="./Navbar.jsx">Get a quote →</a>
        </div>

        {/* Mobile Toggle */}
        <div className="menu-toggle" onClick={toggleMenu}>
          ☰
        </div>
      </div>
    </header>
  );
}

export default Navbar;
