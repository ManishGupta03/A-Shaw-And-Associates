import React from 'react';

const DisclaimerPopup = ({ onAgree, onDisagree }) => {
  const isMobile = window.innerWidth <= 768;

  return (
    <div style={popupStyle}>
      <div style={{ ...popupContentStyle, ...(isMobile ? mobilePopupContentStyle : {}) }}>
        <h2 style={{ marginBottom: '10px', fontSize: isMobile ? '20px' : '24px' }}>DISCLAIMER</h2>
        <p style={{
          marginBottom: '20px',
          fontSize: isMobile ? '13px' : '14px',
          textAlign: 'center',
          lineHeight: '1.6',
        }}>
          We have taken all steps to ensure that the information on the website has been obtained from reliable sources and is accurate.
          However, this website is not intended to give legal, tax, accounting, or other professional guidance.
          We recommend appropriate advice be taken prior to initiating action on specific issues.
        </p>
        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '10px', justifyContent: 'center' }}>
          <button style={buttonStyle} onClick={onAgree}>Agree</button>
          <button style={{ ...buttonStyle }} onClick={onDisagree}>Disagree</button>
        </div>
      </div>
    </div>
  );
};

const popupStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  height: '100vh',
  width: '100vw',
  background: 'rgba(0,0,0,0.6)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
  padding: '10px',
};

const popupContentStyle = {
  background: '#fff',
  padding: '30px',
  borderRadius: '12px',
  maxWidth: '500px',
  width: '100%',
  textAlign: 'center',
};

const mobilePopupContentStyle = {
  padding: '20px',
  maxWidth: '90%',
};

const buttonStyle = {
  background: 'black',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '20px',
  cursor: 'pointer',
  width: '100%',
};

export default DisclaimerPopup;
