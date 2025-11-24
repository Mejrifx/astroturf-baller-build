import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Coaches = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const coachesRef = useRef<HTMLDivElement[]>([]);
  const additionalCoachesRef = useRef<HTMLDivElement[]>([]);
  const drawerRef = useRef<HTMLDivElement>(null);
  const [showAllCoaches, setShowAllCoaches] = useState(false);

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

    // Coaches cards animation
    coachesRef.current.forEach((coach, index) => {
      if (coach) {
        gsap.fromTo(
          coach,
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
              trigger: coach,
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

  // Animate drawer when showAllCoaches changes
  useEffect(() => {
    if (drawerRef.current) {
      if (showAllCoaches) {
        // First, set height to auto to measure the actual height
        gsap.set(drawerRef.current, { height: "auto" });
        const height = drawerRef.current.scrollHeight;
        gsap.set(drawerRef.current, { height: 0 });
        
        // Animate to the measured height
        gsap.to(drawerRef.current, {
          height: height,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          onComplete: () => {
            gsap.set(drawerRef.current, { height: "auto" });
          }
        });
        
        // Animate additional coaches cards with a slight delay
        setTimeout(() => {
          additionalCoachesRef.current.forEach((coach, index) => {
            if (coach) {
              gsap.fromTo(
                coach,
                {
                  opacity: 0,
                  y: 30,
                  scale: 0.95,
                },
                {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  duration: 0.5,
                  ease: "power3.out",
                  delay: index * 0.08,
                }
              );
            }
          });
        }, 200);
      } else {
        const height = drawerRef.current.scrollHeight;
        gsap.set(drawerRef.current, { height: height });
        
        gsap.to(drawerRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.4,
          ease: "power2.in",
        });
      }
    }
  }, [showAllCoaches]);

  const founders = [
    {
      name: "Bailey",
      image: "/Bailey Coach.jpg",
      role: "Skills Coach/Founder",
      bio: "Dynamic coach focused on ball mastery and creative play. Known for making training sessions fun and engaging."
    },
    {
      name: "Ryan",
      image: "/Ryan Coach.jpg",
      role: "Performance Coach/Founder",
      bio: "Expert in physical conditioning and game psychology. Helps players develop mental toughness and confidence."
    },
    {
      name: "Scott",
      image: "/Scott Coach.jpg",
      role: "Head Coach/Founder",
      bio: "Semi-professional player with 10+ years of experience. Specializes in technical development and tactical awareness."
    }
  ];

  const additionalCoaches = [
    {
      name: "Coach1",
      image: "/Coach1.jpg",
      role: "Coach",
      bio: "Custom Description"
    },
    {
      name: "Coach2",
      image: "/Coach2.jpg",
      role: "Coach",
      bio: "Custom Description"
    },
    {
      name: "Coach3",
      image: "/Coach3.jpg",
      role: "Coach",
      bio: "Custom Description"
    },
    {
      name: "Coach4",
      image: "/Coach4.jpg",
      role: "Coach",
      bio: "Custom Description"
    },
    {
      name: "Coach5",
      image: "/Coach5.jpg",
      role: "Coach",
      bio: "Custom Description"
    },
    {
      name: "Coach6",
      image: "/Coach6.jpg",
      role: "Coach",
      bio: "Custom Description"
    },
    {
      name: "Coach7",
      image: "/Coach7.jpg",
      role: "Coach",
      bio: "Custom Description"
    },
    {
      name: "Coach8",
      image: "/Coach8.jpg",
      role: "Coach",
      bio: "Custom Description"
    }
  ];

  return (
    <section id="coaches" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 grass-texture" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 drop-shadow-lg">
            Meet Your Coaches
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are three professional and semi-professional footballers who live and breathe the game, dedicated to helping you become the best player you can be.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {founders.map((coach, index) => (
            <Card 
              key={index}
              ref={(el) => {
                if (el) coachesRef.current[index] = el;
              }}
              className="overflow-hidden hover-lift bg-card border-2 border-border hover:border-primary transition-all group"
            >
              <div className="aspect-[4/5] overflow-hidden bg-muted">
                <img 
                  src={coach.image} 
                  alt={coach.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-foreground drop-shadow-md">
                    {coach.name}
                  </h3>
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                    {coach.role}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {coach.bio}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* See All Coaches Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowAllCoaches(!showAllCoaches)}
            className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all hover:scale-105 shadow-lg hover:shadow-xl"
          >
            {showAllCoaches ? "Hide Additional Coaches" : "See All Coaches"}
          </button>
        </div>

        {/* Drawer for Additional Coaches */}
        <div
          ref={drawerRef}
          className="overflow-hidden"
          style={{ height: 0, opacity: 0 }}
        >
          <div className="mt-12 pt-8 border-t border-border/50">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Additional Coaches
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {additionalCoaches.map((coach, index) => (
                <Card 
                  key={index}
                  ref={(el) => {
                    if (el) additionalCoachesRef.current[index] = el;
                  }}
                  className="overflow-hidden hover-lift bg-card border-2 border-border hover:border-primary transition-all group"
                >
                  <div className="aspect-[4/5] overflow-hidden bg-muted">
                    <img 
                      src={coach.image} 
                      alt={coach.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-foreground drop-shadow-md">
                        {coach.name}
                      </h3>
                      <span className="px-2 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full">
                        {coach.role}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {coach.bio}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coaches;
