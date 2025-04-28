
import React, { useEffect, useState } from 'react';

const ParallaxBackground: React.FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      {/* Stars layer (using radial gradients for stars effect) */}
      <div 
        className="absolute inset-0 bg-monolit-blue-dark"
        style={{
          backgroundImage: `radial-gradient(white 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          backgroundPosition: `0 ${offset * 0.1}px`,
          opacity: 0.4
        }}
      ></div>
      
      {/* Mist layer */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(155, 135, 245, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(255, 77, 0, 0.1) 0%, transparent 40%)
          `,
          transform: `translateY(${offset * 0.2}px)`
        }}
      ></div>
      
      {/* Additional cosmic effects */}
      <div 
        className="absolute top-0 left-0 right-0 h-screen opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(135deg, transparent 0%, rgba(155, 135, 245, 0.3) 50%, transparent 100%)
          `,
          transform: `translateY(${offset * -0.15}px) rotate(${offset * 0.02}deg)`
        }}
      ></div>
    </div>
  );
};

export default ParallaxBackground;
