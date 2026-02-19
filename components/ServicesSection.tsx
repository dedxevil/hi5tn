
import React from 'react';
import SectionHeader from './ui/SectionHeader';
import BentoGrid from './ui/BentoGrid';
import BentoGridItem from './ui/BentoGridItem';
import { AI_SERVICES } from '../constants';

const ServicesSection: React.FC = () => {
  return (
    <section id="ai-solutions" className="py-20 md:py-28 container mx-auto px-6">
      <SectionHeader
        label="Our Core Offerings"
        title="Pioneering AI Solutions & Services"
        description="We architect, build, and deploy cutting-edge Generative AI Solutions and Enterprise Machine Learning platforms, precisely engineered to your business ecosystem. From Custom LLM Development to AI Process Automation, we turn ambitious visions into measurable impact."
      />
      <BentoGrid className="lg:grid-cols-3">
        {AI_SERVICES.map((service, index) => (
          <BentoGridItem key={index}>
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 rounded-full bg-primary-brand/20 text-primary-brand">
                {/* Example Icon - replace with actual icons */}
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 17h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-text-light mb-3 text-center">
              {service.title}
            </h3>
            <p className="text-text-muted leading-relaxed text-center">
              {service.description}
            </p>
          </BentoGridItem>
        ))}
      </BentoGrid>
    </section>
  );
};

export default ServicesSection;