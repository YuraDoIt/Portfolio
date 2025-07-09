import React from "react";
import { Project } from "../../../types";

// SVG placeholder component
const ProjectPlaceholder: React.FC<{ title: string }> = ({ title }) => (
  <svg width="300" height="200" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="200" fill="#667eea"/>
    <rect x="20" y="20" width="260" height="160" fill="white" opacity="0.1"/>
    <text x="150" y="100" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">{title}</text>
  </svg>
);

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const renderProjectImage = (imageType: string, title: string) => {
    switch (imageType) {
      case "task-manager":
        return <ProjectPlaceholder title="Task Manager" />;
      case "e-commerce":
        return <ProjectPlaceholder title="E-commerce" />;
      case "weather-app":
        return <ProjectPlaceholder title="Weather App" />;
      default:
        return <ProjectPlaceholder title={title} />;
    }
  };

  return (
    <div className="project-card">
      <div className="project-image">
        {renderProjectImage(project.image, project.title)}
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-technologies">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.github} className="btn-link">
            GitHub
          </a>
          <a href={project.live} className="btn-link">
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 