import Hero from "@/components/sections/Hero/Hero";
import Services from "@/components/sections/Services/Services";
import Works from "@/components/sections/Works/Works";
import About from "@/components/sections/About/About";
import WhyChooseUs from "@/components/sections/WhyChooseUs/WhyChooseUs";
import Blog from "@/components/sections/Blog/Blog";
import FAQ from "@/components/sections/FAQ/FAQ";
import Contact from "@/components/sections/Contact/Contact";
import { JsonLd, contactPageSchema, webpageSchema, breadcrumbSchema } from "@/lib/jsonLd";

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
      <JsonLd data={[webpageSchema("Digital Marketing Agency in Bangladesh", "PrimeDigitor helps businesses grow with SEO, paid ads, website development, content, branding, and software solutions.", "/"), contactPageSchema(), breadcrumbSchema([{ name: "Home", path: "/" }])]} />
    </main>
  );
}
