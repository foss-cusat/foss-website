import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Github, Linkedin, MessageSquare } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@fossee-club.org',
      link: 'mailto:contact@fossee-club.org'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Computer Science Department\nUniversity Campus',
      link: null
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      title: 'GitHub',
      url: 'https://github.com/fossee-club',
      color: 'hover:text-green'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      url: 'https://linkedin.com/company/fossee-club',
      color: 'hover:text-cyan'
    },
    {
      icon: MessageSquare,
      title: 'Discord',
      url: 'https://discord.gg/fossee-club',
      color: 'hover:text-green'
    }
  ];

  const contactStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact FOSS CUSAT",
    "description": "Get in touch with FOSS CUSAT team",
    "url": "https://fossclub.cusat.ac.in/contact"
  };

  return (
    <>
      <SEOHead 
        title="Contact Us"
        description="Get in touch with FOSS CUSAT team. Join our community, ask questions, or contribute to our open source initiatives. Connect with us via email, social media, or visit us at CUSAT."
        keywords="Contact FOSS CUSAT, Join FOSS Club, CUSAT Contact, Open Source Community Contact, Student Club CUSAT, Tech Community Kerala"
        canonical="https://fossclub.cusat.ac.in/contact"
        structuredData={contactStructuredData}
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
              Get in <span className="text-green neon-glow-green">Touch</span>
            </h1>
            <p className="text-xl text-gray max-w-3xl mx-auto">
              Have questions about our club, events, or projects? We'd love to hear from you! 
              Reach out to us through any of the channels below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="section-title">Send us a Message</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div className="card">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-green mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-transparent border border-light-gray rounded px-3 py-2 text-white focus:border-green focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-green mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-transparent border border-light-gray rounded px-3 py-2 text-white focus:border-green focus:outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-green mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-transparent border border-light-gray rounded px-3 py-2 text-white focus:border-green focus:outline-none transition-colors"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-green mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full bg-transparent border border-light-gray rounded px-3 py-2 text-white focus:border-green focus:outline-none transition-colors resize-none"
                      placeholder="Tell us more..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn w-full flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="loading w-4 h-4"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>

                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-green text-center py-2"
                    >
                      ✓ Message sent successfully!
                    </motion.div>
                  )}
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-green">Contact Information</h3>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                        className="flex items-start space-x-3"
                      >
                        <info.icon className="w-5 h-5 text-green mt-1" />
                        <div>
                          <div className="font-medium text-white">{info.title}</div>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-gray hover:text-green transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <div className="text-gray whitespace-pre-line">{info.value}</div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-green">Follow Us</h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 + 0.1 * index }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`text-gray ${social.color} transition-colors`}
                        title={social.title}
                      >
                        <social.icon className="w-6 h-6" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="card"
              >
                <h3 className="text-lg font-bold mb-2 text-green">How do I join the FOSSEE club?</h3>
                <p className="text-gray">
                  Simply attend one of our events or workshops! We welcome students of all skill levels. 
                  You can also reach out to us through the contact form above.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="card"
              >
                <h3 className="text-lg font-bold mb-2 text-green">Do I need prior experience with Linux?</h3>
                <p className="text-gray">
                  Not at all! We have workshops and resources for complete beginners. Our community is 
                  built around learning and helping each other grow.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="card"
              >
                <h3 className="text-lg font-bold mb-2 text-green">Can I contribute to open source projects?</h3>
                <p className="text-gray">
                  Absolutely! We help students find beginner-friendly projects and guide them through 
                  their first contributions. Check out our Projects page for opportunities.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="card"
              >
                <h3 className="text-lg font-bold mb-2 text-green">What events do you organize?</h3>
                <p className="text-gray">
                  We host workshops, hackathons, coding competitions, and networking events. 
                  Check our Events page for the latest schedule and upcoming activities.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Contact; 