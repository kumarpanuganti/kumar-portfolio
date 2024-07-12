import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const handleNavigation = (path) => {
    window.scrollTo(0, 0);
    navigate("/");
  };
  return (
    <nav className="nav-container">
      <div className="nav-container-logo">
        <h1 className="nav-container-hdng" onClick={handleNavigation}>
          KUMAR
        </h1>
      </div>
      <div
        className={isOpen ? "nav-container-list active" : "nav-container-list"}
      >
        <Link to="/" className="nav-link" onClick={handleNavigation}>
          <h5>Home</h5>
        </Link>
        <Link to="/about-me" className="nav-link" onClick={handleNavigation}>
          <h5>About</h5>
        </Link>
        <Link to="/my-work" className="nav-link" onClick={handleNavigation}>
          <h5>My Work</h5>
        </Link>
        <Link to="/contact" className="nav-link" onClick={handleNavigation}>
          <h5>Contact</h5>
        </Link>
      </div>
      <button className="nav-btn" onClick={toggleNavbar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
};

export default Navbar;
