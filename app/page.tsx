import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import Works from "@/components/Works/Works";
import Stories from "@/components/Stories/Stories";
import FAQ from "@/components/FAQ/FAQ";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function HomePage() {
  return (
    <main className="bg-page text-white">
      <Navbar />
      <Hero />
      <Services />
      <Works />
      <Stories />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
