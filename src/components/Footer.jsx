import React from "react";
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <a
          href="https://github.com/makenziewakefield"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/makenzie-wakefield/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://flowcv.com/resume/4m0ip87qek"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Resume"
        >
          <i className="fas fa-file-alt"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
