import React, { useState } from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { Bot, Users, Settings, Code, Zap, Layout, ChevronRight } from 'lucide-react';
import { Button } from './ui/Button';

const ServiceGroup: React.FC = () => {
  const services = [
    { icon: Bot, title: "Microsoft Copilot Training", desc: "Mitarbeiter befähigen, nicht ersetzen.", badge: "Kernangebot", color: "text-blue-500" },
    { icon: Users, title: "KI-Schulungen", desc: "Vom Einsteiger bis zum Prompt Engineer.", color: "text-purple-500" },
    { icon: Settings, title: "Automatisierung", desc: "make.com, n8n & Power Automate Workflows.", color: "text-orange-500" },
    { icon: Code, title: "Custom GPTs", desc: "Maßgeschneiderte Assistenten für interne Daten.", color: "text-green-500" },
    { icon: Users, title: "Multi-Agent-Systeme", desc: "Komplexe Aufgaben autonom lösen.", highlight: true, color: "text-magenta" },
    { icon: Zap, title: "Rapid Prototyping", desc: "Funktionale PoCs in 2-4 Wochen.", color: "text-yellow-500" }
  ];

  const [activeTab, setActiveTab] = useState<'specialist' | 'leadership' | 'technical'>('specialist');

  const trainingContent = {
    specialist: {
      title: "Fachbereiche & Teams",
      items: ["Einstieg in Generative AI", "Prompting Best Practices", "Microsoft Copilot im Alltag", "Sicherer Umgang mit Daten"]
    },
    leadership: {
      title: "Führungskräfte & Strategie",
      items: ["KI-Strategie & Roadmap", "Change Management in der KI-Ära", "Rechtliche Rahmenbedingungen", "ROI-Potentiale erkennen"]
    },
    technical: {
      title: "IT & Automation Engineers",
      items: ["Make.com & n8n Masterclass", "KI-Coding (Cursor/Claude)", "RAG & Vector Datenbanken", "Custom GPT Architecture"]
    }
  };

  return (
    <>
      {/* SERVICES OVERVIEW */}
      <section id="services" className="py-24 bg-gray-50 relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
             <div className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] bg-lightblue/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading title="Unser Service-Portfolio" subtitle="Ganzheitliche Lösungen für Ihre Transformation" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className={`group relative p-8 rounded-2xl transition-all duration-500 overflow-hidden bg-white ${service.highlight ? 'shadow-glow-magenta ring-1 ring-magenta' : 'shadow-lg hover:shadow-2xl'}`}>
                {/* Hover Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50 opacity-100 group-hover:opacity-0 transition-opacity"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-lightblue/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                    <div className={`p-4 rounded-2xl bg-gray-50 group-hover:bg-white group-hover:shadow-md transition-all ${service.color}`}>
                        <service.icon size={32} />
                    </div>
                    {service.badge && <span className="bg-navy text-white text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full">{service.badge}</span>}
                    </div>
                    
                    <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-lightblue transition-colors">{service.title}</h3>
                    <p className="text-gray-500 leading-relaxed mb-4">{service.desc}</p>
                    
                    <div className="flex items-center text-sm font-bold text-navy opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        Mehr erfahren <ChevronRight size={16} className="ml-1" />
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAINING DETAIL */}
      <section id="training" className="py-24 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading title="Schulungen für alle Ebenen" subtitle="Wissen ist der Schlüssel zur Adaption" />
          
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            <div className="flex flex-wrap border-b border-gray-100">
              {(['specialist', 'leadership', 'technical'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-6 px-6 text-center font-bold tracking-wide transition-all ${activeTab === tab ? 'bg-navy text-white' : 'text-gray-500 hover:bg-gray-50 hover:text-navy'}`}
                >
                  {tab === 'specialist' ? 'Fachbereiche' : tab === 'leadership' ? 'Führung' : 'Technical'}
                </button>
              ))}
            </div>
            
            <div className="p-8 md:p-16 bg-gradient-to-b from-white to-gray-50">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <h3 className="text-3xl font-bold text-navy">{trainingContent[activeTab].title}</h3>
                  <ul className="space-y-4">
                    {trainingContent[activeTab].items.map((item, i) => (
                      <li key={i} className="flex items-center space-x-4 p-3 rounded-xl bg-white shadow-sm border border-gray-100 hover:border-lightblue transition-colors">
                        <div className="bg-lightblue/10 p-2 rounded-lg">
                            <Layout className="text-lightblue" size={20} />
                        </div>
                        <span className="text-gray-700 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="primary" className="mt-4">Curriculum anfordern</Button>
                </div>
                
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-magenta to-purple-600 blur-2xl opacity-20 rounded-full transform rotate-12"></div>
                    <div className="glass-card-light p-8 rounded-2xl relative border-l-4 border-magenta">
                        <h4 className="text-magenta font-black text-xl mb-4 uppercase tracking-wider">Live-Mehrwert</h4>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            "Wir arbeiten nicht mit Theorie-Folien. In unseren Trainings identifizieren wir <span className="font-bold text-navy bg-yellow-100 px-1">während des Workshops</span> konkrete Use Cases aus Ihrem echten Arbeitsalltag."
                        </p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceGroup;