import React from "react";
import { Education } from "../../types";

interface AboutSectionProps {
  education: Education[];
}

const AboutSection: React.FC<AboutSectionProps> = ({ education }) => {
  return (
    <div className="about-content">
      <h2>About Me</h2>
      <p>
        I'm a passionate Full Stack Developer with 3+ years of experience
        building modern web applications. I specialize in React, Node.js,
        and TypeScript, and I love creating intuitive user experiences
        that solve real-world problems.
      </p>
      <p>
        When I'm not coding, you can find me exploring new technologies,
        contributing to open-source projects, or sharing knowledge with
        the developer community.
      </p>

      <div className="education-section">
        <h3>Education</h3>
        {education.map((edu, index) => (
          <div key={index} className="education-item">
            <h4>{edu.degree}</h4>
            <p className="school">{edu.school}</p>
            <p className="period">{edu.period}</p>
            <p>{edu.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection; 