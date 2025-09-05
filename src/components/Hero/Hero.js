import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            EKS Construction : Home Construction Experts | Best Building Contractors
          </h1>
          <p className="hero-subtitle">
            Feel the happiness in your Home - Build Your Dream Home with Expert Architects and Engineers
          </p>
          <div className="hero-buttons">
            <button className="hero-button primary" onClick={scrollToContact}>
              Get Started
            </button>
            <button className="hero-button secondary" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;