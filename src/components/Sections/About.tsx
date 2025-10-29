import './About.css';
import aboutImg from '../../assets/about.webp';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-title">
          <h2>About Us</h2>
          <p>Learn more about our mission, values, and approach to education</p>
        </div>
        <div className="about-content">
          <div className="about-text">
            <h3>We Are Committed To Student Success</h3>
            <p>
              Spark Learning Hub was founded with a simple mission: to provide high-quality, 
              personalized education that empowers students to reach their full potential. 
              Our experienced tutors work closely with each student to identify their strengths 
              and areas for improvement.
            </p>
            <p>
              We believe that every student has unique learning needs, which is why we offer 
              customized lesson plans and one-on-one attention. Our proven teaching methods 
              have helped thousands of students improve their grades and build confidence in 
              their abilities.
            </p>
            <div className="about-features">
              <div className="feature">
                <i className="fas fa-graduation-cap"></i>
                <h4>Expert Faculty</h4>
                <p>Highly qualified teachers with years of experience</p>
              </div>
              <div className="feature">
                <i className="fas fa-users"></i>
                <h4>Small Batch Size</h4>
                <p>Personal attention to every student</p>
              </div>
              <div className="feature">
                <i className="fas fa-chart-line"></i>
                <h4>Proven Results</h4>
                <p>Consistent academic improvement</p>
              </div>
            </div>
            <a href="#contact" className="btn">Learn More</a>
          </div>
          <div className="about-image">
            <img src={aboutImg} alt="Students learning" />
          </div>
        </div>
        {/* Inline inquiry form placed after the second section (About) */}
        <div className="inline-inquiry">
          <div className="inquiry-card">
            <h3>Book a Free Demo</h3>
            <p className="muted">Fill a quick form and we'll contact you to schedule a demo.</p>
            <form className="inquiry-inline-form" onSubmit={(e) => { e.preventDefault(); alert('Request received. We will contact you.'); }}>
              <div className="form-row">
                <input type="text" placeholder="Full name" required />
              </div>
              <div className="form-row">
                <input type="tel" placeholder="Phone number" required />
              </div>
              <div className="form-row">
                <select required>
                  <option value="">Course interest</option>
                  <option value="jee">JEE</option>
                  <option value="neet">NEET</option>
                  <option value="cbse">CBSE/Boards</option>
                </select>
              </div>
              <div className="form-row">
                <select required>
                  <option value="">Preferred time</option>
                  <option value="morning">Morning</option>
                  <option value="evening">Evening</option>
                </select>
              </div>
              <button className="btn btn-primary" type="submit">Book a Free Demo</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;