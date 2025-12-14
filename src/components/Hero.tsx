import './Hero.css';
import { FaRocket, FaDownload } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero">
      <div className="container hero-content">
        <div className="hero-text fade-in-up">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Victor Castañeda</span>
          </h1>
          <h2 className="hero-subtitle">
            Full Stack Developer <FaRocket className="rocket-icon" />
          </h2>
          <p className="hero-description">
            Passionate about building scalable web applications and cloud solutions.
            Experienced in Python, JavaScript, TypeScript, and AWS.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a 
              href="/victor_castaneda-4-1.pdf" 
              download 
              className="btn btn-secondary"
            >
              <FaDownload /> Download CV
            </a>
          </div>
        </div>
        
        <div className="hero-image fade-in-up">
          <div className="floating-card glass">
            <div className="code-snippet">
              <div className="code-line">
                <span className="keyword">const</span>{' '}
                <span className="variable">developer</span> = {'{'}
              </div>
              <div className="code-line indent">
                <span className="property">name:</span>{' '}
                <span className="string">"Victor"</span>,
              </div>
              <div className="code-line indent">
                <span className="property">skills:</span> [
                <span className="string">"Python"</span>,{' '}
                <span className="string">"JavaScript"</span>,{' '}
                <span className="string">"AWS"</span>],
              </div>
              <div className="code-line indent">
                <span className="property">passion:</span>{' '}
                <span className="string">"Building amazing things"</span>
              </div>
              <div className="code-line">{'};'}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
