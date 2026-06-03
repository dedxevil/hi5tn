
import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page Components
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';
import AIProductsPage from './pages/AIProductsPage';
import CookieConsent from './components/CookieConsent';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollNavigation from './components/ScrollNavigation';
import CustomCursor from './components/CustomCursor';
import AiClickFunnel from './components/AiClickFunnel';

const App: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '';
  const [isFunnelModalOpen, setIsFunnelModalOpen] = useState(false);

  const [marqueeDuration, setMarqueeDuration] = useState(30);
  const [showIndicator, setShowIndicator] = useState(false);
  const [indicatorText, setIndicatorText] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Listen for the custom window event to open the click funnel modal
  useEffect(() => {
    const handleOpenModal = () => {
      setIsFunnelModalOpen(true);
      document.body.style.overflow = 'hidden'; // Lock background scrolling
    };

    const handleCloseModal = () => {
      setIsFunnelModalOpen(false);
      document.body.style.overflow = ''; // Unlock background scrolling
    };

    window.addEventListener('open-funnel-modal', handleOpenModal);
    window.addEventListener('close-funnel-modal', handleCloseModal);

    return () => {
      window.removeEventListener('open-funnel-modal', handleOpenModal);
      window.removeEventListener('close-funnel-modal', handleCloseModal);
      document.body.style.overflow = '';
    };
  }, []);

  // Keyboard scroll and speed booster controls
  useEffect(() => {
    let targetScrollY = window.scrollY;
    let timer: number;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        const activeEl = document.activeElement;
        if (
          activeEl && 
          (activeEl.tagName === 'INPUT' || 
           activeEl.tagName === 'TEXTAREA' || 
           activeEl.contentEditable === 'true')
        ) {
          return;
        }

        e.preventDefault();

        // 1. Scrolling speed boost (smooth scroll by 180px)
        const direction = e.key === 'ArrowDown' ? 1 : -1;
        const scrollStep = 180;
        
        targetScrollY = Math.max(
          0,
          Math.min(
            document.documentElement.scrollHeight - window.innerHeight,
            targetScrollY + scrollStep * direction
          )
        );

        window.scrollTo({
          top: targetScrollY,
          behavior: 'smooth'
        });

        // 2. Adjust marquee duration (ArrowUp speed increase / ArrowDown speed decrease)
        setMarqueeDuration((prev) => {
          const step = 3;
          let next = prev;
          if (e.key === 'ArrowUp') {
            next = Math.max(5, prev - step);
          } else {
            next = Math.min(60, prev + step);
          }
          
          document.documentElement.style.setProperty('--marquee-duration', `${next}s`);
          
          const speedPercentage = Math.round((30 / next) * 100);
          setIndicatorText(`Speed Adjusted: ${speedPercentage}% (Marquee: ${next}s)`);
          setShowIndicator(true);

          window.clearTimeout(timer);
          timer = window.setTimeout(() => {
            setShowIndicator(false);
          }, 1500);

          return next;
        });
      }
    };

    const handleScroll = () => {
      targetScrollY = window.scrollY;
    };

    window.addEventListener('keydown', handleKeyDown, { passive: false });
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('scroll', handleScroll);
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <div className={`min-h-screen ${isHomePage ? 'bg-[#0A192F]' : 'bg-[#05010f] subpage-theme'} text-text-light antialiased transition-colors duration-500 overflow-x-hidden`}>
      <CustomCursor />
      <Navbar />
      <main id="main-content" className={isHomePage ? '' : 'subpage-glow-system'}> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/ai-products" element={<AIProductsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <CookieConsent />
      <FloatingWhatsApp />
      <ScrollNavigation />
      <Footer />

      {/* Global Funnel Modal Popup */}
      {isFunnelModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/85 backdrop-blur-2xl overflow-y-auto">
          <div className="relative max-w-6xl w-full my-8 bg-black border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(38,212,140,0.3)] animate-fade-in-up">
            {/* Close Button */}
            <button 
              onClick={() => {
                setIsFunnelModalOpen(false);
                document.body.style.overflow = '';
              }}
              className="absolute top-6 right-6 text-gray-400 hover:text-primary-brand z-50 transition-colors bg-white/5 hover:bg-white/10 p-2.5 rounded-full border border-white/10"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="max-h-[90vh] overflow-y-auto">
              <AiClickFunnel />
            </div>
          </div>
        </div>
      )}
      {!isHomePage && (
        <style>{`
          .subpage-glow-system {
            background-image: 
              radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.05) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(168, 85, 247, 0.05) 0%, transparent 50%);
          }
          /* Override existing section background-dark if any */
          .subpage-theme .bg-background-dark {
            background-color: #05010f !important;
          }
        `}</style>
      )}

      {/* Dynamic Speed Indicator Toast */}
      {showIndicator && (
        <div className="fixed bottom-6 left-6 z-[100] px-5 py-3 bg-black/80 backdrop-blur-xl border border-white/10 text-primary-brand text-xs font-bold uppercase tracking-wider rounded-2xl shadow-[0_0_30px_rgba(38,212,140,0.2)] flex items-center gap-3 animate-fade-in-up">
          <div className="w-2.5 h-2.5 rounded-full bg-primary-brand animate-ping" />
          <span>{indicatorText}</span>
        </div>
      )}
    </div>
  );
};

export default App;