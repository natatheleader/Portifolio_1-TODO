import React from 'react';
import { useInView } from '../../../hooks/useInView';

const Benefits = () => {
  const [ref, isVisible] = useInView({ threshold: 0.2 });

  const benefits = [
    {
      title: 'Save Time',
      description: 'Reduce time spent on task management by up to 40% with our intuitive interface.',
      icon: '⚡'
    },
    {
      title: 'Stay Focused',
      description: 'Minimize distractions and maintain clarity on what needs to be done.',
      icon: '🎯'
    },
    {
      title: 'Achieve More',
      description: 'Complete more tasks and reach your goals faster than ever before.',
      icon: '🏆'
    },
    {
      title: 'Work Together',
      description: 'Seamlessly collaborate with team members and share progress.',
      icon: '🤝'
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose SimpliDo
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Benefits that make a difference
          </p>
        </div>

        <div ref={ref} className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`
                flex items-start p-6 bg-gray-50 rounded-lg
                transform transition-all duration-700 ease-out
                hover:shadow-lg
                ${isVisible ? 'opacity-100 translate-x-0' : index % 2 === 0 ? 'opacity-0 -translate-x-20' : 'opacity-0 translate-x-20'}
              `}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mr-4">{benefit.icon}</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-500">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits; 