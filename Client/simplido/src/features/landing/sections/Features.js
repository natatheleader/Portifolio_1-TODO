import React from 'react';

const Features = () => {
  const features = [
    {
      title: 'Feature 1',
      description: 'Description of feature 1 goes here. Explain what makes this feature special.',
      icon: '🚀'
    },
    {
      title: 'Feature 2',
      description: 'Description of feature 2 goes here. Explain what makes this feature special.',
      icon: '⚡'
    },
    {
      title: 'Feature 3',
      description: 'Description of feature 3 goes here. Explain what makes this feature special.',
      icon: '🎯'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Features
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Everything you need to succeed
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4">{feature.icon}</div>
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