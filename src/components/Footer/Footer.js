import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>EKS Construction</h3>
            <p className="footer-tagline">Feel the happiness in your Home</p>
            <p>Home Construction Experts | Best Building Contractors</p>
            <p>Building your dreams with quality and excellence since 2010.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook" title="Facebook">📘</a>
              <a href="#" aria-label="Instagram" title="Instagram">📷</a>
              <a href="#" aria-label="LinkedIn" title="LinkedIn">💼</a>
              <a href="#" aria-label="YouTube" title="YouTube">📺</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Our Services</h4>
            <ul>
              <li>Residential Construction</li>
              <li>Commercial Buildings</li>
              <li>Interior Design</li>
              <li>Architectural Planning</li>
              <li>Project Management</li>
              <li>Renovation & Remodeling</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Us</h4>
            <div className="contact-info">
              <p>📧 info@eksconstruction.com</p>
              <p>📱 +91 98765 43210</p>
              <p>📞 +91 80123 45678</p>
              <p>📍 123 Construction Avenue<br/>Your City, State 123456<br/>India</p>
            </div>
          </div>
        </div>
        
        <div className="contact-form-section">
          <h3>Get In Touch</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
            <textarea
              name="message"
              placeholder="Tell us about your project..."
              rows="4"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 EKS Construction. All rights reserved. | Feel the happiness in your Home | Made with ❤ in India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;