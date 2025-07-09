import React from 'react';
import { motion } from 'framer-motion';
import { Users, Github, Linkedin, Mail, Code, Terminal, BookOpen, Shield } from 'lucide-react';

const Team = () => {
  const team = [
    {
      id: 1,
      name: 'Alex Chen',
      role: 'Club President',
      bio: 'Linux enthusiast and open source advocate. Passionate about making technology accessible to everyone.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
      github: 'https://github.com/alexchen',
      linkedin: 'https://linkedin.com/in/alexchen',
      email: 'alex@fossee-club.org',
      skills: ['Linux', 'Python', 'DevOps'],
      icon: Shield
    },
    {
      id: 2,
      name: 'Sarah Kim',
      role: 'Vice President',
      bio: 'Full-stack developer with expertise in React and Node.js. Loves mentoring new developers.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
      github: 'https://github.com/sarahkim',
      linkedin: 'https://linkedin.com/in/sarahkim',
      email: 'sarah@fossee-club.org',
      skills: ['React', 'Node.js', 'TypeScript'],
      icon: Code
    },
    {
      id: 3,
      name: 'Marcus Rodriguez',
      role: 'Technical Lead',
      bio: 'System administrator and security expert. Specializes in Linux server management and cybersecurity.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus',
      github: 'https://github.com/marcusrod',
      linkedin: 'https://linkedin.com/in/marcusrod',
      email: 'marcus@fossee-club.org',
      skills: ['Linux Admin', 'Security', 'Bash'],
      icon: Terminal
    },
    {
      id: 4,
      name: 'Emma Thompson',
      role: 'Education Coordinator',
      bio: 'Dedicated to creating engaging learning experiences and fostering a supportive community.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
      github: 'https://github.com/emmathompson',
      linkedin: 'https://linkedin.com/in/emmathompson',
      email: 'emma@fossee-club.org',
      skills: ['Teaching', 'Python', 'Git'],
      icon: BookOpen
    },
    {
      id: 5,
      name: 'David Park',
      role: 'Events Manager',
      bio: 'Organizes workshops, hackathons, and community events. Passionate about bringing people together.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
      github: 'https://github.com/davidpark',
      linkedin: 'https://linkedin.com/in/davidpark',
      email: 'david@fossee-club.org',
      skills: ['Event Planning', 'JavaScript', 'Docker'],
      icon: Users
    },
    {
      id: 6,
      name: 'Lisa Wang',
      role: 'Outreach Coordinator',
      bio: 'Builds partnerships with other tech communities and promotes open source values.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa',
      github: 'https://github.com/lisawang',
      linkedin: 'https://linkedin.com/in/lisawang',
      email: 'lisa@fossee-club.org',
      skills: ['Networking', 'Python', 'Open Source'],
      icon: Users
    }
  ];

  const stats = [
    { label: 'Active Members', value: '50+', icon: Users },
    { label: 'Projects Led', value: '15+', icon: Code },
    { label: 'Workshops Conducted', value: '25+', icon: BookOpen },
    { label: 'Years Combined Experience', value: '50+', icon: Shield }
  ];

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
              Meet Our <span className="text-green neon-glow-green">Team</span>
            </h1>
            <p className="text-xl text-gray max-w-3xl mx-auto">
              Get to know the passionate individuals who drive the FOSSEE club forward. 
              Our team brings together diverse skills and experiences to create an amazing community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="section-title">Our Impact</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="text-center"
                >
                  <stat.icon className="w-12 h-12 text-green mx-auto mb-4" />
                  <div className="text-3xl font-bold text-green mb-2">{stat.value}</div>
                  <div className="text-gray">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="section-title">Leadership Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ y: -5 }}
                  className="card text-center"
                >
                  <div className="mb-6">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-green"
                    />
                    <h3 className="text-xl font-bold mb-1 text-white">{member.name}</h3>
                    <p className="text-green font-semibold mb-2">{member.role}</p>
                    <p className="text-gray text-sm mb-4">{member.bio}</p>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {member.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="text-xs px-2 py-1 bg-cyan bg-opacity-10 text-cyan rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4">
                    <motion.a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-gray hover:text-green transition-colors"
                      title="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-gray hover:text-cyan transition-colors"
                      title="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={`mailto:${member.email}`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-gray hover:text-green transition-colors"
                      title="Email"
                    >
                      <Mail className="w-5 h-5" />
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Join Team Section */}
      <section className="section bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-green">Join Our Team</h2>
            <p className="text-xl text-gray mb-8 max-w-2xl mx-auto">
              We're always looking for passionate individuals to join our leadership team. 
              If you're interested in contributing to our mission, we'd love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn text-lg px-8 py-4"
              >
                Apply for Leadership
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn text-lg px-8 py-4"
              >
                Become a Member
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team; 