import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { MapPin } from 'lucide-react';
import Terminal from '../components/Terminal';

const Home = () => {
  const asciiArt = `
  ███████╗ ██████╗ ███████╗███████╗     ███████╗██╗   ██╗███████╗ █████╗ ████████╗
  ██╔════╝██╔═══██╗██╔════╝██╔════╝    ██╔════╝██║   ██║██╔════╝██╔══██╗╚══██╔══╝
  █████╗  ██║   ██║███████╗███████╗    ██║     ██║   ██║███████╗███████║   ██║   
  ██╔══╝  ██║   ██║╚════██║╚════██║    ██║     ██║   ██║╚════██║██╔══██║   ██║   
  ██║     ╚██████╔╝███████║███████║    ╚██████╗╚██████╔╝███████║██║  ██║   ██║   
  ╚═╝      ╚═════╝ ╚══════╝╚══════╝     ╚═════╝╚═════╝ ╚══════╝╚═╝  ╚═╝   ╚═╝   
  `;

  const events = [
    {
      id: 1,
      title: 'Inauguration Ceremony: Git, GitHub & GitLab Workshop',
      organization: 'FOSS CUSAT',
      date: '13 August 2025',
      location: 'CUSAT Campus, Kochi',
      type: 'workshop',
      tagColor: 'green',
      hasIcon: true
    }
  ];

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

  const groupEventsByMonth = (events) => {
    const grouped = {};
    events.forEach(event => {
      const parts = event.date.split(' ');
      const month = parts[1] + ' ' + parts[2];
      if (!grouped[month]) grouped[month] = [];
      grouped[month].push(event);
    });
    return grouped;
  };

  const groupedEvents = groupEventsByMonth(events);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section relative" id="home">
        <div className="container mx-auto px-4 h-screen flex items-center justify-center">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
            <div className="ascii-art mb-1 floating flex justify-center">
              <pre className="text-center" style={{ fontSize: '1.4rem', lineHeight: '1.08' }}>{asciiArt}</pre>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2 scroll-fade-in" style={{ fontFamily: 'monospace', maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <TypeAnimation
                sequence={[
                  'Community Driven Development', 2000,
                  'Empowering Students Through Open Source', 2000,
                  'Building the Future of Technology', 2000
                ]}
                wrapper="span"
                speed={50}
                className="text-cyan neon-glow-cyan"
                repeat={Infinity}
                style={{ fontFamily: 'monospace', display: 'inline-block', maxWidth: '100%', wordWrap: 'break-word' }}
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
      <div style={{ background: '#f9fafb', padding: '3rem 0' }}>
        <section className="section" id="events">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-black mb-12" style={{ letterSpacing: '-0.02em', textTransform: 'uppercase', fontWeight: '900', lineHeight: '1.1', fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', textAlign: 'left', color: '#1a1a1a', textShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', position: 'relative', paddingBottom: '1rem' }}>
              <span style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #404040 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', display: 'inline-block', position: 'relative' }}>
                Upcoming Events
              </span>
              <div style={{ position: 'absolute', bottom: '0', left: '0', width: '60px', height: '4px', background: 'linear-gradient(90deg, #059669 0%, #10b981 100%)', borderRadius: '2px', boxShadow: '0 2px 4px rgba(5, 150, 105, 0.3)' }}></div>
            </h1>
            {Object.entries(groupedEvents).map(([month, monthEvents]) => (
              <motion.div key={month} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                <div className="grid gap-8">
                  {monthEvents.map((event, eventIndex) => (
                    <motion.div key={event.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.05, delay: 0.1 * eventIndex }} whileHover={{ y: -4, scale: 1.02 }} className="card event-card overflow-hidden" style={{ display: 'flex', flexDirection: 'column', background: '#ffffff', border: '3px solid #000000', borderRadius: '16px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07), 0 1px 3px rgba(0, 0, 0, 0.1)', transition: 'all 0.2s ease-in-out' }} onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.2), 0 4px 10px rgba(0, 0, 0, 0.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.07), 0 1px 3px rgba(0, 0, 0, 0.1)'; }}>
                      <div className="p-5 pb-2">
                        <div className={`inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-semibold ${event.tagColor === 'green' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-gray-800 text-white shadow-md'}`}>
                          {event.hasIcon && <MapPin className="w-3 h-3 mr-1.5" style={{ color: '#6b7280' }} />}
                          {event.organization}
                        </div>
                      </div>
                      <div className="p-5 pt-0 flex flex-col justify-between flex-1">
                        <div>
                          <p className="text-sm mb-2 font-medium" style={{ color: '#059669' }}>{event.date}</p>
                          <h3 className="text-lg font-bold mb-3 leading-tight" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', color: '#111827', lineHeight: '1.3' }}>{event.title}</h3>
                        </div>
                        <div className="flex items-center justify-between mt-auto">
                          <div className="flex items-center text-sm font-medium" style={{ color: '#374151' }}>
                            <MapPin className="w-4 h-4 mr-1.5" style={{ color: '#6b7280' }} />
                            <span style={{ display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{event.location}</span>
                          </div>
                          <button className="px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 hover:scale-105" style={{ background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)', color: 'white', boxShadow: '0 2px 4px rgba(5, 150, 105, 0.3)' }}>Register</button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* Projects Section */}
      <div style={{ background: '#ffffff', padding: '3rem 0' }}>
        <section className="section" id="projects">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-black mb-12" style={{ letterSpacing: '-0.02em', textTransform: 'uppercase', fontWeight: '900', lineHeight: '1.1', fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', textAlign: 'left', color: '#1a1a1a', textShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', position: 'relative', paddingBottom: '1rem' }}>
              <span style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #404040 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', display: 'inline-block', position: 'relative' }}>
                Featured Projects
              </span>
              <div style={{ position: 'absolute', bottom: '0', left: '0', width: '60px', height: '4px', background: 'linear-gradient(90deg, #059669 0%, #10b981 100%)', borderRadius: '2px', boxShadow: '0 2px 4px rgba(5, 150, 105, 0.3)' }}></div>
            </h1>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.1 }}>
              <div className="grid gap-8">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.05, delay: 0.1 }} whileHover={{ y: -4, scale: 1.02 }} className="card project-card overflow-hidden" style={{ display: 'flex', flexDirection: 'column', minHeight: '340px', background: '#ffffff', border: '3px solid #000000', borderRadius: '16px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07), 0 1px 3px rgba(0, 0, 0, 0.1)', transition: 'all 0.2s ease-in-out' }} onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.2), 0 4px 10px rgba(0, 0, 0, 0.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.07), 0 1px 3px rgba(0, 0, 0, 0.1)'; }}>
                  <div style={{ height: '180px', overflow: 'hidden', borderTopLeftRadius: '14px', borderTopRightRadius: '14px', position: 'relative' }}>
                    <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
                  </div>
                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <div className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-semibold mb-3" style={{ background: 'rgba(5, 150, 105, 0.1)', color: '#059669', border: '1px solid rgba(5, 150, 105, 0.2)' }}>Hardware Project</div>
                      <h3 className="text-xl font-bold mb-3 leading-tight" style={{ color: '#111827', lineHeight: '1.3' }}>{project.title}</h3>
                      <p className="text-sm mb-4" style={{ color: '#6b7280', lineHeight: '1.5', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{project.description}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-xs font-medium" style={{ color: '#374151' }}>
                        <span>{project.tech.join(' • ')}</span>
                      </div>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200" style={{ background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)', color: 'white', boxShadow: '0 2px 4px rgba(5, 150, 105, 0.3)', textDecoration: 'none', display: 'inline-block', border: '2px solid #000000' }}>View Project</a>
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
          grid-template-columns: repeat(1, 1fr);
          gap: 2rem;
        }
        .event-card, .project-card {
          max-width: 400px;
          margin: 0 auto;
        }
        @media (min-width: 768px) {
          .grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (min-width: 1280px) {
          .grid { grid-template-columns: repeat(4, 1fr); }
        }
      `}</style>
    </div>
  );
};

export default Home;

