
import React, { useState } from 'react';
import SectionHeader from './ui/SectionHeader';
import BentoGrid from './ui/BentoGrid';
import BentoGridItem from './ui/BentoGridItem';
import { PROBLEM_CARDS } from '../constants';
import Button from './ui/Button';

const ProblemSolverSection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Helper to toggle expansion
  const toggleExpand = (index: number) => {
    setExpandedIndex(prev => (prev === index ? null : index));
  };

  // Content for the expanded state
  const getDetailedContent = (shortAnswer: string) => (
    <div className="pt-6 mt-6 border-t border-white/10 text-gray-300 space-y-4 animate-fade-in">
      <p className="text-lg font-medium text-primary-brand">
        In-depth Analysis:
      </p>
      <p>
        {shortAnswer} In enterprise environments, this challenge often stems from legacy data fragmentation. Our approach involves deploying an intermediary orchestration layer that normalizes these inputs before they reach the LLM.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="bg-black/20 p-4 rounded-lg">
          <h4 className="text-white font-bold mb-2">The Risk</h4>
          <p className="text-sm text-gray-400">Standard implementation leads to hallucination rates of ~15% in this sector.</p>
        </div>
        <div className="bg-primary-brand/10 p-4 rounded-lg border border-primary-brand/20">
          <h4 className="text-primary-brand font-bold mb-2">Our Fix</h4>
          <p className="text-sm text-gray-300">We implement RAG (Retrieval-Augmented Generation) with strict citation enforcement.</p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 md:py-28 container mx-auto px-6">
      <SectionHeader
        label="For Founders, CIOs, and Business Leaders"
        title="Navigating the AI Frontier? We're Your Guide."
        description="Every business faces unique challenges. Click on a topic to dive deeper into our engineering methodology."
      />
      
      {/* We use auto-rows-min so the grid rows adapt to the expanding content size 
        instead of stretching awkwardly.
      */}
      <BentoGrid className="lg:grid-cols-3 auto-rows-min transition-all duration-500 ease-in-out">
        {PROBLEM_CARDS.map((card, index) => {
          const isExpanded = expandedIndex === index;
          const isDimmed = expandedIndex !== null && !isExpanded;

          // DYNAMIC CLASS CALCULATION
          let colSpanClass = "";
          if (isExpanded) {
            // If active: Take up full width (3 cols)
            colSpanClass = "lg:col-span-3 bg-gray-900 z-10 ring-1 ring-primary-brand/50 shadow-2xl scale-[1.01]";
          } else if (expandedIndex !== null) {
            // If another is active: Standard size, but dimmed
            colSpanClass = "lg:col-span-1 opacity-50 blur-[1px] hover:opacity-100 hover:blur-0 transition-all duration-500";
          } else {
            // Default State: First item is wide, others standard
            colSpanClass = index === 0 ? "lg:col-span-2" : "lg:col-span-1";
          }

          return (
            <BentoGridItem 
              key={index} 
              className={`transition-all duration-500 ease-in-out ${colSpanClass}`}
            >
              <div className="flex flex-col h-full relative">
                {/* Header Area */}
                <div className="flex justify-between items-start">
                  <h3 className={`font-semibold text-text-light mb-4 transition-all duration-300 ${isExpanded ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'}`}>
                    {card.question}
                  </h3>
                  
                  {/* Close Icon (Visible only when expanded) */}
                  {isExpanded && (
                    <button onClick={() => toggleExpand(index)} className="text-gray-400 hover:text-white">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                  )}
                </div>

                {/* Short Answer (Always Visible) */}
                <p className="text-text-muted leading-relaxed">
                   {card.answer}
                </p>

                {/* EXPANDABLE SECTION (CSS Grid Trick for Height Animation) */}
                <div 
                    className={`grid transition-all duration-500 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                    <div className="overflow-hidden">
                        {getDetailedContent(card.answer)}
                    </div>
                </div>

                {/* Action Area */}
                <div className={`mt-6 transition-all duration-300 ${isExpanded ? 'opacity-0 h-0 pointer-events-none' : 'opacity-100'}`}>
                  <button 
                    onClick={() => toggleExpand(index)}
                    className="text-primary-brand hover:text-secondary-brand-blue font-medium flex items-center group focus:outline-none"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </button>
                </div>

                {/* Expanded Action Buttons */}
                <div className={`mt-6 flex gap-4 transition-all duration-500 delay-100 ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 h-0 hidden'}`}>
                    <Button size="md" to="/contact">
                        Solve This Challenge
                    </Button>
                </div>
              </div>
            </BentoGridItem>
          );
        })}

        {/* CTA CARD */}
        {/* We hide this card if any other card is expanded to reduce clutter, or we can just dim it */}
        <BentoGridItem className={`lg:col-span-1 bg-gradient-to-br from-gray-900 to-black border-primary-brand/20 transition-all duration-500 ${expandedIndex !== null ? 'opacity-30 grayscale' : 'opacity-100'}`}>
          <div className="flex flex-col justify-center items-center text-center h-full p-4">
            <h3 className="text-xl font-bold text-white mb-4">Have another question?</h3>
            <Button to="/contact" className="bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-primary-brand transition-all duration-300 inline-block text-sm">
                Ask an Expert
            </Button>
          </div>
        </BentoGridItem>

      </BentoGrid>
      
      {/* Styles for simple fade-in used in detailed text */}
      <style>{`
        .animate-fade-in {
            animation: fadeIn 0.5s ease-in-out forwards;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default ProblemSolverSection;