
import React from 'react';
import SectionHeader from './ui/SectionHeader';
import BentoGrid from './ui/BentoGrid';
import BentoGridItem from './ui/BentoGridItem';
import { INDUSTRIES } from '../constants';
import Button from './ui/Button'; // Import Button

const IndustriesSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 container mx-auto px-6">
      <SectionHeader
        label="Sector-Specific Intelligence"
        title="Adaptive AI for Every Industry"
        description="We empower businesses across diverse sectors with tailored Generative AI Solutions and Enterprise Machine Learning, addressing unique challenges and unlocking strategic advantages."
      />
      <BentoGrid className="lg:grid-cols-3">
        {INDUSTRIES.map((industry, index) => (
          <BentoGridItem key={index}>
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 rounded-full bg-primary-brand/20 text-primary-brand">
                {/* Example Icon - replace with actual icons */}
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m8-10h1m-1 4h1m-1 4h1m-4 4h4m-4 0v-4"></path>
                </svg>
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-text-light mb-3 text-center">
              {industry.title}
            </h3>
            <p className="text-text-muted leading-relaxed text-center">
              {industry.description}
            </p>
          </BentoGridItem>
        ))}
      </BentoGrid>
      <div className="text-center mt-12">
        <Button to="/contact" className="font-semibold text-lg group">
          Don't see your industry? Let's discuss a custom solution.
          <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </Button>
      </div>
    </section>
  );
};

export default IndustriesSection;