import React, { useState } from 'react';
import { faqs } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to commonly asked questions about our HVAC services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={faq.id}
              className="mb-4 border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm"
            >
              <button
                className="w-full p-4 text-left flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-lg text-dark">{faq.question}</span>
                {activeIndex === index ? (
                  <ChevronUp className="text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="text-primary flex-shrink-0" />
                )}
              </button>
              <div 
                className={`px-4 overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === index ? 'max-h-60 pb-4' : 'max-h-0'
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Don't see your question here? Contact us directly!
          </p>
          <a href="#contact" className="btn-primary">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;