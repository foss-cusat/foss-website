import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/events', label: 'Events' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="nav" style={{
      position: 'relative',
      background: '#ffffff',
      borderBottom: '1px solid #e5e7eb',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
    }}>
      <div className="container mx-auto px-4">
        <div className="flex justify-evenly items-center h-16 w-full relative">
          {navItems.map((item, index) => (
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
              
              {/* Active Page Indicator */}
              {location.pathname === item.path && (
                <motion.div
                  layoutId="activePageIndicator"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-green rounded-t"
                  style={{
                    background: 'linear-gradient(90deg, #059669 0%, #10b981 100%)',
                    boxShadow: '0 2px 4px rgba(5, 150, 105, 0.3)'
                  }}
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ 
                    opacity: 1, 
                    scaleX: 1,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 30
                    }
                  }}
                  exit={{ opacity: 0, scaleX: 0 }}
                />
              )}
            </Link>
          ))}
          
          {/* Background line for visual continuity */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200"
            style={{ zIndex: 1 }}
          />
        </div>
      </div>
      
      <style jsx>{`
        .nav-link {
          text-decoration: none;
          display: inline-block;
          position: relative;
        }
        
        .nav-link:hover {
          transform: translateY(-1px);
        }
        
        .container {
          width: 100%;
          margin-left: auto;
          margin-right: auto;
          padding-left: 1rem;
          padding-right: 1rem;
        }
        
        @media (min-width: 640px) {
          .container {
            max-width: 640px;
          }
        }
        
        @media (min-width: 768px) {
          .container {
            max-width: 768px;
          }
        }
        
        @media (min-width: 1024px) {
          .container {
            max-width: 1024px;
          }
        }
        
        @media (min-width: 1280px) {
          .container {
            max-width: 1280px;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navigation; 