import { useState } from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt, FaPython, FaJs } from 'react-icons/fa';
import { SiTypescript, SiDjango } from 'react-icons/si';

const Projects = () => {
  // Your GitHub repositories data
  const projects = [
    {
      id: 1,
      name: 'AWS CDK E-commerce',
      description: 'E-commerce infrastructure built with AWS CDK, demonstrating Infrastructure as Code practices for scalable cloud applications.',
      technologies: ['TypeScript', 'AWS CDK', 'Cloud Architecture'],
      github: 'https://github.com/Vidanilo10/aws-cdk-ecommerce',
      icon: <SiTypescript />,
      language: 'TypeScript'
    },
    {
      id: 2,
      name: 'Django React Application',
      description: 'Full-stack web application combining Django backend with React frontend, showcasing modern web development practices.',
      technologies: ['Python', 'Django', 'React', 'REST API'],
      github: 'https://github.com/Vidanilo10/django-react',
      icon: <FaPython />,
      language: 'Python'
    },
    {
      id: 3,
      name: 'AWS HTTP API',
      description: 'Serverless HTTP API built on AWS, demonstrating cloud-native application development and API design.',
      technologies: ['JavaScript', 'AWS Lambda', 'API Gateway'],
      github: 'https://github.com/Vidanilo10/aws_http',
      icon: <FaJs />,
      language: 'JavaScript'
    },
    {
      id: 4,
      name: 'Airline Backend System',
      description: 'Backend system for airline management built with Python, handling complex business logic and data management.',
      technologies: ['Python', 'Backend Development', 'APIs'],
      github: 'https://github.com/Vidanilo10/AirlineBackend',
      icon: <FaPython />,
      language: 'Python'
    },
    {
      id: 5,
      name: 'Stori Flow',
      description: 'Python-based workflow automation tool for streamlining development processes and data pipelines.',
      technologies: ['Python', 'Automation', 'Workflows'],
      github: 'https://github.com/Vidanilo10/stori-flow',
      icon: <FaPython />,
      language: 'Python'
    },
    {
      id: 6,
      name: 'Technical Challenge - MO',
      description: 'Technical challenge project demonstrating problem-solving skills and Python proficiency.',
      technologies: ['Python', 'Algorithms', 'Problem Solving'],
      github: 'https://github.com/Vidanilo10/mo-technicall-challenge',
      icon: <FaPython />,
      language: 'Python'
    },
    {
      id: 7,
      name: 'ORM Project',
      description: 'Object-Relational Mapping implementation in Python, demonstrating database abstraction and design patterns.',
      technologies: ['Python', 'ORM', 'Database Design'],
      github: 'https://github.com/Vidanilo10/ORM',
      icon: <FaPython />,
      language: 'Python'
    }
  ];

  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.language.toLowerCase() === filter.toLowerCase());

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title fade-in-up">My Projects</h2>
        
        <div className="filter-buttons fade-in-up">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${filter === 'python' ? 'active' : ''}`}
            onClick={() => setFilter('python')}
          >
            Python
          </button>
          <button 
            className={`filter-btn ${filter === 'javascript' ? 'active' : ''}`}
            onClick={() => setFilter('javascript')}
          >
            JavaScript
          </button>
          <button 
            className={`filter-btn ${filter === 'typescript' ? 'active' : ''}`}
            onClick={() => setFilter('typescript')}
          >
            TypeScript
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-card glass fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-header">
                <div className="project-icon">{project.icon}</div>
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    title="View on GitHub"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>

              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
