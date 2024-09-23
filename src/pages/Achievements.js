import React from 'react';
import './Achievements.css';

const achievements = [
  "TCS NQT Qualification: Successfully cleared the TCS NQT conducted by TCS ION.",
  "MIMAMSA Zonal Topper: Achieved top honors in the international quiz competition organized by IISER Pune.",
  "Mathematics Excellence: Scored a perfect 100/100 in both SSC and HSC mathematics exams.",
  "Among top 3 state toppers in primary and middle school scholarship exam.",
  "Ranked among the top 0.25% students in MHT CET exam.",
  "Ranked among the top 2% in JEE Mains exam."
];

const Achievements = () => {
  return (
    <div className="achievements-section">
      <h2>Achievements</h2>
      <ul className="achievements-list">
        {achievements.map((achievement, index) => (
          <li key={index} className="achievement-item">
            {achievement}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Achievements;
