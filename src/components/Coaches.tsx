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
      // Temporarily show to measure height
      const wasHidden = drawerRef.current.style.display === "none";
      if (wasHidden) {
        drawerRef.current.style.display = "block";
        drawerRef.current.style.visibility = "hidden";
      }
      
      const height = drawerRef.current.scrollHeight;
      
      if (showAllCoaches) {
        // Enable interaction and visibility
        drawerRef.current.style.display = "block";
        drawerRef.current.style.visibility = "visible";
        drawerRef.current.style.pointerEvents = "auto";
        
        // Set initial state
        gsap.set(drawerRef.current, { 
          height: 0,
          opacity: 0
        });
        
        // Animate open
        gsap.to(drawerRef.current, {
          height: height,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          onComplete: () => {
            drawerRef.current!.style.height = "auto";
            // Refresh ScrollTrigger after layout change
            ScrollTrigger.refresh();
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
        // Animate close
        gsap.to(drawerRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.4,
          ease: "power2.in",
          onComplete: () => {
            // Hide completely to prevent layout interference
            drawerRef.current!.style.display = "none";
            drawerRef.current!.style.visibility = "hidden";
            drawerRef.current!.style.pointerEvents = "none";
            drawerRef.current!.style.height = "0";
            // Refresh ScrollTrigger after layout change
            ScrollTrigger.refresh();
          }
        });
      }
    }
  }, [showAllCoaches]);

  const founders = [
    {
      name: "Bailey",
      image: "/Bailey Coach.jpg",
      role: "Skills Coach/Founder",
      bio: "Earned a professional contract with Accrington Stanley while playing for Clitheroe FC. Brings elite-level experience and a proven pathway from grassroots to professional football."
    },
    {
      name: "Ryan",
      image: "/Ryan Coach.jpg",
      role: "Performance Coach/Founder",
      bio: "Academy graduate of Oldham Athletic with professional experience at Ramsbottom United and Longridge Town. Combines elite youth development knowledge with senior football expertise."
    },
    {
      name: "Scott",
      image: "/Scott Coach.jpg",
      role: "Head Coach/Founder",
      bio: "Altrincham FC academy product with extensive semi-professional experience at Newcastle Town, Bacup Borough, and Daisy Hill. Specializes in technical development and tactical awareness."
    }
  ];

  const additionalCoaches = [
    {
      name: "Josh",
      image: "/Coach1.jpg",
      role: "Head Coach",
      bio: "Currently captaining Elton Vale with extensive academy experience throughout his youth career. Brings strong leadership qualities and a deep understanding of player development."
    },
    {
      name: "Lewis",
      image: "/Coach2.jpg",
      role: "Coach",
      bio: "Currently playing for Radcliffe FC's youth team while regularly training with the first team. Offers unique insights into the transition from youth to senior football."
    },
    {
      name: "Harry",
      image: "/Coach3.jpg",
      role: "Coach",
      bio: "Currently playing for Bury FC's youth team with a strong foundation in academy football. Provides current, relevant experience in elite youth development pathways."
    },
    {
      name: "Dylan",
      image: "/Coach4.jpg",
      role: "Coach",
      bio: "Currently playing for Radcliffe FC's first team with an impressive scoring record, netting 2 goals in his 2 most recent appearances. Demonstrates the results of dedicated training and development."
    },
    {
      name: "Kyle",
      image: "/Coach5.jpg",
      role: "Coach",
      bio: "Currently playing for Elton Vale with semi-professional experience at Prestwich Heys and Daisy Hill. Combines current playing experience with proven semi-pro credentials."
    },
    {
      name: "Callum",
      image: "/Coach6.jpg",
      role: "Coach",
      bio: "Currently playing professionally for Fleetwood FC with a distinguished youth career at Everton FC. Brings Premier League academy standards and professional football expertise."
    },
    {
      name: "Clarke",
      image: "/Coach7.jpg",
      role: "Coach",
      bio: "Currently playing for Tottington United on dual registration with Radcliffe FC. Academy graduate of Accrington Stanley, offering professional academy training methods."
    },
    {
      name: "Max",
      image: "/Coach8.jpg",
      role: "Coach",
      bio: "Currently playing for Radcliffe FC's youth team and recently featured in a successful FA Youth Cup campaign. Brings experience of competing at the highest level of youth football."
    }
  ];

  return (
    <section id="coaches" className="py-24 bg-muted/30 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 grass-texture overflow-hidden" />
      
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
          style={{ 
            display: "none",
            height: 0,
            opacity: 0,
            visibility: "hidden",
            pointerEvents: "none"
          }}
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
