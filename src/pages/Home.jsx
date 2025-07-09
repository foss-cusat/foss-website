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
      <Terminal />
    </div>
  );
};

export default Home; 