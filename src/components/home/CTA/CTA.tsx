import React from 'react';
import CTAButton from './CTAButton';

const CTA = () => {
  return (
    <section className="bg-black py-32" id="cta">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-black rounded-3xl p-12 md:p-24">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485')] bg-cover bg-center" />
          </div>

          {/* Content */}
          <div className="relative">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Still not sure?
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl">
              Let's see how AI can transform your business. No strings attached. 
              Discover exactly where AI can save you time, cut costs, and increase productivity.
            </p>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <CTAButton />
              <span className="text-gray-500">
                or mail us at{' '}
                <a 
                  href="mailto:hey@aiagency.ai" 
                  className="text-white hover:text-blue-400 transition-colors underline decoration-dotted"
                >
                  omar@omarqm.com
                </a>
              </span>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
};

export default CTA;