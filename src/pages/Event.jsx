import React from 'react';
import { motion } from 'framer-motion';

const Event = () => {
  const event = {
    title: 'Inauguration Ceremony',
    venue: 'seminar hall , nlb,soe,cusat',
    time: '2 to 4',
    date: '14-aug'
  };

  return (
    <div className="min-h-screen" style={{ 
      background: '#f0f0f0',
      fontFamily: '"Source Code Pro", monospace'
    }}>
      {/* Header Section */}
      <section style={{ 
        background: '#ffffff',
        borderBottom: '8px solid #000000',
        padding: '4rem 0',
        marginBottom: '3rem',
        boxShadow: '0 8px 0 #000000'
      }}>
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            style={{ 
              fontSize: '5rem', 
              fontWeight: '900', 
              color: '#000000',
              marginBottom: '1.5rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              textShadow: '4px 4px 0 #ff6b6b',
              fontFamily: '"Source Code Pro", monospace'
            }}
          >
            Event Details
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ 
              fontSize: '1.5rem', 
              color: '#000000',
              maxWidth: '700px',
              margin: '0 auto',
              fontWeight: '600',
              fontFamily: '"Source Code Pro", monospace',
              textShadow: '2px 2px 0 #ffd93d'
            }}
          >
            Join us for an exciting celebration of innovation and community
          </motion.p>
        </div>
      </section>

      {/* Main Event Content */}
      <section style={{ padding: '3rem 0', minHeight: '60vh' }}>
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            style={{ maxWidth: '1200px', margin: '0 auto' }}
          >
            {/* Event Title Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                background: '#ff6b6b',
                borderRadius: '0',
                padding: '4rem 3rem',
                textAlign: 'center',
                marginBottom: '4rem',
                border: '8px solid #000000',
                boxShadow: '12px 12px 0 #000000',
                transform: 'rotate(-1deg)',
                fontFamily: '"Source Code Pro", monospace'
              }}
            >
              <h2 style={{ 
                fontSize: '4rem', 
                fontWeight: '900', 
                color: '#ffffff',
                marginBottom: '1.5rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                textShadow: '4px 4px 0 #000000',
                fontFamily: '"Source Code Pro", monospace'
              }}>
                {event.title}
              </h2>
              <div style={{ 
                fontSize: '1.5rem', 
                color: '#ffffff',
                fontWeight: '600',
                maxWidth: '600px',
                margin: '0 auto',
                textShadow: '2px 2px 0 #000000',
                fontFamily: '"Source Code Pro", monospace'
              }}>
                A celebration of new beginnings and community spirit
              </div>
            </motion.div>

            {/* Event Details Grid */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
              gap: '3rem',
              marginBottom: '4rem'
            }}>
              {/* Date Card */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.6, delay: 0.4 }}
                style={{
                  background: '#ffd93d',
                  borderRadius: '0',
                  padding: '3rem 2rem',
                  textAlign: 'center',
                  border: '6px solid #000000',
                  boxShadow: '8px 8px 0 #000000',
                  minHeight: '250px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  transform: 'rotate(1deg)',
                  fontFamily: '"Source Code Pro", monospace'
                }}
              >
                <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>📅</div>
                <h3 style={{ 
                  fontSize: '1.8rem', 
                  fontWeight: '700', 
                  color: '#000000',
                  marginBottom: '1.5rem',
                  textTransform: 'uppercase',
                  fontFamily: '"Source Code Pro", monospace'
                }}>
                  Date
                </h3>
                <div style={{ 
                  fontSize: '3rem', 
                  fontWeight: '900', 
                  color: '#ff6b6b',
                  textTransform: 'uppercase',
                  textShadow: '3px 3px 0 #000000',
                  fontFamily: '"Source Code Pro", monospace'
                }}>
                  {event.date}
                </div>
              </motion.div>

              {/* Time Card */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.5 }}
                style={{
                  background: '#6bcf7f',
                  borderRadius: '0',
                  padding: '3rem 2rem',
                  textAlign: 'center',
                  border: '6px solid #000000',
                  boxShadow: '8px 8px 0 #000000',
                  minHeight: '250px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  transform: 'rotate(-1deg)',
                  fontFamily: '"Source Code Pro", monospace'
                }}
              >
                <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>⏰</div>
                <h3 style={{ 
                  fontSize: '1.8rem', 
                  fontWeight: '700', 
                  color: '#000000',
                  marginBottom: '1.5rem',
                  textTransform: 'uppercase',
                  fontFamily: '"Source Code Pro", monospace'
                }}>
                  Time
                </h3>
                <div style={{ 
                  fontSize: '3rem', 
                  fontWeight: '900', 
                  color: '#ffffff',
                  textTransform: 'uppercase',
                  textShadow: '3px 3px 0 #000000',
                  fontFamily: '"Source Code Pro", monospace'
                }}>
                  {event.time}
                </div>
              </motion.div>

              {/* Venue Card */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.6, delay: 0.6 }}
                style={{
                  background: '#4ecdc4',
                  borderRadius: '0',
                  padding: '3rem 2rem',
                  textAlign: 'center',
                  border: '6px solid #000000',
                  boxShadow: '8px 8px 0 #000000',
                  minHeight: '250px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  transform: 'rotate(1deg)',
                  fontFamily: '"Source Code Pro", monospace'
                }}
              >
                <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>📍</div>
                <h3 style={{ 
                  fontSize: '1.8rem', 
                  fontWeight: '700', 
                  color: '#000000',
                  marginBottom: '1.5rem',
                  textTransform: 'uppercase',
                  fontFamily: '"Source Code Pro", monospace'
                }}>
                  Venue
                </h3>
                <div style={{ 
                  fontSize: '1.6rem', 
                  fontWeight: '600', 
                  color: '#ffffff',
                  lineHeight: '1.4',
                  textTransform: 'uppercase',
                  textShadow: '2px 2px 0 #000000',
                  fontFamily: '"Source Code Pro", monospace'
                }}>
                  {event.venue}
                </div>
              </motion.div>
            </div>

            {/* Call to Action */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.7 }}
              style={{ textAlign: 'center', marginTop: '3rem', marginBottom: '4rem' }}
            >
              <a 
                href="/" 
                style={{
                  display: 'inline-block',
                  background: '#000000',
                  color: '#ffffff',
                  padding: '1.5rem 4rem',
                  borderRadius: '0',
                  fontSize: '1.4rem',
                  fontWeight: '900',
                  textDecoration: 'none',
                  boxShadow: '8px 8px 0 #ff6b6b',
                  border: '4px solid #000000',
                  transition: 'all 0.1s ease-in-out',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontFamily: '"Source Code Pro", monospace',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translate(-4px, -4px)';
                  e.target.style.boxShadow = '12px 12px 0 #ff6b6b';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translate(0, 0)';
                  e.target.style.boxShadow = '8px 8px 0 #ff6b6b';
                }}
              >
                Back to Home
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Event; 