import React from 'react';
import ProcessCard from './ProcessCard';
import { processSteps } from './processData';

const HowItWorks = () => {
  return (
    <section className="bg-black py-24" id="how-it-works">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="space-y-6">
          {processSteps.map((step, index) => (
            <ProcessCard
              key={index}
              step={step.step}
              title={step.title}
              description={step.description}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;