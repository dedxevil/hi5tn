import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionHeader from '../components/ui/SectionHeader';

const PrivacyPolicyPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Privacy Policy - HI5 Technet</title>
                <meta name="description" content="Privacy Policy for HI5 Technet AI products and services." />
            </Helmet>
            <section className="py-20 md:py-32 container mx-auto px-6 max-w-4xl text-left">
                <SectionHeader
                    label="Legal"
                    title="Privacy Policy"
                    className="text-center"
                />
                <div className="prose prose-invert max-w-none text-text-muted mt-12 bg-glass-panel p-8 rounded-2xl border border-glass-border">
                    <p className="mb-4 text-sm text-text-light/60">Last Updated: {new Date().toLocaleDateString()}</p>
                    <p className="mb-6">
                        At HI5 Technet, accessible from https://hi5technet.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by HI5 Technet and how we use it.
                    </p>
                    <h2 className="text-xl font-semibold text-white mt-8 mb-4">1. Information We Collect</h2>
                    <p className="mb-6">
                        The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information. We collect contact details, use case descriptions, and technical meta-data when you visit or interact with our site.
                    </p>
                    <h2 className="text-xl font-semibold text-white mt-8 mb-4">2. How We Use Your Information</h2>
                    <p className="mb-6">
                        We use the information we collect in various ways, including to:
                    </p>
                    <ul className="list-disc ml-6 mb-6">
                        <li>Provide, operate, and maintain our website and AI services</li>
                        <li>Improve, personalize, and expand our offerings</li>
                        <li>Understand and analyze how you use our solutions</li>
                        <li>Develop new AI products, services, features, and functionality</li>
                        <li>Communicate with you for AI strategy consultation and support</li>
                    </ul>
                    <h2 className="text-xl font-semibold text-white mt-8 mb-4">3. Data Security</h2>
                    <p className="mb-6">
                        We implement advanced security measures to maintain the safety of your personal information. We take industry-standard precautions, especially in relation strictly to AI data ingestion and model building, ensuring compliance and robust privacy filters.
                    </p>
                    <p>
                        If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at <a href="mailto:info@hi5technet.com" className="text-primary-brand hover:underline">info@hi5technet.com</a>.
                    </p>
                </div>
            </section>
        </>
    );
};

export default PrivacyPolicyPage;
