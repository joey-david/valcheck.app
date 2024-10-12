import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../components/ThemeContext';
import './Home.css';

function Home() {
  const { theme } = useTheme();
  
  return (
    <div className={`home ${theme}`}>
      <div className={`presentation ${theme}`}>
        <div className="title-subtitle">
          <h1 className="home-title">valcheck.ai</h1>
          <p className="home-subtitle">A lightning-fast expression and formula evaluator.</p>
        </div>
        <div className="home-button">
          <Link to="/valchecker" className="main-button">use valcheck</Link>
        </div>
      </div>  
      <div className={`explanation ${theme}`}>
        <h2>How it works</h2>
        <section className="explanation-section">
          <h3>I. Individual Symbol Recognition</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <img src="/api/placeholder/400/300" alt="PyTorch model structure placeholder" className="placeholder-image" />
          <h4>Training Dataset</h4>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <img src="/api/placeholder/400/300" alt="Training dataset visualization placeholder" className="placeholder-image" />
          <h4>Other Resources</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </section>
        <section className="explanation-section">
          <h3>II. Agency Symbols, Building Expressions</h3>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <img src="/api/placeholder/400/300" alt="Expression building process gif placeholder" className="placeholder-image" />
        </section>
        <section className="explanation-section">
          <h3>III. Evaluating Expressions and Rest of the App</h3>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <img src="/api/placeholder/400/300" alt="Expression evaluation process gif placeholder" className="placeholder-image" />
        </section>
      </div>
    </div>
  );
}

export default Home;