import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

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
      <div className="monolit-container flex items-center justify-between md:justify-center">
        {/* Desktop Navigation */}
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

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="text-white p-2">
                <Menu />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-monolit-blue-dark/95 border-l-0 text-white w-[250px] sm:w-[300px]">
              <SheetHeader className="text-left mb-8">
                <SheetTitle className="text-2xl font-bold text-monolit-neon-orange">MENU</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-6">
                {navigationItems.map((item) => (
                  <SheetClose asChild key={item}>
                    <a 
                      href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
                      onClick={(e) => {
                        if (item === 'Home') {
                          e.preventDefault();
                          scrollToTop();
                        }
                        // SheetClose handles closing
                      }}
                      className="text-xl uppercase tracking-wider hover:text-monolit-neon-orange transition-colors"
                    >
                      {item}
                    </a>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
