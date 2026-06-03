import React from 'react';
import { Helmet } from 'react-helmet-async';
import TrustSection from '../components/TrustSection';

import SubPageHero from '../components/SubPageHero';

const TestimonialsPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Testimonials - HI5 Technet</title>
                <meta name="description" content="Read what our clients have to say about our AI-driven products and services." />
            </Helmet>

            <SubPageHero 
                page="testimonials"
                label="Client Feedback"
                title="What Our Partners Say"
                description="Real stories from businesses that have transformed their operations with our AI solutions."
            />
            <TrustSection />
        </>
    );
};

export default TestimonialsPage;
