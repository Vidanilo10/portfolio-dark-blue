import { useState, useEffect } from 'react';
import './Navbar.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <h2>Victor Castañeda</h2>
        </div>
        
        <ul className="nav-menu">
          <li><a onClick={() => scrollToSection('hero')}>Home</a></li>
          <li><a onClick={() => scrollToSection('about')}>About</a></li>
          <li><a onClick={() => scrollToSection('projects')}>Projects</a></li>
          <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
        </ul>

        <div className="nav-social">
          <a href="https://github.com/Vidanilo10" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/victor-casta%C3%B1eda-7b4a16171/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="#contact" onClick={() => scrollToSection('contact')}>
            <FaEnvelope />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
