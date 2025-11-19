import React, { useState } from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { UseCase } from '../types';

const UseCasesSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Research', 'Office', 'HR', 'Sales', 'Service'];

  const useCases: UseCase[] = [
    { id: 1, title: "Meeting-Verarbeitung", category: "Office", status: "In Entwicklung", roi: ">90% Zeitersparnis", stack: "OpenAI, Make", timeframe: "2-3 Wochen" },
    { id: 2, title: "Patent-Intelligence", category: "Research", status: "Konzeptphase", roi: "60-70% Effizienz", stack: "Multi-Agent, LangChain", timeframe: "4-6 Wochen" },
    { id: 3, title: "HR-Recruiting Assistant", category: "HR", status: "PoC", roi: "50% Schneller", stack: "Custom GPT, LinkedIn API", timeframe: "3 Wochen" },
    { id: 4, title: "Kundenservice Bot", category: "Service", status: "In Entwicklung", roi: "24/7 Verfügbarkeit", stack: "Voiceflow, OpenAI", timeframe: "4 Wochen" },
    { id: 5, title: "Sales Outreach", category: "Sales", status: "PoC", roi: "3x mehr Leads", stack: "Clay, Instantly", timeframe: "2 Wochen" },
    { id: 6, title: "Vertragsanalyse", category: "Office", status: "Konzeptphase", roi: "Risikominimierung", stack: "Claude 3, RAG", timeframe: "4 Wochen" },
  ];

  const filteredCases = filter === 'All' ? useCases : useCases.filter(uc => uc.category === filter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'PoC': return 'bg-green-100 text-green-800 border-green-200';
      case 'In Entwicklung': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Konzeptphase': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100';
    }
  };

  return (
    <section id="usecases" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Use Cases in Entwicklung" subtitle="Transparenz über unsere aktuellen Projekte und deren Status." />
        
        {/* Transparency Banner */}
        <div className="bg-blue-50 border-l-4 border-lightblue p-4 mb-10 rounded-r">
          <p className="text-sm text-blue-900">
            <span className="font-bold">🔄 Transparenz-Hinweis:</span> Alle dargestellten Use Cases befinden sich in Entwicklung oder Konzeptphase. Wir legen Status, Tech-Stack & ROI offen.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === cat ? 'bg-navy text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCases.map((uc) => (
            <div key={uc.id} className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
              <div className="p-6 flex-1">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{uc.category}</span>
                  <span className={`px-2 py-1 rounded text-xs font-bold border ${getStatusColor(uc.status)}`}>
                    {uc.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-navy mb-4">{uc.title}</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-sm border-b border-gray-100 pb-2">
                    <span className="text-gray-500">Potential</span>
                    <span className="font-semibold text-magenta">{uc.roi}</span>
                  </div>
                  <div className="flex justify-between text-sm border-b border-gray-100 pb-2">
                    <span className="text-gray-500">Stack</span>
                    <span className="font-medium text-navy truncate max-w-[150px] text-right">{uc.stack}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Zeitrahmen</span>
                    <span className="font-medium text-navy">{uc.timeframe}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;