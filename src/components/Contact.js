import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      interest: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="section dark-bg">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-subtitle">Get in Touch</span>
          <h2>Contact Us</h2>
          <div className="section-divider">
            <span className="divider-line"></span>
            <i className="fas fa-envelope"></i>
            <span className="divider-line"></span>
          </div>
          <p className="section-description">
            Ready to begin your journey? Reach out to us for bookings, inquiries, 
            or to learn more about our offerings.
          </p>
        </div>

        <div className="contact-container">
          <div className="contact-info" data-aos="fade-right">
            <h3>Connect With Us</h3>
            <p>
              We're here to guide you on your path to wellness and inner peace. 
              Whether you're interested in private sessions, group events, or workshops, 
              we'd love to hear from you.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h4>Location</h4>
                  <p>123 Zen Street, Meditation District<br/>Mumbai, India 400001</p>
                </div>
              </div>

              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <div>
                  <h4>Phone</h4>
                  <p>+91 98765 43210</p>
                </div>
              </div>

              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h4>Email</h4>
                  <p>hello@naadverse.com</p>
                </div>
              </div>

              <div className="contact-item">
                <i className="fas fa-clock"></i>
                <div>
                  <h4>Hours</h4>
                  <p>Mon - Sat: 9:00 AM - 8:00 PM<br/>Sunday: By Appointment</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="#" className="social-icon" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-icon" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="social-icon" aria-label="Spotify">
                <i className="fab fa-spotify"></i>
              </a>
              <a href="#" className="social-icon" aria-label="SoundCloud">
                <i className="fab fa-soundcloud"></i>
              </a>
            </div>
          </div>

          <div className="contact-form-container" data-aos="fade-left">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  required
                >
                  <option value="">I'm interested in... *</option>
                  <option value="sound-healing">Sound Healing Session</option>
                  <option value="meditation">Meditation Workshop</option>
                  <option value="private">Private Session</option>
                  <option value="group">Group Event</option>
                  <option value="retreat">Retreat</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message *"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="primary-button">
                <i className="fas fa-paper-plane"></i> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
