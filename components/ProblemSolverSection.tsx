import React, { useState, useEffect, useRef } from 'react';
import SectionHeader from './ui/SectionHeader';
import { PROBLEM_CARDS } from '../constants';
import Button from './ui/Button';

const ProblemSolverSection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isAutoPlaying) {
      interval = setInterval(() => {
        setExpandedIndex((prev) => {
          if (prev === null) return 0;
          return (prev + 1) % PROBLEM_CARDS.length;
        });
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  useEffect(() => {
    if (carouselRef.current && expandedIndex !== null) {
      const container = carouselRef.current;
      const activeCard = container.children[expandedIndex] as HTMLElement;

      if (activeCard) {
        const scrollPosition = activeCard.offsetLeft - (container.offsetWidth / 2) + (activeCard.offsetWidth / 2);

        container.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        });
      }
    }
  }, [expandedIndex]);

  const toggleExpand = (index: number) => {
    setIsAutoPlaying(false);
    setExpandedIndex(prev => (prev === index ? null : index));
  };

  const aiModels = ['GPT-4o', 'Gemini 1.5 Pro', 'Claude 3.5 Sonnet', 'Llama 3', 'Custom RAG', 'Mistral Large', 'Vector DBs', 'Semantic Search'];

  const getDetailedContent = (shortAnswer: string) => (
    <div className="pt-6 mt-6 border-t border-white/10 text-gray-300 space-y-6 animate-fade-in-up">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 space-y-4">
          <p className="text-lg font-medium text-primary-brand flex items-center gap-2">
            <svg className="w-5 h-5 animate-pulse text-primary-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Architectural Analysis
          </p>
          <p className="text-sm md:text-base leading-relaxed text-gray-300">
            {shortAnswer} In enterprise environments, this challenge often stems from legacy data fragmentation. We deploy an advanced orchestration layer utilizing Vector Databases and Semantic Search to normalize inputs before they hit the LLM.
          </p>
        </div>

        <div className="flex-1 bg-black/40 rounded-xl p-5 border border-white/5 relative overflow-hidden group">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>

          <h4 className="text-sm font-semibold text-white mb-6 relative z-10 flex items-center justify-between">
            Performance Impact
            <span className="text-xs font-normal text-gray-400 bg-black/50 px-2 py-1 rounded border border-white/10">Hallucination Rate</span>
          </h4>

          <div className="flex items-end justify-center gap-8 h-32 relative z-10">
            <div className="flex flex-col items-center gap-2">
              <span className="text-red-400 font-mono text-sm">~15%</span>
              <div className="w-16 bg-gradient-to-t from-red-900/50 to-red-500/80 rounded-t-md h-[100px] relative"></div>
              <span className="text-xs text-gray-400 font-medium">Standard</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-emerald-400 font-mono text-sm">{'<'}1%</span>
              <div className="w-16 bg-gradient-to-t from-emerald-900/50 to-emerald-500/80 rounded-t-md h-[15px] relative animate-[growUp_1s_ease-out_forwards]"></div>
              <span className="text-xs text-primary-brand font-medium">Our Pipeline</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 md:py-28 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-primary-brand/10 rounded-[100%] blur-[120px] pointer-events-none -z-10"></div>

      <div className="container mx-auto px-6 mb-12 relative z-20">
        <SectionHeader
          label="For Founders, CIOs, and Business Leaders"
          title="Navigating the AI Frontier? We're Your Guide."
          description="Every business faces unique challenges. Swipe through to dive deeper into our engineering methodology."
        />
      </div>

      <div className="w-full overflow-hidden flex whitespace-nowrap mb-12 relative border-y border-white/5 py-4 bg-white/[0.02]">
        <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

        <div className="animate-marquee flex gap-8 px-4 items-center">
          {[...aiModels, ...aiModels, ...aiModels].map((model, i) => (
            <span key={i} className="text-sm font-medium text-gray-400 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-brand/70 animate-pulse"></span>
              {model}
            </span>
          ))}
        </div>
      </div>

      <div
        ref={carouselRef}
        className="flex overflow-x-auto gap-6 px-6 pb-8 snap-x snap-mandatory hide-scrollbar relative z-20"
      >
        {PROBLEM_CARDS.map((card, index) => {
          const isExpanded = expandedIndex === index;
          const isDimmed = expandedIndex !== null && !isExpanded;

          return (
            <div
              key={index}
              onClick={() => !isExpanded && toggleExpand(index)}
              className={`
                shrink-0 snap-center transition-all duration-500 ease-out border border-white/10 rounded-3xl p-6 md:p-8 cursor-pointer
                ${isExpanded ? 'w-[90vw] md:w-[800px] bg-gray-900/90 backdrop-blur-xl shadow-[0_0_40px_rgba(var(--primary-brand-rgb,59,130,246),0.15)] ring-1 ring-primary-brand' : 'w-[85vw] md:w-[450px] bg-white/5 hover:bg-white/10'}
                ${isDimmed ? 'opacity-40 blur-[1px] scale-[0.98]' : 'opacity-100'}
              `}
            >
              <div className="flex flex-col h-full relative">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${isExpanded ? 'bg-primary-brand/20 text-primary-brand' : 'bg-black text-gray-400 border border-white/10'}`}>
                      <span className="font-bold">{index + 1}</span>
                    </div>
                    <h3 className={`font-semibold text-white transition-all duration-300 ${isExpanded ? 'text-2xl' : 'text-xl'}`}>
                      {card.question}
                    </h3>
                  </div>

                  {isExpanded && (
                    <button
                      onClick={(e) => { e.stopPropagation(); toggleExpand(index); }}
                      className="text-gray-400 hover:text-white bg-black/20 hover:bg-black/40 p-2 rounded-full transition-all shrink-0"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                </div>

                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {card.answer}
                </p>

                <div className={`grid transition-all duration-500 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    {getDetailedContent(card.answer)}
                  </div>
                </div>

                <div className={`mt-8 transition-all duration-300 ${isExpanded ? 'opacity-0 h-0 hidden' : 'opacity-100 block'}`}>
                  <span className="text-primary-brand font-medium flex items-center group-hover:text-white transition-colors">
                    Analyze Architecture
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </span>
                </div>

                <div className={`mt-8 transition-all duration-700 delay-150 ${isExpanded ? 'opacity-100 translate-y-0 block' : 'opacity-0 translate-y-4 hidden'}`}>
                  <Button size="md" to="/contact">
                    Deploy This Solution
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* FIXED: CTA Banner is no longer tied to the expandedIndex state */}
      <div className="container mx-auto px-6 mt-6 relative z-20">
        <div className="w-full max-w-5xl mx-auto bg-gradient-to-r from-gray-900 via-black to-gray-900 border border-primary-brand/30 rounded-3xl p-8 md:p-10 relative overflow-hidden group transition-all duration-500 flex flex-col md:flex-row items-center justify-between gap-8 hover:shadow-[0_0_30px_rgba(var(--primary-brand-rgb,59,130,246),0.15)]">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-brand/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></div>

          <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 relative z-10">
            <div className="w-16 h-16 shrink-0 bg-primary-brand/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <svg className="w-8 h-8 text-primary-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Complex Edge Case?</h3>
              <p className="text-gray-400 text-sm md:text-base max-w-lg">
                Bring us your hardest unstructured data problems. We build custom orchestration layers for unique challenges.
              </p>
            </div>
          </div>

          <div className="shrink-0 w-full md:w-auto relative z-10">
            <Button
              to="/contact"
              className="w-full md:w-auto whitespace-nowrap bg-primary-brand/10 text-primary-brand border border-primary-brand/40 hover:bg-primary-brand hover:text-white hover:border-primary-brand transition-all duration-300 py-3 px-8 rounded-full font-semibold"
            >
              Consult an Engineer
            </Button>
          </div>
        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
          width: max-content;
        }
        .animate-fade-in-up {
            animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(15px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes growUp {
            from { height: 0px; opacity: 0; }
            to { height: 15px; opacity: 1; }
        }
        @keyframes shimmer {
            100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default ProblemSolverSection;