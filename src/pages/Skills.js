import React from 'react';
import './Skills.css';
import { motion } from 'framer-motion';

const skills = {
  programmingLanguages: ['C++', 'Python', 'JavaScript'],
  technicalSkills: ['Node.js', 'Express.js', 'MySQL', 'MongoDB', 'Power BI', 'VS Code', 'GitHub', 'New Relic', 'Retool'],
  interpersonalSkills: ['Clear written & verbal Communication', 'Client Presentations', 'Cross-functional Collaboration'],
};

const Skills = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="skills-section">
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="skills-header"
          variants={itemVariants}
        >
          Skills
        </motion.h2>
        
        <motion.div
          className="skills-container"
          variants={containerVariants}
        >
          <motion.div
            className="skill-category interactive-hover"
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <h3>Programming Languages</h3>
            <div className="skills-grid">
              {skills.programmingLanguages.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-item"
                  variants={skillVariants}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            className="skill-category interactive-hover"
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <h3>Technical & Digital Skills</h3>
            <div className="skills-grid">
              {skills.technicalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-item"
                  variants={skillVariants}
                  whileHover={{ scale: 1.1, rotate: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            className="skill-category interactive-hover"
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <h3>Interpersonal Skills</h3>
            <div className="skills-grid">
              {skills.interpersonalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-item"
                  variants={skillVariants}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
