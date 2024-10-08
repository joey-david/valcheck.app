import React from 'react';
import { useTheme } from '../components/ThemeContext';
import './About.css';

function About() {
  const { theme } = useTheme();

  return (
    <div className={`about ${theme}`}>
      <h2>About Handwritten Digit Recognizer</h2>
      <p>This project uses machine learning to recognize handwritten digits. It's built with React for the frontend and Flask with Python for the backend.</p>
      <h3>How it works</h3>
      <ol>
        <li>Draw a digit on the canvas</li>
        <li>Click 'Recognize' to send the image to our server</li>
        <li>Our machine learning model analyzes the image</li>
        <li>The recognized digit is displayed on the screen</li>
      </ol>
    </div>
  );
}

export default About;