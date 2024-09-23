import React from 'react';
import './Skills.css';

const skills = {
  programmingLanguages: ['C++', 'Python'],
  webDevelopment: ['JavaScript', 'Node.js', 'Express.js', 'HTML', 'CSS'],
  dataScience: ['MySQL', 'PowerBI'],
  ideTools: ['VS Code', 'Git', 'GitHub', 'Jupyter Notebook'],
  softSkills: ['Problem Solving', 'Communication', 'Leadership', 'Teamwork'],
};

const Skills = () => {
  return (
    <div className="skills-section">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skill-category">
          <h3>Programming Languages</h3>
          <ul>
            {skills.programmingLanguages.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="skill-category">
          <h3>Web Development</h3>
          <ul>
            {skills.webDevelopment.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="skill-category">
          <h3>Data Science</h3>
          <ul>
            {skills.dataScience.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="skill-category">
          <h3>IDE / Tools</h3>
          <ul>
            {skills.ideTools.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="skill-category">
          <h3>Soft Skills</h3>
          <ul>
            {skills.softSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
