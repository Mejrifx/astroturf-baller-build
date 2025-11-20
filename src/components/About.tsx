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

        {/* Main Content - Bento Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20 max-w-7xl mx-auto">
          {/* Stats Block - Top Left */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-card/80 backdrop-blur-sm p-6 rounded-3xl shadow-lg border border-white/20 hover:border-secondary/50 transition-all hover:-translate-y-1 group"
              >
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-1 group-hover:scale-110 transition-transform origin-left">
                  {stat.number}
                </div>
                <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Hero Image Block - Middle */}
          <div className="lg:col-span-4 row-span-2 relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <img 
              src="/build-a-baller-image4.jpg" 
              alt="Training session"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pitch/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 mb-2">
                <span className="w-2 h-2 bg-lime rounded-full animate-pulse" />
                <span className="text-white text-xs font-bold">Live Sessions</span>
              </div>
            </div>
          </div>

          {/* Mission Block - Top Right */}
          <div className="lg:col-span-4 bg-gradient-to-br from-pitch to-pitch/90 p-8 rounded-3xl shadow-xl border border-white/10 flex flex-col justify-center animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-2xl font-bold text-white mb-4">
              Our Mission
            </h3>
            <p className="text-white/80 leading-relaxed text-balance">
              To develop the next generation of footballers by providing high-quality coaching that combines technical excellence, tactical understanding, and the pure joy of playing the beautiful game.
            </p>
          </div>

          {/* Additional Images - Bottom Row */}
          <div className="lg:col-span-12 grid grid-cols-3 gap-4 max-w-4xl mx-auto animate-fade-up" style={{ animationDelay: '0.4s' }}>
             <div className="relative rounded-3xl overflow-hidden h-48 shadow-lg group">
                <img src="/build-a-baller-image5.jpg" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Training" />
             </div>
             <div className="relative rounded-3xl overflow-hidden h-48 shadow-lg group">
                <img src="/build-a-baller-image6.jpg" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Training" />
             </div>
             <div className="relative rounded-3xl overflow-hidden h-48 shadow-lg group">
                <img src="/build-a-baller-image7.jpg" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Training" />
             </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 bg-card rounded-3xl shadow-lg border border-border hover:border-secondary transition-all hover:-translate-y-2"
              style={{ animationDelay: `${0.5 + (index * 0.1)}s` }}
            >
              <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
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
