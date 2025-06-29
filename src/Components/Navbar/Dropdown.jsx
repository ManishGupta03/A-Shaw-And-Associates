import React, { useState,useEffect } from 'react';

const Dropdown = ({ index, title, items, activeDropdown, setActiveDropdown }) => {
  // const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // run on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const isOpen = activeDropdown === index;

  const handleClick = () => {
    if (isMobile) {
      setActiveDropdown(isOpen ? null : index); // toggle
    }
  };



return (
    <li
      className={`dropdown ${isOpen ? 'open' : ''}`}
      onMouseEnter={() => !isMobile && setActiveDropdown(index)}
      onMouseLeave={() => !isMobile && setActiveDropdown(null)}
      onClick={handleClick}
    >
      {title}
      {isOpen && (
        <ul className="dropdown-menu">
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default Dropdown;
