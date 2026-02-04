import React from 'react';

const Healing = () => {
  return (
    <section id="healing" className="section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-subtitle">Restore & Rebalance</span>
          <h2>Healing Through Sound</h2>
          <div className="section-divider">
            <span className="divider-line"></span>
            <i className="fas fa-heart"></i>
            <span className="divider-line"></span>
          </div>
          <p className="section-description">
            Experience the ancient art of sound healing, where therapeutic frequencies 
            and vibrations restore harmony to body, mind, and spirit.
          </p>
        </div>
        
        <div className="healing-grid">
          <div className="healing-method" data-aos="fade-up" data-aos-delay="100">
            <div className="healing-image">
              <img 
                src={`${process.env.PUBLIC_URL || ''}/n6.jpeg`}
                alt="Singing bowls"
              />
            </div>
            <div className="healing-content">
              <h3>Tibetan Singing Bowls</h3>
              <p>
                Ancient bowls create harmonic overtones that promote deep relaxation 
                and cellular healing through vibrational therapy.
              </p>
              <ul className="healing-benefits">
                <li><i className="fas fa-check"></i> Reduces stress and anxiety</li>
                <li><i className="fas fa-check"></i> Improves sleep quality</li>
                <li><i className="fas fa-check"></i> Balances energy centers</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="healing-testimonials" data-aos="fade-up">
          <h3>What Our Community Says</h3>
          <div className="testimonial-slider">
            <div className="testimonial">
              <div className="testimonial-content">
                <i className="fas fa-quote-left"></i>
                <p>
                  "The sound healing sessions have transformed my life. I feel more 
                  centered and at peace than ever before."
                </p>
              </div>
              <div className="testimonial-author">
                <div className="author-image">
                  <img src={`${process.env.PUBLIC_URL || ''}/n1.jpeg`} alt="Sarah M." />
                </div>
                <div className="author-info">
                  <h4>Sarah M.</h4>
                  <span>Yoga Instructor</span>
                </div>
              </div>
            </div>

            <div className="testimonial">
              <div className="testimonial-content">
                <i className="fas fa-quote-left"></i>
                <p>
                  "After years of chronic stress, these healing sessions helped me 
                  find relief and reconnect with my inner self."
                </p>
              </div>
              <div className="testimonial-author">
                <div className="author-image">
                  <img src={`${process.env.PUBLIC_URL || ''}/n2.jpeg`} alt="Michael R." />
                </div>
                <div className="author-info">
                  <h4>Michael R.</h4>
                  <span>Corporate Executive</span>
                </div>
              </div>
            </div>

            <div className="testimonial">
              <div className="testimonial-content">
                <i className="fas fa-quote-left"></i>
                <p>
                  "The singing bowls created a profound shift in my energy — calm, clarity, and a deep sense of peace."
                </p>
              </div>
              <div className="testimonial-author">
                <div className="author-image">
                  <img src={`${process.env.PUBLIC_URL || ''}/n3.jpeg`} alt="Priya K." />
                </div>
                <div className="author-info">
                  <h4>Priya K.</h4>
                  <span>Wellness Coach</span>
                </div>
              </div>
            </div>
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

export default Healing;
