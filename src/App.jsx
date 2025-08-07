import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';

import CommandPalette from './components/CommandPalette';
import ScrollAnimations from './components/ScrollAnimations';
import Terminal from './components/Terminal';
import './App.css';

function App() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [scrollDirection, setScrollDirection] = useState('down');
  const [lastScrollY, setLastScrollY] = useState(0);

  // --- THIS IS THE FIX ---
  // Change the initial state from true to false
  const [isTerminalOpen, setIsTerminalOpen] = useState(false); 
  // -----------------------

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
        
        <Navigation onToggleTerminal={toggleTerminal} />
        
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </AnimatePresence>

        <Footer />

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
