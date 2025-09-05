import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Residential Construction',
      description: 'Custom home construction with modern designs and quality materials',
      icon: '🏠'
    },
    {
      id: 2,
      title: 'Commercial Buildings', 
      description: 'Professional commercial construction for offices and retail spaces',
      icon: '🏢'
    },
    {
      id: 3,
      title: 'Interior Design',
      description: 'Complete interior design solutions for residential and commercial spaces', 
      icon: '🎨'
    },
    {
      id: 4,
      title: 'Architectural Planning',
      description: 'Comprehensive architectural planning and design services',
      icon: '📐'
    },
    {
      id: 5,
      title: 'Project Management',
      description: 'End-to-end project management ensuring timely completion',
      icon: '📊'
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;