import React from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{
      background: '#ffffff',
      borderTop: '3px solid #000000',
      padding: '2rem 0',
      marginTop: 'auto'
    }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 md:mb-0"
          >
            <h3 className="text-xl font-bold mb-2" style={{ color: '#111827' }}>
              FOSS CUSAT
            </h3>
            <p className="text-sm" style={{ color: '#6b7280', maxWidth: '300px' }}>
              A community effort.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center md:items-end"
          >
            <div className="flex space-x-6 mb-3">
              <a 
                href="https://github.com/foss-cusat"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-200 hover:scale-110"
                style={{ color: '#6b7280' }}
              >
                <Github size={20} />
              </a>
              <a 
                href="mailto:contact@foss-cusat.org"
                className="transition-all duration-200 hover:scale-110"
                style={{ color: '#6b7280' }}
              >
                <Mail size={20} />
              </a>
              <div className="flex items-center" style={{ color: '#6b7280' }}>
                <MapPin size={16} />
                <span className="text-xs ml-1">CUSAT</span>
              </div>
            </div>
          </motion.div>
        </div>
        
          <p className="text-s" style={{ color: '#9ca3af' }}>
            Built with ❤️ by the FOSS@CUSAT community
          </p>
      </div>

      <style jsx>{`
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
        
        .flex {
          display: flex;
        }
        
        .flex-col {
          flex-direction: column;
        }
        
        .md\\:flex-row {
          flex-direction: row;
        }
        
        .justify-between {
          justify-content: space-between;
        }
        
        .items-center {
          align-items: center;
        }
        
        .md\\:items-end {
          align-items: flex-end;
        }
        
        .mb-4 {
          margin-bottom: 1rem;
        }
        
        .md\\:mb-0 {
          margin-bottom: 0;
        }
        
        .mb-3 {
          margin-bottom: 0.75rem;
        }
        
        .mb-2 {
          margin-bottom: 0.5rem;
        }
        
        .space-x-6 > * + * {
          margin-left: 1.5rem;
        }
        
        .text-xl {
          font-size: 1.25rem;
        }
        
        .text-sm {
          font-size: 0.875rem;
        }
        
        .text-xs {
          font-size: 0.75rem;
        }
        
        .font-bold {
          font-weight: 700;
        }
        
        .transition-all {
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 150ms;
        }
        
        .duration-200 {
          transition-duration: 200ms;
        }
        
        .hover\\:scale-110:hover {
          transform: scale(1.1);
        }
        
        .text-center {
          text-align: center;
        }
        
        .mt-4 {
          margin-top: 1rem;
        }
      `}</style>
    </footer>
  );
};

export default Footer; 
