import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Terminal from '../components/Terminal';

const Home = () => {
  const asciiArt = `
  ███████╗ ██████╗ ███████╗███████╗     ███████╗██╗   ██╗███████╗ █████╗ ████████╗
  ██╔════╝██╔═══██╗██╔════╝██╔════╝    ██╔════╝██║   ██║██╔════╝██╔══██╗╚══██╔══╝
  █████╗  ██║   ██║███████╗███████╗    ██║     ██║   ██║███████╗███████║   ██║   
  ██╔══╝  ██║   ██║╚════██║╚════██║    ██║     ██║   ██║╚════██║██╔══██║   ██║   
  ██║     ╚██████╔╝███████║███████║    ╚██████╗╚██████╔╝███████║██║  ██║   ██║   
  ╚═╝      ╚═════╝ ╚══════╝╚══════╝     ╚═════╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝   ╚═╝   
  `;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section relative" id="home">
        <div className="parallax-bg"></div>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="ascii-art mb-8 floating">
              {asciiArt}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 scroll-fade-in">
              <span className="text-green neon-glow-green">FOSS CUSAT</span>
              <br />
              <TypeAnimation
                sequence={[
                  'Free and Open Source Software for Education',
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
              />
            </h1>
          </motion.div>
        </div>
      </section>

      {/* FOSS CUSAT About Section */}
      <section className="max-w-2xl mx-auto mb-8 px-4">
        <div className="bg-[#181f2a] rounded-lg shadow-lg p-6 text-center">
          <h2 className="text-2xl font-bold text-green mb-2">About FOSS CUSAT</h2>
          <p className="text-white text-lg">
            FOSS CUSAT is a vibrant student community at Cochin University of Science and Technology dedicated to promoting Free and Open Source Software (FOSS) culture. We organize workshops, hackathons, and collaborative projects to empower students with open source skills, foster innovation, and contribute to the global FOSS movement. Join us to learn, build, and make a difference!
          </p>
        </div>
      </section>

      {/* Moving Marquee Bar */}
      <div style={{ width: '100%', overflow: 'hidden', marginBottom: '2rem' }}>
        <div
          style={{
            display: 'inline-block',
            whiteSpace: 'nowrap',
            animation: 'marquee 18s linear infinite',
            color: '#111',
            fontWeight: 'bold',
            fontSize: '1.2rem',
            letterSpacing: '1px',
            padding: '0.5rem 0',
            textShadow: '0 1px 8px #fff',
          }}
        >
          🚀 FOSS CUSAT: Empowering students with open source skills | Join our workshops, hackathons, and projects | Connect, Learn, Build, and Contribute! 🚀
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>

      <Terminal />
    </div>
  );
};

export default Home; 