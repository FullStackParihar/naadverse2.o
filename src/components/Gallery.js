import React, { useState } from 'react';

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [filter, setFilter] = useState('all');

  const asset = (path) => `${process.env.PUBLIC_URL || ''}${path}`;
  const galleryVideoSrc = encodeURI(asset('/WhatsApp Video 2025-12-05 at 14.50.54.mp4'));

  const withFallback = (primarySrc, fallbackSrc) => ({
    primarySrc,
    fallbackSrc
  });

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      ...withFallback(asset('/n1.png'), asset('/n1.jpeg')),
      title: "NaadVerse",
      description: "Sacred moments",
      category: "healing"
    },
    {
      id: 2,
      type: 'image',
      ...withFallback(asset('/n2.png'), asset('/n2.jpeg')),
      title: "NaadVerse",
      description: "Sound & stillness",
      category: "instruments"
    },
    {
      id: 3,
      type: 'image',
      ...withFallback(asset('/n3.png'), asset('/n3.jpeg')),
      title: "NaadVerse",
      description: "Meditative presence",
      category: "meditation"
    },
    {
      id: 4,
      type: 'image',
      ...withFallback(asset('/n4.png'), asset('/n4.jpeg')),
      title: "NaadVerse",
      description: "Breath & movement",
      category: "workshop"
    },
    {
      id: 5,
      type: 'image',
      ...withFallback(asset('/n5.png'), asset('/n5.jpeg')),
      title: "NaadVerse",
      description: "Inner calm",
      category: "meditation"
    },
    {
      id: 6,
      type: 'image',
      ...withFallback(asset('/n6.png'), asset('/n6.jpeg')),
      title: "NaadVerse",
      description: "Healing frequencies",
      category: "healing"
    },
    {
      id: 7,
      type: 'image',
      ...withFallback(asset('/n7.png'), asset('/n7.jpeg')),
      title: "NaadVerse",
      description: "Live moments",
      category: "workshop"
    },
    {
      id: 8,
      type: 'image',
      ...withFallback(asset('/n8.png'), asset('/n8.jpeg')),
      title: "NaadVerse",
      description: "Community energy",
      category: "workshop"
    },
    {
      id: 9,
      type: 'video',
      src: galleryVideoSrc,
      title: "NaadVerse",
      description: "Video",
      category: "workshop"
    }
  ];

  const resolveImageSrc = (item) => {
    if (!item) return '';
    return item.primarySrc || item.src || '';
  };

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  const openLightbox = (item) => {
    setSelectedItem(item);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedItem(null);
    document.body.style.overflow = 'auto';
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeLightbox();
  };

  React.useEffect(() => {
    if (selectedItem) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [selectedItem]);

  return (
    <section id="gallery" className="section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-subtitle">Moments</span>
          <h2>Gallery</h2>
          <div className="section-divider">
            <span className="divider-line"></span>
            <i className="fas fa-images"></i>
            <span className="divider-line"></span>
          </div>
          <p className="section-description">
            Glimpses from our sound healing sessions, workshops, and community gatherings.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="gallery-filters" data-aos="fade-up" data-aos-delay="100">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            <i className="fas fa-th"></i> All
          </button>
          <button 
            className={`filter-btn ${filter === 'meditation' ? 'active' : ''}`}
            onClick={() => setFilter('meditation')}
          >
            <i className="fas fa-spa"></i> Meditation
          </button>
          <button 
            className={`filter-btn ${filter === 'healing' ? 'active' : ''}`}
            onClick={() => setFilter('healing')}
          >
            <i className="fas fa-heart"></i> Healing
          </button>
          <button 
            className={`filter-btn ${filter === 'instruments' ? 'active' : ''}`}
            onClick={() => setFilter('instruments')}
          >
            <i className="fas fa-music"></i> Instruments
          </button>
          <button 
            className={`filter-btn ${filter === 'workshop' ? 'active' : ''}`}
            onClick={() => setFilter('workshop')}
          >
            <i className="fas fa-users"></i> Workshops
          </button>
        </div>

        <div className="gallery-grid">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id}
              className="gallery-item" 
              data-aos="zoom-in" 
              data-aos-delay={100 * ((index % 3) + 1)}
              onClick={() => openLightbox(item)}
            >
              {item.type === 'video' ? (
                <video src={item.src} muted playsInline preload="metadata" />
              ) : (
                <img
                  src={resolveImageSrc(item)}
                  alt={item.title}
                  onError={(e) => {
                    if (item.fallbackSrc && e.currentTarget.src !== item.fallbackSrc) {
                      e.currentTarget.src = item.fallbackSrc;
                    }
                  }}
                />
              )}
              <div className="gallery-overlay">
                <div className="gallery-icon">
                  <i className="fas fa-search-plus"></i>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Image Count */}
        <div className="gallery-count" data-aos="fade-up">
          <p>Showing {filteredItems.length} of {galleryItems.length} items</p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              <i className="fas fa-times"></i>
            </button>
            {selectedItem.type === 'video' ? (
              <video src={selectedItem.src} controls autoPlay playsInline className="lightbox-video" />
            ) : (
              <img
                src={resolveImageSrc(selectedItem)}
                alt={selectedItem.title}
                className="lightbox-image"
                onError={(e) => {
                  if (selectedItem.fallbackSrc && e.currentTarget.src !== selectedItem.fallbackSrc) {
                    e.currentTarget.src = selectedItem.fallbackSrc;
                  }
                }}
              />
            )}
            <div className="lightbox-info">
              <h3>{selectedItem.title}</h3>
              <p>{selectedItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
