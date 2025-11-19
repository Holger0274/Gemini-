import React from 'react';
import { UserCog, Briefcase, Scale, LineChart, ShieldCheck, Zap, ArrowRight, Bot } from 'lucide-react';
import { Button } from './ui/Button';

const MultiAgentSection: React.FC = () => {
  const agents = [
    { icon: UserCog, title: "Tech Lead", role: "Technischer Entwickler", color: "from-blue-400 to-blue-600" },
    { icon: Scale, title: "Patent", role: "Patent-Experte", color: "from-purple-400 to-purple-600" },
    { icon: LineChart, title: "Analyst", role: "Markt-Analyst", color: "from-green-400 to-green-600" },
    { icon: Briefcase, title: "CFO", role: "Finance Controller", color: "from-yellow-400 to-yellow-600" },
    { icon: ShieldCheck, title: "Legal", role: "Compliance Officer", color: "from-red-400 to-red-600" },
  ];

  return (
    <section className="py-32 bg-navyDark text-white relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-navy via-navyDark to-black opacity-90"></div>
      
      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lightblue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-magenta/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-magenta/20 to-purple-500/20 border border-magenta/50 text-magenta mb-6 inline-block shadow-glow-magenta">
            Flaggschiff-Angebot
          </span>
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Multi-Agent-Systeme <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lightblue to-white">Das digitale Expert-Team</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            Warum einen Assistenten, wenn Sie ein ganzes Team haben können? 
            Orchestrierte Spezialisten arbeiten parallel an Ihren Aufgaben.
          </p>
        </div>

        {/* Network Visualization */}
        <div className="relative py-12 mb-24">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 relative">
             
             {/* Connecting Lines (Visual only) */}
             <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl pointer-events-none opacity-30 hidden md:block overflow-visible">
               <circle cx="50%" cy="50%" r="150" fill="none" stroke="url(#grad1)" strokeWidth="2" strokeDasharray="10 10" className="animate-spin-slow" />
               <circle cx="50%" cy="50%" r="250" fill="none" stroke="url(#grad2)" strokeWidth="1" className="animate-reverse-spin" />
               <defs>
                 <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                   <stop offset="0%" stopColor="#60AFFF" />
                   <stop offset="100%" stopColor="#f90093" />
                 </linearGradient>
                 <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                   <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
                   <stop offset="50%" stopColor="#ffffff" stopOpacity="0.5" />
                   <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                 </linearGradient>
               </defs>
             </svg>

             {agents.map((agent, idx) => (
               <div key={idx} className="relative group z-10">
                 <div className="absolute inset-0 bg-gradient-to-r from-lightblue to-magenta rounded-2xl blur opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
                 <div className="relative bg-navy/90 backdrop-blur-xl border border-white/10 p-6 rounded-2xl w-48 text-center hover:transform hover:-translate-y-2 transition-all duration-300">
                   <div className={`w-14 h-14 bg-gradient-to-br ${agent.color} rounded-xl mx-auto mb-4 flex items-center justify-center shadow-lg`}>
                     <agent.icon className="text-white" size={28} />
                   </div>
                   <h3 className="font-bold text-white text-lg">{agent.title}</h3>
                   <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">{agent.role}</p>
                 </div>
               </div>
             ))}
             
             {/* Central Brain/Coordinator */}
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-[0_0_50px_rgba(255,255,255,0.3)] z-20">
               <Bot size={40} className="text-navy" />
             </div>
          </div>
        </div>

        {/* Process Flow Card */}
        <div className="max-w-5xl mx-auto">
          <div className="glass-card rounded-3xl p-1 bg-gradient-to-r from-white/10 via-white/20 to-white/10">
            <div className="bg-navyDark/90 backdrop-blur rounded-[22px] p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-10 items-center">
                
                <div className="space-y-6 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-white">Der Workflow</h3>
                  <div className="space-y-4">
                    {["Produktidee definieren", "Parallel-Analyse (5 Agents)", "Automatische Synthese", "Human Decision"].map((step, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-gray-300">
                        <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold">{i+1}</div>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="text-center py-6 relative">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-magenta/20 rounded-full blur-2xl"></div>
                  <Zap className="text-yellow-400 mx-auto mb-4 relative z-10" size={48} />
                  <div className="text-5xl font-black text-white mb-2 relative z-10">30 <span className="text-2xl">Min</span></div>
                  <p className="text-sm text-gray-400 line-through relative z-10">statt 3-4 Wochen</p>
                </div>

                <div className="text-center md:text-right space-y-6">
                  <h4 className="text-lg font-semibold text-white">Einsatzgebiete</h4>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-end">
                    {['HR-Screening', 'Due Diligence', 'Marktforschung', 'Compliance Check'].map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-lightblue hover:bg-white/10 transition-colors cursor-default">{tag}</span>
                    ))}
                  </div>
                  <Button variant="primary" className="w-full md:w-auto shadow-glow-magenta">
                    Live-Demo anfragen <ArrowRight size={16} className="inline ml-2"/>
                  </Button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultiAgentSection;