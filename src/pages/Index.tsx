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
import { Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

const Index = () => {
  const { toast } = useToast();
  const isMobile = useIsMobile();

  const sections = [
    {
      title: "AI-Generated Films",
      description: "Cutting-edge artificial intelligence creating cinematic masterpieces.",
      backgroundImage: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnRncHd4bDJqMHVyb2lkNHI3NHBob3MzcGJoc3JwOXM2ZTlqMGMzdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jd6TVgsph6w7e/giphy.gif",
    },
    {
      title: "Space Landscapes",
      description: "Mystical cosmic environments beyond human imagination.",
      backgroundImage: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzZhb2V0eWhoazVsdjZ1Ym80Nm91eG14M2tuanl5MndxYXRhdXBzMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xTiTntOKF6uzXbMX28/giphy.gif",
    },
    {
      title: "Futuristic Advertising",
      description: "Revolutionary visual concepts for next-generation brands.",
      backgroundImage: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExODFzdnp4M3djM2N6ajN5d3NscjAycG82MGkyNmN5M204aXE0eXk2bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/HHS2CQGdvCx3y/giphy.gif",
    },
    {
      title: "Cyberpunk Worlds",
      description: "High-tech dystopian environments with striking neon aesthetics.",
      backgroundImage: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTBkdm8zMDR1bjk5eWd3bzljc25tNmI3eWRjOTJtdjg1amlobmFxbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/e7FOBuKCDtwWI/giphy.gif",
    },
    {
      title: "Cosmic Effects",
      description: "Dreamlike visual elements from the depths of the universe.",
      backgroundImage: "https://media.giphy.com/media/xTiIzKsnjiilddXngI/giphy.gif",
    }
  ];

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
        title: "Welcome to MONOLIT",
        description: "Explore the future of AI-driven cinematography",
        duration: 5000,
      });
    }, 1500);
  }, [toast]);

  return (
    <div className="min-h-screen">
      <ParallaxBackground />
      <Header />
      
      <section className="h-screen flex items-center justify-center">
        <div className="text-center px-4 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-wider">
            MONOLIT
          </h1>
          <p className="text-gray-400/70 mb-8">lorem ipsum dolor sit amet</p>
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
      
      <section id="about" className="py-24 px-4">
        <div className="monolit-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">The Future of Visual Storytelling</h2>
            <p className="text-lg mb-8 text-monolit-mist">
              MONOLIT stands at the intersection of cutting-edge AI technology and artistic vision. 
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
            
            <div className="flex justify-center space-x-6 mt-12">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-monolit-mist hover:text-monolit-neon-orange transition-colors duration-300">
                <Instagram size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-monolit-mist hover:text-monolit-neon-orange transition-colors duration-300">
                <Twitter size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-monolit-mist hover:text-monolit-neon-orange transition-colors duration-300">
                <Linkedin size={24} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-monolit-mist hover:text-monolit-neon-orange transition-colors duration-300">
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>
      
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
