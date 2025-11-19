import React, { useState } from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { Bot, Users, Settings, Code, Zap, Layout } from 'lucide-react';
import { Button } from './ui/Button';

const ServiceGroup: React.FC = () => {
  const services = [
    { icon: Bot, title: "Microsoft Copilot Training", desc: "Mitarbeiter befähigen, nicht ersetzen.", badge: "Kernangebot" },
    { icon: Users, title: "KI-Schulungen", desc: "Vom Einsteiger bis zum Prompt Engineer." },
    { icon: Settings, title: "Automatisierung", desc: "make.com, n8n & Power Automate Workflows." },
    { icon: Code, title: "Custom GPTs", desc: "Maßgeschneiderte Assistenten für interne Daten." },
    { icon: Users, title: "Multi-Agent-Systeme", desc: "Komplexe Aufgaben autonom lösen.", highlight: true },
    { icon: Zap, title: "Rapid Prototyping", desc: "Funktionale PoCs in 2-4 Wochen." }
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
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Unser Service-Portfolio" subtitle="Ganzheitliche Lösungen für Ihre Transformation" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className={`p-6 rounded-xl transition-all duration-300 hover:-translate-y-1 ${service.highlight ? 'bg-white border-2 border-magenta shadow-glow' : 'bg-white border border-gray-100 shadow-lg hover:shadow-xl'}`}>
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 rounded-lg ${service.highlight ? 'bg-magenta/10' : 'bg-navy/5'}`}>
                    <service.icon className={service.highlight ? 'text-magenta' : 'text-navy'} size={28} />
                  </div>
                  {service.badge && <span className="bg-navy text-white text-xs px-2 py-1 rounded font-semibold">{service.badge}</span>}
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAINING DETAIL */}
      <section id="training" className="py-20 bg-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Schulungen für alle Ebenen" subtitle="Wissen ist der Schlüssel zur Adaption" />
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-wrap border-b border-gray-200">
              {(['specialist', 'leadership', 'technical'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-4 px-6 text-center font-semibold transition-colors ${activeTab === tab ? 'bg-navy text-white' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  {tab === 'specialist' ? 'Fachbereiche' : tab === 'leadership' ? 'Führung' : 'Technical'}
                </button>
              ))}
            </div>
            
            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-navy mb-6">{trainingContent[activeTab].title}</h3>
                  <ul className="space-y-4">
                    {trainingContent[activeTab].items.map((item, i) => (
                      <li key={i} className="flex items-center space-x-3">
                        <Layout className="text-lightblue" size={20} />
                        <span className="text-gray-700 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button variant="secondary">Curriculum anfordern</Button>
                  </div>
                </div>
                
                <div className="bg-magenta/5 border border-magenta/20 p-6 rounded-xl">
                  <h4 className="text-magenta font-bold text-lg mb-2">Live-Mehrwert</h4>
                  <p className="text-gray-700">
                    In unseren Trainings arbeiten wir nicht nur theoretisch. 
                    Wir identifizieren <span className="font-bold">während des Workshops</span> konkrete Use Cases aus Ihrem Arbeitsalltag.
                  </p>
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