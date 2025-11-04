import React from 'react';
import './Responsibilities.css';
import { motion } from 'framer-motion';

const responsibilities = [
  {
    title: "Training and Placement Coordinator",
    organization: "Career Development Cell, SVNIT",
    description: "Served as the Training and Placement Coordinator at the Career Development Cell, SVNIT.",
    icon: "🎯",
    color: "primary"
  },
  {
    title: "Advisor",
    organization: "Academic Affairs Council, SVNIT",
    period: "August 2023 - May 2024",
    description: "Held the position of Advisor for the Academic Affairs Council at SVNIT from August 2023 to May 2024.",
    icon: "📚",
    color: "secondary"
  },
  {
    title: "Technical Secretary",
    organization: "Nehru Bhavan, SVNIT",
    period: "August 2023 - May 2024",
    description: "Acted as the Technical Secretary of Nehru Bhavan, SVNIT, from August 2023 to May 2024.",
    icon: "⚙️",
    color: "accent"
  }
];

const Responsibilities = () => {
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
    <div className="responsibilities-section">
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="responsibilities-header"
          variants={itemVariants}
        >
          Position of Responsibility
        </motion.h2>
        
        <motion.div
          className="responsibilities-grid"
          variants={containerVariants}
        >
          {responsibilities.map((responsibility, index) => (
            <motion.div
              key={index}
              className={`responsibility-card ${responsibility.color} interactive-hover`}
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="responsibility-icon"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {responsibility.icon}
              </motion.div>
              
              <div className="responsibility-content">
                <h3 className="responsibility-title">{responsibility.title}</h3>
                <p className="responsibility-organization">{responsibility.organization}</p>
                {responsibility.period && (
                  <p className="responsibility-period">{responsibility.period}</p>
                )}
                <p className="responsibility-description">{responsibility.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Responsibilities;
