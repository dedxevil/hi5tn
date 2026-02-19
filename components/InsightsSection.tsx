
import React from 'react';
import SectionHeader from './ui/SectionHeader';
import Card from './ui/Card';
import Button from './ui/Button';
import { BLOG_ARTICLES } from '../constants';

const InsightsSection: React.FC = () => {
  return (
    <section id="intelligence-hub" className="py-20 md:py-28 container mx-auto px-6">
      <SectionHeader
        label="Knowledge & Innovation"
        title="AI Insights & Innovation Hub"
        description="Stay ahead with expert guides, groundbreaking case studies, and deep dives into Generative AI, Enterprise Machine Learning, and Custom LLM Development."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {BLOG_ARTICLES.map((article, index) => (
          <Card key={index} className="flex flex-col p-0 overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover rounded-t-2xl"
              loading="lazy"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-text-light mb-3">
                {article.title}
              </h3>
              <p className="text-text-muted text-sm flex-grow mb-4">
                {article.description}
              </p>
              <a href="#" className="text-primary-brand hover:text-secondary-brand-blue font-medium flex items-center group mt-auto">
                Read More
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
            </div>
          </Card>
        ))}
      </div>
      <div className="text-center mt-16">
        <Button variant="outline" href="/blog">
          View All Insights
        </Button>
      </div>
    </section>
  );
};

export default InsightsSection;