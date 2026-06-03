import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Types for form values
interface FormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  message: string;
}

// AI Solutions definition
interface SolutionItem {
  id: string;
  title: string;
  description: string;
  type: 'product' | 'service';
  isFeatured?: boolean;
  color: string; // 'green' | 'cyan' | 'brand'
  icon: React.ReactNode;
}

const AiClickFunnel: React.FC = () => {
  // Form input states
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    message: '',
  });

  // Selection states
  const [selectedSolutions, setSelectedSolutions] = useState<string[]>([]);
  const [timeline, setTimeline] = useState<string>('Immediate');
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [characterCount, setCharacterCount] = useState<number>(0);

  // Handle inputs
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === 'message') {
      setCharacterCount(value.length);
    }
  };

  // Toggle selection for solutions
  const toggleSolution = (id: string) => {
    setSelectedSolutions((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Submit handler (Async submission to Formspree)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedSolutions.length === 0) {
      alert('Please select at least one AI product or service.');
      return;
    }

    setFormStatus('submitting');

    // Create readable content for the selected products/services
    const solutionNames = SOLUTIONS.filter(s => selectedSolutions.includes(s.id))
      .map(s => `${s.title} (${s.type})`)
      .join(', ');

    // Prepare full form body
    const submissionBody = new FormData();
    submissionBody.append('name', formData.name);
    submissionBody.append('email', formData.email);
    submissionBody.append('phone', formData.phone);
    submissionBody.append('company', formData.company);
    submissionBody.append('website', formData.website);
    submissionBody.append('selected_solutions', solutionNames);
    submissionBody.append('timeline', timeline);
    submissionBody.append('message', formData.message);

    try {
      const response = await fetch('https://formspree.io/f/xdayvvwl', {
        method: 'POST',
        body: submissionBody,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', phone: '', company: '', website: '', message: '' });
        setSelectedSolutions([]);
        setCharacterCount(0);
      } else {
        setFormStatus('error');
      }
    } catch (err) {
      setFormStatus('error');
    }
  };

  // AI Solutions list (with icons)
  const SOLUTIONS: SolutionItem[] = [
    {
      id: 'hipocap',
      title: 'Hipocap AI Guardian',
      description: 'The world\'s first specialized AI Firewall. Protects agents and LLMs from prompt injection, leakage, and threats.',
      type: 'product',
      isFeatured: true,
      color: 'green',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: 'weisscam',
      title: 'Weisscam Data Canvas',
      description: 'Digital visual canvas that maps complex enterprise data streams and AI metrics to high-speed visual interfaces.',
      type: 'product',
      isFeatured: true,
      color: 'cyan',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      )
    },
    {
      id: 'chatbots',
      title: 'Conversational AI Agents',
      description: 'Multi-Agent autonomous assistants designed to handle workspace workflows, support, and semantic document analysis.',
      type: 'product',
      color: 'green',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )
    },
    {
      id: 'consulting',
      title: 'Strategic AI Consulting',
      description: 'Custom AI readiness assessment, enterprise strategy, security analysis, and phased development roadmapping.',
      type: 'service',
      color: 'brand',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      id: 'finetuning',
      title: 'ML Model Fine-Tuning',
      description: 'Specializing LLMs and proprietary deep learning models on your custom datasets under secure private environments.',
      type: 'service',
      color: 'brand',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      )
    },
    {
      id: 'integration',
      title: 'Enterprise AI Integration',
      description: 'Seamlessly layering AI intelligence into your existing ERPs, CRMs, legacy pipelines, and custom enterprise databases.',
      type: 'service',
      color: 'brand',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a2 2 0 002 2h3a1 1 0 011 1v3a2 2 0 002 2 2 2 0 010 4 2 2 0 00-2 2v3a1 1 0 01-1 1h-3a2 2 0 00-2 2 2 2 0 01-4 0 2 2 0 00-2-2H5a1 1 0 01-1-1v-3a2 2 0 00-2-2 2 2 0 010-4 2 2 0 002-2V7a1 1 0 011-1h3a2 2 0 002-2V4z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-10 md:py-16 relative overflow-hidden bg-black text-white px-4 md:px-10">
      {/* Background radial glow */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-[60%] h-[60%] bg-primary-brand/10 blur-[130px] rounded-full mix-blend-screen" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[60%] h-[60%] bg-cyan-500/10 blur-[130px] rounded-full mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-8 md:pt-0">
        
        {/* LEFT COLUMN: Visual Text, Contacts, Benefits */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-primary-brand/30 bg-primary-brand/5 text-primary-brand text-xs font-semibold uppercase tracking-wider mb-6 animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-brand"></span>
              <span>Get In Touch</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Ready to start<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-brand via-emerald-400 to-cyan-400">
                an AI project?
              </span>
            </h1>

            <p className="text-gray-400 text-lg mb-8 font-light leading-relaxed max-w-lg">
              Fill out the form and our specialized AI architects will get back to you within 24 business hours to schedule a discovery call.
            </p>

            {/* Core Advantages */}
            <div className="space-y-6 mb-10">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-brand/10 border border-primary-brand/30 flex items-center justify-center mt-1">
                  <svg className="w-3.5 h-3.5 text-primary-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-base">Expert Team</h4>
                  <p className="text-gray-400 text-sm mt-0.5">Dedicated research scientists & engineers for your custom systems.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-brand/10 border border-primary-brand/30 flex items-center justify-center mt-1">
                  <svg className="w-3.5 h-3.5 text-primary-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-base">Fast Response</h4>
                  <p className="text-gray-400 text-sm mt-0.5">We review your project goals and reply with custom next steps quickly.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Local Contact Info (styled beautifully as cards) */}
          <div className="pt-8 border-t border-white/10 space-y-4 text-gray-400 text-sm">
            <div className="flex items-center space-x-3.5 group">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-primary-brand flex items-center justify-center group-hover:bg-primary-brand/10 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <span className="block text-xs text-gray-500 uppercase tracking-wider font-semibold">Direct Call</span>
                <span className="text-white hover:text-primary-brand transition-colors font-medium">
                  +91 86678 42296 / +91 93605 72528
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-3.5 group">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-cyan-400 flex items-center justify-center group-hover:bg-cyan-500/10 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <span className="block text-xs text-gray-500 uppercase tracking-wider font-semibold">Email Us</span>
                <a href="mailto:info@hi5technet.com" className="text-white hover:text-cyan-400 transition-colors font-medium">
                  info@hi5technet.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-3.5 group">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-purple-400 flex items-center justify-center group-hover:bg-purple-500/10 transition-colors mt-0.5">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <span className="block text-xs text-gray-500 uppercase tracking-wider font-semibold">Head Office</span>
                <span className="text-white leading-relaxed font-medium">
                  11/1, Surya Nagar Ext: 4, Ondipudur,<br />
                  Coimbatore, Tamil Nadu - 641016
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Modern Form Funnel */}
        <div className="lg:col-span-7">
          <div className="bg-[#0b0c10] border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl relative">
            <AnimatePresence mode="wait">
              {formStatus === 'success' ? (
                // SUCCESS STATE
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-12 px-4"
                >
                  <div className="w-20 h-20 rounded-full bg-primary-brand/10 border border-primary-brand/30 text-primary-brand flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(38,212,140,0.2)]">
                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-4">Inquiry Received!</h3>
                  <p className="text-gray-400 text-lg max-w-md mx-auto mb-8 font-light leading-relaxed">
                    Thank you! Your AI inquiry has been securely sent. One of our enterprise architects will contact you within 24 business hours to discuss your next breakthrough.
                  </p>

                  <button
                    onClick={() => setFormStatus('idle')}
                    className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 hover:border-white/20 transition-all text-sm"
                  >
                    Send another inquiry
                  </button>
                </motion.div>
              ) : (
                // FORM STATE
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >
                  {/* Dynamic validation error warning */}
                  {formStatus === 'error' && (
                    <div className="p-4 bg-red-950/40 border border-red-500/30 rounded-2xl flex items-center space-x-3 text-red-300 text-sm">
                      <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span>Something went wrong. Please check your network and try again.</span>
                    </div>
                  )}

                  {/* 1. TEXT INPUTS GRID */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2.5">
                        What's your name? <span className="text-primary-brand font-bold">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                        className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary-brand focus:ring-1 focus:ring-primary-brand transition-all text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2.5">
                        What's your email? <span className="text-primary-brand font-bold">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary-brand focus:ring-1 focus:ring-primary-brand transition-all text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-gray-300 text-sm font-medium mb-2.5">
                        What's your phone number? <span className="text-primary-brand font-bold">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter phone number"
                        className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary-brand focus:ring-1 focus:ring-primary-brand transition-all text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-gray-300 text-sm font-medium mb-2.5">
                        What's your company?
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Company name"
                        className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary-brand focus:ring-1 focus:ring-primary-brand transition-all text-sm"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="website" className="block text-gray-300 text-sm font-medium mb-2.5">
                        Current website URL
                      </label>
                      <input
                        type="url"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        placeholder="https://example.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary-brand focus:ring-1 focus:ring-primary-brand transition-all text-sm"
                      />
                    </div>
                  </div>

                  {/* 2. INTERACTIVE SELECTION GRID */}
                  <div>
                    <label className="block text-gray-300 text-sm font-semibold mb-4">
                      What are you looking for? <span className="text-primary-brand font-bold">*</span>
                      <span className="text-xs text-gray-500 font-normal block mt-1">Select one or more items. Products are highly recommended.</span>
                    </label>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {SOLUTIONS.map((sol) => {
                        const isSelected = selectedSolutions.includes(sol.id);
                        
                        let borderStyle = 'border-white/10 hover:border-white/20 hover:bg-white/5';
                        let accentText = 'text-primary-brand';
                        let shadowGlow = '';

                        if (isSelected) {
                          if (sol.color === 'green') {
                            borderStyle = 'border-primary-brand bg-primary-brand/5 ring-1 ring-primary-brand/50';
                            shadowGlow = 'shadow-[0_0_20px_rgba(38,212,140,0.15)]';
                          } else if (sol.color === 'cyan') {
                            borderStyle = 'border-cyan-400 bg-cyan-400/5 ring-1 ring-cyan-400/50';
                            accentText = 'text-cyan-400';
                            shadowGlow = 'shadow-[0_0_20px_rgba(34,211,238,0.15)]';
                          } else {
                            borderStyle = 'border-primary-brand bg-primary-brand/5 ring-1 ring-primary-brand/50';
                            shadowGlow = 'shadow-[0_0_20px_rgba(38,212,140,0.15)]';
                          }
                        }

                        return (
                          <div
                            key={sol.id}
                            onClick={() => toggleSolution(sol.id)}
                            className={`relative border rounded-2xl p-5 cursor-pointer transition-all duration-300 ease-in-out select-none flex flex-col justify-between ${borderStyle} ${shadowGlow}`}
                          >
                            <div>
                              <div className="flex items-start justify-between">
                                {/* Icon container */}
                                <div className={`p-2.5 rounded-xl ${isSelected ? 'bg-white/10 ' + accentText : 'bg-white/5 text-gray-400'} transition-colors`}>
                                  {sol.icon}
                                </div>

                                {/* Badges */}
                                {sol.isFeatured && (
                                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-primary-brand to-cyan-400 text-black shadow-md shadow-primary-brand/20 animate-pulse">
                                    AI Product
                                  </span>
                                )}
                                {!sol.isFeatured && (
                                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-600 text-white shadow-md shadow-blue-600/30 animate-pulse">
                                    AI Service
                                  </span>
                                )}
                              </div>

                              <h4 className="text-white font-bold text-base mt-4">{sol.title}</h4>
                              <p className="text-gray-400 text-xs mt-2 font-light leading-relaxed">{sol.description}</p>
                            </div>

                            {/* Checkbox indicator */}
                            <div className="mt-4 flex justify-end">
                              <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                                isSelected 
                                  ? 'bg-primary-brand border-primary-brand text-black scale-110' 
                                  : 'border-white/20 text-transparent'
                              }`}>
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* 3. TIMELINE SELECTOR */}
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-3">
                      What's your preferred timeline? <span className="text-primary-brand font-bold">*</span>
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {['Immediate', '1 - 2 Months', '3 - 6 Months', 'Flexible'].map((t) => {
                        const isActive = timeline === t;
                        return (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setTimeline(t)}
                            className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide border transition-all duration-300 ${
                              isActive
                                ? 'bg-white text-black border-white shadow-lg scale-105'
                                : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/25 hover:bg-white/10'
                            }`}
                          >
                            {t}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 4. MESSAGE TEXTAREA */}
                  <div>
                    <div className="flex justify-between items-center mb-2.5">
                      <label htmlFor="message" className="text-gray-300 text-sm font-medium">
                        Project Details <span className="text-primary-brand font-bold">*</span>
                      </label>
                      <span className="text-xs text-gray-500">{characterCount} / 1000 characters</span>
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      maxLength={1000}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us a little more about your project goals and requirements..."
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary-brand focus:ring-1 focus:ring-primary-brand transition-all text-sm resize-none"
                    ></textarea>
                  </div>

                  {/* 5. SUBMIT BUTTON */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="w-full py-4 rounded-xl font-bold bg-primary-brand hover:bg-[#1dbf7d] text-black shadow-[0_0_30px_rgba(38,212,140,0.3)] hover:shadow-[0_0_35px_rgba(38,212,140,0.5)] transition-all duration-300 flex items-center justify-center space-x-2 group hover:scale-[1.01] disabled:opacity-70 disabled:hover:scale-100 disabled:hover:shadow-[0_0_30px_rgba(38,212,140,0.3)] relative overflow-hidden"
                    >
                      <span className="golden-shine-line"></span>
                      {formStatus === 'submitting' ? (
                        <div className="relative z-20 flex items-center justify-center">
                          <svg className="animate-spin h-5 w-5 text-black mr-2" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Sending Inquiry...</span>
                        </div>
                      ) : (
                        <div className="relative z-20 flex items-center justify-center space-x-2">
                          <span>Send Message</span>
                          <svg className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                      )}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AiClickFunnel;
