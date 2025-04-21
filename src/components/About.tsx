import { stats } from '../constants';
import * as LucideIcons from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="lg:max-w-3xl mx-auto">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
              Your Trusted HVAC Partner in the Rio Grande Valley
            </h2>
            <p className="text-gray-600 mb-6">
              Imperial Air LLC is a locally owned and operated HVAC company serving Edinburg and the 
              surrounding areas. With years of experience in the industry, our team of certified 
              technicians is committed to providing exceptional heating, cooling, and refrigeration 
              services for both residential and commercial clients.
            </p>
            <p className="text-gray-600 mb-8">
              We pride ourselves on honest pricing, reliable service, and quality workmanship. 
              Our technicians are fully licensed and insured, and we use only the highest quality 
              parts and equipment to ensure your comfort and satisfaction.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <LucideIcons.CheckCheck className="text-primary" size={20} />
                </div>
                <div>
                  <span className="text-gray-800 font-medium">Licensed & Certified</span>
                  <p className="text-sm text-gray-600">TX License #TACLA00042C</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <LucideIcons.Clock className="text-primary" size={20} />
                </div>
                <span className="text-gray-800 font-medium">24/7 Emergency Service</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, index) => {
            // @ts-ignore - Dynamic icon import
            const Icon = LucideIcons[stat.icon];
            
            return (
              <div 
                key={stat.id} 
                className="bg-white rounded-xl shadow-md p-6 text-center animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  {Icon && <Icon className="text-primary" size={24} />}
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;