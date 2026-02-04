import React, { useMemo, useState } from 'react';

const HeartToHeart = () => {
  const blessings = useMemo(
    () => [
      {
        mantra: 'ॐ सर्वे भवन्तु सुखिनः। सर्वे सन्तु निरामयाः।',
        meaning: 'May all be happy. May all be free from illness.',
        kindness: 'Message one person: “I’m here for you. You matter.” (no advice, only warmth).'
      },
      {
        mantra: 'ॐ शान्तिः शान्तिः शान्तिः॥',
        meaning: 'Peace in the body, peace in the mind, peace in the world.',
        kindness: 'Offer silent blessings for 7 breaths for someone you love (or even someone you struggle with).'
      },
      {
        mantra: 'लोकाः समस्ताः सुखिनो भवन्तु॥',
        meaning: 'May all beings everywhere be happy and free.',
        kindness: 'Do one small सेवा: give water/food to someone (or a bird), with gratitude.'
      },
      {
        mantra: 'करुणा ही धर्म है।',
        meaning: 'Compassion is the highest practice.',
        kindness: 'Forgive one small thing today: release a grievance and choose softness for 1 minute.'
      },
      {
        mantra: 'जैसा भाव, वैसा अनुभव।',
        meaning: 'The state of your heart shapes your experience.',
        kindness: 'Before speaking, pause for one breath and choose the kindest sentence.'
      },
      {
        mantra: 'राम नाम सत्य है।',
        meaning: 'Truth brings steadiness and surrender.',
        kindness: 'Repeat your chosen name/mantra softly for 2 minutes, then smile at someone.'
      }
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const current = blessings[index];

  const next = () => {
    setIndex((prev) => (prev + 1) % blessings.length);
  };

  const copy = async () => {
    const text = `हृदय से हृदय तक\n\n${current.mantra}\n${current.meaning}\n\nआज की करुणा/सेवा:\n${current.kindness}`;
    try {
      await navigator.clipboard.writeText(text);
    } catch (e) {
      window.prompt('Copy this:', text);
    }
  };

  return (
    <section id="heart" className="section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-subtitle">Heart to Heart</span>
          <h2>हृदय से हृदय तक</h2>
          <div className="section-divider">
            <span className="divider-line"></span>
            <i className="fas fa-heart"></i>
            <span className="divider-line"></span>
          </div>
          <p className="section-description">
            A gentle practice of भक्ति, करुणा, and सेवा — to reconnect with yourself and with people, heart to heart.
          </p>
        </div>

        <div className="heart-grid" data-aos="fade-up" data-aos-delay="150">
          <div className="persona-card heart-card">
            <div className="persona-icon">
              <i className="fas fa-praying-hands"></i>
            </div>
            <h3>Today’s Blessing</h3>
            <p className="heart-mantra">{current.mantra}</p>
            <p className="heart-meaning">{current.meaning}</p>

            <div className="persona-points">
              <div className="persona-point">
                <i className="fas fa-check"></i>
                <span>{current.kindness}</span>
              </div>
            </div>

            <div className="cta-buttons heart-actions">
              <button type="button" className="primary-button" onClick={next}>
                <i className="fas fa-sync"></i> New Blessing
              </button>
              <button type="button" className="secondary-button" onClick={copy}>
                <i className="fas fa-copy"></i> Copy
              </button>
            </div>
          </div>

          <div className="meditation-features heart-mini" data-aos="fade-up" data-aos-delay="250">
            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-lungs"></i>
              </div>
              <h3>One Breath</h3>
              <p>Pause before reaction — return to softness.</p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-hands"></i>
              </div>
              <h3>One Act</h3>
              <p>A small kindness can heal a whole day.</p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-om"></i>
              </div>
              <h3>One Name</h3>
              <p>Repeat your mantra and let the mind become quiet.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeartToHeart;
