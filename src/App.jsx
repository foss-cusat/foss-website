import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Events from './pages/Events';
import Projects from './pages/Projects';

import CommandPalette from './components/CommandPalette';
import ScrollAnimations from './components/ScrollAnimations';
import Terminal from './components/Terminal';
import './App.css';

function App() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [scrollDirection, setScrollDirection] = useState('down');
  const [lastScrollY, setLastScrollY] = useState(0);

  // State for controlling the terminal's visibility is now here
  const [isTerminalOpen, setIsTerminalOpen] = useState(true);
  const toggleTerminal = () => setIsTerminalOpen(!isTerminalOpen);
  const closeTerminal = () => setIsTerminalOpen(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        setCommandPaletteOpen(true);
      }
      if (e.key === 'Escape') {
        setCommandPaletteOpen(false);
      }
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up');
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="terminal">
          <div className="terminal-prompt">root@foss ~$ </div>
          <div className="typewriter">Initializing System...</div>
          <div className="loading mt-4"></div>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="App">
        <ScrollAnimations />
        
        {/* Pass the toggle function to the Navigation component */}
        <Navigation onToggleTerminal={toggleTerminal} />
        
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/projects" element={<Projects />} />

          </Routes>
        </AnimatePresence>

        <Footer />

        {/* Pass state and close function to the Terminal */}
        <Terminal isOpen={isTerminalOpen} onClose={closeTerminal} />

        <CommandPalette 
          isOpen={commandPaletteOpen} 
          onClose={() => setCommandPaletteOpen(false)} 
        />
      </div>
    </Router>
  );
}

export default App;
