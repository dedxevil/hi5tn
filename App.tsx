
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page Components
import HomePage from './pages/HomePage';
import AISolutionsPage from './pages/AISolutionsPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage';
import IntelligenceHubPage from './pages/IntelligenceHubPage';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background-dark text-text-light antialiased">
      <Navbar />
      <main id="main-content" className="pt-[8rem]"> {/* Adjusted padding for larger fixed navbar */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ai-solutions" element={<AISolutionsPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/intelligence-hub" element={<IntelligenceHubPage />} />
          {/* Add a 404 Not Found page if desired */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;