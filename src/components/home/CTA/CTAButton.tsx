import React from 'react';
import { MousePointer } from 'lucide-react';

const CTAButton = () => {
  return (
    <button className="group relative bg-white text-black px-6 md:px-12 py-4 md:py-6 rounded-2xl font-medium text-lg md:text-xl hover:bg-gray-100 transition-all duration-300 flex items-center justify-center w-full md:w-auto whitespace-nowrap">
      <MousePointer className="w-5 h-5 md:w-6 md:h-6 mr-3 md:mr-4 text-blue-500" />
      Book Free Consultation
      <div className="absolute inset-0 bg-blue-500/10 rounded-2xl scale-105 opacity-0 group-hover:opacity-100 transition-all duration-300" />
    </button>
  );
};

export default CTAButton;