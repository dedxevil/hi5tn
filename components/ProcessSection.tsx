
import React, { useEffect, useRef, useState, useMemo } from 'react';
import SectionHeader from './ui/SectionHeader';
import { DELIVERY_PROCESS } from '../constants';

// --- Custom Hook for Scroll Detection ---
const useInView = (options: IntersectionObserverInit = { threshold: 0.2 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(([entry]) => {
      // Set isInView only once when it becomes intersecting
      if (entry.isIntersecting) {
        setIsInView(true);
        // For 'play once' animation, unobserve here after it enters view.
        observer.unobserve(currentRef);
      }
    }, options);

    observer.observe(currentRef);

    // Cleanup function: disconnect observer when component unmounts or options change
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Unobserve the specific element
      }
      observer.disconnect(); // Disconnect the observer itself
    };
  }, [options]); // Re-run effect only if options change

  return [ref, isInView] as const;
};

// --- Single Process Step Component ---
const ProcessStep: React.FC<{ step: any; index: number }> = ({ step, index }) => {
  // Memoize the options object to ensure a stable reference across renders
  const observerOptions = useMemo(() => ({ threshold: 0.3 }), []);
  const [ref, isInView] = useInView(observerOptions); // Use memoized options
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`
        flex flex-col lg:flex-row items-center
        relative mb-12 lg:mb-20
        ${isEven ? 'lg:justify-start' : 'lg:justify-end'}
      `}
    >
      {/* Step Number Circle 
        Animation: Pop in with scale and fade
      */}
      <div 
        className={`
          absolute lg:relative flex-shrink-0 mb-4 lg:mb-0 z-10 
          w-12 h-12 rounded-full bg-primary-brand 
          flex items-center justify-center text-white font-bold text-lg 
          border-4 border-background-dark lg:mx-8 shadow-[0_0_15px_rgba(38,212,140,0.5)]
          transition-all duration-700 ease-out delay-100
          ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
        `}
      >
        {index + 1}
      </div>

      {/* Content Card 
        Animation: Slide in from left (even) or right (odd)
      */}
      <div
        className={`
          bg-card-bg/80 backdrop-blur-md border border-glass-border rounded-xl p-6 shadow-lg
          w-full lg:w-5/12 hover:shadow-[0_0_20px_rgba(24,66,182,0.2)] hover:border-primary-brand/30 transition-all duration-500
          ${isEven ? 'lg:text-right' : 'lg:text-left'}
          transform transition-all duration-1000 ease-out
          ${isInView 
            ? 'opacity-100 translate-x-0' 
            : isEven 
              ? 'opacity-0 -translate-x-20' // Slide from Left
              : 'opacity-0 translate-x-20'   // Slide from Right
          }
        `}
      >
        <h3 className="text-2xl font-semibold text-text-light mb-2">
          <span className="text-primary-brand">{step.step}:</span> {step.title}
        </h3>
        <p className="text-text-muted leading-relaxed">
          {step.description}
        </p>
      </div>
    </div>
  );
};

const ProcessSection: React.FC = () => {
  // Ref for the whole container to animate the central line
  // Memoize the options object for this useInView call too!
  const sectionObserverOptions = useMemo(() => ({ threshold: 0.1 }), []);
  const [sectionRef, sectionInView] = useInView(sectionObserverOptions);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-background-dark to-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionHeader
          label="Our Proven Approach"
          title="How We Deliver AI Projects"
          description="Our agile and systematic process ensures your AI initiative moves from concept to measurable impact efficiently and effectively."
        />
        
        <div ref={sectionRef} className="relative mt-16">
          {/* Vertical Timeline Line 
            Animation: Grows height from 0% to 100%
          */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-800/50">
             {/* The colored fill line that grows */}
             <div 
                className={`
                  w-full bg-gradient-to-b from-primary-brand to-secondary-brand-blue 
                  transition-all duration-[2000ms] ease-in-out
                `}
                style={{ height: sectionInView ? '100%' : '0%' }}
             ></div>
          </div>

          {DELIVERY_PROCESS.map((step, index) => (
            <ProcessStep key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;