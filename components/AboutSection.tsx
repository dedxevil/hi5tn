
import React from 'react';
import SectionHeader from './ui/SectionHeader';
import Button from './ui/Button'; // Import Button

/**
 * ANIMATION COMPONENT: The "Founder Mindset" Node
 * Represents: Connection, Vision, Stability amidst chaos, and Growth.
 */
const FounderMindsetNode = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
      <svg
        className="w-full h-full max-w-[500px]"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="coreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#26d48c" />
            <stop offset="100%" stopColor="#1842b6" />
          </linearGradient>
          <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#26d48c" stopOpacity="0.4" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* 1. Background Architecture Rings (The Ecosystem) */}
        <g className="animate-[spin_60s_linear_infinite] origin-center opacity-20">
          <circle cx="200" cy="200" r="160" stroke="#fff" strokeWidth="1" strokeDasharray="10 10" />
          <circle cx="200" cy="200" r="120" stroke="#fff" strokeWidth="0.5" />
        </g>
        
        <g className="animate-[spin_40s_linear_infinite_reverse] origin-center opacity-30">
          <circle cx="200" cy="200" r="140" stroke="#26d48c" strokeWidth="1" strokeDasharray="20 40" />
        </g>

        {/* 2. Connecting Lines (The Neural Network) */}
        {/* These lines connect the center to the floating nodes */}
        <g stroke="url(#coreGradient)" strokeWidth="1.5" strokeOpacity="0.6">
          <line x1="200" y1="200" x2="200" y2="80" className="animate-pulse" />  {/* Top */}
          <line x1="200" y1="200" x2="310" y2="280" className="animate-pulse delay-75" /> {/* Right */}
          <line x1="200" y1="200" x2="90" y2="280" className="animate-pulse delay-150" />  {/* Left */}
        </g>

        {/* 3. The Central Core (The Founder/Entity) */}
        <g className="origin-center">
           {/* Glow behind core */}
          <circle cx="200" cy="200" r="50" fill="url(#glowGradient)" className="animate-pulse" />
          
          {/* Rotating Hexagon */}
          <g className="animate-[spin_10s_linear_infinite] origin-center">
            <path
              d="M200 160 L234.6 180 L234.6 220 L200 240 L165.4 220 L165.4 180 Z"
              stroke="#26d48c"
              strokeWidth="2"
              fill="rgba(24, 66, 182, 0.2)"
              filter="url(#neonGlow)"
            />
          </g>
          
          {/* Inner Static Symbol */}
          <circle cx="200" cy="200" r="15" fill="#fff" fillOpacity="0.9" />
        </g>

        {/* 4. Floating Mindset Nodes (Orbiting Elements) */}
        
        {/* Node 1: VISION (Top) */}
        <g className="animate-[bounce_3s_infinite]" style={{ transformBox: 'fill-box' }}>
          <circle cx="200" cy="80" r="24" fill="#1e293b" stroke="#26d48c" strokeWidth="2" />
          <text x="200" y="85" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="sans-serif">VISION</text>
          {/* Icon hint */}
          <circle cx="200" cy="65" r="2" fill="#26d48c" />
        </g>

        {/* Node 2: IMPACT (Bottom Right) */}
        <g className="animate-[bounce_4s_infinite] delay-100" style={{ transformBox: 'fill-box' }}>
          <circle cx="310" cy="280" r="24" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
          <text x="310" y="285" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="sans-serif">IMPACT</text>
          <circle cx="310" cy="265" r="2" fill="#3b82f6" />
        </g>

        {/* Node 3: GRIT (Bottom Left) */}
        <g className="animate-[bounce_3.5s_infinite] delay-200" style={{ transformBox: 'fill-box' }}>
          <circle cx="90" cy="280" r="24" fill="#1e293b" stroke="#a855f7" strokeWidth="2" />
          <text x="90" y="285" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="sans-serif">GRIT</text>
          <circle cx="90" cy="265" r="2" fill="#a855f7" />
        </g>

        {/* Orbiting Particles (Data/Ideas) */}
        <circle cx="200" cy="200" r="160" fill="none">
          {/* Use animate tag for X,Y position instead of animateMotion with path for better browser support */}
          <animate attributeName="cx" from="200" to="200" dur="8s" repeatCount="indefinite" begin="0s" values="200; 40; 200; 360; 200" keyTimes="0; 0.25; 0.5; 0.75; 1" />
          <animate attributeName="cy" from="40" to="40" dur="8s" repeatCount="indefinite" begin="0s" values="40; 200; 360; 200; 40" keyTimes="0; 0.25; 0.5; 0.75; 1" />
          <circle r="3" fill="#fff" />
        </circle>
        
        <circle cx="200" cy="200" r="120" fill="none">
           {/* Use animate tag for X,Y position */}
          <animate attributeName="cx" from="200" to="200" dur="5s" repeatCount="indefinite" begin="0.5s" values="200; 80; 200; 320; 200" keyTimes="0; 0.25; 0.5; 0.75; 1" />
          <animate attributeName="cy" from="320" to="320" dur="5s" repeatCount="indefinite" begin="0.5s" values="320; 200; 80; 200; 320" keyTimes="0; 0.25; 0.5; 0.75; 1" />
          <circle r="2" fill="#26d48c" />
        </circle>

      </svg>
    </div>
  );
};

