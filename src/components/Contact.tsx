import { useEffect, useRef } from "react";
import { Mail, Phone, MapPin, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);
  const whatsappCtaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Header animation
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Contact info animation
    if (contactInfoRef.current) {
      gsap.fromTo(
        contactInfoRef.current,
        {
          opacity: 0,
          x: -50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contactInfoRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // WhatsApp CTA animation
    if (whatsappCtaRef.current) {
      gsap.fromTo(
        whatsappCtaRef.current,
        {
          opacity: 0,
          y: 40,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: whatsappCtaRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="contact" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 grass-texture" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 drop-shadow-lg">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your football journey? Contact us to book a session or ask any questions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Contact Info */}
          <div id="contact-info" ref={contactInfoRef} className="space-y-6">
            <div className="bg-pitch p-8 rounded-[2.5rem] shadow-xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-lime/20 rounded-full blur-3xl -mr-16 -mt-16" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2 drop-shadow-md">Contact Information</h3>
                <p className="text-white/80 mb-8">Reach out to us directly - we're here to help!</p>
                
                <div className="space-y-6">
                  <a href="mailto:buildaballerofficial@gmail.com" className="flex items-center gap-4 group p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                    <div className="w-12 h-12 bg-lime rounded-xl flex items-center justify-center text-pitch">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60 font-medium mb-0.5">Email Us</p>
                      <p className="font-semibold group-hover:text-lime transition-colors">buildaballerofficial@gmail.com</p>
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

          {/* WhatsApp CTA */}
          <Card ref={whatsappCtaRef} id="contact-form" className="p-8 lg:p-12 border-0 shadow-2xl bg-gradient-to-br from-[#25D366]/10 via-[#25D366]/5 to-transparent rounded-[2.5rem] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#25D366]/10 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#25D366] rounded-full mb-6 shadow-lg">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 drop-shadow-md">
                Book Your Session via WhatsApp
              </h3>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Get instant responses and book your training session directly through WhatsApp. Our coaches are ready to help you transform your game!
              </p>

              <a
                href="https://wa.me/+447496154688"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg"
                  className="bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold text-lg px-10 py-7 rounded-full shadow-2xl shadow-[#25D366]/30 transition-all hover:scale-105 group"
                >
                  <MessageCircle className="mr-3 h-6 w-6" />
                  Message Us on WhatsApp
                  <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>

              <p className="text-sm text-muted-foreground mt-6">
                Click to open WhatsApp and start a conversation
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
