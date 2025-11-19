import React from 'react';
import { Button } from './ui/Button';
import { CheckCircle, Network, ArrowRight, Cpu, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-navyDark">
      
      {/* 1. Dynamic Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-20 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-navyDark via-navy/90 to-magenta/20"></div>
      </div>

      {/* 2. Animated Blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-lightblue rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-magenta rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 shadow-glow animate-fade-in-up">
              <Sparkles size={16} className="text-magenta" />
              <span className="text-lightblue text-sm font-bold tracking-wider uppercase">
                KI-Transformation für KMUs
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black leading-tight text-white tracking-tight">
              Automatisierung <br /> mit <span className="text-transparent bg-clip-text bg-gradient-to-r from-lightblue via-white to-magenta">Intelligenz</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
              Kein Hype, sondern Ergebnisse. Von der Strategie bis zur Umsetzung – in <span className="text-white font-bold border-b-2 border-magenta">2-4 Wochen</span> zum ersten PoC.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm font-medium text-gray-200">
              {["Fundament vor Technologie", "Transparente ROI-Berechnung", "Enablement statt Abhängigkeit"].map((item, idx) => (
                <div key={idx} className="flex items-center bg-white/5 px-3 py-1 rounded-lg border border-white/5">
                  <CheckCircle className="text-magenta shrink-0 mr-2" size={16} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start">
              <Button variant="primary" className="group">
                Kostenloses Erstgespräch
                <ArrowRight className="inline ml-2 transition-transform group-hover:translate-x-1" size={18} />
              </Button>
              <Button variant="outline">Unser Prozess</Button>
            </div>
          </div>

          {/* Right Visual - Glassmorphism Card Stack */}
          <div className="relative hidden lg:block perspective-1000">
             {/* Floating Elements */}
             <div className="relative w-full aspect-square max-w-lg mx-auto animate-float">
               
               {/* Main Glass Card */}
               <div className="absolute inset-0 glass-card rounded-3xl p-8 shadow-2xl border border-white/20 z-20 flex flex-col justify-between bg-gradient-to-br from-white/10 to-transparent">
                 
                 <div className="flex justify-between items-start">
                   <div className="flex items-center gap-3">
                     <div className="p-3 bg-navy rounded-xl">
                       <Cpu className="text-lightblue" size={24} />
                     </div>
                     <div>
                       <div className="text-sm text-gray-400">AI Status</div>
                       <div className="text-white font-bold">Optimizing</div>
                     </div>
                   </div>
                   <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                     Active
                   </div>
                 </div>

                 <div className="space-y-4 my-6">
                   {[1, 2, 3].map((i) => (
                     <div key={i} className="h-2 bg-white/10 rounded-full overflow-hidden">
                       <div className="h-full bg-gradient-to-r from-lightblue to-magenta w-2/3 animate-pulse"></div>
                     </div>
                   ))}
                 </div>

                 <div className="bg-black/40 rounded-xl p-4 backdrop-blur-md border border-white/5">
                    <div className="flex justify-between items-end">
                       <div>
                         <div className="text-xs text-gray-400 mb-1">Monatlicher ROI</div>
                         <div className="text-3xl font-bold text-white">+ 450%</div>
                       </div>
                       <Network className="text-magenta opacity-50" size={48} />
                    </div>
                 </div>
               </div>

               {/* Background Cards for Depth */}
               <div className="absolute inset-0 bg-gradient-to-br from-magenta to-purple-600 rounded-3xl transform rotate-6 translate-x-4 translate-y-4 opacity-40 z-10 blur-sm"></div>
               <div className="absolute inset-0 bg-navyLight rounded-3xl transform -rotate-6 -translate-x-4 -translate-y-4 opacity-60 z-0"></div>
             </div>
             
             {/* Floating Badge */}
             <div className="absolute -bottom-10 -left-10 glass-card p-4 rounded-2xl animate-bounce shadow-glow-magenta z-30">
               <span className="text-xs font-bold text-magenta uppercase block mb-1">Time to Market</span>
               <span className="text-2xl font-black text-white">2-4 Wochen</span>
             </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;