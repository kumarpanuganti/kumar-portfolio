import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="nav-container">
      <h1 className="nav-container-hdng">KUMAR</h1>
      <div className={isOpen ? "nav-container-list active" :"nav-container-list"}>
        <h5>Home</h5>
        <h5>About</h5>
        <h5>My Work</h5>
        <h5>Skills</h5>
        <h5>Contact</h5>
      </div>
        <button className="nav-btn" onClick={toggleNavbar}>{isOpen ? <FaTimes /> : <FaBars />}</button>
    </nav>
  );
};

export default Navbar;
