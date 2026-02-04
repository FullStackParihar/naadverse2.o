import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import './components-styles.css';
import './aesthetic-enhancements.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Meditation from './components/Meditation';
import Healing from './components/Healing';
import Music from './components/Music';
import Art from './components/Art';
import Events from './components/Events';
import Gallery from './components/Gallery';
import HeartToHeart from './components/HeartToHeart';
import Footer from './components/Footer';
import NaadDhyaan from './pages/NaadDhyaan';
import NaadFusion from './pages/NaadFusion';
import NaadVerse from './pages/NaadVerse';
import Instruments from './pages/Instruments';

const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const el = document.querySelector(location.hash);
    if (!el) return;

    window.setTimeout(() => {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth'
      });
    }, 0);
  }, [location]);

  return null;
};

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Music />
      <Meditation />
      <Art />
      <Healing />
      <Events />
      <Gallery />
      <HeartToHeart />
    </>
  );
};

function App() {
  const location = useLocation();

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });

    // Refresh AOS on route change
    AOS.refresh();
  }, []);

  useEffect(() => {
    if (location.pathname !== '/') return;

    const asset = (path) => `${process.env.PUBLIC_URL || ''}${path}`;
    window.dispatchEvent(
      new CustomEvent('naadverse:set-background-track', {
        detail: {
          src: asset('/gayatri-mantra.mp3'),
          label: 'Gayatri Mantra (Prayer)',
          autoplay: true
        }
      })
    );
  }, [location.pathname]);

  return (
    <div className="App">
      <Navbar />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/naad-fusion" element={<NaadFusion />} />
        <Route path="/naad-dhyaan" element={<NaadDhyaan />} />
        <Route path="/naad-verse" element={<NaadVerse />} />
        <Route path="/instruments" element={<Instruments />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
