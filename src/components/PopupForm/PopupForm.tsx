import { useEffect, useRef, useState } from 'react';
import './PopupForm.css';

interface PopupFormProps {
  isVisible: boolean;
  onClose: () => void;
  selectedCourse?: string;
}

const PopupForm: React.FC<PopupFormProps> = ({ isVisible, onClose, selectedCourse = '' }) => {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const [form, setForm] = useState({ name: '', phone: '', course: selectedCourse, preferredTime: '' });

  useEffect(() => {
    setForm(prev => ({ ...prev, course: selectedCourse }));
  }, [selectedCourse]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Popup form submitted', form);
    onClose();
    setForm({ name: '', phone: '', course: '', preferredTime: '' });
    // Navigate to thank-you overlay
    try {
      location.hash = '#thank-you';
    } catch (err) {
      // fallback
      alert('Thanks! Your request has been received.');
    }
    // TODO: wire to API/CRM
  };

  if (!isVisible) return null;

  return (
    <div className="popup-overlay" ref={overlayRef} onClick={handleOverlayClick} role="dialog" aria-modal="true">
      <div className="popup-card" role="document">
        <button className="popup-close" aria-label="Close" onClick={onClose}>×</button>
        <h3>Book a Free Demo</h3>
        <p className="muted">Quickly book a free demo — we'll get back within 24 hours.</p>
        <form className="popup-form" onSubmit={handleSubmit}>
          <label htmlFor="pf-name">Full Name</label>
          <input id="pf-name" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} required />

          <label htmlFor="pf-phone">Phone</label>
          <input id="pf-phone" value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} required />

          <label htmlFor="pf-course">Course Interest</label>
          <select id="pf-course" value={form.course} onChange={(e) => setForm({...form, course: e.target.value})} required>
            <option value="">Select</option>
            <option value="jee">JEE</option>
            <option value="neet">NEET</option>
            <option value="cbse">CBSE/Boards</option>
            <option value="foundation">Foundation</option>
            <option value="other">Other</option>
          </select>

          <label htmlFor="pf-time">Preferred Time</label>
          <select id="pf-time" value={form.preferredTime} onChange={(e) => setForm({...form, preferredTime: e.target.value})} required>
            <option value="">Select</option>
            <option value="morning">Morning</option>
            <option value="afternoon">Afternoon</option>
            <option value="evening">Evening</option>
          </select>

          <button type="submit" className="btn btn-primary btn-block">Book a Free Demo</button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
