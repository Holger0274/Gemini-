import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { Map, Compass, GraduationCap, Rocket } from 'lucide-react';

const ProcessSection: React.FC = () => {
  const phases = [
    {
      id: 1,
      title: "Discovery & Landkarten",
      gradient: "from-navy to-blue-900",
      text: "text-white",
      icon: Map,
      details: ["Tool-Landscape", "Datenfluss & Speicher", "Prozess-Analyse"],
      deliverable: "AI Readiness Report"
    },
    {
      id: 2,
      title: "Strategie & Use Cases",
      gradient: "from-lightblue to-blue-400",
      text: "text-white",
      icon: Compass,
      details: ["AI Audit", "Use Case Bewertung", "AI ROI-Analyse"],
      deliverable: "Use Case Roadmap mit ROI"
    },
    {
      id: 3,
      title: "Enablement & Training",
      gradient: "from-magenta to-pink-600",
      text: "text-white",
      icon: GraduationCap,
      details: ["Fachbereiche (Basics)", "Management (Strategie)", "Technical (Automation)"],
      deliverable: "Zertifiziertes Team"
    },
    {
      id: 4,
      title: "Implementation",
      gradient: "from-black to-gray-800",
      text: "text-white",
      icon: Rocket,
      details: ["Rapid Prototyping", "Custom GPTs", "Multi-Agents"],
      deliverable: "Funktionaler PoC"
    }
  ];

  return (
    <section id="process" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Von der Analyse bis zur Automation" subtitle="Unser 4-Phasen-Prozess für garantierten Erfolg" />

        <div className="relative mt-20">
          {/* Vertical Gradient Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-navy via-lightblue to-magenta hidden md:block rounded-full"></div>

          <div className="space-y-12 md:space-y-24">
            {phases.map((phase, idx) => (
              <div key={phase.id} className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Empty space for opposite side */}
                <div className="flex-1 w-full"></div>

                {/* Center Node with Pulse */}
                <div className="z-10 relative flex items-center justify-center w-16 h-16 rounded-full shadow-xl border-4 border-white bg-white shrink-0 md:mx-10 my-6 md:my-0 group">
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${phase.gradient} opacity-20 group-hover:opacity-100 transition-opacity duration-500 blur-md`}></div>
                    <div className={`relative flex items-center justify-center w-full h-full rounded-full bg-gradient-to-br ${phase.gradient} text-white`}>
                        <phase.icon size={24} />
                    </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 w-full perspective-1000">
                  <div className={`group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden`}>
                    
                    {/* Top Gradient Bar */}
                    <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${phase.gradient}`}></div>
                    
                    <div className="flex justify-between items-start mb-6">
                       <h3 className="text-2xl font-bold text-navy group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-navy group-hover:to-lightblue transition-all">{phase.title}</h3>
                       <span className="text-6xl font-black text-gray-100 absolute top-2 right-4 -z-10 opacity-50 group-hover:opacity-100 transition-opacity">0{phase.id}</span>
                    </div>
                    
                    <ul className="space-y-3 mb-6">
                      {phase.details.map((detail, i) => (
                        <li key={i} className="text-gray-600 text-sm flex items-center font-medium">
                          <div className={`w-2 h-2 rounded-full mr-3 bg-gradient-to-r ${phase.gradient}`}></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Deliverable</p>
                      <p className={`font-bold bg-gradient-to-r ${phase.gradient} bg-clip-text text-transparent`}>{phase.deliverable}</p>
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