import React from 'react';
import './Experience.css';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Product Solution Engineer',
    company: 'VideoSDK (Zujo Tech Pvt Ltd)',
    duration: 'Dec 2024 - Present',
    location: 'Surat, India',
    type: 'Full-time',
    description: [
      'Lead client onboarding and develop custom Proof of Concept (PoC) implementations for enterprise SDK use.',
      'Enhance SDK performance through New Relic, Retool, and advanced debugging workflows.',
      'Debug and optimize REST APIs to improve reliability and integration efficiency.',
      'Collaborate cross-functionally with sales and development teams to deliver real-time communication solutions.'
    ],
    technologies: ['Python', 'Node.js', 'New Relic', 'Retool', 'REST APIs'],
    color: 'primary'
  },
  {
    role: 'Member of Technical Staff',
    company: 'Edignite Educational and Charitable Trust',
    duration: 'Jan 2024 - Dec 2024',
    location: 'Remote',
    type: 'Full-time',
    description: [
      'Executed backend development with Node.js, Express.js, and Python for delivering solutions.',
      'Managed dashboard implementation and data reporting workflows using SQL databases and Power BI.',
      'Led project planning, stakeholder coordination, and team collaboration to build solutions for educational initiatives.'
    ],
    technologies: ['Node.js', 'Express.js', 'Python', 'SQL', 'Power BI'],
    color: 'secondary'
  },
  {
    role: 'Data Analyst Intern',
    company: 'Siemens Energy',
    duration: 'Dec 2023 - Jan 2024',
    location: 'Baroda, India',
    type: 'Internship',
    description: [
      'Cleaned and analyzed MySQL data to identify operational metrics and data trends.',
      'Created actionable dashboards from SAP datasets using Power BI for executive reporting.',
      'Delivered insights that informed strategic decisions across supply and operations teams.'
    ],
    technologies: ['MySQL', 'Power BI', 'SAP', 'Data Analysis'],
    color: 'accent'
  }
];

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="experience-section">
      <div className="container">
        <motion.div
          className="experience-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Work Experience</h2>
          <p>My professional journey and the roles that have shaped my expertise.</p>
        </motion.div>

        <motion.div
          className="experience-timeline"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className={`experience-card ${experience.color} interactive-hover`}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="experience-header-card">
                <div className="experience-main-info">
                  <h3 className="experience-role">{experience.role}</h3>
                  <h4 className="experience-company">{experience.company}</h4>
                  <div className="experience-meta">
                    <span className="experience-duration">{experience.duration}</span>
                    <span className="experience-location">{experience.location}</span>
                    <span className="experience-type">{experience.type}</span>
                  </div>
                </div>
                <div className="experience-icon">
                  <div className="icon-circle">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="experience-description">
                <ul>
                  {experience.description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>

              <div className="experience-technologies">
                <h5>Technologies Used:</h5>
                <div className="tech-tags">
                  {experience.technologies.map((tech, techIndex) => (
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
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
