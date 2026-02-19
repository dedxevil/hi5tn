
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import SectionHeader from '../components/ui/SectionHeader';
import AboutSection from '../components/AboutSection';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const CareersForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: '',
    resume: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData((prev) => ({ ...prev, resume: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would send formData to a backend/ATS
    console.log('Careers Form Data Submitted:', formData);
    alert('Thank you for your interest! We will review your application.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      position: '',
      message: '',
      resume: null,
    });
    // Clear file input manually if needed (react ref recommended for this)
    const fileInput = document.getElementById('resume') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  };

  return (
    <section className="py-20 md:py-28 container mx-auto px-6">
      <SectionHeader
        label="Join Our Team"
        title="Innovate with Us: Careers at HI5 Technet"
        description="Are you passionate about AI and pioneering technologies? We're looking for bright minds to join our rapidly growing team. Explore our openings or send us your resume!"
      />
      <Card className="max-w-4xl mx-auto p-8 md:p-12">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-text-light text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-background-dark border border-glass-border text-text-light focus:ring-2 focus:ring-primary-brand focus:border-primary-brand transition-all duration-200"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-text-light text-sm font-medium mb-2">Phone (Optional)</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-background-dark border border-glass-border text-text-light focus:ring-2 focus:ring-primary-brand focus:border-primary-brand transition-all duration-200"
            />
          </div>
          <div>
            <label htmlFor="position" className="block text-text-light text-sm font-medium mb-2">Position of Interest</label>
            <input
              type="text"
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-background-dark border border-glass-border text-text-light focus:ring-2 focus:ring-primary-brand focus:border-primary-brand transition-all duration-200"
              placeholder="e.g., AI Engineer, Data Scientist, Solutions Architect"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="message" className="block text-text-light text-sm font-medium mb-2">Tell us about yourself (Optional)</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-background-dark border border-glass-border text-text-light focus:ring-2 focus:ring-primary-brand focus:border-primary-brand transition-all duration-200"
              placeholder="Any relevant experience, skills, or why you want to join HI5 Technet..."
            ></textarea>
          </div>
          <div className="md:col-span-2">
            <label htmlFor="resume" className="block text-text-light text-sm font-medium mb-2">Upload Resume (PDF, DOC, DOCX - Max 5MB)</label>
            <input
              type="file"
              id="resume"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="w-full text-text-light file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary-brand/20 file:text-primary-brand hover:file:bg-primary-brand/30 transition-all duration-200"
            />
            {formData.resume && <p className="text-xs text-text-muted mt-2">Selected file: {formData.resume.name}</p>}
          </div>
          <div className="md:col-span-2 text-center mt-6">
            <Button type="submit" size="lg" className="w-full md:w-auto">
              Submit Application
            </Button>
          </div>
        </form>
      </Card>
    </section>
  );
};


const AboutUsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About HI5 Technet - AI-Powered Innovation Partner</title>
        <meta name="description" content="Learn about HI5 Technet's mission, values, and expert team dedicated to building cutting-edge Generative AI Solutions and Enterprise Machine Learning platforms. Explore career opportunities." />
        <link rel="canonical" href="https://yourwebsite.com/about-us" />
      </Helmet>
      <AboutSection />
      <CareersForm />
    </>
  );
};

export default AboutUsPage;