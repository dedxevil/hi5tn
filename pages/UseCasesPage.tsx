import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const UseCasesPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>AI Use Cases - Register Yours - HI5 Technet</title>
                <meta name="description" content="Register your AI use case with HI5 Technet to explore how Generative AI and Machine Learning can solve your business challenges." />
            </Helmet>
            <section className="py-20 md:py-28 container mx-auto px-6">
                <SectionHeader
                    label="Custom Solutions"
                    title="Register Your AI Use Case"
                    description="Every business has unique challenges. Tell us about your specific use case, and our AI experts will map out a customized strategy."
                    className="text-center"
                />

                <Card className="max-w-3xl mx-auto p-8 md:p-12 mt-12 border-primary-brand/30">
                    <form action="https://formspree.io/f/mkovbove" method="POST" className="grid grid-cols-1 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-text-light text-sm font-medium mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full p-3 rounded-md bg-background-dark border border-glass-border text-text-light focus:ring-2 focus:ring-primary-brand focus:border-primary-brand transition-all duration-200"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-text-light text-sm font-medium mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full p-3 rounded-md bg-background-dark border border-glass-border text-text-light focus:ring-2 focus:ring-primary-brand focus:border-primary-brand transition-all duration-200"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="industry" className="block text-text-light text-sm font-medium mb-2">Industry</label>
                            <input
                                type="text"
                                id="industry"
                                name="industry"
                                className="w-full p-3 rounded-md bg-background-dark border border-glass-border text-text-light focus:ring-2 focus:ring-primary-brand focus:border-primary-brand transition-all duration-200"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="usecase" className="block text-text-light text-sm font-medium mb-2">Describe Your AI Use Case</label>
                            <textarea
                                id="usecase"
                                name="usecase"
                                rows={6}
                                className="w-full p-3 rounded-md bg-background-dark border border-glass-border text-text-light focus:ring-2 focus:ring-primary-brand focus:border-primary-brand transition-all duration-200"
                                placeholder="What specific problem are you looking to solve using AI? (e.g., Automating invoice processing, building a custom customer support LLM, predicting equipment failure...)"
                                required
                            ></textarea>
                        </div>
                        <div className="text-center pt-4">
                            <Button type="submit" size="lg" className="w-full md:w-auto">
                                Submit Your Use Case
                            </Button>
                        </div>
                    </form>
                </Card>
            </section>
        </>
    );
};

export default UseCasesPage;
