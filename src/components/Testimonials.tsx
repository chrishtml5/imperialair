import React from 'react';
import { testimonials } from '../constants';
import { Star } from 'lucide-react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Customers Say</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            We take pride in our work and our customers' satisfaction is our top priority.
            Here's what some of our clients have to say about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-xl shadow-md p-8 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    size={20} 
                    className={i < testimonial.rating ? "text-yellow-400 fill-current" : "text-gray-300"} 
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-gray-600 font-bold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-dark">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://www.google.com/search?q=Imperial+Air+LLC+Edinburg+reviews" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-secondary hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
          >
            Read More Reviews
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;