import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NaadVerse = () => {
  const asset = (path) => `${process.env.PUBLIC_URL || ''}${path}`;

  const collageItems = [
    {
      title: 'Performing Arts',
      subtitle: 'Movement as prayer',
      src: asset('/n1.jpeg')
    },
    {
      title: 'Fire & Light',
      subtitle: 'Cosmic celebration',
      src: asset('/n2.jpeg')
    },
    {
      title: 'Sonic Arts',
      subtitle: 'DJs & live pulse',
      src: asset('/n3.jpeg')
    },
    {
      title: 'The Naad Circle',
      subtitle: 'Drums • chants • silence',
      src: asset('/n4.jpeg')
    },
    {
      title: 'Visual Arts',
      subtitle: 'Canvas in sync',
      src: asset('/n5.jpeg')
    },
    {
      title: 'Projection Mapping',
      subtitle: 'Light sculpting',
      src: asset('/n6.jpeg')
    },
    {
      title: 'Anahata',
      subtitle: 'Sound meditations',
      src: asset('/n7.jpeg')
    },
    {
      title: 'Karma Canvas',
      subtitle: 'Co-create the field',
      src: asset('/n8.jpeg')
    },
    {
      title: 'MahāNaad',
      subtitle: 'Grand confluence',
      src: asset('/n1.jpeg')
    },
    {
      title: 'Sunrise Sādhana',
      subtitle: 'Breath with first light',
      src: asset('/n2.jpeg')
    },
    {
      title: 'Sacred Sound',
      subtitle: 'Bowls • gongs • resonance',
      src: asset('/n3.jpeg')
    },
    {
      title: 'Community',
      subtitle: 'One field, many hearts',
      src: asset('/n4.jpeg')
    }
  ];

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent('naadverse:set-background-track', {
        detail: {
          src: 'https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3',
          label: 'NaadVerse',
          autoplay: true
        }
      })
    );

    return () => {
      window.dispatchEvent(
        new CustomEvent('naadverse:set-background-track', {
          detail: {
            src: 'https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3',
            label: 'Spiritual Ambience',
            autoplay: false
          }
        })
      );
    };
  }, []);

  return (
    <div className="offering-page">
      <header className="hero" style={{ minHeight: '60vh' }}>
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
              <span className="badge-pulse">Offering</span>
            </div>
            <img
              className="naad-dhyaan-logo"
              src={`${process.env.PUBLIC_URL || ''}/nvlogo.jpg`}
              alt="Naad Verse"
              loading="eager"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.style.display = 'none';
              }}
            />
            <h1 className="glow-text">नाद verse</h1>
            <p className="tagline">
              सर्वकलानां नादमयं,
              <br />
              रूपरंगरससंपन्नम्।
              <br />
              शब्दसंगीतनृत्ययुग्मं,
              <br />
              शून्यशिवसहस्रितम्॥
            </p>
            <div className="cta-buttons">
              <Link to="/" className="secondary-button">
                <i className="fas fa-arrow-left"></i> Back to Home
              </Link>
              <a href="#details" className="primary-button pulse-button">
                <i className="fas fa-compass"></i> View Details
              </a>
            </div>
          </div>
        </div>
      </header>

      <section id="details" className="section dark-bg">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-subtitle">NaadVerse</span>
            <h2>सर्वकलानां नादमयं</h2>
            <div className="section-divider">
              <span className="divider-line"></span>
              <i className="fas fa-paint-brush"></i>
              <span className="divider-line"></span>
            </div>
            <p className="section-description">
              “सर्वकलानां नादमयं, रूपरंगरससंपन्नम्।
              <br />
              शब्दसंगीतनृत्ययुग्मं, शून्यशिवसहस्रितम्॥”
              <br />
              <br />
              NaadVerse is a confluence of all art forms — where every sound becomes color, every movement becomes prayer, and every participant becomes part of the living rhythm of the universe.
              <br />
              It is not just an event, but an awakening through joy — where music, movement, and light dissolve the boundary between artist and audience.
              <br />
              <br />
              NaadVerse is not a stage — it is a breathing organism of art, music, and consciousness.
            </p>
          </div>

          <div className="meditation-features" data-aos="fade-up" data-aos-delay="200">
            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-theater-masks"></i>
              </div>
              <h3>Performing Arts</h3>
              <p>Dancers, clowns, theatre artists, and movement practitioners embody rhythm through body and motion.</p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-palette"></i>
              </div>
              <h3>Visual Arts</h3>
              <p>Painters, graffiti creators, and digital projection artists paint in sync with live music.</p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-om"></i>
              </div>
              <h3>Folk & Spiritual Traditions</h3>
              <p>Baul singers, tribal drummers, Sufi chanters, and storytellers connect ancient vibrations with modern soundscapes.</p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-music"></i>
              </div>
              <h3>Sonic Arts</h3>
              <p>Musicians, sound healers, and DJs blend Indian classical, Afro-techno, ambient, and tribal Naad journeys.</p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-fire"></i>
              </div>
              <h3>Fire & Light Arts</h3>
              <p>Fire spinners, light painters, laser and visual sculptors turn the night into a cosmic celebration.</p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Audience as Co-Creators</h3>
              <p>Every participant paints, dances, sings, or simply resonates — no one is a spectator.</p>
            </div>
          </div>

          <div className="meditation-features" data-aos="fade-up" data-aos-delay="300">
            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-sun"></i>
              </div>
              <h3>Mornings – “Anahata”</h3>
              <p>Sound meditations, sunrise ragas, and collective breathing circles to align inner rhythm.</p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-paint-brush"></i>
              </div>
              <h3>Afternoons – “Karma Canvas”</h3>
              <p>Collaborative workshops — live mural painting, movement labs, storytelling, projection mapping, and sound sculpting.</p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-fire"></i>
              </div>
              <h3>Evenings – “MahāNaad”</h3>
              <p>Grand confluence performances merging music, dance, light, and fire — the festival’s pulsating heart.</p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-drum"></i>
              </div>
              <h3>Nights – “The Naad Circle”</h3>
              <p>Artists and audiences sit together around a central fire, co-creating spontaneous rhythms — drums, chants, laughter, silence.</p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-om"></i>
              </div>
              <h3>The Final Dawn</h3>
              <p>A grand silence ritual — thousands meditate together, realizing that the Naad, the sound of creation, is within.</p>
            </div>
          </div>

          <div className="section-header" data-aos="fade-up" data-aos-delay="375">
            <span className="section-subtitle">NaadVerse</span>
            <h2>Collage</h2>
            <div className="section-divider">
              <span className="divider-line"></span>
              <i className="fas fa-images"></i>
              <span className="divider-line"></span>
            </div>
            <p className="section-description">
              A glimpse into the colors, rhythms, lights, and collective presence.
            </p>
          </div>

          <div className="gallery-grid collage-grid" data-aos="fade-up" data-aos-delay="400">
            {collageItems.map((item, idx) => (
              <div className="gallery-item collage-item" key={`${item.title}-${idx}`}>
                <img src={item.src} alt={item.title} loading="lazy" />
                <div className="gallery-overlay">
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NaadVerse;
