import React, { useState } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'UnityWave: Non-Profit Management System',
      description: 'Developed a multi-role web platform (Admin, Donor, Organization) to streamline non-profit operations including event volunteering and item donation tracking. Engineered a secure backend with 10+ interconnected PHP modules enabling role-based authentication and centralized data management.',
      techStack: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript'],
      category: 'web',
      github: 'https://github.com/malihashawana/UnityWave-using-PHP-and-MySQL-',
      demo: null
    },
    {
      id: 2,
      title: 'Workforce Enroll: MERN-Based Job Portal',
      description: 'Built a full-stack job portal connecting job seekers, companies, and admins with real-time application and recruitment workflows. Implemented job posting, search, bookmarking, and dynamic application status management with role-based dashboards.',
      techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      category: 'web',
      github: 'https://github.com/malihashawana/Workforce_Enroll-main',
      demo: null
    },
    {
      id: 3,
      title: 'IAMSecure: AI-Based IAM Security Assessment Tool',
      description: 'Developed an AI-driven security assessment platform that evaluates Identity and Access Management configurations through URL-based feature extraction. Generated interpretable security scores and actionable recommendations using a trained machine learning model.',
      techStack: ['Python', 'Django', 'Machine Learning'],
      category: 'ml',
      github: 'https://github.com/malihashawana/IAMSecure',
      demo: null
    },
    {
      id: 4,
      title: 'Jajabor: Travel Guide & Trip Management Platform',
      description: 'Designed a comprehensive travel platform offering personalized trip planning, booking support, and location-based recommendations. Implemented a scalable Laravel backend with secure authentication using Laravel Breeze, including OTP-based password recovery. Built responsive user interfaces using Blade templates, Tailwind CSS, and Bootstrap.',
      techStack: ['Laravel', 'PHP', 'Blade', 'Tailwind CSS', 'Bootstrap', 'MySQL'],
      category: 'web',
      github: 'https://github.com/malihashawana/project470',
      demo: null
    }
  ]

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'ml', label: 'Machine Learning' }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="project-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${filter === category.id ? 'active' : ''}`}
              onClick={() => setFilter(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                  aria-label="GitHub Repository"
                >
                  <FaGithub /> Code
                </a>
                {project.demo && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label="Live Demo"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
