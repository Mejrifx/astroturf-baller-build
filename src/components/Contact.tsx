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
                      <p className="font-semibold">Located in Bury, Greater Manchester</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <Card ref={whatsappCtaRef} id="contact-form" className="p-6 md:p-8 lg:p-12 border-0 shadow-2xl bg-gradient-to-br from-[#25D366]/10 via-[#25D366]/5 to-transparent rounded-[2.5rem] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#25D366]/10 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#25D366] rounded-full mb-6 shadow-lg">
                {/* Official WhatsApp Logo SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 175.216 175.552"
                  className="w-10 h-10 fill-white"
                >
                  <path d="M87.584 0C39.251 0 0 39.251 0 87.584c0 15.584 4.267 30.176 11.733 42.7L0 175.552l45.568-11.733c12.524 7.467 27.116 11.733 42.7 11.733 48.333 0 87.584-39.251 87.584-87.584C175.168 39.251 135.917 0 87.584 0zm0 159.384c-13.85 0-26.85-3.65-38.15-10.033l-2.717-1.617-28.183 7.25 7.25-28.183-1.617-2.717c-6.383-11.3-10.033-24.3-10.033-38.15 0-39.55 32.217-71.767 71.767-71.767s71.767 32.217 71.767 71.767-32.217 71.767-71.767 71.767z" />
                  <path d="M128.517 98.8c-1.85-1.05-10.95-5.4-12.65-6.017-1.7-.617-2.933-.933-4.167.933-1.233 1.85-4.783 6.017-5.85 7.25-1.067 1.233-2.133 1.4-3.967.467-1.833-.933-7.733-2.85-14.733-9.083-5.45-4.85-9.133-10.833-10.2-12.65-1.067-1.817-.117-2.8.7-3.7.7-.7 1.567-1.817 2.333-2.733.767-.917 1.05-1.4 1.567-2.333.517-.933.067-1.75-.35-2.667-.417-.917-3.967-9.583-5.433-13.083-1.467-3.5-2.95-3.033-4.033-3.1-1.083-.067-2.333-.067-3.583-.067s-3.267.467-4.983 2.333c-1.717 1.867-6.55 6.4-6.55 15.6 0 9.2 6.7 18.1 7.633 19.35.933 1.25 12.883 19.633 31.183 27.55 4.55 1.933 8.1 3.1 10.85 3.967 4.55 1.4 8.683 1.2 11.933.733 3.25-.467 10.033-4.1 11.45-8.05 1.417-3.95 1.417-7.333.983-8.583-.433-1.25-1.583-1.983-3.433-3.033z" />
                </svg>
              </div>
              
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 drop-shadow-md">
                Book Your Session via WhatsApp
              </h3>
              
              <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto px-2">
                Get instant responses and book your training session directly through WhatsApp. Our coaches are ready to help you transform your game!
              </p>

              <a
                href="https://wa.me/+447496154688"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <Button 
                  size="lg"
                  className="w-full md:w-auto bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold text-base md:text-lg px-6 md:px-10 py-5 md:py-7 rounded-full shadow-2xl shadow-[#25D366]/30 transition-all hover:scale-105 group"
                >
                  <MessageCircle className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6" />
                  <span className="whitespace-nowrap">Message Us on WhatsApp</span>
                  <ArrowRight className="ml-2 md:ml-3 h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1" />
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
