import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            DEEJOS : Home Construction Experts | Best Building Contractors
          </h1>
          <p className="hero-subtitle">
            Build Your Dream Home with Expert Architects and Engineers
          </p>
          <button className="hero-button">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
