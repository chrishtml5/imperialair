import { Phone, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center py-20 md:py-0"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('/imperial.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        // Remove fixed attachment for better mobile experience
        backgroundAttachment: 'scroll'
      }}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl animate-fadeInUp pt-16 md:pt-0">
          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Keep Your Home <span className="text-primary">Cool</span> & <span className="text-secondary">Comfortable</span> All Year
          </h1>
          <p className="font-sans text-lg md:text-xl text-white opacity-90 mb-8 max-w-xl">
            Professional HVAC services for residential and commercial properties in the Rio Grande Valley.
            Licensed, insured, and ready to serve.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="tel:9565663406"
              className="btn-primary"
            >
              <Phone size={18} className="mr-2" />
              <span>Call Now</span>
            </a>
            <a
              href="#services"
              className="btn-outline sm:ml-4"
            >
              <span>Our Services</span>
              <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
      {/* Overlay badge */}
      <div className="absolute bottom-10 right-10 bg-white p-4 rounded-lg shadow-lg hidden lg:block animate-fadeInUp animate-delay-300">
        <div className="flex items-center">
          <div className="mr-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-primary">4.7</span>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-600 font-medium">RATED</p>
            <p className="text-xl font-bold text-dark">Excellent</p>
            <p className="text-sm text-gray-600">on Google Reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;