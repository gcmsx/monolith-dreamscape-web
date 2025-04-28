import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      // Close mobile menu on scroll
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [mobileMenuOpen]); // Add mobileMenuOpen dependency

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Navigation items (text only needed now)
  const navigationItems = [
    { name: 'Home', href: '#' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
        scrolled ? 'bg-monolit-blue-dark/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="monolit-container flex items-center justify-between md:justify-center relative">
        {/* Desktop Navigation - Text Based */}
        <nav className="hidden md:flex space-x-8">
          {navigationItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              onClick={item.name === 'Home' ? scrollToTop : undefined}
              className="text-sm uppercase tracking-wider text-white opacity-90 hover:opacity-100 hover:text-monolit-neon-orange transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden">
          <button 
            className="text-white p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-monolit-blue-dark/95 backdrop-blur-md md:hidden shadow-lg rounded-b-lg overflow-hidden">
            <nav className="flex flex-col p-4 space-y-3">
              {navigationItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href}
                  onClick={(e) => {
                    if (item.name === 'Home') {
                      e.preventDefault();
                      scrollToTop();
                    }
                    closeMobileMenu(); // Close menu on click
                  }}
                  className="text-lg uppercase tracking-wider text-white hover:text-monolit-neon-orange transition-colors text-center py-2"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
