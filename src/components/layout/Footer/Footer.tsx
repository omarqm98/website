import React from 'react';
import SocialLinks from './SocialLinks';
import LegalLinks from './LegalLinks';
import BackToTop from './BackToTop';
import { Cpu, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="flex items-center space-x-2 mb-6 md:mb-0 group">
            <div className="relative">
              <Cpu className="w-7 h-7 text-blue-400 transition-all duration-300 group-hover:scale-110" />
              <Sparkles className="w-4 h-4 text-white absolute -top-1 -right-1 animate-pulse" />
            </div>
            <span className="text-white text-xl font-bold">OMAR QM</span>
          </div>
          <SocialLinks />
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <div className="mb-6 md:mb-0">
            <p className="text-gray-400 text-sm">
              © 2024 OMAR QM. All rights reserved.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12">
            <LegalLinks />
            <BackToTop />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;