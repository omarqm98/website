import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer/Footer';
import Hero from './components/home/Hero';
import Services from './components/home/Services/Services';
import WhyUs from './components/home/WhyUs/WhyUs';
import HowItWorks from './components/home/HowItWorks/HowItWorks';
import FAQ from './components/home/FAQ/FAQ';
import CTA from './components/home/CTA/CTA';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <WhyUs />
        <HowItWorks />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;