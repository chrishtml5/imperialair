import { useState, useEffect } from 'react';
import { navLinks } from '../constants';
import { Phone, Menu, X, Flame, Snowflake } from 'lucide-react';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#home" className="flex items-center group" aria-label="Imperial Air - Home">
            <div className="relative">
              <div className="flex items-center gap-2">
                <div className="relative transform group-hover:scale-105 transition-transform duration-300">
                  <Flame className="w-8 h-8 text-orange-500" aria-hidden="true" />
                  <Snowflake className="w-8 h-8 text-blue-500 absolute -right-4 top-0" aria-hidden="true" />
                </div>
                <div className="ml-4">
                  <span className={`text-2xl font-extrabold tracking-wider text-black`}>IMPERIAL</span>
                  <span className="text-2xl font-bold text-secondary-light"> AIR</span>
                  <span className="block text-xs text-primary font-medium tracking-wider">COOLING AND HEATING</span>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <ul className="list-none sm:flex hidden justify-end items-center flex-1" role="menubar">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              role="none"
              className={`font-medium cursor-pointer text-base text-black hover:text-primary mr-10 transition-colors duration-300`}
            >
              <a 
                href={`#${nav.id}`}
                role="menuitem"
                className="py-2 px-3 rounded-lg hover:bg-primary/10 transition-all duration-300"
              >
                {nav.title}
              </a>
            </li>
          ))}
          <li role="none">
            <a 
              href="tel:9565663406" 
              className="flex items-center text-white bg-primary hover:bg-primary-dark rounded-full px-6 py-3 transition-all duration-300 transform hover:scale-105"
              role="menuitem"
            >
              <Phone size={16} className="mr-2" aria-hidden="true" />
              <span className="font-medium">(956) 566-3406</span>
            </a>
          </li>
        </ul>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button 
            className={`w-12 h-12 flex justify-center items-center rounded-full transition-all duration-300 ${
              toggle ? 'bg-white text-primary shadow-lg' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setToggle(!toggle)}
            aria-expanded={toggle}
            aria-label="Toggle menu"
          >
            {toggle ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Menu */}
          <div className={`
            fixed inset-0 bg-black/50 z-40 transition-opacity duration-300
            ${toggle ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
            lg:hidden
          `}>
            <div className={`
              fixed right-0 top-0 h-full w-[280px] bg-white transform transition-transform duration-300
              ${toggle ? 'translate-x-0' : 'translate-x-full'}
            `}>
              <ul className="list-none flex justify-end items-start flex-1 flex-col">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className="font-medium cursor-pointer text-base text-dark hover:text-primary mb-4"
                  >
                    <a href={`#${nav.id}`} onClick={() => setToggle(!toggle)}>
                      {nav.title}
                    </a>
                  </li>
                ))}
                <li>
                  <a 
                    href="tel:9565663406" 
                    className="flex items-center text-white bg-primary hover:bg-primary-dark rounded-full px-4 py-2 transition duration-300"
                    onClick={() => setToggle(!toggle)}
                  >
                    <Phone size={16} className="mr-2" />
                    <span className="font-medium">(956) 566-3406</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;