import React from 'react';
import { motion } from 'framer-motion';
import styles from './ProjectsSection.module.css';

const ProjectCard = ({ name, year, info, link, color }) => (
  <motion.div
    className={styles.projectCard}
    whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(0,255,174,0.2)' }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    style={{ borderColor: color }}
  >
    <div className={styles.cardHeader} style={{ background: color }}>
      <span className={styles.cardYear}>{year}</span>
      <span className={styles.cardName}>{name}</span>
    </div>
    <div className={styles.cardInfo}>{info}</div>
    <a className={styles.cardLink} href={link} target="_blank" rel="noopener noreferrer">
      VISIT SITE
    </a>
  </motion.div>
);

export default ProjectCard; 