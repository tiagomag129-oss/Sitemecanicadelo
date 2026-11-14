import { MessageCircle, PhoneCall } from 'lucide-react';
import { BUSINESS_INFO, buildWhatsAppUrl } from '../data/deloData';

export function Footer() {
  const waUrl = buildWhatsAppUrl(
    'Olá, Delo Diesel! Gostaria de solicitar atendimento pelo WhatsApp.'
  );

  return (
    <footer className="relative overflow-hidden border-t border-[#f5c518]/30 bg-[#040d17] tire-tread-bg">
      {/* Main Footer Bar matching exact approved reference composition */}
      <div className="relative mx-auto flex max-w-[1440px] flex-col items-stretch justify-between md:flex-row md:items-center">
        {/* Left Diagonal Yellow Phone Block */}
        <a
          href={BUSINESS_INFO.phoneHref}
          className="relative flex items-center justify-center gap-3 bg-gradient-to-r from-[#fde047] via-[#f5c518] to-[#eab308] px-5 py-4 text-[#040d17] transition-brightness hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:min-w-[280px] md:justify-start md:px-7 md:py-5 md:[clip-path:polygon(0_0,90%_0,100%_100%,0%_100%)] lg:min-w-[360px] lg:gap-3.5 lg:px-10 lg:[clip-path:polygon(0_0,88%_0,100%_100%,0%_100%)]"
          aria-label={`Ligar para Delo Diesel: ${BUSINESS_INFO.phoneDisplay}`}
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#040d17]/10 lg:h-11 lg:w-11">
            <PhoneCall className="h-5 w-5 stroke-[2.4] lg:h-6 lg:w-6" aria-hidden="true" />
          </span>
          <span className="font-display text-2xl font-extrabold tracking-tight tabular-nums sm:text-3xl lg:text-4xl">
            {BUSINESS_INFO.phoneDisplay}
          </span>
        </a>

        {/* Center Green WhatsApp CTA */}
        <div className="flex items-center justify-center px-4 py-4 md:px-4 md:py-5 lg:px-6">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-[44px] items-center gap-2.5 rounded-full px-3 py-2 text-base font-bold italic text-white transition-colors hover:text-[#f5c518] focus-visible:outline-2 focus-visible:outline-[#f5c518] lg:gap-3 lg:px-4 lg:text-lg"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#16a34a] text-white shadow-lg shadow-emerald-950/50 transition-transform group-hover:scale-105 lg:h-10 lg:w-10">
              <MessageCircle className="h-4 w-4 fill-current lg:h-5 lg:w-5" aria-hidden="true" />
            </span>
            <span>Fale Conosco pelo WhatsApp</span>
          </a>
        </div>

        {/* Right Brand Sign-off */}
        <div className="flex flex-col items-center px-6 pb-5 md:items-end md:px-6 md:py-4 lg:px-10">
          <div className="font-display text-2xl font-extrabold italic tracking-tight lg:text-3xl">
            <span className="text-white">Delo </span>
            <span className="text-[#f5c518]">Diesel</span>
          </div>
          <p className="text-xs font-semibold italic text-slate-200 lg:text-sm">
            Sempre ao seu lado!
          </p>
          <svg
            viewBox="0 0 160 8"
            className="mt-1 h-2 w-28 lg:w-32"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 6C50 2 110 1.5 157 4.5"
              stroke="#f5c518"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* Quiet Legal & Google Business Profile Bar */}
      <div className="border-t border-white/10 bg-[#030810] px-4 py-3 text-center text-xs text-slate-400 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 sm:flex-row">
          <p>
            © {BUSINESS_INFO.foundedYear}–{new Date().getFullYear()} {BUSINESS_INFO.name} · {BUSINESS_INFO.tagline} · {BUSINESS_INFO.googleRating} ★ ({BUSINESS_INFO.googleReviewsCount} avaliações no Google)
          </p>
          <p className="text-[11px] text-slate-500">
            Endereço e telefone oficial conforme Perfil da Empresa no Google (contato exibido em modo provisório até atualização).
          </p>
        </div>
      </div>
    </footer>
  );
}
