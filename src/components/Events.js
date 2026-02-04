import React from 'react';

const Events = () => {
  const pillars = [
    {
      icon: 'fas fa-palette',
      title: 'Visual Arts',
      body: 'Painters, graffiti creators, and digital projection artists paint in sync with live music.'
    },
    {
      icon: 'fas fa-theater-masks',
      title: 'Performing Arts',
      body: 'Dancers, clowns, theatre artists, and movement practitioners embody rhythm through body and motion.'
    },
    {
      icon: 'fas fa-wave-square',
      title: 'Sonic Arts',
      body: 'Musicians, sound healers, and DJs blend Indian classical, Afro-techno, ambient, and tribal Naad journeys.'
    },
    {
      icon: 'fas fa-fire',
      title: 'Fire & Light Arts',
      body: 'Fire spinners, light painters, laser and visual sculptors turn the night into a cosmic celebration.'
    },
    {
      icon: 'fas fa-drum',
      title: 'Folk & Spiritual Traditions',
      body: 'Baul singers, tribal drummers, Sufi chanters, and storytellers connect ancient vibrations with modern soundscapes.'
    }
  ];

  const festivalFlow = [
    {
      icon: 'fas fa-sun',
      title: 'Mornings – “Anahata”',
      body: 'Sound meditations, sunrise ragas, and collective breathing circles to align inner rhythm.'
    },
    {
      icon: 'fas fa-brush',
      title: 'Afternoons – “Karma Canvas”',
      body: 'Collaborative workshops — live mural painting, movement labs, storytelling, projection mapping, and sound sculpting.'
    },
    {
      icon: 'fas fa-bolt',
      title: 'Evenings – “MahāNaad”',
      body: 'Grand confluence performances merging music, dance, light, and fire — the festival’s pulsating heart.'
    },
    {
      icon: 'fas fa-fire-alt',
      title: 'Nights – “The Naad Circle”',
      body: 'Artists and audiences sit together around a central fire, co-creating spontaneous rhythms — drums, chants, laughter, silence.'
    },
    {
      icon: 'fas fa-users',
      title: 'Audience as Co-Creators',
      body: 'Every participant paints, dances, sings, or simply resonates — no one is a spectator.'
    },
    {
      icon: 'fas fa-moon',
      title: 'The Final Dawn',
      body: 'A grand silence ritual — thousands meditate together, realizing that the Naad, the sound of creation, is within.'
    }
  ];

  return (
    <section id="events" className="section dark-bg">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-subtitle">NaadVerse Event</span>
          <h2>NaadVerse – सर्वकलानां नादमयं</h2>
          <div className="section-divider">
            <span className="divider-line"></span>
            <i className="fas fa-calendar-alt"></i>
            <span className="divider-line"></span>
          </div>
          <p className="section-description">
            An Immersive Multi-Art Festival | A Journey Through Sound, Light, and Spirit
          </p>
        </div>

        <div className="naadverse-event naadverse-event--creative" data-aos="fade-up" data-aos-delay="120">
          <div className="naadverse-event__layout">
            <div className="naadverse-event__content" data-aos="fade-right" data-aos-delay="160">
              <div className="naadverse-event__quote">
                “सर्वकलानां नादमयं, रूपरंगरससंपन्नम्。
                शब्दसंगीतनृत्ययुग्मं, शून्यशिवसहस्रितम्॥”
              </div>

              <p>
                NaadVerse is a confluence of all art forms — where every sound becomes color, every movement becomes prayer,
                and every participant becomes part of the living rhythm of the universe.
                <br />
                It is not just an event, but an awakening through joy — where music, movement, and light dissolve the boundary
                between artist and audience.
              </p>

              <div className="naadverse-event__divider" aria-hidden="true"></div>

              <div className="naadverse-event__lede">
                NaadVerse is not a stage — it is a breathing organism of art, music, and consciousness.
              </div>

              <div className="naadverse-event__pillars">
                {pillars.map((p) => (
                  <div key={p.title} className="naadverse-event__pillar">
                    <div className="naadverse-event__pillar-icon">
                      <i className={p.icon}></i>
                    </div>
                    <div className="naadverse-event__pillar-body">
                      <div className="naadverse-event__pillar-title">{p.title}</div>
                      <div className="naadverse-event__pillar-text">{p.body}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="naadverse-event__divider" aria-hidden="true"></div>

              <div className="naadverse-event__meta-row">
                <div className="naadverse-event__meta-pill">
                  <span className="label">Duration</span>
                  <span className="value">3–5 days</span>
                </div>
                <div className="naadverse-event__meta-pill">
                  <span className="label">Essence</span>
                  <span className="value">Art • Music • Meditation • Co-creation</span>
                </div>
              </div>
            </div>

            <div className="naadverse-event__visual" data-aos="fade-left" data-aos-delay="160">
              <div className="naadverse-event__collage">
                <div className="naadverse-event__collage-item is-large">
                  <img src={`${process.env.PUBLIC_URL || ''}/nd1.jpeg`} alt="NaadVerse" loading="lazy" />
                </div>
                <div className="naadverse-event__collage-item">
                  <img src={`${process.env.PUBLIC_URL || ''}/n3.jpeg`} alt="NaadVerse" loading="lazy" />
                </div>
                <div className="naadverse-event__collage-item">
                  <img src={`${process.env.PUBLIC_URL || ''}/n6.jpeg`} alt="NaadVerse" loading="lazy" />
                </div>
                <div className="naadverse-event__collage-item">
                  <img src={`${process.env.PUBLIC_URL || ''}/n8.jpeg`} alt="NaadVerse" loading="lazy" />
                </div>
              </div>

              <div className="naadverse-event__flow">
                <div className="naadverse-event__flow-title">Festival Flow</div>
                <div className="naadverse-event__flow-items">
                  {festivalFlow.map((step) => (
                    <div key={step.title} className="naadverse-event__flow-item">
                      <div className="naadverse-event__flow-icon">
                        <i className={step.icon}></i>
                      </div>
                      <div className="naadverse-event__flow-body">
                        <div className="naadverse-event__flow-heading">{step.title}</div>
                        <div className="naadverse-event__flow-text">{step.body}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="naadverse-event__final" data-aos="fade-up" data-aos-delay="220">
            Every corner of NaadVerse — from canvas to crowd — becomes a shared field of creation where sound births form,
            and silence dissolves all.
            <br />
            <span>
              NaadVerse is not a performance — it is a living mirror reminding us that the whole universe vibrates inside each being.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
