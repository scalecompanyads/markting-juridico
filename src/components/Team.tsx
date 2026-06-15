"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const squad = [
  {
    name: "Gabriel Dias",
    role: "Chief Organization Officer",
    image: "/images/hero-squad-1-480.webp",
    bg: "#f5a8bc",
  },
  {
    name: "Pedro Clark",
    role: "Chief Executive Officer",
    image: "/images/hero-squad-2-480.webp",
    bg: "#1630DF",
  },
  {
    name: "Vitor Escocard",
    role: "Sócio da Scale Company",
    image: "/images/hero-squad-3-480.webp",
    bg: "#4ecdc4",
  },
];

export default function Team() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="section relative" style={{ background: "rgba(255,255,255,0.015)" }}>
      <div className="container-page">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center", marginBottom: "4rem" }}
        >
          <h2 className="section-title">
            Aqui Não Existe <span>Amadorismo</span>
          </h2>
          <p className="section-subtitle">
            A Scale Company foi desenhada para profissionalizar o mercado. Você terá acesso a uma equipe executiva dedicada exclusivamente ao crescimento e controle do seu escritório.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          style={{
            display: "flex",
            width: "100%",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "1rem",
            boxShadow: "0 8px 64px rgba(0,0,0,0.6)",
            maxWidth: "900px",
            margin: "0 auto",
            height: "400px",
          }}
        >
          {squad.map((person, i) => (
            <div
              key={person.name}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                position: "relative",
                flex: hovered === i ? 2.6 : 1,
                overflow: "hidden",
                transition: "flex 0.5s cubic-bezier(0.22,1,0.36,1)",
                cursor: "pointer",
              }}
            >
              {/* BG color fallback */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: person.bg,
                  zIndex: 0,
                }}
              />
              {/* Photo */}
              <Image
                src={person.image}
                alt={`${person.name}, ${person.role}`}
                fill
                sizes="(max-width: 768px) 34vw, 28vw"
                style={{
                  objectFit: "cover",
                  objectPosition: "top",
                  zIndex: 1,
                  transition: "transform 0.5s ease",
                  transform: hovered === i ? "scale(1.04)" : "scale(1)",
                }}
                priority={i === 1}
              />
              {/* Overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)",
                  zIndex: 2,
                }}
              />
              {/* Name badge */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  bottom: 0,
                  zIndex: 3,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "1.5rem 1rem",
                  textAlign: "center",
                  opacity: hovered === i ? 1 : 0.7,
                  transition: "opacity 0.3s ease",
                }}
              >
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    color: "#fff",
                    lineHeight: 1.3,
                  }}
                >
                  {person.name}
                </p>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "rgba(255,255,255,0.85)",
                    marginTop: "0.25rem",
                  }}
                >
                  {person.role}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Operational Head & Certifications */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-16 max-w-[900px] mx-auto bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 shadow-2xl"
        >
          <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 relative">
            <Image 
              src="/images/google-ads-badge.png" 
              alt="Google Ads Search Certification Badge" 
              fill 
              style={{ objectFit: "contain" }} 
            />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-2">Google Ads Search Certified</h3>
            <p className="text-[rgba(255,255,255,0.85)] text-sm md:text-base leading-relaxed mb-4">
              Nossas campanhas de captação de clientes são rigorosamente estruturadas por uma equipe especializada. A <strong className="text-white">Scale Company</strong> possui a credencial oficial do Google (Skillshop) atestando maestria em estratégias de Search, o que garante máxima performance e previsibilidade no retorno do seu investimento.
            </p>
            <div className="inline-block bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#3B82F6] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              Qualidade Validada pelo Google
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
