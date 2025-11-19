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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Wo stehen KMUs heute?" subtitle="Die größten Hürden auf dem Weg zur KI-Transformation" />
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {challenges.map((item, idx) => (
              <div key={idx} className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-navy group-hover:to-lightblue transition-all duration-500">
                  <item.icon className="text-navy group-hover:text-white transition-colors" size={28} />
                </div>
                <h3 className="font-bold text-navy text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-2xl font-bold text-navy">Warum jetzt? <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-magenta to-purple-600 text-3xl">Wettbewerber investieren bereits.</span></p>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY FAIL */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Dark angled background overlay */}
        <div className="absolute inset-0 bg-gray-100 transform -skew-y-3 origin-top-left scale-110 z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading title="Warum 85% der KI-Projekte scheitern" />
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
            {failures.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500 hover:shadow-md transition-shadow">
                <div className="mb-4 p-3 bg-red-50 rounded-full w-fit">
                   <item.icon className="text-red-500" size={24} />
                </div>
                <h3 className="font-bold text-black mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="relative bg-gradient-to-r from-navy via-navyDark to-black text-white p-10 rounded-3xl shadow-2xl text-center overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-lightblue via-white to-magenta"></div>
            
            <div className="relative z-10">
                <h3 className="text-3xl font-black mb-4 tracking-tight">Unser Ansatz</h3>
                <p className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-lightblue to-white font-medium leading-relaxed">
                "Fundament vor Technologie. Strategie vor Tools. Enablement vor Abhängigkeit."
                </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProblemGroup;