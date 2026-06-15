"use client";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

import { Shield, Layers, Target, PlaySquare, PenTool } from "lucide-react";
import { useLeadForm } from "@/contexts/LeadFormContext";
import Ecosystem from "@/components/Ecosystem";

const checklist = [
  {
    title: "Operação In-House",
    desc: "Esqueça a gestão de múltiplos freelancers. Nós centralizamos tudo.",
    icon: <Shield size={24} className="text-[#3B82F6]" />
  },
  {
    title: "Infraestrutura Tecnológica",
    desc: "Páginas, vídeos e campanhas criadas pela mesma equipe focada.",
    icon: <Layers size={24} className="text-[#3B82F6]" />
  },
  {
    title: "Foco Absoluto em ROAS",
    desc: "Controle exato de quanto custa cada caso fechado para o seu caixa.",
    icon: <Target size={24} className="text-[#3B82F6]" />
  }
];

export default function SolutionAndServices() {
  const { open } = useLeadForm();

  return (
    <section id="servicos" className="section relative bg-[#020b16] border-y border-[rgba(255,255,255,0.05)] overflow-hidden">
      
      <div className="container-page relative z-10 py-20">
        
        {/* Dobra 3: Solution Intro */}
        <div className="max-w-[1000px] mx-auto mb-32 border-b border-[rgba(255,255,255,0.05)] pb-32">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-6 rounded-full border border-[rgba(59,130,246,0.2)] bg-[rgba(59,130,246,0.05)] text-[#3B82F6] text-xs font-bold tracking-[0.15em] uppercase">
              Operação Premium
            </span>
            <h2 className=" text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.1] tracking-tight mb-6 text-white">
              Nós assumimos o controle. <br/>
              <span className="text-[#3B82F6]">Você foca na advocacia.</span>
            </h2>
            <p className="text-[1.1rem] leading-relaxed text-[rgba(255,255,255,0.85)] max-w-[700px] mx-auto">
              Você não é dono de agência. Seu foco deve estar na tese e no atendimento, não em montar um quebra-cabeça de marketing com freelancers desconexos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {checklist.map((item, idx) => (
              <div 
                key={idx} 
                className="flex flex-col text-center items-center p-8 rounded-none border-x border-[rgba(255,255,255,0.05)] first:border-l-0 last:border-r-0"
              >
                <div className="w-14 h-14 rounded-full bg-[rgba(255,255,255,0.03)] flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-[rgba(255,255,255,0.85)] text-base m-0 leading-relaxed max-w-[280px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Dobra 4: A Máquina */}
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className=" text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.1] tracking-tight mb-6 text-white max-w-[900px] mx-auto">
              A Primeira Máquina 360° de <br/>
              <span className="text-[#3B82F6]">Aquisição Jurídica</span>
            </h2>
            <p className="text-[1.1rem] leading-relaxed text-[rgba(255,255,255,0.85)] max-w-[700px] mx-auto">
              Aceleração imediata de resultados. Entregamos a infraestrutura pronta para escalar seus contratos, respeitando rigorosamente o Provimento 205 da OAB.
            </p>
          </div>

          <Ecosystem />

          <div className="text-center mt-20 relative z-20">
             <button onClick={open} className="inline-flex items-center justify-center bg-[#3B82F6] text-white font-bold text-sm uppercase tracking-widest px-10 py-5 hover:bg-white hover:text-[#020b16] transition-colors duration-300">
  <WhatsAppIcon size={20} />
  Quero estruturar minha Máquina 360°
</button>
          </div>
        </div>
        
      </div>
    </section>
  );
}
