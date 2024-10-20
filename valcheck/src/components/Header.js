import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';
import ThemeToggle from './ThemeToggle';
import DropdownArrow from './DropdownArrow';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom for internal routing
import './Header.css';

function Header({ isDropdownOpen, setIsDropdownOpen }) {
  const { theme } = useTheme();
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    document.documentElement.style.setProperty('--header-color', theme === 'dark' ? 'black' : '#F5F3F5');
  }, [theme]);

  const handleDropdownEnter = (index) => {
    setIsDropdownOpen(true);
    setOpenDropdown(index);
  };

  const handleDropdownLeave = () => {
    setIsDropdownOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className={`header ${theme}`}>
      <div className="logo_div">
        <img src="" alt="valcheck.ai" id="logo"/>
      </div>
      <div className="links-div">
        <div className="dropdown" id="home-dropdown">
          <a href="/home" className="dropdown-link" id="home">
            Home
          </a>
        </div>
        <div
          className="dropdown has-items"
          onMouseEnter={() => handleDropdownEnter(1)}
          onMouseLeave={handleDropdownLeave}
        >
          <a href="/home#how-it-works" className="dropdown-link">
            Functionality
            <DropdownArrow isOpen={openDropdown === 1} />
          </a>
          <div className="dropdown-list">
            <a href="/home#individual-symbol-recognition" className="link">
              Symbol Recognition
            </a>
            <a href="/home#building-expressions" className="link">
              Expression Elaboration
            </a>
            <a href="/home#evaluating-expressions" className="link">
              Expression Evaluation
            </a>
          </div>
        </div>
        <div
          className="dropdown has-items"
          onMouseEnter={() => handleDropdownEnter(2)}
          onMouseLeave={handleDropdownLeave}
        >
          <Link to="/valchecker" className="dropdown-link">
            Usage
            <DropdownArrow isOpen={openDropdown === 2} />
          </Link>
          <div className="dropdown-list">
            <Link to="/valchecker#examples" className="link">
              Try it yourself
            </Link>
            <Link to="/valchecker#use-it" className="link">
              Usecase examples
            </Link>
          </div>
        </div>
        <div
          className="dropdown has-items"
          onMouseEnter={() => handleDropdownEnter(3)}
          onMouseLeave={handleDropdownLeave}
        >
          <Link to="/about" className="dropdown-link">
            About
            <DropdownArrow isOpen={openDropdown === 3} />
          </Link>
          <div className="dropdown-list">
            <Link to="/about/developer" className="link">
              The Developer
            </Link>
            <Link to="/about/more-valcheck" className="link">
              Privacy Policy
            </Link>
            <Link to="/about/more-valcheck" className="link">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
      <ThemeToggle />
    </header>
  );
}

export default Header;
