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

  const events = [{
    id: 1,
    title: 'Inauguration Ceremony: Git, GitHub & GitLab Workshop',
    organization: 'FOSS CUSAT',
    date: '15 Jul 2025',
    location: 'CUSAT Campus, Kochi',
    type: 'workshop',
    tagColor: 'green',
    hasIcon: true
  }];

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
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
              {/* Social links */}
              {/* ... same as before ... */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Events Section */}
      <div style={{ background: '#f9fafb', padding: '3rem 0' }}>
        <section className="section" id="events">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-black mb-12" style={{ letterSpacing: '-0.02em', textTransform: 'uppercase', fontWeight: '900', lineHeight: '1.1', fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif', textAlign: 'left', color: '#1a1a1a', textShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', position: 'relative', paddingBottom: '1rem' }}>
              <span style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #404040 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', display: 'inline-block', position: 'relative' }}>
                Upcoming Events
              </span>
              <div style={{ position: 'absolute', bottom: '0', left: '0', width: '60px', height: '4px', background: 'linear-gradient(90deg, #059669 0%, #10b981 100%)', borderRadius: '2px', boxShadow: '0 2px 4px rgba(5, 150, 105, 0.3)' }}></div>
            </h1>
            {Object.entries(groupedEvents).map(([month, monthEvents]) => (
              <motion.div key={month} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                <div className="grid gap-8">
<<<<<<< HEAD
                  {monthEvents.map((event, idx) => (
                    <motion.div key={event.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 * idx }} whileHover={{ y: -4, scale: 1.02 }} className="card event-card overflow-hidden hover:shadow-xl transition-all duration-300" style={{ display: 'flex', flexDirection: 'column', background: '#ffffff', border: '3px solid #000000', borderRadius: '16px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07), 0 1px 3px rgba(0, 0, 0, 0.1)' }}>
=======
                  {monthEvents.map((event, eventIndex) => (
                    <motion.div key={event.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.05, delay: 0.1 * eventIndex }} whileHover={{ y: -4, scale: 1.02 }} className="card event-card overflow-hidden" 
                    // --- TRANSITION SPEED CHANGED HERE ---
                    style={{ display: 'flex', flexDirection: 'column', background: '#ffffff', border: '3px solid #000000', borderRadius: '16px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07), 0 1px 3px rgba(0, 0, 0, 0.1)', transition: 'all 0.2s ease-in-out' }} onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.2), 0 4px 10px rgba(0, 0, 0, 0.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.07), 0 1px 3px rgba(0, 0, 0, 0.1)'; }}>
>>>>>>> 5fd34ab (fix transition speed)
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
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* Projects Section */}
<<<<<<< HEAD
      {/* ... same as before ... */}
=======
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
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.05, delay: 0.1 }} whileHover={{ y: -4, scale: 1.02 }} className="card project-card overflow-hidden" 
                // --- TRANSITION SPEED CHANGED HERE ---
                style={{ display: 'flex', flexDirection: 'column', minHeight: '340px', background: '#ffffff', border: '3px solid #000000', borderRadius: '16px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07), 0 1px 3px rgba(0, 0, 0, 0.1)', transition: 'all 0.2s ease-in-out' }} onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.2), 0 4px 10px rgba(0, 0, 0, 0.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.07), 0 1px 3px rgba(0, 0, 0, 0.1)'; }}>
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
>>>>>>> 5fd34ab (fix transition speed)

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

