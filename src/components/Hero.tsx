import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/buildaballer-logo.png";

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
      <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center text-center">
        <div className="relative w-full max-w-3xl mb-12 animate-fade-in">
          <img 
            src={logo} 
            alt="BuildaBaller" 
            className="w-full h-auto"
            style={{
              maskImage: 'radial-gradient(ellipse 82% 72% at center, black 42%, transparent 78%)',
              WebkitMaskImage: 'radial-gradient(ellipse 82% 72% at center, black 42%, transparent 78%)'
            }}
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Transform Your Game
        </h1>
        
        <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Professional football coaching by semi-pro players who are passionate about developing the next generation of ballers
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
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
    </section>
  );
};

export default Hero;
