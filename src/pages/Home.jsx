import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Terminal from '../components/Terminal';
import SEOHead from '../components/SEOHead';

const Home = () => {
  const asciiArt = `
  ███████╗ ██████╗ ███████╗███████╗     ███████╗██╗   ██╗███████╗ █████╗ ████████╗
  ██╔════╝██╔═══██╗██╔════╝██╔════╝    ██╔════╝██║   ██║██╔════╝██╔══██╗╚══██╔══╝
  █████╗  ██║   ██║███████╗███████╗    ██║     ██║   ██║███████╗███████║   ██║   
  ██╔══╝  ██║   ██║╚════██║╚════██║    ██║     ██║   ██║╚════██║██╔══██║   ██║   
  ██║     ╚██████╔╝███████║███████║    ╚██████╗╚██████╔╝███████║██║  ██║   ██║   
  ╚═╝      ╚═════╝ ╚══════╝╚══════╝     ╚═════╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝   ╚═╝   
  `;

  const homeStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "FOSS CUSAT - Home",
    "description": "Welcome to FOSS CUSAT - the premier Free and Open Source Software club at Cochin University of Science and Technology",
    "url": "https://fossclub.cusat.ac.in/",
    "mainEntity": {
      "@type": "Organization",
      "name": "FOSS CUSAT",
      "description": "Community Driven Development - Empowering Students Through Open Source"
    }
  };

  return (
    <>
      <SEOHead 
        title="FOSS CUSAT - Free and Open Source Software Club"
        description="Welcome to FOSS CUSAT - the premier Free and Open Source Software club at Cochin University of Science and Technology. Join our community-driven development initiatives and empower yourself through open source."
        keywords="FOSS CUSAT, Open Source Community, Student Club CUSAT, Linux Kerala, Programming Club, Hackathon CUSAT, Software Development, GitHub CUSAT, Community Driven Development"
        structuredData={homeStructuredData}
      />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section relative" id="home">
        <div className="parallax-bg"></div>
        <div className="container mx-auto px-4 h-screen flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="ascii-art mb-8 floating flex justify-center" role="img" aria-label="FOSS CUSAT ASCII Art Logo">
              <pre className="text-center">{asciiArt}</pre>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 scroll-fade-in">
              <span className="sr-only">FOSS CUSAT - </span>
              <br />
              <TypeAnimation
                sequence={[
                  'Community Driven Development',
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
                aria-live="polite"
              />
            </h1>
          </motion.div>
        </div>
      </section>

      <Terminal />
    </div>
    </>
  );
};

export default Home; 
