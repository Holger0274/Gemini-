import React from 'react';
import { SectionHeading } from './ui/SectionHeading';

const RoiSection: React.FC = () => {
  const stats = [
    { val: "40-60%", label: "Meeting-Nachbereitung" },
    { val: "30-50%", label: "Dokumentenverarbeitung" },
    { val: "30-50%", label: "Kundenservice" },
    { val: "40-60%", label: "Recruiting Speed" },
    { val: "70-80%", label: "Patent-Analyse" },
    { val: "50-70%", label: "Sales-Vorbereitung" },
  ];

  return (
    <section className="py-20 bg-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Investition & ROI" subtitle="KI ist kein Kostenfaktor, sondern ein Wachstumsmotor." />
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm text-center hover:-translate-y-1 transition-transform">
              <div className="text-4xl md:text-5xl font-bold text-navy mb-2">{stat.val}</div>
              <p className="text-gray-500 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center space-y-4">
          <p className="text-sm text-gray-500 italic">
            Quellen: Durchschnittswerte basierend auf Studien von IBM, McKinsey, Deloitte und internen Projekt-Daten.
          </p>
          <p className="text-sm text-gray-400">
            Break-Even typischerweise in 3-6 Monaten. Individuelle Ergebnisse können variieren.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RoiSection;