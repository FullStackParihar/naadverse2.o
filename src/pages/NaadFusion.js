import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NaadFusion = () => {
  const asset = (path) => `${process.env.PUBLIC_URL || ''}${path}`;

  const fusionShowcaseItems = [
    {
      title: 'DJ + Live Pulse',
      subtitle: 'Electronic + organic together',
      src: asset('/n1.jpeg')
    },
    {
      title: 'Rhythm Circle',
      subtitle: 'Percussion as heartbeat',
      src: asset('/n2.jpeg')
    },
    {
      title: 'Stage Energy',
      subtitle: 'Lights • crowd • movement',
      src: asset('/n3.jpeg')
    },
    {
      title: 'Melodic Threads',
      subtitle: 'Strings and voice',
      src: asset('/n4.jpeg')
    },
    {
      title: 'Bass & Breath',
      subtitle: 'Deep listening in motion',
      src: asset('/n5.jpeg')
    },
    {
      title: 'Collective Release',
      subtitle: 'Dance as medicine',
      src: asset('/n6.jpeg')
    },
    {
      title: 'Vinyl & Texture',
      subtitle: 'Analog warmth, modern edge',
      src: asset('/n7.jpeg')
    },
    {
      title: 'Hands on Drums',
      subtitle: 'Tribal groove',
      src: asset('/n8.jpeg')
    },
    {
      title: 'Crowd Pulse',
      subtitle: 'One beat, one body',
      src: asset('/n1.jpeg')
    },
    {
      title: 'Light Waves',
      subtitle: 'Aural + visual immersion',
      src: asset('/n2.jpeg')
    },
    {
      title: 'Strings in Motion',
      subtitle: 'Melody over rhythm',
      src: asset('/n3.jpeg')
    },
    {
      title: 'Soft Close',
      subtitle: 'Release into breath',
      src: asset('/n4.jpeg')
    }
  ];

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent('naadverse:set-background-track', {
        detail: {
          src: asset('/meditation-hiphop.mp3'),
          label: 'Meditation Hip-Hop',
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
              src={`${process.env.PUBLIC_URL || ''}/nflogo.jpg`}
              alt="Naad Fusion"
              loading="eager"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.style.display = 'none';
              }}
            />
            <h1 className="glow-text">नाद Fusion</h1>
            <p className="tagline">
              सर्वस्वरानां समन्वयः,
              <br />
              अनाहदनादध्वनिः।
              <br />
              तालसंगीतलयमिश्रः,
              <br />
              शृणु मायारससंपन्नः॥
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
            <span className="section-subtitle">Sonic Journey</span>
            <h2>नाद Fusion</h2>
            <div className="section-divider">
              <span className="divider-line"></span>
              <i className="fas fa-music"></i>
              <span className="divider-line"></span>
            </div>
            <p className="section-description">
              “नाद Fusion” is a sonic journey blending classical & folk textures with modern electronic pulse.
              A DJ orchestrates a collaborative live performance with musicians playing violin, darabuka, cajon,
              djembe, drum, guitar, mouth organ, and captivating vocals.
              <br />
              <br />
              At नाद Fusion, music is not just heard; it’s felt.
            </p>
          </div>

          <div className="meditation-features" data-aos="fade-up" data-aos-delay="200">
            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Collaborative Live</h3>
              <p>DJ + musicians in one shared pulse</p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-drum"></i>
              </div>
              <h3>Folk & Classical</h3>
              <p>Roots, ragas, rhythm — woven together</p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-bolt"></i>
              </div>
              <h3>Electronic Pulse</h3>
              <p>Modern energy that moves the body and spirit</p>
            </div>
          </div>

          <div className="section-header" data-aos="fade-up" data-aos-delay="250">
            <span className="section-subtitle">Instrumentation</span>
            <h2>What Comes Together</h2>
            <div className="section-divider">
              <span className="divider-line"></span>
              <i className="fas fa-guitar"></i>
              <span className="divider-line"></span>
            </div>
            <p className="section-description">
              A DJ orchestrates a collaborative live performance with musicians and vocals — blending classical & folk textures with modern electronic pulse.
            </p>
          </div>

          <div className="meditation-features" data-aos="fade-up" data-aos-delay="300">
            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-microphone"></i>
              </div>
              <h3>Vocals</h3>
              <p>Captivating voice as the thread of the journey</p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-guitar"></i>
              </div>
              <h3>Melody</h3>
              <p>Violin • Guitar • Mouth organ</p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-drum"></i>
              </div>
              <h3>Rhythm</h3>
              <p>Darabuka • Cajon • Djembe • Drum</p>
            </div>
          </div>

          <div className="section-header" data-aos="fade-up" data-aos-delay="330">
            <span className="section-subtitle">What You’ll Feel</span>
            <h2>The Fusion Experience</h2>
            <div className="section-divider">
              <span className="divider-line"></span>
              <i className="fas fa-bolt"></i>
              <span className="divider-line"></span>
            </div>
            <p className="section-description">
              A curated arc — deep listening to full-body release. Grooves to open the heart, rhythms to ground, melodies to return home.
            </p>
          </div>

          <div className="meditation-features" data-aos="fade-up" data-aos-delay="360">
            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Emotional Release</h3>
              <p>Move what’s stuck — without forcing, without story</p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-shoe-prints"></i>
              </div>
              <h3>Dance as Meditation</h3>
              <p>Presence through movement, breath, and beat</p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Collective Pulse</h3>
              <p>Co-regulate with community — feel held by the room</p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-ear-listen"></i>
              </div>
              <h3>Deep Listening</h3>
              <p>Not just loud — layered, intentional, and immersive</p>
            </div>
          </div>

          <div className="section-header" data-aos="fade-up" data-aos-delay="390">
            <span className="section-subtitle">Flow</span>
            <h2>How the Set Unfolds</h2>
            <div className="section-divider">
              <span className="divider-line"></span>
              <i className="fas fa-stream"></i>
              <span className="divider-line"></span>
            </div>
            <p className="section-description">
              The set is designed like a journey. The exact sound changes, but the arc remains — arrive, build, peak, soften, integrate.
            </p>
          </div>

          <div className="meditation-features" data-aos="fade-up" data-aos-delay="420">
            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-feather"></i>
              </div>
              <h3>Arrival</h3>
              <p>Ambient layers to settle and bring attention inward</p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-drum"></i>
              </div>
              <h3>Build</h3>
              <p>Live percussion and bass grooves begin to rise</p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-fire"></i>
              </div>
              <h3>Peak</h3>
              <p>High-energy fusion — movement, joy, catharsis</p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-moon"></i>
              </div>
              <h3>Soft Close</h3>
              <p>Melodic release into stillness and breath</p>
            </div>
          </div>

          <div className="section-header" data-aos="fade-up" data-aos-delay="450">
            <span className="section-subtitle">Takeaways</span>
            <h2>After the Music</h2>
            <div className="section-divider">
              <span className="divider-line"></span>
              <i className="fas fa-star"></i>
              <span className="divider-line"></span>
            </div>
            <p className="section-description">
              Many people leave feeling lighter, more alive, and more connected — not only to sound, but to their own inner rhythm.
            </p>
          </div>

          <div className="meditation-features" data-aos="fade-up" data-aos-delay="480">
            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-sun"></i>
              </div>
              <h3>Vitality</h3>
              <p>Energy that feels clean — not chaotic</p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-anchor"></i>
              </div>
              <h3>Grounding</h3>
              <p>Rhythm helps the body feel safe and steady</p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-heartbeat"></i>
              </div>
              <h3>Release</h3>
              <p>A sense of letting go — through movement and breath</p>
            </div>
          </div>

          <div className="section-header" data-aos="fade-up" data-aos-delay="510">
            <span className="section-subtitle">For You</span>
            <h2>Who It’s For</h2>
            <div className="section-divider">
              <span className="divider-line"></span>
              <i className="fas fa-user"></i>
              <span className="divider-line"></span>
            </div>
            <p className="section-description">
              Whether you dance hard or simply sway with eyes closed — Naad Fusion meets you where you are. Come for celebration, come for healing, come for the shared pulse.
            </p>
          </div>

          <div className="persona-grid" data-aos="fade-up" data-aos-delay="540">
            <div className="persona-card">
              <div className="persona-icon">
                <i className="fas fa-music"></i>
              </div>
              <h3>Music Lovers</h3>
              <p>For those who want a set that feels intentional and alive.</p>
              <div className="persona-points">
                <div className="persona-point"><i className="fas fa-check"></i><span>Live + DJ fusion performance</span></div>
                <div className="persona-point"><i className="fas fa-check"></i><span>High-quality sonic layers</span></div>
                <div className="persona-point"><i className="fas fa-check"></i><span>Immersive build and release</span></div>
              </div>
            </div>

            <div className="persona-card">
              <div className="persona-icon">
                <i className="fas fa-shoe-prints"></i>
              </div>
              <h3>Dancers</h3>
              <p>Move your energy, free your body, find your rhythm.</p>
              <div className="persona-points">
                <div className="persona-point"><i className="fas fa-check"></i><span>Tribal + electronic grooves</span></div>
                <div className="persona-point"><i className="fas fa-check"></i><span>Space for expression</span></div>
                <div className="persona-point"><i className="fas fa-check"></i><span>Release without pressure</span></div>
              </div>
            </div>

            <div className="persona-card">
              <div className="persona-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Those Seeking Release</h3>
              <p>When you want to feel lighter — through sound and motion.</p>
              <div className="persona-points">
                <div className="persona-point"><i className="fas fa-check"></i><span>Somatic grounding via rhythm</span></div>
                <div className="persona-point"><i className="fas fa-check"></i><span>Emotional reset in community</span></div>
                <div className="persona-point"><i className="fas fa-check"></i><span>Joy as medicine</span></div>
              </div>
            </div>

            <div className="persona-card">
              <div className="persona-icon">
                <i className="fas fa-palette"></i>
              </div>
              <h3>Artists & Creators</h3>
              <p>For those who create from rhythm, texture, and flow.</p>
              <div className="persona-points">
                <div className="persona-point"><i className="fas fa-check"></i><span>Inspiration through live energy</span></div>
                <div className="persona-point"><i className="fas fa-check"></i><span>New sonic textures</span></div>
                <div className="persona-point"><i className="fas fa-check"></i><span>Flow-state activation</span></div>
              </div>
            </div>

            <div className="persona-card">
              <div className="persona-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Community</h3>
              <p>Come for the shared field — the room becomes one pulse.</p>
              <div className="persona-points">
                <div className="persona-point"><i className="fas fa-check"></i><span>Co-creation and connection</span></div>
                <div className="persona-point"><i className="fas fa-check"></i><span>Collective regulation</span></div>
                <div className="persona-point"><i className="fas fa-check"></i><span>Celebration with depth</span></div>
              </div>
            </div>

            <div className="persona-card">
              <div className="persona-icon">
                <i className="fas fa-seedling"></i>
              </div>
              <h3>Beginners</h3>
              <p>No rules — just arrive and let the music guide you.</p>
              <div className="persona-points">
                <div className="persona-point"><i className="fas fa-check"></i><span>Come as you are</span></div>
                <div className="persona-point"><i className="fas fa-check"></i><span>Participate your way</span></div>
                <div className="persona-point"><i className="fas fa-check"></i><span>Feel included and safe</span></div>
              </div>
            </div>
          </div>

          <div className="section-header" data-aos="fade-up" data-aos-delay="570">
            <span className="section-subtitle">Naad Fusion</span>
            <h2>Showcase</h2>
            <div className="section-divider">
              <span className="divider-line"></span>
              <i className="fas fa-images"></i>
              <span className="divider-line"></span>
            </div>
            <p className="section-description">
              A glimpse into the sound textures, live rhythm, and shared movement.
            </p>
          </div>

          <div className="gallery-grid collage-grid" data-aos="fade-up" data-aos-delay="600">
            {fusionShowcaseItems.map((item, idx) => (
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

export default NaadFusion;
