import React from 'react';
import { useTheme } from './ThemeContext';
import './ThemeToggle.css';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="btn-container">
      <i className={`fa fa-sun-o ${theme === 'light' ? 'active' : ''}`} aria-hidden="true"></i>
      <label className="switch btn-color-mode-switch">
        <input 
          type="checkbox" 
          id="color_mode" 
          value="1" 
          checked={theme === 'dark'}
          onChange={toggleTheme}
        />
        <label 
          htmlFor="color_mode" 
          data-on="Dark" 
          data-off="Light" 
          className="btn-color-mode-switch-inner"
        ></label>
      </label>
      <i className={`fa fa-moon-o moon ${theme === 'dark' ? 'active' : ''}`} aria-hidden="true"></i>
    </div>
  );
}

export default ThemeToggle;