import { navLinks } from '../constants';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Flame, Snowflake } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark text-white mt-24">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="mb-8 lg:mb-0">
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="relative">
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Flame className="w-8 h-8 text-orange-500" />
                      <Snowflake className="w-8 h-8 text-blue-500 absolute -right-4 top-0" />
                    </div>
                    <div className="ml-4">
                      <span className="text-2xl font-extrabold tracking-wider text-white">IMPERIAL</span>
                      <span className="text-2xl font-bold text-secondary-light"> AIR</span>
                      <span className="block text-xs text-primary font-medium tracking-wider mt-1">COOLING AND HEATING</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-gray-400">
                Your trusted HVAC partner for all your heating, cooling, and refrigeration needs in the Rio Grande Valley.
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Rest of the columns remain the same, just adjust spacing */}
          <div className="mb-8 lg:mb-0">
            <h3 className="text-lg font-bold mb-6 pb-2 border-b border-gray-700">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} className="text-gray-400 hover:text-primary transition-colors duration-300">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8 lg:mb-0">
            <h3 className="text-lg font-bold mb-6 pb-2 border-b border-gray-700">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors duration-300">HVAC Installation</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors duration-300">HVAC Repair & Service</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors duration-300">Preventive Maintenance</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors duration-300">Air Quality Assessment</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors duration-300">Energy Efficiency</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors duration-300">Refrigeration</a></li>
            </ul>
          </div>

          <div className="mb-8 lg:mb-0">
            <h3 className="text-lg font-bold mb-6 pb-2 border-b border-gray-700">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="mr-3 text-primary flex-shrink-0" size={20} />
                <span className="text-gray-400">321 W Van Week St, Edinburg, TX 78541</span>
              </li>
              <li className="flex">
                <Phone className="mr-3 text-primary flex-shrink-0" size={20} />
                <a href="tel:9565663406" className="text-gray-400 hover:text-primary transition-colors duration-300">(956) 566-3406</a>
              </li>
              <li className="flex">
                <Mail className="mr-3 text-primary flex-shrink-0" size={20} />
                <a href="mailto:contact@imperialairllc.com" className="text-gray-400 hover:text-primary transition-colors duration-300">contact@imperialairllc.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Methods and Certifications */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-sm text-gray-500 mb-4">We Accept:</p>
            <div className="flex items-center space-x-4">
              <img 
                src="https://www.svgrepo.com/show/328127/visa.svg" 
                alt="Visa" 
                className="h-8 w-14 bg-white px-2 py-1.5 rounded"
              />
              <img 
                src="https://www.svgrepo.com/show/328091/mastercard.svg" 
                alt="Mastercard" 
                className="h-8 w-14 bg-white px-2 py-1.5 rounded"
              />
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-4">Licensed & Certified:</p>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <img 
                  src="https://www.natex.org/site/assets/files/1145/nate_logo.png" 
                  alt="NATE Certified" 
                  className="h-10 w-auto bg-white px-3 py-1.5 rounded"
                />
              </div>
              <p className="text-sm text-gray-400 font-medium">TACLA001114520</p>
            </div>
          </div>
          <img 
            src="https://www.epa.gov/sites/default/files/2016-01/epa_seal_verysmall_trim.gif" 
            alt="EPA Certified" 
            className="h-10 w-auto bg-white px-3 py-1.5 rounded"
          />
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Imperial Air LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;