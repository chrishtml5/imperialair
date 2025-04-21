import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Contact Us</h2>
            <p className="text-gray-600 mb-8">
              Have questions or need to schedule a service? Reach out to us using the contact information 
              below or fill out the form and we'll get back to you as soon as possible.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-dark mb-1">Our Location</h3>
                  <p className="text-gray-600">321 W Van Week St, Edinburg, TX 78541</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-dark mb-1">Phone Number</h3>
                  <p className="text-gray-600">
                    <a href="tel:9565663406" className="hover:text-primary">(956) 566-3406</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-dark mb-1">Email</h3>
                  <p className="text-gray-600">
                    <a href="mailto:contact@imperialairllc.com" className="hover:text-primary">contact@imperialairllc.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Clock className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-dark mb-1">Business Hours</h3>
                  <p className="text-gray-600">Monday-Friday: 7:30AM-6:00PM</p>
                  <p className="text-gray-600">Saturday: 8:00AM-2:00PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                  <p className="text-primary font-medium mt-1">24/7 Emergency Service Available</p>
                </div>
              </div>
            </div>

            {/* Service area */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-dark mb-4">Our Service Area</h3>
              <p className="text-gray-600 mb-2">
                We proudly serve the entire Rio Grande Valley, including:
              </p>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                  <span className="text-gray-600">Edinburg</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                  <span className="text-gray-600">McAllen</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                  <span className="text-gray-600">Pharr</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                  <span className="text-gray-600">Mission</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                  <span className="text-gray-600">Weslaco</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                  <span className="text-gray-600">Harlingen</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-dark mb-6">Request a Service</h3>
              <form>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label 
                      htmlFor="firstName" 
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      First Name
                    </label>
                    <input 
                      type="text" 
                      id="firstName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>
                  <div>
                    <label 
                      htmlFor="lastName" 
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Last Name
                    </label>
                    <input 
                      type="text" 
                      id="lastName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>

                <div className="mb-6">
                  <label 
                    htmlFor="phone" 
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone
                  </label>
                  <input 
                    type="tel" 
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>

                <div className="mb-6">
                  <label 
                    htmlFor="service" 
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Service Needed
                  </label>
                  <select 
                    id="service"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  >
                    <option value="">Select a service</option>
                    <option value="installation">HVAC Installation</option>
                    <option value="repair">HVAC Repair</option>
                    <option value="maintenance">Preventive Maintenance</option>
                    <option value="air-quality">Air Quality Assessment</option>
                    <option value="refrigeration">Refrigeration</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label 
                    htmlFor="message" 
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea 
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full btn-primary"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.2442937775607!2d-98.16869!3d26.3015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8665a5dbcf6a2e8d%3A0xc6d3eb7b0214a772!2s321%20W%20Van%20Week%20St%2C%20Edinburg%2C%20TX%2078541!5e0!3m2!1sen!2sus!4v1699392189912!5m2!1sen!2sus" 
            width="100%" 
            height="450" 
            style={{ border: 0 }}
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl shadow-md"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;