import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../components/ThemeContext';
import './Home.css';

function Home() {
  const { theme } = useTheme();

  return (
    <div className={`home ${theme}`}>
      <h1>Welcome to Handwritten Digit Recognizer</h1>
      <p>Discover the power of machine learning in recognizing handwritten digits.</p>
      <Link to="/recognizer" className="cta-button">Try It Now</Link>
    </div>
  );
}

export default Home;