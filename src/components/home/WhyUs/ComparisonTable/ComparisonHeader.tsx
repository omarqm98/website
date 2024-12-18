import React from 'react';
import { X, Check } from 'lucide-react';

const ComparisonHeader = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 pb-6 border-b border-gray-800">
      <div className="text-gray-400 font-medium">Options</div>
      <div className="hidden md:flex flex-col items-center">
        <span className="text-gray-300 font-medium mb-2">FREELANCE</span>
        <X className="w-5 h-5 text-red-500" />
      </div>
      <div className="hidden lg:flex flex-col items-center">
        <span className="text-gray-300 font-medium mb-2">IN-HOUSE</span>
        <X className="w-5 h-5 text-red-500" />
      </div>
      <div className="hidden md:flex flex-col items-center">
        <span className="text-gray-300 font-medium mb-2">OTHER AGENCIES</span>
        <X className="w-5 h-5 text-red-500" />
      </div>
      <div className="flex flex-col items-center">
        <span className="text-gray-300 font-medium mb-2">AIAgency</span>
        <Check className="w-5 h-5 text-green-500" />
      </div>
    </div>
  );
}

export default ComparisonHeader;