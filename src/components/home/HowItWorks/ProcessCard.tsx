import React, { useRef, useEffect } from 'react';

interface ProcessCardProps {
  step: number;
  title: string;
  description: string;
  delay: number;
}

const ProcessCard = ({ step, title, description, delay }: ProcessCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('translate-y-0', 'opacity-100');
          }, delay);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-50px',
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className="bg-gray-900 rounded-2xl p-8 transform translate-y-16 opacity-0 transition-all duration-700 ease-out"
    >
      <div className="flex items-start gap-6">
        <span className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-xl font-bold text-white">
          {step}
        </span>
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
          <p className="text-gray-400 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProcessCard;