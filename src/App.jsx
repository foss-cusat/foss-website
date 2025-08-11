import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Event from './pages/Event';

import CommandPalette from './components/CommandPalette';
import ScrollAnimations from './components/ScrollAnimations';
import Terminal from './components/Terminal';
import './App.css';

function App() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('down');
  const [lastScrollY, setLastScrollY] = useState(0);

  // --- THIS IS THE FIX ---
  // Change the initial state from true to false
  const [isTerminalOpen, setIsTerminalOpen] = useState(false); 
  // -----------------------

  const toggleTerminal = () => setIsTerminalOpen(!isTerminalOpen);
  const closeTerminal = () => setIsTerminalOpen(false);

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

  return (
    <Router>
      <div className="App">
        <ScrollAnimations />
        
        <Navigation onToggleTerminal={toggleTerminal} />
        
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inaugration" element={<Event />} />
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
