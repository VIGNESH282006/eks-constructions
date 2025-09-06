import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  // PUBLIC_URL will resolve to '/eks-constructions' in production and '' locally
  const videoSrc = `${process.env.PUBLIC_URL}/videos/hero-bg.mp4`;

  return (
    <section className="hero" id="home">
      {/* Video Background */}
      <video
        className="hero-bg-video"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

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
            <Link to="/contact" className="hero-button secondary" onClick={scrollToContact}>
              GET QUOTE
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
