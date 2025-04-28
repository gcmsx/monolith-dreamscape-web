
import React, { useEffect } from 'react';
import Header from '../components/Header';
import VideoSection from '../components/VideoSection';
import ParallaxBackground from '../components/ParallaxBackground';
import Footer from '../components/Footer';
import { useToast } from "@/components/ui/use-toast";
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
  const { toast } = useToast();
  const isMobile = useIsMobile();

  // Sample data for the video sections with animated GIFs
  const sections = [
    {
      title: "AI-Generated Films",
      description: "Cutting-edge artificial intelligence creating cinematic masterpieces.",
      backgroundImage: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDdtY2JyMnBoc3k4NnB1OHgybTF1bGhiam8ybjU1Z2tzMWVvNHFobiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7btXJQm5DD8ApubC/giphy.gif",
    },
    {
      title: "Space Landscapes",
      description: "Mystical cosmic environments beyond human imagination.",
      backgroundImage: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHdiY3R2cWI5M2dtcXBxZDAwbmx1ZHB1bGY4NnJxdWN0ZXd1NXJ6ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT8qBvOmIEWXxVPdxS/giphy.gif",
    },
    {
      title: "Futuristic Advertising",
      description: "Revolutionary visual concepts for next-generation brands.",
      backgroundImage: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWdyeWJkbzFrc2k0ZXRyYW96eXQya3J5YnB6dXpyNGFvNzBzMmp6dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7btNa0RUYa5E7iiQ/giphy.gif",
    },
    {
      title: "Cyberpunk Worlds",
      description: "High-tech dystopian environments with striking neon aesthetics.",
      backgroundImage: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHF1NXV2ZGx6Y2JlOWE3ZXRrY2h3dW42cWc2OWVyYXkwZDl5NXB6eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7btSHUTdwRVRBy0w/giphy.gif",
    },
    {
      title: "Cosmic Effects",
      description: "Dreamlike visual elements from the depths of the universe.",
      backgroundImage: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExem41enIyaGQ4ZmV6YmFyMHZwbDY5ZWQ1amRiMnlsZHBnbXZoZjBkayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0IyeL8r9UhJI5LcA/giphy.gif",
    },
    {
      title: "Artistic Vision",
      description: "Where technology meets artistic expression in perfect harmony.",
      backgroundImage: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWJ6ZjR1MnN0b2dlYW9zYnlnZWQxbzQzam5mMDAxamw2d3Y3MnA4dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26DN0U3SqKDG2fTFe/giphy.gif",
    }
  ];

  // Sample projects data
  const projects = [
    {
      title: "Project Nebula",
      description: "An AI-driven space opera series.",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb"
    },
    {
      title: "Neon Dreams",
      description: "Revolutionary AR advertising campaign.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22"
    },
    {
      title: "Digital Horizons",
      description: "Virtual reality storytelling experience.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
    }
  ];

  useEffect(() => {
    setTimeout(() => {
      toast({
        title: "Welcome to MONOLİT",
        description: "Explore the future of AI-driven cinematography",
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
            MONOLİT
          </h1>
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
      <section id="projects" className="py-24">
        {isMobile ? (
          <Carousel className="w-full max-w-xs mx-auto">
            <CarouselContent>
              {sections.map((section, index) => (
                <CarouselItem key={index} className="pl-0">
                  <VideoSection
                    title={section.title}
                    description={section.description}
                    backgroundImage={section.backgroundImage}
                    index={index}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        ) : (
          <div className="flex">
            {sections.map((section, index) => (
              <VideoSection
                key={index}
                title={section.title}
                description={section.description}
                backgroundImage={section.backgroundImage}
                index={index}
              />
            ))}
          </div>
        )}
      </section>
      
      {/* Projects Section */}
      <section id="our-projects" className="py-24 px-4">
        <div className="monolit-container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="relative group overflow-hidden rounded-lg aspect-video hover:scale-[1.02] transition-all duration-500"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-monolit-blue-dark/90"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                  <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
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
