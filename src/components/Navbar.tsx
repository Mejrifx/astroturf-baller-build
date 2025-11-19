import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isMobileMenuOpen
          ? "bg-gradient-to-b from-pitch/95 to-pitch/90 backdrop-blur-xl shadow-2xl border-b-2 border-lime/30"
          : isScrolled
          ? "md:bg-background/95 md:backdrop-blur-md md:shadow-lg md:border-b md:border-border/50 bg-transparent"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-20 relative">
          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center space-x-1">
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
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-lime scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden absolute right-0 p-2 rounded-lg text-black hover:bg-accent transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen 
              ? "max-h-96 opacity-100" 
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="relative bg-gradient-to-b from-pitch/95 via-pitch/90 to-pitch/95 backdrop-blur-xl shadow-2xl border-t-2 border-lime/30">
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-lime/5 via-transparent to-transparent pointer-events-none" />
            
            <div className="relative py-6 px-4 space-y-3">
              {navItems.map((item, index) => (
                <button
                  key={`${item.id}-${item.label}`}
                  onClick={() => scrollToSection(item.id)}
                  className={`group w-full text-left px-6 py-4 rounded-xl transition-all duration-300 relative overflow-hidden ${
                    activeSection === item.id
                      ? "bg-lime/20 text-primary-foreground font-bold shadow-lg shadow-lime/20 border-2 border-lime/40"
                      : "bg-background/10 text-primary-foreground/90 hover:bg-background/20 hover:text-primary-foreground border-2 border-transparent hover:border-lime/20"
                  }`}
                  style={{
                    animationDelay: `${index * 80}ms`,
                  }}
                >
                  {/* Hover effect gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-lime/0 via-lime/5 to-lime/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Content */}
                  <span className="relative z-10 flex items-center justify-between">
                    <span className="text-base font-semibold">{item.label}</span>
                    {activeSection === item.id && (
                      <span className="w-2 h-2 bg-lime rounded-full animate-pulse" />
                    )}
                  </span>
                  
                  {/* Active indicator line */}
                  {activeSection === item.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-lime to-transparent" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

