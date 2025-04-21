import { services, serviceAreas } from '../constants';
import { ArrowRight, MapPin } from 'lucide-react';
import { Flame, Snowflake } from 'lucide-react';


const Services = () => {
  return (
    <section id="services" className="section-padding bg-gray-light relative overflow-hidden">
      <div className="container">
        <div className="text-center mb-12 md:mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Professional HVAC Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Comprehensive heating and cooling solutions for residential and commercial properties 
            throughout the Rio Grande Valley. Licensed experts in all major HVAC brands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <div key={service.id} className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-1 h-full">
              <div className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <ServiceIcon />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <ArrowRight size={14} className="text-primary mr-2 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-medium mr-2">Schedule Service</span>
                  <ArrowRight size={16} />
                </div>
              </div>
              <div className="h-2 bg-gradient-to-r from-primary to-primary-light transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          ))}
        </div>

        <div className="mt-16 p-6 bg-white rounded-xl shadow-lg">
          <div className="flex items-start mb-4">
            <MapPin className="text-primary w-6 h-6 mr-2 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-dark mb-2">Areas We Serve</h3>
              <div className="flex flex-wrap gap-3">
                {serviceAreas.map((area) => (
                  <span key={area} className="px-4 py-2 bg-gray-100 rounded-full text-gray-700">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

const ServiceIcon = () => (
  <div className="relative flex items-center justify-center w-full h-full">
    <div className="relative inline-flex items-center justify-center">
      <Flame className="w-7 h-7 text-primary relative z-10" />
      <Snowflake className="w-7 h-7 text-secondary absolute left-3 top-0 z-0" />
    </div>
  </div>
);