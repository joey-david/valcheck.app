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
      // Log the current state to help with debugging
      console.log("Current option:", selectedOption);
      console.log("Treadmill ref:", treadmillRef.current);

      const imageData = await treadmillRef.current?.getImageData(selectedOption);
      
      if (!imageData) {
        console.error("No image data received from treadmill");
        setResult("No image data available");
        return;
      }

      console.log("Successfully retrieved image data");
      console.log("Image data:", imageData);
      // Here you would send the image data to your backend
      // For now, just show we got the data successfully
      setResult("Successfully captured image from " + selectedOption);
      
    } catch (error) {
      console.error("Error processing image:", error);
      setResult("Error processing image: " + error.message);
    }
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
              onClick={processImage} 
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