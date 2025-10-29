import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <h1>Expert Tuition Classes for CBSE | ICSE | JEE | NEET – Singasandra</h1>
          <p className="hero-subheadline">90% of our students improved grades in 3 months.</p>
          <div className="hero-buttons">
            <a href="#demo" className="btn">🎓 Book Free Demo</a>
            <a href="tel:+917019682889" className="btn btn-accent">📞 +91 70196 82889</a>
            <a href="https://wa.me/917019682889" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">💬 Chat on WhatsApp</a>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;