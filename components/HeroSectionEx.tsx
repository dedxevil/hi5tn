import React, { useState, useEffect, useMemo } from 'react';
import Button from './ui/Button'; // Ensure this path is correct

// --- ANIMATION CONFIGURATION ---

const GRID_SIZE = 5;
const MIN_COORD = 0;
const MAX_COORD = 100;
const TICK_RATE = 2000; // Speed: moves every 2 seconds (2000ms)

// Generate initial dots ensuring no overlaps
const generateInitialDots = () => {
  const dots = [];
  const occupied = new Set<string>();
  const numDots = 15; // Number of dots on the grid

  for (let i = 0; i < numDots; i++) {
    let x, y;
    // Keep generating random coordinates until we find an empty spot
    do {
      x = Math.floor(Math.random() * 21) * GRID_SIZE; // Random multiple of 5 between 0 and 100
      y = Math.floor(Math.random() * 21) * GRID_SIZE;
    } while (occupied.has(`${x},${y}`));

    occupied.add(`${x},${y}`);
    
    dots.push({
      id: `gridDot-${i}`,
      x,
      y,
      gradientId: Math.random() > 0.5 ? 'dotGradient1' : 'dotGradient2',
    });
  }
  return dots;
};

// --- COMPONENT ---

const HeroSection: React.FC = () => {
  // Store the initial generation in a memo, then feed it to state
  const initialDots = useMemo(() => generateInitialDots(), []);
  const [dots, setDots] = useState(initialDots);

  useEffect(() => {
    // This is our "Game Loop" that calculates the next move for every dot
    const moveDots = () => {
      setDots((prevDots) => {
        const nextDots = [...prevDots];
        // Track occupied spaces to prevent collisions in real-time
        const currentOccupied = new Set(prevDots.map(d => `${d.x},${d.y}`));

        for (let i = 0; i < nextDots.length; i++) {
          const dot = nextDots[i];
          
          // Calculate Up, Down, Left, Right moves
          const possibleMoves = [
            { x: dot.x + GRID_SIZE, y: dot.y },
            { x: dot.x - GRID_SIZE, y: dot.y },
            { x: dot.x, y: dot.y + GRID_SIZE },
            { x: dot.x, y: dot.y - GRID_SIZE },
          ].filter(
            (pos) =>
              pos.x >= MIN_COORD &&
              pos.x <= MAX_COORD && // Stay within horizontal bounds
              pos.y >= MIN_COORD &&
              pos.y <= MAX_COORD && // Stay within vertical bounds
              !currentOccupied.has(`${pos.x},${pos.y}`) // Don't crash into another dot
          );

          if (possibleMoves.length > 0) {
            // Pick a random valid adjacent grid intersection
            const move = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
            
            // Free up the old space, occupy the new space
            currentOccupied.delete(`${dot.x},${dot.y}`);
            currentOccupied.add(`${move.x},${move.y}`);
            
            // Apply the new coordinates
            nextDots[i] = { ...dot, x: move.x, y: move.y };
          }
        }
        return nextDots;
      });
    };

    // Run the movement calculation periodically
    const interval = setInterval(moveDots, TICK_RATE);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background-dark pt-32 pb-20">
      
      {/* --- INJECTED STYLES --- */}
      <style>{`
        @keyframes shine-move {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        .brand-shine-text {
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          background-image: linear-gradient(110deg, #26d48c 45%, #ffffff 50%, #26d48c 55%);
          background-size: 250% 100%;
          animation: shine-move 3s linear infinite;
          filter: drop-shadow(0 0 8px rgba(38, 212, 140, 0.3));
        }

        /* Use CSS transitions to smoothly glide the dots to their new React state coordinates */
        .moving-dot {
          transition: cx ${TICK_RATE}ms linear, cy ${TICK_RATE}ms linear;
        }
      `}</style>

      {/* --- BACKGROUND LAYER: GRID WITH FADE MASK --- */}
      <div 
        className="absolute inset-0 z-0"
        style={{
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 95%)',
            maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 95%)'
        }}
      >
        <svg 
            className="w-full h-full" 
            viewBox="0 0 100 100" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice" 
        >
            <defs>
                <linearGradient id="dotGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#26d48c" />
                    <stop offset="100%" stopColor="#1EC77F" />
                </linearGradient>
                <linearGradient id="dotGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1842b6" />
                    <stop offset="100%" stopColor="#0a2a7a" />
                </linearGradient>
            </defs>

            {/* GRID LINES */}
            {[...Array(21)].map((_, i) => (
                <line key={`h-${i}`} x1="0" y1={i * 5} x2="100" y2={i * 5} stroke="white" strokeOpacity="0.08" strokeWidth="0.1" />
            ))}
            {[...Array(21)].map((_, i) => (
                <line key={`v-${i}`} x1={i * 5} y1="0" x2={i * 5} y2="100" stroke="white" strokeOpacity="0.08" strokeWidth="0.1" />
            ))}

            {/* MOVING DOTS */}
            {dots.map((dot) => (
                <circle
                    key={dot.id}
                    r="1.2"
                    fill={`url(#${dot.gradientId})`}
                    cx={dot.x} 
                    cy={dot.y} 
                    className="moving-dot"
                />
            ))}
        </svg>
      </div>

      {/* --- CONTENT LAYER: CENTERED --- */}
      <div className="relative z-20 container mx-auto px-6 flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-8 animate-fade-in-up">
            <span className="px-4 py-1.5 rounded-full border border-white/10 bg-black/30 backdrop-blur-md text-gray-300 text-xs font-bold tracking-widest uppercase">
                Propelling forward with AI innovation
            </span>
          </div>

          {/* Headline */}
          <h1 className="max-w-5xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white mb-8 animate-fade-in-up">
            Engineering the Future with <br className="hidden md:block"/>
            <span className="brand-shine-text">Adaptive AI</span>
          </h1>

          {/* Subtext */}
          <p className="max-w-3xl text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 animate-fade-in-up delay-100 leading-relaxed drop-shadow-md">
            HI5 Technet empowers enterprises to harness <strong className="text-primary-brand">Generative AI Solutions</strong>, <strong className="text-secondary-brand-blue">Enterprise Machine Learning</strong>, and <strong className="text-primary-brand">AI Process Automation</strong>.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 w-full justify-center animate-fade-in-up delay-200">
            <Button size="lg" to="/contact" className="min-w-[200px] shadow-[0_0_20px_rgba(38,212,140,0.15)] hover:shadow-[0_0_30px_rgba(38,212,140,0.4)] transition-shadow">
                Schedule AI Strategy Call
            </Button>
            <Button variant="outline" size="lg" to="/ai-solutions" className="min-w-[200px] bg-black/40 backdrop-blur-sm border-white/20 hover:bg-black/60">
                Explore AI Capabilities
            </Button>
          </div>

          {/* Features */}
          <div className="mt-16 w-full flex justify-center">
             <ul className="flex flex-col md:flex-row gap-6 md:gap-12 text-gray-400 text-sm sm:text-base animate-fade-in-up delay-300">
                <li className="flex items-center justify-center hover:text-white transition-colors">
                  <svg className="w-5 h-5 text-primary-brand mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  Custom LLM Development
                </li>
                <li className="flex items-center justify-center hover:text-white transition-colors">
                  <svg className="w-5 h-5 text-primary-brand mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  Cloud-native AI
                </li>
                <li className="flex items-center justify-center hover:text-white transition-colors">
                  <svg className="w-5 h-5 text-primary-brand mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  Global Tech Partner
                </li>
              </ul>
          </div>
      </div>
    </section>
  );
};

export default HeroSection;