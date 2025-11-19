import React from 'react';
import { Button } from './ui/Button';
import { CheckCircle, Network } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gradient-to-br from-navy to-navyDark overflow-hidden text-white">
      {/* Background Abstract Shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-lightblue/5 rounded-l-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-magenta/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <span className="inline-block px-4 py-1.5 bg-lightblue/10 text-lightblue rounded-full text-sm font-semibold tracking-wide uppercase border border-lightblue/20">
              KI-Transformation für KMUs
            </span>
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Automatisierung mit <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-lightblue">Intelligenz</span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
              Von der Strategie bis zur Umsetzung – in 2-4 Wochen zum ersten PoC. Wir machen KI für Ihr Unternehmen nutzbar.
            </p>

            <ul className="space-y-4">
              {[
                "Fundament vor Technologie",
                "Transparente ROI-Berechnung",
                "Enablement statt Abhängigkeit"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center space-x-3">
                  <CheckCircle className="text-magenta shrink-0" size={20} />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="primary">Kostenloses Erstgespräch</Button>
              <Button variant="outline">Unseren Prozess</Button>
            </div>
          </div>

          {/* Right Visual - Abstract Network */}
          <div className="relative hidden lg:block">
             <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl animate-pulse-slow">
               {/* Mockup Visualization */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-navy/50 p-4 rounded-xl border border-lightblue/20">
                     <Network className="text-lightblue mb-3" size={32} />
                     <div className="h-2 bg-gray-600 rounded w-3/4 mb-2"></div>
                     <div className="h-2 bg-gray-700 rounded w-1/2"></div>
                  </div>
                  <div className="bg-navy/50 p-4 rounded-xl border border-magenta/20 translate-y-8">
                     <div className="flex items-center justify-between mb-3">
                       <span className="text-xs text-gray-400">ROI</span>
                       <span className="text-magenta font-bold">+450%</span>
                     </div>
                     <div className="h-16 bg-gradient-to-t from-magenta/20 to-transparent rounded-b-lg"></div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 bg-navy p-4 rounded-xl shadow-xl border border-white/10">
                   <span className="text-sm font-mono text-lightblue">PoC Ready</span>
                   <div className="text-2xl font-bold">2-4 Wochen</div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;