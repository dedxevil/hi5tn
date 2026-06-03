
import React from 'react';
import SectionHeader from './ui/SectionHeader';
import Button from './ui/Button';
import Card from './ui/Card';
import { COUNTRIES } from '../constants';

const ContactSection: React.FC<{ skipHeader?: boolean }> = ({ skipHeader }) => {
  return (
    <section id="contact" className={`${skipHeader ? 'pb-20 md:pb-28' : 'pt-40 md:pt-44 pb-20 md:pb-28'} container mx-auto px-6`}>
      {!skipHeader && (
        <SectionHeader
          label="Get in Touch"
          title="Let's Architect Your Next AI Breakthrough"
          description="Tell us about your business, current systems, and what AI solutions you want to build or improve. We’ll get back within one business day with next steps."
        />
      )}
      <Card className="max-w-4xl mx-auto p-8 md:p-12">
        <form action="https://formspree.io/f/xdayvvwl" method="POST" className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              {COUNTRIES.map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
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
          <div className="md:col-span-2 text-center mt-6">
            <Button type="submit" size="lg" className="w-full md:w-auto">
              Send Your Inquiry
            </Button>
          </div>
        </form>
      </Card>

      <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 md:p-8 flex flex-col items-center text-center text-text-muted group">
          <div className="w-12 h-12 rounded-full bg-primary-brand/10 text-primary-brand flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
          </div>
          <h4 className="text-white font-semibold mb-3 text-lg">Our Office</h4>
          <p className="text-sm mb-1 font-medium text-gray-300">HI 5 Technet</p>
          <p className="text-sm mb-3">
            11/1, Surya Nagar Ext: 4<br/>
            Ondipudur, Coimbatore<br/>
            Tamil Nadu - 641016
          </p>
          <p className="text-xs text-primary-brand/80">GSTIN: 33AANFH0640L1ZE</p>
        </Card>

        <Card className="p-6 md:p-8 flex flex-col items-center text-center text-text-muted group">
          <div className="w-12 h-12 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          </div>
          <h4 className="text-white font-semibold mb-3 text-lg">Contact Info</h4>
          <a href="mailto:info@hi5technet.com" className="text-sm mb-3 hover:text-cyan-400 transition-colors">info@hi5technet.com</a>
          <a href="https://hi5technet.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-cyan-400 transition-colors">hi5technet.com</a>
        </Card>

        <Card className="p-6 md:p-8 flex flex-col items-center text-center text-text-muted group">
          <div className="w-12 h-12 rounded-full bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
          </div>
          <h4 className="text-white font-semibold mb-3 text-lg">Call Us</h4>
          <div className="text-sm mb-3">
            <span className="block text-gray-400 mb-1">Gowtham:</span>
            <a href="tel:+918667842296" className="hover:text-purple-400 transition-colors">+91 86678 42296</a>
          </div>
          <div className="text-sm">
            <span className="block text-gray-400 mb-1">Jagadeesh:</span>
            <a href="tel:+919360572528" className="hover:text-purple-400 transition-colors">+91 93605 72528</a>
          </div>
        </Card>
      </div>

      {/* Google Maps iframe */}
      <div className="max-w-4xl mx-auto mt-12 rounded-xl border border-glass-border overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1164.3404617360538!2d77.0480693207095!3d11.01167731127154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857069dc284f7%3A0x370bdcae1c9d5913!2s226X%2BRGG%2C%20Ondipudur%20Bridge%2C%20Kannan%20Nagar%2C%20Sivalingapuram%2C%20Ondipudur%2C%20Neelikonampalayam%2C%20Tamil%20Nadu%20641016!5e0!3m2!1sen!2sin!4v1727143487989!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map location"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactSection;