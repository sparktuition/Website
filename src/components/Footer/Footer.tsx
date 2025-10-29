import './Footer.css';

const Footer = () => {
  const quickLinks = [
    { id: 1, text: 'Home', href: '#home' },
    { id: 2, text: 'About Us', href: '#about' },
    { id: 3, text: 'Courses', href: '#courses' },
    { id: 4, text: 'Our Teachers', href: '#teachers' },
    { id: 5, text: 'Contact', href: '#contact' }
  ];

  const courses = [
    { id: 1, text: 'NEET', href: '#' },
    { id: 2, text: 'JEE', href: '#' },
    { id: 3, text: 'KCET', href: '#' },
    { id: 4, text: 'Board Exams', href: '#' }
  ];

  const socialLinks = [
    { id: 2, icon: 'twitter', href: '#' },
    { id: 3, icon: 'instagram', href: '#' },
    { id: 4, icon: 'linkedin-in', href: '#' }
  ];

  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>Spark Learning Hub</h3>
            <p>
              Providing quality education and personalized tutor to help students
              achieve academic excellence since 2010. Join us on the journey to
              academic success.
            </p>
            <div className="social-links">
              {socialLinks.map(link => (
                <a key={link.id} href={link.href} aria-label={`Follow us on ${link.icon}`}>
                  <i className={`fab fa-${link.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map(link => (
                <li key={link.id}>
                  <a href={link.href}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h3>Our Courses</h3>
            <ul className="footer-links">
              {courses.map(course => (
                <li key={course.id}>
                  <a href={course.href}>{course.text}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h3>Contact Info</h3>
            <ul className="footer-links contact-list">
              <li>
                <i className="fas fa-map-marker-alt"></i>
                4th Floor, B-BLOCK, 739, AECS B Block, AECS Layout, Singasandra,
                Bengaluru, Karnataka 560114
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <a href="tel:+917019682889">+91 70196 82889</a>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <a href="mailto:info@sparktuition.com">info@sparktuition.com</a>
              </li>
              <li>
                <i className="fab fa-whatsapp"></i>
                <a href="https://wa.me/917019682889" target="_blank" rel="noreferrer">Chat on WhatsApp</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} Spark Learning Hub. All Rights Reserved.</p>
          </div>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;