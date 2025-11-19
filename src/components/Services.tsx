import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "1-on-1 Training",
      price: "From £40/session",
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
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the training format that works best for you. All sessions are designed to maximize improvement while keeping the fun in football.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`p-8 hover-lift transition-all relative ${
                service.popular 
                  ? 'border-2 border-lime shadow-glow bg-gradient-to-b from-card to-muted' 
                  : 'border-2 border-border bg-card'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-lime text-pitch px-6 py-1 rounded-full font-bold text-sm shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-3xl font-bold text-primary">
                  {service.price}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
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
                } font-bold py-6 rounded-full transition-all hover:scale-105`}
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
