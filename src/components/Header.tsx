import React, { useState, useEffect } from 'react';
import { Menu, Home, Layers, Info, Mail } from 'lucide-react';
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

  // Navigation items with icons
  const navigationItems = [
    { name: 'Home', icon: <Home size={18} />, href: '#' },
    { name: 'Projects', icon: <Layers size={18} />, href: '#projects' },
    { name: 'About', icon: <Info size={18} />, href: '#about' },
    { name: 'Contact', icon: <Mail size={18} />, href: '#contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 py-3 transition-all duration-300 ${
        scrolled ? 'bg-monolit-blue-dark/70 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-center">
        {/* Desktop Navigation - Icon Based */}
        <nav className="hidden md:flex space-x-10">
          {navigationItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              onClick={item.name === 'Home' ? scrollToTop : undefined}
              className="text-white opacity-70 hover:opacity-100 hover:text-monolit-neon-orange transition-all duration-200 flex flex-col items-center"
              title={item.name}
            >
              <div className="p-2 rounded-full hover:bg-white/10 transition-colors">
                {item.icon}
              </div>
              <span className="text-[10px] mt-1 uppercase tracking-wider">{item.name}</span>
            </a>
          ))}
        </nav>

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="text-white p-2 rounded-full hover:bg-white/10 transition-colors">
                <Menu size={20} />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-monolit-blue-dark/95 border-l-0 text-white w-[250px] sm:w-[300px]">
              <SheetHeader className="text-left mb-8">
                <SheetTitle className="text-2xl font-bold text-monolit-neon-orange">MENU</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-6">
                {navigationItems.map((item) => (
                  <SheetClose asChild key={item.name}>
                    <a 
                      href={item.href}
                      onClick={(e) => {
                        if (item.name === 'Home') {
                          e.preventDefault();
                          scrollToTop();
                        }
                      }}
                      className="text-xl uppercase tracking-wider hover:text-monolit-neon-orange transition-colors flex items-center"
                    >
                      <span className="mr-3">{item.icon}</span>
                      {item.name}
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
