"use client";

import { X, Search, Ghost, Users, ArrowRight } from "lucide-react";
import { useLeadForm } from "@/contexts/LeadFormContext";

const badLeadTypes = [
  {
    icon: <Ghost size={24} className="text-[#ef4444]" />,
    label: "Gente Curiosa",
    description: "Aqueles que querem apenas tirar dúvidas gratuitas pelo WhatsApp, sem a menor intenção de fechar um contrato. Você paga pelo clique e o seu tempo é desperdiçado.",
    colSpan: "md:col-span-2",
  },
  {
    icon: <Users size={24} className="text-[#f97316]" />,
    label: "Sem Recursos",
    description: "Não possuem capacidade financeira para arcar com os honorários da sua banca.",
    colSpan: "md:col-span-1",
  },
  {
    icon: <Search size={24} className="text-[#8b5cf6]" />,
    label: "Gente Fria",
    description: "Pessoas que estão apenas pesquisando preços no Google e não têm nenhuma urgência real na resolução do caso.",
    colSpan: "md:col-span-3",
  },
];

export default function Problem() {
  const { open } = useLeadForm();

  return (
    <section id="problema" className="section relative bg-[#000000] overflow-hidden border-t border-[rgba(255,255,255,0.05)]">
      {/* Dark Premium Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-[#ef4444] to-transparent opacity-20" />
      <div className="absolute -top-[300px] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#ef4444] rounded-full blur-[150px] opacity-10 pointer-events-none" />

      <div className="container-page relative z-10">
        
        <div className="max-w-[800px] mx-auto text-center mb-20 pt-10">
          <span className="inline-block px-3 py-1 mb-6 rounded-full border border-[rgba(239,68,68,0.2)] bg-[rgba(239,68,68,0.05)] text-[#ef4444] text-xs font-bold tracking-widest uppercase">
            A Dor do Advogado
          </span>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-[1.1] tracking-tight mb-6 text-white">
            Se você já se frustrou com outra agência, <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#ef4444] to-[#f97316]">a culpa não é do seu escritório.</span>
          </h2>
          <p className="text-[1.1rem] leading-relaxed text-[rgba(255,255,255,0.7)] max-w-[650px] mx-auto">
            O mercado está saturado de operações genéricas que tentam aplicar estratégias de varejo na advocacia. Eles vendem "cliques baratos" e entregam uma caixa de entrada lotada de problemas.
          </p>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1000px] mx-auto mb-20">
          {badLeadTypes.map((type, idx) => (
            <div
              key={type.label}
              className={`relative flex flex-col group overflow-hidden ${type.colSpan}`}
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.005) 100%)",
                borderRadius: "1.5rem",
                padding: "2.5rem",
                border: "1px solid rgba(255,255,255,0.05)",
                backdropFilter: "blur(20px)",
                boxShadow: "inset 0 1px 1px rgba(255,255,255,0.1), 0 20px 40px rgba(0,0,0,0.5)"
              }}
            >
              {/* Internal subtle glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(255,255,255,0.02)] to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] shadow-inner flex items-center justify-center mb-6">
                  {type.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                  {type.label}
                </h3>
                <p className="text-[rgba(255,255,255,0.6)] leading-relaxed flex-grow m-0 text-base">
                  {type.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Central Bold Statement */}
        <div className="relative max-w-[800px] mx-auto rounded-3xl overflow-hidden p-[1px]">
          {/* Animated border gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.2)] to-transparent opacity-50" />
          
          <div className="relative bg-[#050505] rounded-3xl p-10 md:p-14 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              A resposta da agência comum é sempre a mesma: <br className="hidden md:block"/>
              <span className="text-[#00BAFF] font-medium italic mt-2 inline-block">"Vamos testar mais um criativo."</span>
            </h3>
            <p className="text-[rgba(255,255,255,0.6)] text-lg max-w-[600px] mx-auto mb-10 leading-relaxed">
              Enquanto eles testam sem entender o funil do direito, você continua pagando a conta. Advocacia exige uma agência especializada focada no <strong>contrato fechado</strong>, não no clique solto.
            </p>

            <button
              onClick={open}
              className="inline-flex items-center gap-2 bg-white text-black font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-full hover:scale-105 hover:bg-[#00BAFF] hover:text-white transition-all duration-300"
            >
              Parar de perder dinheiro
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
