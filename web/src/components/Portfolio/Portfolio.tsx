import React, { useState } from "react";
import "./Portfolio.css";
import {
  HeroSection,
  NavigationTabs,
  AboutSection,
  SkillsSection,
  ProjectsSection,
  ExperienceSection,
  ContactSection,
} from ".";
import { skills, projects, experience, education } from "./data/portfolioData";

const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("about");

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return <AboutSection education={education} />;
      case "skills":
        return <SkillsSection skills={skills} />;
      case "projects":
        return <ProjectsSection projects={projects} />;
      case "experience":
        return <ExperienceSection experience={experience} />;
      default:
        return <AboutSection education={education} />;
    }
  };

  return (
    <div className="portfolio">
      <HeroSection />
      <NavigationTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <section className="content-section">
        {renderContent()}
      </section>

      <ContactSection />
    </div>
  );
};

export default Portfolio; 