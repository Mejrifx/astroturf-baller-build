import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/buildaballer-logo.png";

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Auto-redirect after 3 seconds
    const timer = setTimeout(() => {
      navigate("/home");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  const handleEnter = () => {
    navigate("/home");
  };

  return (
    <div className="min-h-screen grass-texture relative overflow-hidden flex items-center justify-center">
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-pitch/80 via-pitch/70 to-pitch/80" />
      
      {/* Animated glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-lime/20 via-transparent to-transparent animate-pulse" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-12 px-4 animate-entrance">
        <img 
          src={logo} 
          alt="BuildaBaller Football Coaching" 
          className="w-full max-w-2xl h-auto animate-glow"
        />
        
        <Button
          onClick={handleEnter}
          size="lg"
          className="bg-lime hover:bg-lime/90 text-pitch font-bold text-xl px-12 py-6 rounded-full shadow-glow transition-all hover:scale-105"
        >
          Enter Site
        </Button>
        
        <p className="text-primary-foreground/60 text-sm animate-pulse">
          Auto-redirecting in 3 seconds...
        </p>
      </div>
    </div>
  );
};

export default Splash;
