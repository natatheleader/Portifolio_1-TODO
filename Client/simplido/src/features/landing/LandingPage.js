import React from 'react';
import Hero from './sections/Hero';
import Features from './sections/Features';
import HowItWorks from './sections/HowItWorks';
import Benefits from './sections/Benefits';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Features />
      <HowItWorks />
      <Benefits />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default LandingPage; 