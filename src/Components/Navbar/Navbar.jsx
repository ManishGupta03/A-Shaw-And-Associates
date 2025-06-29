import React, { useState,useRef, useEffect } from 'react';
import './Navbar.css';
import Dropdown from './Dropdown';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // 🔥 Add this
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navRef = useRef(null); // ⬅️ Reference to the entire nav

  const menuItems = [
    { title: 'HOME' },
    {
      title: 'ABOUT US',
      dropdown: ['Who We Are', 'Our Strengths', 'Key People', 'International Desk', 'Networks', 'Industries'],
    },
    {
      title: 'SERVICES',
      dropdown: ['Accounting & Business Support','Audit and Assurance','Business Advisory','Digital Automation and Transformation','Taxation','Risk Advisory','Transaction Advisory'],
    },
    { title: 'INSIGHTS' },
    { title: 'NEWS & EVENTS' },
    {
      title: 'CAREERS',
      dropdown: ['Why join us','Life at Aman Hub','In-House Journal','Current Openings','Apply Now','Gallery'],
    },
    { title: 'Contact', className: 'nav-contact' },
  ];


  // 🔽 Handle click outside nav to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="nav" ref={navRef}>
      <div className="nav-logo">
       👨‍🎓 AMAN HUB {/* 🔧 Add logo or text here */}
      </div>

      <div className="search-icon"><FaSearch /></div>

      {/* 🔥 Add hamburger menu for mobile */}
      <div className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* 🔧 Toggle 'active' class based on state */}
      <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
        {menuItems.map((item, index) =>
          item.dropdown ? (
            <Dropdown key={index} index={index} title={item.title} items={item.dropdown} activeDropdown={activeDropdown} setActiveDropdown={setActiveDropdown}  />
          ) : (
            <li key={index} className={item.className || ''}
              onClick={() => {
                setActiveDropdown(null);
                if (item.title === 'Contact') {
                  const contactSection = document.getElementById('contact-section');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }}>
              {item.title}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Navbar;
