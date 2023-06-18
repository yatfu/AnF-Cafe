import React from 'react';
import '../styles/navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href='#' className='hamburger'>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
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
