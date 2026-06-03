import React from 'react';
import { Helmet } from 'react-helmet-async';

import SectionHeader from '../components/ui/SectionHeader';
import ServicesSection from '../components/ServicesSection';
import TechStackSection from '../components/TechStackSection';
import Button from '../components/ui/Button';

import SubPageHero from '../components/SubPageHero';

const ServicesPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>AI Services - HI5 Technet</title>
                <meta name="description" content="Explore HI5 Technet's pioneering AI solutions: Generative AI, Custom LLMs, Enterprise Machine Learning, AI Process Automation, and strategic AI consulting for your business." />
            </Helmet>
            <SubPageHero 
                page="services"
                label="Our AI Offerings"
                title="Intelligent Solutions for Enterprise"
                description="We specialize in bespoke AI solutions that address your most complex business challenges."
            />

            {/* Specifically "AI Related Only" per request */}
            <ServicesSection />

            {/* We keep Tech Stack as it highlights the tools used */}
            <TechStackSection />

            <section className="pt-24 md:pt-32 pb-20 md:pb-28 container mx-auto px-6 text-center">
                <SectionHeader
                    label="Ready to innovate?"
                    title="Let's Build Your Adaptive AI Future."
                    description="Our team of AI strategists and engineers are ready to partner with you. Reach out today to start your journey."
                />
                <Button to="/contact" size="lg" className="mt-8">
                    Get a Free Consultation
                </Button>
            </section>
        </>
    );
};

export default ServicesPage;
