import Hero from "@/components/Hero";
import About from "@/components/About";
import Coaches from "@/components/Coaches";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

const Home = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Coaches />
      <Services />
      <Contact />
    </main>
  );
};

export default Home;
