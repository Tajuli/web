import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Works from "@/components/Works";
import Clients from "@/components/Clients";
import Stories from "@/components/Stories";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="bg-page text-white">
      <Navbar />
      <Hero />
      <Services />
      <Works />
      <Clients />
      <Stories />
      <Contact />
      <Footer />
    </main>
  );
}
