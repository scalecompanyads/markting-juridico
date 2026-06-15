"use client";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLeadForm } from "@/contexts/LeadFormContext";

export default function Hero() {
  const { open } = useLeadForm();

  return (
    <section className="relative min-h-[100svh] md:min-h-screen flex flex-col justify-end md:justify-center overflow-hidden bg-[#020b16] pt-[120px] pb-12 md:pt-0 md:pb-0">
      
      {/* Mobile Background Image */}
      <div 
        className="absolute inset-0 md:hidden bg-[url('/images/hero-mobile-bg.png')] bg-cover bg-top bg-no-repeat z-0" 
      />
      
      {/* Desktop Background Image */}
      <div 
        className="hidden md:block absolute inset-0 bg-[url('/images/hero-desktop-bg.png')] bg-cover bg-center bg-no-repeat z-0" 
      />

      {/* Overlays */}
      {/* Mobile Overlay: Escuro embaixo, transparente em cima */}
      <div className="absolute inset-0 md:hidden bg-gradient-to-t from-[#020b16] via-[#020b16] via-45% to-transparent z-0" />

      {/* Desktop Overlay: Escuro na esquerda, transparente na direita */}
      {/* Limitei a largura (w-[60%]) para que não vá tão para a direita */}
      <div className="hidden md:block absolute inset-y-0 left-0 w-[60%] bg-gradient-to-r from-[#020b16] via-[#020b16]/90 to-transparent z-0" />

      <div className="container-page relative z-10 w-full mt-auto md:mt-0">
        {/* max-w reduzido para evitar texto muito largo */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start text-left max-w-full md:max-w-[550px]"
        >
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] text-[rgba(255,255,255,0.8)] text-xs font-bold tracking-[0.15em] uppercase backdrop-blur-sm mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] inline-block" />
            Especialistas em Marketing Jurídico
          </div>

          {/* H1 */}
          <h1 className="text-[clamp(2rem,3.5vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-white m-0 mb-6">
            Agência de Marketing Jurídico que Entrega a Sua{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#1630DF]">
              Máquina de Aquisição
            </span>{" "}
            Pronta.
          </h1>

          {/* Subheadline */}
          <div className="flex flex-col gap-4 mb-8">
            <p className="text-[clamp(1rem,1.2vw,1.15rem)] font-medium text-[rgba(255,255,255,0.85)] leading-relaxed m-0">
              Esqueça o amadorismo de ter que contratar um gestor de tráfego, um designer e um editor separados.
            </p>
            <p className="text-[0.95rem] md:text-base text-[rgba(255,255,255,0.85)] leading-relaxed m-0">
              Nós estruturamos, executamos e otimizamos 100% da sua captação de clientes com previsibilidade e total respeito às normas da OAB.{" "}
              <strong className="text-white font-medium">Do primeiro clique ao contrato fechado.</strong>
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col items-start gap-4 w-full md:w-auto">
            <button
              onClick={open}
              className="inline-flex items-center justify-center gap-2 bg-[#3B82F6] text-white font-bold text-sm uppercase tracking-widest px-8 py-4 hover:bg-[#1630DF] transition-colors duration-300 w-full md:w-auto"
            >
  <WhatsAppIcon size={20} />
  Agendar Diagnóstico Gratuito
</button>
            <span className="text-[0.85rem] text-[rgba(255,255,255,0.85)]">
              Entenda onde seu escritório está perdendo dinheiro hoje.
            </span>
          </div>

        </motion.div>
      </div>

      {/* Bottom transition border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.1)] to-transparent" />
    </section>
  );
}
