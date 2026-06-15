"use client";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

import { motion } from "framer-motion";
import { X, Search, Ghost, Users, ArrowRight } from "lucide-react";
import { useLeadForm } from "@/contexts/LeadFormContext";

const badLeadTypes = [
  {
    icon: <Ghost size={24} className="text-[#3B82F6]" />,
    label: "Gente Curiosa",
    description: "Aqueles que querem apenas tirar dúvidas gratuitas pelo WhatsApp, sem a menor intenção de fechar um contrato. Você paga pelo clique e o seu tempo é desperdiçado.",
  },
  {
    icon: <Users size={24} className="text-[#3B82F6]" />,
    label: "Sem Recursos",
    description: "Não possuem capacidade financeira para arcar com os honorários ou não estão no momento certo de contratar uma banca especializada.",
  },
  {
    icon: <Search size={24} className="text-[#3B82F6]" />,
    label: "Gente Fria",
    description: "Pessoas que estão apenas pesquisando preços no Google e não têm nenhuma urgência real na resolução do caso.",
  },
];

export default function Problem() {
  const { open } = useLeadForm();

  return (
    <section id="problema" className="section relative bg-[#f8fafc] overflow-hidden border-b border-[rgba(0,0,0,0.05)]">
      
      <div className="container-page relative z-10 pt-10 pb-20">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-[800px] mx-auto text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full border border-[rgba(59,130,246,0.2)] bg-[rgba(59,130,246,0.05)] text-[#0066cc] text-xs font-bold tracking-[0.15em] uppercase">
            A Dor do Advogado
          </span>
          <h2 className=" text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.1] tracking-tight mb-6 text-[#020b16]">
            Se você já se frustrou com outra agência, <span className="text-[#0066cc]">a culpa não é do seu escritório.</span>
          </h2>
          <p className="text-[1.1rem] leading-relaxed text-[#475569] max-w-[650px] mx-auto">
            O mercado está saturado de operações genéricas que tentam aplicar estratégias de varejo na advocacia. Eles vendem "cliques baratos" e entregam uma caixa de entrada lotada de problemas.
          </p>
        </motion.div>

        {/* Clean Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1100px] mx-auto mb-24">
          {badLeadTypes.map((type, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              key={type.label}
              className="flex flex-col p-8 rounded-2xl bg-white border border-[#e2e8f0] shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-[#f1f5f9] flex items-center justify-center mb-6">
                {type.icon}
              </div>
              
              <h3 className="text-xl font-bold text-[#0f172a] mb-3 tracking-tight">
                {type.label}
              </h3>
              <p className="text-[#475569] leading-relaxed m-0 text-base">
                {type.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Central Bold Statement */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-[900px] mx-auto text-center"
        >
          <div className="inline-block bg-white rounded-3xl p-10 md:p-14 border border-[#e2e8f0] shadow-sm">
            <h3 className=" text-2xl md:text-3xl font-bold text-[#0f172a] mb-6">
              A resposta da agência comum é sempre a mesma: <br className="hidden md:block"/>
              <span className="text-[#0066cc] italic mt-2 inline-block">"Vamos testar mais um criativo."</span>
            </h3>
            <p className="text-[#475569] text-lg max-w-[600px] mx-auto mb-10 leading-relaxed">
              Enquanto eles testam sem entender o funil do direito, você continua pagando a conta. Advocacia exige uma agência especializada focada no <strong className="text-[#0f172a] font-bold">contrato fechado</strong>, não no clique solto.
            </p>

            <button
              onClick={open}
              className="inline-flex items-center gap-2 bg-[#020b16] text-white font-bold text-sm uppercase tracking-widest px-8 py-4 hover:bg-[#3B82F6] hover:scale-105 transition-all duration-300"
            >
  <WhatsAppIcon size={20} />
  Parar de perder dinheiro
</button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
