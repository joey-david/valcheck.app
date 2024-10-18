// Presentation.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../components/ThemeContext';
import './Presentation.css';

function Presentation() {
  const { theme } = useTheme();

  return (
    <div className={`presentation ${theme}`}>
      <div className="title-subtitle">
        <h1 className="home-title">valcheck.ai</h1>
        <p className="home-subtitle">A lightning-fast expression and formula evaluator.</p>
      </div>
      <div className="home-button">
        <Link to="/valchecker" className="main-button">
          <span>use valcheck</span>
        </Link>
      </div>
    </div>
  );
}

export default Presentation;