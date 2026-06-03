import React from 'react';
import { Helmet } from 'react-helmet-async';
import SubPageHero from '../components/SubPageHero';
import AIProductsSection from '../components/AIProductsSection';

const AIProductsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Products - Hipocap & Weisscam by HI5 Technet</title>
        <meta name="description" content="Discover Hipocap & Weisscam, HI5Technet's innovative AI-powered products designed for scaling secure business intelligence and pattern recognition." />
        <link rel="canonical" href="https://hi5technet.com/ai-products" />
      </Helmet>
      <SubPageHero
        page="about" // Using 'about' key to fulfill type requirement or just using generic page
        label="Our Products"
        title="Innovative AI-Powered Products"
        description="In the rapidly evolving digital landscape of 2026, businesses no longer need 'simple' software; they need Intelligent Ecosystems. At Hi5Technet and Temprl have partnered to bridge the gap between raw data and actionable intelligence by deploying two flagship solutions. Hipocap & Weisscam"
      />
      <div className="-mt-24">
        <AIProductsSection />
      </div>
    </>
  );
};

export default AIProductsPage;
