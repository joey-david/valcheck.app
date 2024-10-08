import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeContext';
import './Header.css';

function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={`header ${theme}`}>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/valchecker">Digit Recognizer</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <button onClick={toggleTheme} className="theme-toggle">
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </header>
  );
}

export default Header;