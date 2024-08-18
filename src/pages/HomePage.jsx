import React from 'react';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import CallToAction from '../components/CallToAction';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import UseCases from '../components/UseCases';
import AppFooter from '../components/AppFooter';
import Pricing from '../components/Pricing';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Features />
      <UseCases />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <CallToAction />
      <AppFooter />
    </>
  );
};

export default HomePage;
