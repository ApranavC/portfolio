import React from 'react';
import './Achievements.css';
import { motion } from 'framer-motion';

const achievements = [
  {
    title: "TCS NQT Qualification",
    description: "Successfully cleared the TCS NQT conducted by TCS ION.",
    icon: "🏆",
    color: "primary"
  },
  {
    title: "MIMAMSA Zonal Topper",
    description: "Achieved top honor in the international quiz competition organized by IISER Pune.",
    icon: "🥇",
    color: "secondary"
  },
  {
    title: "Mathematics Excellence",
    description: "Scored a perfect 100/100 in both SSC and HSC mathematics exams.",
    icon: "📊",
    color: "accent"
  }
];

const Achievements = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="achievements-section">
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="achievements-header"
          variants={itemVariants}
        >
          Achievements
        </motion.h2>
        
        <motion.div
          className="achievements-grid"
          variants={containerVariants}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className={`achievement-card ${achievement.color} interactive-hover`}
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="achievement-icon"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {achievement.icon}
              </motion.div>
              
              <div className="achievement-content">
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-description">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Achievements;
