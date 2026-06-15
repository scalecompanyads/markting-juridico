import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import { FinalCTA, Footer } from "@/components/Footer";

export default function DepoimentosPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen">
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
