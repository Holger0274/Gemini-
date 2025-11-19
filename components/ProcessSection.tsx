import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { Map, Compass, GraduationCap, Rocket } from 'lucide-react';

const ProcessSection: React.FC = () => {
  const phases = [
    {
      id: 1,
      title: "Discovery & Landkarten",
      color: "border-navy text-navy",
      bg: "bg-navy",
      icon: Map,
      details: ["Tool-Landscape", "Datenfluss & Speicher", "Prozess-Analyse"],
      deliverable: "AI Readiness Report"
    },
    {
      id: 2,
      title: "Strategie & Use Cases",
      color: "border-lightblue text-lightblue",
      bg: "bg-lightblue",
      icon: Compass,
      details: ["AI Audit", "Use Case Bewertung", "AI ROI-Analyse"],
      deliverable: "Use Case Roadmap mit ROI"
    },
    {
      id: 3,
      title: "Enablement & Training",
      color: "border-magenta text-magenta",
      bg: "bg-magenta",
      icon: GraduationCap,
      details: ["Fachbereiche (Basics)", "Management (Strategie)", "Technical (Automation)"],
      deliverable: "Zertifiziertes Team"
    },
    {
      id: 4,
      title: "Implementation",
      color: "border-navyDark text-navyDark",
      bg: "bg-navyDark",
      icon: Rocket,
      details: ["Rapid Prototyping", "Custom GPTs", "Multi-Agents"],
      deliverable: "Funktionaler PoC"
    }
  ];

  return (
    <section id="process" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Von der Analyse bis zur Automation" subtitle="Unser 4-Phasen-Prozess für garantierten Erfolg" />

        <div className="relative mt-12">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 hidden md:block"></div>

          <div className="space-y-12 md:space-y-24">
            {phases.map((phase, idx) => (
              <div key={phase.id} className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Empty space for opposite side */}
                <div className="flex-1 w-full"></div>

                {/* Center Node */}
                <div className={`z-10 flex items-center justify-center w-12 h-12 rounded-full text-white shadow-lg border-4 border-white ${phase.bg} shrink-0 md:mx-8 my-4 md:my-0`}>
                  <phase.icon size={20} />
                </div>

                {/* Content Card */}
                <div className="flex-1 w-full">
                  <div className={`bg-white p-6 rounded-xl shadow-lg border-t-4 ${phase.color.split(' ')[0]} hover:shadow-xl transition-shadow`}>
                    <div className="flex justify-between items-start mb-4">
                       <h3 className="text-xl font-bold text-navy">{phase.title}</h3>
                       <span className={`text-xs font-bold px-2 py-1 rounded bg-gray-100 ${phase.color.split(' ')[1]}`}>Phase {phase.id}</span>
                    </div>
                    
                    <ul className="space-y-2 mb-4">
                      {phase.details.map((detail, i) => (
                        <li key={i} className="text-gray-600 text-sm flex items-center">
                          <div className={`w-1.5 h-1.5 rounded-full mr-2 ${phase.bg}`}></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-sm font-semibold text-gray-500 uppercase text-xs tracking-wider">Deliverable</p>
                      <p className="text-navy font-medium">{phase.deliverable}</p>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;