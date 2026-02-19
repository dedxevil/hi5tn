
import React from 'react';
import { Helmet } from 'react-helmet-async';

import ContactSection from '../components/ContactSection';

const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact HI5 Technet - Schedule Your AI Consultation</title>
        <meta name="description" content="Get in touch with HI5 Technet for a free AI strategy consultation. Let's discuss your Generative AI, Enterprise Machine Learning, or AI Process Automation needs." />
        <link rel="canonical" href="https://yourwebsite.com/contact" />
      </Helmet>
      <ContactSection />
    </>
  );
};

export default ContactPage;