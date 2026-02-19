
import React, { useEffect, useRef, useState, useMemo } from 'react';
import Button from './ui/Button';

// 1. Hook for scroll detection
const useInView = (options: IntersectionObserverInit = { threshold: 0.3 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(currentRef); // Unobserve after entering view
      }
    }, options);

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect(); // Disconnect the observer itself
    };
  }, [options]); // Re-run effect only if options change

  return [ref, isInView] as const;
};

const CtaBanner: React.FC = () => {
  const observerOptions = useMemo(() => ({ threshold: 0.3 }), []); // Memoize options
  const [ref, isInView] = useInView(observerOptions); // Use memoized options

  return (
    <section 
      ref={ref} 
      className="py-24 relative overflow-hidden border-t border-white/5 bg-background-dark"
    >
      {/* 2. INLINE STYLES FOR BRAND COLOR SHINE */}
      <style>{`
        @keyframes shine-move {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        .brand-shine-text {
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          /* Gradient Map:
             Start: Primary Green (#26d48c)
             Middle: White Shine (#ffffff)
             End: Primary Green (#26d48c)
          */
          background-image: linear-gradient(110deg, #26d48c 45%, #ffffff 50%, #26d48c 55%);
          background-size: 250% 100%;
          animation: shine-move 3s linear infinite;
          /* Optional: Adds a subtle glow behind the text to make the green pop more */
          filter: drop-shadow(0 0 8px rgba(38, 212, 140, 0.3));
        }
      `}</style>

      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-10 blur-[120px]"
          style={{ background: 'radial-gradient(circle, #26d48c 0%, transparent 60%)' }}
        ></div>
      </div>
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', 
          backgroundSize: '50px 50px' 
        }}
      ></div>

      {/* --- CONTENT LAYER --- */}
      <div className="container mx-auto px-6 text-center relative z-10">
        
        {/* Badge */}
        <div className={`
            inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md
            transform transition-all duration-700 ease-out
            ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        `}>
            <span className="text-gray-300 text-xs font-bold tracking-widest uppercase">Start Your Transformation</span>
        </div>

        {/* Headline */}
        <h2 
          className={`
            text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white mb-8
            transform transition-all duration-700 delay-100 ease-out
            ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          Ready to Engineer Your <br className="hidden md:block"/>
          {/* Applying the custom GREEN shine class */}
          <span className="brand-shine-text">
             AI-Powered Future?
          </span>
        </h2>

        {/* Description */}
        <p 
          className={`
            text-lg sm:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed
            transform transition-all duration-700 delay-200 ease-out
            ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          Share your business aspirations. We'll outline transformative <strong className="text-white font-semibold">Generative AI Solutions</strong>, estimate tangible impact, and design a <strong className="text-white font-semibold">Custom LLM Development roadmap</strong> tailored to your strategic goals.
        </p>

        {/* Buttons */}
        <div 
          className={`
            flex flex-col sm:flex-row justify-center gap-5 items-center
            transform transition-all duration-700 delay-300 ease-out
            ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
            <Button size="lg" to="/contact" className="w-full sm:w-auto min-w-[200px] shadow-[0_0_20px_rgba(38,212,140,0.15)] hover:shadow-[0_0_25px_rgba(38,212,140,0.3)] transition-shadow duration-300">
                Schedule Consultation
            </Button>
            
            <Button variant="outline" size="lg" to="/ai-solutions" className="w-full sm:w-auto min-w-[200px] border-white/10 hover:bg-white/5">
                View Solutions
            </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;