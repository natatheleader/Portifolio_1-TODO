import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl transform transition-all duration-500 hover:scale-105">
            <span className="block opacity-0 animate-fadeIn">Simplify Your Tasks with</span>
            <span className="block text-indigo-600 opacity-0 animate-fadeIn animation-delay-300">SimpliDo</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl opacity-0 animate-fadeIn animation-delay-500">
            The easiest way to organize your tasks, boost productivity, and achieve your goals.
            Simple, intuitive, and designed for you.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8 opacity-0 animate-fadeIn animation-delay-700">
            <div className="rounded-md shadow">
              <a href="http://localhost:8000/auth/google" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transform transition-all duration-300 hover:scale-105 hover:shadow-lg md:py-4 md:text-lg md:px-10">
                Start Now
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a href="#features" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 transform transition-all duration-300 hover:scale-105 hover:shadow-lg md:py-4 md:text-lg md:px-10">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 