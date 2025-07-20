import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Github, ExternalLink, Star, GitBranch, Users, Calendar } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'VEGA-R1',
      description: 'Advanced hardware project featuring Dashboard, SeedNRF52840Sense, and ThrustVectorControl components. Built with C++ and Python for embedded systems.',
      category: 'hardware',
      tech: ['C++', 'Python', 'Embedded'],
      github: 'https://github.com/foss-cusat/VEGA-R1',
      live: null,
      stars: 45,
      forks: 12,
      contributors: 8,
      date: '25 Mar 2025',
      status: 'active',
      image: '/vega-r1.jpeg'
    },
    {
      id: 2,
      title: 'FOSSEE Website',
      description: 'Modern website for the FOSSEE club built with React and Vite. Features terminal interface and dark theme.',
      category: 'web',
      tech: ['React', 'Vite', 'CSS3', 'JavaScript'],
      github: 'https://github.com/fossee-club/website',
      live: 'https://fossee-club.org',
      stars: 23,
      forks: 5,
      contributors: 4,
      date: '15 Apr 2025',
      status: 'active'
    },
    {
      id: 3,
      title: 'Linux Command Trainer',
      description: 'Interactive web application to learn Linux commands through hands-on exercises and challenges.',
      category: 'education',
      tech: ['Python', 'Flask', 'JavaScript', 'SQLite'],
      github: 'https://github.com/fossee-club/linux-trainer',
      live: 'https://linux-trainer.fossee.org',
      stars: 67,
      forks: 15,
      contributors: 12,
      date: '25 Apr 2025',
      status: 'active'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'hardware', label: 'Hardware' },
    { id: 'web', label: 'Web Apps' },
    { id: 'education', label: 'Education' }
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  );

  // Group projects by month
  const groupProjectsByMonth = (projects) => {
    const grouped = {};
    projects.forEach(project => {
      const month = project.date.split(' ')[1] + ' ' + project.date.split(' ')[2];
      if (!grouped[month]) {
        grouped[month] = [];
      }
      grouped[month].push(project);
    });
    return grouped;
  };

  const groupedProjects = groupProjectsByMonth(filteredProjects);

  return (
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
                Projects
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
          {Object.entries(groupedProjects).map(([month, monthProjects], monthIndex) => (
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
              
              {/* Projects Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {monthProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
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
                  position: 'relative',
                  background: project.image ? 'transparent' : 
                    project.category === 'web' ? 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)' :
                    project.category === 'education' ? 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)' :
                    'linear-gradient(135deg, #059669 0%, #10b981 100%)'
                }}>
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
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
                  ) : (
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '100%',
                      color: 'white',
                      fontSize: '2rem',
                      fontWeight: 'bold',
                      textAlign: 'center',
                      padding: '1rem'
                    }}>
                      {project.category === 'web' ? '🌐' : 
                       project.category === 'education' ? '📚' : 
                       '⚡'}
                    </div>
                  )}
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
                      {project.category === 'hardware' ? 'Hardware Project' : 
                       project.category === 'web' ? 'Web Application' :
                       project.category === 'education' ? 'Educational Tool' : 'Project'}
                    </div>
                    
                    {/* Project Title */}
                    <h3 className="text-xl font-bold mb-3 leading-tight" style={{
                      color: '#111827',
                      lineHeight: '1.3'
                    }}>
                      {project.title}
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
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Tech Stack and Action Button */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs font-medium" style={{ color: '#374151' }}>
                      <span>{project.tech.join(' • ')}</span>
                    </div>
                    <a 
                      href={project.github}
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
            ))}
          </div>
        </motion.div>
      ))}

      {/* No Projects Found */}
      {Object.keys(groupedProjects).length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <Code className="w-16 h-16 text-gray mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gray">No Projects Found</h3>
              <p className="text-gray">Check back later for new projects or try a different filter.</p>
            </motion.div>
          )}
        </div>
      </section>

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
        
        .gap-8 {
          gap: 2rem;
        }
        
        .px-4 {
          padding-left: 1rem;
          padding-right: 1rem;
        }
        
        .px-3 {
          padding-left: 0.75rem;
          padding-right: 0.75rem;
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
        
        .text-xl {
          font-size: 1.25rem;
        }
        
        .text-5xl {
          font-size: 3rem;
        }
        
        .text-7xl {
          font-size: 4.5rem;
        }
        
        .font-semibold {
          font-weight: 600;
        }
        
        .font-black {
          font-weight: 900;
        }
        
        .rounded-lg {
          border-radius: 0.5rem;
        }
        
        .inline-flex {
          display: inline-flex;
        }
        
        .items-center {
          align-items: center;
        }
        
        .justify-between {
          justify-content: space-between;
        }
        
        .mb-3 {
          margin-bottom: 0.75rem;
        }
        
        .mb-4 {
          margin-bottom: 1rem;
        }
        
        .mb-8 {
          margin-bottom: 2rem;
        }
        
        .py-16 {
          padding-top: 4rem;
          padding-bottom: 4rem;
        }
        
        .w-16 {
          width: 4rem;
        }
        
        .h-16 {
          height: 4rem;
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

export default Projects; 