const AboutSection: React.FC = () => {
  return (
    <section id="about-us" className="py-20 md:py-28 bg-background-dark relative overflow-hidden">
      <div className="container mx-auto px-6 text-center lg:text-left">
        <SectionHeader
          label="Who We Are"
          title="HI5 Technet: Architecting Your AI-Powered Future"
          description="We are a technology partner committed to building practical Generative AI Solutions and Enterprise Machine Learning platforms, grounded in robust software engineering. Our mission is to transform raw data into intelligent, real-world business advantages."
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:pr-12 relative z-10">
            <p className="text-lg text-text-muted leading-relaxed mb-8">
              At HI5 Technet, we combine deep expertise in <strong className="text-primary-brand">Custom LLM Development</strong>, intelligent app engineering, cloud-native platforms, and advanced data engineering to deliver AI systems that don't just work in theory, but excel in demanding business environments. Our teams guide you from initial concepts and complex data sets to <strong className="text-primary-brand">secure, scalable, and user-friendly AI products</strong> deployed with precision.
            </p>
            <p className="text-lg text-text-muted leading-relaxed mb-8">
              We pride ourselves on our agile methodology and our ability to seamlessly integrate cutting-edge <strong className="text-primary-brand">AI Process Automation</strong> into your existing infrastructure, ensuring minimal disruption and maximum impact. Partner with us to turn your AI aspirations into tangible, measurable results.
            </p>
            <Button to="/contact" className="inline-flex items-center text-primary-brand hover:text-secondary-brand-blue font-semibold text-lg group">
              Get to know us better
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </Button>
          </div>

          {/* Animation Column */}
          <div className="relative flex justify-center items-center">
            {/* Background Glow Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none" style={{
              background: 'radial-gradient(circle, rgba(38, 212, 140, 0.05) 0%, transparent 70%)',
              zIndex: 0
            }}></div>
            
            {/* Glass Container for the Animation */}
            <div className="relative z-10 w-full max-w-lg bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm rounded-3xl p-6 shadow-2xl">
              <div className="absolute top-0 right-0 p-4 opacity-30">
                 {/* Decorative Corner Element */}
                 {/* Removed non-standard w and h attributes */}
                 <svg viewBox="0 0 20 20" className="w-6 h-6 text-white"><path fill="currentColor" d="M0 0h20v2H0zM18 0v20h2V0z"/></svg>
              </div>
              
              <FounderMindsetNode />
              
              <div className="absolute bottom-0 left-0 p-4 opacity-30">
                 {/* Decorative Corner Element */}
                 {/* Removed non-standard w and h attributes */}
                 <svg viewBox="0 0 20 20" className="w-6 h-6 text-white"><path fill="currentColor" d="M0 18h20v2H0zM0 0v20h2V0z"/></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;