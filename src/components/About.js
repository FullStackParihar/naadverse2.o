import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const [stats, setStats] = useState({
    sessions: 0,
    participants: 0,
    events: 0,
    satisfaction: 0
  });

  useEffect(() => {
    const animateValue = (key, start, end, duration) => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setStats(prev => ({
          ...prev,
          [key]: Math.floor(progress * (end - start) + start)
        }));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateValue('sessions', 0, 500, 2000);
          animateValue('participants', 0, 1000, 2000);
          animateValue('events', 0, 50, 2000);
          animateValue('satisfaction', 0, 98, 2000);
          observer.disconnect();
        }
      });
    });

    const statsElement = document.querySelector('.about-stats');
    if (statsElement) {
      observer.observe(statsElement);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (targetId) => {
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-subtitle"></span>
          <h2>Intro</h2>
          <div className="section-divider">
            <span className="divider-line"></span>
            <i className="fas fa-om"></i>
            <span className="divider-line"></span>
          </div>
        </div>
        
        <div className="about-content">
          <div className="about-text" data-aos="fade-right">
            <p className="intro-text">
             NaadVerse is a confluence of all art forms — where every sound becomes color, every movement becomes prayer, and every participant becomes part of the living rhythm of the universe.

              <br />
              It is not just an event, but an awakening through joy — where music, movement, and light dissolve the boundary between artist and audience.

            </p>
            
            <div className="about-features">
              <div
                className="feature-item"
                role="link"
                tabIndex={0}
                onClick={() => scrollToSection('#music')}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') scrollToSection('#music');
                }}
              >
                <div className="feature-icon">
                  <i className="fas fa-music"></i>
                </div>
                <div className="feature-text">
                  <p>
                    सर्वस्वरानां समन्वयः, 


                    <br />
                    अनाहदनादध्वनिः。


                    <br />
                   तालसंगीतलयमिश्रः, 


                    <br />
                    शृणु मायारससंपन्नः॥
                  </p>
                  <h3>नाद Fusion</h3>
                  <p>
                    A sonic journey blending classical & folk textures with modern electronic pulse. At नाद Fusion, music is not just heard; it’s felt.
                  </p>
                  <div className="cta-buttons">
                    <Link
                      to="/naad-fusion"
                      className="secondary-button"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <i className="fas fa-file-alt"></i> View Details
                    </Link>
                  </div>
                </div>
              </div>

              <div
                className="feature-item"
                role="link"
                tabIndex={0}
                onClick={() => scrollToSection('#meditation')}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') scrollToSection('#meditation');
                }}
              >
                <div className="feature-icon">
                  <i className="fas fa-om"></i>
                </div>
                <div className="feature-text">
                  <p>
                   नादोऽस्मि परमो ब्रह्म, 
                    <br />
                    नादोऽहं सर्वमावृतम्。
                    <br />
                    नादो मे जन्ममृत्यु, 
                    <br />
                    नादेनैव विलीयते॥

                  </p>
                  <h3>नाद ध्यान</h3>
                  <p>
                    नाद ध्यान is not a technique. It is an experience. A state of deep inner realisation where the mind calms, the breath aligns, and the soul begins to remember its truth.
                    <br />
                    नाद ध्यान is the art of witnessing without interference.
                  </p>
                  <div className="cta-buttons">
                    <Link
                      to="/naad-dhyaan"
                      className="secondary-button"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <i className="fas fa-file-alt"></i> View Details
                    </Link>
                  </div>
                </div>
              </div>

              <div
                className="feature-item"
                role="link"
                tabIndex={0}
                onClick={() => scrollToSection('#art')}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') scrollToSection('#art');
                }}
              >
                <div className="feature-icon">
                  <i className="fas fa-paint-brush"></i>
                </div>
                <div className="feature-text">
                  <p>
                    सर्वकलानां नादमयं,
                    <br />
                    रूपरंगरससंपन्नम्।
                    <br />
                    शब्दसंगीतनृत्ययुग्मं,
                    <br />
                    शून्यशिवसहस्रितम्॥
                  </p>
                  <h3>नाद verse</h3>
                  <p>
                    At नाद verse Art is not just seen; it’s experienced. Performances are not just watched; they invite you to connect deeply, creating an unbreakable bond between artists, audiences, and the universal rhythm of life.
                  </p>
                  <div className="cta-buttons">
                    <Link
                      to="/naad-verse"
                      className="secondary-button"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <i className="fas fa-file-alt"></i> View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <blockquote className="about-quote">
              <i className="fas fa-quote-left"></i>
              <p>We are offering: नाद Fusion • नाद ध्यान • नाद verse</p>
              <footer>- NaadVerse</footer>
            </blockquote>
          </div>
          
          <div className="about-gallery" data-aos="fade-left">
            <div className="gallery-main">
              <img 
                src={`${process.env.PUBLIC_URL || ''}/1.1.jpeg`}
                alt="Sound healing session" 
                className="main-image"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = `${process.env.PUBLIC_URL || ''}/nd1.jpeg`;
                }}
              />
              <div className="image-overlay">
                <div className="overlay-content">
                  <i className="fas fa-expand"></i>
                  <span>Sound Bath Experience</span>
                </div>
              </div>
            </div>
            
            <div className="gallery-thumbnails">
              <div className="thumbnail active">
                <img 
                  src={`${process.env.PUBLIC_URL || ''}/n3.jpeg`}
                  alt="Meditation group"
                />
              </div>
              <div className="thumbnail">
                <img 
                  src={`${process.env.PUBLIC_URL || ''}/n4.jpeg`}
                  alt="Singing bowls"
                />
              </div>
              <div className="thumbnail">
                <img 
                  src={`${process.env.PUBLIC_URL || ''}/n5.jpeg`}
                  alt="Yoga at sunset"
                />
              </div>
            </div>

            <div className="gallery-mosaic" aria-hidden="true">
              <div className="gallery-mosaic-item is-wide">
                <img
                  src="https://images.stockcake.com/public/f/9/a/f9a1f7e5-e739-43b6-b66b-436ac1c3232e_large/music-meets-meditation-stockcake.jpg"
                  alt=""
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = `${process.env.PUBLIC_URL || ''}/n1.jpeg`;
                  }}
                />
              </div>
              <div className="gallery-mosaic-item">
                <img
                  src="https://rukminim2.flixcart.com/image/480/640/xif0q/singing-bowl/e/s/i/tibetan-meditation-singing-bowl-for-meditation-and-music-therapy-original-imahhbtrkpkhprpg.jpeg?q=90"
                  alt=""
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = `${process.env.PUBLIC_URL || ''}/n4.jpeg`;
                  }}
                />
              </div>
              <div className="gallery-mosaic-item">
                <img src={`${process.env.PUBLIC_URL || ''}/n6.jpeg`} alt="" loading="lazy" />
              </div>
              <div className="gallery-mosaic-item">
                <img
                  src="https://i1.sndcdn.com/artworks-BIJVynoyIaGSkbPq-3UQprw-t500x500.jpg"
                  alt=""
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = `${process.env.PUBLIC_URL || ''}/n2.jpeg`;
                  }}
                />
              </div>
              <div className="gallery-mosaic-item is-tall">
                <img
                  src="https://goodbackgroundmusic.co.uk/wp-content/uploads/2020/01/hand-pan-gbm-music.jpg"
                  alt=""
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = `${process.env.PUBLIC_URL || ''}/n8.jpeg`;
                  }}
                />
              </div>
              <div className="gallery-mosaic-item">
                <img src={`${process.env.PUBLIC_URL || ''}/n3.jpeg`} alt="" loading="lazy" />
              </div>
              <div className="gallery-mosaic-item">
                <img src={`${process.env.PUBLIC_URL || ''}/n7.jpeg`} alt="" loading="lazy" />
              </div>
              <div className="gallery-mosaic-item">
                <img src={`${process.env.PUBLIC_URL || ''}/n5.jpeg`} alt="" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="about-stats" data-aos="fade-up">
          <div className="stat-item">
            <div className="stat-number">{stats.sessions}</div>
            <div className="stat-label">Sessions</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{stats.participants}</div>
            <div className="stat-label">Participants</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{stats.events}</div>
            <div className="stat-label">Events</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{stats.satisfaction}<sup>%</sup></div>
            <div className="stat-label">Satisfaction</div>
          </div>
        </div>
      </div>
      
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </section>
  );
};

export default About;
