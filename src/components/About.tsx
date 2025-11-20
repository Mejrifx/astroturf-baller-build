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
      description: "Focused training sessions that improve technique, ball control, and game intelligence",
      image: "/build-a-baller-image4.jpg"
    },
    {
      icon: Trophy,
      title: "Semi-Pro Experience",
      description: "Learn from coaches who play at a high level and understand what it takes to succeed",
      image: "/build-a-baller-image1.jpg"
    },
    {
      icon: Users,
      title: "Fun & Structured",
      description: "Professional coaching in an engaging environment that keeps kids motivated and improving",
      image: "/build-a-baller-image6.jpg"
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Our players consistently improve their game and many progress to competitive teams",
      image: "/build-a-baller-image7.jpg"
    }
  ];

  return (
    <section id="about" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background grass texture */}
      <div className="absolute inset-0 grass-texture opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header - Integrated with Live Sessions Image */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-16 animate-fade-in group">
          {/* Mobile: Image Background */}
          <div className="md:hidden absolute inset-0">
            <img 
              src="/build-a-baller-image3.jpg" 
              alt="Live Sessions"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/60" />
          </div>

          {/* Desktop: Image Background */}
          <div className="hidden md:block absolute inset-0">
            <img 
              src="/build-a-baller-image3.jpg" 
              alt="Live Sessions"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50" />
          </div>

          {/* Content */}
          <div className="relative z-10 p-8 md:p-12 lg:p-16 min-h-[400px] md:min-h-[500px] flex flex-col justify-end">
            {/* Live Sessions Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 mb-6 w-fit">
              <span className="w-2 h-2 bg-lime rounded-full animate-pulse" />
              <span className="text-white text-xs font-bold">Live Sessions</span>
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg max-w-3xl">
              About Build A Baller
            </h2>

            {/* Description */}
            <p className="text-xl text-white/90 max-w-3xl leading-relaxed drop-shadow-md">
              Where passion meets expertise. We're three semi-professional footballers dedicated to helping young players reach their full potential through expert coaching, structured training, and genuine love for the game.
            </p>
          </div>
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

          {/* Mission Block - Top Right */}
          <div className="lg:col-span-8 bg-gradient-to-br from-pitch to-pitch/90 p-8 rounded-3xl shadow-xl border border-white/10 flex flex-col justify-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">
              Our Mission
            </h3>
            <p className="text-white/80 leading-relaxed text-balance">
              To develop the next generation of footballers by providing high-quality coaching that combines technical excellence, tactical understanding, and the pure joy of playing the beautiful game.
            </p>
          </div>

        </div>

        {/* Images Row - Above Features (Desktop only) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <div className="relative rounded-3xl overflow-hidden h-56 shadow-xl group">
            <img src="/build-a-baller-image4.jpg" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Training" />
          </div>
          <div className="relative rounded-3xl overflow-hidden h-56 shadow-xl group">
            <img src="/build-a-baller-image1.jpg" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Training" />
          </div>
          <div className="relative rounded-3xl overflow-hidden h-56 shadow-xl group">
            <img src="/build-a-baller-image6.jpg" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Training" />
          </div>
          <div className="relative rounded-3xl overflow-hidden h-56 shadow-xl group">
            <img src="/build-a-baller-image7.jpg" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Training" />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-lg border border-border hover:border-secondary transition-all hover:-translate-y-2"
              style={{ animationDelay: `${0.5 + (index * 0.1)}s` }}
            >
              {/* Mobile: Image Background */}
              <div className="md:hidden absolute inset-0">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/50" />
              </div>

              {/* Desktop: Card Background */}
              <div className="hidden md:block absolute inset-0 bg-card" />

              {/* Content */}
              <div className="relative z-10 p-6 min-h-[280px] md:min-h-0 flex flex-col justify-end md:justify-start">
                {/* Icon */}
                <div className="w-14 h-14 bg-secondary/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 group-hover:bg-secondary/30 transition-colors border border-white/10 md:bg-secondary/10 md:border-0">
                  <feature.icon className="w-7 h-7 text-white md:text-secondary" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white md:text-foreground mb-2 drop-shadow-lg md:drop-shadow-md">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-white/90 md:text-muted-foreground text-sm leading-relaxed drop-shadow-md md:drop-shadow-none">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
