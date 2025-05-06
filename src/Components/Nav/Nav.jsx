import './Nav.css';
import CALOGO from '../../assets/CA India Logo.png';
import Dropdown from './Drop';

const Nav = () => {
  const menuItems = [
    { title: 'Home' },
    { title: 'Explore' },
    {
      title: 'About',
      dropdown: [
        'Who We Are',
        'Strengths',
        'Key People',
        'International Desk',
        'Networks',
        'Industries',
      ],
    },
    { title: 'Contact', className: 'nav-contact' },
  ];

  return (
    <div className="nav">
      <div className="nav-logo">
        <img src={CALOGO} className="resize" alt="logo" />
      </div>
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

export default Nav;
