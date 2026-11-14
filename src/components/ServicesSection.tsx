import { useState } from 'react';
import { motion } from 'motion/react';
import { Wrench } from 'lucide-react';
import { SERVICES, ServiceId, ServiceItem } from '../data/deloData';

interface ServicesSectionProps {
  onSelectService: (id: ServiceId) => void;
}

function ServiceGlyph({ id }: { id: ServiceId }) {
  switch (id) {
    case 'mecanica-diesel':
      return (
        <svg viewBox="0 0 64 64" className="h-11 w-11 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]" aria-hidden="true">
          {/* Large primary gear */}
          <g className="anim-gear-cw">
            <path
              d="M28 10l2.4 2.8 3.6-.6 1.2 3.4 3.4 1.4-.5 3.6 2.6 2.5-1.8 3.2 1 3.5-3.2 1.8-.4 3.6-3.6.3-2.2 2.9-3.3-1.4-3.3 1.4-2.2-2.9-3.6-.3-.4-3.6-3.2-1.8 1-3.5-1.8-3.2 2.6-2.5-.5-3.6 3.4-1.4 1.2-3.4 3.6.6z"
              fill="#f5c518"
            />
            <circle cx="28" cy="28" r="7.5" fill="#071626" />
            <circle cx="28" cy="28" r="3.5" fill="#f5c518" />
          </g>
          {/* Secondary meshed pinion gear */}
          <g className="anim-gear-ccw">
            <path
              d="M47 36l1.5 1.8 2.3-.3.7 2.2 2.1.9-.3 2.3 1.6 1.6-1.1 2 .6 2.2-2 1.1-.3 2.3-2.3.2-1.4 1.8-2.1-.9-2.1.9-1.4-1.8-2.3-.2-.3-2.3-2-1.1.6-2.2-1.1-2 1.6-1.6-.3-2.3 2.1-.9.7-2.2 2.3.3z"
              fill="#fde047"
            />
            <circle cx="47" cy="46" r="4" fill="#071626" />
          </g>
        </svg>
      );

    case 'injecao-eletronica':
      return (
        <svg viewBox="0 0 64 64" className="h-11 w-11 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]" aria-hidden="true">
          <g transform="rotate(38 32 30)">
            {/* Injector top connector */}
            <rect x="26" y="7" width="12" height="7" rx="1.5" fill="#f5c518" />
            {/* Solenoid housing */}
            <rect x="23" y="14" width="18" height="12" rx="2" fill="#fde047" />
            <rect x="25" y="17" width="14" height="3" fill="#071626" opacity="0.35" />
            {/* Barrel */}
            <rect x="27" y="26" width="10" height="14" fill="#f5c518" />
            {/* Nozzle tip */}
            <path d="M29 40h6l-1.5 9h-3z" fill="#eab308" />
            {/* Calibration spray pulse */}
            <g className="anim-injector-pulse">
              <path d="M32 50l-5 8h10z" fill="#fde047" opacity="0.85" />
              <line x1="32" y1="50" x2="32" y2="59" stroke="#ffffff" strokeWidth="1.2" opacity="0.7" />
            </g>
          </g>
        </svg>
      );

    case 'caminhao-prancha':
      return (
        <svg viewBox="0 0 64 64" className="h-11 w-11 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]" aria-hidden="true">
          {/* Flatbed deck */}
          <path d="M6 39h33v4H6z" fill="#f5c518" />
          {/* Cargo vehicle silhouette */}
          <path d="M10 38l3-9h12l4 5v4z" fill="#fde047" opacity="0.9" />
          {/* Tow truck cab */}
          <path d="M40 24h10l6 8v11H40z" fill="#f5c518" />
          <path d="M43 27h6l4 5h-10z" fill="#071626" />
          {/* Beacon */}
          <rect x="42" y="21" width="4" height="2.5" rx="1" fill="#fde047" className="anim-beacon" />
          {/* Rotating wheels */}
          <g className="anim-wheel-spin">
            <circle cx="16" cy="45" r="4.5" fill="#071626" stroke="#f5c518" strokeWidth="2.2" />
            <circle cx="16" cy="45" r="1.4" fill="#f5c518" />
          </g>
          <g className="anim-wheel-spin">
            <circle cx="31" cy="45" r="4.5" fill="#071626" stroke="#f5c518" strokeWidth="2.2" />
            <circle cx="31" cy="45" r="1.4" fill="#f5c518" />
          </g>
          <g className="anim-wheel-spin">
            <circle cx="49" cy="45" r="4.5" fill="#071626" stroke="#f5c518" strokeWidth="2.2" />
            <circle cx="49" cy="45" r="1.4" fill="#f5c518" />
          </g>
        </svg>
      );

    case 'equipamentos-pesados':
      return (
        <svg viewBox="0 0 64 64" className="h-11 w-11 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]" aria-hidden="true">
          {/* Tracks */}
          <rect x="8" y="45" width="28" height="7" rx="3.5" fill="#eab308" />
          <circle cx="13" cy="48.5" r="2" fill="#071626" />
          <circle cx="22" cy="48.5" r="2" fill="#071626" />
          <circle cx="31" cy="48.5" r="2" fill="#071626" />
          {/* Upper cab body */}
          <path d="M10 34h16l4 10H10z" fill="#f5c518" />
          <rect x="17" y="29" width="10" height="8" rx="1.5" fill="#fde047" />
          <rect x="19" y="31" width="6" height="4" fill="#071626" />
          {/* Articulated hydraulic boom */}
          <g className="anim-excavator-boom">
            <path d="M27 36L40 16l5 2-12 20z" fill="#f5c518" />
            {/* Dipper stick */}
            <g className="anim-excavator-stick">
              <path d="M41 16l10 17-3.5 2L38 19z" fill="#fde047" />
              {/* Hydraulic bucket */}
              <g className="anim-excavator-bucket">
                <path d="M49 34l8 3-2 7c-3 1-6-1-7-4z" fill="#eab308" />
              </g>
            </g>
          </g>
        </svg>
      );

    case 'socorro-24h':
      return (
        <svg viewBox="0 0 64 64" className="h-11 w-11 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]" aria-hidden="true">
          {/* Rotating 24h directional arrow ring */}
          <g style={{ animation: 'gear-cw 18s linear infinite', transformOrigin: '32px 32px' }}>
            <path
              d="M32 10a22 22 0 1 1-19.2 11.3"
              fill="none"
              stroke="#f5c518"
              strokeWidth="3.2"
              strokeLinecap="round"
            />
            <polygon points="10,16 18,16 13,24" fill="#f5c518" />
          </g>
          <text
            x="32"
            y="36.5"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="15"
            fontWeight="800"
            fontStyle="italic"
            fontFamily="Barlow Condensed, sans-serif"
          >
            24h
          </text>
        </svg>
      );
  }
}

