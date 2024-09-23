import React from 'react';
import './Home.css';
import profilePhoto from '../assets/profile.png'; // Add your profile photo path here

const Home = () => {
  return (
    <div className="home-section">
      <div className="profile-container">
        {/* Profile Photo */}
        <div className="profile-photo">
          <img src={profilePhoto} alt="Pranav Abegaonkar" />
        </div>

        {/* Profile Details */}
        <div className="profile-details">
          <h1>Pranav Abegaonkar</h1>
          <h2>NIT Surat</h2>
          <p>Software Engineer | Data Analyst</p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="intro-section">
        <p>
          Hello! I’m Pranav Abegaonkar, currently pursuing an Integrated Master’s in Physics at NIT Surat. My academic journey has fueled my passion for technology and research, allowing me to gain valuable experience in both fields.
        </p>
        <p>
          A research internship introduced me to coding, sparking my interest in data analysis and programming. Since then, I’ve applied my skills as a Technical Member at an NGO and as a Data Analyst Intern at Siemens, where I worked on real-world projects utilizing my technical expertise.
        </p>
        <p>
          In addition to my technical skills, I’ve developed strong leadership abilities. I’ve served as Chief Advisor of the Academic Affairs Council, co-organizing a convocation event presided over by the Honorable President of India. I also held the role of Technical Secretary for my hostel, managing internet infrastructure and resolving technical issues, and currently serve as a Training and Placement Coordinator at NIT Surat.
        </p>
        <p>
          I am proficient in C++, with working knowledge of Python, Power BI, SQL, Node.js, and Express. I’m eager to contribute to interdisciplinary projects and leverage my technical and managerial skills to make meaningful contributions.
        </p>
      </div>
    </div>
  );
};

export default Home;
