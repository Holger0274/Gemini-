import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { AlertTriangle, Database, GitMerge, Search, TrendingUp, HelpCircle, Ban, Layers, XCircle, EyeOff } from 'lucide-react';

const ProblemGroup: React.FC = () => {
  
  const challenges = [
    { icon: Layers, title: "Welche Prozesse?", desc: "Unsicherheit, wo Automatisierung wirklich lohnt." },
    { icon: HelpCircle, title: "KI-Readiness?", desc: "Sind Daten und Infrastruktur bereit?" },
    { icon: TrendingUp, title: "ROI berechnen?", desc: "Wie misst man den Erfolg in Euro?" },
    { icon: GitMerge, title: "Tool-Integration?", desc: "Wie verbinden wir KI mit bestehender IT?" },
    { icon: Search, title: "Kompetenz?", desc: "Fehlendes Know-how im Team." }
  ];

  const failures = [
    { icon: AlertTriangle, title: "Tool-First Fehler", desc: "Software kaufen bevor das Problem klar ist." },
    { icon: EyeOff, title: "Keine Datentransparenz", desc: "KI halluziniert ohne saubere Datenbasis." },
    { icon: Ban, title: "Fehlende Integration", desc: "Insel-Lösungen ohne Prozess-Anbindung." },
    { icon: XCircle, title: "Kein Know-how", desc: "Abhängigkeit von externen Agenturen." },
    { icon: HelpCircle, title: "Falsche Erwartungen", desc: "KI ist kein Magier, sondern Mathematik." }
  ];

  return (
    <>
      {/* SECTION 3: CHALLENGES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Wo stehen KMUs heute?" subtitle="Die größten Hürden auf dem Weg zur KI-Transformation" />
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {challenges.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-lightblue transition-all hover:-translate-y-1 group">
                <div className="w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center mb-4 group-hover:bg-lightblue/10">
                  <item.icon className="text-navy group-hover:text-lightblue transition-colors" size={24} />
                </div>
                <h3 className="font-bold text-navy text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-xl font-bold text-navy">Warum jetzt? <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy to-lightblue">Wettbewerber investieren bereits.</span></p>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY FAIL */}
      <section className="py-20 bg-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Warum 85% der KI-Projekte scheitern" />
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
            {failures.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
                <item.icon className="text-red-500 mb-4" size={28} />
                <h3 className="font-bold text-black mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-navy text-white p-8 rounded-2xl shadow-2xl text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-lightblue to-magenta"></div>
            <h3 className="text-2xl font-bold mb-2">Unser Ansatz</h3>
            <p className="text-lg text-lightblue font-medium">
              "Fundament vor Technologie. Strategie vor Tools. Enablement vor Abhängigkeit."
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProblemGroup;