import { Target, Trophy, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Skill Development",
      description: "Focused training sessions that improve technique, ball control, and game intelligence"
    },
    {
      icon: Trophy,
      title: "Semi-Pro Experience",
      description: "Learn from coaches who play at a high level and understand what it takes to succeed"
    },
    {
      icon: Users,
      title: "Fun & Structured",
      description: "Professional coaching in an engaging environment that keeps kids motivated and improving"
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What We Do
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            BuildaBaller is where passion meets expertise. We're three semi-professional footballers dedicated to helping young players reach their full potential through expert coaching, structured training, and genuine love for the game.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-8 hover-lift bg-card border-2 border-border hover:border-primary transition-all"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 shadow-pitch">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
