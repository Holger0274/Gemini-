import React from 'react';
import { Button } from './ui/Button';
import { SectionHeading } from './ui/SectionHeading';
import { Calendar, MessageSquare, FileText } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <>
      {/* AGILE INTEGRATION TEXT (Sec 14) */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy mb-6">Warum agile KI-Integration?</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Die Technologie entwickelt sich wöchentlich weiter. Wer heute Jahre plant, verliert morgen. 
            Wir setzen auf <span className="font-bold text-navy">Rapid Prototyping</span> (2-4 Wochen), 
            vermeiden Vendor Lock-in und wählen die besten Tools für Ihr Problem, nicht die teuersten.
          </p>
        </div>
      </section>

      {/* LEAD FORM (Sec 15) */}
      <section id="contact" className="py-20 bg-gray">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <SectionHeading title="Bereit für den ersten Schritt?" className="mb-8" />
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Vorname*</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-navy focus:border-transparent" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nachname*</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-navy focus:border-transparent" required />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Firmenname*</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-navy focus:border-transparent" required />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Branche & Aktuelle Herausforderung*</label>
                <textarea rows={3} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-navy focus:border-transparent" required></textarea>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">E-Mail*</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-navy focus:border-transparent" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Telefon (optional)</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-navy focus:border-transparent" />
                </div>
              </div>

              <div className="flex items-start">
                <input id="privacy" type="checkbox" className="mt-1 h-4 w-4 text-navy border-gray-300 rounded focus:ring-navy" required />
                <label htmlFor="privacy" className="ml-2 text-sm text-gray-600">
                  Ich stimme der Verarbeitung meiner Daten gemäß der Datenschutzerklärung zu.
                </label>
              </div>

              <Button type="submit" variant="primary" className="w-full text-lg py-4 uppercase tracking-wide">
                KI-Potenzial analysieren
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* NEXT STEPS (Sec 16) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Wie wir starten" />
          
          <div className="grid md:grid-cols-3 gap-8">
             <div className="text-center px-4">
                <div className="w-20 h-20 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-6 text-navy">
                  <Calendar size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">1. Erstgespräch</h3>
                <p className="text-gray-600 mb-6">30-60 Min, kostenfrei. Wir klären Potenzial und Chemie.</p>
                <Button variant="primary" className="text-sm">Jetzt buchen</Button>
             </div>
             
             <div className="text-center px-4 md:border-l md:border-r border-gray-100">
                <div className="w-20 h-20 bg-lightblue/10 rounded-full flex items-center justify-center mx-auto mb-6 text-lightblue">
                  <MessageSquare size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">2. Discovery Workshop</h3>
                <p className="text-gray-600">Optional, 1-2 Tage. Tiefe Analyse Ihrer Prozesse und Daten.</p>
             </div>

             <div className="text-center px-4">
                <div className="w-20 h-20 bg-magenta/10 rounded-full flex items-center justify-center mx-auto mb-6 text-magenta">
                  <FileText size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">3. Transparentes Angebot</h3>
                <p className="text-gray-600">Klarer Scope, klares Budget, klare Roadmap.</p>
             </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;