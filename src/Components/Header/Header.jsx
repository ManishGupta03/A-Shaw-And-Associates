import './Header.css';
import asaLogo from '../../assets/CA India Logo.png';


const Header = () => {
  return (
    <div className="header-container">
      <div className="header-left">
        <img src={asaLogo} alt="ASA Logo" className="asa-logo" />
        <span className="tagline">A Shaw & Associates</span>
       </div>
      <div className="header-right">
        <div className="language-switch">
          <a href="/">English</a> | <a href="/" className="china">日本語</a>
        </div>
       </div>
    </div>
  );
};

export default Header;
