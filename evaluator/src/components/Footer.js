import React from 'react';
import { useTheme } from './ThemeContext';
import './Footer.css';

function Footer() {
  const { theme } = useTheme();

  return (
    <footer className={`footer ${theme}`}>
      <p>&copy; 2024 Handwritten Digit Recognizer. All rights reserved.</p>
    </footer>
  );
}

export default Footer;