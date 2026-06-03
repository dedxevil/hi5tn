import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AIProductsSection: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('https://formspree.io/f/xdayvvwl', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setFormStatus('success');
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <section id="ai-products" className="py-24 relative overflow-hidden bg-black text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-[60%] h-[60%] bg-primary-brand/10 blur-[120px] rounded-full mix-blend-screen animate-pulse" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[60%] h-[60%] bg-blue-500/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-primary-brand tracking-widest uppercase mb-3"
          >
            Our Ecosystem
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-6"
          >
            Next-Generation <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-brand to-cyan-400">AI Products</span>
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Discover our suite of purpose-built AI tools designed to secure, automate, and visualize your enterprise data at unprecedented speeds.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mb-20">
          {/* Hipocap Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group relative p-[1px] rounded-3xl overflow-hidden bg-gradient-to-b from-white/10 to-transparent hover:from-primary-brand/50 transition-colors duration-500"
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-xl z-0" />
            <div className="relative z-10 p-10 h-full flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-brand/20 to-primary-brand/5 flex items-center justify-center border border-primary-brand/20 overflow-hidden p-2">
                    <img src="https://www.hipocap.com/assets/hipocap-logo-8nNEHG4l.webp" alt="Hipocap Logo" className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(38,212,140,0.5)]" />
                  </div>
                  <h3 className="text-3xl font-bold text-white group-hover:text-primary-brand transition-colors">Hipocap</h3>
                </div>
                <a href="https://www.hipocap.com/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-sm font-medium border border-white/10 rounded-full hover:bg-white/10 transition-colors flex items-center">
                  Visit <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </a>
              </div>
              <h4 className="text-xl font-semibold text-gray-200 mb-4">The Fortress for Your AI</h4>
              <p className="text-gray-400 mb-8 font-light">As businesses move toward Agentic AI and automated assistants, security is the #1 risk. Hipocap is the world's first "AI Guardian" designed to protect and optimize.</p>

              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary-brand/20 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-primary-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <strong className="text-gray-200 block mb-1">Neutralize Threats</strong>
                    <span className="text-gray-400 text-sm">A specialized AI Firewall that stops prompt injections and malicious data.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary-brand/20 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-primary-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <strong className="text-gray-200 block mb-1">Automate Logic</strong>
                    <span className="text-gray-400 text-sm">Seamlessly handles repetitive office tasks (Emails, Docs, Meetings) via natural language.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary-brand/20 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-primary-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <strong className="text-gray-200 block mb-1">Universal Memory</strong>
                    <span className="text-gray-400 text-sm">Uses advanced RAG (Docling) to let your team "chat" with any PDF or company document with 100% accuracy.</span>
                  </div>
                </li>
              </ul>

              {/* Hipocap Screenshots */}
              <div className="mt-2 grid grid-cols-1 gap-3">
                <div className="relative group/img overflow-hidden rounded-xl border border-white/10 bg-black/50">
                  <img src="https://www.hipocap.com/assets/dashboard-monitoring-Bkq9yTWc.png" alt="Hipocap Dashboard" className="w-full h-auto object-cover group-hover/img:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-primary-brand/20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="relative group/img overflow-hidden rounded-xl border border-white/10 bg-black/50">
                  <img src="https://www.hipocap.com/assets/shields-protection-C1pN6Ipa.png" alt="Hipocap Shields" className="w-full h-auto object-cover group-hover/img:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-primary-brand/20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="relative group/img overflow-hidden rounded-xl border border-white/10 bg-black/50">
                  <img src="https://www.hipocap.com/assets/policies-management-CZ3sL9iI.png" alt="Hipocap Policies" className="w-full h-auto object-cover group-hover/img:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-primary-brand/20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="relative group/img overflow-hidden rounded-xl border border-white/10 bg-black/50">
                  <img src="https://www.hipocap.com/assets/playground-analysis-1OIPKnZ4.png" alt="Hipocap Playground" className="w-full h-auto object-cover group-hover/img:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-primary-brand/20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Weisscam Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group relative p-[1px] rounded-3xl overflow-hidden bg-gradient-to-b from-white/10 to-transparent hover:from-cyan-500/50 transition-colors duration-500"
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-xl z-0" />
            <div className="relative z-10 p-10 h-full flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 flex items-center justify-center border border-cyan-500/20 overflow-hidden p-2">
                    <img src="https://app.weisscam.com/assets/logo_dark.png" alt="Weisscam Logo" className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]" />
                  </div>
                  <h3 className="text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors">Weisscam</h3>
                </div>
                <a href="https://app.weisscam.com/auth" target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-sm font-medium border border-white/10 rounded-full hover:bg-white/10 transition-colors flex items-center">
                  Visit <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </a>
              </div>
              <h4 className="text-xl font-semibold text-gray-200 mb-4">The Vision for Your Data</h4>
              <p className="text-gray-400 mb-8 font-light">Data is useless if you can't see the patterns. Weisscam transforms complex information into a high-speed, interactive Digital Canvas.</p>

              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <strong className="text-gray-200 block mb-1">Visual Collaboration</strong>
                    <span className="text-gray-400 text-sm">A real-time workspace for global teams to map out strategies and workflows.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <strong className="text-gray-200 block mb-1">Pattern Recognition</strong>
                    <span className="text-gray-400 text-sm">High-speed visual AI that identifies trends in massive datasets instantly.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <strong className="text-gray-200 block mb-1">Creative Intel</strong>
                    <span className="text-gray-400 text-sm">Perfect for high-stakes decision-making where clarity and speed are non-negotiable.</span>
                  </div>
                </li>
              </ul>

              {/* Weisscam Screenshots */}
              <div className="mt-2 grid grid-cols-1 gap-3">
                <div className="relative group/img overflow-hidden rounded-xl border border-white/10 bg-black/50">
                  <img src="https://www.weisscam.com/weisscam-architecture-diagram.png" alt="Weisscam Architecture" className="w-full h-auto object-cover group-hover/img:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-cyan-500/20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="relative group/img overflow-hidden rounded-xl border border-white/10 bg-black/50">
                  <img src="https://www.weisscam.com/weisscam-container-diagram.png" alt="Weisscam Container" className="w-full h-auto object-cover group-hover/img:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-cyan-500/20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>

        {/* Strategic Advantage */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-md overflow-hidden text-center"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-brand/10 blur-[80px] rounded-full mix-blend-screen pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full mix-blend-screen pointer-events-none" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">The Strategic Advantage</h3>
            <p className="text-gray-400 mb-10 text-lg">By integrating these tools, we ensure your business is:</p>
            <div className="grid sm:grid-cols-3 gap-8 mb-10 text-center">
              <div>
                <h5 className="text-white font-semibold mb-2 text-lg">Secure</h5>
                <p className="text-sm text-gray-400">Protected from the emerging risks of the AI era.</p>
              </div>
              <div>
                <h5 className="text-white font-semibold mb-2 text-lg">Efficient</h5>
                <p className="text-sm text-gray-400">Automating the "busy work" so your team focuses on growth.</p>
              </div>
              <div>
                <h5 className="text-white font-semibold mb-2 text-lg">Insightful</h5>
                <p className="text-sm text-gray-400">Visualizing data to make faster, smarter billion-dollar decisions.</p>
              </div>
            </div>
            <p className="text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-primary-brand to-cyan-400 mb-10">
              Our mission is to turn your digital infrastructure into your greatest competitive advantage.
            </p>

            {/* Clickfunnel Lead Capture Widget */}
            <div className="mt-4 p-[1px] rounded-3xl bg-gradient-to-r from-primary-brand/50 via-cyan-400/50 to-primary-brand/50 max-w-2xl mx-auto relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-brand to-cyan-400 blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-3xl"></div>
              <div className="relative bg-black/90 backdrop-blur-xl rounded-[23px] p-8 md:p-10 border border-white/5 text-center">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/5 text-red-400 text-xs font-semibold uppercase tracking-wider mb-4 animate-pulse">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                  <span>15 Slots Remaining For Q2</span>
                </div>
                <h4 className="text-2xl md:text-3xl font-extrabold text-white mb-3">Ready to Transform Your Workflow?</h4>
                <p className="text-gray-400 mb-8 text-sm md:text-base font-light leading-relaxed">
                  Join the exclusive early access program. Register your enterprise systems to receive free AI architectural blueprinting and instant access to our next-gen AI tools.
                </p>
                
                <button 
                  type="button"
                  onClick={() => window.dispatchEvent(new CustomEvent('open-funnel-modal'))}
                  className="w-full sm:w-auto px-8 py-4 rounded-full font-bold bg-primary-brand text-black hover:bg-[#1dbf7d] hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(38,212,140,0.6)] hover:shadow-[0_0_45px_rgba(38,212,140,0.9)] whitespace-nowrap inline-flex items-center justify-center space-x-2 relative overflow-hidden"
                >
                  <span className="golden-shine-line"></span>
                  <span className="relative z-20">Get Instant AI Access</span>
                </button>

                <div className="flex flex-wrap justify-center mt-6 gap-x-6 gap-y-2 text-xs text-gray-500">
                  <span className="flex items-center"><svg className="w-4 h-4 mr-1.5 text-primary-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> Instant Blueprinting</span>
                  <span className="flex items-center"><svg className="w-4 h-4 mr-1.5 text-primary-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> Active Safeguards</span>
                  <span className="flex items-center"><svg className="w-4 h-4 mr-1.5 text-primary-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> Full Developer Access</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIProductsSection;
