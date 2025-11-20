import { useState, useEffect } from "react";
import { Menu, X, Instagram, Facebook, Mail } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Detect active section
      const sections = ["hero", "about", "coaches", "services", "contact"];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "coaches", label: "Coaches" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
    { id: "contact", label: "Book Session" },
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/buildaballer_?igsh=cGN1amJtMmQwbGJt", label: "Instagram" },
    { icon: Facebook, href: "https://www.facebook.com/share/1At9dNjGqX/?mibextid=wwXIfr", label: "Facebook" },
    { icon: Mail, href: "mailto:buildaballerofficial@gmail.com", label: "Email" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isMobileMenuOpen
          ? "bg-gradient-to-b from-pitch/95 to-pitch/90 backdrop-blur-xl shadow-2xl border-b-2 border-secondary/30"
          : isScrolled
          ? "md:bg-background/95 md:backdrop-blur-md md:shadow-lg md:border-b md:border-border/50 bg-transparent"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Left */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("hero")}
              className="flex items-center transition-transform hover:scale-105 duration-300"
            >
              <img 
                src="/build a baller original.png" 
                alt="BuildaBaller" 
                className="h-16 w-auto"
              />
            </button>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex items-center space-x-1 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
              <button
                key={`${item.id}-${item.label}`}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group ${
                  activeSection === item.id
                    ? "text-black"
                    : "text-black/80 hover:text-black"
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                {activeSection === item.id && (
                  <span className="absolute inset-0 bg-primary/10 rounded-lg animate-in fade-in duration-300" />
                )}
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            ))}
          </div>

          {/* Social Icons - Right (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Sheet */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <button
                className="md:hidden p-2 rounded-lg transition-colors duration-200 text-black hover:bg-accent"
                aria-label="Toggle menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-[300px] p-0 border-l-2 border-secondary/30 bg-gradient-to-b from-pitch/98 via-pitch/95 to-pitch/98 backdrop-blur-xl shadow-2xl [&>button]:!right-4 [&>button]:!top-4 [&>button]:!h-8 [&>button]:!w-8 [&>button]:!text-white [&>button]:!opacity-100 [&>button]:!hover:bg-white/20 [&>button]:!hover:opacity-100 [&>button]:!z-30"
            >
              {/* No decorative overlay - it was causing visibility issues */}
              
              <div className="relative h-full flex flex-col py-8 px-4 z-20">
                {/* Logo Section */}
                <div className="mb-8 px-2 relative z-20">
                  <img 
                    src="/build a baller original.png" 
                    alt="BuildaBaller" 
                    className="h-14 w-auto"
                  />
                </div>

                {/* Navigation Items */}
                <nav className="flex-1 space-y-2 relative z-20">
                  {navItems.map((item, index) => (
                    <button
                      key={`${item.id}-${item.label}`}
                      onClick={() => scrollToSection(item.id)}
                      className={`group w-full text-left px-6 py-4 rounded-xl transition-all duration-300 relative overflow-hidden ${
                        activeSection === item.id
                          ? "bg-secondary/70 text-white font-bold shadow-lg shadow-secondary/50 border-2 border-secondary"
                          : "bg-white/50 text-pitch font-semibold hover:bg-white/60 border-2 border-white/30"
                      }`}
                      style={{
                        animationDelay: `${index * 80}ms`,
                      }}
                    >
                      {/* Hover effect gradient */}
                      <div className="absolute inset-0 bg-gradient-to-r from-secondary/0 via-secondary/30 to-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Content */}
                      <span className="relative z-10 flex items-center justify-between">
                        <span className="text-base font-semibold">{item.label}</span>
                        {activeSection === item.id && (
                          <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                        )}
                      </span>
                      
                      {/* Active indicator line */}
                      {activeSection === item.id && (
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />
                      )}
                    </button>
                  ))}
                </nav>

                {/* Mobile Social Links */}
                <div className="flex justify-center gap-4 pt-6 mt-6 border-t border-white/20 relative z-20">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-secondary/60 hover:bg-secondary/80 text-white transition-all duration-300 hover:scale-110 shadow-lg border-2 border-secondary/50"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5 text-white" />
                    </a>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
