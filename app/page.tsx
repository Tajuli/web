import Hero from "@/components/sections/Hero/Hero";
import Services from "@/components/sections/Services/Services";
import Works from "@/components/sections/Works/Works";
import About from "@/components/sections/About/About";
import WhyChooseUs from "@/components/sections/WhyChooseUs/WhyChooseUs";
import Blog from "@/components/sections/Blog/Blog";
import FAQ from "@/components/sections/FAQ/FAQ";
import Contact from "@/components/sections/Contact/Contact";

export default function HomePage() {
  return (
    <main className="bg-page text-white">
      <Hero />
      <Services />
      <Works />
      <About />
      <WhyChooseUs />
      <Blog />
      <FAQ />
      <Contact />
    </main>
  );
}
