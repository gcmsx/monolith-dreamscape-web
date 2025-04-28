
import React, { useState } from 'react';

interface VideoSectionProps {
  title: string;
  description: string;
  backgroundImage: string; // Will be used instead of video for now
  index: number;
}

const VideoSection: React.FC<VideoSectionProps> = ({
  title,
  description,
  backgroundImage,
  index
}) => {
  const [hovered, setHovered] = useState(false);
  
  return (
    <div 
      className="relative h-screen w-full sm:w-1/2 lg:w-1/3 xl:w-1/6 group overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background Image (placeholder for video) */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          transform: hovered ? 'scale(1.05)' : 'scale(1)'
        }}
      >
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-monolit-blue-dark/90"></div>
      </div>

      {/* Vertical divider line */}
      {index < 5 && (
        <div className="absolute top-0 right-0 vertical-divider h-full z-10"></div>
      )}

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
