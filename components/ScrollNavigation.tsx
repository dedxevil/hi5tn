
import React, { useState, useEffect } from 'react';

const ScrollNavigation: React.FC = () => {
  const [showTop, setShowTop] = useState(false);
  const [showBottom, setShowBottom] = useState(true);

  const checkScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    setShowTop(scrollY > 200);
    setShowBottom(scrollY + windowHeight < documentHeight - 500);
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Initial check
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className="fixed right-6 bottom-24 flex flex-col gap-3 z-50">
      {showTop && (
        <button
          onClick={scrollToTop}
          className="p-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white hover:bg-[#2dd4bf]/20 hover:border-[#2dd4bf]/50 transition-all duration-300 shadow-xl group"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
      {showBottom && (
        <button
          onClick={scrollToBottom}
          className="p-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white hover:bg-[#2dd4bf]/20 hover:border-[#2dd4bf]/50 transition-all duration-300 shadow-xl group"
          aria-label="Scroll to bottom"
        >
          <svg className="w-6 h-6 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ScrollNavigation;
