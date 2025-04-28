
import React, { useEffect } from 'react';
import Header from '../components/Header';
import VideoSection from '../components/VideoSection';
import ParallaxBackground from '../components/ParallaxBackground';
import Footer from '../components/Footer';
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();

  // Sample data for the video sections
  const sections = [
    {
      title: "AI-Generated Films",
      description: "Cutting-edge artificial intelligence creating cinematic masterpieces.",
      backgroundImage: "https://images.unsplash.com/photo-1485163819542-13adeb5e0068?q=80&w=1800&auto=format",
    },
    {
      title: "Space Landscapes",
      description: "Mystical cosmic environments beyond human imagination.",
      backgroundImage: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=1800&auto=format",
    },
    {
      title: "Futuristic Advertising",
      description: "Revolutionary visual concepts for next-generation brands.",
      backgroundImage: "https://images.unsplash.com/photo-1558025706-7978322555d0?q=80&w=1800&auto=format",
    },
    {
      title: "Cyberpunk Worlds",
      description: "High-tech dystopian environments with striking neon aesthetics.",
      backgroundImage: "https://images.unsplash.com/photo-1531279550271-23c2a77a765c?q=80&w=1800&auto=format",
    },
    {
      title: "Cosmic Effects",
      description: "Dreamlike visual elements from the depths of the universe.",
      backgroundImage: "https://images.unsplash.com/photo-1534841090574-cba2d662b62e?q=80&w=1800&auto=format",
    },
    {
      title: "Artistic Vision",
      description: "Where technology meets artistic expression in perfect harmony.",
      backgroundImage: "https://images.unsplash.com/photo-1470470558828-e00ad9dbbc13?q=80&w=1800&auto=format",
    }
  ];

  useEffect(() => {
    // Welcome toast that appears once the page loads
    setTimeout(() => {
      toast({
        title: "Welcome to MONOLİT medya",
        description: "Explore the future of AI-driven cinematography and advertising",
        duration: 5000,
      });
    }, 1500);
  }, [toast]);

  return (
    <div className="min-h-screen">
      <ParallaxBackground />
      <Header />
      
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center">
        <div className="text-center px-4 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-wider">
            MONOLİT <span className="opacity-70 text-xl md:text-2xl lg:text-3xl">medya</span>
          </h1>
          <p className="text-lg md:text-xl max-w-md mx-auto text-monolit-mist">
            AI-driven film and advertising agency
          </p>
          <div className="mt-12">
            <a 
              href="#about" 
              className="px-8 py-3 bg-transparent border border-monolit-neon-orange text-monolit-neon-orange hover:bg-monolit-neon-orange hover:text-white transition-colors duration-300"
            >
              Discover Our Vision
            </a>
          </div>
        </div>
      </section>
      
      {/* Video Sections */}
      <section 
        id="projects" 
        className="flex flex-wrap"
      >
        {sections.map((section, index) => (
          <VideoSection
            key={index}
            title={section.title}
            description={section.description}
            backgroundImage={section.backgroundImage}
            index={index}
          />
        ))}
      </section>
      
      {/* About Section */}
      <section id="about" className="py-24 px-4">
        <div className="monolit-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">The Future of Visual Storytelling</h2>
            <p className="text-lg mb-8 text-monolit-mist">
              MONOLİT medya stands at the intersection of cutting-edge AI technology and artistic vision. 
              We create immersive visual experiences that transcend traditional boundaries, 
              bringing futuristic concepts into today's reality.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-monolit-blue-medium/20 p-6 glow-effect">
                <h3 className="text-xl font-semibold mb-3">AI Generation</h3>
                <p className="text-sm opacity-80">Advanced neural networks creating stunning visuals impossible with traditional methods</p>
              </div>
              <div className="bg-monolit-blue-medium/20 p-6 glow-effect">
                <h3 className="text-xl font-semibold mb-3">Cinematic Quality</h3>
                <p className="text-sm opacity-80">Film-grade production values meeting next-generation creative concepts</p>
              </div>
              <div className="bg-monolit-blue-medium/20 p-6 glow-effect">
                <h3 className="text-xl font-semibold mb-3">Future Vision</h3>
                <p className="text-sm opacity-80">Pushing boundaries to define tomorrow's visual language today</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 bg-monolit-blue-medium/20">
        <div className="monolit-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Connect With Us</h2>
            <p className="text-lg mb-12 text-monolit-mist">
              Ready to bring your vision to life with cutting-edge AI technology?
            </p>
            <div className="flex flex-col items-center justify-center space-y-6">
              <a 
                href="mailto:contact@monolitmedia.com" 
                className="text-xl hover:text-monolit-neon-orange transition-colors"
              >
                contact@monolitmedia.com
              </a>
              <div className="w-48 h-px bg-monolit-blue-light"></div>
              <p className="text-lg tracking-wider animate-float">
                <span className="text-monolit-neon-orange">ISTANBUL</span> · <span className="text-monolit-purple">BERLIN</span> · <span className="text-monolit-mist">TOKYO</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
