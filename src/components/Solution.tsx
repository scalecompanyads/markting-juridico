"use client";

import { CheckCircle2, TrendingUp, Search, Share2, ArrowRight, Shield, Layers, Target, PlaySquare, PenTool } from "lucide-react";
import { useLeadForm } from "@/contexts/LeadFormContext";
import Ecosystem from "@/components/Ecosystem";

const checklist = [
  {
    title: "Não terceirize a dor de cabeça",
    desc: "Esqueça a gestão de múltiplos freelancers.",
    colSpan: "md:col-span-2"
  },
  {
    title: "Infraestrutura Tecnológica",
    desc: "Páginas, vídeos e campanhas criadas pela mesma equipe.",
    colSpan: "md:col-span-2"
  },
  {
    title: "Foco em ROAS",
    desc: "Controle exato de quanto custa cada caso.",
    colSpan: "md:col-span-2"
  }
];

export default function SolutionAndServices() {
  const { open } = useLeadForm();

  return (
    <section id="servicos" className="section relative bg-[#010a15] overflow-hidden">
      {/* Dynamic Texture/Glow Background */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#00BAFF] rounded-full blur-[200px] opacity-[0.15] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#1630DF] rounded-full blur-[200px] opacity-[0.15] pointer-events-none" />
      
      <div className="container-page relative z-10">
        
        {/* Dobra 3: Solution Intro */}
        <div className="max-w-[1000px] mx-auto mb-32">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 mb-6 rounded-full border border-[rgba(0,186,255,0.3)] bg-[rgba(0,186,255,0.1)] text-[#00BAFF] text-xs font-bold tracking-widest uppercase">
              Operação In-House
            </span>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-[1.1] tracking-tight mb-6 text-white">
              Nós assumimos o controle. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BAFF] to-[#1630DF]">Você foca na advocacia.</span>
            </h2>
            <p className="text-[1.1rem] leading-relaxed text-[rgba(255,255,255,0.7)] max-w-[700px] mx-auto">
              Você não é dono de agência. Seu foco deve estar na tese e no atendimento, não em montar um quebra-cabeça de marketing com freelancers desconexos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {checklist.map((item, idx) => (
              <div 
                key={idx} 
                className={`relative flex flex-col group overflow-hidden ${item.colSpan}`}
                style={{
                  background: "rgba(255,255,255,0.02)",
                  borderRadius: "1.5rem",
                  padding: "2rem",
                  border: "1px solid rgba(255,255,255,0.05)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,186,255,0.05)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="w-12 h-12 rounded-2xl bg-[rgba(0,186,255,0.1)] border border-[rgba(0,186,255,0.2)] shadow-[0_0_15px_rgba(0,186,255,0.2)] flex items-center justify-center mb-6 relative z-10">
                  {idx === 0 ? <Shield size={24} color="#00BAFF" /> :
                   idx === 1 ? <Layers size={24} color="#00BAFF" /> :
                   <Target size={24} color="#00BAFF" />}
                </div>

                <h3 className="text-xl font-bold text-white mb-2 relative z-10">{item.title}</h3>
                <p className="text-[rgba(255,255,255,0.6)] text-base m-0 relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>


        {/* Dobra 4: Bento Box Máquina */}
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-[1.1] tracking-tight mb-6 text-white max-w-[900px] mx-auto">
              A Primeira Máquina 360° de <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#a1a1aa]">Aquisição Jurídica</span>
            </h2>
            <p className="text-[1.1rem] leading-relaxed text-[rgba(255,255,255,0.7)] max-w-[700px] mx-auto">
              Aceleração imediata de resultados. Entregamos a infraestrutura pronta para escalar seus contratos.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 mb-20">
            
            {/* Bento Item 1: Large */}
            <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-3xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] p-8 md:p-12 flex flex-col justify-between min-h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,186,255,0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#00BAFF]/10 border border-[#00BAFF]/30 flex items-center justify-center mb-8">
                  <Target size={28} className="text-[#00BAFF]" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Gestão de Tráfego</h3>
                <p className="text-lg text-[rgba(255,255,255,0.7)] leading-relaxed">
                  Otimização diária focada em conversão. Nós posicionamos o seu escritório no topo do Google exatamente no momento em que o seu cliente pesquisa pelo seu serviço, filtrando curiosos e atraindo quem tem dinheiro para pagar honorários.
                </p>
              </div>
            </div>

            {/* Bento Item 2: Medium Horizontal */}
            <div className="md:col-span-2 md:row-span-1 relative group overflow-hidden rounded-3xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] p-8 flex flex-col justify-center">
               <div className="absolute inset-0 bg-gradient-to-br from-[rgba(22,48,223,0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-duration-500" />
               <div className="relative z-10 flex items-start gap-6">
                 <div className="w-12 h-12 rounded-xl bg-[#1630DF]/20 border border-[#1630DF]/30 flex flex-shrink-0 items-center justify-center">
                   <PenTool size={24} className="text-[#6075ff]" />
                 </div>
                 <div>
                   <h3 className="text-2xl font-bold text-white mb-2">Landing Pages Premium</h3>
                   <p className="text-[rgba(255,255,255,0.7)]">Páginas de altíssima conversão, com visual clean e gatilhos focados na urgência do cliente.</p>
                 </div>
               </div>
            </div>

            {/* Bento Item 3: Small Square */}
            <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-3xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] p-8 flex flex-col justify-center items-center text-center">
               <div className="absolute inset-0 bg-gradient-to-t from-[rgba(255,255,255,0.05)] to-transparent opacity-0 group-hover:opacity-100 transition-duration-500" />
               <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 relative z-10">
                 <PlaySquare size={24} className="text-white" />
               </div>
               <h3 className="text-xl font-bold text-white mb-2 relative z-10">Edição Profissional</h3>
               <p className="text-sm text-[rgba(255,255,255,0.6)] relative z-10">Vídeos dinâmicos para Meta Ads que prendem a atenção.</p>
            </div>

            {/* Bento Item 4: Small Square */}
            <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-3xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] p-8 flex flex-col justify-center items-center text-center">
               <div className="absolute inset-0 bg-gradient-to-t from-[rgba(255,255,255,0.05)] to-transparent opacity-0 group-hover:opacity-100 transition-duration-500" />
               <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 relative z-10">
                 <Shield size={24} className="text-white" />
               </div>
               <h3 className="text-xl font-bold text-white mb-2 relative z-10">Criativos OAB</h3>
               <p className="text-sm text-[rgba(255,255,255,0.6)] relative z-10">Direção de arte alinhada ao Provimento 205.</p>
            </div>

          </div>

          <Ecosystem />

          <div className="text-center mt-12 mb-16 relative z-20">
             <button onClick={open} className="btn-shiny px-10 py-5 text-[1.1rem]">
               Quero estruturar minha Máquina 360°
             </button>
          </div>
        </div>
        
      </div>
    </section>
  );
}
