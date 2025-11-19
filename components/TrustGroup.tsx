import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { Check, Shield, Cpu, Code2, Database, MessageSquare } from 'lucide-react';

const TrustGroup: React.FC = () => {
  
  const differences = ["Fundament zuerst", "ROI-fokussiert", "100% Transparent", "Agil (2-4 Wochen)", "Enablement", "KMU-spezialisiert"];
  
  const techStack = [
    { icon: MessageSquare, title: "KI-Plattformen", tools: "ChatGPT, Claude, Gemini, Perplexity" },
    { icon: Cpu, title: "Automation", tools: "make.com, n8n, Power Automate" },
    { icon: Code2, title: "Development", tools: "Lovable, Claude Code, Cursor" },
    { icon: Shield, title: "Microsoft", tools: "Copilot, Azure OpenAI" },
    { icon: Cpu, title: "Multi-Agent", tools: "LangGraph, AutoGen, CrewAI" },
    { icon: Database, title: "Wissen", tools: "Pinecone, Weaviate, RAG" },
  ];

  return (
    <>
      {/* SECTION 11: DIFFERENCE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Der AI.mation Unterschied" />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {differences.map((diff, idx) => (
              <div key={idx} className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg border border-gray-100">
                <div className="bg-lightblue/20 p-2 rounded-full">
                  <Check className="text-navy" size={20} />
                </div>
                <span className="font-bold text-navy text-lg">{diff}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12: RISK REDUCTION */}
      <section className="py-20 bg-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Schrittweise statt All-in" subtitle="Wir minimieren Ihr Risiko durch agile Entwicklung." />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-10">
            {['Analyse', 'Rapid Prototyping', 'Kein Lock-in', 'Enablement', 'Human in the Loop'].map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-navy flex items-center justify-center text-xl font-bold text-navy shadow-md z-10">
                    {idx + 1}
                  </div>
                  <span className="mt-4 font-semibold text-gray-700">{step}</span>
                </div>
                {idx < 4 && (
                  <div className="hidden md:block h-1 flex-1 bg-gray-300 w-full max-w-[100px]"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 13: TECH ECOSYSTEM */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Tools nach Eignung, nicht Lizenz" dark />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStack.map((cat, idx) => (
               <div key={idx} className="bg-navyDark border border-white/10 p-6 rounded-xl hover:border-lightblue/50 transition-colors">
                 <div className="flex items-center gap-3 mb-3">
                   <cat.icon className="text-lightblue" size={24} />
                   <h3 className="font-bold text-lg">{cat.title}</h3>
                 </div>
                 <p className="text-gray-400 text-sm">{cat.tools}</p>
               </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TrustGroup;