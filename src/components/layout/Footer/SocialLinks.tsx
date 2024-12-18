import React from 'react';
import { Twitter, Linkedin } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="flex space-x-6">
      <a
        href="https://linkedin.com/company/aiagency"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin className="w-5 h-5" />
      </a>
      <a
        href="https://twitter.com/aiagency"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors"
        aria-label="Twitter"
      >
        <Twitter className="w-5 h-5" />
      </a>
    </div>
  );
};

export default SocialLinks;