function ServiceCard({
  service,
  index,
  onSelect,
}: {
  service: ServiceItem;
  index: number;
  onSelect: (id: ServiceId) => void;
}) {
  const [imgError, setImgError] = useState(false);

  const tabletSpanClass =
    index < 3
      ? 'sm:col-span-1 md:col-span-2 lg:col-span-1'
      : index === 3
        ? 'sm:col-span-1 md:col-span-3 lg:col-span-1'
        : 'sm:col-span-2 md:col-span-3 lg:col-span-1';

  return (
    <motion.button
      type="button"
      onClick={() => onSelect(service.id)}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      className={`group relative flex flex-col overflow-hidden rounded-xl border border-white/15 bg-[#071626] text-left shadow-xl transition-all duration-200 hover:-translate-y-1 hover:border-[#f5c518]/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f5c518] ${tabletSpanClass}`}
    >
      {/* Top photo layer */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#040d17] sm:aspect-[4/3]">
        {!imgError ? (
          <img
            src={service.image}
            alt={service.imageAlt}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#0b2239] to-[#040d17]">
            <Wrench className="h-10 w-10 text-[#f5c518]/40" aria-hidden="true" />
          </div>
        )}
        <div
          className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#071626] via-[#071626]/75 to-transparent"
          aria-hidden="true"
        />
      </div>

      {/* Overlapping Animated Service Glyph */}
      <div className="relative z-10 -mt-7 flex justify-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#071626]/85 ring-1 ring-white/10 backdrop-blur-sm transition-transform duration-200 group-hover:scale-110">
          <ServiceGlyph id={service.id} />
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-1 flex-col items-center justify-between px-4 pt-2 pb-5 text-center">
        <div>
          <h3 className="font-display text-xl font-bold italic leading-tight text-white transition-colors group-hover:text-[#f5c518]">
            {service.title}
          </h3>
          <p className="mt-2 text-xs italic leading-relaxed text-slate-300 sm:text-sm">
            {service.shortDesc}
          </p>
        </div>

        <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#f5c518] opacity-90 transition-opacity group-hover:opacity-100">
          <span>Ver detalhes</span>
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </span>
      </div>
    </motion.button>
  );
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  return (
    <section id="servicos" className="relative bg-[#040d17] py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading matching reference horizontal yellow lines */}
        <div className="mb-7 flex items-center justify-center gap-3 sm:mb-10 sm:gap-6">
          <span className="h-[2px] flex-1 max-w-[180px] bg-gradient-to-r from-transparent to-[#f5c518]" aria-hidden="true" />
          <h2 className="font-display text-3xl font-extrabold italic tracking-tight whitespace-nowrap sm:text-4xl lg:text-[2.65rem]">
            <span className="text-white">Nossos </span>
            <span className="text-[#f5c518]">Serviços</span>
          </h2>
          <span className="h-[2px] flex-1 max-w-[180px] bg-gradient-to-l from-transparent to-[#f5c518]" aria-hidden="true" />
        </div>

        {/* Exact 5-card grid: 1-col mobile, 2+2+1 full-span small tablet, 3+2 balanced md tablet, 5-col desktop */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-5">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              onSelect={onSelectService}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
