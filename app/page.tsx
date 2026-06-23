import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import ProofBand from "@/components/ProofBand/ProofBand";
import Services from "@/components/Services/Services";
import Works from "@/components/Works/Works";
import ProcessSection from "@/components/ProcessSection/ProcessSection";
import WhyChoose from "@/components/WhyChoose/WhyChoose";
import ResultsStrip from "@/components/ResultsStrip/ResultsStrip";
import Stories from "@/components/Stories/Stories";
import FAQ from "@/components/FAQ/FAQ";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

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
