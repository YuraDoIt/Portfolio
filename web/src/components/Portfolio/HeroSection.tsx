import React from "react";

// SVG placeholder component
const ProfilePlaceholder: React.FC = () => (
  <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="300" fill="#667eea"/>
    <circle cx="150" cy="120" r="40" fill="white" opacity="0.8"/>
    <path d="M150 180 C 100 180 60 220 60 270 L 240 270 C 240 220 200 180 150 180 Z" fill="white" opacity="0.8"/>
    <text x="150" y="280" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">Profile</text>
  </svg>
);

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Yurii Tsudzenko</span>
          </h1>
          <h2 className="hero-subtitle">Full Stack Developer</h2>
          <p className="hero-description">
            I create modern, scalable web applications with cutting-edge
            technologies. Passionate about clean code, user experience, and
            continuous learning.
          </p>
          <div className="hero-buttons">
            <a
              href="/Yurii_Tsudzenko_CV.pdf"
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              View CV
            </a>
            <button className="btn-secondary">Contact Me</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-image">
            <ProfilePlaceholder />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 