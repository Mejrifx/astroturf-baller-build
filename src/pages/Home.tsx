import Hero from "@/components/Hero";
import About from "@/components/About";
import Coaches from "@/components/Coaches";
import Services from "@/components/Services";
import VideoGallery from "@/components/VideoGallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import MessengerButton from "@/components/MessengerButton";

const Home = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Coaches />
      <VideoGallery />
      <Services />
      <Testimonials />
      <Contact />
      <WhatsAppButton />
      <MessengerButton />
    </main>
  );
};

export default Home;
