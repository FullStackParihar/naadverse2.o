import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

const Instruments = () => {
  const instruments = useMemo(
    () => [
      { id: 'hang', name: 'Hang', description: 'Warm steel melodies with a floating resonance' },
      { id: 'didgeridoo', name: 'Didgeridoo', description: 'Earthy drone and breathy vibration' },
      { id: 'nyckelharpa', name: 'Nyckelharpa', description: 'Keyed fiddle with shimmering bowed harmonics' },
      { id: 'sarangi', name: 'Sarangi', description: 'Deep, voice-like bowed strings' },
      { id: 'kalimba', name: 'Kalimba', description: 'Tiny thumb piano with sparkling plucks' },
      { id: 'rav_vast', name: 'Rav Vast', description: 'Hand-played steel tongue drum with soothing tones' },
      { id: 'kora', name: 'Kora', description: 'West African harp-lute with bright cascading notes' },
      { id: 'hardingfele', name: 'Hardingfele', description: 'Norwegian fiddle with ringing sympathetic strings' },
      { id: 'santoor', name: 'Santoor', description: 'Hammered strings with bright cascades' },
      { id: 'erhu', name: 'Erhu', description: 'Two-string fiddle with soulful glides' },
      { id: 'theremin', name: 'Theremin', description: 'Ethereal electronic tones played in the air' },
      { id: 'waterphone', name: 'Waterphone', description: 'Haunting shimmers and eerie harmonic bends' },
      { id: 'aeolian_harp', name: 'Aeolian Harp', description: 'Wind-sung strings that whisper and glow' },
      { id: 'shruti_box', name: 'Shruti Box', description: 'A steady drone to ground the breath and mind' },
      { id: 'rainstick', name: 'Rainstick', description: 'Soft rainfall textures and rolling cascades' },
      { id: 'glass_armonica', name: 'Glass Armonica', description: 'Crystal tones that shimmer like light on water' }
    ],
    []
  );

  return (
    <div className="offering-page instruments-page">
      <header className="hero" style={{ minHeight: '70vh' }}>
        <div className="hero-background">
          <div className="hero-video-overlay"></div>
          <video className="hero-video" autoPlay muted loop playsInline>
            <source src="https://cdn.coverr.co/videos/coverr-meditation-in-nature-6320/1080p.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-content no-hero-image">
          <div className="hero-text" data-aos="fade-right" data-aos-duration="1000">
            <div className="hero-badge">
              <span className="badge-pulse">Explore</span>
            </div>
            <h1 className="glow-text">Instruments</h1>
            <p className="tagline">
              Traditional instruments are more than music — they are memory.
              <br />
              In villages and cities, temples and gatherings, their sound supported prayer, celebration, healing, and
              storytelling.
            </p>
            <div className="cta-buttons">
              <Link to="/" className="secondary-button">
                <i className="fas fa-arrow-left"></i> Back to Home
              </Link>
              <a href="#instruments" className="primary-button pulse-button">
                <i className="fas fa-music"></i> View Instruments
              </a>
            </div>
          </div>
        </div>
      </header>

      <section id="instruments" className="section dark-bg">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-subtitle">Sounds of the World</span>
            <h2>Old Instruments & Life</h2>
            <div className="section-divider">
              <span className="divider-line"></span>
              <i className="fas fa-guitar"></i>
              <span className="divider-line"></span>
            </div>
            <p className="section-description">
              These instruments helped people:
              <br />
              calm the mind, steady the breath, hold traditions, and bring communities together.
            </p>
          </div>

          <div className="persona-grid" data-aos="fade-up" data-aos-delay="200">
            {instruments.map((instrument) => (
              <div key={instrument.id} className="persona-card">
                <h3>{instrument.name}</h3>
                <p>{instrument.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Instruments;
