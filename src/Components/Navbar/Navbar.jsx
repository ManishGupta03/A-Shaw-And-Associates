import './Navbar.css';
import Dropdown from './Dropdown';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
 

  const menuItems = [
    { title: 'HOME',
      
     },
    {
      title: 'ABOUT US',
      dropdown: [
        'Who We Are',
        'Our Strengths',
        'Key People',
        'International Desk',
        'Networks',
        'Industries',
      ],
    },
    {
      title: 'SERVICES',
      dropdown: ['Accounting & Business Support','Audit and Assurance','Business Advirory', 'Digital Automation and Transformation', 'Taxation', 'Risk Advisory','Transaction Advisory'],
    },
    { title: 'INSIGHTS' },
    { title: 'NEWS & EVENTS' },
    { title: 'CAREERS' ,
      dropdown: [
        'Why join us',
        'Life at Aman Hub',
        'In-House Journal',
        'Current Openings',
        'Apply Now',
        'Gallery',
      ],
    },
    { title: 'Contact', className: 'nav-contact' },
  ];

  return (
    <div className="nav">
      
      <div className="nav-logo">
      
       </div>
       <div className="search-icon">  <FaSearch /> </div>
      <ul className="nav-menu">
        {menuItems.map((item, index) =>
          item.dropdown ? (
            <Dropdown key={index} title={item.title} items={item.dropdown} />
          ) : (
            <li key={index} className={item.className || ''}>
              {item.title}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Navbar;
