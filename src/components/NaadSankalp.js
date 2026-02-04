import React, { useMemo, useState } from 'react';

const NaadSankalp = () => {
  const options = useMemo(
    () => [
      {
        intention: 'I choose stillness before reaction.',
        microPractice: 'Take 7 slow breaths. On each exhale, relax the jaw and shoulders.'
      },
      {
        intention: 'I listen deeply — to sound, to silence, to myself.',
        microPractice: 'Close your eyes for 60 seconds. Notice the farthest sound you can hear, then the closest.'
      },
      {
        intention: 'I let rhythm guide me back into the body.',
        microPractice: 'Tap a gentle beat on your heart or thigh for 90 seconds. Match breath to the rhythm.'
      },
      {
        intention: 'I soften my nervous system with breath and vibration.',
        microPractice: 'Hum softly on a long exhale for 5 rounds. Feel vibration in chest and face.'
      },
      {
        intention: 'I create from presence, not pressure.',
        microPractice: 'Write 3 lines: “What am I feeling?” “What do I need?” “One small next step.”'
      },
      {
        intention: 'I release what is heavy — through movement and sound.',
        microPractice: 'Shake out the arms and legs for 45 seconds. Then stand still and feel the contrast.'
      }
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const current = options[index];

  const next = () => {
    setIndex((prev) => (prev + 1) % options.length);
  };

  const copy = async () => {
    const text = `Naad Sankalp:\n${current.intention}\n\nMicro-practice:\n${current.microPractice}`;
    try {
      await navigator.clipboard.writeText(text);
    } catch (e) {
      window.prompt('Copy this Sankalp:', text);
    }
  };

  return (
    <section id="sankalp" className="section dark-bg">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-subtitle">A Unique Ritual</span>
          <h2>Naad Sankalp</h2>
          <div className="section-divider">
            <span className="divider-line"></span>
            <i className="fas fa-seedling"></i>
            <span className="divider-line"></span>
          </div>
          <p className="section-description">
            A small intention can reshape a whole day. Choose a Sankalp and a micro-practice — take it with you after the music ends.
          </p>
        </div>

        <div className="sankalp-grid" data-aos="fade-up" data-aos-delay="150">
          <div className="persona-card sankalp-card">
            <div className="persona-icon">
              <i className="fas fa-om"></i>
            </div>
            <h3>Your Sankalp</h3>
            <p className="sankalp-text">{current.intention}</p>

            <div className="persona-points sankalp-points">
              <div className="persona-point">
                <i className="fas fa-check"></i>
                <span>{current.microPractice}</span>
              </div>
            </div>

            <div className="cta-buttons sankalp-actions">
              <button type="button" className="primary-button" onClick={next}>
                <i className="fas fa-sync"></i> New Sankalp
              </button>
              <button type="button" className="secondary-button" onClick={copy}>
                <i className="fas fa-copy"></i> Copy
              </button>
            </div>
          </div>

          <div className="meditation-features sankalp-mini" data-aos="fade-up" data-aos-delay="250">
            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-clock"></i>
              </div>
              <h3>2 Minutes</h3>
              <p>Small enough to do daily — powerful enough to shift state.</p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Body First</h3>
              <p>Breath + vibration help you feel safe, grounded, and present.</p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Shareable</h3>
              <p>Copy and send it to your circle — co-regulate together.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NaadSankalp;
