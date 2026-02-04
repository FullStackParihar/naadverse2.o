import React, { useState, useRef } from 'react';

const Music = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e) => {
    const seekTime = (e.target.value / 100) * duration;
    if (audioRef.current) {
      audioRef.current.currentTime = seekTime;
      setCurrentTime(seekTime);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <section id="music" className="section dark-bg">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-subtitle">Sonic Journeys</span>
          <h2>नाद Fusion</h2>
          <div className="section-divider">
            <span className="divider-line"></span>
            <i className="fas fa-music"></i>
            <span className="divider-line"></span>
          </div>
          <p className="section-description">
            सर्वस्वरानां समन्वयः,
            <br />
            अनाहदनादध्वनिः।
            <br />
            तालसंगीतलयमिश्रः,
            <br />
            शृणु मायारससंपन्नः॥
            <br />
            <br />
            “नाद Fusion” is a sonic journey blending classical & folk textures with modern electronic pulse. A DJ orchestrates a collaborative live performance with musicians playing violin, darabuka, cajon, djembe, drum, guitar, mouth organ, and captivating vocals. At नाद Fusion, music is not just heard; it’s felt.
          </p>
        </div>
        
        <div className="music-container" data-aos="fade-up" data-aos-delay="200">
          <div className="now-playing-container">
            <div className="now-playing">
              <div className="album-art">
                <img 
                  src={`${process.env.PUBLIC_URL || ''}/n7.jpeg`}
                  alt="Album Art"
                />
                <div className="play-overlay">
                  <button className="play-button" onClick={togglePlay}>
                    <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
                  </button>
                </div>
              </div>
              
              <div className="track-info">
                <h3>नाद Fusion</h3>
                <p className="artist">NaadVerse</p>
                <p className="album">Collaborative Live Performance</p>
                
                <div className="progress-container">
                  <span className="time-current">{formatTime(currentTime)}</span>
                  <input 
                    type="range" 
                    className="progress-bar"
                    min="0"
                    max="100"
                    value={duration ? (currentTime / duration) * 100 : 0}
                    onChange={handleSeek}
                  />
                  <span className="time-total">{formatTime(duration)}</span>
                </div>
                
                <div className="music-controls">
                  <button className="control-button">
                    <i className="fas fa-step-backward"></i>
                  </button>
                  <button className="control-button play-button" onClick={togglePlay}>
                    <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
                  </button>
                  <button className="control-button">
                    <i className="fas fa-step-forward"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="music-categories">
            <h3>Browse by Category</h3>
            <div className="category-grid">
              <div className="category-card" style={{backgroundImage: `url(${process.env.PUBLIC_URL || ''}/n1.jpeg)`}}>
                <div className="category-overlay">
                  <h4>Indian Classical</h4>
                  <p>Ragas</p>
                </div>
              </div>
              
              <div className="category-card" style={{backgroundImage: `url(${process.env.PUBLIC_URL || ''}/n2.jpeg)`}}>
                <div className="category-overlay">
                  <h4>Folk Textures</h4>
                  <p>Roots</p>
                </div>
              </div>
              
              <div className="category-card" style={{backgroundImage: `url(${process.env.PUBLIC_URL || ''}/n3.jpeg)`}}>
                <div className="category-overlay">
                  <h4>Electronic Pulse</h4>
                  <p>Energy</p>
                </div>
              </div>
              
              <div className="category-card" style={{backgroundImage: `url(${process.env.PUBLIC_URL || ''}/n4.jpeg)`}}>
                <div className="category-overlay">
                  <h4>Live Instruments</h4>
                  <p>Collaboration</p>
                </div>
              </div>
            </div>
          </div>

          <div className="streaming-platforms" data-aos="fade-up">
            <h3>Listen on Your Favorite Platform</h3>
            <div className="platform-buttons">
              <a href="https://open.spotify.com/" className="streaming-button" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-spotify"></i> Spotify
              </a>
              <a href="https://music.apple.com/" className="streaming-button" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-apple"></i> Apple Music
              </a>
              <a href="https://music.youtube.com/" className="streaming-button" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube"></i> YouTube Music
              </a>
              <a href="https://soundcloud.com/" className="streaming-button" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-soundcloud"></i> SoundCloud
              </a>
            </div>
          </div>
        </div>
        
        <audio 
          ref={audioRef}
          id="audio-player" 
          preload="metadata"
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
        >
          <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
      
      <div className="floating-notes">
        <div className="note">♪</div>
        <div className="note">♫</div>
        <div className="note">♪</div>
      </div>
    </section>
  );
};

export default Music;
