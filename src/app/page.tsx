import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogosMarquee from "@/components/LogosMarquee";
import Problem from "@/components/Problem";
import ExpertiseSEO from "@/components/ExpertiseSEO";
import Team from "@/components/Team";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import { FinalCTA, Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogosMarquee />
        <Problem />
        <ExpertiseSEO />
        <Team />
        <About />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
