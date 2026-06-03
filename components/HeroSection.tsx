import React from 'react';

// --- Reusable Button Component ---
const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center justify-center border whitespace-nowrap";
  const variants = {
    primary: "bg-gradient-to-r from-[#4ade80] to-[#2dd4bf] text-[#020617] border-transparent hover:scale-105 shadow-[0_0_20px_rgba(45,212,191,0.4)]",
    outline: "bg-[#0f0c29]/80 backdrop-blur-md border-[#6366f1]/50 text-white hover:bg-[#6366f1]/20 shadow-[0_0_15px_rgba(99,102,241,0.2)]"
  };
  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const AgenticHero = () => {
  return (
    <section className="relative min-h-screen bg-[#05010f] overflow-hidden flex flex-col items-center pt-52 pb-24 font-sans selection:bg-[#a855f7] selection:text-white">

      {/* --- INJECTED ANIMATION STYLES --- */}
      <style>{`
        /* Text Gradients */
        .text-neon-gradient {
          background: linear-gradient(to right, #4ade80, #2dd4bf);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 15px rgba(45,212,191,0.4));
        }

        /* 3D Isometric Stage */
        .isometric-stage {
          transform: rotateX(60deg) rotateZ(-45deg);
          transform-style: preserve-3d;
        }

        /* 3D Isometric Stage Wrapper and Scaling System */
        .isometric-wrapper {
          width: 100%;
          max-width: 800px;
          aspect-ratio: 1 / 1;
          display: flex;
          justify-content: center;
          align-items: center;
          transform-origin: center;
          transition: transform 0.5s ease;
        }
        @media (max-width: 480px) {
          .isometric-wrapper {
            transform: scale(0.4);
          }
        }
        @media (min-width: 481px) and (max-width: 640px) {
          .isometric-wrapper {
            transform: scale(0.55);
          }
        }
        @media (min-width: 641px) and (max-width: 768px) {
          .isometric-wrapper {
            transform: scale(0.7);
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .isometric-wrapper {
            transform: scale(0.85);
          }
        }

        /* Floating Animations */
        @keyframes float-stage {
          0%, 100% { transform: translateY(0px) rotateX(60deg) rotateZ(-45deg); }
          50% { transform: translateY(-15px) rotateX(60deg) rotateZ(-45deg); }
        }
        @keyframes float-core {
          0%, 100% { transform: translateZ(40px) translateX(-50%) translateY(-50%); }
          50% { transform: translateZ(60px) translateX(-50%) translateY(-50%); }
        }
        @keyframes float-node {
          0%, 100% { transform: translateZ(20px) translateX(-50%) translateY(-50%); }
          50% { transform: translateZ(35px) translateX(-50%) translateY(-50%); }
        }
        
        /* Circuit Data Flow */
        @keyframes circuit-flow {
          to { stroke-dashoffset: -100; }
        }
        @keyframes radar-sweep {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .iso-container {
            animation: float-stage 8s ease-in-out infinite;
        }

        .core-gem { 
            animation: float-core 4s ease-in-out infinite; 
            transform-style: preserve-3d; 
        }
        
        .node-card { 
          animation: float-node 5s ease-in-out infinite; 
          transform-style: preserve-3d;
          transition: all 0.3s ease;
        }
        
        /* Interactive Hover */
        .node-card:hover { 
            transform: translateZ(60px) translateX(-50%) translateY(-50%) scale(1.05) !important; 
            filter: brightness(1.3);
            z-index: 50;
        }
        
        .data-line {
          stroke-dasharray: 10 20;
          animation: circuit-flow 1.5s linear infinite;
        }

        /* Golden Shimmer Laser Line Traverse */
        @keyframes golden-traverse {
          0% { transform: translateX(-250%) skewX(-25deg); }
          35%, 100% { transform: translateX(350%) skewX(-25deg); }
        }
        .golden-shine-line {
          position: absolute;
          top: 0;
          left: 0;
          width: 85px;
          height: 100%;
          background: linear-gradient(
            90deg, 
            transparent 0%, 
            rgba(251, 191, 36, 0.15) 20%, 
            rgba(253, 224, 71, 0.95) 50%, 
            rgba(251, 191, 36, 0.15) 80%, 
            transparent 100%
          );
          animation: golden-traverse 3.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          pointer-events: none;
          z-index: 10;
        }

        /* Alarmic Pulse Glow for Critical Security Alert */
        @keyframes alarm-pulse {
          0%, 100% {
            box-shadow: 0 0 15px rgba(239, 68, 68, 0.25), inset 0 0 10px rgba(239, 68, 68, 0.08);
            border-color: rgba(239, 68, 68, 0.25);
          }
          50% {
            box-shadow: 0 0 35px rgba(239, 68, 68, 0.7), inset 0 0 20px rgba(239, 68, 68, 0.3);
            border-color: rgba(239, 68, 68, 0.65);
          }
        }
        .alarmic-card-pulse {
          animation: alarm-pulse 2s infinite ease-in-out;
        }

        @keyframes alarm-glow-pulse {
          0%, 100% {
            opacity: 0.12;
            filter: blur(10px);
            transform: scale(1.00);
          }
          50% {
            opacity: 0.45;
            filter: blur(22px);
            transform: scale(1.035);
          }
        }
        .alarm-glow-effect {
          animation: alarm-glow-pulse 2s infinite ease-in-out;
        }
      `}</style>

      {/* --- BACKGROUND STARFIELD & NEON GLOWS --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Ambient Purple/Cyan Glows */}
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#6366f1]/10 blur-[150px] rounded-full"></div>
        <div className="absolute top-[60%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#a855f7]/15 blur-[120px] rounded-full"></div>

        {/* Starfield / Grid Dots */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
          }}>
        </div>
      </div>

      {/* --- TOP CONTENT (Text & Buttons) --- */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-5xl mx-auto mb-10">

        {/* --- MOVED TITLE (Above Hero Text, Transparent Background) --- */}
        <div className="mb-6 pointer-events-none">
          <span className="px-6 py-2 rounded-full border border-[#a855f7]/50 bg-transparent shadow-[0_0_20px_rgba(168,85,247,0.2)] text-[#e9d5ff] font-bold tracking-widest text-sm uppercase">
            Agentic Neural Engine
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white mb-4 tracking-tight drop-shadow-lg">
          Engineering the Future with <br className="hidden sm:block" />
          <span className="text-neon-gradient">Adaptive AI</span>
        </h1>

        <div className="flex flex-wrap justify-center gap-2 text-sm md:text-base font-medium mb-8 text-[#a855f7]">
          <span className="text-[#2dd4bf]">Generative AI Solutions</span>
          <span className="text-gray-500 mx-2">|</span>
          <span className="text-[#60a5fa]">Enterprise Machine Learning</span>
          <span className="text-gray-500 mx-2">|</span>
          <span className="text-[#4ade80]">AI Process Automation</span>
        </div>

        {/* Pulsing High-Curiosity Security Warning */}
        <div 
          onClick={() => window.dispatchEvent(new CustomEvent('open-funnel-modal'))}
          className="mb-10 p-[1px] rounded-2xl bg-gradient-to-r from-red-500/30 via-primary-brand/30 to-red-500/30 cursor-pointer hover:scale-[1.01] transition-all duration-300 max-w-2xl group relative"
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500 to-primary-brand blur-md opacity-10 group-hover:opacity-25 transition-opacity duration-300 alarm-glow-effect"></div>
          <div className="relative bg-[#0b051a]/95 backdrop-blur-md px-6 py-4 rounded-[15px] border border-white/5 flex flex-col sm:flex-row items-center sm:items-start text-left gap-4 alarmic-card-pulse transition-colors duration-300">
            {/* Pulsing shield icon */}
            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 flex items-center justify-center animate-pulse">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m0-6v2m0-6v2m0-6v2M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div>
              <span className="block text-xs font-semibold text-red-400 uppercase tracking-widest mb-0.5">Critical Security Alert</span>
              <p className="text-gray-300 text-sm leading-relaxed font-light">
                Enterprise prompt injection vulnerabilities are up <strong className="text-white font-semibold">400%</strong> this year. Verify your enterprise rating and deploy <strong className="text-primary-brand font-semibold">Hipocap AI Guardian</strong> immediately. <span className="text-primary-brand hover:underline inline-flex items-center ml-1 font-semibold whitespace-nowrap">Deploy Guardian Shield <svg className="w-3.5 h-3.5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg></span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-5 w-full justify-center">
          <Button 
            variant="primary" 
            className="min-w-[220px] relative overflow-hidden !bg-primary-brand !text-black shadow-[0_0_30px_rgba(38,212,140,0.6)] hover:shadow-[0_0_45px_rgba(38,212,140,0.9)] hover:scale-105 transition-all duration-300"
            onClick={() => window.dispatchEvent(new CustomEvent('open-funnel-modal'))}
          >
            <span className="golden-shine-line"></span>
            <span className="relative z-20">Get Instant AI Access</span>
          </Button>
          <Button 
            variant="outline" 
            className="min-w-[220px]"
            onClick={() => {
              const el = document.getElementById('ai-products');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Explore AI Capabilities
          </Button>
        </div>
      </div>

      {/* --- MASSIVE ISOMETRIC 3D ENGINE GRAPHIC --- */}
      <div className="relative z-10 w-full max-w-[1200px] min-h-[380px] sm:min-h-[550px] md:min-h-[750px] flex justify-center items-center perspective-[2500px] my-4 px-4 overflow-hidden">

        {/* Scaling wrapper for mobile responsiveness */}
        <div className="isometric-wrapper">
          {/* Main Isometric Container - Percentages and aspect-square */}
          <div className="isometric-stage iso-container relative w-full h-full">

          {/* Base Grid Plate - Dark purple glassmorphism */}
          <div className="absolute inset-0 border border-[#6366f1]/20 bg-[#0b051a]/70 backdrop-blur-md rounded-3xl shadow-[0_40px_100px_rgba(0,0,0,0.8),inset_0_0_60px_rgba(168,85,247,0.1)]">
            {/* Grid lines aligned perfectly */}
            <div className="absolute inset-0 opacity-20 rounded-3xl overflow-hidden"
              style={{
                backgroundImage: 'linear-gradient(to right, #6366f1 1px, transparent 1px), linear-gradient(to bottom, #6366f1 1px, transparent 1px)',
                backgroundSize: '12.5% 12.5%', /* Scalable grid size */
                backgroundPosition: 'center center'
              }}>
            </div>
          </div>

          {/* SVG Data Streams - Circuit Board Style Paths */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 800" style={{ transform: 'translateZ(10px)' }}>
            <defs>
              <linearGradient id="neonCyan" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#2dd4bf" stopOpacity="1" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient id="neonPurple" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#a855f7" stopOpacity="1" />
                <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0.2" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Top Left (Targeting) */}
            <path d="M 400 400 L 400 200 L 200 200" stroke="url(#neonPurple)" strokeWidth="3" fill="none" className="data-line" filter="url(#glow)" />
            <path d="M 380 380 L 380 220 L 220 220" stroke="#a855f7" strokeWidth="1" fill="none" opacity="0.5" />

            {/* Top Right (Revenue) */}
            <path d="M 400 400 L 600 400 L 600 200" stroke="url(#neonCyan)" strokeWidth="3" fill="none" className="data-line" style={{ animationDirection: 'reverse' }} filter="url(#glow)" />
            <path d="M 420 380 L 580 380 L 580 220" stroke="#2dd4bf" strokeWidth="1" fill="none" opacity="0.5" />

            {/* Bottom Left (App Install) */}
            <path d="M 400 400 L 200 400 L 200 600" stroke="url(#neonCyan)" strokeWidth="3" fill="none" className="data-line" filter="url(#glow)" />
            <path d="M 380 420 L 220 420 L 220 580" stroke="#2dd4bf" strokeWidth="1" fill="none" opacity="0.5" />

            {/* Bottom Right (Engagement) */}
            <path d="M 400 400 L 400 600 L 600 600" stroke="url(#neonPurple)" strokeWidth="3" fill="none" className="data-line" style={{ animationDirection: 'reverse' }} filter="url(#glow)" />
            <path d="M 420 420 L 420 580 L 580 580" stroke="#a855f7" strokeWidth="1" fill="none" opacity="0.5" />
          </svg>

          {/* --- CENTRAL CORE: Centered relative to 50% / 50% --- */}
          <div className="absolute top-1/2 left-1/2 core-gem w-[100px] h-[100px] flex items-center justify-center">
            {/* Base plate */}
            <div className="absolute w-[120px] h-[120px] bg-[#6366f1]/20 border border-[#2dd4bf]/40 shadow-[0_0_40px_rgba(45,212,191,0.4)]" style={{ transform: 'translateZ(0px)' }}></div>
            {/* Middle layer */}
            <div className="absolute w-[80px] h-[80px] bg-gradient-to-tr from-[#6366f1]/40 to-[#a855f7]/40 border border-[#a855f7] shadow-[0_0_30px_#a855f7]" style={{ transform: 'translateZ(20px)' }}></div>
            {/* Top Gem */}
            <div className="absolute w-[50px] h-[50px] bg-[#2dd4bf]/80 border-2 border-white shadow-[0_0_50px_#2dd4bf,inset_0_0_20px_white]" style={{ transform: 'translateZ(40px)' }}></div>

            {/* Central Badge below core */}
            <div className="absolute -bottom-[80px] left-1/2 -translate-x-1/2 w-16 h-16 bg-[#0f0c29]/90 border-2 border-[#a855f7] rounded-lg flex items-center justify-center shadow-[0_0_20px_#a855f7] backdrop-blur-md" style={{ transform: 'translateZ(10px) rotateX(-90deg)', transformOrigin: 'top' }}>
              <span className="text-white font-black text-xl tracking-widest drop-shadow-[0_0_8px_#fff]">AI</span>
            </div>
          </div>

          {/* --- NODE 1: Targeting (Top Left - 25% 25%) --- */}
          <div className="absolute top-[25%] left-[25%] node-card w-[25%] h-[25%] min-w-[150px] min-h-[150px] max-w-[200px] max-h-[200px]">
            {/* 3D Base Plates */}
            <div className="absolute inset-0 bg-[#0f0c29]/80 border border-[#a855f7]/40 shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-md" style={{ transform: 'translateZ(0px)' }}></div>
            <div className="absolute inset-2 border border-[#a855f7]/20 bg-gradient-to-br from-[#a855f7]/10 to-transparent" style={{ transform: 'translateZ(10px)' }}></div>

            {/* Isometric Label */}
            <span className="absolute bottom-4 left-4 text-white font-bold text-sm tracking-widest uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,1)]" style={{ transform: 'translateZ(15px)' }}>
              Targeting
            </span>

            {/* Radar Visual */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/5 h-3/5 rounded-full border border-[#a855f7]/50 shadow-[0_0_20px_rgba(168,85,247,0.3)]" style={{ transform: 'translateZ(25px)' }}>
              <div className="absolute inset-0 rounded-full border border-[#a855f7]/20 scale-[0.6]"></div>
              <div className="absolute w-full h-[1px] bg-[#a855f7]/30 top-1/2"></div>
              <div className="absolute h-full w-[1px] bg-[#a855f7]/30 left-1/2"></div>
              {/* Sweeping scanner */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent to-[#a855f7]/40 origin-center" style={{ animation: 'radar-sweep 4s linear infinite' }}></div>
              {/* Blips */}
              <div className="absolute top-[30%] left-[60%] w-2 h-2 bg-white rounded-full shadow-[0_0_8px_#fff]"></div>
              <div className="absolute top-[70%] left-[40%] w-1.5 h-1.5 bg-[#2dd4bf] rounded-full shadow-[0_0_8px_#2dd4bf]"></div>
            </div>
          </div>

          {/* --- NODE 2: Revenue (Top Right - 25% 75%) --- */}
          <div className="absolute top-[25%] left-[75%] node-card w-[25%] h-[25%] min-w-[150px] min-h-[150px] max-w-[200px] max-h-[200px]">
            <div className="absolute inset-0 bg-[#0f0c29]/80 border border-[#6366f1]/40 shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-md" style={{ transform: 'translateZ(0px)' }}></div>
            <div className="absolute inset-2 border border-[#6366f1]/20 bg-gradient-to-br from-[#6366f1]/10 to-transparent" style={{ transform: 'translateZ(10px)' }}></div>

            <span className="absolute bottom-4 right-4 text-white font-bold text-sm tracking-widest uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,1)]" style={{ transform: 'translateZ(15px)' }}>
              Revenue
            </span>

            {/* Line Graph Visual */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-1/2" style={{ transform: 'translateZ(25px)' }}>
              {/* Axis */}
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/20"></div>
              <div className="absolute bottom-0 left-0 h-full w-[1px] bg-white/20"></div>
              {/* SVG Wave */}
              <svg viewBox="0 0 160 100" className="absolute inset-0 w-full h-full overflow-visible">
                <defs>
                  <linearGradient id="revGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M 0 80 Q 40 20, 80 50 T 160 10" fill="url(#revGrad)" />
                <path d="M 0 80 Q 40 20, 80 50 T 160 10" fill="none" stroke="#2dd4bf" strokeWidth="3" filter="url(#glow)" />
                {/* Points */}
                <circle cx="80" cy="50" r="4" fill="#a855f7" stroke="white" strokeWidth="2" />
                <circle cx="160" cy="10" r="4" fill="#2dd4bf" stroke="white" strokeWidth="2" />
              </svg>
            </div>
          </div>

          {/* --- NODE 3: App Install (Bottom Left - 75% 25%) --- */}
          <div className="absolute top-[75%] left-[25%] node-card w-[25%] h-[25%] min-w-[150px] min-h-[150px] max-w-[200px] max-h-[200px]">
            <div className="absolute inset-0 bg-[#0f0c29]/80 border border-[#2dd4bf]/40 shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-md" style={{ transform: 'translateZ(0px)' }}></div>
            <div className="absolute inset-2 border border-[#2dd4bf]/20 bg-gradient-to-br from-[#2dd4bf]/10 to-transparent" style={{ transform: 'translateZ(10px)' }}></div>

            <span className="absolute bottom-4 left-4 text-white font-bold text-sm tracking-widest uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,1)]" style={{ transform: 'translateZ(15px)' }}>
              App Install
            </span>

            {/* 3D Bar Chart Visual */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-1/2 flex items-end gap-[10%]" style={{ transform: 'translateZ(25px)' }}>
              {/* Arrow up */}
              <svg className="absolute -top-6 -right-2 w-10 h-10 text-[#2dd4bf] drop-shadow-[0_0_10px_#2dd4bf]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>

              {/* Bars */}
              <div className="w-[20%] bg-gradient-to-t from-[#6366f1]/80 to-[#a855f7] h-[30%] border border-[#a855f7] shadow-lg"></div>
              <div className="w-[20%] bg-gradient-to-t from-[#6366f1]/80 to-[#a855f7] h-[50%] border border-[#a855f7] shadow-lg"></div>
              <div className="w-[20%] bg-gradient-to-t from-[#6366f1]/80 to-[#a855f7] h-[75%] border border-[#a855f7] shadow-lg"></div>
              <div className="w-[20%] bg-gradient-to-t from-[#2dd4bf]/80 to-[#4ade80] h-[100%] border border-white shadow-[0_0_15px_#2dd4bf]"></div>
            </div>
          </div>

          {/* --- NODE 4: Engagement (Bottom Right - 75% 75%) --- */}
          <div className="absolute top-[75%] left-[75%] node-card w-[25%] h-[25%] min-w-[150px] min-h-[150px] max-w-[200px] max-h-[200px]">
            <div className="absolute inset-0 bg-[#0f0c29]/80 border border-[#a855f7]/40 shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-md" style={{ transform: 'translateZ(0px)' }}></div>
            <div className="absolute inset-2 border border-[#a855f7]/20 bg-gradient-to-br from-[#a855f7]/10 to-transparent" style={{ transform: 'translateZ(10px)' }}></div>

            <span className="absolute bottom-4 right-4 text-white font-bold text-sm tracking-widest uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,1)]" style={{ transform: 'translateZ(15px)' }}>
              Engagement
            </span>

            {/* Phone UI Mockups Visual */}
            <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-3/4 h-3/5 flex justify-center relative" style={{ transform: 'translateZ(25px)' }}>
              {/* Phone 1 (Back) */}
              <div className="absolute top-[10px] -left-[10px] w-[50px] h-[90px] border border-[#6366f1]/50 bg-[#05010f]/90 rounded-lg shadow-lg opacity-60"></div>
              {/* Phone 2 (Middle) */}
              <div className="absolute top-[5px] left-[15px] w-[55px] h-[100px] border border-[#a855f7]/60 bg-[#05010f]/95 rounded-lg shadow-[0_5px_15px_rgba(0,0,0,0.8)] z-10 opacity-80"></div>
              {/* Phone 3 (Front Focus) */}
              <div className="absolute top-0 right-[10px] w-[60px] h-[110px] border border-[#2dd4bf] bg-[#0b051a] rounded-lg shadow-[0_10px_30px_rgba(45,212,191,0.2)] z-20 flex flex-col p-1.5 gap-2 overflow-hidden">
                <div className="w-4 h-1 bg-white/20 rounded-full mx-auto"></div>
                <div className="flex gap-1 items-center">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#a855f7] to-[#2dd4bf]"></div>
                  <div className="h-1.5 flex-1 bg-white/20 rounded"></div>
                </div>
                <div className="w-full h-8 bg-white/5 border border-white/10 rounded"></div>
                <div className="flex gap-1 mt-auto">
                  <div className="w-full h-4 bg-[#2dd4bf]/20 rounded"></div>
                  <div className="w-full h-4 bg-[#a855f7]/20 rounded"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
        </div>
      </div>

      {/* --- BOTTOM FEATURES LIST --- */}
      <div className="relative z-20 mt-10 w-full max-w-5xl">
        <ul className="flex flex-col items-center sm:flex-row flex-wrap justify-center gap-6 md:gap-16 text-gray-300 text-sm sm:text-base font-semibold tracking-wide">
          <li className="flex items-center hover:text-white transition-colors cursor-pointer group">
            <svg className="w-5 h-5 text-[#4ade80] mr-2 group-hover:drop-shadow-[0_0_8px_#4ade80]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
            Custom LLM Development
          </li>
          <li className="flex items-center hover:text-white transition-colors cursor-pointer group">
            <svg className="w-5 h-5 text-[#4ade80] mr-2 group-hover:drop-shadow-[0_0_8px_#4ade80]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
            Cloud-native AI Apps
          </li>
          <li className="flex items-center hover:text-white transition-colors cursor-pointer group">
            <svg className="w-5 h-5 text-[#4ade80] mr-2 group-hover:drop-shadow-[0_0_8px_#4ade80]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
            Intelligent Mobile UI
          </li>
        </ul>
      </div>

    </section>
  );
};

export default AgenticHero;