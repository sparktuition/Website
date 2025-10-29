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
    <div className="thankyou-overlay" role="dialog" aria-modal="true" aria-labelledby="thankyou-title">
      <div className="thankyou-card">
        <button className="thankyou-close" aria-label="Close" onClick={handleClose}>×</button>
        <div className="thankyou-icon" aria-hidden>
          ✓
        </div>
        <h2 id="thankyou-title">Thank you!</h2>
        <p className="muted">We received your request. Our team will contact you within 24 hours to schedule your free demo.</p>
        <div className="thankyou-actions">
          <button className="btn btn-primary" onClick={handleClose}>Continue browsing</button>
          <a className="btn btn-outline" href="#contact" onClick={handleClose}>Back to contact</a>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
