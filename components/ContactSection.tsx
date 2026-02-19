
import React from 'react';
import SectionHeader from './ui/SectionHeader';
import Button from './ui/Button';
import Card from './ui/Card';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-28 container mx-auto px-6">
      <SectionHeader
        label="Get in Touch"
        title="Let's Architect Your Next AI Breakthrough"
        description="Tell us about your business, current systems, and what AI solutions you want to build or improve. We’ll get back within one business day with next steps."
      />
      <Card className="max-w-4xl mx-auto p-8 md:p-12">
        <form action="https://formspree.io/f/mkovbove" method="POST" className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            <label htmlFor="company" className="block text-text-light text-sm font-medium mb-2">Company</label>
            <input
              type="text"
              id="company"
              name="company"
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
            <label htmlFor="phone" className="block text-text-light text-sm font-medium mb-2">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full p-3 rounded-md bg-background-dark border border-glass-border text-text-light focus:ring-2 focus:ring-primary-brand focus:border-primary-brand transition-all duration-200"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="country" className="block text-text-light text-sm font-medium mb-2">Country/Region</label>
            <select
              id="country"
              name="country"
              className="w-full p-3 rounded-md bg-background-dark border border-glass-border text-text-light focus:ring-2 focus:ring-primary-brand focus:border-primary-brand transition-all duration-200"
            >
              <option value="">Select your country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="GB">United Kingdom</option>
              <option value="AU">Australia</option>
              <option value="DE">Germany</option>
              <option value="FR">France</option>
              <option value="IN">India</option>
              <option value="AE">United Arab Emirates</option>
              {/* Add more countries as needed */}
            </select>
          </div>
          <div className="md:col-span-2">
            <label htmlFor="message" className="block text-text-light text-sm font-medium mb-2">What AI solution are you interested in?</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full p-3 rounded-md bg-background-dark border border-glass-border text-text-light focus:ring-2 focus:ring-primary-brand focus:border-primary-brand transition-all duration-200"
              placeholder="e.g., Generative AI for customer support, Enterprise ML for predictive analytics, AI Process Automation..."
              required
            ></textarea>
          </div>
          <div className="md:col-span-2 text-center">
            <Button type="submit" size="lg" className="w-full md:w-auto">
              Send Your Inquiry
            </Button>
          </div>
        </form>
      </Card>
    </section>
  );
};

export default ContactSection;