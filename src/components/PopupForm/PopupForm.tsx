import { useEffect, useRef, useState } from 'react';
import './PopupForm.css';

const PopupForm = () => {
  const [visible, setVisible] = useState(false);
  const [shownCount, setShownCount] = useState(0); // ensure shown twice max
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Show after 3 seconds, but do not show if user is currently viewing the 'about' (second) section
    const timer = setTimeout(() => {
      const about = document.querySelector('#about');
      const isInAbout = () => {
        if (!about) return false;
        const r = about.getBoundingClientRect();
        return r.top < window.innerHeight && r.bottom > 0;
      };

      if (isInAbout()) {
        // skip showing the popup if user is viewing the second section
        return;
      }

      if (shownCount < 2) {
        setVisible(true);
        setShownCount(c => c + 1);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []); // run once

  useEffect(() => {
    // Show when Contact (last section) enters viewport
    const target = document.querySelector('#contact');
    if (!target) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && shownCount < 2) {
            setVisible(true);
            setShownCount(c => c + 1);
          }
        });
      },
      { root: null, threshold: 0.3 }
    );

    obs.observe(target);
    return () => obs.disconnect();
  }, [shownCount]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setVisible(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) setVisible(false);
  };

  const [form, setForm] = useState({ name: '', phone: '', course: '', preferredTime: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Popup form submitted', form);
    setVisible(false);
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

  if (!visible) return null;

  return (
    <div className="popup-overlay" ref={overlayRef} onClick={handleOverlayClick} role="dialog" aria-modal="true">
      <div className="popup-card" role="document">
        <button className="popup-close" aria-label="Close" onClick={() => setVisible(false)}>×</button>
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
