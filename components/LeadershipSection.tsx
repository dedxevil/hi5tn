
import React from 'react';
import SectionHeader from './ui/SectionHeader';

const LeadershipSection: React.FC = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-[#05010f]">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary-brand/10 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-secondary-brand-blue/10 blur-[120px] rounded-full pointer-events-none"></div>

            <style>{`
                @keyframes float-avatar {
                    0%, 100% { transform: translateY(0px) scale(1); }
                    50% { transform: translateY(-10px) scale(1.02); }
                }
                @keyframes slide-bubble {
                    from { opacity: 0; transform: translateY(20px) scale(0.95); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }
                @keyframes pulse-ring {
                    0% { transform: scale(0.95); opacity: 0.8; }
                    50% { transform: scale(1.1); opacity: 0.3; }
                    100% { transform: scale(0.95); opacity: 0.8; }
                }
                @keyframes rotate-status {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .avatar-animation {
                    animation: float-avatar 4s ease-in-out infinite;
                }
                .chat-bubble {
                    animation: slide-bubble 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
                .status-ring {
                    position: absolute;
                    inset: -8px;
                    border: 3px dashed;
                    border-radius: 9999px;
                    animation: rotate-status 10s linear infinite;
                }
                @media (min-width: 768px) {
                    .bubble-tail-left::after {
                        content: '';
                        position: absolute;
                        left: -10px;
                        top: 20px;
                        border-width: 10px 10px 10px 0;
                        border-color: transparent rgba(255, 255, 255, 0.05) transparent transparent;
                    }
                    .bubble-tail-right::after {
                        content: '';
                        position: absolute;
                        right: -10px;
                        top: 20px;
                        border-width: 10px 0 10px 10px;
                        border-color: transparent transparent transparent rgba(255, 255, 255, 0.05);
                    }
                }
            `}</style>

            <div className="container mx-auto px-6 relative z-10">
                <SectionHeader
                    label="Meet the Visionaries"
                    title="Leadership at HI5 Technet"
                    description="The minds driving our mission to democratize enterprise-grade AI."
                    className="mb-20"
                />

                <div className="flex flex-col gap-16 max-w-6xl mx-auto">
                    
                    {/* Founder Row */}
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 animate-fade-in-up">
                        {/* Avatar */}
                        <div className="relative shrink-0 avatar-animation">
                            <div className="absolute inset-0 bg-primary-brand/20 rounded-full blur-xl scale-125"></div>
                            {/* WhatsApp Style Status Ring */}
                            <div className="status-ring border-[#26d48c]/60"></div>
                            <div className="status-ring border-[#26d48c]/30 scale-110" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
                            
                            <div className="w-40 h-40 md:w-56 md:h-56 rounded-full border-2 border-primary-brand/30 relative z-10 overflow-hidden bg-[#0A192F] shadow-2xl">
                                <img 
                                    src="/avatars/gowtham.png" 
                                    alt="Gowtham - Founder" 
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Gowtham&background=26d48c&color=fff&size=512';
                                    }}
                                />
                            </div>
                            {/* Online Indicator */}
                            <div className="absolute bottom-2 right-2 w-6 h-6 bg-[#26d48c] border-4 border-[#05010f] rounded-full z-20 shadow-lg"></div>
                        </div>

                        {/* Content / Bubble */}
                        <div className="flex-1">
                            <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-3xl backdrop-blur-md relative chat-bubble bubble-tail-left shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Gowtham</h3>
                                <p className="text-primary-brand font-bold uppercase tracking-widest text-sm mb-4">Founder & CEO</p>
                                <p className="text-gray-300 text-lg italic leading-relaxed">
                                    "Our goal isn't just to build AI, but to engineer intelligence that acts as a catalyst for human potential. At HI5, we bridge the gap between theoretical research and tangible business impact."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Co-Founder Row (Mirrored) */}
                    <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12 animate-fade-in-up delay-300">
                        {/* Avatar */}
                        <div className="relative shrink-0 avatar-animation" style={{ animationDelay: '1s' }}>
                            <div className="absolute inset-0 bg-secondary-brand-blue/20 rounded-full blur-xl scale-125"></div>
                            {/* WhatsApp Style Status Ring */}
                            <div className="status-ring border-secondary-brand-blue/60"></div>
                            <div className="status-ring border-secondary-brand-blue/30 scale-110" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>

                            <div className="w-40 h-40 md:w-56 md:h-56 rounded-full border-2 border-secondary-brand-blue/30 relative z-10 overflow-hidden bg-[#0A192F] shadow-2xl">
                                <img 
                                    src="/avatars/jagadeesh.png" 
                                    alt="Jagadeesh - Co-Founder" 
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Jagadeesh&background=1842b6&color=fff&size=512';
                                    }}
                                />
                            </div>
                            {/* Online Indicator */}
                            <div className="absolute bottom-2 left-2 w-6 h-6 bg-[#1842b6] border-4 border-[#05010f] rounded-full z-20 shadow-lg"></div>
                        </div>

                        {/* Content / Bubble */}
                        <div className="flex-1">
                            <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-3xl backdrop-blur-md relative chat-bubble bubble-tail-right shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 text-right">Jagadeesh</h3>
                                <p className="text-secondary-brand-blue font-bold uppercase tracking-widest text-sm mb-4 text-right">Co-Founder & CTO</p>
                                <p className="text-gray-300 text-lg italic leading-relaxed text-right md:text-left">
                                    "We focus on the architectural integrity of AI. By building adaptive neural engines, we ensure that our partners don't just survive the AI revolution, but lead it with scalable, secure, and sovereign systems."
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default LeadershipSection;
