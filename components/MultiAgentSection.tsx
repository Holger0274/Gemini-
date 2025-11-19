import React from 'react';
import { UserCog, Briefcase, Scale, LineChart, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';

const MultiAgentSection: React.FC = () => {
  const agents = [
    { icon: UserCog, title: "Tech Lead", role: "Technischer Entwickler" },
    { icon: Scale, title: "Patent", role: "Patent-Experte" },
    { icon: LineChart, title: "Analyst", role: "Markt-Analyst" },
    { icon: Briefcase, title: "CFO", role: "Finance Controller" },
    { icon: ShieldCheck, title: "Legal", role: "Compliance Officer" },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-navy via-navyDark to-black text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="bg-magenta/20 text-magenta border border-magenta/50 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-4 inline-block animate-pulse">
            Flaggschiff-Angebot
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Multi-Agent-Systeme: <br/><span className="text-lightblue">Das digitale Expert-Team</span></h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Warum einen Assistenten, wenn Sie ein ganzes Team haben können? 
            <br/>Orchestrierte Spezialisten arbeiten parallel an Ihren Aufgaben.
          </p>
        </div>

        {/* Architecture Visualization */}
        <div className="relative py-12 mb-16">
          {/* Central Hub */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 relative">
             {/* Central Node Representation */}
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl pointer-events-none hidden md:block">
                <div className="w-full h-full border border-lightblue/20 rounded-full animate-spin-slow absolute opacity-30"></div>
                <div className="w-[80%] h-[80%] border border-magenta/20 rounded-full animate-spin-reverse-slow absolute top-[10%] left-[10%] opacity-30"></div>
             </div>

             {agents.map((agent, idx) => (
               <div key={idx} className="relative bg-navy/80 backdrop-blur border border-white/10 p-6 rounded-xl w-44 text-center hover:border-lightblue/50 hover:shadow-glow transition-all duration-300 z-10">
                 <div className="w-12 h-12 bg-gradient-to-br from-lightblue to-blue-600 rounded-lg mx-auto mb-3 flex items-center justify-center shadow-lg">
                   <agent.icon className="text-white" size={24} />
                 </div>
                 <h3 className="font-bold text-white">{agent.title}</h3>
                 <p className="text-xs text-gray-400">{agent.role}</p>
               </div>
             ))}
          </div>
        </div>

        {/* Flow & CTA */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
          <div className="grid md:grid-cols-3 gap-8 items-center">
             <div className="space-y-4 text-center md:text-left">
               <h3 className="text-2xl font-bold">Der Ablauf</h3>
               <div className="space-y-2 text-sm text-gray-300">
                  <p>1. Produktidee definieren</p>
                  <p>2. Parallel-Analyse durch 5 Agenten</p>
                  <p>3. Automatische Synthese & Report</p>
                  <p>4. <span className="text-magenta font-bold">Human in the Loop</span> Entscheidung</p>
               </div>
             </div>
             
             <div className="text-center md:border-l md:border-r border-white/10 py-4">
               <Zap className="text-yellow-400 mx-auto mb-2" size={40} />
               <div className="text-4xl font-bold text-white mb-1">30 Min</div>
               <p className="text-sm text-gray-400 line-through">statt 3-4 Wochen</p>
               <p className="text-lightblue font-semibold mt-2">Extremer Zeitgewinn</p>
             </div>

             <div className="text-center md:text-right">
               <h4 className="text-lg font-semibold mb-4">Mögliche Einsatzgebiete:</h4>
               <div className="flex flex-wrap gap-2 justify-center md:justify-end mb-6">
                 {['HR-Team', 'Customer Service', 'Due Diligence', 'Marketing'].map(tag => (
                   <span key={tag} className="px-3 py-1 bg-white/10 rounded text-xs">{tag}</span>
                 ))}
               </div>
               <Button variant="primary" className="w-full md:w-auto">
                 Demo anfragen <ArrowRight size={16} className="inline ml-2"/>
               </Button>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultiAgentSection;