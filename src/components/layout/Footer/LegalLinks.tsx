import React from 'react';

const LegalLinks = () => {
  return (
    <div className="flex space-x-6">
      <a
        href="/terms"
        className="text-gray-400 hover:text-white transition-colors text-sm"
      >
        Terms & Conditions
      </a>
      <a
        href="/privacy"
        className="text-gray-400 hover:text-white transition-colors text-sm"
      >
        Privacy Policy
      </a>
    </div>
  );
};

export default LegalLinks;