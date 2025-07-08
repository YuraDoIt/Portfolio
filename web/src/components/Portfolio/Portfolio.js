import React, { useState } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('about');

  const skills = [
    { name: 'React', level: 90, category: 'Frontend' },
    { name: 'JavaScript', level: 85, category: 'Frontend' },
    { name: 'TypeScript', level: 80, category: 'Frontend' },
    { name: 'Node.js', level: 85, category: 'Backend' },
    { name: 'NestJS', level: 80, category: 'Backend' },
    { name: 'Python', level: 75, category: 'Backend' },
    { name: 'PostgreSQL', level: 70, category: 'Database' },
    { name: 'MongoDB', level: 75, category: 'Database' },
    { name: 'Docker', level: 70, category: 'DevOps' },
    { name: 'Git', level: 85, category: 'DevOps' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Task Manager App',
      description: 'Full-stack task management application built with React and NestJS. Features include task creation, search, and real-time updates.',
      technologies: ['React', 'NestJS', 'TypeScript', 'Axios'],
      image: 'https://via.placeholder.com/300x200/667eea/ffffff?text=Task+Manager',
      github: '#',
      live: '#'
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      description: 'Modern e-commerce solution with payment integration, user authentication, and admin dashboard.',
      technologies: ['React', 'Node.js', 'Stripe', 'MongoDB'],
      image: 'https://via.placeholder.com/300x200/764ba2/ffffff?text=E-commerce',
      github: '#',
      live: '#'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather application with location-based forecasts and interactive maps.',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'CSS3'],
      image: 'https://via.placeholder.com/300x200/667eea/ffffff?text=Weather+App',
      github: '#',
      live: '#'
    },
    
  ];

  const experience = [
    {
      company: 'Tech Solutions Inc.',
      position: 'Full Stack Developer',
      period: '2023 - Present',
      description: 'Developed and maintained web applications using React, Node.js, and PostgreSQL. Collaborated with cross-functional teams to deliver high-quality software solutions.',
      achievements: ['Led development of 3 major features', 'Improved application performance by 40%', 'Mentored 2 junior developers']
    },
    {
      company: 'StartupXYZ',
      position: 'Frontend Developer',
      period: '2022 - 2023',
      description: 'Built responsive user interfaces and implemented modern web technologies. Worked closely with designers to create intuitive user experiences.',
      achievements: ['Built 5+ responsive web applications', 'Implemented CI/CD pipelines', 'Reduced bundle size by 30%']
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Science',
      school: 'University of Technology',
      period: '2018 - 2022',
      description: 'Focused on software engineering, algorithms, and web development.'
    }
  ];

  return (
    <div className="portfolio">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Hi, I'm <span className="highlight">Your Name</span></h1>
            <h2 className="hero-subtitle">Full Stack Developer</h2>
            <p className="hero-description">
              I create modern, scalable web applications with cutting-edge technologies. 
              Passionate about clean code, user experience, and continuous learning.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">Download CV</button>
              <button className="btn-secondary">Contact Me</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-image">
              <img src="https://via.placeholder.com/300x300/667eea/ffffff?text=Profile" alt="Profile" />
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="nav-section">
        <div className="nav-tabs">
          <button 
            className={`nav-tab ${activeTab === 'about' ? 'active' : ''}`}
            onClick={() => setActiveTab('about')}
          >
            About
          </button>
          <button 
            className={`nav-tab ${activeTab === 'skills' ? 'active' : ''}`}
            onClick={() => setActiveTab('skills')}
          >
            Skills
          </button>
          <button 
            className={`nav-tab ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            Projects
          </button>
          <button 
            className={`nav-tab ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            Experience
          </button>
        </div>
      </section>

      {/* Content Sections */}
      <section className="content-section">
        {activeTab === 'about' && (
          <div className="about-content">
            <h2>About Me</h2>
            <p>
              I'm a passionate Full Stack Developer with 3+ years of experience building modern web applications. 
              I specialize in React, Node.js, and TypeScript, and I love creating intuitive user experiences 
              that solve real-world problems.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or sharing knowledge with the developer community.
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
        )}

        {activeTab === 'skills' && (
          <div className="skills-content">
            <h2>Skills & Technologies</h2>
            <div className="skills-grid">
              {['Frontend', 'Backend', 'Database', 'DevOps'].map(category => (
                <div key={category} className="skill-category">
                  <h3>{category}</h3>
                  <div className="skill-items">
                    {skills
                      .filter(skill => skill.category === category)
                      .map(skill => (
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
        )}

        {activeTab === 'projects' && (
          <div className="projects-content">
            <h2>Featured Projects</h2>
            <div className="projects-grid">
              {projects.map(project => (
                <div key={project.id} className="project-card">
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-technologies">
                      {project.technologies.map(tech => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      <a href={project.github} className="btn-link">GitHub</a>
                      <a href={project.live} className="btn-link">Live Demo</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'experience' && (
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
        )}
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-content">
          <h2>Get In Touch</h2>
          <p>I'm always interested in new opportunities and exciting projects.</p>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <span>your.email@example.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📱</span>
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <span>San Francisco, CA</span>
            </div>
          </div>
          <div className="social-links">
            <a href="#" className="social-link">GitHub</a>
            <a href="#" className="social-link">LinkedIn</a>
            <a href="#" className="social-link">Twitter</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio; 