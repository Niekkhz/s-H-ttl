import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Nehmen wir an, du hast eine separate CSS-Datei für die Navbar

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <img src="./src/assets/logo.jpg" alt="Logo" className="logo" />
      <div className={`menu-icon ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <Link to="/home" onClick={() => setIsOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/menu" onClick={() => setIsOpen(false)}>
            Menu
          </Link>
        </li>
        <li>
          <Link to="/events" onClick={() => setIsOpen(false)}>
            Events
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
