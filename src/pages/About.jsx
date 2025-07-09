import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Users, Globe, Code, BookOpen } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Open Source Advocacy',
      description: 'We believe in the power of open source software and its ability to democratize technology.',
      color: 'text-green'
    },
    {
      icon: Shield,
      title: 'Privacy & Security',
      description: 'Promoting digital privacy and security through open source solutions and education.',
      color: 'text-cyan'
    },
    {
      icon: Users,
      title: 'Community Building',
      description: 'Creating a supportive environment where students can learn, grow, and collaborate.',
      color: 'text-green'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Contributing to the global open source ecosystem and making technology accessible to all.',
      color: 'text-cyan'
    },
    {
      icon: Code,
      title: 'Hands-on Learning',
      description: 'Providing practical experience through real-world projects and coding challenges.',
      color: 'text-green'
    },
    {
      icon: BookOpen,
      title: 'Knowledge Sharing',
      description: 'Fostering a culture of learning and sharing knowledge with the broader community.',
      color: 'text-cyan'
    }
  ];

  const timeline = [
    {
      year: '2020',
      title: 'Club Founded',
      description: 'FOSSEE Club was established with the vision of promoting open source software in education.'
    },
    {
      year: '2021',
      title: 'First Workshop',
      description: 'Conducted our first Linux workshop, introducing students to open source operating systems.'
    },
    {
      year: '2022',
      title: 'Project Contributions',
      description: 'Started contributing to open source projects and organizing hackathons.'
    },
    {
      year: '2023',
      title: 'Community Growth',
      description: 'Expanded our community and established partnerships with other tech clubs.'
    },
    {
      year: '2024',
      title: 'Innovation Hub',
      description: 'Became a hub for innovation, hosting regular events and mentoring programs.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section relative">
        <div className="parallax-bg"></div>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 scroll-fade-in"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-green neon-glow-green floating">FOSSEE</span>
            </h1>
            <p className="text-xl text-gray max-w-4xl mx-auto">
              We are a community of passionate students dedicated to promoting Free and Open Source Software (FOSS) 
              in education. Our mission is to empower students with the knowledge and skills needed to thrive 
              in the digital age through open source technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section bg-secondary relative">
        <div className="parallax-bg"></div>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto scroll-trigger"
          >
            <h2 className="section-title">Our Mission</h2>
            <div className="terminal floating mb-8">
              <div className="terminal-prompt">root@fossee:~$ cat mission.txt</div>
              <div className="text-white mt-2 whitespace-pre-wrap">
{`FOSSEE Club Mission Statement
================================

We strive to:

1. EDUCATE students about the importance and benefits of open source software
2. EMPOWER individuals with practical skills in Linux, programming, and open source tools
3. ENCOURAGE active participation in the global open source community
4. ENHANCE learning through hands-on projects and real-world applications
5. ESTABLISH a supportive network of like-minded developers and enthusiasts

Our vision is to create a world where technology is accessible, 
transparent, and beneficial to all through the power of open source.`}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section relative">
        <div className="parallax-bg"></div>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="scroll-trigger"
          >
            <h2 className="section-title">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ y: -5 }}
                  className={`card text-center scroll-scale-in`}
                >
                  <value.icon className={`w-12 h-12 mx-auto mb-4 ${value.color} floating`} />
                  <h3 className="text-xl font-bold mb-2 text-green">{value.title}</h3>
                  <p className="text-gray">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOSS Philosophy Section */}
      <section className="section bg-secondary relative">
        <div className="parallax-bg"></div>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-4xl mx-auto scroll-trigger"
          >
            <h2 className="section-title">FOSS Philosophy</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card scroll-slide-left">
                <h3 className="text-xl font-bold mb-4 text-green">The Four Freedoms</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className="text-green font-bold">0.</span>
                    <p>The freedom to run the program as you wish, for any purpose.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-green font-bold">1.</span>
                    <p>The freedom to study how the program works, and change it to make it do what you wish.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-green font-bold">2.</span>
                    <p>The freedom to redistribute copies so you can help others.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-green font-bold">3.</span>
                    <p>The freedom to distribute copies of your modified versions to others.</p>
                  </div>
                </div>
              </div>
              
              <div className="card scroll-slide-right">
                <h3 className="text-xl font-bold mb-4 text-cyan">Why Open Source?</h3>
                <ul className="space-y-3 text-gray">
                  <li className="flex items-start space-x-2">
                    <span className="text-green">▶</span>
                    <span>Transparency and trust in software</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green">▶</span>
                    <span>Community-driven development</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green">▶</span>
                    <span>Cost-effective solutions</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green">▶</span>
                    <span>Freedom from vendor lock-in</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green">▶</span>
                    <span>Educational opportunities</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green">▶</span>
                    <span>Innovation through collaboration</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section relative">
        <div className="parallax-bg"></div>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="scroll-trigger"
          >
            <h2 className="section-title">Our Journey</h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-green"></div>
                
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="relative flex items-start mb-8 scroll-fade-in"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-6 w-4 h-4 bg-green rounded-full border-4 border-secondary floating"></div>
                    
                    {/* Content */}
                    <div className="ml-16 card flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl font-bold text-green">{item.year}</span>
                        <span className="text-sm text-gray">FOSSEE Club</span>
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-white">{item.title}</h3>
                      <p className="text-gray">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="section bg-secondary relative">
        <div className="parallax-bg"></div>
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="scroll-trigger"
          >
            <h2 className="text-3xl font-bold mb-4 text-green">Join Our Community</h2>
            <p className="text-xl text-gray mb-8 max-w-2xl mx-auto">
              Whether you're a beginner or an experienced developer, there's a place for you in our community. 
              Together, we can build a better future through open source.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn text-lg px-8 py-4 floating"
            >
              Become a Member
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About; 