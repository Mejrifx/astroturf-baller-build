import { useEffect, useRef } from "react";
import { Check, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Header animation
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Services cards animation
    servicesRef.current.forEach((service, index) => {
      if (service) {
        gsap.fromTo(
          service,
          {
            opacity: 0,
            y: 50,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
            delay: index * 0.15,
            scrollTrigger: {
              trigger: service,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  const services = [
    {
      title: "1-on-1 Training",
      price: "£30/session",
      image: "/build-a-baller-image1.jpg",
      features: [
        "Personalized training plan",
        "Individual attention",
        "Flexible scheduling",
        "Progress tracking",
        "Video analysis"
      ]
    },
    {
      title: "Small Group Sessions",
      price: "£20/session",
      image: "/build-a-baller-image2.jpg",
      features: [
        "Max 6 players per group",
        "Age-appropriate groups",
        "Competitive drills",
        "Team building",
        "Game scenarios"
      ],
      popular: true
    },
    {
      title: "Team Training",
      price: "Custom pricing",
      image: "/build-a-baller-image3.jpg",
      features: [
        "Full team coaching",
        "Tactical development",
        "Match preparation",
        "Team chemistry",
        "Custom programs"
      ]
    }
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Background grass texture */}
      <div className="absolute inset-0 grass-texture opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 drop-shadow-lg">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the training format that works best for you. All sessions are designed to maximize improvement while keeping the fun in football.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              ref={(el) => {
                if (el) servicesRef.current[index] = el;
              }}
              className={`group overflow-hidden hover-lift transition-all relative border-0 shadow-2xl rounded-[2rem] ${
                service.popular 
                  ? 'ring-2 ring-secondary shadow-glow bg-secondary/5' 
                  : 'bg-card'
              }`}
            >
              {service.popular && (
                <div className="absolute top-4 right-4 z-20 bg-secondary text-white px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wider shadow-lg">
                  Most Popular
                </div>
              )}
              
              {/* Image with overlay */}
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300 group-hover:-translate-y-2">
                  <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-md">
                    {service.title}
                  </h3>
                  <div className="inline-block px-3 py-1 bg-secondary/90 rounded-lg backdrop-blur-sm">
                    <p className="text-lg font-bold text-white">
                      {service.price}
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 pt-6">
                <ul className="space-y-4 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 group/item">
                      <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-secondary/20 transition-colors">
                        <Check className="w-3.5 h-3.5 text-secondary" />
                      </div>
                      <span className="text-muted-foreground font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  onClick={scrollToContact}
                  className={`w-full h-14 text-lg ${
                    service.popular
                      ? 'bg-secondary hover:bg-secondary/90 text-white shadow-lg shadow-secondary/20'
                      : 'bg-foreground hover:bg-foreground/90 text-white'
                  } font-bold rounded-2xl transition-all hover:scale-[1.02] active:scale-[0.98] group`}
                >
                  Book Now
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
