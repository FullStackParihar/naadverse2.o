import React from 'react';

const Art = () => {
  return (
    <section id="art" className="section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-subtitle">Visual Expression</span>
          <h2>नाद verse</h2>
          <div className="section-divider">
            <span className="divider-line"></span>
            <i className="fas fa-paint-brush"></i>
            <span className="divider-line"></span>
          </div>
          <p className="section-description">
            सर्वकलानां नादमयं,
            <br />
            रूपरंगरससंपन्नम्।
            <br />
            शब्दसंगीतनृत्ययुग्मं,
            <br />
            शून्यशिवसहस्रितम्॥
            <br />
            <br />
            At नाद verse Art is not just seen; it’s experienced. Performances are not just watched; they invite you to connect deeply, creating an unbreakable bond between artists, audiences, and the universal rhythm of life.
          </p>
        </div>

        <div className="art-gallery">
          <div className="art-item" data-aos="fade-up" data-aos-delay="100">
            <div className="art-image">
              <img 
                src={`${process.env.PUBLIC_URL || ''}/n1.jpeg`}
                alt="Abstract art"
              />
            </div>
            <h3>Live Mural Painting</h3>
            <p>Canvas in sync with live music</p>
          </div>

          <div className="art-item" data-aos="fade-up" data-aos-delay="200">
            <div className="art-image">
              <img 
                src={`${process.env.PUBLIC_URL || ''}/n2.jpeg`}
                alt="Mandala art"
              />
            </div>
            <h3>Performances</h3>
            <p>Not watched — experienced</p>
          </div>

          <div className="art-item" data-aos="fade-up" data-aos-delay="300">
            <div className="art-image">
              <img 
                src={`${process.env.PUBLIC_URL || ''}/n3.jpeg`}
                alt="Chakra art"
              />
            </div>
            <h3>Bond</h3>
            <p>Artists • Audience • Universal rhythm</p>
          </div>

          <div className="art-item" data-aos="fade-up" data-aos-delay="100">
            <div className="art-image">
              <img 
                src={`${process.env.PUBLIC_URL || ''}/n4.jpeg`}
                alt="Nature art"
              />
            </div>
            <h3>Nature's Rhythm</h3>
            <p>Organic patterns and natural harmony</p>
          </div>

          <div className="art-item" data-aos="fade-up" data-aos-delay="200">
            <div className="art-image">
              <img 
                src={`${process.env.PUBLIC_URL || ''}/n5.jpeg`}
                alt="Meditation art"
              />
            </div>
            <h3>Inner Light</h3>
            <p>Expressions of consciousness and awakening</p>
          </div>

          <div className="art-item" data-aos="fade-up" data-aos-delay="300">
            <div className="art-image">
              <img 
                src={`${process.env.PUBLIC_URL || ''}/n6.jpeg`}
                alt="Cosmic art"
              />
            </div>
            <h3>Cosmic Dance</h3>
            <p>Universal rhythms and celestial movements</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Art;
