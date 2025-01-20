import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import FeaturesSection from '../components/FeaturesSection';
import ComparisonSection from '../components/ComparisonSection';
import PricingSection from '../components/PricingSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToFAQ) {
      const faqSection = document.getElementById('faq');
      if (faqSection) {
        faqSection.scrollIntoView({ behavior: 'smooth' });
        window.history.replaceState({}, document.title);
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <FeaturesSection />
      <ComparisonSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
    </>
  );
};

export default HomePage;