import React, { useState, useEffect } from 'react';

const CookieConsent: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already accepted the policy
        const policyAccepted = localStorage.getItem('privacy_policy_accepted');
        if (!policyAccepted) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('privacy_policy_accepted', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 w-full z-50 p-4 transform transition-transform duration-500 ease-in-out translate-y-0">
            <div className="max-w-7xl mx-auto bg-black/80 backdrop-blur-xl border border-glass-border/50 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
                {/* Animated Top Border inside the element */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary-brand to-transparent opacity-80"></div>

                <div className="p-6 md:p-8 flex-grow">
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-primary-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        Privacy Policy & Data Consent
                    </h3>
                    <div className="text-sm text-gray-300 leading-relaxed max-h-32 overflow-y-auto pr-4 custom-scrollbar">
                        <p className="mb-2 text-text-muted">
                            At HI5 Technet, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by HI5 Technet and how we use it. We collect contact details, use case descriptions, and technical meta-data when you visit or interact with our site. We use the information we collect to provide our AI services and personalize your experience.
                        </p>
                        <p className="text-text-muted">
                            We implement advanced security measures to maintain the safety of your personal information. By clicking "Accept", you agree to our collection and use of this data to enhance your experience.
                        </p>
                    </div>
                </div>

                <div className="bg-white/5 border-t md:border-t-0 md:border-l border-glass-border/30 p-6 flex items-center justify-center md:min-w-[200px]">
                    <button
                        onClick={handleAccept}
                        className="w-full relative px-6 py-3 font-semibold text-background-dark bg-primary-brand rounded-full overflow-hidden group transition-all duration-300 ease-out hover:shadow-[0_0_20px_rgba(38,212,140,0.4)] hover:-translate-y-1"
                    >
                        <span className="relative z-10 flex items-center justify-center">
                            Accept & Close
                        </span>
                        <div className="absolute inset-0 w-0 h-full bg-white/20 transition-all duration-300 ease-out group-hover:w-full"></div>
                    </button>
                </div>
            </div>

            <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(38, 212, 140, 0.4);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(38, 212, 140, 0.6);
        }
      `}</style>
        </div>
    );
};

export default CookieConsent;
