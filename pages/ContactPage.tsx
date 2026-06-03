
import React from 'react';
import { Helmet } from 'react-helmet-async';

import AiClickFunnel from '../components/AiClickFunnel';
import SubPageHero from '../components/SubPageHero';

const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact HI5 Technet - Schedule Your AI Consultation</title>
        <meta name="description" content="Get in touch with HI5 Technet for a free AI strategy consultation. Let's discuss your Generative AI, Enterprise Machine Learning, or AI Process Automation needs." />
        <link rel="canonical" href="https://yourwebsite.com/contact" />
      </Helmet>
      <SubPageHero 
        page="contact"
        label="Get in Touch"
        title="Let's Architect Your Next AI Breakthrough"
        description="Tell us about your business, current systems, and what AI solutions you want to build or improve."
      />
      <AiClickFunnel />
    </>
  );
};

export default ContactPage;