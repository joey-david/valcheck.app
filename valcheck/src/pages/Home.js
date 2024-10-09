import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../components/ThemeContext';
import './Home.css';

function Home() {
  const { theme } = useTheme();

  return (
    <div className={`home ${theme}`}>
      <div className={`presentation  ${theme}`}>
        <h1>Welcome to Handwritten Digit Recognizer</h1>
        <p>Discover the power of machine learning in recognizing handwritten digits.</p>
        <Link to="/valchecker" className="cta-button">Try It Now</Link>
      </div>  
      <div className={`explanation  ${theme}`}>
        <h2>Presentation</h2>
        <p>Our system uses advanced neural networks to accurately recognize handwritten digits.</p>
        <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      <p>balls balls balls balls</p>
      </div>
    </div>
  );
}

export default Home;