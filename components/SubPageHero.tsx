
import React from 'react';
import SectionHeader from './ui/SectionHeader';

interface SubPageHeroProps {
  page: 'about' | 'services' | 'projects' | 'testimonials' | 'contact';
  label: string;
  title: string;
  description: string;
}

const SubPageHero: React.FC<SubPageHeroProps> = ({ page, label, title, description }) => {
  return (
    <section className="pt-48 md:pt-60 pb-8 md:pb-12 mb-8 md:mb-12 overflow-hidden relative flex items-center">
      {/* Background elements - Neon Ambient Glows from Home Page */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#6366f1]/10 blur-[120px] rounded-full"></div>
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#a855f7]/10 blur-[100px] rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center subpage-title-hero">
          <SectionHeader
            label={label}
            title={title}
            description={description}
            className="mb-0 !text-center !mx-auto !max-w-none"
          />
          {/* Hero Gradient & Shimmer Effect */}
          <style>{`
            @keyframes hero-shimmer {
              0% { background-position: -200% center; }
              100% { background-position: 200% center; }
            }
            .subpage-title-hero h2 {
              background: linear-gradient(
                to right, 
                #4ade80 0%, 
                #2dd4bf 30%, 
                #fff 50%, 
                #2dd4bf 70%, 
                #4ade80 100%
              );
              background-size: 200% auto;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              animation: hero-shimmer 5s linear infinite;
              display: inline-block;
              filter: drop-shadow(0 0 15px rgba(45,212,191,0.4));
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default SubPageHero;
