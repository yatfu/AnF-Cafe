import React from 'react'
import '../styles/card.css'

export default function Card(props) {
  return (
    <>
      <div className='card'>
        <img src={props.image} alt='coffee with strawberry waffles' />
        <div className='card-overlay'></div>
        <div className='card-content'>
          <h2>{props.header}</h2>
          <p>{props.subtext}</p>
        </div>
      </div>
    </>
  );
}

//      <img src={Photo1} alt='cafe'></img>