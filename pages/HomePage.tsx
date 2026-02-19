
import React from 'react';
import { Helmet } from 'react-helmet-async';

import HeroSection from '../components/HeroSection';
import ClientMarqueeSection from '../components/ClientMarqueeSection';
import ProblemSolverSection from '../components/ProblemSolverSection';
import IndustriesSection from '../components/IndustriesSection';
import ProcessSection from '../components/ProcessSection';
import BenefitsSection from '../components/BenefitsSection';
import TrustSection from '../components/TrustSection';
import CtaBanner from '../components/CtaBanner';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>HI5 Technet - Adaptive AI Solutions for Business Transformation</title>
        <meta name="description" content="HI5 Technet empowers enterprises with cutting-edge Generative AI Solutions, Enterprise Machine Learning, and AI Process Automation to drive innovation and growth." />
        <link rel="canonical" href="https://yourwebsite.com/" />
      </Helmet>
      <HeroSection />
      <ClientMarqueeSection />
      <ProblemSolverSection />
      <IndustriesSection />
      <ProcessSection />
      <BenefitsSection />
      <TrustSection />
      <CtaBanner />
    </>
  );
};

export default HomePage;