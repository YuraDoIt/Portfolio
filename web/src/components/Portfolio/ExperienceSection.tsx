import React from "react";
import { Experience } from "../../types";

interface ExperienceSectionProps {
  experience: Experience[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experience }) => {
  return (
    <div className="experience-content">
      <h2>Work Experience</h2>
      <div className="timeline">
        {experience.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>{exp.position}</h3>
              <h4>{exp.company}</h4>
              <p className="period">{exp.period}</p>
              <p>{exp.description}</p>
              <ul className="achievements">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection; 