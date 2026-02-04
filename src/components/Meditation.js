import React from 'react';

const Meditation = () => {
  // Meditation sessions with YouTube links
  const meditationSessions = [
    {
      title: "Not a Technique",
      description: "नाद ध्यान is not a technique. It is an experience.",
      image: `${process.env.PUBLIC_URL || ''}/n3.jpeg`,
      duration: "Session",
      level: "Experience",
      youtubeUrl: "https://www.youtube.com/watch?v=inpok4MKVLM" // 20 min Guided Meditation
    },
    {
      title: "Breath Alignment",
      description: "A state where the mind calms, the breath aligns, and the soul begins to remember its truth.",
      image: `${process.env.PUBLIC_URL || ''}/n4.jpeg`,
      duration: "Practice",
      level: "Presence",
      youtubeUrl: "https://www.youtube.com/watch?v=SEfs5TJZ6Nk" // 15 min Breathing Meditation
    },
    {
      title: "Witnessing",
      description: "नाद ध्यान is the art of witnessing without interference.",
      image: `${process.env.PUBLIC_URL || ''}/n5.jpeg`,
      duration: "Ritual",
      level: "Inner Stillness",
      youtubeUrl: "https://www.youtube.com/watch?v=cH-HT9WCtiQ" // 30 min Chakra Meditation
    }
  ];

  return (
    <section id="meditation" className="section dark-bg">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-subtitle">शान्ति साधना</span>
          <h2>नाद ध्यान</h2>
          <div className="section-divider">
            <span className="divider-line"></span>
            <i className="fas fa-spa"></i>
            <span className="divider-line"></span>
          </div>
          <p className="section-description">
            नादोऽस्मि परमो ब्रह्म,
            <br />
            नादोऽहं सर्वमावृतम्।
            <br />
            नादो मे जन्ममृत्यु,
            <br />
            नादेनैव विलीयते॥
            <br />
            <br />
            ॐ शान्तिः शान्तिः शान्तिः॥
            <br />
            May there be peace in the body, peace in the mind, and peace in the world.
            <br />
            <br />
            नाद ध्यान is not a technique — it is a state. A gentle return to breath where the mind softens, the heart opens, and awareness becomes prayer.
          </p>
        </div>
        
        <div className="meditation-carousel" data-aos="fade-up" data-aos-delay="200">
          <div className="carousel-container">
            {meditationSessions.map((session, index) => (
              <div key={index} className="meditation-card">
                <div className="meditation-image">
                  <img 
                    src={session.image}
                    alt={session.title}
                  />
                  <div className="meditation-overlay">
                    <a 
                      href={session.youtubeUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="play-button"
                      title={`Watch ${session.title} on YouTube`}
                    >
                      <i className="fas fa-play"></i>
                    </a>
                  </div>
                </div>
                <div className="meditation-content">
                  <h3>{session.title}</h3>
                  <p>{session.description}</p>
                  <div className="meditation-meta">
                    <span><i className="fas fa-clock"></i> {session.duration}</span>
                    <span><i className="fas fa-signal"></i> {session.level}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="meditation-features" data-aos="fade-up" data-aos-delay="400">
          <div className="feature-box">
            <div className="feature-icon">
              <i className="fas fa-brain"></i>
            </div>
            <h3>Deep Realisation</h3>
            <p>Where the mind calms and presence becomes clear</p>
          </div>
          <div className="feature-box">
            <div className="feature-icon">
              <i className="fas fa-heart"></i>
            </div>
            <h3>Inner Truth</h3>
            <p>The soul begins to remember its truth</p>
          </div>
          <div className="feature-box">
            <div className="feature-icon">
              <i className="fas fa-leaf"></i>
            </div>
            <h3>Witnessing</h3>
            <p>Observe without interference</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Meditation;
