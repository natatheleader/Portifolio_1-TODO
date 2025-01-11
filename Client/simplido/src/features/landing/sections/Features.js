import React from 'react';

const Features = () => {
  const features = [
    {
      title: 'Easy Task Management',
      description: 'Create, organize, and track your tasks with our intuitive interface. Drag and drop functionality makes task management a breeze.',
      icon: '✓'
    },
    {
      title: 'Smart Reminders',
      description: 'Never miss a deadline with our intelligent reminder system. Get notifications across all your devices.',
      icon: '⏰'
    },
    {
      title: 'Collaboration Tools',
      description: 'Share tasks and projects with team members or family. Real-time updates keep everyone in sync.',
      icon: '👥'
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