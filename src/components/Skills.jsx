import React from 'react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Python', 'C/C++', 'Java', 'JavaScript', 'PHP', 'XML', 'JSON', 'Markdown']
    },
    {
      title: 'Web Technologies & Frameworks',
      skills: ['React.js', 'Django', 'Flask', 'Laravel', 'Node.js', 'Express.js', 'HTML5', 'CSS3', 'Bootstrap']
    },
    {
      title: 'AI / ML Frameworks & Libraries',
      skills: ['PyTorch', 'TensorFlow', 'Keras', 'Scikit-Learn', 'Hugging Face', 'NumPy', 'Pandas']
    },
    {
      title: 'Software Testing & QA',
      skills: ['Manual Testing', 'Test Case Design', 'Selenium', 'Playwright', 'Postman', 'API Testing', 'Debugging']
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'PostgreSQL', 'SQLite', 'MongoDB']
    },
    {
      title: 'Tools & DevOps',
      skills: ['Git', 'GitHub', 'Docker (basic)', 'LaTeX', 'VS Code', 'Linux (basic)']
    }
  ]

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="skill-category-title">{category.title}</h3>
              <div className="skill-badges">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
