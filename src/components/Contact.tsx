import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to a backend
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 grass-texture" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your football journey? Contact us to book a session or ask any questions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div id="contact-info" className="space-y-6 animate-slide-in-right">
            <div className="bg-pitch p-8 rounded-[2.5rem] shadow-xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-lime/20 rounded-full blur-3xl -mr-16 -mt-16" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">Contact Information</h3>
                <p className="text-white/80 mb-8">Reach out to us directly or fill out the form.</p>
                
                <div className="space-y-6">
                  <a href="mailto:info@buildaballer.com" className="flex items-center gap-4 group p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                    <div className="w-12 h-12 bg-lime rounded-xl flex items-center justify-center text-pitch">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60 font-medium mb-0.5">Email Us</p>
                      <p className="font-semibold group-hover:text-lime transition-colors">info@buildaballer.com</p>
                    </div>
                  </a>

                  <a href="tel:+447123456789" className="flex items-center gap-4 group p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                    <div className="w-12 h-12 bg-lime rounded-xl flex items-center justify-center text-pitch">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60 font-medium mb-0.5">Call Us</p>
                      <p className="font-semibold group-hover:text-lime transition-colors">+44 7123 456 789</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5">
                    <div className="w-12 h-12 bg-lime rounded-xl flex items-center justify-center text-pitch">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60 font-medium mb-0.5">Location</p>
                      <p className="font-semibold">Various locations across the area</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card id="contact-form" className="p-8 lg:p-10 border-0 shadow-2xl bg-card rounded-[2.5rem] animate-fade-up">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Book a Session
            </h3>
            <p className="text-muted-foreground mb-8">Fill out the form below and we'll get back to you shortly.</p>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground ml-1">Name</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12 rounded-xl bg-muted/30 border-transparent focus:border-secondary focus:bg-background transition-all"
                    placeholder="John Smith"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground ml-1">Phone</label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="h-12 rounded-xl bg-muted/30 border-transparent focus:border-secondary focus:bg-background transition-all"
                    placeholder="+44 7123 456789"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground ml-1">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-12 rounded-xl bg-muted/30 border-transparent focus:border-secondary focus:bg-background transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground ml-1">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="rounded-xl bg-muted/30 border-transparent focus:border-secondary focus:bg-background transition-all resize-none p-4"
                  placeholder="Tell us about your football goals..."
                />
              </div>

              <Button 
                type="submit"
                className="w-full h-14 text-lg bg-secondary hover:bg-secondary/90 text-white font-bold rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-secondary/25 mt-2"
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
