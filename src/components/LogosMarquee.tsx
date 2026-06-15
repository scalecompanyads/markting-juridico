"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const areas = [
  "Direito Previdenciário",
  "Direito Criminal",
  "Direito de Família",
  "Direito Tributário",
  "Direito Trabalhista",
  "Saúde Suplementar",
  "Direito Cível",
  "Direito Empresarial",
  "Direito Imobiliário",
  "Direito do Consumidor",
];

const stats = [
  { value: 200, prefix: "+", suffix: "", label: "Escritórios Atendidos" },
  { value: 50, prefix: "R$", suffix: "M+", label: "Investimento Gerenciado" },
  { value: 98, prefix: "", suffix: "%", label: "Taxa de Satisfação" },
  { value: 30, prefix: "15-", suffix: "", label: "dias para os primeiros leads" },
];

function AnimatedCounter({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const startTime = performance.now();

      const step = (currentTime: number) => {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        setCount(Math.floor(easeProgress * value));
        
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    }
  }, [isInView, value]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

export default function LogosMarquee() {
  return (
    <section className="relative py-24 bg-white border-y border-[rgba(0,0,0,0.05)] overflow-hidden">
      
      <div className="container-page relative z-10">
        
        {/* Certifications */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-10 mb-20"
        >
          <div className="bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-[rgba(0,0,0,0.05)] flex items-center justify-center relative overflow-hidden w-[160px] h-[160px] rounded-full p-6">
            <Image 
              src="/images/google-ads-badge.png" 
              alt="Google Ads Partner" 
              fill 
              style={{ objectFit: "contain", padding: "1.5rem" }} 
            />
          </div>
          
          <div className="bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-[rgba(0,0,0,0.05)] flex items-center justify-center relative overflow-hidden w-[160px] h-[160px] rounded-full p-6">
            <Image 
              src="/images/meta-bussiness-partner.jpg" 
              alt="Meta Business Partner" 
              fill 
              style={{ objectFit: "contain", padding: "1.5rem" }} 
            />
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 max-w-[1200px] mx-auto">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <div className=" text-[clamp(3rem,5vw,4.5rem)] font-bold tracking-tight leading-none text-[#020b16] mb-3">
                <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <div className="text-[0.8rem] font-bold text-[#64748b] uppercase tracking-[0.15em]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Outline Text Marquee */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 pointer-events-none z-0 opacity-[0.25] flex overflow-hidden">
        <div className="animate-marquee flex whitespace-nowrap gap-16 pr-16">
          {[...areas, ...areas].map((area, i) => (
            <span
              key={i}
              className="text-[clamp(4rem,8vw,8rem)] font-black uppercase tracking-wider text-transparent"
              style={{ WebkitTextStroke: "1px rgba(0,0,0,0.15)" }}
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
