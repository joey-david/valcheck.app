import React, { useState, useRef } from 'react';
import { useTheme } from '../components/ThemeContext';
import ThreeSwitch from '../components/ThreeSwitch';
import './Valchecker.css';

function Valchecker() {
  const { theme } = useTheme();
  const [result, setResult] = useState(null);
  const canvasRef = useRef(null);

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const recognizeDigit = () => {
    // Here you would implement the logic to send the canvas data to your Flask backend
    // and receive the recognition resul
    setResult("Recognized digit: 5"); // Placeholder result
  };

  return (
    <div className={`valchecker ${theme}`}>
      <div className='top-bar'>
        <div className="logo-text">
          <img src="" alt="valcheck.ai" id="logo"/>
        </div>
        <div className="triple-switch">
          <ThreeSwitch />
        </div>
      </div>
      <div className='canvas-section'>
        <canvas ref={canvasRef} width="200" height="200"></canvas>
        <div className='button-section'>
          <button onClick={clearCanvas}>Clear</button>
          <button onClick={recognizeDigit}>Recognize</button>
        </div>
        {result && <p className='result'>{result}</p>}
      </div>
    </div>
  );
}

export default Valchecker;