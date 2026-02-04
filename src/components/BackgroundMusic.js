import React, { useState, useRef, useEffect } from 'react';

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [showControls, setShowControls] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const audioRef = useRef(null);
  const isPlayingRef = useRef(false);

  const asset = (path) => `${process.env.PUBLIC_URL || ''}${path}`;

  const musicUrl = "https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3";

  const tracks = useRef({
    ambience: {
      src: musicUrl,
      label: 'Spiritual Ambience'
    },
    hiphop: {
      src: asset('/meditation-hiphop.mp3'),
      label: 'Meditation Hip-Hop'
    },
    mantra: {
      src: asset('/gayatri-mantra.mp3'),
      label: 'Gayatri Mantra (Prayer)'
    },
    religious: {
      src: asset('/religious.mp3'),
      label: 'Religious Prayer'
    }
  }).current;

  const [currentTrack, setCurrentTrack] = useState({
    src: tracks.ambience.src,
    label: tracks.ambience.label
  });

  const [trackKey, setTrackKey] = useState('ambience');

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  useEffect(() => {
    const attemptAutoplay = () => {
      if (!audioRef.current) return;
      if (isPlayingRef.current) return;

      audioRef.current
        .play()
        .then(() => {
          setErrorMessage('');
          setIsPlaying(true);
        })
        .catch(() => {
          setErrorMessage(
            `Unable to play "${currentTrack.label}". Add the audio file in the public folder or choose another track.`
          );
          setIsPlaying(false);
          setShowControls(true);
        });
    };

    const handleFirstInteraction = () => {
      attemptAutoplay();
    };

    window.addEventListener('pointerdown', handleFirstInteraction, { once: true });
    window.addEventListener('keydown', handleFirstInteraction, { once: true });

    return () => {
      window.removeEventListener('pointerdown', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
    };
  }, []);

  useEffect(() => {
    const handleSetTrack = (event) => {
      const next = event?.detail;
      if (!next?.src) return;

      const nextLabel = next.label || 'Peaceful Ambience';
      setErrorMessage('');
      setCurrentTrack({ src: next.src, label: nextLabel });

      const resolvedKey = Object.keys(tracks).find((key) => tracks[key]?.src === next.src);
      if (resolvedKey) {
        setTrackKey(resolvedKey);
      }

      if (!audioRef.current) return;

      audioRef.current.src = next.src;
      audioRef.current.load();

      const shouldAutoplay =
        typeof next.autoplay === 'boolean' ? next.autoplay : isPlayingRef.current;

      if (!shouldAutoplay) {
        audioRef.current.pause();
        setIsPlaying(false);
        return;
      }

      audioRef.current
        .play()
        .then(() => {
          setErrorMessage('');
          setIsPlaying(true);
        })
        .catch(() => {
          setErrorMessage(`Unable to play "${nextLabel}". Add the audio file in the public folder or choose another track.`);
          setIsPlaying(false);
          setShowControls(true);
        });
    };

    window.addEventListener('naadverse:set-background-track', handleSetTrack);
    return () => window.removeEventListener('naadverse:set-background-track', handleSetTrack);
  }, []);

  const setTrackByKey = (nextKey, options = {}) => {
    const nextTrack = tracks[nextKey];
    if (!nextTrack) return;

    const shouldAutoplay =
      typeof options.autoplay === 'boolean' ? options.autoplay : isPlayingRef.current;

    setTrackKey(nextKey);
    setErrorMessage('');
    setCurrentTrack({ src: nextTrack.src, label: nextTrack.label });

    if (!audioRef.current) return;
    audioRef.current.src = nextTrack.src;
    audioRef.current.load();

    if (!shouldAutoplay) {
      audioRef.current.pause();
      setIsPlaying(false);
      return;
    }

    audioRef.current
      .play()
      .then(() => {
        setErrorMessage('');
        setIsPlaying(true);
      })
      .catch(() => {
        setErrorMessage(`Unable to play "${nextTrack.label}". Add the audio file in the public folder or choose another track.`);
        setIsPlaying(false);
        setShowControls(true);
      });
  };

  const handleTrackChange = (e) => {
    // This is a direct user interaction, so we can safely autoplay.
    setTrackByKey(e.target.value, { autoplay: true });
  };

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      return;
    }

    audioRef.current
      .play()
      .then(() => {
        setErrorMessage('');
        setIsPlaying(true);
      })
      .catch(() => {
        setErrorMessage('Unable to play this track. Please choose another track or add the missing audio file.');
        setIsPlaying(false);
        setShowControls(true);
      });
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const toggleControls = () => {
    setShowControls(!showControls);
  };

  return (
    <>
      <audio 
        ref={audioRef} 
        loop 
        preload="auto"
        src={currentTrack.src}
        onPlay={() => {
          setErrorMessage('');
          setIsPlaying(true);
        }}
        onPause={() => setIsPlaying(false)}
        onError={() => {
          const fallback = tracks.ambience;
          setTrackKey('ambience');
          setCurrentTrack({ src: fallback.src, label: fallback.label });
          setErrorMessage(`Unable to load "${currentTrack.label}". Please add the MP3 in the public folder.`);
          if (!audioRef.current) return;
          audioRef.current.src = fallback.src;
          audioRef.current.load();
          setIsPlaying(false);
          setShowControls(true);
        }}
      />
      
      <div className={`background-music-widget ${showControls ? 'expanded' : ''}`}>
        <button 
          className={`music-toggle-btn${isPlaying ? ' playing' : ''}`} 
          onClick={togglePlay}
          title={isPlaying ? "Pause Music" : "Play Music"}
        >
          <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
        </button>

        <button 
          className="music-settings-btn" 
          onClick={toggleControls}
          title="Music Settings"
        >
          <i className="fas fa-sliders-h"></i>
        </button>

        {showControls && (
          <div className="music-controls-panel">
            <div className="volume-control">
              <i className="fas fa-volume-down"></i>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className="volume-slider"
              />
              <i className="fas fa-volume-up"></i>
            </div>
            <select className="track-select" value={trackKey} onChange={handleTrackChange} aria-label="Select track">
              <option value="ambience">{tracks.ambience.label}</option>
              <option value="hiphop">{tracks.hiphop.label}</option>
              <option value="mantra">{tracks.mantra.label}</option>
              <option value="religious">{tracks.religious.label}</option>
            </select>
            {errorMessage && <div className="music-error">{errorMessage}</div>}
            <span className="music-label">{currentTrack.label}</span>
          </div>
        )}
      </div>
    </>
  );
};

export default BackgroundMusic;
