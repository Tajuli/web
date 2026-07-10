import Navbar from "@/components/sections/Navbar/Navbar";
import Hero from "@/components/sections/Hero/Hero";
import Services from "@/components/sections/Services/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs/WhyChooseUs";
import Works from "@/components/sections/Works/Works";
import Blog from "@/components/sections/Blog/Blog";
import FAQ from "@/components/sections/FAQ/FAQ";
import Contact from "@/components/sections/Contact/Contact";
import Footer from "@/components/sections/Footer/Footer";

export default function HomePage() {
  return (
    <main className="bg-page text-white">
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Works />
      <Blog />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
