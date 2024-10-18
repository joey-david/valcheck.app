import React, { useState, useRef } from 'react';
import { useTheme } from '../../components/ThemeContext';
import ThreeSwitch from '../../components/ThreeSwitch';
import Treadmill from './Treadmill';
import Examples from './Examples';
import './Valchecker.css';

function Valchecker() {
  const { theme } = useTheme();
  const [selectedOption, setSelectedOption] = useState('draw');
  const [result, setResult] = useState(null);
  const canvasRef = useRef(null);
  const processImage = () => {
    return new Promise((resolve, reject) => {
      const canvas = canvasRef.current;
      canvas.toBlob((blob) => {
        const formData = new FormData();
        formData.append('image', blob);

        fetch('http://localhost:5000/recognize', {
          method: 'POST',
          body: formData,
        })
          .then(response => response.json())
          .then(data => {
            setResult(`Recognized digit: ${data.digit}`);
            resolve(data);
          })
          .catch(error => {
            console.error('Error:', error);
            reject(error);
          });
      }, 'image/png');
    });
  };

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
      <div className='treadmill-aligner'>
        <div className="triple-switch">
          <ThreeSwitch selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
        </div>
        <Treadmill selectedOption={selectedOption} />
        <div className="valcheck-button">
          <button onClick={processImage} className="main-button valcheck-button">
            <span>Analyze</span>
          </button>
        </div>
      </div>
      <div className="result">
        {result}
      </div>
      <div className="examples" id="valchecker#examples">
        <Examples />
      </div>
    </div>
  );
}

export default Valchecker;