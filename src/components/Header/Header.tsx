import { useState, useRef, useEffect } from 'react';
import './Header.css';

// Define the type for the closeMenu function event if needed, but for simplicity, we'll keep it clean.

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLUListElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const closeMenu = (e?: React.MouseEvent) => {
    // Optionally prevent default for anchor tags if needed, but not strictly required here
    if (e && e.type === 'click') {
        // You might want to prevent the default anchor jump if you use smooth scrolling
        // e.preventDefault(); 
    }
    setIsMenuOpen(false);
  };

  // Close menu when clicking outside or pressing ESC, and manage body scroll
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!isMenuOpen) return;
      // Check if the click is outside the nav and not on the menu button
      const target = e.target as Node;
      if (
        navRef.current && 
        !navRef.current.contains(target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(target)
      ) {
        setIsMenuOpen(false);
      }
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', onDocClick);
    document.addEventListener('keydown', onKey);

    // Disable body scroll when menu is open on mobile
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      // Focus on the first link for better accessibility when menu opens
      if (navRef.current) {
        navRef.current.querySelector('a')?.focus();
      }
    } else {
      document.body.style.overflow = '';
      // Return focus to the button after closing the menu
      if (document.activeElement === document.body && menuButtonRef.current) {
        menuButtonRef.current.focus();
      }
    }

    return () => {
      document.removeEventListener('click', onDocClick);
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = ''; // Cleanup body scroll on unmount
    };
  }, [isMenuOpen]);

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a> 

      <header className="site-header">
        <div className="container header-container">
          <nav className="navbar" role="navigation" aria-label="Main">
            <a href="/" className="logo">
              Spark <span>Learning Hub</span>
            </a>

            <button
              ref={menuButtonRef}
              className="menu-toggle"
              onClick={(e) => { e.stopPropagation(); toggleMenu(); }}
              aria-controls="site-navigation"
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              <span className="menu-icon" aria-hidden="true">
                {isMenuOpen ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                )}
              </span>
            </button>

            <ul 
              id="site-navigation" 
              ref={navRef} 
              className={`nav-links ${isMenuOpen ? 'active' : ''}`}
            >
              <li><a href="#home" onClick={closeMenu}>Home</a></li>
              <li><a href="#about" onClick={closeMenu}>About</a></li>
              <li><a href="#courses" onClick={closeMenu}>Courses</a></li>
              <li><a href="#teachers" onClick={closeMenu}>Teachers</a></li>
              <li><a href="#expertise" onClick={closeMenu}>Expertise</a></li>
              <li><a href="#location" onClick={closeMenu}>Location</a></li>
              <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
      
      {/* This is the target for the Skip-Link */}
      <main id="main-content">
          {/* Main content of the page goes here */}
      </main>
    </>
  );
};

export default Header;