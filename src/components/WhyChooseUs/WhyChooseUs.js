import React from 'react';
import './WhyChooseUs.css';


const WhyChooseUs = () => {
  const benefits = [
    {
      icon: '👥',
      title: 'Experienced Team',
      description: 'EKS CONSTRUCTION has an experienced team of architects, engineers, and designers who have worked and successfully completed a range of residential projects.'
    },
    {
      icon: '🏗️',
      title: 'Quality Construction', 
      description: 'EKS CONSTRUCTION has a reputation for delivering high-quality construction projects that are built to last. They use only the best branded materials and techniques.'
    },
    {
      icon: '✏️',
      title: 'Customizable Designs',
      description: 'EKS CONSTRUCTION works closely with each client to create a custom design that meets their unique needs and preferences.'
    },
    {
      icon: '📋',
      title: 'Transparent Process',
      description: 'EKS CONSTRUCTION has a transparent and client-friendly process that ensures that the client is always informed about the progress.'
    },
    {
      icon: '⏰',
      title: 'Timely Completion',
      description: 'EKS CONSTRUCTION understands that timely completion is essential to the success of any construction project.'
    },
    {
      icon: '🏢',
      title: 'In-house Team of Experts',
      description: 'EKS CONSTRUCTION Architects has an in-house team including architects, structural engineers, interior designers, and project managers.'
    },
    {
      icon: '💻',
      title: 'Technology-driven Approach',
      description: 'EKS CONSTRUCTION Architects uses modern construction techniques and software application for internal communication.'
    }
  ];

  return (
    <section className="why-choose-us" id="about">
      <div className="container">
        <h2>Why Choose EKS CONSTRUCTION?</h2>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
