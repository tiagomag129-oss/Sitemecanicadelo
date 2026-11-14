import { useState } from 'react';
import { MotionConfig } from 'motion/react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { SocorroBanner } from './components/SocorroBanner';
import { CredibilityAndAbout } from './components/CredibilityAndAbout';
import { QuoteSection, RequestMode } from './components/QuoteSection';
import { ServiceModal } from './components/ServiceModal';
import { Footer } from './components/Footer';
import { SERVICES, ServiceId, ServiceItem } from './data/deloData';

export default function App() {
  const [activeServiceModal, setActiveServiceModal] = useState<ServiceItem | null>(null);
  const [quoteMode, setQuoteMode] = useState<RequestMode>('oficina');
  const [selectedServiceId, setSelectedServiceId] = useState<ServiceId>('mecanica-diesel');

  function scrollToQuote(mode: RequestMode, serviceId?: ServiceId) {
    setQuoteMode(mode);
    if (serviceId) {
      setSelectedServiceId(serviceId);
    }
    const target = document.getElementById('orcamento');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function handleSelectService(id: ServiceId) {
    const found = SERVICES.find((s) => s.id === id) ?? null;
    setActiveServiceModal(found);
  }

  function handleStartFromModal(service: ServiceItem) {
    setActiveServiceModal(null);
    const mode: RequestMode = service.category === 'resgate' ? 'socorro' : 'oficina';
    scrollToQuote(mode, service.id);
  }

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#040d17] text-white">
        <Header
          onSelectService={handleSelectService}
          onOpenEmergency={() => scrollToQuote('socorro', 'socorro-24h')}
        />

        <main>
          <HeroSection
            onRequestQuote={() => scrollToQuote('oficina', 'mecanica-diesel')}
            onRequestEmergency={() => scrollToQuote('socorro', 'socorro-24h')}
          />

          <ServicesSection onSelectService={handleSelectService} />

          <SocorroBanner
            onOpenEmergency={() => scrollToQuote('socorro', 'caminhao-prancha')}
          />

          <CredibilityAndAbout
            onChooseWorkshop={() => scrollToQuote('oficina', 'mecanica-diesel')}
            onChooseRescue={() => scrollToQuote('socorro', 'socorro-24h')}
          />

          <QuoteSection
            mode={quoteMode}
            onModeChange={setQuoteMode}
            selectedServiceId={selectedServiceId}
            onServiceChange={setSelectedServiceId}
          />
        </main>

        <Footer />

        <ServiceModal
          service={activeServiceModal}
          onClose={() => setActiveServiceModal(null)}
          onStartRequest={handleStartFromModal}
        />
      </div>
    </MotionConfig>
  );
}
