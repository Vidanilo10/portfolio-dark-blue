import { useState } from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // You can integrate with email service like EmailJS or backend API here
    const mailtoLink = `mailto:your.email@example.com?subject=Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title fade-in-up">Get In Touch</h2>
        
        <div className="contact-content">
          <div className="contact-info fade-in-up">
            <div className="info-card glass">
              <h3>Let's Connect</h3>
              <p>
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <FaEnvelope className="contact-icon" />
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:your.email@example.com">your.email@example.com</a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <FaMapMarkerAlt className="contact-icon" />
                  <div>
                    <h4>Location</h4>
                    <p>Available for remote work</p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <a
                  href="https://github.com/Vidanilo10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://linkedin.com/in/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="mailto:your.email@example.com"
                  className="social-link"
                >
                  <FaEnvelope />
                </a>
              </div>

              <div className="cv-download">
                <a href="/victor_castaneda-4-1.pdf" download className="btn btn-primary">
                  Download My CV
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-container fade-in-up">
            <form onSubmit={handleSubmit} className="contact-form glass">
              <h3>Send Me a Message</h3>
              
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="footer">
          <p>&copy; 2024 Victor Castañeda. Built with React & AWS.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
