import { useEffect, useState, useCallback } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Courses from './components/Sections/Courses';
import Teachers from './components/Sections/Teachers';
import Expertise from './components/Sections/Expertise';
import Contact from './components/Sections/Contact';
import Footer from './components/Footer/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp/FloatingWhatsApp';
import PopupForm from './components/PopupForm/PopupForm';
import './styles/global.css';
import ThankYou from './components/ThankYou/ThankYou';
 

export default function App() {
  const [showThank, setShowThank] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const doc = document.documentElement;
      const scrollTop = window.pageYOffset || doc.scrollTop || document.body.scrollTop || 0;
      const height = doc.scrollHeight - doc.clientHeight;
      const pct = height > 0 ? (scrollTop / height) * 100 : 0;
      setScrollProgress(Number(pct.toFixed(2)));
    };

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  useEffect(() => {
    let triggered = false;
    try { triggered = sessionStorage.getItem('popupShown') === '1'; } catch {}
    const el = document.getElementById('about');
    if (!el || triggered) return;
    const aboutBottom = () => el.offsetTop + el.offsetHeight;
    const onScroll = () => {
      if (triggered) return;
      try { if (sessionStorage.getItem('popupShown') === '1') { triggered = true; return; } } catch {}
      if (window.scrollY > aboutBottom()) {
        triggered = true;
        try { location.hash = '#demo'; } catch {}
        try { sessionStorage.setItem('popupShown', '1'); } catch {}
        window.removeEventListener('scroll', onScroll);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    try { if (sessionStorage.getItem('popupShown') === '1') return; } catch {}
    let cleared = false;
    const t = setTimeout(() => {
      if (cleared) return;
      try { if (sessionStorage.getItem('popupShown') === '1') return; } catch {}
      try { location.hash = '#demo'; } catch {}
      try { sessionStorage.setItem('popupShown', '1'); } catch {}
    }, 10000);
    const onFirstScroll = () => {
      if (window.scrollY > 0) {
        cleared = true;
        clearTimeout(t);
        window.removeEventListener('scroll', onFirstScroll);
      }
    };
    window.addEventListener('scroll', onFirstScroll, { passive: true });
    return () => {
      cleared = true;
      clearTimeout(t);
      window.removeEventListener('scroll', onFirstScroll);
    };
  }, []);

  // listen to hash changes to show/hide thank you overlay
  useEffect(() => {
    const checkHash = () => {
      setShowThank(window.location.hash === '#thank-you');
      if (window.location.hash === '#demo') {
        try { sessionStorage.setItem('popupShown', '1'); } catch {}
      }
    };
    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  const onCloseThank = useCallback(() => {
    setShowThank(false);
  }, []);
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: Event) => {
      if (!(e.target instanceof HTMLAnchorElement)) return;
      const target = e.target;
      
      if (target.hash && target.hash !== '#') {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - 80,
            behavior: 'smooth',
          });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  return (
    <>
      {/* Top scroll progress indicator */}
      <div
        className="top-progress"
        style={{ width: `${scrollProgress}%`, opacity: scrollProgress > 0 ? 1 : 0 }}
        aria-hidden="true"
      />
      <Header />
      <main>
        <Hero />
        <About />
        <Courses />
        <Teachers />
        <Expertise />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <PopupForm isVisible={false} onClose={function (): void {
        throw new Error('Function not implemented.');
      } } />
      {showThank && <ThankYou onClose={onCloseThank} />}
    </>
  );
}
