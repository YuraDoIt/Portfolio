import React from "react";
import { Skill } from "../../../types";

interface SkillsSectionProps {
  skills: Skill[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  return (
    <div className="skills-content">
      <h2>Skills & Technologies</h2>
      <div className="skills-grid">
        {["Frontend", "Backend", "Database", "DevOps"].map((category) => (
          <div key={category} className="skill-category">
            <h3>{category}</h3>
            <div className="skill-items">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection; 