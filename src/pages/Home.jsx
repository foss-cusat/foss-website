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

  // Project data
  const project = {
    id: 1,
    title: 'VEGA-R1',
    description: 'Advanced hardware project featuring Dashboard, SeedNRF52840Sense, and ThrustVectorControl components. Built with C++ and Python for embedded systems.',
    category: 'hardware',
    tech: ['C++', 'Python', 'Embedded'],
    github: 'https://github.com/foss-cusat/VEGA-R1',
    date: '25 Mar 2025',
    image: '/vega-r1.jpeg'
  };

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

      {/* Social Media Section */}
      <section className="section" style={{ background: '#ffffff', padding: '1rem 0' }}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
              {[
                {
                  name: 'GitHub',
                  url: 'https://github.com/foss-cusat',
                  icon: (
                    <svg style={{ width: '20px', height: '20px' }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  ),
                  bgColor: '#000000'
                },
                {
                  name: 'LinkedIn',
                  url: 'https://linkedin.com/company/foss-cusat',
                  icon: (
                    <svg style={{ width: '20px', height: '20px' }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  ),
                  bgColor: '#000000'
                },
                {
                  name: 'Instagram',
                  url: 'https://instagram.com/foss_cusat',
                  icon: (
                    <svg style={{ width: '20px', height: '20px' }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  ),
                  bgColor: '#000000'
                }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    color: 'white',
                    background: social.bgColor,
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease'
                  }}
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Events Section */}
      <div className="min-h-screen" style={{ background: '#ffffff' }}>
        {/* Hero Section */}
        <section className="section" style={{ background: '#ffffff' }}>
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
                  Upcoming Events
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
                        border: '3px solid #000000',
                        borderRadius: '16px',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07), 0 1px 3px rgba(0, 0, 0, 0.1)',
                        transform: 'translateY(0)',
                        transition: 'all 0.3s ease',
                        margin: '1rem'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.2), 0 4px 10px rgba(0, 0, 0, 0.1)';
                      }}
                      onMouseLeave={(e) => {
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

      {/* Projects Section */}
      <div className="min-h-screen" style={{ background: '#ffffff' }}>
        {/* Projects Hero Section */}
        <section className="section" style={{ background: '#ffffff' }}>
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
                  Featured Projects
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

        {/* Projects by Month */}
        <section className="section" style={{ padding: '1rem 0' }}>
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
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
              }}>{project.date.split(' ')[1] + ' ' + project.date.split(' ')[2]}</h2>
              
              {/* Projects Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Project Card 1 - VEGA-R1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="card overflow-hidden hover:shadow-xl transition-all duration-300"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: '340px',
                  background: '#ffffff',
                  border: '3px solid #000000',
                  borderRadius: '16px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07), 0 1px 3px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.2), 0 4px 10px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.07), 0 1px 3px rgba(0, 0, 0, 0.1)';
                }}
              >
                {/* Project Image */}
                <div style={{
                  height: '180px',
                  overflow: 'hidden',
                  borderTopLeftRadius: '14px',
                  borderTopRightRadius: '14px',
                  position: 'relative'
                }}>
                  <img 
                    src="/vega-r1.jpeg" 
                    alt="VEGA-R1 Hardware Project"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.style.background = 'linear-gradient(135deg, #059669 0%, #10b981 100%)';
                      e.target.parentElement.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%;"><svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg></div>';
                    }}
                  />
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    {/* Project Tag */}
                    <div className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-semibold mb-3" style={{
                      background: 'rgba(5, 150, 105, 0.1)',
                      color: '#059669',
                      border: '1px solid rgba(5, 150, 105, 0.2)'
                    }}>
                      Hardware Project
                    </div>
                    
                    {/* Project Title */}
                    <h3 className="text-xl font-bold mb-3 leading-tight" style={{
                      color: '#111827',
                      lineHeight: '1.3'
                    }}>
                      VEGA-R1
                    </h3>
                    
                    {/* Project Description */}
                    <p className="text-sm mb-4" style={{
                      color: '#6b7280',
                      lineHeight: '1.5',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}>
                      Advanced hardware project featuring Dashboard, SeedNRF52840Sense, and ThrustVectorControl components. Built with C++ and Python for embedded systems.
                    </p>
                  </div>
                  
                  {/* Tech Stack */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs font-medium" style={{ color: '#374151' }}>
                      <span>C++ • Python • Embedded</span>
                    </div>
                    <a 
                      href="https://github.com/foss-cusat/VEGA-R1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200"
                      style={{
                        background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
                        color: 'white',
                        boxShadow: '0 2px 4px rgba(5, 150, 105, 0.3)',
                        textDecoration: 'none',
                        display: 'inline-block',
                        border: '2px solid #000000'
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
                      View Project
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
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