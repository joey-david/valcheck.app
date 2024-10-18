import React from 'react';
import './ThreeSwitch.css';
import { useTheme } from './ThemeContext.js';
import { PenTool, Camera, Upload } from 'lucide-react';

const ThreeSwitch = ({ selectedOption, setSelectedOption }) => {
  const { theme } = useTheme();

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className={`three-switch-toggle ${theme === 'dark' ? 'dark-theme' : ''}`}>
      <div className="three-switch-toggle-inner">
        <input
          type="radio"
          id="option1"
          name="switch"
          checked={selectedOption === 'draw'}
          onChange={() => handleOptionChange('draw')}
        />
        <label htmlFor="option1">
          <PenTool className="icon" />
          Canvas
        </label>
        
        <input
          type="radio"
          id="option2"
          name="switch"
          checked={selectedOption === 'camera'}
          onChange={() => handleOptionChange('camera')}
        />
        <label htmlFor="option2">
          <Camera className="icon" />
          Camera
        </label>
        
        <input
          type="radio"
          id="option3"
          name="switch"
          checked={selectedOption === 'upload'}
          onChange={() => handleOptionChange('upload')}
        />
        <label htmlFor="option3">
          <Upload className="icon" />
          File upload
        </label>
        
        <div className="three-switch-toggle-slider"></div>
      </div>
    </div>
  );
};

export default ThreeSwitch;