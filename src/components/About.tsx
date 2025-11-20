import { Target, Trophy, Users, Award } from "lucide-react";

const About = () => {
  const stats = [
    { number: "500+", label: "Players Trained" },
    { number: "15+", label: "Years Combined Experience" },
    { number: "100%", label: "Player Satisfaction" },
    { number: "3", label: "Semi-Pro Coaches" }
  ];

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
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Our players consistently improve their game and many progress to competitive teams"
    }
  ];

  return (
    <section id="about" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background grass texture */}
      <div className="absolute inset-0 grass-texture opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About BuildaBaller
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Where passion meets expertise. We're three semi-professional footballers dedicated to helping young players reach their full potential through expert coaching, structured training, and genuine love for the game.
          </p>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20 max-w-7xl mx-auto">
          {/* Left - Images Grid */}
          <div className="grid grid-cols-2 gap-4 animate-fade-in">
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-2xl shadow-xl hover-lift">
                <img 
                  src="/build-a-baller-image4.jpg" 
                  alt="Training session"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="relative overflow-hidden rounded-2xl shadow-xl hover-lift">
                <img 
                  src="/build-a-baller-image5.jpg" 
                  alt="Training session"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative overflow-hidden rounded-2xl shadow-xl hover-lift">
                <img 
                  src="/build-a-baller-image6.jpg" 
                  alt="Training session"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="relative overflow-hidden rounded-2xl shadow-xl hover-lift">
                <img 
                  src="/build-a-baller-image7.jpg" 
                  alt="Training session"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right - Stats */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="text-center p-6 bg-card rounded-2xl shadow-lg border-2 border-border hover:border-secondary transition-all hover-lift"
                >
                  <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-primary to-primary/80 p-8 rounded-2xl shadow-xl border-2 border-primary/30">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-primary-foreground/90 leading-relaxed">
                To develop the next generation of footballers by providing high-quality coaching that combines technical excellence, tactical understanding, and the pure joy of playing the beautiful game.
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 bg-card rounded-2xl shadow-lg border-2 border-border hover:border-secondary transition-all hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
