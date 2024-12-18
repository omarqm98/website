import React from 'react';
import ComparisonTable from './ComparisonTable/ComparisonTable';
import { ArrowRight } from 'lucide-react';

const WhyUs = () => {
  return (
    <section className="bg-black py-24" id="why-us">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose AIAgency?</h2>
          <p className="text-xl text-gray-400 mb-8">Your AI Partner for Real Results.</p>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <ComparisonTable />

        <div className="mt-12 text-center">
          <p className="text-xl text-gray-300 mb-8">
            We bring proven, cost-effective AI solutions that deliver real value.
          </p>
          <button className="inline-flex items-center bg-blue-500 text-white px-8 py-4 rounded-full font-medium hover:bg-blue-600 transition-colors">
            Book Free Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;