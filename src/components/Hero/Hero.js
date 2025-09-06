import React from 'react';
import { Link } from 'react-router-dom';
import videoSrc from '../../assets/videos/hero-bg.mp4';
import './Hero.css';

const Hero = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      {/* Video Background */}
      <video
        className="hero-bg-video"
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />

      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">EKS Construction</h1>
          <h2 className="hero-subtitle">Feel the happiness in your Home</h2>
          <p className="hero-description">
            We are expert home construction contractors dedicated to building your dream home with quality, precision, and care. Your happiness is our success.
          </p>
          <div className="hero-buttons">
            <Link to="/services" className="hero-button primary">
              OUR SERVICES
            </Link>
            <button onClick={scrollToContact} className="hero-button secondary">
              GET QUOTE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
