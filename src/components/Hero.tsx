import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen grass-texture flex items-center justify-center overflow-hidden">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-pitch/90 via-pitch/75 to-pitch/90" />
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-lime/10 via-transparent to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 min-h-screen flex items-center">
        <div className="w-full grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Logo */}
          <div className="relative w-full animate-fade-in flex justify-center md:justify-start">
            <img 
              src="/Build a baller logo main.svg" 
              alt="BuildaBaller" 
              className="w-full max-w-lg h-auto"
              style={{
                maskImage: 'radial-gradient(ellipse 82% 72% at center, black 42%, transparent 78%)',
                WebkitMaskImage: 'radial-gradient(ellipse 82% 72% at center, black 42%, transparent 78%)'
              }}
            />
          </div>
          
          {/* Right Side - Text and Buttons */}
          <div className="flex flex-col justify-center space-y-8 animate-fade-in -mt-5 md:mt-0" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
                Transform Your Game
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/90 leading-relaxed max-w-2xl">
                Professional football coaching by semi-pro players who are passionate about developing the next generation of ballers
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2" style={{ animationDelay: '0.4s' }}>
              <Button 
                size="lg"
                onClick={scrollToContact}
                className="bg-lime hover:bg-lime/90 text-pitch font-bold text-lg px-8 py-6 rounded-full shadow-glow transition-all hover:scale-105"
              >
                Book a Session
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                size="lg"
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                className="border-2 border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground/20 font-bold text-lg px-8 py-6 rounded-full backdrop-blur-sm transition-all hover:scale-105"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
