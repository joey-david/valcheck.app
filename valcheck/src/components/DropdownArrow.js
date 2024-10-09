import React from 'react';

const DropdownArrow = ({ isOpen }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    className={`dropdown-arrow ${isOpen ? 'open' : ''}`}
  >
    <path d="M7 10l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default DropdownArrow;
