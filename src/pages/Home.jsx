import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Calendar, MapPin, Clock, Users, Code, BookOpen, Trophy, Zap, ChevronRight } from 'lucide-react';
import Terminal from '../components/Terminal';

const Home = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const asciiArt = `
  ███████╗ ██████╗ ███████╗███████╗     ███████╗██╗   ██╗███████╗ █████╗ ████████╗
  ██╔════╝██╔═══██╗██╔════╝██╔════╝    ██╔════╝██║   ██║██╔════╝██╔══██╗╚══██╔══╝
  █████╗  ██║   ██║███████╗███████╗    ██║     ██║   ██║███████╗███████║   ██║   
  ██╔══╝  ██║   ██║╚════██║╚════██║    ██║     ██║   ██║╚════██║██╔══██║   ██║   
  ██║     ╚██████╔╝███████║███████║    ╚██████╗╚██████╔╝███████║██║  ██║   ██║   
  ╚═╝      ╚═════╝ ╚══════╝╚══════╝     ╚═════╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝   ╚═╝   
  `;

  // Updated events data to match the image style
  const events = [
    {
      id: 1,
      title: 'Inauguration Ceremony: Git, GitHub & GitLab Workshop',
      organization: 'FOSS CUSAT',
      date: '15 Jul 2025',
      location: 'CUSAT Campus, Kochi',
      type: 'workshop',
      tagColor: 'green',
      hasIcon: true
    }
  ];

  const filters = [
    { id: 'all', label: 'All Events' },
    { id: 'meetup', label: 'Meetups' },
    { id: 'workshop', label: 'Workshops' },
    { id: 'competition', label: 'Competitions' },
    { id: 'festival', label: 'Festivals' },
    { id: 'hackathon', label: 'Hackathons' }
  ];

  const filteredEvents = events.filter(event => 
    activeFilter === 'all' || event.type === activeFilter
  );

  // Group events by month
  const groupEventsByMonth = (events) => {
    const grouped = {};
    events.forEach(event => {
      const month = event.date.split(' ')[1] + ' ' + event.date.split(' ')[2];
      if (!grouped[month]) {
        grouped[month] = [];
      }
      grouped[month].push(event);
    });
    return grouped;
  };

  const groupedEvents = groupEventsByMonth(filteredEvents);

  const getTagStyle = (color, hasIcon = false) => {
    const baseStyle = "inline-flex items-center px-3 py-1 rounded-md text-xs font-medium text-white";
    if (color === 'green') {
      return `${baseStyle} bg-green-600`;
    } else {
      return `${baseStyle} bg-gray-800`;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section relative" id="home">
        <div className="parallax-bg"></div>
        <div className="container mx-auto px-4 h-screen flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="ascii-art mb-1 floating flex justify-center">
              <pre className="text-center" style={{ fontSize: '1.4rem', lineHeight: '1.08' }}>{asciiArt}</pre>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2 scroll-fade-in" style={{
              fontFamily: 'monospace',
              maxWidth: '900px',
              margin: '0 auto',
              textAlign: 'center'
            }}>
              <TypeAnimation
                sequence={[
                  'Community Driven Development',
                  2000,
                  'Empowering Students Through Open Source',
                  2000,
                  'Building the Future of Technology',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                className="text-cyan neon-glow-cyan"
                repeat={Infinity}
                style={{
                  fontFamily: 'monospace',
                  display: 'inline-block',
                  maxWidth: '100%',
                  wordWrap: 'break-word'
                }}
              />
            </h1>
          </motion.div>
        </div>
      </section>

      <Terminal />

      {/* Events Section */}
      <div className="min-h-screen" style={{ background: '#f9fafb' }}>
        {/* Hero Section */}
        <section className="section" style={{ background: '#f9fafb' }}>
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-4"
            >
              <h1 className="text-5xl md:text-7xl font-black mb-8" style={{ 
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
                fontWeight: '900',
                lineHeight: '1.1',
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                textAlign: 'left',
                color: '#1a1a1a',
                textShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                position: 'relative',
                paddingBottom: '1rem'
              }}>
                <span style={{
                  background: 'linear-gradient(135deg, #1a1a1a 0%, #404040 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  display: 'inline-block',
                  position: 'relative'
                }}>
                  Events
                </span>
                <div style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  width: '60px',
                  height: '4px',
                  background: 'linear-gradient(90deg, #059669 0%, #10b981 100%)',
                  borderRadius: '2px',
                  boxShadow: '0 2px 4px rgba(5, 150, 105, 0.3)'
                }}></div>
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Events by Month */}
        <section className="section" style={{ padding: '1rem 0' }}>
          <div className="container mx-auto px-4">
            {Object.entries(groupedEvents).map(([month, monthEvents], monthIndex) => (
              <motion.div
                key={month}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * monthIndex }}
                className="mb-16"
              >
                {/* Month Header */}
                <h2 className="section-title mb-8" style={{ 
                  color: '#111827', 
                  fontSize: '2.5rem',
                  fontWeight: '800',
                  letterSpacing: '-0.025em',
                  textTransform: 'none',
                  textAlign: 'left'
                }}>{month}</h2>
                
                {/* Events Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
                  {monthEvents.map((event, eventIndex) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * eventIndex }}
                      whileHover={{ y: -4, scale: 1.02 }}
                      className="card overflow-hidden hover:shadow-xl transition-all duration-300"
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        minHeight: '180px',
                        maxHeight: '200px',
                        width: '100%',
                        minWidth: '320px',
                        background: '#ffffff',
                        border: '2px solid #e5e7eb',
                        borderRadius: '16px',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07), 0 1px 3px rgba(0, 0, 0, 0.1)',
                        transform: 'translateY(0)',
                        transition: 'all 0.3s ease',
                        margin: '1rem'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.border = '3px solid #000000';
                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.2), 0 4px 10px rgba(0, 0, 0, 0.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.border = '2px solid #e5e7eb';
                        e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.07), 0 1px 3px rgba(0, 0, 0, 0.1)';
                      }}
                    >
                      {/* Organization Tag */}
                      <div className="p-5 pb-2">
                        <div className={`inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-semibold ${
                          event.tagColor === 'green' 
                            ? 'bg-green-50 text-green-700 border border-green-200' 
                            : 'bg-gray-800 text-white shadow-md'
                        }`}>
                          {event.hasIcon && (
                            <svg className="w-3 h-3 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          )}
                          {event.organization}
                        </div>
                      </div>

                      {/* Event Content */}
                      <div className="p-5 pt-0 flex flex-col justify-between flex-1">
                        <div>
                          {/* Date */}
                          <p className="text-sm mb-2 font-medium" style={{ color: '#059669' }}>{event.date}</p>
                          
                          {/* Title */}
                          <h3 className="text-lg font-bold mb-3 leading-tight" style={{
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            color: '#111827',
                            lineHeight: '1.3'
                          }}>
                            {event.title}
                          </h3>
                        </div>
                        
                        {/* Location and Register Button */}
                        <div className="flex items-center justify-between mt-auto">
                          <div className="flex items-center text-sm font-medium" style={{ color: '#374151' }}>
                            <MapPin className="w-4 h-4 mr-1.5" style={{ color: '#6b7280' }} />
                            <span style={{
                              display: '-webkit-box',
                              WebkitLineClamp: 1,
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden'
                            }}>
                              {event.location}
                            </span>
                          </div>
                          <button 
                            className="px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 hover:scale-105"
                            style={{
                              background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
                              color: 'white',
                              boxShadow: '0 2px 4px rgba(5, 150, 105, 0.3)'
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.transform = 'scale(1.05)';
                              e.target.style.boxShadow = '0 4px 8px rgba(5, 150, 105, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.transform = 'scale(1)';
                              e.target.style.boxShadow = '0 2px 4px rgba(5, 150, 105, 0.3)';
                            }}
                          >
                            Register
                          </button>
                        </div>
                      </div>

                      {/* Hover Effect Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-green/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* No Events Found */}
            {Object.keys(groupedEvents).length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <Calendar className="w-16 h-16 text-gray mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-gray">No Events Found</h3>
                <p className="text-gray">Check back later for new events or try a different filter.</p>
              </motion.div>
            )}
          </div>
        </section>
      </div>

      <style jsx>{`
        .grid {
          display: grid;
        }
        
        @media (min-width: 768px) {
          .md\\:grid-cols-2 {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (min-width: 1024px) {
          .lg\\:grid-cols-3 {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        
        @media (min-width: 1280px) {
          .xl\\:grid-cols-4 {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        
        .gap-6 {
          gap: 1.5rem;
        }
        
        .gap-8 {
          gap: 2rem;
        }
        
        .gap-12 {
          gap: 3rem;
        }
        
        .gap-3 {
          gap: 0.75rem;
        }
        
        .gap-4 {
          gap: 1rem;
        }
        
        .px-4 {
          padding-left: 1rem;
          padding-right: 1rem;
        }
        
        .py-3 {
          padding-top: 0.75rem;
          padding-bottom: 0.75rem;
        }
        
        .px-8 {
          padding-left: 2rem;
          padding-right: 2rem;
        }
        
        .px-3 {
          padding-left: 0.75rem;
          padding-right: 0.75rem;
        }
        
        .py-1 {
          padding-top: 0.25rem;
          padding-bottom: 0.25rem;
        }
        
        .py-1\\.5 {
          padding-top: 0.375rem;
          padding-bottom: 0.375rem;
        }
        
        .text-xs {
          font-size: 0.75rem;
        }
        
        .text-sm {
          font-size: 0.875rem;
        }
        
        .text-lg {
          font-size: 1.125rem;
        }
        
        .text-xl {
          font-size: 1.25rem;
        }
        
        .text-3xl {
          font-size: 1.875rem;
        }
        
        .text-4xl {
          font-size: 2.25rem;
        }
        
        .text-6xl {
          font-size: 3.75rem;
        }
        
        .font-medium {
          font-weight: 500;
        }
        
        .font-semibold {
          font-weight: 600;
        }
        
        .rounded-lg {
          border-radius: 0.5rem;
        }
        
        .rounded-md {
          border-radius: 0.375rem;
        }
        
        .inline-flex {
          display: inline-flex;
        }
        
        .items-center {
          align-items: center;
        }
        
        .justify-center {
          justify-content: center;
        }
        
        .text-center {
          text-align: center;
        }
        
        .flex-wrap {
          flex-wrap: wrap;
        }
        
        .flex {
          display: flex;
        }
        
        .flex-col {
          flex-direction: column;
        }
        
        .justify-between {
          justify-content: space-between;
        }
        
        .mt-auto {
          margin-top: auto;
        }
        
        .mr-1 {
          margin-right: 0.25rem;
        }
        
        .mr-1\\.5 {
          margin-right: 0.375rem;
        }
        
        .mr-2 {
          margin-right: 0.5rem;
        }
        
        .ml-2 {
          margin-left: 0.5rem;
        }
        
        .mb-2 {
          margin-bottom: 0.5rem;
        }
        
        .mb-1 {
          margin-bottom: 0.25rem;
        }
        
        .mb-3 {
          margin-bottom: 0.75rem;
        }
        
        .mb-4 {
          margin-bottom: 1rem;
        }
        
        .mb-6 {
          margin-bottom: 1.5rem;
        }
        
        .mb-8 {
          margin-bottom: 2rem;
        }
        
        .mb-12 {
          margin-bottom: 3rem;
        }
        
        .py-16 {
          padding-top: 4rem;
          padding-bottom: 4rem;
        }
        
        .py-12 {
          padding-top: 3rem;
          padding-bottom: 3rem;
        }
        
        .w-3 {
          width: 0.75rem;
        }
        
        .w-4 {
          width: 1rem;
        }
        
        .h-3 {
          height: 0.75rem;
        }
        
        .h-4 {
          height: 1rem;
        }
        
        .w-16 {
          width: 4rem;
        }
        
        .h-16 {
          height: 4rem;
        }
        
        .max-w-2xl {
          max-width: 42rem;
        }
        
        .max-w-3xl {
          max-width: 48rem;
        }
        
        .mx-auto {
          margin-left: auto;
          margin-right: auto;
        }
        
        .transition-all {
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 150ms;
        }
        
        .duration-200 {
          transition-duration: 200ms;
        }
        
        .duration-300 {
          transition-duration: 300ms;
        }
        
        .hover\\:shadow-lg:hover {
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
        
        .hover\\:bg-gray-50:hover {
          background-color: #f9fafb;
        }
        
        .hover\\:border-green:hover {
          border-color: var(--terminal-green);
        }
        
        .hover\\:text-green:hover {
          color: var(--terminal-green);
        }
        
        .hover\\:opacity-100:hover {
          opacity: 1;
        }
        
        .opacity-0 {
          opacity: 0;
        }
        
        .pointer-events-none {
          pointer-events: none;
        }
        
        .absolute {
          position: absolute;
        }
        
        .inset-0 {
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
        }
        
        .bg-gradient-to-t {
          background-image: linear-gradient(to top, var(--tw-gradient-stops));
        }
        
        .from-green\\/10 {
          --tw-gradient-from: rgba(0, 255, 65, 0.1);
          --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(0, 255, 65, 0));
        }
        
        .to-transparent {
          --tw-gradient-to: transparent;
        }
        
        .shadow-lg {
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
        
        .overflow-hidden {
          overflow: hidden;
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
    </div>
  );
};

export default Home; 