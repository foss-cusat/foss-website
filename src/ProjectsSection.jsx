import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import styles from './ProjectsSection.module.css';

const projects = [
  {
    name: 'PLAYBOOK JOURNAL',
    year: 2022,
    info: 'A collaborative playbook for cross-border journalists. Design: Loonatiks Design Crew. Tech: GatsbyJS, Canvas, MatterJS, React-Spring.',
    link: 'https://playbook.n-ost.org/',
    color: '#00ffae',
  },
  {
    name: 'MIAO',
    year: 2023,
    info: 'A startup providing global users with an exceptionally entertaining experience through innovative gaming products and services.',
    link: '#',
    color: '#00ffae',
  },
];

const ProjectsSection = () => (
  <section className={styles.section}>
    <motion.h1
      className={styles.heading}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      PROJECTS
    </motion.h1>
    <div className={styles.grid}>
      {projects.map((project, idx) => (
        <ProjectCard key={idx} {...project} />
      ))}
    </div>
  </section>
);

export default ProjectsSection; 