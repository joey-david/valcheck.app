import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeContext';
import ThemeToggle from './ThemeToggle';
import DropdownArrow from './DropdownArrow';
import './Header.css';

function Header({ isDropdownOpen, setIsDropdownOpen }) {
  const { theme, toggleTheme } = useTheme();
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

  const dropdownLinks = [
    { title: "Home page", href: "/home", items: [] },
    { title: "How it works", href: "/", items: ["symbol recognition", "expression elaboration", "expression evaluation"] },
    { title: "How to use it", href: "/valchecker", items: ["examples", "use it"] },
    { title: "Who made it", href: "/about", items: ["the developer", "more about valcheck.ai"] },
  ];

  return (
    <header className={`header ${theme}`}>
      <div className="logo_div">
        <img src="" alt="valcheck.ai" id="logo"/>
      </div>
      <div className="links-div">
        {dropdownLinks.map((link, index) => (
          <div
            key={index}
            className={`dropdown ${link.items.length > 0 ? 'has-items' : ''}`}
            onMouseEnter={() => link.items.length > 0 && handleDropdownEnter(index)}
            onMouseLeave={link.items.length > 0 ? handleDropdownLeave : null}
          >
            <a href={link.href} className="dropdown-link">
              {link.title}
              {link.items.length > 0 && (
                <DropdownArrow isOpen={openDropdown === index} />
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