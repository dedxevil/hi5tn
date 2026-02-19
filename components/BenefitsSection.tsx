
import React, { useState, useEffect, useRef, useMemo } from 'react';
import SectionHeader from './ui/SectionHeader';
import { BENEFITS } from '../constants';

// --- Scroll Animation Hook ---
const useInView = (options: IntersectionObserverInit = { threshold: 0.1 }) => {
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

const BenefitsSection: React.FC = () => {
  const observerOptions = useMemo(() => ({ threshold: 0.1 }), []); // Memoize options
  const [ref, isInView] = useInView(observerOptions); // Use memoized options

  return (
    <section 
      ref={ref}
      className="py-20 md:py-28 container mx-auto px-6 relative"
    >
      {/* Background Decor (Optional Subtle Glow) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary-brand/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      {/* Header Animation */}
      <div className={`transition-all duration-700 ease-out transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <SectionHeader
          label="Tangible Impact"
          title="What You Gain with HI5 Technet"
          description="Partnering with us means unlocking quantifiable results and strategic advantages that propel your business forward in the age of AI."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        {BENEFITS.map((benefit, index) => (
          <div 
            key={index} 
            className={`
              group relative p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm
              hover:bg-white/[0.04] hover:border-primary-brand/30 hover:shadow-[0_4px_20px_rgba(38,212,140,0.1)]
              transition-all duration-500 ease-out
              flex items-start gap-4
              ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
            `}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            {/* Icon Container */}
            <div className="flex-shrink-0 relative">
              <div className="absolute inset-0 bg-primary-brand/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-gray-800 to-black border border-white/10 flex items-center justify-center text-primary-brand group-hover:scale-110 transition-transform duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-grow">
               <h4 className="text-lg font-medium text-gray-200 group-hover:text-white transition-colors duration-300 leading-relaxed">
                 {benefit}
               </h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;