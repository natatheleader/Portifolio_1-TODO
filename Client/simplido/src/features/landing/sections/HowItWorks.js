import React from 'react';
import { useInView } from '../../../hooks/useInView';

const HowItWorks = () => {
  const [ref, isVisible] = useInView({ threshold: 0.2 });

  const steps = [
    {
      number: '01',
      title: 'Sign Up',
      description: 'Create your account in seconds with Google authentication.'
    },
    {
      number: '02',
      title: 'Create Tasks',
      description: 'Add your tasks with details, due dates, and priorities.'
    },
    {
      number: '03',
      title: 'Stay Organized',
      description: 'Track progress, get reminders, and complete tasks efficiently.'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Get started in three simple steps
          </p>
        </div>

        <div ref={ref} className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`
                relative p-8 bg-white rounded-lg shadow-sm
                transform transition-all duration-1000 ease-out
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
              `}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="text-4xl font-bold text-indigo-100 absolute top-4 right-4">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-500">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 