import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Residential Construction',
      description: 'Custom home construction with modern designs and quality materials. We build homes that bring happiness to your family.',
      icon: '🏠',
      features: ['Custom Home Design', 'Quality Materials', 'Modern Architecture', 'Energy Efficient'],
      price: 'Starting from ₹25 Lakh'
    },
    {
      id: 2,
      title: 'Commercial Buildings', 
      description: 'Professional commercial construction for offices and retail spaces with cutting-edge design and functionality.',
      icon: '🏢',
      features: ['Office Buildings', 'Retail Spaces', 'Industrial Projects', 'Modern Facilities'],
      price: 'Starting from ₹50 Lakh'
    },
    {
      id: 3,
      title: 'Interior Design',
      description: 'Complete interior design solutions for residential and commercial spaces that reflect your style and personality.',
      icon: '🎨',
      features: ['Space Planning', 'Color Coordination', 'Furniture Selection', 'Lighting Design'],
      price: 'Starting from ₹2 Lakh'
    },
    {
      id: 4,
      title: 'Architectural Planning',
      description: 'Comprehensive architectural planning and design services from concept to completion with innovative solutions.',
      icon: '📐',
      features: ['3D Modeling', 'Structural Design', 'Planning Permission', 'Technical Drawings'],
      price: 'Starting from ₹1 Lakh'
    },
    {
      id: 5,
      title: 'Project Management',
      description: 'End-to-end project management ensuring timely completion, budget control, and quality assurance.',
      icon: '📊',
      features: ['Timeline Management', 'Budget Control', 'Quality Assurance', 'Progress Monitoring'],
      price: 'Customized Packages'
    },
    {
      id: 6,
      title: 'Renovation & Remodeling',
      description: 'Transform your existing spaces into modern, functional areas that enhance your lifestyle and property value.',
      icon: '🔧',
      features: ['Kitchen Remodeling', 'Bathroom Renovation', 'Home Extensions', 'Space Optimization'],
      price: 'Starting from ₹5 Lakh'
    }
  ];

  return (
    <div className="services-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive construction solutions to make your dreams reality</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-section">
        <div className="container">
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <div className="service-price">{service.price}</div>
                <Link to="/contact" className="service-button">
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="services-cta">
        <div className="container">
          <h2>Ready to Start Your Project?</h2>
          <p>Contact us today for a free consultation and detailed quote</p>
          <div className="cta-buttons">
            <Link to="/contact" className="cta-button primary">
              Get Free Quote
            </Link>
            <a href="tel:+919876543210" className="cta-button secondary">
              Call Now: +91 98765 43210
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;