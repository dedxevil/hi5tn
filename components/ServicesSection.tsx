import React, { useState, useEffect, useRef } from 'react';
import SectionHeader from './ui/SectionHeader';
import { AI_SERVICES } from '../constants';

const ServicesSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const carouselRef = useRef<HTMLDivElement>(null);

  // Auto-play Timer
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % AI_SERVICES.length);
      }, 4000); // slightly faster here (4s) since there's less text to read
    }

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Auto-Center Scrolling
  useEffect(() => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const activeCard = container.children[activeIndex] as HTMLElement;

      if (activeCard) {
        const scrollPosition = activeCard.offsetLeft - (container.offsetWidth / 2) + (activeCard.offsetWidth / 2);

        container.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        });
      }
    }
  }, [activeIndex]);

  const handleCardClick = (index: number) => {
    setIsAutoPlaying(false); // Stop auto-play when user interacts
    setActiveIndex(index);
  };

  return (
    <section id="ai-solutions" className="py-20 md:py-28 relative overflow-hidden bg-black">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[600px] bg-primary-brand/5 rounded-full blur-[150px] pointer-events-none -z-10"></div>

      {/* <div className="container mx-auto px-6 mb-12 relative z-20">
        <SectionHeader
          label="Our Core Offerings"
          title="Pioneering AI Solutions & Services"
          description="We architect, build, and deploy cutting-edge Generative AI Solutions and Enterprise Machine Learning platforms, precisely engineered to your business ecosystem."
        />
      </div> */}

      {/* Horizontal Scrolling Track */}
      <div
        ref={carouselRef}
        className="flex overflow-x-auto gap-6 px-6 pb-12 snap-x snap-mandatory hide-scrollbar relative z-20 items-center min-h-[400px]"
      >
        {AI_SERVICES.map((service, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={index}
              onClick={() => handleCardClick(index)}
              className={`
                shrink-0 snap-center transition-all duration-700 ease-out border rounded-3xl p-8 md:p-10 cursor-pointer flex flex-col justify-center
                ${isActive
                  ? 'w-[85vw] md:w-[600px] min-h-[350px] bg-gray-900/90 backdrop-blur-xl shadow-[0_0_40px_rgba(var(--primary-brand-rgb,59,130,246),0.2)] border-primary-brand ring-1 ring-primary-brand/50 scale-100 opacity-100'
                  : 'w-[75vw] md:w-[400px] min-h-[300px] bg-white/5 border-white/10 hover:bg-white/10 scale-[0.95] opacity-50 blur-[2px] hover:blur-none hover:opacity-80'}
              `}
            >
              <div className="flex flex-col items-center text-center h-full space-y-6">

                {/* Icon Container */}
                <div className={`
                  p-4 rounded-2xl transition-all duration-500 flex items-center justify-center
                  ${isActive ? 'bg-primary-brand/20 text-primary-brand scale-110' : 'bg-black text-gray-500 border border-white/10'}
                `}>
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 17h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                  </svg>
                </div>

                {/* Title */}
                <h3 className={`font-bold transition-all duration-500 ${isActive ? 'text-2xl md:text-3xl text-white' : 'text-xl md:text-2xl text-gray-400'}`}>
                  {service.title}
                </h3>

                {/* Description */}
                <p className={`leading-relaxed transition-all duration-500 ${isActive ? 'text-gray-300 text-base md:text-lg' : 'text-gray-500 text-sm md:text-base line-clamp-3'}`}>
                  {service.description}
                </p>

                {/* Optional "Active" Indicator Bar at the bottom of the card */}
                <div className={`h-1 rounded-full bg-primary-brand mt-4 transition-all duration-1000 ease-in-out ${isActive ? 'w-24 opacity-100' : 'w-0 opacity-0'}`}></div>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;