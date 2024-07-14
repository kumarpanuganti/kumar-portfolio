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
    setIsOpen(false);
    window.scrollTo(0, 0);
    navigate(path);
  };

  return (
    <nav className="nav-container overflow-hidden">
      <div className="nav-container-logo">
        <h1
          className="nav-container-logo-hdng"
          onClick={() => handleNavigation("/")}
        >
          KUMAR
        </h1>
      </div>
      <ul
        className={isOpen ? "nav-container-list active" : "nav-container-list"}
      >
        <li>
          <Link
            to="/"
            className="nav-link"
            onClick={() => handleNavigation("/")}
          >
            <h5 className="nav-link-hdng">Home</h5>
          </Link>
        </li>
        <li>
          <Link
            to="/about-me"
            className="nav-link"
            onClick={() => handleNavigation("/about-me")}
          >
            <h5 className="nav-link-hdng">About</h5>
          </Link>
        </li>
        <li>
          <Link
            to="/my-work"
            className="nav-link"
            onClick={() => handleNavigation("/my-work")}
          >
            <h5 className="nav-link-hdng">My Work</h5>
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="nav-link"
            onClick={() => handleNavigation("/contact")}
          >
            <h5 className="nav-link-hdng">Contact</h5>
          </Link>
        </li>
      </ul>

      <button className="nav-container-btn" onClick={toggleNavbar}>
        {isOpen ? <FaTimes /> : <FaBars />}
        {/* {isOpen ? "C" : "O"} */}
      </button>
    </nav>
  );
};

export default Navbar;
