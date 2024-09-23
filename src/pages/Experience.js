import React from 'react';
import './Experience.css';

const experiences = [
  {
    role: 'Software Engineer',
    company: 'Edignite Educational and Charitable Trust',
    duration: 'Jan 2024 - Present',
    description: [
      'Leading and managing all technical operations, overseeing project planning, execution, and coordination for educational initiatives.',
      'Spearheading new programs to attract students, volunteers, and donors, increasing community engagement and expanding the NGO’s outreach.',
      'Developing and launching technology-driven solutions to streamline operations, enhancing overall efficiency and project impact.'
    ],
  },
  {
    role: 'Data Analyst Intern',
    company: 'Siemens Energy',
    duration: 'Dec 2023 - Jan 2024',
    description: [
      'Streamlined and meticulously organized daily raw data with millions of rows, refining it to focus on the most critical information for enhanced analysis.',
      'Leveraged Power BI to transform complex SAP datasets into clear, actionable visual insights for inventory and buyer-vendor behavior.',
      'Analyzed patterns, trends, and correlations, providing comprehensive data-driven insights that significantly supported strategic decision-making.'
    ],
  }
];

const Experience = () => {
  return (
    <div className="experience-section">
      <h2>Experience</h2>
      <div className="experience-list">
        {experiences.map((experience, index) => (
          <div key={index} className="experience-card">
            <h3>{experience.role} - <span>{experience.company}</span></h3>
            <p className="experience-duration">{experience.duration}</p>
            <ul>
              {experience.description.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
