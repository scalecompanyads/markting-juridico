"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Calculator, CheckCircle2, LineChart, Target, X } from "lucide-react";

type Scenario = "pessimista" | "realista" | "otimista";

const AREAS = {
  familia: { label: "Família e Sucessões", cpl: 45, ticket: 3500, contracts: 4 },
  trabalhista: { label: "Trabalhista", cpl: 35, ticket: 3000, contracts: 5 },
  previdenciario: { label: "Previdenciário", cpl: 32, ticket: 2500, contracts: 6 },
  criminal: { label: "Criminal", cpl: 70, ticket: 6000, contracts: 3 },
  empresarial: { label: "Empresarial", cpl: 90, ticket: 8500, contracts: 2 },
  imobiliario: { label: "Imobiliário", cpl: 60, ticket: 5500, contracts: 3 },
  tributario: { label: "Tributário", cpl: 110, ticket: 10000, contracts: 2 },
};

const SCENARIO_MULTIPLIERS = {
  pessimista: { cpl: 1.2, contracts: 0.75 },
  realista: { cpl: 1, contracts: 1 },
  otimista: { cpl: 0.85, contracts: 1.3 },
};

export default function SimuladorHonorarios() {
  const [activeStep, setActiveStep] = useState(0);
  const [area, setArea] = useState<keyof typeof AREAS>("familia");
  const [investment, setInvestment] = useState(3000);
  const [cpl, setCpl] = useState(AREAS.familia.cpl);
  const [contracts, setContracts] = useState(AREAS.familia.contracts);
  const [ticket, setTicket] = useState(AREAS.familia.ticket);
  const [goal, setGoal] = useState(50000);
  const [months, setMonths] = useState(6);
  const [scenario, setScenario] = useState<Scenario>("realista");

  const [resultsUnlocked, setResultsUnlocked] = useState(false);
  const [showLeadModal, setShowLeadModal] = useState(false);
  const [leadForm, setLeadForm] = useState({ name: "", email: "", phone: "", insta: "" });

  // Update defaults when area changes
  useEffect(() => {
    const data = AREAS[area];
    setCpl(data.cpl);
    setContracts(data.contracts);
    setTicket(data.ticket);
  }, [area]);

  // Math Logic
  const calcScenario = (scen: Scenario) => {
    const mult = SCENARIO_MULTIPLIERS[scen];
    const adjustedCpl = Math.max(cpl * mult.cpl, 1);
    const adjustedContracts = Math.max(contracts * mult.contracts, 0);
    const leads = investment / adjustedCpl;
    const revenue = adjustedContracts * ticket;
    const roas = investment > 0 ? revenue / investment : 0;
    return { cpl: adjustedCpl, leads, contracts: adjustedContracts, revenue, roas };
  };

  const current = calcScenario(scenario);
  const cac = current.contracts > 0 ? investment / current.contracts : 0;
  const roi = investment > 0 ? ((current.revenue - investment) / investment) * 100 : 0;
  const requiredInvestment = current.roas > 0 ? goal / current.roas : 0;
  const projection = current.revenue * months;
  const goalProgress = goal > 0 ? Math.min((current.revenue / goal) * 100, 100) : 0;

  const formatBRL = (val: number) =>
    new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 }).format(val);

  const handleNext = () => setActiveStep((p) => Math.min(p + 1, 3));
  const handlePrev = () => setActiveStep((p) => Math.max(p - 1, 0));

  const handleCalculateClick = () => {
    if (resultsUnlocked) {
      document.getElementById("dashboard-result")?.scrollIntoView({ behavior: "smooth" });
    } else {
      setShowLeadModal(true);
    }
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate webhook post
    setTimeout(() => {
      setResultsUnlocked(true);
      setShowLeadModal(false);
      setTimeout(() => {
        document.getElementById("dashboard-result")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }, 800);
  };

  return (
    <div className="bg-[#010a12] text-white overflow-hidden pb-24 relative">
      
      {/* Background glowing effects */}
      <div className="absolute top-[10%] left-[50%] w-[800px] h-[500px] bg-[#3B82F6]/10 blur-[150px] -translate-x-1/2 rounded-full pointer-events-none" />

      <section className="pt-40 pb-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block border border-[#3B82F6]/30 bg-[#3B82F6]/10 text-[#3B82F6] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
            Ferramenta Gratuita
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
            Descubra o potencial de escala da sua advocacia.
          </h1>
          <p className="text-[rgba(255,255,255,0.85)] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Em poucos passos, estime contatos qualificados, novos contratos, honorários projetados e o investimento necessário para sua área de atuação.
          </p>
        </div>
      </section>

      <section className="px-4 md:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-2xl p-6 md:p-10 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center gap-4 mb-10 border-b border-[rgba(255,255,255,0.05)] pb-6">
              <div className="w-12 h-12 rounded-xl bg-[#3B82F6]/20 flex items-center justify-center text-[#3B82F6]">
                <Calculator size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Simulador de Honorários</h2>
                <p className="text-[rgba(255,255,255,0.85)] text-sm mt-1">Configure o cenário atual ou desejado para o seu escritório.</p>
              </div>
            </div>

            {/* Stepper Header */}
            <div className="grid grid-cols-4 gap-2 mb-8 bg-[rgba(0,0,0,0.3)] p-1.5 rounded-xl border border-[rgba(255,255,255,0.05)]">
              {["Área", "Captação", "Honorários", "Cenário"].map((lbl, idx) => (
                <button
                  key={lbl}
                  onClick={() => setActiveStep(idx)}
                  className={`py-3 text-xs md:text-sm font-bold rounded-lg transition-all ${
                    activeStep === idx 
                      ? "bg-[#3B82F6] text-white shadow-lg" 
                      : "text-[rgba(255,255,255,0.85)] hover:text-white hover:bg-[rgba(255,255,255,0.05)]"
                  }`}
                >
                  <span className="hidden md:inline">{idx + 1}. </span>{lbl}
                </button>
              ))}
            </div>

            {/* Step 1: Área */}
            {activeStep === 0 && (
              <div className="animate-fade-in space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Qual área do direito você quer focar?</h3>
                  <p className="text-[rgba(255,255,255,0.85)] text-sm">O CPL (Custo por Lead) e o ticket médio mudam bastante de acordo com a área.</p>
                </div>
                <div>
                  <label className="block text-sm font-bold text-[rgba(255,255,255,0.8)] mb-3">Área de atuação</label>
                  <select 
                    value={area} 
                    onChange={(e) => setArea(e.target.value as keyof typeof AREAS)}
                    className="w-full bg-[rgba(0,0,0,0.3)] border border-[rgba(255,255,255,0.1)] rounded-xl px-5 py-4 text-white outline-none focus:border-[#3B82F6] transition-colors appearance-none"
                  >
                    {Object.entries(AREAS).map(([key, val]) => (
                      <option key={key} value={key} className="bg-[#010a12]">{val.label}</option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {/* Step 2: Captação */}
            {activeStep === 1 && (
              <div className="animate-fade-in space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Qual o seu orçamento mensal para anúncios?</h3>
                  <p className="text-[rgba(255,255,255,0.85)] text-sm">Quanto você pretende investir em Google e Meta Ads por mês?</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-[rgba(255,255,255,0.8)] mb-3">Verba Mensal (R$)</label>
                    <input 
                      type="number" 
                      value={investment} 
                      onChange={(e) => setInvestment(Number(e.target.value))}
                      className="w-full bg-[rgba(0,0,0,0.3)] border border-[rgba(255,255,255,0.1)] rounded-xl px-5 py-4 text-white outline-none focus:border-[#3B82F6] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[rgba(255,255,255,0.8)] mb-3">CPL Estimado (R$)</label>
                    <input 
                      type="number" 
                      value={cpl} 
                      readOnly
                      className="w-full bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-xl px-5 py-4 text-[rgba(255,255,255,0.85)] outline-none cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[rgba(255,255,255,0.8)] mb-3">Contratos p/ mês</label>
                    <input 
                      type="number" 
                      value={contracts} 
                      onChange={(e) => setContracts(Number(e.target.value))}
                      className="w-full bg-[rgba(0,0,0,0.3)] border border-[rgba(255,255,255,0.1)] rounded-xl px-5 py-4 text-white outline-none focus:border-[#3B82F6] transition-colors"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Honorários */}
            {activeStep === 2 && (
              <div className="animate-fade-in space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Configuração Financeira e Metas</h3>
                  <p className="text-[rgba(255,255,255,0.85)] text-sm">Qual a sua meta de faturamento e o honorário inicial / total de cada contrato?</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-[rgba(255,255,255,0.8)] mb-3">Honorário Médio (R$)</label>
                    <input 
                      type="number" 
                      value={ticket} 
                      onChange={(e) => setTicket(Number(e.target.value))}
                      className="w-full bg-[rgba(0,0,0,0.3)] border border-[rgba(255,255,255,0.1)] rounded-xl px-5 py-4 text-white outline-none focus:border-[#3B82F6] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[rgba(255,255,255,0.8)] mb-3">Meta de Novos Hon. (R$)</label>
                    <input 
                      type="number" 
                      value={goal} 
                      onChange={(e) => setGoal(Number(e.target.value))}
                      className="w-full bg-[rgba(0,0,0,0.3)] border border-[rgba(255,255,255,0.1)] rounded-xl px-5 py-4 text-white outline-none focus:border-[#3B82F6] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[rgba(255,255,255,0.8)] mb-3">Meses de Projeção</label>
                    <input 
                      type="number" 
                      value={months} 
                      onChange={(e) => setMonths(Number(e.target.value))}
                      className="w-full bg-[rgba(0,0,0,0.3)] border border-[rgba(255,255,255,0.1)] rounded-xl px-5 py-4 text-white outline-none focus:border-[#3B82F6] transition-colors"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Cenário */}
            {activeStep === 3 && (
              <div className="animate-fade-in space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Projeção e Eficiência</h3>
                  <p className="text-[rgba(255,255,255,0.85)] text-sm">No Marketing, trabalhamos com 3 cenários básicos de otimização de campanhas.</p>
                </div>
                <div className="grid grid-cols-3 gap-2 bg-[rgba(0,0,0,0.3)] p-1.5 rounded-xl border border-[rgba(255,255,255,0.05)]">
                  {(["pessimista", "realista", "otimista"] as const).map((scen) => (
                    <button
                      key={scen}
                      onClick={() => setScenario(scen)}
                      className={`py-4 text-sm font-bold rounded-lg transition-all capitalize ${
                        scenario === scen 
                          ? "bg-[#3B82F6] text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]" 
                          : "text-[rgba(255,255,255,0.85)] hover:text-white"
                      }`}
                    >
                      {scen}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 mt-10 pt-8 border-t border-[rgba(255,255,255,0.05)]">
              <button
                onClick={handlePrev}
                disabled={activeStep === 0}
                className="w-full md:w-auto px-8 py-3 rounded-lg border border-[rgba(255,255,255,0.1)] text-white font-bold hover:bg-[rgba(255,255,255,0.05)] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Voltar
              </button>
              
              {activeStep < 3 ? (
                <button
                  onClick={handleNext}
                  className="w-full md:w-auto px-8 py-3 rounded-lg bg-white text-black font-bold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                >
                  Próxima Etapa <ArrowRight size={16} />
                </button>
              ) : (
                <button
                  onClick={handleCalculateClick}
                  className="w-full md:w-auto px-10 py-3 rounded-lg bg-[#3B82F6] text-white font-bold hover:bg-[#1630DF] transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                >
                  Calcular Projeção Final <ArrowRight size={16} />
                </button>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* DASHBOARD DE RESULTADOS (Bloqueado ou Desbloqueado) */}
      <section id="dashboard-result" className="px-4 md:px-8 mt-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          {!resultsUnlocked ? (
            <div className="border border-[rgba(255,255,255,0.05)] border-dashed rounded-2xl bg-[rgba(255,255,255,0.01)] flex flex-col items-center justify-center min-h-[400px] text-center p-8 backdrop-blur-sm">
              <div className="w-16 h-16 rounded-full bg-[#3B82F6]/10 flex items-center justify-center text-[#3B82F6] mb-6">
                <LineChart size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Seu dashboard de projeção está pronto!</h3>
              <p className="text-[rgba(255,255,255,0.85)] max-w-md mx-auto mb-8">Preencha as informações no passo 4 e clique em Calcular para liberar as métricas detalhadas da sua operação de tráfego.</p>
            </div>
          ) : (
            <div className="animate-fade-in-up border border-[#3B82F6]/30 bg-[#010a12] rounded-3xl p-6 md:p-10 shadow-[0_0_40px_rgba(59,130,246,0.15)] relative overflow-hidden">
               {/* Dashboard internal glow */}
               <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#3B82F6]/10 blur-[100px] rounded-full pointer-events-none" />

               <div className="flex items-center justify-between mb-10 relative z-10">
                 <div>
                   <h3 className="text-3xl font-bold">Relatório Executivo</h3>
                   <p className="text-[#3B82F6] font-semibold mt-1">Cenário: <span className="uppercase">{scenario}</span></p>
                 </div>
                 <div className="bg-[#3B82F6]/10 border border-[#3B82F6]/30 text-[#3B82F6] px-4 py-2 rounded-lg font-bold text-lg">
                    ROAS {current.roas.toFixed(1)}x
                 </div>
               </div>

               {/* Top Metrics */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 relative z-10">
                  <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-2xl p-8">
                    <p className="text-[rgba(255,255,255,0.85)] text-sm font-bold uppercase tracking-widest mb-2">Honorários Estimados (Mês)</p>
                    <p className="text-4xl md:text-6xl font-black text-white">{formatBRL(current.revenue)}</p>
                    <div className="w-full bg-[rgba(255,255,255,0.05)] h-2 rounded-full mt-6 overflow-hidden">
                      <div className="bg-[#3B82F6] h-full" style={{ width: `${Math.max(goalProgress, 5)}%` }} />
                    </div>
                    <p className="text-[rgba(255,255,255,0.85)] text-xs mt-3">{goalProgress.toFixed(1)}% da sua meta de {formatBRL(goal)}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-2xl p-6 flex flex-col justify-center">
                       <p className="text-[rgba(255,255,255,0.85)] text-xs font-bold uppercase tracking-widest mb-2">Leads</p>
                       <p className="text-3xl font-bold">{Math.round(current.leads)}</p>
                    </div>
                    <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-2xl p-6 flex flex-col justify-center">
                       <p className="text-[rgba(255,255,255,0.85)] text-xs font-bold uppercase tracking-widest mb-2">Fechamentos</p>
                       <p className="text-3xl font-bold">{Math.round(current.contracts)}</p>
                    </div>
                    <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-2xl p-6 flex flex-col justify-center">
                       <p className="text-[rgba(255,255,255,0.85)] text-xs font-bold uppercase tracking-widest mb-2">CPA (Custo/Cliente)</p>
                       <p className="text-3xl font-bold">{formatBRL(cac)}</p>
                    </div>
                    <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-2xl p-6 flex flex-col justify-center">
                       <p className="text-[rgba(255,255,255,0.85)] text-xs font-bold uppercase tracking-widest mb-2">ROI Estimado</p>
                       <p className="text-3xl font-bold">{roi.toFixed(0)}%</p>
                    </div>
                  </div>
               </div>

               {/* Action / Diagnostico */}
               <div className="mt-8 bg-[#3B82F6]/10 border border-[#3B82F6]/20 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
                 <div>
                   <h4 className="text-xl font-bold mb-2">Próximo Passo</h4>
                   <p className="text-[rgba(255,255,255,0.85)] text-sm">
                     Para atingir sua meta de {formatBRL(goal)} com esse cenário, o investimento ideal em anúncios seria em torno de <strong className="text-white">{formatBRL(requiredInvestment)}</strong> mensais.
                   </p>
                 </div>
                 <a href="/contato" className="flex-shrink-0 w-full md:w-auto text-center px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors">
                   Agendar Reunião de Aceleração
                 </a>
               </div>

            </div>
          )}
        </div>
      </section>

      {/* LEAD MODAL */}
      {showLeadModal && (
        <div className="fixed inset-0 z-[999999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-[#010a12] border border-[#3B82F6]/30 rounded-2xl max-w-lg w-full p-8 shadow-2xl relative">
            <button 
              onClick={() => setShowLeadModal(false)}
              className="absolute top-4 right-4 text-[rgba(255,255,255,0.85)] hover:text-white"
            >
              <X size={24} />
            </button>
            <h3 className="text-2xl font-bold mb-2">Antes de ver os resultados...</h3>
            <p className="text-[rgba(255,255,255,0.85)] text-sm mb-6">Nosso especialista analisará essa projeção e fará um diagnóstico sem compromisso para o seu escritório.</p>
            
            <form onSubmit={handleLeadSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[rgba(255,255,255,0.8)] mb-2 uppercase tracking-widest">Nome Completo</label>
                <input 
                  type="text" required 
                  className="w-full bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white outline-none focus:border-[#3B82F6]"
                  value={leadForm.name} onChange={e => setLeadForm({...leadForm, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[rgba(255,255,255,0.8)] mb-2 uppercase tracking-widest">E-mail Profissional</label>
                <input 
                  type="email" required 
                  className="w-full bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white outline-none focus:border-[#3B82F6]"
                  value={leadForm.email} onChange={e => setLeadForm({...leadForm, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[rgba(255,255,255,0.8)] mb-2 uppercase tracking-widest">WhatsApp</label>
                <input 
                  type="tel" required 
                  className="w-full bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white outline-none focus:border-[#3B82F6]"
                  value={leadForm.phone} onChange={e => setLeadForm({...leadForm, phone: e.target.value})}
                />
              </div>
              <button 
                type="submit"
                className="w-full mt-4 py-4 bg-[#3B82F6] text-white font-bold rounded-lg hover:bg-[#1630DF] transition-colors"
              >
                Liberar Meu Dashboard
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
