import { useState } from 'react';
import { Award, ChevronDown, ShieldCheck, Star, Truck, Users, Wrench } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_INFO, CREDIBILITY_ITEMS, FAQS } from '../data/deloData';

interface CredibilityAndAboutProps {
  onChooseWorkshop: () => void;
  onChooseRescue: () => void;
}

function CredibilityIcon({ type }: { type: (typeof CREDIBILITY_ITEMS)[number]['icon'] }) {
  switch (type) {
    case 'shield':
      return <ShieldCheck className="h-9 w-9 text-[#f5c518]" aria-hidden="true" />;
    case 'users':
      return <Users className="h-9 w-9 text-[#f5c518]" aria-hidden="true" />;
    case 'gear':
      return (
        <svg viewBox="0 0 40 40" className="h-9 w-9 text-[#f5c518]" aria-hidden="true">
          <g className="anim-gear-cw">
            <path
              d="M20 5l2.2 2.4 3.1-.5 1.1 3 2.9 1.2-.4 3.1 2.2 2.2-1.5 2.7.9 3-2.8 1.5-.3 3.1-3.1.3-1.9 2.5-2.9-1.2-2.9 1.2-1.9-2.5-3.1-.3-.3-3.1-2.8-1.5.9-3-1.5-2.7 2.2-2.2-.4-3.1 2.9-1.2 1.1-3 3.1.5z"
              fill="currentColor"
            />
            <circle cx="20" cy="20" r="6" fill="#071626" />
          </g>
        </svg>
      );
    case 'award':
      return <Award className="h-9 w-9 text-[#f5c518]" aria-hidden="true" />;
  }
}

