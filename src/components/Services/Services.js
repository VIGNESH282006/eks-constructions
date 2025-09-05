import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Residential Construction',
      description: 'Custom home construction with modern designs and quality materials. We build homes that bring happiness to your family.',
      icon: '🏠',
      features: ['Custom Home Design', 'Quality Materials', 'Modern Architecture', 'Energy Efficient']
    },
    {
      id: 2,
      title: 'Commercial Buildings', 
      description: 'Professional commercial construction for offices and retail spaces with cutting-edge design and functionality.',
      icon: '🏢',
      features: ['Office Buildings', 'Retail Spaces', 'Industrial Projects', 'Modern Facilities']
    },
    {
      id: 3,
      title: 'Interior Design',
      description: 'Complete interior design solutions for residential and commercial spaces that reflect your style and personality.',
      icon: '🎨',
      features: ['Space Planning', 'Color Coordination', 'Furniture Selection', 'Lighting Design']
    },
    {
      id: 4,
      title: 'Architectural Planning',
      description: 'Comprehensive architectural planning and design services from concept to completion with innovative solutions.',
      icon: '📐',
      features: ['3D Modeling', 'Structural Design', 'Planning Permission', 'Technical Drawings']
    },
    {
      id: 5,
      title: 'Project Management',
      description: 'End-to-end project management ensuring timely completion, budget control, and quality assurance.',
      icon: '📊',
      features: ['Timeline Management', 'Budget Control', 'Quality Assurance', 'Progress Monitoring']
    },
    {
      id: 6,
      title: 'Renovation & Remodeling',
      description: 'Transform your existing spaces into modern, functional areas that enhance your lifestyle and property value.',
      icon: '🔧',
      features: ['Kitchen Remodeling', 'Bathroom Renovation', 'Home Extensions', 'Space Optimization']
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <h2>Our Services</h2>
        <p className="section-subtitle">Comprehensive construction solutions to make your dreams reality</p>
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
              <button className="service-button">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;