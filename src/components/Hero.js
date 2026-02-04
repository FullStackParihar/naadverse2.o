import React, { useState, useRef, useEffect } from 'react';

const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [activeFeature, setActiveFeature] = useState(null);
  const [typedText, setTypedText] = useState('');
  const [typingDone, setTypingDone] = useState(false);
  const [heroImageOffset, setHeroImageOffset] = useState({ x: 0, y: 0 });
  const [isDraggingHeroImage, setIsDraggingHeroImage] = useState(false);
  const heroImageDragStartRef = useRef({ x: 0, y: 0 });
  const heroImageDragBaseRef = useRef({ x: 0, y: 0 });
  
  // Audio refs for sound effects
  const healingSound = useRef(null);
  const soundTherapySound = useRef(null);
  const mindfulnessSound = useRef(null);
  const buttonClickSound = useRef(null);

  const fullTypeText =
    'ॐ NaadVerse – सर्वकलानां नादमयं॥\n' +
    'NaadVerse is a confluence of all art forms — where every sound becomes color, every movement becomes prayer, and every participant becomes part of the living rhythm of the universe It is not just an event, but an awakening through joy — where music, movement, and light dissolve the boundary between artist and audience.';

  useEffect(() => {
    setTypedText('');
    setTypingDone(false);

    let idx = 0;
    const interval = window.setInterval(() => {
      idx += 1;

      setTypedText(fullTypeText.slice(0, idx));

      if (idx >= fullTypeText.length) {
        window.clearInterval(interval);
        setTypingDone(true);
      }
    }, 38);

    return () => window.clearInterval(interval);
  }, [fullTypeText]);

  const handleSoundToggle = () => {
    const video = document.getElementById('heroVideo');
    if (video) {
      video.muted = !video.muted;
      setIsMuted(!isMuted);
    }
  };

  const playSound = (soundRef, nextVolume = 0.3) => {
    const el = soundRef.current;
    if (!el) return;
    if (!el.currentSrc && !el.src) return;

    el.currentTime = 0;
    el.volume = nextVolume;
    el.play().catch(() => {});
  };

  const handleFeatureClick = (feature, soundRef) => {
    setActiveFeature(feature);
    playSound(soundRef);
    setTimeout(() => setActiveFeature(null), 2000);
  };

  const handleButtonClick = () => {
    playSound(buttonClickSound);
  };

  const handleHeroImagePointerDown = (e) => {
    if (e.button != null && e.button !== 0) return;
    e.currentTarget.setPointerCapture?.(e.pointerId);
    setIsDraggingHeroImage(true);
    heroImageDragStartRef.current = { x: e.clientX, y: e.clientY };
    heroImageDragBaseRef.current = { x: heroImageOffset.x, y: heroImageOffset.y };
  };

  const handleHeroImagePointerMove = (e) => {
    if (!isDraggingHeroImage) return;
    const dx = e.clientX - heroImageDragStartRef.current.x;
    const dy = e.clientY - heroImageDragStartRef.current.y;
    setHeroImageOffset({ x: heroImageDragBaseRef.current.x + dx, y: heroImageDragBaseRef.current.y + dy });
  };

  const handleHeroImagePointerUp = (e) => {
    if (!isDraggingHeroImage) return;
    e.currentTarget.releasePointerCapture?.(e.pointerId);
    setIsDraggingHeroImage(false);
  };

  return (
    <header id="home" className="hero">
      {/* Hidden audio elements for sound effects */}
      {/* Holistic Healing - Tibetan Singing Bowl */}
      <audio ref={healingSound} preload="none" />
      {/* Sound Therapy - Crystal Bowl Healing */}
      <audio ref={soundTherapySound} preload="none" />
      {/* Mindfulness - Meditation Bell/Chime */}
      <audio ref={mindfulnessSound} preload="none" />
      {/* Button Click - Soft UI Sound */}
      <audio ref={buttonClickSound} preload="none" />

      <div className="hero-background">
        <div className="hero-video-overlay"></div>
        <video className="hero-video" autoPlay muted loop playsInline id="heroVideo">
          <source src="https://cdn.coverr.co/videos/coverr-meditation-in-nature-6320/1080p.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-particles" id="particles-js"></div>
        <div className="sound-toggle" id="soundToggle" onClick={handleSoundToggle}>
          <i className={`fas ${isMuted ? 'fa-volume-mute' : 'fa-volume-up'}`}></i>
        </div>
      </div>
      <div className="hero-content">
        <div className="hero-text" data-aos="fade-right" data-aos-duration="1000">
          <div className="hero-badge">
            <span className="badge-pulse">शान्ति • करुणा • नाद</span>
          </div>
          <h1 className="glow-text">NaadVerse</h1>
          <p className="tagline">A Devotional Journey Through Sound, Silence, and Presence</p>
          <p className="tagline typewriter-text">
            {typedText}
            <span className={`typewriter-cursor ${typingDone ? 'done' : ''}`} aria-hidden="true">
              |
            </span>
          </p>
          <div className="cta-buttons">
            <a 
              href="#heart" 
              className="primary-button pulse-button"
              onClick={handleButtonClick}
            >
              <i className="fas fa-heart"></i> Heart to Heart
            </a>
            <a 
              href="#meditation" 
              className="secondary-button"
              onClick={handleButtonClick}
            >
              <i className="fas fa-om"></i> नाद ध्यान
            </a>
          </div>

          <div className="hero-features">
            <div 
              className={`feature ${activeFeature === 'healing' ? 'active' : ''}`}
              data-aos="fade-up" 
              data-aos-delay="100"
              onClick={() => handleFeatureClick('healing', healingSound)}
            >
              <span className="feature-icon">
                <i className="fas fa-spa"></i>
              </span>
              <span>Seva</span>
            </div>
            <div 
              className={`feature ${activeFeature === 'therapy' ? 'active' : ''}`}
              data-aos="fade-up" 
              data-aos-delay="200"
              onClick={() => handleFeatureClick('therapy', soundTherapySound)}
            >
              <span className="feature-icon">
                <i className="fas fa-music"></i>
              </span>
              <span>Naad • Dhyaan • Nritya</span>
            </div>
            <div 
              className={`feature ${activeFeature === 'mindfulness' ? 'active' : ''}`}
              data-aos="fade-up" 
              data-aos-delay="300"
              onClick={() => handleFeatureClick('mindfulness', mindfulnessSound)}
            >
              <span className="feature-icon">
                <i className="fas fa-heart"></i>
              </span>
              <span>Karunā</span>
            </div>
          </div>
        </div>

        <div className="hero-image" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
          <div className="floating-image">
            <div className="image-wrapper">
              <img 
                src={`${process.env.PUBLIC_URL || ''}/home2.png`}
                alt="Sound Healing Session" 
                className="main-hero-image"
                draggable={false}
                style={{
                  opacity: 0.82,
                  transform: `translate3d(${heroImageOffset.x}px, ${heroImageOffset.y}px, 0)`,
                  cursor: isDraggingHeroImage ? 'grabbing' : 'grab',
                  touchAction: 'none',
                  transition: isDraggingHeroImage ? 'none' : undefined
                }}
                onPointerDown={handleHeroImagePointerDown}
                onPointerMove={handleHeroImagePointerMove}
                onPointerUp={handleHeroImagePointerUp}
                onPointerCancel={handleHeroImagePointerUp}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = `${process.env.PUBLIC_URL || ''}/home2.png`;
                }}
              />
              <div className="image-overlay"></div>
            </div>
            <div className="hero-image-glow"></div>
            
            <div className="floating-element floating-1">
              <div className="element-inner">
                <i className="fas fa-om"></i>
              </div>
            </div>
            <div className="floating-element floating-2">
              <div className="element-inner">
                <i className="fas fa-heart"></i>
              </div>
            </div>
            <div className="floating-element floating-3">
              <div className="element-inner">
                <i className="fas fa-peace"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
