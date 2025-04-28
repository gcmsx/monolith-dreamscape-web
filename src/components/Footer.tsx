
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 bg-gradient-to-t from-monolit-blue-dark to-transparent">
      <div className="monolit-container">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold mb-1">MONOLIT</h2>
            <p className="text-xs opacity-50">lorem ipsum dolor sit amet</p>
          </div>
          
          <div className="flex space-x-8">
            {['Home', 'Projects', 'About', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-xs uppercase tracking-wider hover:text-monolit-neon-orange transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          
          <div className="text-xs opacity-50">
            © {new Date().getFullYear()} MONOLIT. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
