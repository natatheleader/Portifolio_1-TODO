import React from 'react';
import { useInView } from '../../../hooks/useInView';

const Testimonials = () => {
  const [ref, isVisible] = useInView({ threshold: 0.2 });

  const testimonials = [
    {
      quote: "SimpliDo has transformed how I manage my daily tasks. It's intuitive and powerful!",
      author: "Sarah Johnson",
      role: "Product Manager"
    },
    {
      quote: "The best task management tool I've ever used. Clean, simple, and effective.",
      author: "Michael Chen",
      role: "Software Developer"
    },
    {
      quote: "Finally, a todo app that actually helps me get things done!",
      author: "Emma Davis",
      role: "Freelance Designer"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Our Users Say
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Don't just take our word for it
          </p>
        </div>

        <div ref={ref} className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`
                p-8 bg-white rounded-lg shadow-sm
                transform transition-all duration-1000 ease-out
                hover:shadow-lg
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
              `}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 