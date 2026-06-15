import Navbar from "@/components/Navbar";
import Solution from "@/components/Solution";
import { FinalCTA, Footer } from "@/components/Footer";

export default function ServicosPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen">
        <Solution />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
