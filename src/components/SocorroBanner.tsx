import { ArrowRight } from 'lucide-react';
import { FlatbedTruckMotion } from './FlatbedTruckMotion';

interface SocorroBannerProps {
  onOpenEmergency: () => void;
}

export function SocorroBanner({ onOpenEmergency }: SocorroBannerProps) {
  return (
    <section
      id="socorro-24h"
      aria-label="Socorro 24 Horas e Caminhão-Prancha"
      className="relative overflow-hidden border-y border-[#f5c518]/25 bg-[#040d17]"
    >
      <div className="relative mx-auto grid min-h-[260px] max-w-[1440px] grid-cols-1 items-center md:min-h-[290px] md:grid-cols-12 lg:min-h-[330px]">
        {/* Left/Background Animated Caminhão-Prancha Scene */}
        <div className="relative h-[200px] w-full sm:h-[250px] md:col-span-7 md:h-[290px] lg:h-[330px]">
          <FlatbedTruckMotion />
          {/* Seamless horizontal blend into the right typography panel */}
          <div
            className="pointer-events-none absolute inset-y-0 right-0 hidden w-28 bg-gradient-to-l from-[#040d17] via-[#040d17]/75 to-transparent md:block lg:w-36"
            aria-hidden="true"
          />
        </div>

        {/* Right High-Impact Emergency CTA Column */}
        <div className="relative z-10 flex flex-col items-center justify-center bg-[#040d17] px-4 py-7 text-center sm:px-8 md:col-span-5 md:items-start md:bg-transparent md:py-8 md:pr-6 md:pl-0 md:text-left lg:py-10 lg:pr-10">
          <div className="flex items-center justify-center gap-2.5 md:justify-start sm:gap-3">
            <h2 className="font-display text-3xl font-extrabold italic tracking-tight uppercase sm:text-4xl md:text-[2.35rem] lg:text-5xl xl:text-[3.35rem]">
              <span className="text-white">Socorro </span>
              <span className="text-[#f5c518]">24 Horas</span>
            </h2>

            {/* Animated 24h Circular Emblem matching reference */}
            <svg
              viewBox="0 0 60 60"
              className="h-10 w-10 shrink-0 sm:h-12 sm:w-12 lg:h-14 lg:w-14"
              aria-hidden="true"
            >
              <g style={{ animation: 'gear-cw 20s linear infinite', transformOrigin: '30px 30px' }}>
                <path
                  d="M30 7a23 23 0 1 1-20.5 12.6"
                  fill="none"
                  stroke="#f5c518"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                <polygon points="7,14 16,14 10,23" fill="#f5c518" />
              </g>
              <line x1="30" y1="30" x2="30" y2="17" stroke="#f5c518" strokeWidth="2.8" strokeLinecap="round" />
              <line x1="30" y1="30" x2="40" y2="30" stroke="#f5c518" strokeWidth="2.8" strokeLinecap="round" />
            </svg>
          </div>

          <p className="mt-2 text-sm font-bold italic tracking-wide text-slate-100 sm:text-base lg:text-lg">
            Carros · Caminhões · Equipamentos Pesados
          </p>

          {/* Angled Yellow Banner Button matching exact approved reference without horizontal overflow */}
          <button
            type="button"
            onClick={onOpenEmergency}
            className="group mt-5 inline-flex min-h-[46px] max-w-full -skew-x-6 items-center justify-center gap-2.5 rounded-lg bg-gradient-to-r from-[#fde047] via-[#f5c518] to-[#eab308] px-5 py-3 text-sm font-extrabold italic text-[#040d17] shadow-xl shadow-amber-500/20 transition-all duration-150 hover:scale-[1.02] hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:-skew-x-12 sm:gap-3 sm:px-7 sm:py-3.5 sm:text-base lg:px-8 lg:text-lg"
          >
            <span className="skew-x-6 sm:skew-x-12">Conte com a nossa equipe, sempre!</span>
            <ArrowRight
              className="h-4 w-4 shrink-0 skew-x-6 transition-transform duration-150 group-hover:translate-x-1 sm:h-5 sm:w-5 sm:skew-x-12"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
