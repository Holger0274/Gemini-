import React from 'react';
import { Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Brand */}
          <div className="space-y-4">
             <a href="#" className="text-2xl font-bold tracking-tight">
              AI<span className="text-lightblue">.mation</span>
            </a>
            <p className="text-gray-400 max-w-xs">
              Automatisierung mit Intelligenz. Wir begleiten KMUs bei der digitalen Transformation mit messbarem ROI.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={24} /></a>
            </div>
          </div>

          {/* Column 2: Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Kontakt</h4>
            <ul className="space-y-3 text-gray-300">
              <li>hallo@aimation.de</li>
              <li>+49 (0) 30 12345678</li>
              <li>Musterstraße 1, 10115 Berlin</li>
            </ul>
          </div>

          {/* Column 3: Links */}
          <div>
             <h4 className="text-lg font-bold mb-4">Links</h4>
             <ul className="space-y-2">
               {['Services', 'Prozess', 'Use Cases', 'Schulungen', 'Impressum', 'Datenschutz'].map(link => (
                 <li key={link}><a href="#" className="text-gray-400 hover:text-lightblue transition-colors">{link}</a></li>
               ))}
             </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} AI.mation. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
};

export default Footer;