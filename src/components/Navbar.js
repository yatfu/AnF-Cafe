import React from 'react';
import '../styles/navbar.css';
import Hamburger from './Hamburger.js'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">AnF</div>
      <ul className="nav-links">
        <li><a href='#'>menu</a></li>
        <li><a>location</a></li>
        <li><a>about</a></li>
        <li><a>order online</a></li>
      </ul>
      <Hamburger />
    </nav>
  );
};
