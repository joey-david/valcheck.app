import React, { useState, useRef } from 'react';
import { useTheme } from '../components/ThemeContext';
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
    // and receive the recognition result
    setResult("Recognized digit: 5"); // Placeholder result
  };

  return (
    <div className={`valchecker ${theme}`}>
      <h2>Draw a Digit</h2>
      <canvas ref={canvasRef} width="280" height="280" />
      <div className="button-group">
        <button onClick={clearCanvas}>Clear</button>
        <button onClick={recognizeDigit}>Recognize</button>
      </div>
      {result && <p className="result">{result}</p>}
    </div>
  );
}

export default Valchecker;