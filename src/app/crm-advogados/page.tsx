import Navbar from "@/components/Navbar";
import LegalCrmHeroPage from "@/components/LegalCrmHeroPage";
import { FinalCTA, Footer } from "@/components/Footer";

export const metadata = {
  title: "CRM Jurídico para Advogados | Scale Company",
  description:
    "Conheça o CRM jurídico da Scale para escritórios que precisam organizar atendimentos, acompanhar oportunidades e ganhar previsibilidade comercial.",
};

export default function CRMPage() {
  return (
    <>
      <Navbar />
      <main>
        <LegalCrmHeroPage />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
