import { Card } from "@/components/ui/card";
import scottImg from "@/assets/coach-scott.jpg";
import baileyImg from "@/assets/coach-bailey.jpg";
import ryanImg from "@/assets/coach-ryan.jpg";

const Coaches = () => {
  const coaches = [
    {
      name: "Scott",
      image: scottImg,
      role: "Head Coach",
      bio: "Semi-professional player with 10+ years of experience. Specializes in technical development and tactical awareness."
    },
    {
      name: "Bailey",
      image: baileyImg,
      role: "Skills Coach",
      bio: "Dynamic coach focused on ball mastery and creative play. Known for making training sessions fun and engaging."
    },
    {
      name: "Ryan",
      image: ryanImg,
      role: "Performance Coach",
      bio: "Expert in physical conditioning and game psychology. Helps players develop mental toughness and confidence."
    }
  ];

  return (
    <section id="coaches" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 grass-texture" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 drop-shadow-lg">
            Meet Your Coaches
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three semi-professional footballers who live and breathe the game, dedicated to helping you become the best player you can be.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {coaches.map((coach, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover-lift bg-card border-2 border-border hover:border-primary transition-all group"
              style={{ animationDelay: `${index * 0.15}s` }}
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
      </div>
    </section>
  );
};

export default Coaches;
