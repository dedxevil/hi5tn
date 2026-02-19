
import React, { useState, useEffect, useRef, useMemo } from 'react';
import SectionHeader from './ui/SectionHeader';
import BentoGrid from './ui/BentoGrid';
import BentoGridItem from './ui/BentoGridItem';
import { TECH_SERVICES } from '../constants';

// --- Reusable Scroll Hook ---
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

const TechStackSection: React.FC = () => {
  const observerOptions = useMemo(() => ({ threshold: 0.1 }), []); // Memoize options
  const [ref, isInView] = useInView(observerOptions); // Use memoized options

  return (
    <section 
      ref={ref}
      className="py-20 md:py-28 bg-gradient-to-br from-background-dark to-gray-900 relative overflow-hidden"
    >
      {/* --- INJECTED STYLES FOR GREEN GLITTER --- */}
      <style>{`
        @keyframes shine-move {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        .brand-shine-text {
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          /* Green base with a bright white shine passing through */
          background-image: linear-gradient(110deg, #26d48c 45%, #ffffff 50%, #26d48c 55%);
          background-size: 250% 100%;
          animation: shine-move 3s linear infinite;
          /* Subtle green glow */
          filter: drop-shadow(0 0 5px rgba(38, 212, 140, 0.4));
        }
      `}</style>

      <div className="container mx-auto px-6">
        {/* Animated Header */}
        <div className={`transition-all duration-700 ease-out transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <SectionHeader
              label="Foundational Expertise"
              title="The Engineering Backbone for Your AI Vision"
              description="Our AI breakthroughs are grounded in robust full-stack engineering, cloud infrastructure, and human-centered design."
            />
        </div>

        <BentoGrid className="lg:grid-cols-3 mt-12">
          {TECH_SERVICES.map((service, index) => (
            <BentoGridItem 
                key={index}
                // Card Animation: Slide Up + Fade In
                className={`
                    transition-all duration-700 ease-out 
                    hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(38,212,140,0.1)] hover:border-primary-brand/30
                    ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                    flex flex-col justify-center
                `}
                style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon Removed as requested */}

              {/* Title with Green Glitter Effect */}
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-center brand-shine-text">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-text-muted leading-relaxed text-center group-hover:text-gray-300 transition-colors duration-300">
                {service.description}
              </p>
            </BentoGridItem>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

export default TechStackSection;