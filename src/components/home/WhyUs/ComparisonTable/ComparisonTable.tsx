import React from 'react';
import ComparisonHeader from './ComparisonHeader';
import ComparisonRow from './ComparisonRow';
import { comparisonData } from './comparisonData';

const ComparisonTable = () => {
  return (
    <div className="bg-gray-900 rounded-2xl p-4 md:p-8">
      <div className="text-sm md:text-base">
        <ComparisonHeader />
        {comparisonData.map((row, index) => (
          <ComparisonRow key={index} {...row} />
        ))}
      </div>
    </div>
  );
}

export default ComparisonTable;