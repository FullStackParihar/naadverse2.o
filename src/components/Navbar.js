import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      
      // Add/remove scrolled class
      if (currentScroll > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Hide navbar on scroll down, show on scroll up
      if (currentScroll <= 0) {
        setIsVisible(true);
      } else if (currentScroll > lastScroll && currentScroll > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScroll(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScroll]);

  const scrollToTarget = (targetId) => {
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (targetId === '#') return;

    if (location.pathname !== '/') {
      navigate('/');
      window.setTimeout(() => scrollToTarget(targetId), 100);
      return;
    }

    scrollToTarget(targetId);
  };

  const handleRouteClick = (e, routePath) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    navigate(routePath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav 
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      style={{ transform: isVisible ? 'translateY(0)' : 'translateY(-100%)' }}
    >
      <div className="container">
        <a href="#home" className="logo" onClick={(e) => handleNavClick(e, '#home')}>
          <img
            className="logo-image"
            src="/logo_main.jpg?v=1"
            alt="NaadVerse"
            loading="eager"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = '/logo_main.jpg';
            }}
          />
        </a>
        <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <a href="#home" className="nav-link" onClick={(e) => handleNavClick(e, '#home')}>
            <i className="fas fa-home"></i> Home
          </a>
          <a href="#about" className="nav-link" onClick={(e) => handleNavClick(e, '#about')}>
            <i className="fas fa-info-circle"></i> Intro
          </a>
          <div className="dropdown">
            <a href="#0" className="nav-link">
              <i className="fas fa-spa"></i> Experiences <i className="fas fa-chevron-down"></i>
            </a>
            <div className="dropdown-content">
              <a href="#music" onClick={(e) => handleNavClick(e, '#music')}>
                <i className="fas fa-music"></i> नाद Fusion
              </a>
              <a href="#meditation" onClick={(e) => handleNavClick(e, '#meditation')}>
                <i className="fas fa-om"></i> नाद ध्यान
              </a>
            </div>
          </div>
          <a href="#events" className="nav-link" onClick={(e) => handleNavClick(e, '#events')}>
            <i className="fas fa-calendar-alt"></i> Events
          </a>
          <a href="#gallery" className="nav-link" onClick={(e) => handleNavClick(e, '#gallery')}>
            <i className="fas fa-images"></i> Gallery
          </a>
          <a href="/instruments" className="nav-link" onClick={(e) => handleRouteClick(e, '/instruments')}>
            <i className="fas fa-drum"></i> Instruments
          </a>
          <a href="#heart" className="nav-link" onClick={(e) => handleNavClick(e, '#heart')}>
            <i className="fas fa-heart"></i> Heart
          </a>
        </div>
        <div 
          className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
