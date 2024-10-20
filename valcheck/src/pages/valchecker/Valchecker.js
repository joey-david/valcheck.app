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
  const treadmillRef = useRef();

  const processImage = async () => {
    try {
      const imageData = await treadmillRef.current?.getImageData(selectedOption);
      
      if (!imageData) {
        console.error("No image data received from treadmill");
        setResult("No image data available");
        return;
      }

      const response = await fetch('/user-input', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ imageData }),
        timeout: 10000,
      });

      if (!response.ok) {
        throw new Error('Failed to post image data');
      }

      const responseData = await response.json();
      console.log("Response from server:", responseData);
      setResult("Successfully captured image from " + selectedOption);
      
    } catch (error) {
      setResult("Error processing image: " + error.message);
    }
  };

  const scrollToResult = () => {
    const resultSection = document.getElementById('result-section');
    if (resultSection) {
      resultSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleButtonClick = async () => {
    scrollToResult();
    await processImage();
  };

  return (
    <div className={`valchecker ${theme}`}>
      <div className='treadmill-aligner'>
        <div className="top-bar">
          <div className="triple-switch">
            <ThreeSwitch 
              selectedOption={selectedOption} 
              setSelectedOption={setSelectedOption} 
            />
          </div>
          <div className="valcheck-button">
            <button 
              onClick={handleButtonClick} 
              className="main-button valcheck-button"
            >
              <span>Process image &#x2192;</span>
            </button>
          </div>
        </div>
        <Treadmill 
          ref={treadmillRef}
          selectedOption={selectedOption} 
        />
      </div>
      <div className="result" id="result-section">
        <h2>Result</h2>
        {result}
      </div>
      <div className="examples" id="valchecker#examples">
        <Examples />
      </div>
    </div>
  );
}

export default Valchecker;