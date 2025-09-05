import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              EKS Construction
            </h1>
            <h2 className="hero-subtitle">
              Feel the happiness in your Home
            </h2>
            <p className="hero-description">
              We are expert home construction contractors dedicated to building your dream home with quality, precision, and care. Your happiness is our success.
            </p>
            <div className="hero-buttons">
              <Link to="/services" className="hero-button primary">
                Our Services
              </Link>
              <Link to="/contact" className="hero-button secondary">
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brief About Section */}
      <section className="brief-about">
        <div className="container">
          <h2>About EKS Construction</h2>
          <div className="about-grid">
            <div className="about-text">
              <p>
                <strong>EKS Construction</strong> is a leading construction company specializing in residential and commercial projects. We bring years of experience, skilled craftsmanship, and innovative solutions to every project.
              </p>
              <p>
                Our mission is simple: to build homes that bring happiness and create spaces where memories are made. We use only the finest materials and employ the most skilled professionals in the industry.
              </p>
              <Link to="/about" className="learn-more-btn">
                Learn More About Us →
              </Link>
            </div>
            <div className="about-stats">
              <div className="stat">
                <h3>15+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>500+</h3>
                <p>Happy Clients</p>
              </div>
              <div className="stat">
                <h3>1000+</h3>
                <p>Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="quick-contact">
        <div className="container">
          <h2>Ready to Start Your Project?</h2>
          <p>Contact us today for a free consultation and let's build your dream together.</p>
          <div className="contact-info-quick">
            <div className="contact-item">
              <span className="icon">📱</span>
              <div>
                <h4>Call Us</h4>
                <p>+91 98765 43210</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="icon">📧</span>
              <div>
                <h4>Email Us</h4>
                <p>info@eksconstruction.com</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="icon">📍</span>
              <div>
                <h4>Visit Us</h4>
                <p>Your City, India</p>
              </div>
            </div>
          </div>
          <Link to="/contact" className="contact-btn">
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;