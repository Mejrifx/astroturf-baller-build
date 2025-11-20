import { Check, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "1-on-1 Training",
      price: "From £40/session",
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
      price: "From £25/session",
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
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
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
              className={`group overflow-hidden hover-lift transition-all relative border-0 shadow-xl ${
                service.popular 
                  ? 'ring-2 ring-lime shadow-glow' 
                  : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {service.popular && (
                <div className="absolute top-4 right-4 z-20 bg-lime text-pitch px-4 py-1.5 rounded-full font-bold text-sm shadow-lg">
                  Most Popular
                </div>
              )}
              
              {/* Image with overlay */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pitch via-pitch/60 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6">
                  <h3 className="text-2xl font-bold text-primary-foreground mb-1">
                    {service.title}
                  </h3>
                  <p className="text-3xl font-bold text-lime">
                    {service.price}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 bg-card">
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-lime mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  onClick={scrollToContact}
                  className={`w-full ${
                    service.popular
                      ? 'bg-lime hover:bg-lime/90 text-pitch'
                      : 'bg-primary hover:bg-primary/90 text-primary-foreground'
                  } font-bold py-6 rounded-full transition-all hover:scale-105 group`}
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
