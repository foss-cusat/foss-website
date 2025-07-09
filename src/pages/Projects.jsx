import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Github, ExternalLink, Star, GitBranch, Users, Calendar } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'FOSSEE Website',
      description: 'Modern website for the FOSSEE club built with React and Vite. Features terminal interface and dark theme.',
      category: 'web',
      tech: ['React', 'Vite', 'CSS3', 'JavaScript'],
      github: 'https://github.com/fossee-club/website',
      live: 'https://fossee-club.org',
      stars: 45,
      forks: 12,
      contributors: 8,
      lastUpdated: '2024-03-10',
      status: 'active'
    },
    {
      id: 2,
      title: 'Linux Command Trainer',
      description: 'Interactive web application to learn Linux commands through hands-on exercises and challenges.',
      category: 'education',
      tech: ['Python', 'Flask', 'JavaScript', 'SQLite'],
      github: 'https://github.com/fossee-club/linux-trainer',
      live: 'https://linux-trainer.fossee.org',
      stars: 23,
      forks: 5,
      contributors: 4,
      lastUpdated: '2024-03-08',
      status: 'active'
    },
    {
      id: 3,
      title: 'Open Source Project Finder',
      description: 'Tool to help students find beginner-friendly open source projects to contribute to.',
      category: 'tool',
      tech: ['Node.js', 'Express', 'MongoDB', 'React'],
      github: 'https://github.com/fossee-club/project-finder',
      live: 'https://project-finder.fossee.org',
      stars: 67,
      forks: 15,
      contributors: 12,
      lastUpdated: '2024-03-05',
      status: 'active'
    },
    {
      id: 4,
      title: 'FOSSEE Mobile App',
      description: 'Mobile application for FOSSEE club members to stay updated with events and projects.',
      category: 'mobile',
      tech: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
      github: 'https://github.com/fossee-club/mobile-app',
      live: null,
      stars: 34,
      forks: 8,
      contributors: 6,
      lastUpdated: '2024-03-01',
      status: 'development'
    },
    {
      id: 5,
      title: 'Code Review Bot',
      description: 'Automated code review bot for GitHub repositories with focus on open source best practices.',
      category: 'tool',
      tech: ['Python', 'GitHub API', 'Docker', 'PostgreSQL'],
      github: 'https://github.com/fossee-club/code-review-bot',
      live: null,
      stars: 89,
      forks: 22,
      contributors: 15,
      lastUpdated: '2024-02-28',
      status: 'active'
    },
    {
      id: 6,
      title: 'Linux Distro Comparison',
      description: 'Interactive comparison tool for different Linux distributions with detailed analysis.',
      category: 'education',
      tech: ['Vue.js', 'D3.js', 'Node.js', 'MongoDB'],
      github: 'https://github.com/fossee-club/distro-compare',
      live: 'https://distro-compare.fossee.org',
      stars: 56,
      forks: 11,
      contributors: 9,
      lastUpdated: '2024-02-25',
      status: 'active'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', color: 'text-white' },
    { id: 'web', label: 'Web Apps', color: 'text-green' },
    { id: 'mobile', label: 'Mobile Apps', color: 'text-cyan' },
    { id: 'tool', label: 'Tools', color: 'text-orange' },
    { id: 'education', label: 'Education', color: 'text-green' }
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  );

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-green';
      case 'development': return 'text-orange';
      case 'archived': return 'text-gray';
      default: return 'text-white';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-green neon-glow-green">Projects</span> & Contributions
            </h1>
            <p className="text-xl text-gray max-w-3xl mx-auto">
              Explore our open source projects, member contributions, and innovative solutions built by the FOSSEE community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="section bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="section-title">Browse Projects</h2>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveFilter(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded border transition-colors ${
                    activeFilter === category.id
                      ? 'border-green text-green bg-green bg-opacity-10'
                      : 'border-light-gray text-gray hover:border-green hover:text-green'
                  }`}
                >
                  <Code className="w-4 h-4" />
                  <span>{category.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
                className="card"
              >
                <div className="flex items-start justify-between mb-4">
                  <Code className="w-8 h-8 text-green" />
                  <span className={`text-sm px-2 py-1 rounded ${getStatusColor(project.status)} bg-opacity-10`}>
                    {project.status.toUpperCase()}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray mb-4">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs px-2 py-1 bg-cyan bg-opacity-10 text-cyan rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                  <div className="flex items-center justify-center space-x-1">
                    <Star className="w-4 h-4 text-green" />
                    <span className="text-sm text-gray">{project.stars}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-1">
                    <GitBranch className="w-4 h-4 text-cyan" />
                    <span className="text-sm text-gray">{project.forks}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-1">
                    <Users className="w-4 h-4 text-green" />
                    <span className="text-sm text-gray">{project.contributors}</span>
                  </div>
                </div>

                {/* Last Updated */}
                <div className="flex items-center space-x-2 text-sm text-gray mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>Updated {project.lastUpdated}</span>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 btn flex items-center justify-center space-x-2"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Code</span>
                  </motion.a>
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="btn flex items-center justify-center space-x-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
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

      {/* Contribution Stats */}
      <section className="section bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="section-title">Our Impact</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-green mb-2">15+</div>
                <div className="text-gray">Open Source Projects</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan mb-2">500+</div>
                <div className="text-gray">GitHub Stars</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green mb-2">50+</div>
                <div className="text-gray">Active Contributors</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan mb-2">1000+</div>
                <div className="text-gray">Lines of Code</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects; 