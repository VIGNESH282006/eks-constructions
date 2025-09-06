import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../../assests/images/eks-logo.png';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleLogoError = () => {
    setLogoError(true);
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-brand">
          <Link to="/" className="logo-link" onClick={closeMenu}>
            {!logoError ? (
              <img
                src={logo}
                alt="EKS Construction Logo"
                className="nav-logo-img"
                onError={handleLogoError}
              />
            ) : (
              <div className="nav-logo-text">
                <h2 className="company-name">EKS Construction</h2>
                <p className="company-tagline">Feel the happiness in your Home</p>
              </div>
            )}
          </Link>
        </div>

        <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li>
            <Link
              to="/"
              className={isActive('/') ? 'nav-link active' : 'nav-link'}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={isActive('/about') ? 'nav-link active' : 'nav-link'}
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={isActive('/services') ? 'nav-link active' : 'nav-link'}
              onClick={closeMenu}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/construction-package"
              className={isActive('/construction-package') ? 'nav-link active' : 'nav-link'}
              onClick={closeMenu}
            >
              Packages
            </Link>
          </li>
          <li>
            <Link
              to="/team"
              className={isActive('/team') ? 'nav-link active' : 'nav-link'}
              onClick={closeMenu}
            >
              Our Team
            </Link>
          </li>
          <li>
            <Link
              to="/careers"
              className={isActive('/careers') ? 'nav-link active' : 'nav-link'}
              onClick={closeMenu}
            >
              Careers
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={isActive('/contact') ? 'nav-link active' : 'nav-link'}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
        </ul>

        <div
          className={isMenuOpen ? 'nav-toggle active' : 'nav-toggle'}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="nav-toggle-line"></span>
          <span className="nav-toggle-line"></span>
          <span className="nav-toggle-line"></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
