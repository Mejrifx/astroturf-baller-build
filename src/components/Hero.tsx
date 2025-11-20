import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen grass-texture flex items-center justify-center overflow-hidden">
      {/* Dark overlay - fades from top and stops at navbar height (80px) */}
      <div className="absolute inset-0 bg-gradient-to-b from-pitch/90 via-pitch/75 via-[10%] to-transparent" />
      
      {/* Animated gradient overlay - reduced on mobile */}
      <div className="absolute inset-0 bg-gradient-to-t from-lime/10 via-transparent to-transparent md:block hidden" />
      <div className="absolute inset-0 bg-gradient-to-t from-lime/5 via-transparent via-20% to-transparent md:hidden" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24 md:pt-16 pb-20 min-h-screen flex items-start md:items-center">
        <div className="w-full grid md:grid-cols-2 gap-6 md:gap-12 lg:gap-16 items-center">
          {/* Left Side - Logo */}
          <div className="relative w-full animate-fade-in flex justify-center md:justify-start md:translate-y-0">
            <img 
              src="/Build a baller logo main.png" 
              alt="BuildaBaller" 
              className="w-full max-w-xs md:max-w-xl h-auto"
            />
          </div>
          
          {/* Right Side - Text and Buttons */}
          <div className="flex flex-col justify-center space-y-6 md:space-y-8 animate-fade-in mt-8 md:mt-0" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] md:drop-shadow-lg">
                Transform Your Game
              </h1>
              
              <p className="text-base md:text-xl lg:text-2xl text-white font-medium leading-relaxed max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] md:drop-shadow-md">
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
                className="border-2 border-white bg-transparent text-white hover:bg-white/20 font-bold text-lg px-8 py-6 rounded-full backdrop-blur-sm transition-all hover:scale-105 shadow-lg"
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
