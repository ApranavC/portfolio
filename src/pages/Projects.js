import React, { useState } from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Track n Trace',
    tagline: 'Backend solution for tracking NGO activities.',
    description: `Led the development of a scalable backend for NGO’s activity tracking app using Node.js, Express, and Mongoose. 
    Integrated MongoDB for seamless database interactions and implemented secure authentication with JWT and OTP-based verification.`,
    github: 'https://github.com/ApranavC/track-n-trace',
  },
  {
    title: 'Csi Phy Simulator',
    tagline: 'Physics simulation API using Node.js and Python.',
    description: `Developed a RESTful API using Node.js and Express to handle real-time physics simulations. 
    Integrated Python for complex calculations, enabling students to simulate physics experiments and solve equations.`,
    github: 'https://github.com/ApranavC/Csi-Phi-simulate',
  },
  {
    title: 'FinSight',
    tagline: 'Tool for analyzing and managing financial data.',
    description: `Designed and implemented a system to analyze and manage bank statements using SQL and PowerBI. 
    Created detailed financial reports with visual insights, helping users track expenses, income, and investments efficiently.`,
    github: 'https://github.com/ApranavC',
  },
  {
    title: 'IPL Data Analysis',
    tagline: 'Smart Player Insights for Winning Teams',
    description: `This IPL data analysis project presents a dynamic dashboard showcasing player performances, enabling captains and coaches to make data-driven decisions. By analyzing opponents and locations, the dashboard assists in optimal team selection for match-winning strategies.`,
    github: 'https://github.com/ApranavC',
  }
];

const Projects = () => {
  const [openProjectIndex, setOpenProjectIndex] = useState(null);

  const toggleDropdown = (index) => {
    // If the clicked project is already open, close it by setting the index to null.
    // Otherwise, set the index to the clicked project.
    setOpenProjectIndex(openProjectIndex === index ? null : index);
  };

  return (
    <div className="projects-section">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <h3>{project.title}</h3>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                View on GitHub
              </a>
            </div>
            <p className="tagline">{project.tagline}</p>
            <button className="more-info-btn" onClick={() => toggleDropdown(index)}>
              {openProjectIndex === index ? 'Less Info' : 'More Info'}
            </button>
            {openProjectIndex === index && (
              <div className="project-description">
                <dl>
                  <dt>Description:</dt>
                  <dd>{project.description}</dd>
                </dl>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
