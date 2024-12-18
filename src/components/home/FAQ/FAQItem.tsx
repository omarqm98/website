import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-800">
      <button
        className="w-full py-6 flex justify-between items-start text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl font-medium text-white pr-8">{question}</span>
        {isOpen ? (
          <Minus className="w-6 h-6 text-blue-500 flex-shrink-0" />
        ) : (
          <Plus className="w-6 h-6 text-blue-500 flex-shrink-0" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <div className="text-gray-400 leading-relaxed space-y-4">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default FAQItem;