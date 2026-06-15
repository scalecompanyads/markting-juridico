"use client";

import { Target, CheckCircle2 } from "lucide-react";

const teses = [
  "Holding Familiar",
  "BPC/LOAS",
  "Planejamento Previdenciário",
  "Habeas Corpus e Flagrante",
  "Divórcio Litigioso e Guarda",
  "Recuperação Tributária",
  "Trabalhista Reclamante",
  "Erro Médico e Saúde",
];

export default function TesesValidadas() {
  return (
    <section className="section bg-[#f8fafc] border-b border-[rgba(0,0,0,0.05)]">
      <div className="container-page py-16">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="flex-1">
            <span className="inline-block px-4 py-1.5 mb-6 rounded-full border border-[rgba(59,130,246,0.2)] bg-[rgba(59,130,246,0.05)] text-[#0066cc] text-xs font-bold tracking-[0.15em] uppercase">
              Inteligência de Mercado
            </span>
            <h2 className=" text-[clamp(2rem,3vw,3rem)] font-bold text-[#020b16] leading-[1.1] tracking-tight">
              Execução baseada em <span className="text-[#0066cc]">Teses Validadas.</span><br/> Zero Achismo.
            </h2>
            
            <div className="flex flex-col gap-6 mt-8">
              <p className="text-[#475569] text-lg leading-relaxed">
                Você não precisa pagar pela nossa curva de aprendizado. Com dezenas de milhões de reais já gerenciados em anúncios jurídicos, nós já mapeamos exatamente quais argumentos, palavras-chave e landing pages convertem para as teses mais rentáveis do direito.
              </p>
              
              <div className="flex items-start gap-4 p-8 bg-white border border-[#e2e8f0] shadow-sm mt-4">
                <div className="w-12 h-12 rounded-full bg-[#f1f5f9] flex items-center justify-center flex-shrink-0">
                  <Target size={24} className="text-[#0066cc]" />
                </div>
                <div>
                  <h4 className="text-[#0f172a] font-bold text-lg mb-2">Sem "Testes com o seu dinheiro"</h4>
                  <p className="text-[#475569] text-base leading-relaxed m-0">
                    Muitas agências usam o orçamento do primeiro mês do advogado apenas para "descobrir o que funciona". Nós aplicamos frameworks de conversão que já rodam diariamente em centenas de bancas pelo Brasil.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="bg-white border border-[#e2e8f0] p-10 shadow-sm">
              <h3 className=" text-[#0f172a] font-bold text-xl mb-8 flex items-center gap-3">
                <CheckCircle2 size={24} className="text-[#3B82F6]" />
                Algumas teses que tracionamos diariamente:
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {teses.map((tese, idx) => (
                  <div 
                    key={idx}
                    className="px-5 py-3 border border-[#e2e8f0] bg-[#f8fafc] text-[#334155] text-sm font-semibold cursor-default"
                  >
                    {tese}
                  </div>
                ))}
                <div className="px-5 py-3 border border-dashed border-[#cbd5e1] text-[#94a3b8] text-sm font-semibold">
                  E mais de 40 outras áreas...
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
