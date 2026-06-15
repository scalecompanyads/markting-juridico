"use client";

import { motion } from "framer-motion";
import { Briefcase, Target, TrendingUp, Scale, Gavel } from "lucide-react";

export default function ExpertiseSEO() {
  return (
    <section className="relative py-32 bg-[#010a12] border-t border-[rgba(255,255,255,0.02)] overflow-hidden">
       {/* Background subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#3B82F6] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="container-page relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center md:text-left md:max-w-3xl"
        >
          <h2 className="text-[#3B82F6] font-semibold tracking-wider text-sm md:text-base uppercase mb-4">
            A Autoridade em Captação
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
            Por que uma Agência de Marketing Jurídico muda o jogo do seu escritório?
          </h3>
          <p className="text-[rgba(255,255,255,0.85)] text-lg leading-relaxed">
            A Scale Company não é uma agência genérica. Somos um <strong className="text-white font-medium">parceiro estratégico focado no mercado jurídico</strong>, especializado em acelerar bancas de advogados através de estratégias consolidadas, com total obediência ao Provimento 205/2021 da OAB.
          </p>
        </motion.div>

        <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Tráfego Pago */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[rgba(255,255,255,0.01)] border border-[rgba(255,255,255,0.05)] p-10 flex flex-col hover:bg-[rgba(255,255,255,0.03)] transition-colors duration-500"
          >
            <div className="w-14 h-14 rounded-full bg-[#3B82F6]/10 flex items-center justify-center text-[#3B82F6] mb-6">
              <Target size={28} strokeWidth={1.5} />
            </div>
            <h4 className="text-xl font-bold text-white mb-4">Tráfego Pago para Advogado</h4>
            <p className="text-[rgba(255,255,255,0.85)] leading-relaxed text-sm">
              Dominamos campanhas de pesquisa e conscientização. A <strong className="text-[rgba(255,255,255,0.8)] font-medium">captação digital na advocacia</strong> exige precisão cirúrgica: posicionamos seu escritório exatamente onde o cliente de alto valor busca por soluções. Seja em causas de família, tributárias ou empresariais.
            </p>
          </motion.div>

          {/* Card 2: Google vs Meta */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[rgba(255,255,255,0.01)] border border-[rgba(255,255,255,0.05)] p-10 flex flex-col hover:bg-[rgba(255,255,255,0.03)] transition-colors duration-500"
          >
            <div className="w-14 h-14 rounded-full bg-[#3B82F6]/10 flex items-center justify-center text-[#3B82F6] mb-6">
              <TrendingUp size={28} strokeWidth={1.5} />
            </div>
            <h4 className="text-xl font-bold text-white mb-4">Estratégias de Conversão</h4>
            <p className="text-[rgba(255,255,255,0.85)] leading-relaxed text-sm">
              Implementamos <strong className="text-[rgba(255,255,255,0.8)] font-medium">campanhas focadas na jornada do cliente</strong>. Usamos o Google Ads para quem tem urgência (fundo de funil) e Meta Ads (Instagram/Facebook) para construir autoridade e relacionamento de forma contínua.
            </p>
          </motion.div>

          {/* Card 3: Gestor Especializado */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[rgba(255,255,255,0.01)] border border-[rgba(255,255,255,0.05)] p-10 flex flex-col hover:bg-[rgba(255,255,255,0.03)] transition-colors duration-500"
          >
            <div className="w-14 h-14 rounded-full bg-[#3B82F6]/10 flex items-center justify-center text-[#3B82F6] mb-6">
              <Briefcase size={28} strokeWidth={1.5} />
            </div>
            <h4 className="text-xl font-bold text-white mb-4">Gestor de Tráfego para Advogados</h4>
            <p className="text-[rgba(255,255,255,0.85)] leading-relaxed text-sm">
              Esqueça as métricas de vaidade. Nossa <strong className="text-[rgba(255,255,255,0.8)] font-medium">análise de performance</strong> acompanha o seu CAC (Custo de Aquisição de Cliente) real, filtrando contatos especulativos e entregando leads verdadeiramente qualificados no seu WhatsApp.
            </p>
          </motion.div>

        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative min-h-[400px] md:h-[500px] border border-[rgba(255,255,255,0.05)] bg-[rgba(1,15,28,0.5)] p-8 md:p-10 flex flex-col justify-center overflow-hidden"
          >
             {/* Decorative lines */}
             <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[rgba(255,255,255,0.1)] to-transparent" />
             <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.1)] to-transparent" />
             
             <Scale size={180} strokeWidth={0.5} className="text-[#3B82F6] opacity-10 absolute -right-10 -bottom-10 pointer-events-none" />
             
             <h4 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-snug">
               A evolução da sua advocacia exige parceiros estratégicos.
             </h4>
             <p className="text-[rgba(255,255,255,0.85)] leading-relaxed">
               Escalar uma banca exige entender profundamente as normas do Provimento 205. Um modelo de <strong className="text-[rgba(255,255,255,0.8)] font-medium">aquisição especializada</strong> garante que suas campanhas respeitem a ética da OAB, posicionando você à frente de escritórios que ainda dependem apenas do boca a boca.
             </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div>
              <div className="flex items-center gap-4 mb-3">
                <div className="w-1 h-6 bg-[#3B82F6]" />
                <h5 className="text-white font-bold text-lg">Especialidade Comprovada</h5>
              </div>
              <p className="text-[rgba(255,255,255,0.85)] text-sm md:text-base leading-relaxed pl-5">
                Não arrisque seu investimento com quem não entende o mercado de honorários. Somos referência na prestação de serviços de <strong className="text-[rgba(255,255,255,0.85)] font-medium">marketing focado em resultados reais</strong> e captação digital previsível B2B/B2C.
              </p>
            </div>
            
            <div>
              <div className="flex items-center gap-4 mb-3">
                <div className="w-1 h-6 bg-[#3B82F6]" />
                <h5 className="text-white font-bold text-lg">Retorno Escalonável</h5>
              </div>
              <p className="text-[rgba(255,255,255,0.85)] text-sm md:text-base leading-relaxed pl-5">
                Implementando um funil de <strong className="text-[rgba(255,255,255,0.85)] font-medium">anúncios online bem calibrados</strong>, conseguimos transformar um orçamento de marketing previsível no fluxo de caixa constante do seu escritório.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-3">
                <div className="w-1 h-6 bg-[#3B82F6]" />
                <h5 className="text-white font-bold text-lg">Gestão e Execução</h5>
              </div>
              <p className="text-[rgba(255,255,255,0.85)] text-sm md:text-base leading-relaxed pl-5">
                Da landing page premium (OAB Compliance) à otimização diária das campanhas pela nossa <strong className="text-[rgba(255,255,255,0.85)] font-medium">equipe de performance</strong>, você não precisa se preocupar com tecnologia, apenas com o fechamento do contrato.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
