import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Principles from "@/components/Principles";
import Industries from "@/components/Industries";
import About from "@/components/About";
import Solutions from "@/components/Solutions";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Principles />
        <Industries />
        <About />
        <Solutions />
        <Services />
        <Stats />
      </main>
      <Footer />
    </div>
  );
}
