import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }

    const whatsappUrl = `https://wa.me/917758036637?text=Hi Pranav, I am ${formData.name}. I'd like to get in touch with you for a short meeting. You can call me at ${formData.phone}.`;
    window.open(whatsappUrl, '_blank');
  };

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

  const contactItems = [
    {
      icon: faEnvelope,
      text: "Gmail",
      href: "mailto:apranavc2211@gmail.com",
      color: "primary"
    },
    {
      icon: faPhone,
      text: "Call: +91 7758036637",
      href: "tel:+917758036637",
      color: "secondary"
    },
    {
      icon: faGithub,
      text: "GitHub",
      href: "https://github.com/ApranavC",
      color: "accent"
    },
    {
      icon: faLinkedin,
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/pranav-abegaonkar-10036a204",
      color: "primary"
    }
  ];

  return (
    <div className="contact-section">
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="contact-header"
          variants={itemVariants}
        >
          Contact Me
        </motion.h2>
        
        <motion.div
          className="contact-container"
          variants={containerVariants}
        >
          {/* First Column: Contact Details */}
          <motion.div
            className="contact-details"
            variants={itemVariants}
          >
            {contactItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : '_self'}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : ''}
                className={`contact-item ${item.color} interactive-hover`}
                whileHover={{ scale: 1.05, x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                <FontAwesomeIcon icon={item.icon} className="contact-icon" />
                <span>{item.text}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Second Column: Get in Touch Form */}
          <motion.div
            className="contact-form"
            variants={itemVariants}
          >
            <form onSubmit={handleSubmit}>
              <motion.input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
              <motion.input
                type="tel"
                name="phone"
                placeholder="Your Mobile Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="form-input"
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
              {error && (
                <motion.p
                  className="error-message"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {error}
                </motion.p>
              )}
              <motion.button
                type="submit"
                className="submit-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
