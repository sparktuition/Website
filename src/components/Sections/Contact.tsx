import { type FormEvent, useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: '',
    preferredTime: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Replace with your submission logic (API call / CRM integration)
    console.log('Demo booking request:', formData);
    // Navigate to thank-you overlay
    try {
      // set a hash; App listens for this and will show the thank you overlay
      location.hash = '#thank-you';
    } catch (err) {
      // fallback: show a simple alert if hash isn't available
      alert('Thanks! Your free demo request has been received. We will contact you soon.');
    }
    setFormData({ name: '', phone: '', course: '', preferredTime: '' });
  };

  // Phone and WhatsApp configuration
  const displayPhone = '+91 70196 82889';
  const telHref = 'tel:+917019682889';
  const email = 'info@sparktuition.com';
  const whatsappNumber = '917019682889';

  return (
    <section className="contact contact-cta" id="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact Us</h2>
          <p>Purpose: Make it super easy to reach you. Goal: Convert final visitors into direct leads.</p>
        </div>

        <div className="contact-content contact-grid">
          <div className="contact-left">
            <div className="contact-card">
              <h3>Address</h3>
              <p>4th Floor, B-BLOCK, 739, AECS B Block, AECS Layout, Singasandra, Bengaluru, Karnataka 560114</p>
              <div className="map-wrapper">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.1234567890123!2d77.5946!3d12.8896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15d14a4e5051%3A0x5ecfe9eadc11ca59!2sSingasandra%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v0000000000000"
                  width="100%"
                  height="260"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Singasandra map"
                ></iframe>
              </div>

              <div className="contact-actions">
                <a className="btn btn-outline contact-card-btn" href={telHref} aria-label="Call us">
                  <i className="fas fa-phone"></i>
                  <span>{displayPhone}</span>
                </a>

                <a className="btn btn-outline contact-card-btn" href={`mailto:${email}`} aria-label="Email us">
                  <i className="fas fa-envelope"></i>
                  <span>{email}</span>
                </a>

                <a className="btn btn-whatsapp contact-card-btn" href={`https://wa.me/${whatsappNumber}?text=Hi%20Spark%20Tuition,%20I%20want%20to%20book%20a%20free%20demo`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
                  <i className="fab fa-whatsapp"></i>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-right">
            <div className="contact-card form-card">
              <h3>Book a Free Demo</h3>
              <p className="muted">Quick inquiry — we'll reply within 24 hours.</p>
              <form onSubmit={handleSubmit} className="inquiry-form">
                <div className="form-row">
                  <label htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className="form-row">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Your phone number"
                    required
                  />
                </div>

                <div className="form-row">
                  <label htmlFor="course">Course Interest</label>
                  <select
                    id="course"
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    required
                  >
                    <option value="">Select course</option>
                    <option value="jee">JEE / Engineering Entrance</option>
                    <option value="neet">NEET / Medical Entrance</option>
                    <option value="cbse">CBSE / State Board</option>
                    <option value="foundation">Foundation / Olympiads</option>
                    <option value="others">Others</option>
                  </select>
                </div>

                <div className="form-row">
                  <label htmlFor="time">Preferred Time</label>
                  <select
                    id="time"
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    required
                  >
                    <option value="">Select preferred time</option>
                    <option value="morning">Morning (8AM - 11AM)</option>
                    <option value="afternoon">Afternoon (12PM - 3PM)</option>
                    <option value="evening">Evening (4PM - 8PM)</option>
                  </select>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Book a Free Demo</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;