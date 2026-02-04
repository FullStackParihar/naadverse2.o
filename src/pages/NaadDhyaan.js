import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NaadDhyaan = () => {
  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent('naadverse:set-background-track', {
        detail: {
          src: 'https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3',
          label: 'Naad Dhyaan',
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
              <span className="badge-pulse">Offering</span>
            </div>
            <img
              className="naad-dhyaan-logo"
              src={`${process.env.PUBLIC_URL || ''}/ndlogo.jpg`}
              alt="Naad Dhyaan"
              loading="eager"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.style.display = 'none';
              }}
            />
            <h1 className="glow-text">नाद ध्यान</h1>
            <p className="tagline">
              नादोऽस्मि परमो ब्रह्म,
              <br />
              नादोऽहं सर्वमावृतम्।
              <br />
              नादो मे जन्ममृत्यु,
              <br />
              नादेनैव विलीयते॥
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
            <span className="section-subtitle">Deep Inner Realisation</span>
            <h2>नाद ध्यान</h2>
            <div className="section-divider">
              <span className="divider-line"></span>
              <i className="fas fa-om"></i>
              <span className="divider-line"></span>
            </div>
            <p className="section-description">
              नाद ध्यान is not a technique.
              <br />
              It is an experience — a state of deep inner realisation where the mind calms, the breath aligns,
              and the soul begins to remember its truth.
              <br />
              <br />
              Curated and guided by actor and long-time meditation practitioner Nishant Singh, this program is a gentle yet powerful journey into the self — through
              the sacred gateways of correct breathing, deep meditative awareness, and energy healing.
              <br />
              <br />
              Whether you're a beginner or a seeker on the path, this offering is designed to help you return to your inner rhythm — the breath —
              and awaken a natural state of stillness, clarity, intuition, and healing.
            </p>
          </div>

          <div className="meditation-features" data-aos="fade-up" data-aos-delay="200">
            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-wind"></i>
              </div>
              <h3>Correct Breathing</h3>
              <p>Return to your inner rhythm — the breath</p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-eye"></i>
              </div>
              <h3>Deep Awareness</h3>
              <p>Witnessing without interference</p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-bolt"></i>
              </div>
              <h3>Energy Healing</h3>
              <p>Stillness, clarity, intuition, healing</p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-music"></i>
              </div>
              <h3>Sound-Led Meditation</h3>
              <p>Use vibration to settle the mind and deepen presence</p>
            </div>
          </div>

          <div className="section-header" data-aos="fade-up" data-aos-delay="230">
            <span className="section-subtitle">What You’ll Experience</span>
            <h2>Your Journey Inside</h2>
            <div className="section-divider">
              <span className="divider-line"></span>
              <i className="fas fa-compass"></i>
              <span className="divider-line"></span>
            </div>
            <p className="section-description">
              A soft, guided descent from noise to stillness — where breath becomes anchor, sound becomes doorway, and awareness becomes home.
            </p>
          </div>

          <div className="meditation-features" data-aos="fade-up" data-aos-delay="260">
            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-water"></i>
              </div>
              <h3>Nervous System Ease</h3>
              <p>Regulate stress and settle into a calmer baseline</p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-braille"></i>
              </div>
              <h3>Inner Listening</h3>
              <p>Learn to notice subtle sensations, emotions, and intuition</p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-sun"></i>
              </div>
              <h3>Clarity & Grounding</h3>
              <p>From mental scatter to clear, steady presence</p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-hands"></i>
              </div>
              <h3>Gentle Energy Work</h3>
              <p>Release tension held in the body and breath</p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-seedling"></i>
              </div>
              <h3>A Take-Home Practice</h3>
              <p>Simple micro-rituals to integrate the state into daily life</p>
            </div>
          </div>

          <div className="section-header" data-aos="fade-up" data-aos-delay="290">
            <span className="section-subtitle">Session Flow</span>
            <h2>How the Experience Unfolds</h2>
            <div className="section-divider">
              <span className="divider-line"></span>
              <i className="fas fa-stream"></i>
              <span className="divider-line"></span>
            </div>
            <p className="section-description">
              Every gathering is guided with care. The flow may adapt to the room, but the arc stays the same — from arrival to deep stillness.
            </p>
          </div>

          <div className="meditation-features" data-aos="fade-up" data-aos-delay="320">
            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-door-open"></i>
              </div>
              <h3>Arrival & Intention</h3>
              <p>Grounding, brief guidance, and setting a personal intention</p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-lungs"></i>
              </div>
              <h3>Breath Alignment</h3>
              <p>Simple breathwork to bring the mind into the body</p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-om"></i>
              </div>
              <h3>Naad Meditation</h3>
              <p>Sound-guided awareness with deep inner listening</p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-hand-sparkles"></i>
              </div>
              <h3>Healing Integration</h3>
              <p>Gentle energetic reset and a return to softness</p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-feather"></i>
              </div>
              <h3>Closing & Reflection</h3>
              <p>Quiet closure, reflection prompts, and practical takeaways</p>
            </div>
          </div>

          <div className="section-header" data-aos="fade-up" data-aos-delay="350">
            <span className="section-subtitle">Before You Join</span>
            <h2>Preparation & Aftercare</h2>
            <div className="section-divider">
              <span className="divider-line"></span>
              <i className="fas fa-leaf"></i>
              <span className="divider-line"></span>
            </div>
            <p className="section-description">
              Small choices create a deeper experience. These are gentle guidelines — not rules.
            </p>
          </div>

          <div className="meditation-features" data-aos="fade-up" data-aos-delay="380">
            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-mug-hot"></i>
              </div>
              <h3>Come Light</h3>
              <p>Avoid heavy meals 60–90 minutes before the session</p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <h3>Reduce Stimulation</h3>
              <p>Try a short digital pause — let the senses soften</p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-tint"></i>
              </div>
              <h3>Hydrate</h3>
              <p>Water supports the body in processing release and calm</p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-bed"></i>
              </div>
              <h3>Rest After</h3>
              <p>Keep the day gentle if you can; integration is part of healing</p>
            </div>
          </div>

          <div className="section-header" data-aos="fade-up" data-aos-delay="410">
            <span className="section-subtitle">Takeaways</span>
            <h2>What You May Feel After</h2>
            <div className="section-divider">
              <span className="divider-line"></span>
              <i className="fas fa-star"></i>
              <span className="divider-line"></span>
            </div>
            <p className="section-description">
              Each person’s experience is unique. Many participants describe a quieter mind, softer body, and a sense of being reset from within.
            </p>
          </div>

          <div className="meditation-features" data-aos="fade-up" data-aos-delay="440">
            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-cloud"></i>
              </div>
              <h3>Mental Quiet</h3>
              <p>Less overthinking, more spacious awareness</p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-anchor"></i>
              </div>
              <h3>Grounded Presence</h3>
              <p>A stable feeling of “I am here” — even after you leave</p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-heartbeat"></i>
              </div>
              <h3>Emotional Softening</h3>
              <p>A gentler relationship with feelings and sensations</p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-moon"></i>
              </div>
              <h3>Deep Rest</h3>
              <p>Many feel more ease in sleep and recovery</p>
            </div>
          </div>

          <div className="section-header" data-aos="fade-up" data-aos-delay="250">
            <span className="section-subtitle">For You</span>
            <h2>Who It’s For</h2>
            <div className="section-divider">
              <span className="divider-line"></span>
              <i className="fas fa-user"></i>
              <span className="divider-line"></span>
            </div>
            <p className="section-description">
              Naad Dhyaan welcomes you exactly where you are — from first-time meditators to long-time practitioners.
              If you feel mentally tired, emotionally heavy, overstimulated, or simply curious about inner silence, this space is for you.
            </p>
          </div>

          <div className="persona-grid" data-aos="fade-up" data-aos-delay="300">
            <div className="persona-card">
              <div className="persona-icon">
                <i className="fas fa-seedling"></i>
              </div>
              <h3>Beginners</h3>
              <p>A welcoming start — guided, simple, and deeply calming.</p>
              <div className="persona-points">
                <div className="persona-point"><i className="fas fa-check"></i><span>No prior meditation needed</span></div>
                <div className="persona-point"><i className="fas fa-check"></i><span>Breath + sound make it effortless</span></div>
                <div className="persona-point"><i className="fas fa-check"></i><span>Learn a practice you can repeat</span></div>
              </div>
            </div>

            <div className="persona-card">
              <div className="persona-icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <h3>Busy Minds</h3>
              <p>For the overthinkers, the high-achievers, the always-on.</p>
              <div className="persona-points">
                <div className="persona-point"><i className="fas fa-check"></i><span>Reset mental noise and fatigue</span></div>
                <div className="persona-point"><i className="fas fa-check"></i><span>Return to focus and steadiness</span></div>
                <div className="persona-point"><i className="fas fa-check"></i><span>Support healthier sleep rhythms</span></div>
              </div>
            </div>

            <div className="persona-card">
              <div className="persona-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Those Seeking Healing</h3>
              <p>A soft place to feel, release, and return to yourself.</p>
              <div className="persona-points">
                <div className="persona-point"><i className="fas fa-check"></i><span>Ease stress and emotional heaviness</span></div>
                <div className="persona-point"><i className="fas fa-check"></i><span>Somatic calming through breath</span></div>
                <div className="persona-point"><i className="fas fa-check"></i><span>Gentle energy alignment</span></div>
              </div>
            </div>

            <div className="persona-card">
              <div className="persona-icon">
                <i className="fas fa-route"></i>
              </div>
              <h3>Spiritual Seekers</h3>
              <p>For those drawn to inner silence, mantra, and subtle truth.</p>
              <div className="persona-points">
                <div className="persona-point"><i className="fas fa-check"></i><span>Deepen inner listening (naad)</span></div>
                <div className="persona-point"><i className="fas fa-check"></i><span>Strengthen intuitive clarity</span></div>
                <div className="persona-point"><i className="fas fa-check"></i><span>Stabilize your daily sadhana</span></div>
              </div>
            </div>

            <div className="persona-card">
              <div className="persona-icon">
                <i className="fas fa-music"></i>
              </div>
              <h3>Artists & Creators</h3>
              <p>When you want to create from stillness, not pressure.</p>
              <div className="persona-points">
                <div className="persona-point"><i className="fas fa-check"></i><span>Unlock flow through calm awareness</span></div>
                <div className="persona-point"><i className="fas fa-check"></i><span>Refine sensitivity to rhythm & space</span></div>
                <div className="persona-point"><i className="fas fa-check"></i><span>Reconnect with inspiration</span></div>
              </div>
            </div>

            <div className="persona-card">
              <div className="persona-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Community & Groups</h3>
              <p>A shared field of silence that brings people closer.</p>
              <div className="persona-points">
                <div className="persona-point"><i className="fas fa-check"></i><span>Grounding group experience</span></div>
                <div className="persona-point"><i className="fas fa-check"></i><span>Safe, guided collective practice</span></div>
                <div className="persona-point"><i className="fas fa-check"></i><span>Co-regulation through sound</span></div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default NaadDhyaan;
