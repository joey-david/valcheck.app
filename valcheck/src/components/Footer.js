import React from 'react';
import { useTheme } from './ThemeContext';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaXRay, FaGlassMartiniAlt, FaMailBulk } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  const { theme } = useTheme();

  return (
    <footer className={`footer ${theme}`}>
      <div className="footer-content"></div>
        <p>&copy; 2024 Valchecker - Handwritten Digit Recognizer. All rights reserved.</p>
        <nav className="footer-nav">
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
          </ul>
        </nav>
        <div className="footer-social">
          <a href="https://github.com/joey-david/" target="_blank" rel="noopener noreferrer" className="socials-link"><FaGithub className="social-icon" /></a>
          <a href="https://www.linkedin.com/in/joey-david-/" target="_blank" rel="noopener noreferrer" className="socials-link"><FaLinkedin className="social-icon" /></a>
          <a href="mailto:joeydavid99@gmail.com" className="socials-link"><FaMailBulk className="social-icon" /></a>
        </div>
    </footer>
  );
}

export default Footer;