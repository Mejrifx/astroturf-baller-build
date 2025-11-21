import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";

const Hero = () => {
  const logoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const logo = logoRef.current;
    const text = textRef.current;
    const buttons = buttonsRef.current;

    if (!logo || !text || !buttons) return;

    // Create timeline for desktop animations
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    if (isMobile) {
      // Mobile animations: fade in from bottom with slight stagger
      gsap.set([logo, text, buttons], { opacity: 0, y: 30 });

      tl.to(logo, {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
      })
        .to(
          text,
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power2.out",
          },
          "-=1.05"
        )
        .to(
          buttons,
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power2.out",
          },
          "-=1.05"
        );
    } else {
      // Desktop animations: logo from left, text from right (meeting in the middle)
      gsap.set(logo, { opacity: 0, x: -100 });
      gsap.set(text, { opacity: 0, x: 100 });
      gsap.set(buttons, { opacity: 0, y: 20 });

      tl.to(logo, {
        opacity: 1,
        x: 0,
        duration: 1.8,
        ease: "power3.out",
      })
        .to(
          text,
          {
            opacity: 1,
            x: 0,
            duration: 1.8,
            ease: "power3.out",
          },
          "-=1.2"
        )
        .to(
          buttons,
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power2.out",
          },
          "-=0.9"
        );
    }
  }, []);

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
          <div ref={logoRef} className="relative w-full flex justify-center md:justify-start md:translate-y-0">
            <img 
              src="/Build a baller logo main.png" 
              alt="BuildaBaller" 
              className="w-full max-w-xs md:max-w-xl h-auto"
            />
          </div>
          
          {/* Right Side - Text and Buttons */}
          <div ref={textRef} className="flex flex-col justify-center items-center md:items-start space-y-6 md:space-y-8 mt-8 md:mt-0">
            <div className="space-y-4 md:space-y-6 text-center md:text-left">
              <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)] md:drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
                Transform Your Game
              </h1>
              
              <p className="text-base md:text-xl lg:text-2xl text-white font-medium leading-relaxed max-w-2xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] md:drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
                Professional football coaching by semi-pro players who are passionate about developing the next generation of ballers
              </p>
            </div>
            
            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 pt-2">
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
