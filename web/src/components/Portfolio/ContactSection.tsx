import React from "react";

const ContactSection: React.FC = () => {
  const contactEmail = process.env.REACT_APP_CONTACT_EMAIL;

  return (
    <section className="contact-section">
      <div className="contact-content">
        <h2>Get In Touch</h2>
        <p>
          I'm always interested in new opportunities and exciting projects.
        </p>
        <div className="contact-info">
          <div className="contact-item">
            <span className="contact-icon">📧</span>
            <span>{contactEmail}</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📱</span>
            <span>+380 999 294 614</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📍</span>
            <span>Ukraine</span>
          </div>
        </div>
        <div className="social-links">
          <a href="https://github.com/YuraDoIt" className="social-link">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/yura-tsudzenko-417561173/" className="social-link">
            LinkedIn
          </a>
          {/* Can add another media */}
          {/* <a href="#" className="social-link">
            Twitter
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 