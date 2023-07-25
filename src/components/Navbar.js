import React from 'react';
import '../styles/navbar.css';
import Hamburger from './Hamburger.js'

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href='/'><h1 className="nav-logo">A<span>&</span>F</h1></a>
      <ul className="nav-links">
        <li className='nav-link'><a href='#'>menu</a></li>
        <li className='nav-link'><a href='#'>our story</a></li>
        <li className='nav-link'><a href='#'>order online</a></li>
      </ul>
      <Hamburger />
    </nav>
  );
};
