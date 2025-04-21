import React from 'react';
import { 
  Navbar, 
  Hero, 
  Services, 
  About, 
  Testimonials, 
  FAQ, 
  Contact, 
  CTA, 
  Footer 
} from './components';
import './styles/index.css';

function App() {
  return (
    <div className="min-h-screen w-full font-sans">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;