import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>SKS CONSTRUCTIONS</h3>
            <p>Home Construction Experts | Best Building Contractors</p>
            <p>Building your dreams with quality and excellence.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>Residential Construction</li>
              <li>Commercial Buildings</li>
              <li>Interior Design</li>
              <li>Architectural Planning</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>📧 info@sksconstructions.com</p>
            <p>📱 +91 98765 43210</p>
            <p>📍 Your City, India</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 SKS Constructions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;