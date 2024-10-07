import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../components/ThemeContext';
import './Home.css';

function Home() {
  const { theme } = useTheme();

  return (
    <div className={`home`}>
      <div className={`presentation  ${theme}`}>
        <h1>Welcome to Handwritten Digit Recognizer</h1>
        <p>Discover the power of machine learning in recognizing handwritten digits.</p>
        <Link to="/recognizer" className="cta-button">Try It Now</Link>
      </div>  
      <div className={`explanation  ${theme}`}>
        <h2>Presentation</h2>
        <p>Our system uses advanced neural networks to accurately recognize handwritten digits.</p>
      </div>
      <div className={`examples  ${theme}`}>
        <h2>Examples</h2>
        <div className="example-images">
          <img src="/path/to/animated-image1.gif" alt="Example 1" />
          <img src="/path/to/animated-image2.gif" alt="Example 2" />
        </div>
      </div>
    </div>
  );
}

export default Home;