export function CredibilityAndAbout({
  onChooseWorkshop,
  onChooseRescue,
}: CredibilityAndAboutProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [logoError, setLogoError] = useState(false);

  return (
    <>
      {/* Exact 4-Column Credibility Strip matching approved layout */}
      <section
        aria-label="Diferenciais da Delo Diesel"
        className="border-b border-[#f5c518]/25 bg-[#071626]"
      >
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-7 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-0">
            {CREDIBILITY_ITEMS.map((item, idx) => (
              <div
                key={item.id}
                className={`flex items-center gap-3.5 rounded-lg bg-[#040d17]/40 p-3 sm:gap-4 sm:p-4 lg:rounded-none lg:bg-transparent lg:px-6 lg:py-0 ${
                  idx < CREDIBILITY_ITEMS.length - 1
                    ? 'lg:border-r lg:border-[#f5c518]/40'
                    : ''
                }`}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#040d17]/80 ring-1 ring-[#f5c518]/25 sm:h-12 sm:w-12">
                  <CredibilityIcon type={item.icon} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-bold italic leading-tight text-white">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 text-xs leading-snug text-slate-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre Nós, Prova Social Google (4,6 ★ / 83 avaliações) e FAQ AEO/GEO */}
      <section id="sobre" className="bg-[#040d17] py-10 sm:py-14 lg:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
            {/* Left: Brand Heritage + Official Logo + Clear Workshop vs Rescue Differentiation */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-6"
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                {!logoError ? (
                  <div className="shrink-0 overflow-hidden rounded-xl border border-white/15 bg-white p-2 shadow-lg">
                    <img
                      src={BUSINESS_INFO.officialLogoPath}
                      alt="Logotipo oficial Delo Diesel Mecânica e Peças"
                      referrerPolicy="no-referrer"
                      onError={() => setLogoError(true)}
                      className="h-24 w-24 object-contain sm:h-28 sm:w-28"
                    />
                  </div>
                ) : null}

                <div>
                  <p className="text-xs font-semibold tracking-wider text-[#f5c518] uppercase">
                    Tradição desde {BUSINESS_INFO.foundedYear}
                  </p>
                  <h2 className="mt-1 font-display text-3xl font-extrabold italic tracking-tight text-white sm:text-4xl">
                    Experiência real em linha pesada, utilitários e resgate
                  </h2>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-slate-300 sm:text-base">
                Desde <strong className="text-white">1999</strong>, a <strong className="text-white">Delo Diesel</strong> atua como oficina mecânica especializada em manutenção e reparação de veículos diesel, caminhões, carros e equipamentos pesados, unindo oficina estruturada com atendimento emergencial e caminhão-prancha 24 horas.
              </p>

              {/* Google Reviews Proof Block */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-white/10 bg-[#071626] p-4 sm:p-5">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#f5c518] text-[#040d17]">
                    <span className="font-display text-2xl font-extrabold tabular-nums">
                      {BUSINESS_INFO.googleRating}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-1" aria-label="Avaliação 4,6 de 5 estrelas no Google">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-4 w-4 ${
                            star <= 4
                              ? 'fill-[#f5c518] text-[#f5c518]'
                              : 'fill-[#f5c518]/60 text-[#f5c518]'
                          }`}
                          aria-hidden="true"
                        />
                      ))}
                      <span className="ml-1.5 text-sm font-bold text-white">no Google</span>
                    </div>
                    <p className="mt-0.5 text-xs text-slate-300 tabular-nums">
                      Baseado em {BUSINESS_INFO.googleReviewsCount} avaliações reais de clientes
                    </p>
                  </div>
                </div>
                <span className="text-xs text-slate-400">
                  {BUSINESS_INFO.googleProfileNote}
                </span>
              </div>

              {/* Dual-Audience Decision Cards: Oficina vs. Resgate 24h */}
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={onChooseWorkshop}
                  className="group flex flex-col justify-between rounded-xl border border-white/15 bg-[#071626] p-4 text-left transition-colors hover:border-[#f5c518] focus-visible:outline-2 focus-visible:outline-[#f5c518]"
                >
                  <div>
                    <Wrench className="h-6 w-6 text-[#f5c518]" aria-hidden="true" />
                    <h3 className="mt-3 font-display text-xl font-bold italic text-white">
                      Manutenção na Oficina
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-slate-300">
                      Revisão preventiva, diagnóstico eletrônico, injeção diesel e reparos gerais para caminhões, carros e máquinas.
                    </p>
                  </div>
                  <span className="mt-3 text-xs font-bold text-[#f5c518] group-hover:underline">
                    Solicitar orçamento →
                  </span>
                </button>

                <button
                  type="button"
                  onClick={onChooseRescue}
                  className="group flex flex-col justify-between rounded-xl border border-[#f5c518]/35 bg-[#0a1d31] p-4 text-left transition-colors hover:border-[#f5c518] focus-visible:outline-2 focus-visible:outline-[#f5c518]"
                >
                  <div>
                    <Truck className="h-6 w-6 text-[#f5c518]" aria-hidden="true" />
                    <h3 className="mt-3 font-display text-xl font-bold italic text-white">
                      Resgate & Prancha 24h
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-slate-300">
                      Atendimento emergencial 24 horas e caminhão-prancha para transporte seguro onde você estiver.
                    </p>
                  </div>
                  <span className="mt-3 text-xs font-bold text-[#f5c518] group-hover:underline">
                    Chamar socorro agora →
                  </span>
                </button>
              </div>
            </motion.div>

            {/* Right: AEO/GEO Structured FAQ Accordion */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: 0.08 }}
              className="lg:col-span-6"
            >
              <div className="rounded-xl border border-white/10 bg-[#071626] p-5 sm:p-7">
                <h3 className="font-display text-2xl font-extrabold italic text-white sm:text-3xl">
                  Perguntas <span className="text-[#f5c518]">Frequentes</span>
                </h3>
                <p className="mt-1.5 text-sm text-slate-300">
                  Tire suas dúvidas sobre oficina mecânica diesel, caminhão-prancha e socorro 24 horas.
                </p>

                <div className="mt-5 divide-y divide-white/10">
                  {FAQS.map((faq, idx) => {
                    const isOpen = openFaq === idx;
                    return (
                      <div key={faq.question} className="py-3.5 first:pt-0 last:pb-0">
                        <button
                          type="button"
                          onClick={() => setOpenFaq(isOpen ? null : idx)}
                          aria-expanded={isOpen}
                          className="flex w-full items-center justify-between gap-4 py-1 text-left text-sm font-semibold text-white transition-colors hover:text-[#f5c518] sm:text-base"
                        >
                          <span>{faq.question}</span>
                          <ChevronDown
                            className={`h-4 w-4 shrink-0 text-[#f5c518] transition-transform duration-200 ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                            aria-hidden="true"
                          />
                        </button>
                        {isOpen && (
                          <p className="mt-2 pr-6 text-sm leading-relaxed text-slate-300">
                            {faq.answer}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
