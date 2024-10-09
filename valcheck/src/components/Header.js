import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeContext';
import ThemeToggle from './ThemeToggle';
import './Header.css';

function Header({ isDropdownOpen, setIsDropdownOpen }) {
  const { theme, toggleTheme } = useTheme();
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownEnter = (index) => {
    setIsDropdownOpen(true);
    setOpenDropdown(index);
  };
  const handleDropdownLeave = () => {
    setIsDropdownOpen(false);
    setOpenDropdown(null);
  };

  const dropdownLinks = [
    { title: "Home page", href: "/home", items: [] },
    { title: "How it works", href: "/", items: ["symbol recognition", "expression elaboration", "expression evaluation"] },
    { title: "How to use it", href: "/valchecker", items: ["examples", "use it"] },
    { title: "Who made it", href: "/about", items: ["the developer", "more about valcheck.ai"] },
  ];

  return (
    <header className={`header ${theme}`}>
      <div className="logo_div">
        <img src="/img/logo.png" alt="valcheck.ai" id="logo"/>
      </div>
      <div className="links-div">
        {dropdownLinks.map((link, index) => (
          <div 
            key={index}
            className="dropdown" 
            onMouseEnter={() => handleDropdownEnter(index)} 
            onMouseLeave={handleDropdownLeave}
          >
            <a href={link.href} className="dropdown-link">
              {link.title}
              {link.items.length > 0 && (
                <img
                  src="/img/dropdown-arrow.png"
                  alt="dropdown arrow"
                  className={`dropdown-arrow ${openDropdown === index ? 'open' : ''}`}
                />
              )}
            </a>
            {link.items.length > 0 && (
              <div className="dropdown-list">
                {link.items.map((item, itemIndex) => (
                  <a key={itemIndex} href={`${link.href}/section-${itemIndex + 1}`} className="link">{item}</a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <ThemeToggle />
    </header>
  );
}

export default Header;