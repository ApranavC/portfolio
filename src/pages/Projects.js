import React, { useState } from 'react';
import './Projects.css';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: 'AI-Powered Contact Center',
    tagline: 'Voice AI for Banking & Insurance',
    description: `Built a programmable, AI contact center for banks, insurers, and enterprises to automate outbound calls. 
    Designed telephony flow where function invocation triggers an AI agent to call users and execute tasks. 
    Integrated LLMs, voice APIs for dynamic conversations, query resolution, and tailored messaging. 
    Enabled firms to launch voice workflows for KYC, appointment booking, policy updates, and more.`,
    github: 'https://github.com/ApranavC',
    technologies: ['Python', 'LLMs', 'Voice APIs', 'Telephony'],
    category: 'AI/ML'
  },
  {
    title: 'VideoSDK Python SDK Enhancements',
    tagline: 'Enterprise Feature Enablement',
    description: `Spearheaded advanced feature integrations into the core Python SDK for real-time audio/video calling. 
    Enabled real-time media stream access for external processing — unlocking proctoring and AI-based enhancements. 
    Integrated LLMs (OpenAI, Claude) for live translation, sentiment analysis, and contextual stream augmentation. 
    Adopted by leading HRTech (US/UK) and EdTech firms for multilingual assessments and AI proctoring solutions.`,
    github: 'https://github.com/ApranavC',
    technologies: ['Python', 'OpenAI', 'Claude', 'Real-time Processing'],
    category: 'SDK Development'
  },
  {
    title: 'FinSight',
    tagline: 'Financial Analytics from Bank Statements',
    description: `Engineered a pipeline to parse raw bank statements into structured insights using SQL + Python. 
    Connected processed data to Power BI for dynamic dashboards showing spends, trends, and summaries. 
    Enabled users to track budgets, generate reports, and spot anomalies via automated ingestion workflows.`,
    github: 'https://github.com/ApranavC',
    technologies: ['Python', 'SQL', 'Power BI', 'Data Pipeline'],
    category: 'Data Analytics'
  },
  {
    title: 'Track n Trace',
    tagline: 'Backend solution for tracking NGO activities.',
    description: `Led the development of a scalable backend for NGO's activity tracking app using Node.js, Express, and Mongoose. 
    Integrated MongoDB for seamless database interactions and implemented secure authentication with JWT and OTP-based verification.`,
    github: 'https://github.com/ApranavC/track-n-trace',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    category: 'Backend Development'
  }
];

const Projects = () => {
  const [openProjectIndex, setOpenProjectIndex] = useState(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(projects.map(project => project.category))];
  const filteredProjects = filter === 'All' ? projects : projects.filter(project => project.category === filter);

  const toggleDropdown = (index) => {
    setOpenProjectIndex(openProjectIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="projects-section">
      <div className="container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>My Projects</h2>
          <p>Here are some of the projects I've worked on, showcasing my skills and experience.</p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="filter-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card interactive-hover"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="project-header">
                <div className="project-category">{project.category}</div>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="github-link"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
              
              <h3 className="project-title">{project.title}</h3>
              <p className="project-tagline">{project.tagline}</p>
              
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <motion.span 
                    key={techIndex} 
                    className="tech-tag"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              <motion.button
                className="more-info-btn"
                onClick={() => toggleDropdown(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {openProjectIndex === index ? 'Less Info' : 'More Info'}
                <motion.span
                  className="arrow"
                  animate={{ rotate: openProjectIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ↓
                </motion.span>
              </motion.button>

              <AnimatePresence>
                {openProjectIndex === index && (
                  <motion.div
                    className="project-description"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{project.description}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
