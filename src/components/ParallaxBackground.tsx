
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
      {/* Stars layer with more density */}
      <div 
        className="absolute inset-0 bg-monolit-blue-dark"
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at 20% 30%, white 1px, transparent 1px),
            radial-gradient(1px 1px at 40% 70%, white 1px, transparent 1px),
            radial-gradient(1px 1px at 60% 30%, white 1px, transparent 1px),
            radial-gradient(1px 1px at 80% 70%, white 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px, 80px 80px, 60px 60px, 100px 100px',
          backgroundPosition: `
            ${offset * 0.1}px ${offset * 0.1}px,
            ${offset * -0.2}px ${offset * 0.2}px,
            ${offset * 0.3}px ${offset * -0.1}px,
            ${offset * -0.1}px ${offset * -0.2}px
          `,
          opacity: 0.6
        }}
      />
      
      {/* Nebula effects */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            radial-gradient(circle at 30% 40%, rgba(155, 135, 245, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 70% 60%, rgba(255, 77, 0, 0.3) 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, rgba(44, 62, 93, 0.2) 0%, transparent 60%)
          `,
          transform: `translateY(${offset * 0.2}px)`
        }}
      />
      
      {/* Aurora effects */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(135deg, transparent 0%, rgba(155, 135, 245, 0.4) 50%, transparent 100%),
            linear-gradient(45deg, transparent 0%, rgba(255, 77, 0, 0.2) 50%, transparent 100%)
          `,
          transform: `translateY(${offset * -0.15}px) rotate(${offset * 0.02}deg)`
        }}
      />
    </div>
  );
};

export default ParallaxBackground;
