import { useState } from 'react';
import { ArrowRight, Check, PhoneCall, Star, Wrench } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_INFO, HERO_IMAGES } from '../data/deloData';

interface HeroSectionProps {
  onRequestQuote: () => void;
  onRequestEmergency: () => void;
}

const HERO_BULLETS = [
  'Manutenção Preventiva e Corretiva',
  'Diagnóstico Eletrônico',
  'Injeção Diesel',
  'Reparos em Geral',
];

export function HeroSection({ onRequestQuote, onRequestEmergency }: HeroSectionProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[#040d17] pt-7 pb-10 sm:pt-11 sm:pb-14 md:min-h-[480px] lg:min-h-[560px] lg:py-16"
    >
      {/* Background workshop photography (mechanic + diesel engine + blue truck) */}
      <div className="absolute inset-0 z-0">
        {!imgError ? (
          <img
            src={HERO_IMAGES.workshop}
            alt="Mecânico especialista da Delo Diesel realizando manutenção em motor diesel pesado com caminhão azul ao fundo"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="h-full w-full object-cover object-[74%_22%] opacity-85 sm:object-[76%_center] md:opacity-90"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-end bg-gradient-to-br from-[#071626] via-[#0b2239] to-[#040d17] pr-16 opacity-60">
            <Wrench className="h-48 w-48 text-[#f5c518]/20" aria-hidden="true" />
          </div>
        )}

        {/* Mobile vertical + radial readability scrim */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background:
              'linear-gradient(180deg, rgba(4,13,23,0.92) 0%, rgba(4,13,23,0.78) 52%, rgba(4,13,23,0.94) 100%)',
          }}
          aria-hidden="true"
        />

        {/* Tablet & Desktop multi-stop petrol-blue scrim ensuring WCAG AA legibility on the left */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              'linear-gradient(90deg, #040d17 0%, rgba(4,13,23,0.94) 38%, rgba(7,22,38,0.60) 66%, rgba(4,13,23,0.36) 100%)',
          }}
          aria-hidden="true"
        />
        {/* Bottom depth vignette transitioning smoothly into Nossos Serviços */}
        <div
          className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#040d17] to-transparent sm:h-28"
          aria-hidden="true"
        />
      </div>

      {/* Subtle ambient interlocking mechanical gears silhouette on far-left edge */}
      <div
        className="pointer-events-none absolute -top-12 -left-16 z-0 opacity-[0.07]"
        aria-hidden="true"
      >
        <svg viewBox="0 0 200 200" className="h-52 w-52 text-[#f5c518] sm:h-64 sm:w-64">
          <g className="anim-gear-cw">
            <circle
              cx="100"
              cy="100"
              r="72"
              fill="none"
              stroke="currentColor"
              strokeWidth="18"
              strokeDasharray="18 14"
            />
            <circle cx="100" cy="100" r="44" fill="none" stroke="currentColor" strokeWidth="6" />
          </g>
        </svg>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-end gap-6 px-4 sm:px-6 md:grid-cols-12 md:gap-8 lg:px-8">
        {/* Left Value Proposition & Conversion Column */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-7 lg:col-span-6"
        >
          {/* Trust inline line (no pill enclosures) */}
          <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium tracking-wide text-slate-300">
            <span className="font-semibold text-[#f5c518]">Desde {BUSINESS_INFO.foundedYear}</span>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1 tabular-nums">
              <Star className="h-3.5 w-3.5 fill-[#f5c518] text-[#f5c518]" aria-hidden="true" />
              <strong className="text-white">{BUSINESS_INFO.googleRating}</strong>
              <span>({BUSINESS_INFO.googleReviewsCount} avaliações no Google)</span>
            </span>
          </div>

          <h1 className="font-display font-extrabold italic tracking-tight uppercase leading-[0.92]">
            <span className="block text-2xl text-white sm:text-4xl lg:text-[2.75rem]">
              Oficina Mecânica
            </span>
            <span
              className="block bg-gradient-to-b from-[#fef08a] via-[#f5c518] to-[#ca8a04] bg-clip-text text-[3.5rem] text-transparent sm:text-7xl lg:text-[5.5rem]"
            >
              Diesel
            </span>
          </h1>

          <p className="mt-3 max-w-lg text-base font-semibold italic leading-snug text-slate-100 sm:text-xl">
            Força, experiência e tecnologia para manter você sempre em movimento!
          </p>

          {/* Signature curved yellow brush underline matching approved reference */}
          <svg
            viewBox="0 0 280 14"
            className="mt-2 h-3 w-48 sm:w-64"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 9.5C75 3.5 190 2.5 276 7.5"
              stroke="#f5c518"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          </svg>

          {/* 4 Core Service Checkmarks */}
          <ul className="mt-5 space-y-2.5">
            {HERO_BULLETS.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-sm font-medium italic text-slate-100 sm:text-base"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f5c518] text-[#040d17]">
                  <Check className="h-3.5 w-3.5 stroke-[3]" aria-hidden="true" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Primary Conversion CTAs */}
          <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3.5">
            <button
              type="button"
              onClick={onRequestQuote}
              className="group inline-flex min-h-[46px] w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#fde047] via-[#f5c518] to-[#eab308] px-6 py-3 text-base font-bold text-[#040d17] shadow-xl shadow-amber-500/20 transition-all duration-150 hover:scale-[1.02] hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
            >
              <span>Solicite um Orçamento</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#040d17] text-[#f5c518] transition-transform duration-150 group-hover:translate-x-0.5">
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </button>

            <button
              type="button"
              onClick={onRequestEmergency}
              className="inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-[#071626]/85 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors duration-150 hover:border-[#f5c518] hover:text-[#f5c518] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f5c518] sm:w-auto"
            >
              <PhoneCall className="h-4 w-4 text-[#f5c518]" aria-hidden="true" />
              <span>Socorro 24h / Prancha</span>
            </button>
          </div>
        </motion.div>

        {/* Right Overlay Sign-off matching reference layout */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col items-start md:col-span-5 md:items-end md:pb-2 lg:col-span-6"
        >
          <div className="rounded-lg bg-[#040d17]/65 px-4 py-2 backdrop-blur-[2px] md:bg-transparent md:px-0 md:py-0 md:backdrop-blur-none">
            <p className="font-display text-xl font-bold italic tracking-wide text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] sm:text-2xl lg:text-3xl">
              Seu veículo em boas mãos!
            </p>
            <svg
              viewBox="0 0 220 12"
              className="mt-1 h-2.5 w-40 sm:w-48 md:ml-auto lg:w-52"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 9C68 3 156 2.5 216 7"
                stroke="#f5c518"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
