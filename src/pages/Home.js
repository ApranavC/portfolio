import React from 'react';
import './Home.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import TechDemo from '../components/TechDemo';
import ParticleBackground from '../components/ParticleBackground';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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

  const floatingVariants = {
    float: {
      y: [-15, 15, -15],
      rotate: [-2, 2, -2],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      opacity: [1, 0.8, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const shimmerVariants = {
    shimmer: {
      backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="home-section">
      <ParticleBackground />
      
      {/* Terminal Section - Now First */}
      <motion.section
        className="terminal-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <TechDemo />
        </div>
      </motion.section>


      {/* About Section */}
      <motion.section 
        className="about-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <motion.div 
            className="about-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2>About Me</h2>
                   <div className="about-grid">
                     <div className="about-text">
                       <p>
                         Hello! I'm Pranav Abegaonkar, currently pursuing an Integrated Master's in Physics at NIT Surat.
                         My academic journey has fueled my passion for technology and research, allowing me to gain valuable
                         experience in both fields.
                       </p>
                       <p>
                         A research internship introduced me to coding, sparking my interest in data analysis and programming.
                         Since then, I've applied my skills as a Technical Member at an NGO and as a Data Analyst Intern at
                         Siemens, where I worked on real-world projects utilizing my technical expertise.
                       </p>
                       <p>
                         In addition to my technical skills, I've developed strong leadership abilities. I've served as
                         Chief Advisor of the Academic Affairs Council, co-organizing a convocation event presided over by
                         the Honorable President of India. I also held the role of Technical Secretary for my hostel,
                         managing internet infrastructure and resolving technical issues, and currently serve as a Training
                         and Placement Coordinator at NIT Surat.
                       </p>
                     </div>
                     <div className="about-profile">
                       <motion.div
                         className="profile-image-container"
                         initial={{ opacity: 0, scale: 0.8 }}
                         whileInView={{ opacity: 1, scale: 1 }}
                         transition={{ duration: 0.6, delay: 0.3 }}
                         viewport={{ once: true }}
                       >
                         <motion.div
                           className="profile-image"
                           variants={floatingVariants}
                           animate="float"
                         >
                           <div className="profile-placeholder morphing-shape tech-glow">
                             <div className="profile-initials">PA</div>
                           </div>
                           <div className="profile-ring"></div>
                         </motion.div>
                       </motion.div>
                     </div>
                   </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
