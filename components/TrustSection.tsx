
import React, { useState, useEffect, useRef, useMemo } from 'react';
import SectionHeader from './ui/SectionHeader';
import Card from './ui/Card';

// --- DATA: Client Testimonials ---
const TESTIMONIALS_DATA = [
  {
    name: "Mr Krishnan",
    role: "E-commerce Entrepreneur",
    image: "/images/testimonial-1.png",
    quote: "As a small business owner, I was struggling to stand out in a crowded market. Thanks to Hi5TechNet, I've seen a remarkable increase in both brand visibility and revenue. Adaptive e-tailers after sustainable total linkage. Appropriately implement one-to-one catalysts for change."
  },
  {
    name: "Mr John Britto",
    role: "Tech Startup CEO",
    image: "/images/testimonial-2.png",
    quote: "Our tech startup needed to make a splash in the industry, and Hi5Technet delivered beyond our wildest expectations. Their digital marketing expertise not only boosted our brand's visibility but also played a crucial role in securing new partnerships and investors."
  },
  {
    name: "Mr Mathew",
    role: "Small Business Owner",
    image: "/images/testimonial-3.png",
    quote: "As a small business owner, I was struggling to stand out in a crowded market. Thanks to Hi5TechNet, I've seen a remarkable increase in both brand visibility and revenue. Adaptive e-tailers after sustainable total linkage. Appropriately implement one-to-one catalysts for change."
  }
];

// --- SCROLL ANIMATION HOOK ---
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

// --- COMPONENT ---

const TrustSection: React.FC = () => {
  const observerOptions = useMemo(() => ({ threshold: 0.1 }), []); // Memoize options
  const [ref, isInView] = useInView(observerOptions); // Use memoized options

  return (
    <section 
      ref={ref}
      className="py-20 md:py-28 bg-gradient-to-br from-background-dark to-gray-900 relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        
        {/* Header Animation */}
        <div className={`transition-all duration-700 ease-out transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <SectionHeader
            label="Our Client Success"
            title="Why Businesses Trust HI5 Technet"
            description="Hear directly from leaders who have partnered with us to achieve their most ambitious AI-driven transformation goals."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {TESTIMONIALS_DATA.map((item, index) => (
            <Card 
              key={index} 
              className={`
                p-8 h-full flex flex-col transition-all duration-700 ease-out
                hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(38,212,140,0.1)] hover:border-primary-brand/30
                ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
              `}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Client Info Header */}
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 mr-4 flex-shrink-0">
                  {/* Image Placeholder with fallback background */}
                  <div className="w-full h-full rounded-full bg-gray-700 overflow-hidden border-2 border-primary-brand/20">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                      // Fallback if image is missing
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                        (e.target as HTMLImageElement).parentElement!.classList.add('flex', 'items-center', 'justify-center', 'text-xs', 'text-gray-400');
                        (e.target as HTMLImageElement).parentElement!.innerText = "IMG";
                      }}
                    />
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-white leading-tight">{item.name}</h4>
                  <p className="text-sm text-primary-brand mb-1">{item.role}</p>
                  
                  {/* Star Ratings (SVG Loop) */}
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-white/10 mb-6"></div>

              {/* Quote Content */}
              <p className="text-text-muted leading-relaxed italic flex-grow">
                "{item.quote}"
              </p>
            </Card>
          ))}
        </div>

        {/* Footer Text */}
        <div 
          className={`
            text-center mt-16 text-lg md:text-xl text-text-muted transition-all duration-700 delay-500 ease-out
            ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          Serving clients across <span className="text-primary-brand font-semibold">Asia, the Middle East, Europe, North and South America.</span>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;