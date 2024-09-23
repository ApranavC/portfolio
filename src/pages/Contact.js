import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';

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

  return (
    <div className="contact-section">
      <h2>Contact Me</h2>
      <div className="contact-container">
        {/* First Column: Contact Details */}
        <div className="contact-details">
          <p className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            <a href="mailto:apranavc2211@gmail.com"> Gmail</a>
          </p>
          <p className="contact-item">
            <FontAwesomeIcon icon={faPhone} className="contact-icon" />
            <a href="tel:+917758036637"> Call: +91 7758036637</a>
          </p>
          <p className="contact-item">
            <FontAwesomeIcon icon={faGithub} className="contact-icon" />
            <a href="https://github.com/ApranavC" target="_blank" rel="noopener noreferrer"> GitHub</a>
          </p>
          <p className="contact-item">
            <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
            <a href="https://www.linkedin.com/in/pranav-abegaonkar-10036a204" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
          </p>
        </div>

        {/* Second Column: Get in Touch Form */}
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Mobile Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="form-input"
            />
            {error && <p className="error-message">{error}</p>}
            <button type="submit" className="submit-btn">Get in Touch</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
