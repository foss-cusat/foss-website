import React from 'react';
import { motion } from 'framer-motion';

const Event = () => {
  const event = {
    title: 'Inaugration Ceremony',
    venue: 'seminal hall , nlb,soe,cusat',
    time: '2 to 4',
    date: '14-aug'
  };

  return (
    <div className="min-h-screen" style={{ background: '#ffffff' }}>
      {/* Header Section */}
      <section style={{ 
        background: '#ffffff',
        borderBottom: '3px solid #000000',
        padding: '3rem 0',
        marginBottom: '2rem'
      }}>
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            style={{ 
              fontSize: '4rem', 
              fontWeight: '900', 
              color: '#111827',
              marginBottom: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '-0.02em'
            }}
          >
            Event Details
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ 
              fontSize: '1.3rem', 
              color: '#6b7280',
              maxWidth: '600px',
              margin: '0 auto',
              fontWeight: '500'
            }}
          >
            Join us for an exciting celebration of innovation and community
          </motion.p>
        </div>
      </section>

      {/* Main Event Content */}
      <section style={{ padding: '2rem 0', minHeight: '60vh' }}>
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            style={{ maxWidth: '1000px', margin: '0 auto' }}
          >
            {/* Event Title Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                background: '#ffffff',
                borderRadius: '16px',
                padding: '3rem 2rem',
                textAlign: 'center',
                marginBottom: '3rem',
                border: '3px solid #000000',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07)'
              }}
            >
              <h2 style={{ 
                fontSize: '3.5rem', 
                fontWeight: '900', 
                color: '#111827',
                marginBottom: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '-0.02em'
              }}>
                {event.title}
              </h2>
              <div style={{ 
                fontSize: '1.3rem', 
                color: '#6b7280',
                fontWeight: '500',
                maxWidth: '500px',
                margin: '0 auto'
              }}>
                A celebration of new beginnings and community spirit
              </div>
            </motion.div>

            {/* Event Details Grid */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '2rem',
              marginBottom: '3rem'
            }}>
              {/* Date Card */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.6, delay: 0.4 }}
                style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  padding: '2.5rem 2rem',
                  textAlign: 'center',
                  border: '3px solid #000000',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07)',
                  minHeight: '200px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📅</div>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: '700', 
                  color: '#111827',
                  marginBottom: '1rem',
                  textTransform: 'uppercase'
                }}>
                  Date
                </h3>
                <div style={{ 
                  fontSize: '2.5rem', 
                  fontWeight: '900', 
                  color: '#059669',
                  textTransform: 'uppercase'
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
                  background: '#ffffff',
                  borderRadius: '16px',
                  padding: '2.5rem 2rem',
                  textAlign: 'center',
                  border: '3px solid #000000',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07)',
                  minHeight: '200px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⏰</div>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: '700', 
                  color: '#111827',
                  marginBottom: '1rem',
                  textTransform: 'uppercase'
                }}>
                  Time
                </h3>
                <div style={{ 
                  fontSize: '2.5rem', 
                  fontWeight: '900', 
                  color: '#059669',
                  textTransform: 'uppercase'
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
                  background: '#ffffff',
                  borderRadius: '16px',
                  padding: '2.5rem 2rem',
                  textAlign: 'center',
                  border: '3px solid #000000',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07)',
                  minHeight: '200px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📍</div>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: '700', 
                  color: '#111827',
                  marginBottom: '1rem',
                  textTransform: 'uppercase'
                }}>
                  Venue
                </h3>
                <div style={{ 
                  fontSize: '1.4rem', 
                  fontWeight: '600', 
                  color: '#059669',
                  lineHeight: '1.4',
                  textTransform: 'uppercase'
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
              style={{ textAlign: 'center', marginTop: '2rem', marginBottom: '3rem' }}
            >
              <a 
                href="/" 
                style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
                  color: '#ffffff',
                  padding: '1.2rem 3rem',
                  borderRadius: '16px',
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  textDecoration: 'none',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07)',
                  border: '3px solid #000000',
                  transition: 'all 0.2s ease-in-out',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.07)';
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