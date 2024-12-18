import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen modern-gradient text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485')] bg-cover bg-center mix-blend-overlay opacity-10"></div>

      <div
        ref={heroRef}
        className="relative max-w-7xl mx-auto px-6 pt-32 pb-24 opacity-0 translate-y-8 transition-all duration-1000 flex flex-col items-center justify-center min-h-screen"
      >
        <div className="max-w-3xl text-center">
          <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            We Build Custom AI Systems for SMEs
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Automate your key business processes in days, reduce costs by 40%, and save hundres of hours annually with AI.
          </p>

          <div className="space-y-6 flex flex-col items-center">
            <button className="hover-lift glass px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-white hover:text-black group">
              <span className="inline-block transform group-hover:scale-105 transition-transform duration-300">
                Book Free Consultation
              </span>
            </button>
            <p className="text-sm text-gray-400 max-w-md">
              *No commitment. Discover exactly where AI can make the biggest
              impact in your business.
            </p>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-4">
          <p className="text-sm text-gray-400">Scroll to explore</p>
          <ArrowDown
            className="w-5 h-5 text-white animate-float"
            style={{ animation: 'float 2s ease-in-out infinite' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
