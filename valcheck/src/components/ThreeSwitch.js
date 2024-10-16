import React, { useState, useContext } from 'react';
import './ThreeSwitch.css';
import { useTheme } from './ThemeContext.js';

const ThreeSwitch = () => {
  const [selectedOption, setSelectedOption] = useState('draw');
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
        <label htmlFor="option1">Draw</label>
        
        <input
          type="radio"
          id="option2"
          name="switch"
          checked={selectedOption === 'camera'}
          onChange={() => handleOptionChange('camera')}
        />
        <label htmlFor="option2">Take a picture</label>
        
        <input
          type="radio"
          id="option3"
          name="switch"
          checked={selectedOption === 'upload'}
          onChange={() => handleOptionChange('upload')}
        />
        <label htmlFor="option3">Upload</label>
        
        <div className="three-switch-toggle-slider"></div>
      </div>
    </div>
  );
};

export default ThreeSwitch;