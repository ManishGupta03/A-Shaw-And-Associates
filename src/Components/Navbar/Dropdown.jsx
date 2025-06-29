import React, { useState, useEffect } from 'react';

const Dropdown = ({ index, title, items, activeDropdown, setActiveDropdown }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isOpen = activeDropdown === index;

  const handleClick = () => {
    if (isMobile) {
      setActiveDropdown(isOpen ? null : index); // toggle on click for mobile
    }
  };

  const handleMouseEnter = () => {
    if (!isMobile) setActiveDropdown(index); // open on hover for desktop
  };

  const handleMouseLeave = () => {
    if (!isMobile) setActiveDropdown(null); // close on mouse leave for desktop
  };

  return (
    <li
      className={`dropdown ${isOpen ? 'open' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <span className="dropdown-title">{title}</span>
      
      {/* Render menu only when open to avoid accidental hover issues */}
      {isOpen && (
        <ul className="dropdown-menu">
          {items.map((item, idx) => (
            <li key={idx} className="dropdown-item">{item}</li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default Dropdown;
