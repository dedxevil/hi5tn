
import React from 'react';
import { Helmet } from 'react-helmet-async';

import SectionHeader from '../components/ui/SectionHeader';
import ServicesSection from '../components/ServicesSection';
import TechStackSection from '../components/TechStackSection';
import Button from '../components/ui/Button';

const AISolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Solutions & Services - HI5 Technet</title>
        <meta name="description" content="Explore HI5 Technet's pioneering AI solutions: Generative AI, Custom LLMs, Enterprise Machine Learning, AI Process Automation, and strategic AI consulting for your business." />
        <link rel="canonical" href="https://yourwebsite.com/ai-solutions" />
      </Helmet>
      <section className="py-20 md:py-28 bg-gradient-to-br from-background-dark to-gray-900">
        <div className="container mx-auto px-6 text-center">
          <SectionHeader
            label="Our Comprehensive Offerings"
            title="Transforming Enterprises with Intelligent AI Solutions"
            description="At HI5 Technet, we specialize in building bespoke AI solutions that address your most complex business challenges, from enhancing customer experiences to optimizing operational efficiencies."
            className="mb-16"
          />
          <p className="text-xl text-text-muted leading-relaxed max-w-4xl mx-auto mb-12">
            Our expertise spans the entire AI lifecycle, ensuring seamless integration, robust performance, and measurable impact. We leverage cutting-edge technologies and deep industry knowledge to deliver solutions that not only meet today's demands but also anticipate tomorrow's needs.
          </p>
          <Button to="/contact" size="lg">
            Discuss Your AI Project
          </Button>
        </div>
      </section>
      <ServicesSection />
      <TechStackSection />
      <section className="py-20 md:py-28 container mx-auto px-6 text-center">
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

export default AISolutionsPage;