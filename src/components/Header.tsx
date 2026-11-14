import { useState } from 'react';
import { ChevronDown, Menu, MessageCircle, X } from 'lucide-react';
import { BUSINESS_INFO, SERVICES, ServiceId, buildWhatsAppUrl } from '../data/deloData';

interface HeaderProps {
  onSelectService: (id: ServiceId) => void;
  onOpenEmergency: () => void;
}

export function Header({ onSelectService, onOpenEmergency }: HeaderProps) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappDirect = buildWhatsAppUrl(
    'Olá, Delo Diesel! Gostaria de falar com a equipe sobre atendimento.'
  );

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#040d17]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-2.5 sm:gap-4 sm:px-6 sm:py-3 lg:gap-8 lg:px-8">
        {/* Zone 1: Brand Lockup (matches approved mockup emblem + Delo Diesel typography) */}
        <a
          href="#inicio"
          className="flex min-w-0 shrink-0 items-center gap-2 sm:gap-2.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f5c518]"
          aria-label="Delo Diesel - Página Inicial"
        >
          <span className="relative flex h-8 w-8 shrink-0 items-center justify-center sm:h-10 sm:w-10">
            <svg
              viewBox="0 0 48 48"
              className="h-8 w-8 sm:h-10 sm:w-10"
              aria-hidden="true"
            >
              <g className="anim-gear-cw">
                <path
                  d="M24 4l3.2 2.2 3.8-.7 1.7 3.5 3.7 1.2-.2 3.9 2.7 2.8-1.9 3.4 1.1 3.7-3.3 2.1-.6 3.8-3.8.5-2.3 3.1-3.6-1.3-3.6 1.3-2.3-3.1-3.8-.5-.6-3.8-3.3-2.1 1.1-3.7-1.9-3.4 2.7-2.8-.2-3.9 3.7-1.2 1.7-3.5 3.8.7z"
                  fill="#f5c518"
                />
                <circle cx="24" cy="24" r="12.5" fill="#040d17" />
              </g>
              {/* Wrench icon centered inside gear */}
              <path
                d="M28.8 17.8a4.5 4.5 0 0 0-5.9 5.9l-5.8 5.8a1.7 1.7 0 0 0 2.4 2.4l5.8-5.8a4.5 4.5 0 0 0 5.9-5.9l-2.3 2.3-2.4-.6-.6-2.4z"
                fill="#ffffff"
              />
            </svg>
          </span>
          <span className="flex flex-col leading-none whitespace-nowrap">
            <span className="font-display text-xl font-extrabold italic tracking-tight sm:text-2xl">
              <span className="text-white">Delo </span>
              <span className="text-[#f5c518]">Diesel</span>
            </span>
            <span className="text-[8px] font-semibold tracking-[0.11em] text-slate-300 uppercase sm:text-[9.5px] sm:tracking-[0.14em]">
              {BUSINESS_INFO.tagline}
            </span>
          </span>
        </a>

        {/* Zone 2: Primary Navigation (single-line links matching reference) */}
        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-1 text-sm font-medium lg:flex"
        >
          <a
            href="#inicio"
            className="rounded-md bg-[#f5c518] px-3.5 py-1.5 font-semibold text-[#040d17] whitespace-nowrap shrink-0 transition-colors hover:bg-[#fde047]"
          >
            Início
          </a>

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              onClick={() => setServicesOpen((prev) => !prev)}
              aria-expanded={servicesOpen}
              className="flex items-center gap-1 rounded-md px-3.5 py-1.5 text-slate-200 whitespace-nowrap shrink-0 transition-colors hover:text-[#f5c518] focus-visible:outline-2 focus-visible:outline-[#f5c518]"
            >
              <span>Serviços</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-150 ${
                  servicesOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-0 mt-1 w-64 rounded-lg border border-white/15 bg-[#071626] p-1.5 shadow-2xl">
                {SERVICES.map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => {
                      setServicesOpen(false);
                      onSelectService(service.id);
                    }}
                    className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm text-slate-200 transition-colors hover:bg-white/10 hover:text-[#f5c518]"
                  >
                    <span>{service.title}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <a
            href="#socorro-24h"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('socorro-24h')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="rounded-md px-3.5 py-1.5 text-slate-200 whitespace-nowrap shrink-0 transition-colors hover:text-[#f5c518]"
          >
            Socorro 24h
          </a>

          <a
            href="#sobre"
            className="rounded-md px-3.5 py-1.5 text-slate-200 whitespace-nowrap shrink-0 transition-colors hover:text-[#f5c518]"
          >
            Sobre Nós
          </a>

          <a
            href="#orcamento"
            className="rounded-md px-3.5 py-1.5 text-slate-200 whitespace-nowrap shrink-0 transition-colors hover:text-[#f5c518]"
          >
            Contato
          </a>
        </nav>

        {/* Zone 3: Primary WhatsApp CTA + Mobile/Tablet Trigger */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-2.5">
          <a
            href={whatsappDirect}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[40px] items-center gap-1.5 rounded-full bg-[#16a34a] px-3 py-2 text-xs font-semibold text-white whitespace-nowrap shrink-0 shadow-lg shadow-emerald-950/40 transition-all duration-150 hover:bg-[#15803d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f5c518] sm:gap-2 sm:px-4 sm:text-sm"
          >
            <MessageCircle className="h-4 w-4 fill-current" aria-hidden="true" />
            <span className="hidden min-[380px]:inline">Fale Conosco</span>
            <span className="min-[380px]:hidden">WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileMenuOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 bg-white/5 text-white lg:hidden"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-white/10 bg-[#05101c] px-4 py-4 sm:px-6 lg:hidden">
          <nav className="grid grid-cols-1 gap-1.5 sm:grid-cols-2 sm:gap-2" aria-label="Menu móvel e tablet">
            <a
              href="#inicio"
              onClick={() => setMobileMenuOpen(false)}
              className="flex min-h-[44px] items-center rounded-md bg-[#f5c518] px-3.5 py-2.5 text-sm font-bold text-[#040d17]"
            >
              Início
            </a>
            <a
              href="#servicos"
              onClick={() => setMobileMenuOpen(false)}
              className="flex min-h-[44px] items-center rounded-md px-3.5 py-2.5 text-sm font-medium text-slate-200 hover:bg-white/10"
            >
              Nossos Serviços
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEmergency();
              }}
              className="flex min-h-[44px] items-center rounded-md px-3.5 py-2.5 text-left text-sm font-semibold text-[#f5c518] hover:bg-white/10"
            >
              Socorro 24 Horas
            </button>
            <a
              href="#sobre"
              onClick={() => setMobileMenuOpen(false)}
              className="flex min-h-[44px] items-center rounded-md px-3.5 py-2.5 text-sm font-medium text-slate-200 hover:bg-white/10"
            >
              Sobre Nós · Desde 1999
            </a>
            <a
              href="#orcamento"
              onClick={() => setMobileMenuOpen(false)}
              className="flex min-h-[44px] items-center rounded-md px-3.5 py-2.5 text-sm font-medium text-slate-200 hover:bg-white/10 sm:col-span-2"
            >
              Solicitar Orçamento / Contato
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
