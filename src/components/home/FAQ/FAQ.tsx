import React from 'react';
import FAQItem from './FAQItem';
import { faqData } from './faqData';
import { MessageCircle } from 'lucide-react';

const FAQ = () => {
  return (
    <section className="bg-black py-24" id="faq">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400">
            Got more questions? We're here to help.
          </p>
        </div>

        <div className="space-y-2">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center bg-blue-500 text-white px-8 py-4 rounded-full font-medium hover:bg-blue-600 transition-colors">
            <MessageCircle className="w-5 h-5 mr-2" />
            Book Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;