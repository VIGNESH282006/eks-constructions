import React from 'react';
import './About.css';

const About = () => {
  const benefits = [
    {
      icon: '👥',
      title: 'Experienced Team',
      description: 'EKS Construction has an experienced team of architects, engineers, and designers who have worked and successfully completed a range of residential projects.'
    },
    {
      icon: '🏗',
      title: 'Quality Construction', 
      description: 'EKS Construction has a reputation for delivering high-quality construction projects that are built to last. We use only the best branded materials and techniques.'
    },
    {
      icon: '✏',
      title: 'Customizable Designs',
      description: 'EKS Construction works closely with each client to create a custom design that meets their unique needs and preferences.'
    },
    {
      icon: '📋',
      title: 'Transparent Process',
      description: 'EKS Construction has a transparent and client-friendly process that ensures that the client is always informed about the progress.'
    },
    {
      icon: '⏰',
      title: 'Timely Completion',
      description: 'EKS Construction understands that timely completion is essential to the success of any construction project.'
    },
    {
      icon: '🏢',
      title: 'In-house Team of Experts',
      description: 'EKS Construction has an in-house team including architects, structural engineers, interior designers, and project managers.'
    },
    {
      icon: '💻',
      title: 'Technology-driven Approach',
      description: 'EKS Construction uses modern construction techniques and software application for internal communication between departments.'
    }
  ];

  return (
    <div className="about-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>About EKS Construction</h1>
          <p>Feel the happiness in your Home</p>
        </div>
      </section>

      {/* Company Story */}
      <section className="company-story">
        <div className="container">
          <div className="story-grid">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                Founded with a vision to create beautiful, functional spaces that bring joy to families, 
                <strong> EKS Construction</strong> has been at the forefront of the construction industry 
                for over 15 years. We believe that every home should be a sanctuary where happiness flourishes.
              </p>
              <p>
                Our journey began with a simple philosophy: to build not just structures, but dreams. 
                Today, we are proud to have completed over 1000 projects, each one reflecting our 
                commitment to excellence, quality, and customer satisfaction.
              </p>
              <p>
                <strong>EKS Construction</strong> is more than just a construction company - we are 
                dream builders, creating spaces where memories are made and happiness is felt every day.
              </p>
            </div>
            <div className="story-stats">
              <div className="stat-card">
                <h3>15+</h3>
                <p>Years of Excellence</p>
              </div>
              <div className="stat-card">
                <h3>1000+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat-card">
                <h3>500+</h3>
                <p>Happy Families</p>
              </div>
              <div className="stat-card">
                <h3>50+</h3>
                <p>Expert Team Members</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="container">
          <h2>Why Choose EKS Construction?</h2>
          <p className="section-subtitle">Feel the happiness in your Home with our expert services</p>
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

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">
          <div className="mv-grid">
            <div className="mission">
              <h2>Our Mission</h2>
              <p>
                To build exceptional homes and commercial spaces that exceed our clients' expectations 
                while maintaining the highest standards of quality, safety, and environmental responsibility. 
                We strive to create structures that not only serve their purpose but also inspire happiness 
                and well-being.
              </p>
            </div>
            <div className="vision">
              <h2>Our Vision</h2>
              <p>
                To be the most trusted and innovative construction company, known for transforming 
                dreams into reality. We envision a future where every space we create becomes a 
                source of joy, comfort, and pride for its occupants, truly embodying our motto: 
                "Feel the happiness in your Home."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;