
import React, { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface VideoSectionProps {
  title: string;
  description: string;
  backgroundImage: string;
  index: number;
}

const VideoSection: React.FC<VideoSectionProps> = ({
  title,
  description,
  backgroundImage,
  index
}) => {
  const [hovered, setHovered] = useState(false);
  const isMobile = useIsMobile();
  
  return (
    <div 
      className={`relative ${isMobile ? 'h-screen w-full' : 'h-screen w-[20%]'} group overflow-hidden`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background Image/GIF */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          transform: hovered ? 'scale(1.05)' : 'scale(1)'
        }}
      >

      </div>



      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-20 transform transition-all duration-500 translate-y-0 group-hover:translate-y-[-10px]">
        <h3 className="text-xl sm:text-2xl font-semibold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-gradient">
          {title}
        </h3>
        <p className="text-sm opacity-0 group-hover:opacity-90 transition-opacity duration-500 delay-100 max-w-xs">
          {description}
        </p>
      </div>

      {/* Glowing dot indicator */}
      <div className={`absolute bottom-6 right-6 w-3 h-3 rounded-full transition-all duration-700 ${
        hovered ? 'bg-monolit-neon-orange scale-[1.3] animate-glow' : 'bg-white/40'
      }`}></div>
    </div>
  );
};

export default VideoSection;
