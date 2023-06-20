import React from 'react'
import '../styles/hamburger.css'

export default function Hamburger() {
  return (
    <button className='hamburger'>
      <div className='bar'></div>
      <div className='bar'></div>
      <div className='bar'></div>
    </button>
  );
}