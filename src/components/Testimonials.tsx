import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "James Wilson",
      age: "Parent of 12-year-old",
      text: "The coaches at BuildaBaller have transformed my son's confidence and ability. He's now playing for his school's first team and absolutely loves every session. The professional yet fun approach is exactly what young players need.",
      rating: 5,
      image: "👨"
    },
    {
      name: "Sarah Mitchell",
      age: "Parent of 10-year-old",
      text: "My daughter has improved so much since joining BuildaBaller. The small group sessions are perfect - she gets plenty of attention and has made great friends. The coaches really know their stuff and it shows in every session.",
      rating: 5,
      image: "👩"
    },
    {
      name: "David Thompson",
      age: "Parent of 14-year-old",
      text: "As a former player myself, I'm impressed by the quality of coaching. The technical drills, tactical understanding, and match scenarios are top-notch. My son has progressed tremendously and now plays at academy level.",
      rating: 5,
      image: "👨"
    },
    {
      name: "Emma Roberts",
      age: "Parent of 9-year-old",
      text: "BuildaBaller strikes the perfect balance between structured learning and keeping it fun. My son looks forward to every session and his ball control has improved dramatically. Highly recommend to any parent!",
      rating: 5,
      image: "👩"
    },
    {
      name: "Michael Chen",
      age: "Parent of 13-year-old",
      text: "The 1-on-1 sessions have been game-changing for my daughter. The personalized attention and video analysis really help her understand areas for improvement. She's become much more confident on the pitch.",
      rating: 5,
      image: "👨"
    },
    {
      name: "Lisa Anderson",
      age: "Parent of 11-year-old",
      text: "Fantastic coaching from people who truly love the game. The team training has helped our son's squad become more cohesive and competitive. The results speak for themselves - they've won their last 5 matches!",
      rating: 5,
      image: "👩"
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
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it - hear from the parents and players who have experienced the BuildaBaller difference
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 hover-lift bg-card border-2 border-border hover:border-secondary transition-all relative overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote icon background */}
              <div className="absolute -top-6 -right-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Quote className="w-32 h-32 text-secondary" />
              </div>

              <div className="relative z-10">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl shadow-lg">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-bold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.age}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary/10 to-primary/10 px-6 py-3 rounded-full border-2 border-secondary/20">
            <Star className="w-5 h-5 text-secondary fill-secondary" />
            <span className="text-foreground font-semibold">
              Join hundreds of satisfied players and parents
            </span>
            <Star className="w-5 h-5 text-secondary fill-secondary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

