import React, { useRef, useEffect } from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  features?: string[];
  icon: LucideIcon;
  delay: number;
}

const ServiceCard = ({ title, description, features, icon: Icon, delay }: ServiceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
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
  }, []);

  return (
    <div 
      ref={cardRef}
      className="glass rounded-2xl p-8 opacity-0 translate-y-8 transition-all duration-700 ease-out"
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110">
        <Icon className="w-12 h-12 text-blue-500" />
      </div>
      <h3 className="text-2xl font-bold mb-4 text-white animated-border inline-block">{title}</h3>
      <p className="text-gray-400 mb-6">{description}</p>
      {features && (
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li 
              key={index} 
              className="text-gray-300 flex items-start"
              style={{
                animation: `fadeIn 0.4s ease-out ${delay + 0.1 * (index + 1)}s forwards`
              }}
            >
              <span className="text-blue-500 mr-2">•</span>
              {feature}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServiceCard;