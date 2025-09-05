import React from 'react';
import './Team.css';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Mr. Ilavarasan',
      role: 'Site Engineer',
      image: 'D:\React projects\eks-constructions\src\assests\images\team\ilavarasan.jpg',
      description: 'Ilavarasan is our dedicated Site Engineer who ensures every project meets our highest quality standards. With his keen eye for detail and years of field experience, he supervises construction activities and coordinates with various teams to deliver excellence.',
      specialties: ['Quality Control', 'Safety Management', 'Project Coordination', 'Team Leadership'],
      experience: '8+ years',
      projects: '50+ completed projects'
    },
    {
      id: 2,
      name: 'Ms. Umamageshwari',
      role: 'Administrator',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b647?w=300&h=300&fit=crop&crop=face',
      description: 'Umamageshwari is the backbone of our administrative operations. She expertly manages office functions, coordinates between departments, and ensures smooth workflow across all projects.',
      specialties: ['Office Management', 'Process Optimization', 'Team Coordination', 'Document Management'],
      experience: '6+ years',
      projects: 'Managing 100+ projects workflow'
    },
    {
      id: 3,
      name: 'Mrs. Pooja S.N',
      role: 'Architect',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      description: 'Pooja is our creative Architect who transforms dreams into beautiful, functional spaces. Her innovative designs blend modern aesthetics with practical functionality, creating homes that truly embody our motto.',
      specialties: ['Residential Design', 'Sustainable Architecture', '3D Visualization', 'Interior Planning'],
      experience: '7+ years',
      projects: '75+ architectural designs'
    },
    {
      id: 4,
      name: 'Mr. P. Murugesan',
      role: 'Site Engineer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      description: 'Murugesan brings extensive expertise in site management and construction supervision. He is known for his problem-solving abilities and his talent for managing complex construction challenges.',
      specialties: ['Construction Management', 'Material Planning', 'Quality Assurance', 'Team Mentoring'],
      experience: '10+ years',
      projects: '80+ successful constructions'
    },
    {
      id: 5,
      name: 'Mr. Sivabalan',
      role: 'Draftsman',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face',
      description: 'Sivabalan is our meticulous Draftsman who brings architectural visions to life through precise technical drawings. His expertise in CAD software and attention to detail ensures accuracy.',
      specialties: ['Technical Drawing', 'CAD Design', 'Construction Details', 'Blueprint Preparation'],
      experience: '5+ years',
      projects: '200+ detailed drawings'
    }
  ];

  return (
    <div className="team-page">
      <section className="page-header">
        <div className="container">
          <h1>Meet Our Expert Team</h1>
          <p>The talented professionals who make your construction dreams come true</p>
        </div>
      </section>

      <section className="team-intro">
        <div className="container">
          <h2>Our Skilled Professionals</h2>
          <p className="intro-text">
            At EKS Construction, our success is built on the expertise, dedication, and passion of our team members. 
            Each professional brings unique skills and experience to ensure that every project meets our high standards 
            of quality and client satisfaction.
          </p>
        </div>
      </section>

      <section className="team-members">
        <div className="container">
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={member.id} className="team-member">
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                  <div className="member-overlay">
                    <h3>{member.name}</h3>
                    <span>{member.role}</span>
                  </div>
                </div>
                <div className="member-content">
                  <div className="member-header">
                    <h3>{member.name}</h3>
                    <span className="member-role">{member.role}</span>
                  </div>
                  <p className="member-description">{member.description}</p>
                  
                  <div className="member-details">
                    <div className="member-stats">
                      <div className="stat">
                        <span className="stat-label">Experience:</span>
                        <span className="stat-value">{member.experience}</span>
                      </div>
                      <div className="stat">
                        <span className="stat-label">Portfolio:</span>
                        <span className="stat-value">{member.projects}</span>
                      </div>
                    </div>
                    
                    <div className="member-specialties">
                      <h4>Specialties:</h4>
                      <div className="specialties-tags">
                        {member.specialties.map((specialty, idx) => (
                          <span key={idx} className="specialty-tag">{specialty}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="team-stats">
        <div className="container">
          <h2>Our Collective Experience</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">35+</div>
              <div className="stat-label">Years Combined Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">400+</div>
              <div className="stat-label">Projects Completed Together</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction Rate</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      <section className="join-team-cta">
        <div className="container">
          <h2>Want to Join Our Team?</h2>
          <p>We are always looking for talented professionals who share our passion for excellence</p>
          <div className="cta-buttons">
            <a href="/careers" className="cta-btn primary">
              View Open Positions
            </a>
            <a href="mailto:careers@eksconstruction.com" className="cta-btn secondary">
              Send Your Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;