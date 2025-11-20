import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "James Wilson",
      age: "Parent of 12-year-old",
      text: "The coaches at BuildaBaller have transformed my son's confidence and ability. He's now playing for his school's first team and absolutely loves every session. The professional yet fun approach is exactly what young players need.",
      rating: 5,
      initials: "JW",
      gender: "male"
    },
    {
      name: "Sarah Mitchell",
      age: "Parent of 10-year-old",
      text: "My daughter has improved so much since joining BuildaBaller. The small group sessions are perfect - she gets plenty of attention and has made great friends. The coaches really know their stuff and it shows in every session.",
      rating: 5,
      initials: "SM",
      gender: "female"
    },
    {
      name: "David Thompson",
      age: "Parent of 14-year-old",
      text: "As a former player myself, I'm impressed by the quality of coaching. The technical drills, tactical understanding, and match scenarios are top-notch. My son has progressed tremendously and now plays at academy level.",
      rating: 5,
      initials: "DT",
      gender: "male"
    },
    {
      name: "Emma Roberts",
      age: "Parent of 9-year-old",
      text: "BuildaBaller strikes the perfect balance between structured learning and keeping it fun. My son looks forward to every session and his ball control has improved dramatically. Highly recommend to any parent!",
      rating: 5,
      initials: "ER",
      gender: "female"
    },
    {
      name: "Michael Chen",
      age: "Parent of 13-year-old",
      text: "The 1-on-1 sessions have been game-changing for my daughter. The personalized attention and video analysis really help her understand areas for improvement. She's become much more confident on the pitch.",
      rating: 5,
      initials: "MC",
      gender: "male"
    },
    {
      name: "Lisa Anderson",
      age: "Parent of 11-year-old",
      text: "Fantastic coaching from people who truly love the game. The team training has helped our son's squad become more cohesive and competitive. The results speak for themselves - they've won their last 5 matches!",
      rating: 5,
      initials: "LA",
      gender: "female"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grass-texture opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our Players Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Don't just take our word for it - hear from the parents and players who have experienced the BuildaBaller difference
          </p>
          
          {/* Call to action badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary/10 to-primary/10 px-6 py-3 rounded-full border-2 border-secondary/20 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Star className="w-5 h-5 text-secondary fill-secondary" />
            <span className="text-foreground font-semibold">
              Join hundreds of satisfied players and parents
            </span>
            <Star className="w-5 h-5 text-secondary fill-secondary" />
          </div>
        </div>

        {/* Testimonials Grid - Modern Masonry Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-8 hover-lift bg-card/50 backdrop-blur-sm border border-border/50 hover:border-secondary/50 transition-all relative overflow-hidden group rounded-3xl shadow-sm hover:shadow-xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Subtle background pattern */}
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-16 h-16 text-secondary transform rotate-180" />
              </div>

              <div className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-inner ${
                    testimonial.gender === 'male' 
                      ? 'bg-gradient-to-br from-blue-500/10 to-blue-600/10 text-blue-600' 
                      : 'bg-gradient-to-br from-purple-500/10 to-pink-500/10 text-purple-600'
                  }`}>
                    <span className="font-bold text-lg">
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-lg text-foreground leading-tight">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {testimonial.age}
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-muted-foreground leading-relaxed flex-grow">
                  "{testimonial.text}"
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

