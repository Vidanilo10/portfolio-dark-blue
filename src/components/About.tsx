import './About.css';
import { FaPython, FaJs, FaReact, FaAws, FaDocker, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiDjango, SiSpring } from 'react-icons/si';

interface Skill {
  name: string;
  icon: JSX.Element;
  color: string;
}

const About: React.FC = () => {
  const skills: Skill[] = [
    { name: 'Python', icon: <FaPython />, color: '#3776ab' },
    { name: 'JavaScript', icon: <FaJs />, color: '#f7df1e' },
    { name: 'TypeScript', icon: <SiTypescript />, color: '#3178c6' },
    { name: 'React', icon: <FaReact />, color: '#61dafb' },
    { name: 'Django', icon: <SiDjango />, color: '#092e20' },
    { name: 'Spring', icon: <SiSpring />, color: '#6db33f' },
    { name: 'AWS', icon: <FaAws />, color: '#ff9900' },
    { name: 'Docker', icon: <FaDocker />, color: '#2496ed' },
    { name: 'Databases', icon: <FaDatabase />, color: '#4479a1' },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title fade-in-up">About Me</h2>
        
        <div className="about-content">
          <div className="about-text glass fade-in-up">
            <p>
              I'm a passionate Software Engineer with experience in building
              scalable web applications and cloud-based solutions. My journey in
              software development has equipped me with a diverse skill set across
              multiple technologies and frameworks.
            </p>
            <p>
              I have hands-on experience with backend technologies like Python (Django),
              JavaScript/TypeScript (Node.js), and Java (Spring), as well as frontend
              frameworks like React. I'm also proficient in cloud technologies,
              particularly AWS, and have experience with infrastructure as code using
              AWS CDK.
            </p>
            <p>
              I'm always eager to learn new technologies and take on challenging
              projects that push my boundaries as a developer.
            </p>
          </div>

          <div className="skills-grid">
            <h3 className="skills-title fade-in-up">Technical Skills</h3>
            <div className="skills-container">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="skill-card glass fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="skill-icon" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
