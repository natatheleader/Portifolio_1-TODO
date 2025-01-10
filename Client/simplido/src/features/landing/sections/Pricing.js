import React from 'react';

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: '$9',
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
      cta: 'Start Basic'
    },
    {
      name: 'Pro',
      price: '$29',
      features: ['Everything in Basic', 'Pro Feature 1', 'Pro Feature 2'],
      cta: 'Start Pro',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99',
      features: ['Everything in Pro', 'Enterprise Feature 1', 'Enterprise Feature 2'],
      cta: 'Contact Sales'
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Pricing Plans
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Choose the perfect plan for your needs
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div key={index} className={`flex flex-col p-8 bg-white rounded-lg shadow-lg ${plan.popular ? 'ring-2 ring-indigo-600' : ''}`}>
              <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
              <p className="mt-4 text-4xl font-bold text-gray-900">{plan.price}<span className="text-xl font-normal text-gray-500">/month</span></p>
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-2 text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`mt-8 w-full py-3 px-4 rounded-md ${plan.popular ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing; 