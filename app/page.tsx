import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import JourneyMarquee from "@/components/sections/JourneyMarquee";
import Journey from "@/components/sections/Journey";
import About from "@/components/sections/About";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <JourneyMarquee />
      <Journey />
      <FeaturedProjects />
      <Achievements />
      <Contact />
      <Footer />
    </>
  );
}