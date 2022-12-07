import React from 'react';
import './HeroAccomodationStyles.css';

function HeroAccomodation() {
  return (
    <>
      <div className={props.cName}>
        <img alt="Home Picture" src={props.heroImg}/>
        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnClass}>
            {props.buttonText}
          </a>
        </div>
      </div>
    </>
  )
}

export default HeroAccomodation;