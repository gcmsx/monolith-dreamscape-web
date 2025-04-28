
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigationItems = ['Home', 'Projects', 'About', 'Contact'];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
        scrolled ? 'bg-monolit-blue-dark/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="monolit-container flex items-center justify-end md:justify-center">
        <nav className="hidden md:flex space-x-8">
          {navigationItems.map((item) => (
            <a 
              key={item} 
              href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
              onClick={item === 'Home' ? scrollToTop : undefined}
              className="text-sm uppercase tracking-wider hover:text-monolit-neon-orange transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 bg-monolit-blue-dark/95 z-40 flex flex-col items-center justify-center space-y-8 md:hidden">
          {navigationItems.map((item) => (
            <a 
              key={item} 
              href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
              onClick={(e) => {
                if (item === 'Home') {
                  e.preventDefault();
                  scrollToTop();
                }
                setMenuOpen(false);
              }}
              className="text-xl uppercase tracking-wider hover:text-monolit-neon-orange transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
