import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
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
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will contact you within 24 hours.');
    setFormData({ 
      name: '', 
      email: '', 
      phone: '', 
      projectType: '', 
      budget: '', 
      message: '' 
    });
  };

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Feel the happiness in your Home - Let's build your dreams together</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p>
                Ready to start your construction project? We'd love to hear from you. 
                Contact us today for a free consultation and detailed quote.
              </p>
              
              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon">📱</div>
                  <div className="info-content">
                    <h4>Phone Numbers</h4>
                    <p>+91 98765 43210</p>
                    <p>+91 80123 45678</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">📧</div>
                  <div className="info-content">
                    <h4>Email Address</h4>
                    <p>info@eksconstruction.com</p>
                    <p>projects@eksconstruction.com</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">📍</div>
                  <div className="info-content">
                    <h4>Office Address</h4>
                    <p>123 Construction Avenue</p>
                    <p>Your City, State 123456</p>
                    <p>India</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">⏰</div>
                  <div className="info-content">
                    <h4>Working Hours</h4>
                    <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                    <p>Sunday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container">
              <h2>Send Us a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Your Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="projectType">Project Type</label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Project Type</option>
                      <option value="residential">Residential Construction</option>
                      <option value="commercial">Commercial Building</option>
                      <option value="interior">Interior Design</option>
                      <option value="renovation">Renovation</option>
                      <option value="architecture">Architecture Planning</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="budget">Estimated Budget</label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Budget Range</option>
                    <option value="under-10">Under ₹10 Lakh</option>
                    <option value="10-25">₹10 - ₹25 Lakh</option>
                    <option value="25-50">₹25 - ₹50 Lakh</option>
                    <option value="50-100">₹50 Lakh - ₹1 Crore</option>
                    <option value="above-100">Above ₹1 Crore</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Project Details *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-button">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map or Additional Info */}
      <section className="additional-info">
        <div className="container">
          <div className="info-grid">
            <div className="why-choose">
              <h3>Why Choose EKS Construction?</h3>
              <ul>
                <li>15+ Years of Experience</li>
                <li>500+ Happy Clients</li>
                <li>Quality Materials & Workmanship</li>
                <li>On-Time Project Delivery</li>
                <li>Transparent Pricing</li>
                <li>24/7 Customer Support</li>
              </ul>
            </div>
            <div className="process">
              <h3>Our Process</h3>
              <div className="process-steps">
                <div className="step">
                  <span className="step-number">1</span>
                  <p>Initial Consultation & Site Visit</p>
                </div>
                <div className="step">
                  <span className="step-number">2</span>
                  <p>Design & Planning Phase</p>
                </div>
                <div className="step">
                  <span className="step-number">3</span>
                  <p>Contract & Approval</p>
                </div>
                <div className="step">
                  <span className="step-number">4</span>
                  <p>Construction & Regular Updates</p>
                </div>
                <div className="step">
                  <span className="step-number">5</span>
                  <p>Final Inspection & Handover</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;