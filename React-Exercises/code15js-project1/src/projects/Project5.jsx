import React, { useState } from 'react';
import './styles.css'; // Import your styles

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar((prevShowSidebar) => !prevShowSidebar);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  return (
    <>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <i className="fas fa-bars"></i>
      </button>
      <aside className={`sidebar ${showSidebar ? 'show-sidebar' : ''}`}>
        <div className="sidebar-header">
          <img src="logo.svg" className="logo" alt="" />
          <button className="close-btn" onClick={closeSidebar}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <ul className="links">
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
      </aside>
    </>
  );
};

export default Sidebar;
