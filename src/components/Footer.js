import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <nav className="footer-container">
      <h2>Kumar Panuganti</h2>
      <div className="social-icons">
        <a
          href="mailto:your.kpanuganti82@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://linkedin.com/in/kumar-panuganti-733412253"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
      <h4>+91 8074882816</h4>
    </nav>
  );
};

export default Footer;
