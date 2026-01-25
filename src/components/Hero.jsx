import React from 'react'
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

const downloadResume = () => {
  const link = document.createElement('a');
  link.href = '/Resume.pdf';
  link.download = 'Shawana_Maliha_Resume.pdf'; // Customize the filename as needed
  link.click();
}

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-image-wrapper">
            <img 
              src="/photo.jpg" 
              alt="Shawana Maliha" 
              className="hero-image"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'flex'
              }}
            />
            <div className="hero-image-placeholder" style={{ display: 'none' }}>
              <span>SM</span>
            </div>
          </div>
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Shawana Maliha</span>
              <br />
              a Computer Science Undergraduate
            </h1>
            <div className="hero-subtitle">
              <span>Full-Stack Development</span>
              <span className="separator">•</span>
              <span>Software Quality Assurance</span>
              <span className="separator">•</span>
              <span>Machine Learning</span>
            </div>
            <p className="hero-description">
              Passionate about building reliable, scalable, and intelligent systems that solve real-world problems. 
              I combine analytical thinking with practical software engineering skills to create impactful solutions 
              at the intersection of web development, quality assurance, and artificial intelligence.
            </p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary" 
                onClick={() => scrollToSection('projects')}
              >
                View Projects
              </button>
              <button 
                className="btn btn-secondary" 
                onClick={downloadResume}
              >
                <FaFileDownload /> Download Resume
              </button>
              <button 
                className="btn btn-outline" 
                onClick={() => scrollToSection('contact')}
              >
                Contact Me
              </button>
            </div>
            <div className="hero-social">
              <a href="https://github.com/malihashawana" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/shawana-maliha-32aa2430b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="mailto:malihashawana@gmail.com" aria-label="Email">
                <HiMail />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
