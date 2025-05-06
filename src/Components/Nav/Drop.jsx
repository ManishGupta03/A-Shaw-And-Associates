const Drop = ({ title, items }) => {
    return (
      <li className="dropdown">
        {title}
        <ul className="dropdown-menu">
          {items.map((subItem, i) => (
            <li key={i}>{subItem}</li>
          ))}
        </ul>
      </li>
    );
  };
  
  export default Drop;
  