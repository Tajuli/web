import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Works from "@/components/Works";
import ProcessSection from "@/components/ProcessSection";
import Clients from "@/components/Clients";
import Stories from "@/components/Stories";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="bg-page text-white">
      <Navbar />
      <Hero />
      <Services />
      <Works />
      <ProcessSection />
      <Clients />
      <Stories />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
