import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="logo-icon">🪷</span>
            NaadVerse
          </div>
          
          <p className="footer-tagline">
            Where sound meets silence, and rhythm becomes healing
          </p>

          <div className="footer-links">
            <Link to="/#home">Home</Link>
            <Link to="/#about">About</Link>
            <Link to="/#meditation">Meditation</Link>
            <Link to="/#healing">Healing</Link>
            <Link to="/#music">Music</Link>
            <Link to="/#events">Events</Link>
            <Link to="/#heart">Heart</Link>
          </div>

          <div className="social-links">
            <a href="https://credential.certifyme.online/verify/1cdec93615325" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Certificate" title="View Certificate">
              <i className="fas fa-certificate"></i>
            </a>
            <a href="https://www.imdb.com/name/nm8801726/?ref_=ext_shr_lnk" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="IMDB" title="IMDB Profile">
              <i className="fab fa-imdb"></i>
            </a>
            <a href="https://www.instagram.com/thenishantsingh/profilecard/?igsh=MTIwdGVtZnQxc3hoMw==" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram" title="Follow on Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://open.spotify.com/artist/07Pnq6qTXLN3hG449JAstv?si=sJrKHrDwRe-nDb9vjf78Lg" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Spotify" title="Listen on Spotify">
              <i className="fab fa-spotify"></i>
            </a>
            <a href="https://youtu.be/Pq9vG308Rag?si=lze3RoPYm1nlVOAH" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="YouTube" title="Watch on YouTube">
              <i className="fab fa-youtube"></i>
            </a>
          </div>

          <div className="copyright">
            <p>&copy; {currentYear} NaadVerse. All rights reserved.</p>
            <p>
              Contact: <a href="mailto:hello@naadverse.com">hello@naadverse.com</a>
            </p>
            <p>
              Made by{' '}
              <a href="https://brandera.co.in/" target="_blank" rel="noopener noreferrer">
                BrandEra
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
