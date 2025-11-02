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
            <a
              href="#demo"
              className="btn"
              onClick={(e) => {
                e.preventDefault();
                try { location.hash = '#demo'; } catch {}
              }}
            >
              Learn More
            </a>
          </div>
          <div className="about-image">
            <img src={aboutImg} alt="Students learning" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;