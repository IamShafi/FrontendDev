import React, { useState } from 'react';
import './styles.css'; // Import your styles

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks((prevShowLinks) => !prevShowLinks);
  };

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src="./logo.svg" className="logo" alt="logo" />
          <button className="nav-toggle" onClick={toggleLinks}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className={`links ${showLinks ? 'show-links' : ''}`}>
          <li>
            <a href="index.html">home</a>
          </li>
          <li>
            <a href="about.html">about</a>
          </li>
          <li>
            <a href="projects.html">projects</a>
          </li>
          <li>
            <a href="contact.html">contact</a>
          </li>
        </ul>
        <ul className="social-icons">
          <li>
            <a href="https://www.twitter.com">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <i className="fab fa-behance"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <i className="fab fa-sketch"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
