import React from 'react';
import { Phone } from 'lucide-react';

const CTA = () => {
  return (
    <section className="relative py-20 bg-primary">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="text-center lg:text-left mb-8 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready for Reliable HVAC Service?
            </h2>
            <p className="text-white/90 text-lg max-w-xl">
              Contact us today to schedule a service call, get an estimate, or learn more about our 
              HVAC solutions for your home or business.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="tel:9565663406" 
              className="bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
            >
              <Phone size={18} className="mr-2" />
              <span>(956) 566-3406</span>
            </a>
            <a 
              href="#contact" 
              className="bg-secondary text-white hover:bg-secondary-dark font-semibold py-3 px-6 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute right-0 top-0 h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon fill="currentColor" points="0,0 100,0 100,100" />
        </svg>
      </div>
    </section>
  );
};

export default CTA;