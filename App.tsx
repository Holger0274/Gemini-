import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProblemGroup from './components/ProblemGroup';
import ProcessSection from './components/ProcessSection';
import MultiAgentSection from './components/MultiAgentSection';
import ServiceGroup from './components/ServiceGroup';
import UseCasesSection from './components/UseCasesSection';
import RoiSection from './components/RoiSection';
import TrustGroup from './components/TrustGroup';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <ProblemGroup />
        <ProcessSection />
        <MultiAgentSection />
        <ServiceGroup />
        <UseCasesSection />
        <RoiSection />
        <TrustGroup />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;