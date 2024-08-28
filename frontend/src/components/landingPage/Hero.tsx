import React from 'react';
import '../styles/Hero.css';
import heroImage from '../assets/images/hero-image.png'


const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Start <span className='trade'>Trading </span>Today - Sign 
          up and begin buying and selling </h1>
          <h6>Never Pay Retail Again - Find great discounts on pre-owned items.<br></br>
            Trade Your Way - Barter for goods and services on our platform.</h6>
        <div className='search'>
          <input type='text'/>
          <button className='search-button'>Search</button>
        </div>
      </div>
      <div className="hero-image">
       
      <img src={ heroImage} alt="Trading" />
      </div>
    </section>
  );
};

export default Hero;
