import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Executive from './pages/Executive';
import Activities from './pages/Activities';
import Events from './pages/Events';
import Workshops from './pages/Workshops';
import Publications from './pages/Publications';
import Projects from './pages/Projects';
import Resources from './pages/Resources';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import ParticleBackground from './components/ParticleBackground';
import ScrollToTop from './components/ScrollToTop';
import IntroScreen from './components/IntroScreen';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const hasVisited = localStorage.getItem('bnmpc-visited');
    if (hasVisited) {
      setShowIntro(false);
    }
  }, []);

  const handleIntroComplete = () => {
    localStorage.setItem('bnmpc-visited', 'true');
    setShowIntro(false);
  };

  if (showIntro) {
    return <IntroScreen onComplete={handleIntroComplete} />;
  }

  return (
    <Router>
      <div className="relative min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-primary-900 text-white overflow-x-hidden">
        <ParticleBackground />
        <div className="relative z-10">
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/executive" element={<Executive />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/events" element={<Events />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;