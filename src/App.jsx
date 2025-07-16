import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Events from './pages/Events';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import CommandPalette from './components/CommandPalette';
import ScrollAnimations from './components/ScrollAnimations';
import './App.css';

function App() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [scrollDirection, setScrollDirection] = useState('down');
  const [lastScrollY, setLastScrollY] = useState(0);
  // const [terminalOpen, setTerminalOpen] = useState(false); // Not needed if RetroTerminal is removed

  useEffect(() => {
    // Simulate loading time for terminal boot sequence
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
      if (e.ctrlKey && e.key === '`') {
        e.preventDefault();
        // setTerminalOpen((open) => !open); // Not needed if RetroTerminal is removed
      }
      if (e.key === 'Escape') {
        setCommandPaletteOpen(false);
        // setTerminalOpen(false); // Not needed if RetroTerminal is removed
      }
    };

    // Scroll direction detection
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
    <HelmetProvider>
      <Router>
        <div className="App">
          <ScrollAnimations />
          {/* <RetroTerminal visible={terminalOpen} onClose={() => setTerminalOpen(false)} /> */}
          <Navigation />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/events" element={<Events />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>

          <CommandPalette 
            isOpen={commandPaletteOpen} 
            onClose={() => setCommandPaletteOpen(false)} 
          />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
