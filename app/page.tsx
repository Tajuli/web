import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero/Hero";
import Services from "@/components/sections/Services/Services";
import About from "@/components/sections/About/About";
import WhyChooseUs from "@/components/sections/WhyChooseUs/WhyChooseUs";
import { JsonLd, contactPageSchema, webpageSchema, breadcrumbSchema } from "@/lib/jsonLd";

const Works = dynamic(() => import("@/components/sections/Works/Works"));
const Blog = dynamic(() => import("@/components/sections/Blog/Blog"));
const FAQ = dynamic(() => import("@/components/sections/FAQ/FAQ"));
const Contact = dynamic(() => import("@/components/sections/Contact/Contact"));

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
      <JsonLd data={[webpageSchema("Digital Marketing Agency in Bangladesh", "PrimeDigitor helps businesses turn SEO, paid ads, website development, content, branding, and software solutions into qualified leads, inquiries, and measurable growth.", "/"), contactPageSchema(), breadcrumbSchema([{ name: "Home", path: "/" }])]} />
    </main>
  );
}
