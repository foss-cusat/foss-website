import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navigation = ({ onToggleTerminal }) => {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/events', label: 'Events' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  const baseButtonStyle = {
    height: '40px',
    padding: '0 16px',
    background: '#000000',
    border: '2px solid #ffffff',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: 10000,
    fontFamily: 'JetBrains Mono, Fira Mono, monospace',
    fontWeight: 'bold',
    fontSize: '14px',
    letterSpacing: '1px',
    flexShrink: 0,
    transition: 'all 0.2s ease-in-out', // Smooth transition for the effect
  };

  const hoverButtonStyle = {
    transform: 'scale(1.05)',
    borderColor: '#00FF41', // Change border to green on hover
    boxShadow: '0 0 10px rgba(0, 255, 65, 0.5)', // Add a green glow
  };


  return (
    <nav className="nav" style={{
      position: 'relative',
      background: '#ffffff',
      borderBottom: '1px solid #e5e7eb',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
    }}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 w-full relative">
          
          <div className="flex justify-center flex-grow">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="nav-link text-sm md:text-base font-medium transition-colors duration-200 relative"
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '0.375rem',
                  position: 'relative',
                  zIndex: 2,
                  color: location.pathname === item.path ? '#059669' : '#6b7280',
                  fontWeight: location.pathname === item.path ? '600' : '500'
                }}
              >
                {item.label}
                
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activePageIndicator"
                    // ... (rest of the motion.div remains the same)
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Terminal Button */}
          <div
            onClick={onToggleTerminal}
            // 4. Add event handlers and combine styles
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ ...baseButtonStyle, ...(isHovered ? hoverButtonStyle : {}) }}
          >
            <span style={{ color: '#fff' }}>Terminal&nbsp;</span>
            <span style={{ color: isHovered ? '#00FF41' : '#fff' }}>{'>_'}</span>
          </div>
          
        </div>
      </div>
      
      <style jsx>{
      }</style>
    </nav>
  );
};

export default Navigation;
