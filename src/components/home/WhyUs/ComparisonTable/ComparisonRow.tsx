import React from 'react';

interface ComparisonRowProps {
  label: string;
  freelance: string;
  inHouse: string;
  otherAgencies: string;
  us: string;
  isHighlight?: boolean;
}

const ComparisonRow = ({ label, freelance, inHouse, otherAgencies, us, isHighlight }: ComparisonRowProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 py-6 border-b border-gray-800">
      <div className="text-gray-300 font-medium">{label}</div>
      <div className="hidden md:block text-gray-400">{freelance}</div>
      <div className="hidden lg:block text-gray-400">{inHouse}</div>
      <div className="hidden md:block text-gray-400">{otherAgencies}</div>
      <div className={`${isHighlight ? 'text-blue-400 font-medium' : 'text-gray-400'}`}>{us}</div>
    </div>
  );
}

export default ComparisonRow;