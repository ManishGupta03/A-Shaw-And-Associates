import React from 'react';

const DisclaimerPopup = ({ onAgree, onDisagree }) => {
  return (
    <div style={popupStyle}>
      <div style={popupContentStyle}>
        <h2 style={{ marginBottom: '10px' }}>DISCLAIMER</h2>
        <p style={{ marginBottom: '20px', fontSize: '14px', textAlign: 'center' }}>
          We have taken all steps to ensure that the information on the website has been obtained from reliable sources and is accurate.
          However, this website is not intended to give legal, tax, accounting, or other professional guidance.
          We recommend appropriate advice be taken prior to initiating action on specific issues.
        </p>
        <div>
          <button style={buttonStyle} onClick={onAgree}>Agree</button>
          <button style={{ ...buttonStyle, marginLeft: '10px' }} onClick={onDisagree}>Disagree</button>
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
};

const popupContentStyle = {
  background: '#fff',
  padding: '30px',
  borderRadius: '12px',
  maxWidth: '500px',
  textAlign: 'center',
};

const buttonStyle = {
  background: 'black',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '20px',
  cursor: 'pointer',
};

export default DisclaimerPopup;
