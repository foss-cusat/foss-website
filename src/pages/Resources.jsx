import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code, Terminal, FileText, Video, Download, ExternalLink } from 'lucide-react';

const Resources = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const resources = [
    {
      id: 1,
      title: 'Linux Command Line Basics',
      description: 'Complete guide to essential Linux commands for beginners.',
      category: 'linux',
      type: 'tutorial',
      difficulty: 'beginner',
      duration: '2 hours',
      format: 'pdf',
      downloadUrl: '/resources/linux-basics.pdf',
      externalUrl: 'https://linuxjourney.com',
      icon: Terminal
    },
    {
      id: 2,
      title: 'Git & GitHub Mastery',
      description: 'Learn version control with Git and collaboration on GitHub.',
      category: 'git',
      type: 'video',
      difficulty: 'intermediate',
      duration: '3 hours',
      format: 'video',
      downloadUrl: null,
      externalUrl: 'https://youtube.com/watch?v=git-tutorial',
      icon: Code
    },
    {
      id: 3,
      title: 'Open Source Contribution Guide',
      description: 'Step-by-step guide to contributing to open source projects.',
      category: 'opensource',
      type: 'guide',
      difficulty: 'intermediate',
      duration: '1 hour',
      format: 'web',
      downloadUrl: null,
      externalUrl: 'https://opensource.guide',
      icon: BookOpen
    },
    {
      id: 4,
      title: 'Python for Beginners',
      description: 'Learn Python programming from scratch with hands-on exercises.',
      category: 'programming',
      type: 'course',
      difficulty: 'beginner',
      duration: '8 hours',
      format: 'interactive',
      downloadUrl: '/resources/python-course.zip',
      externalUrl: 'https://python.org/tutorial',
      icon: Code
    },
    {
      id: 5,
      title: 'Web Development with React',
      description: 'Build modern web applications using React and open source tools.',
      category: 'webdev',
      type: 'tutorial',
      difficulty: 'advanced',
      duration: '6 hours',
      format: 'video',
      downloadUrl: null,
      externalUrl: 'https://react.dev/learn',
      icon: Code
    },
    {
      id: 6,
      title: 'Linux System Administration',
      description: 'Advanced Linux administration and server management.',
      category: 'linux',
      type: 'course',
      difficulty: 'advanced',
      duration: '12 hours',
      format: 'pdf',
      downloadUrl: '/resources/linux-admin.pdf',
      externalUrl: 'https://linuxacademy.com',
      icon: Terminal
    }
  ];

  const categories = [
    { id: 'all', label: 'All Resources', icon: BookOpen },
    { id: 'linux', label: 'Linux', icon: Terminal },
    { id: 'programming', label: 'Programming', icon: Code },
    { id: 'git', label: 'Git & GitHub', icon: Code },
    { id: 'opensource', label: 'Open Source', icon: BookOpen },
    { id: 'webdev', label: 'Web Development', icon: Code }
  ];

  const filteredResources = resources.filter(resource => 
    activeFilter === 'all' || resource.category === activeFilter
  );

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'beginner': return 'text-green';
      case 'intermediate': return 'text-orange';
      case 'advanced': return 'text-red';
      default: return 'text-white';
    }
  };

  const getFormatIcon = (format) => {
    switch (format) {
      case 'pdf': return FileText;
      case 'video': return Video;
      case 'web': return ExternalLink;
      case 'interactive': return Code;
      default: return BookOpen;
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
              <span className="text-green neon-glow-green">Resources</span> & Learning
            </h1>
            <p className="text-xl text-gray max-w-3xl mx-auto">
              Access our curated collection of tutorials, guides, and documentation to enhance your skills 
              in Linux, programming, and open source development.
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
            <h2 className="section-title">Browse Resources</h2>
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
                  <category.icon className="w-4 h-4" />
                  <span>{category.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="section">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
                className="card"
              >
                <div className="flex items-start justify-between mb-4">
                  <resource.icon className="w-8 h-8 text-green" />
                  <span className={`text-sm px-2 py-1 rounded ${getDifficultyColor(resource.difficulty)} bg-opacity-10`}>
                    {resource.difficulty.toUpperCase()}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-2 text-white">{resource.title}</h3>
                <p className="text-gray mb-4">{resource.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm">
                    <BookOpen className="w-4 h-4 text-green" />
                    <span className="text-gray">{resource.type}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Video className="w-4 h-4 text-cyan" />
                    <span className="text-gray">{resource.duration}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  {resource.downloadUrl && (
                    <motion.a
                      href={resource.downloadUrl}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 btn flex items-center justify-center space-x-2"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </motion.a>
                  )}
                  {resource.externalUrl && (
                    <motion.a
                      href={resource.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`btn flex items-center justify-center space-x-2 ${!resource.downloadUrl ? 'flex-1' : ''}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>View</span>
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredResources.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <BookOpen className="w-16 h-16 text-gray mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gray">No Resources Found</h3>
              <p className="text-gray">Check back later for new resources or try a different filter.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="section bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="section-title">Quick Links</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.a
                href="https://linuxjourney.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="card text-center"
              >
                <Terminal className="w-12 h-12 text-green mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2 text-white">Linux Journey</h3>
                <p className="text-gray text-sm">Interactive Linux learning platform</p>
              </motion.a>

              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="card text-center"
              >
                <Code className="w-12 h-12 text-cyan mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2 text-white">GitHub</h3>
                <p className="text-gray text-sm">Discover and contribute to projects</p>
              </motion.a>

              <motion.a
                href="https://stackoverflow.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="card text-center"
              >
                <BookOpen className="w-12 h-12 text-green mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2 text-white">Stack Overflow</h3>
                <p className="text-gray text-sm">Programming Q&A community</p>
              </motion.a>

              <motion.a
                href="https://opensource.guide"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="card text-center"
              >
                <FileText className="w-12 h-12 text-cyan mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2 text-white">Open Source Guide</h3>
                <p className="text-gray text-sm">How to contribute to open source</p>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Resources; 