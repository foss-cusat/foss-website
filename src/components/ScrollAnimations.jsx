import React, { useEffect, useRef } from 'react';

const ScrollAnimations = () => {
  const scrollProgressRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    // Scroll Progress Bar
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      if (scrollProgressRef.current) {
        scrollProgressRef.current.style.width = `${scrollPercent}%`;
      }
    };

    // Parallax Effect
    const handleParallax = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax-slow, .parallax-medium, .parallax-fast');
      
      parallaxElements.forEach(element => {
        const speed = element.classList.contains('parallax-slow') ? 0.5 : 
                     element.classList.contains('parallax-medium') ? 0.3 : 0.1;
        const yPos = -(scrolled * speed);
        element.style.setProperty('--parallax-y', `${yPos}px`);
      });
    };

    // Scroll Trigger Animations
    const handleScrollTriggers = () => {
      const triggers = document.querySelectorAll('.scroll-trigger, .scroll-fade-in, .scroll-slide-left, .scroll-slide-right, .scroll-scale-in');
      
      triggers.forEach(trigger => {
        const triggerTop = trigger.getBoundingClientRect().top;
        const triggerBottom = trigger.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        
        if (triggerTop < windowHeight * 0.8 && triggerBottom > 0) {
          trigger.classList.add('visible', 'triggered');
        }
      });
    };

    // Particle System
    const createParticle = () => {
      if (!particlesRef.current) return;
      
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
      particle.style.animationDelay = Math.random() * 2 + 's';
      
      particlesRef.current.appendChild(particle);
      
      // Remove particle after animation
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 8000);
    };

    // Initialize particle system
    const particleInterval = setInterval(createParticle, 2000);

    // Event listeners
    window.addEventListener('scroll', () => {
      updateScrollProgress();
      handleParallax();
      handleScrollTriggers();
    });

    // Initial call
    updateScrollProgress();
    handleScrollTriggers();

    return () => {
      window.removeEventListener('scroll', () => {
        updateScrollProgress();
        handleParallax();
        handleScrollTriggers();
      });
      clearInterval(particleInterval);
    };
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div ref={scrollProgressRef} className="scroll-progress"></div>
      
      {/* Particle System */}
      <div ref={particlesRef} className="particles"></div>
    </>
  );
};

export default ScrollAnimations; 