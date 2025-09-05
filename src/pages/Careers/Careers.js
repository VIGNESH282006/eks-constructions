import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Careers.css';

const Careers = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const jobOpenings = [
    {
      id: 1,
      title: 'Site Engineer',
      department: 'Engineering',
      location: 'Chennai, Bangalore, Coimbatore',
      type: 'Full-time',
      experience: '2-5 years',
      description: 'Lead construction projects from foundation to completion. Ensure quality standards and timely delivery.',
      requirements: [
        'Civil Engineering degree',
        'Strong project management skills',
        'Knowledge of construction materials',
        'Excellent communication abilities'
      ]
    },
    {
      id: 2,
      title: 'Architect',
      department: 'Design',
      location: 'Chennai, Bangalore',
      type: 'Full-time',
      experience: '3-7 years',
      description: 'Design innovative residential and commercial spaces that bring happiness to our clients.',
      requirements: [
        'B.Arch or M.Arch degree',
        'Proficiency in AutoCAD, 3D modeling',
        'Creative design thinking',
        'Portfolio of completed projects'
      ]
    },
    {
      id: 3,
      title: 'Project Manager',
      department: 'Management',
      location: 'Chennai',
      type: 'Full-time',
      experience: '5-10 years',
      description: 'Oversee multiple construction projects, coordinate teams, and ensure client satisfaction.',
      requirements: [
        'Construction Management experience',
        'PMP certification preferred',
        'Leadership and team management',
        'Budget and timeline management'
      ]
    },
    {
      id: 4,
      title: 'Interior Designer',
      department: 'Design',
      location: 'Chennai, Bangalore',
      type: 'Full-time',
      experience: '2-6 years',
      description: 'Create beautiful interior spaces that enhance living experiences for our clients.',
      requirements: [
        'Interior Design degree',
        'Knowledge of materials and finishes',
        'Software skills: SketchUp, 3ds Max',
        'Attention to detail'
      ]
    },
    {
      id: 5,
      title: 'Marketing Executive',
      department: 'Marketing',
      location: 'Chennai',
      type: 'Full-time',
      experience: '1-4 years',
      description: 'Promote EKS Construction services and build relationships with potential clients.',
      requirements: [
        'Marketing or Business degree',
        'Digital marketing knowledge',
        'Excellent communication skills',
        'Result-oriented mindset'
      ]
    },
    {
      id: 6,
      title: 'Draftsman',
      department: 'Design',
      location: 'Chennai, Coimbatore',
      type: 'Full-time',
      experience: '1-3 years',
      description: 'Create detailed technical drawings and plans for construction projects.',
      requirements: [
        'Diploma in Civil/Mechanical Engineering',
        'AutoCAD proficiency',
        'Understanding of construction drawings',
        'Precision and attention to detail'
      ]
    }
  ];

  const departments = ['all', 'Engineering', 'Design', 'Management', 'Marketing'];

  const filteredJobs = selectedDepartment === 'all' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === selectedDepartment);

  const companyValues = [
    {
      icon: '🎯',
      title: 'Excellence',
      description: 'We strive for perfection in every project and deliver beyond expectations.'
    },
    {
      icon: '🤝',
      title: 'Teamwork',
      description: 'We believe in collaboration and supporting each other to achieve common goals.'
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'We embrace new technologies and creative solutions to build better homes.'
    },
    {
      icon: '❤',
      title: 'Happiness',
      description: 'We create homes where families feel joy and build lasting memories.'
    }
  ];

  return (
    <div className="careers-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Join Our Team</h1>
          <p>Feel the happiness in your Home - Build your career with EKS Construction</p>
        </div>
      </section>

      {/* Company Culture */}
      <section className="company-culture">
        <div className="container">
          <h2>Why Work With EKS Construction?</h2>
          <p className="culture-intro">
            We call ourselves "Dreamers and Doers" for a reason: we can make happen not just what is possible, 
            but what is impossible. We always collaborate on fresh ideas and new solutions of creativity and innovation.
          </p>
          
          <div className="values-grid">
            {companyValues.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="benefits-section">
        <div className="container">
          <h2>What We Offer</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">💰</div>
              <h4>Competitive Salary</h4>
              <p>Market-leading compensation packages with performance bonuses</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">📚</div>
              <h4>Learning & Growth</h4>
              <p>Continuous training programs and career development opportunities</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🏥</div>
              <h4>Health Benefits</h4>
              <p>Comprehensive health insurance for you and your family</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">⚖</div>
              <h4>Work-Life Balance</h4>
              <p>Flexible working hours and supportive work environment</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🎉</div>
              <h4>Team Events</h4>
              <p>Regular team building activities and celebration events</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🚀</div>
              <h4>Innovation</h4>
              <p>Work with cutting-edge technology and modern construction methods</p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="job-openings">
        <div className="container">
          <h2>Current Openings</h2>
          
          {/* Department Filter */}
          <div className="department-filter">
            {departments.map(dept => (
              <button
                key={dept}
                className={selectedDepartment === dept ? 'filter-btn active' : 'filter-btn'}
                onClick={() => setSelectedDepartment(dept)}
              >
                {dept === 'all' ? 'All Positions' : dept}
              </button>
            ))}
          </div>

          <div className="jobs-grid">
            {filteredJobs.map(job => (
              <div key={job.id} className="job-card">
                <div className="job-header">
                  <h3>{job.title}</h3>
                  <span className="job-department">{job.department}</span>
                </div>
                <div className="job-details">
                  <div className="job-info">
                    <span className="job-location">📍 {job.location}</span>
                    <span className="job-type">⏰ {job.type}</span>
                    <span className="job-experience">💼 {job.experience}</span>
                  </div>
                  <p className="job-description">{job.description}</p>
                  <div className="job-requirements">
                    <h4>Requirements:</h4>
                    <ul>
                      {job.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  <Link to="/contact" className="apply-btn">
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="locations-section">
        <div className="container">
          <h2>We're Expanding!</h2>
          <p>EKS Construction is looking for talented individuals to join us across multiple locations:</p>
          <div className="locations-grid">
            <div className="location-card">
              <h3>Chennai</h3>
              <p>Our headquarters with opportunities across all departments</p>
              <span className="openings-count">12 Openings</span>
            </div>
            <div className="location-card">
              <h3>Bangalore</h3>
              <p>Technology hub focusing on innovative construction methods</p>
              <span className="openings-count">8 Openings</span>
            </div>
            <div className="location-card">
              <h3>Coimbatore</h3>
              <p>Growing market with focus on residential projects</p>
              <span className="openings-count">5 Openings</span>
            </div>
            <div className="location-card">
              <h3>Pondicherry</h3>
              <p>Coastal projects with unique architectural opportunities</p>
              <span className="openings-count">3 Openings</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="careers-cta">
        <div className="container">
          <h2>Ready to Build Your Career?</h2>
          <p>Don't see a position that matches your skills? We're always looking for talented individuals!</p>
          <div className="cta-buttons">
            <Link to="/contact" className="cta-btn primary">
              Apply Now
            </Link>
            <a href="mailto:careers@eksconstruction.com" className="cta-btn secondary">
              Send Your Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;