import React from 'react';

const NavbarComponent = () => {
  return (
    <nav className="navbar">
      <a href='#' class='hamburger'>
        <span class='bar'></span>
        <span class='bar'></span>
        <span class='bar'></span>
      </a>
      <div className="nav-logo">AnF</div>
      <ul className="nav-links">
        <li>menu</li>
        <li>location</li>
        <li>about</li>
        <li>order online</li>
      </ul>
      <button className="nav-contact-button">hamburger</button>
    </nav>
  );
};

export default Navbar;