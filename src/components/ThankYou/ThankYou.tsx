import './ThankYou.css';
import React from 'react';

const ThankYou: React.FC<{ onClose?: () => void }> = ({ onClose }) => {
  const handleClose = () => {
    // clear the hash to hide the overlay
    try {
      history.replaceState(null, '', location.pathname + location.search);
    } catch (e) {
      // fallback
      location.hash = '';
    }
    onClose && onClose();
  };

  return (
    <div className="thankyou-overlay" role="dialog" aria-modal="true" aria-labelledby="thankyou-title" onClick={handleClose}>
      <div className="thankyou-card" onClick={(e) => e.stopPropagation()}>
        <button className="thankyou-close" aria-label="Close" onClick={handleClose}>×</button>
        <div className="thankyou-icon" aria-hidden>
          ✓
        </div>
        <h2 id="thankyou-title">Thank you!</h2>
        <p className="muted">Thanks for reaching out — we received your request. Our team will review it and get in touch to help you schedule a demo and answer any questions.</p>

        <p className="muted thankyou-tap" style={{ marginTop: '18px', fontWeight: 600 }}>Tap anywhere to close</p>
      </div>
    </div>
  );
};

export default ThankYou;
