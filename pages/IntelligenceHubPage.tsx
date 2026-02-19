
import React from 'react';
import { Helmet } from 'react-helmet-async';

import SectionHeader from '../components/ui/SectionHeader';
import InsightsSection from '../components/InsightsSection';
import Button from '../components/ui/Button';

const IntelligenceHubPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Intelligence Hub - Insights & Innovation | HI5 Technet</title>
        <meta name="description" content="Stay ahead with HI5 Technet's AI Intelligence Hub. Explore expert guides, case studies, and deep dives into Generative AI, Machine Learning, and Custom LLM Development." />
        <link rel="canonical" href="https://yourwebsite.com/intelligence-hub" />
      </Helmet>
      <section className="py-20 md:py-28 bg-gradient-to-br from-background-dark to-gray-900">
        <div className="container mx-auto px-6 text-center">
          <SectionHeader
            label="Our Knowledge Center"
            title="The Forefront of AI Innovation"
            description="Dive into our curated articles, research, and thought leadership pieces that illuminate the path forward in the intelligence era."
            className="mb-16"
          />
          <p className="text-xl text-text-muted leading-relaxed max-w-4xl mx-auto mb-12">
            The Intelligence Hub is your go-to resource for understanding the nuances of Generative AI, the strategic implications of Enterprise Machine Learning, and the practicalities of AI Process Automation. We aim to empower you with the knowledge to make informed decisions.
          </p>
          <Button variant="outline" href="/blog">
            Explore All Resources
          </Button>
        </div>
      </section>
      <InsightsSection />
    </>
  );
};

export default IntelligenceHubPage;