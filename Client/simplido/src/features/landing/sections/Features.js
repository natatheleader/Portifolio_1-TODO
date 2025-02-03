import React from 'react';
import { useInView } from '../../../hooks/useInView';

const Features = () => {
  const [ref, isVisible] = useInView({ threshold: 0.2 });

  const features = [
    {
      title: 'Easy Task Management',
      description: 'Create, organize, and track your tasks with our intuitive interface. Drag and drop functionality makes task management a breeze.',
      icon: '✓',
      animation: 'slide-right'
    },
    {
      title: 'Smart Reminders',
      description: 'Never miss a deadline with our intelligent reminder system. Get notifications across all your devices.',
      icon: '⏰',
      animation: 'slide-up'
    },
    {
      title: 'Collaboration Tools',
      description: 'Share tasks and projects with team members or family. Real-time updates keep everyone in sync.',
      icon: '👥',
      animation: 'slide-left'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl transform transition-all duration-300 hover:scale-105">
            Features
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Everything you need to succeed
          </p>
        </div>

        <div ref={ref} className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`
                flex flex-col items-center p-6 bg-gray-50 rounded-lg
                transform transition-all duration-1000 ease-out
                hover:scale-105 hover:shadow-lg
                ${isVisible ? 'opacity-100 translate-x-0 translate-y-0' : 
                  feature.animation === 'slide-right' ? 'opacity-0 translate-x-full' :
                  feature.animation === 'slide-left' ? 'opacity-0 -translate-x-full' :
                  'opacity-0 translate-y-full'}
              `}
            >
              <div className="text-4xl mb-4 transform transition-all duration-300 hover:rotate-12">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 