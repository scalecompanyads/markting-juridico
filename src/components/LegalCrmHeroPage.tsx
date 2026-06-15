"use client";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Hls from "hls.js";
import { useLeadForm } from "@/contexts/LeadFormContext";

const videoSrc =
  "https://stream.mux.com/T6oQJQ02cQ6N01TR6iHwZkKFkbepS34dkkIc9iukgy400g.m3u8";

const posterSrc =
  "https://images.unsplash.com/photo-1647356191320-d7a1f80ca777?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRhcmslMjB0ZWNobm9sb2d5JTIwbmV1cmFsJTIwbmV0d29ya3xlbnwxfHx8fDE3Njg5NzIyNTV8MA&ixlib=rb-4.1.0&q=80&w=1080";

function DashboardFrame() {
  return (
    <motion.div
      id="dashboard"
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.55 }}
      className="relative w-full max-w-[1420px]"
    >
      <div className="absolute inset-x-[12%] top-3 h-14 rounded-full bg-[#3B82F6]/20 blur-[64px]" />
      <div className="absolute inset-x-[10%] bottom-[-5%] h-16 rounded-full bg-black/38 blur-[56px]" />

      <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[#010a12]/50 shadow-[0_30px_100px_rgba(0,0,0,0.6)] backdrop-blur-md">
        <div className="pointer-events-none absolute inset-0 rounded-[34px] ring-1 ring-inset ring-white/10" />

        <img
          src="/images/legal-crm-dashboard-hero.png"
          alt="Dashboard premium do CRM juridico da Scale mostrando pipeline, atividade e funil de vendas."
          className="relative block w-full"
          loading="eager"
          decoding="async"
        />
      </div>
    </motion.div>
  );
}

export default function LegalCrmHeroPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { open } = useLeadForm();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | null = null;
    const handleLoadedMetadata = () => {
      video.play().catch((error) => console.log("Auto-play prevented:", error));
    };

    if (Hls.isSupported()) {
      hls = new Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch((error) => console.log("Auto-play prevented:", error));
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = videoSrc;
      video.addEventListener("loadedmetadata", handleLoadedMetadata);
    }

    return () => {
      if (hls) hls.destroy();
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#010a12] text-white">
      <section className="relative min-h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          poster={posterSrc}
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-[0.82]"
        />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,10,18,0.14)_0%,rgba(1,10,18,0.32)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_40%)]" />
        
        {/* Subtle glowing orbs */}
        <div className="absolute left-[10%] top-[-10%] h-[500px] w-[500px] bg-[#3B82F6]/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-5%] right-[10%] h-[400px] w-[400px] bg-[#00BAFF]/15 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1440px] flex-col items-center px-4 pb-0 pt-32 text-center sm:px-6 sm:pt-40">
          <div className="flex w-full flex-col items-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/80 backdrop-blur-md"
            >
              CRM Jurídico para escritórios em escala
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="max-w-5xl bg-gradient-to-b from-white via-white to-white/60 bg-clip-text text-4xl font-bold leading-[1.1] tracking-[-0.02em] text-transparent sm:text-6xl lg:text-[80px]"
            >
              Seu comercial jurídico, <span className="text-[#3B82F6]">sob controle.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.94 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="max-w-3xl text-base leading-relaxed text-[rgba(255,255,255,0.85)] sm:text-lg"
            >
              Organize contatos, follow-ups, agenda e pipeline em um só lugar para
              ganhar velocidade comercial e fechar mais casos com total previsibilidade.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-col items-center gap-6 sm:flex-row mt-4"
            >
              <button
                onClick={open}
                className="group inline-flex items-center rounded-sm bg-[#3B82F6] px-8 py-4 text-white transition-all duration-300 hover:bg-[#1630DF] shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
              >
  <WhatsAppIcon size={20} />
  <span className="text-sm md:text-base font-bold uppercase tracking-widest">Agendar Demonstração</span>
</button>
            </motion.div>

            <div className="w-full overflow-visible px-0 pt-4 sm:px-2 sm:pt-8">
              <DashboardFrame />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
