import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProofBand from "@/components/ProofBand";
import Services from "@/components/Services";
import Works from "@/components/Works";
import ProcessSection from "@/components/ProcessSection";
import WhyChoose from "@/components/WhyChoose";
import ResultsStrip from "@/components/ResultsStrip";
import Stories from "@/components/Stories";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="bg-page text-white">
      <Navbar />
      <Hero />
      <ProofBand />
      <Services />
      <Works />
      <ProcessSection />
      <WhyChoose />
      <ResultsStrip />
      <Stories />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
