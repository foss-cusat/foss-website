import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Code, BookOpen, Trophy, Zap } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const Events = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const events = [
    {
      id: 1,
      title: 'Linux Fundamentals Workshop',
      type: 'workshop',
      date: '2024-03-15',
      time: '10:00 AM - 2:00 PM',
      location: 'Computer Lab 101',
      capacity: 30,
      registered: 25,
      description: 'Learn the basics of Linux command line, file system, and basic administration.',
      tags: ['Linux', 'Beginner', 'Hands-on'],
      icon: BookOpen
    },
    {
      id: 2,
      title: 'Open Source Hackathon 2024',
      type: 'hackathon',
      date: '2024-04-01',
      time: '48 Hours',
      location: 'Innovation Center',
      capacity: 100,
      registered: 85,
      description: 'Build innovative solutions using open source technologies. Prizes worth $5000.',
      tags: ['Hackathon', 'Advanced', 'Competition'],
      icon: Code
    },
    {
      id: 3,
      title: 'Git & GitHub Masterclass',
      type: 'workshop',
      date: '2024-03-22',
      time: '2:00 PM - 5:00 PM',
      location: 'Online',
      capacity: 50,
      registered: 42,
      description: 'Master version control with Git and collaboration on GitHub.',
      tags: ['Git', 'GitHub', 'Intermediate'],
      icon: BookOpen
    },
    {
      id: 4,
      title: 'Coding Competition: Algorithm Challenge',
      type: 'competition',
      date: '2024-03-30',
      time: '3:00 PM - 6:00 PM',
      location: 'Main Auditorium',
      capacity: 60,
      registered: 58,
      description: 'Solve algorithmic problems and compete for the top spot.',
      tags: ['Algorithms', 'Competition', 'Advanced'],
      icon: Trophy
    },
    {
      id: 5,
      title: 'Web Development Bootcamp',
      type: 'workshop',
      date: '2024-04-08',
      time: '10:00 AM - 4:00 PM',
      location: 'Computer Lab 102',
      capacity: 40,
      registered: 35,
      description: 'Build modern web applications using React, Node.js, and open source tools.',
      tags: ['Web Dev', 'React', 'Intermediate'],
      icon: BookOpen
    },
    {
      id: 6,
      title: 'Lightning Talks: Open Source Projects',
      type: 'event',
      date: '2024-04-15',
      time: '6:00 PM - 8:00 PM',
      location: 'Conference Room A',
      capacity: 80,
      registered: 65,
      description: 'Quick presentations on interesting open source projects and contributions.',
      tags: ['Talks', 'Projects', 'All Levels'],
      icon: Zap
    }
  ];

  const filters = [
    { id: 'all', label: 'All Events', icon: Calendar },
    { id: 'workshop', label: 'Workshops', icon: BookOpen },
    { id: 'hackathon', label: 'Hackathons', icon: Code },
    { id: 'competition', label: 'Competitions', icon: Trophy },
    { id: 'event', label: 'Events', icon: Zap }
  ];

  const filteredEvents = events.filter(event => 
    activeFilter === 'all' || event.type === activeFilter
  );

  const getTypeColor = (type) => {
    switch (type) {
      case 'workshop': return 'text-green';
      case 'hackathon': return 'text-cyan';
      case 'competition': return 'text-orange';
      case 'event': return 'text-green';
      default: return 'text-white';
    }
  };

  const getProgressPercentage = (registered, capacity) => {
    return (registered / capacity) * 100;
  };

  const eventsStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "FOSS CUSAT Events",
    "description": "Explore upcoming workshops, hackathons, and competitions at FOSS CUSAT",
    "url": "https://fossclub.cusat.ac.in/events"
  };

  return (
    <>
      <SEOHead 
        title="Events & Workshops"
        description="Join exciting workshops, hackathons, and competitions at FOSS CUSAT. Learn Linux, Git, programming, and contribute to open source projects with hands-on experience."
        keywords="FOSS CUSAT Events, Linux Workshop, Git Workshop, Hackathon CUSAT, Programming Competition, Open Source Events, Tech Events Kerala, Student Workshop"
        canonical="https://fossclub.cusat.ac.in/events"
        structuredData={eventsStructuredData}
      />
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
              <span className="text-green neon-glow-green">Events</span> & Activities
            </h1>
            <p className="text-xl text-gray max-w-3xl mx-auto">
              Join our exciting events, workshops, and competitions. Learn, compete, and grow with the FOSSEE community.
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
            <h2 className="section-title">Browse Events</h2>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {filters.map((filter) => (
                <motion.button
                  key={filter.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded border transition-colors ${
                    activeFilter === filter.id
                      ? 'border-green text-green bg-green bg-opacity-10'
                      : 'border-light-gray text-gray hover:border-green hover:text-green'
                  }`}
                >
                  <filter.icon className="w-4 h-4" />
                  <span>{filter.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="section">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
                className="card"
              >
                <div className="flex items-start justify-between mb-4">
                  <event.icon className={`w-8 h-8 ${getTypeColor(event.type)}`} />
                  <span className={`text-sm px-2 py-1 rounded ${getTypeColor(event.type)} bg-opacity-10`}>
                    {event.type.toUpperCase()}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-2 text-white">{event.title}</h3>
                <p className="text-gray mb-4">{event.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm">
                    <Calendar className="w-4 h-4 text-green" />
                    <span className="text-gray">{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="w-4 h-4 text-cyan" />
                    <span className="text-gray">{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <MapPin className="w-4 h-4 text-green" />
                    <span className="text-gray">{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Users className="w-4 h-4 text-cyan" />
                    <span className="text-gray">{event.registered}/{event.capacity} registered</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray">Registration</span>
                    <span className="text-green">{Math.round(getProgressPercentage(event.registered, event.capacity))}%</span>
                  </div>
                  <div className="w-full bg-light-gray rounded-full h-2">
                    <div
                      className="bg-green h-2 rounded-full transition-all duration-300"
                      style={{ width: `${getProgressPercentage(event.registered, event.capacity)}%` }}
                    ></div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {event.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-2 py-1 bg-green bg-opacity-10 text-green rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn w-full"
                  disabled={event.registered >= event.capacity}
                >
                  {event.registered >= event.capacity ? 'Fully Booked' : 'Register Now'}
                </motion.button>
              </motion.div>
            ))}
          </motion.div>

          {filteredEvents.length === 0 && (
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

      {/* Upcoming Highlights */}
      <section className="section bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="section-title">Upcoming Highlights</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card">
                <div className="flex items-center space-x-4 mb-4">
                  <Trophy className="w-12 h-12 text-orange" />
                  <div>
                    <h3 className="text-xl font-bold text-white">Annual Hackathon</h3>
                    <p className="text-gray">April 1-3, 2024</p>
                  </div>
                </div>
                <p className="text-gray mb-4">
                  Our biggest event of the year! 48 hours of coding, innovation, and collaboration. 
                  Build something amazing with open source technologies.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn"
                >
                  Learn More
                </motion.button>
              </div>

              <div className="card">
                <div className="flex items-center space-x-4 mb-4">
                  <BookOpen className="w-12 h-12 text-green" />
                  <div>
                    <h3 className="text-xl font-bold text-white">Linux Workshop Series</h3>
                    <p className="text-gray">Every Saturday</p>
                  </div>
                </div>
                <p className="text-gray mb-4">
                  Weekly hands-on workshops covering Linux administration, shell scripting, 
                  and system administration. Perfect for beginners and intermediate users.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn"
                >
                  View Schedule
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Events; 