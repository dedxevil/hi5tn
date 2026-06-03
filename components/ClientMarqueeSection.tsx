
import React from 'react';

const CLIENT_LOGOS = [
  'Silambu.us', 'Aram Traders', 'Best Direct Finance', 'PartiM', 'Borned Eagle'
];

const ClientMarqueeSection: React.FC = () => {
  // Duplicate logos to ensure seamless continuous scroll
  const marqueeLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="py-8 md:py-12 bg-background-dark overflow-hidden relative">
      <div className="container mx-auto px-6 text-center mb-8">
        <p className="text-sm text-text-muted opacity-80">Trusted by leading enterprises worldwide</p>
      </div>
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex" style={{ animationDuration: 'var(--marquee-duration, 30s)' }}>
          {marqueeLogos.map((logo, index) => (
            <span key={index} className="text-3xl lg:text-4xl font-semibold text-text-muted opacity-60 mx-8 flex-shrink-0">
              {logo}
            </span>
          ))}
        </div>
        {/* We use a duplicated div for the seamless effect */}
        <div className="animate-marquee whitespace-nowrap flex" aria-hidden="true" style={{ animationDuration: 'var(--marquee-duration, 30s)' }}>
          {marqueeLogos.map((logo, index) => (
            <span key={index} className="text-3xl lg:text-4xl font-semibold text-text-muted opacity-60 mx-8 flex-shrink-0">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientMarqueeSection;