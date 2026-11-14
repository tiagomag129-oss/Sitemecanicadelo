import { useState } from 'react';
import { HERO_IMAGES } from '../data/deloData';

/**
 * Caminhão-Prancha em Movimento Parado:
 * - O caminhão permanece fixo exatamente no mesmo ponto da composição.
 * - As rodas giram continuamente ao redor de seus centros geométricos.
 * - A estrada e marcadores de rodovia deslocam-se suavemente em loop infinito.
 * - A suspensão apresenta oscilação natural amortecida sem deslocar as rodas do asfalto.
 * - Os faróis e giroflex possuem iluminação suave e realista.
 */
export function FlatbedTruckMotion() {
  const [bgError, setBgError] = useState(false);

  return (
    <div className="relative h-full w-full overflow-hidden select-none">
      {/* Layer 1: Twilight highway horizon backdrop */}
      {!bgError ? (
        <img
          src={HERO_IMAGES.highwaySunset}
          alt=""
          aria-hidden="true"
          referrerPolicy="no-referrer"
          onError={() => setBgError(true)}
          className="absolute inset-0 h-full w-full object-cover object-center opacity-85"
        />
      ) : (
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#1e293b] via-[#071626] to-[#040d17]"
          aria-hidden="true"
        />
      )}

      {/* Atmospheric sunset-to-petrol gradient blend matching reference */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(245,158,11,0.12) 0%, rgba(7,22,38,0.45) 45%, rgba(4,13,23,0.95) 75%, #040d17 100%)',
        }}
        aria-hidden="true"
      />

      {/* Layer 2: Subtle Parallax Distant Guardrail / Light Posts Loop */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-[26%] h-16 overflow-hidden opacity-45"
        aria-hidden="true"
      >
        <div className="anim-horizon-drift flex w-[200%] items-end">
          {[0, 1].map((loopIdx) => (
            <svg
              key={loopIdx}
              viewBox="0 0 1200 64"
              preserveAspectRatio="none"
              className="h-16 w-1/2"
            >
              {/* Distant highway guardrail */}
              <line x1="0" y1="54" x2="1200" y2="54" stroke="#64748b" strokeWidth="2.5" />
              <line x1="0" y1="58" x2="1200" y2="58" stroke="#334155" strokeWidth="1.5" />
              {/* Passing highway lamp silhouettes */}
              {[120, 360, 600, 840, 1080].map((x) => (
                <g key={x}>
                  <rect x={x} y="10" width="2.5" height="48" fill="#1e293b" />
                  <ellipse cx={x + 4} cy="11" rx="6" ry="2.2" fill="#fde047" opacity="0.55" />
                </g>
              ))}
            </svg>
          ))}
        </div>
      </div>

      {/* Layer 3: Scrolling Asphalt Road Surface & Seamless Lane Markings */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[34%] overflow-hidden"
        aria-hidden="true"
      >
        {/* Road asphalt base */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, #16202e 0%, #0d1520 42%, #070c14 100%)',
          }}
        />
        {/* Top shoulder line */}
        <div className="absolute inset-x-0 top-1 h-[2px] bg-[#f5c518]/35" />

        {/* Infinite Seamless Moving Road Dashes (Right -> Left so truck drives Left -> Right) */}
        <div className="anim-road-scroll absolute inset-x-0 top-[44%] flex w-[200%] items-center">
          {[0, 1].map((dup) => (
            <svg
              key={dup}
              viewBox="0 0 1200 28"
              preserveAspectRatio="none"
              className="h-7 w-1/2"
            >
              {[40, 160, 280, 400, 520, 640, 760, 880, 1000, 1120].map((x) => (
                <rect
                  key={x}
                  x={x}
                  y="10"
                  width="64"
                  height="5"
                  rx="2"
                  fill="#e2e8f0"
                  opacity="0.48"
                />
              ))}
              {/* Subtle asphalt aggregate streaks for motion speed feel */}
              {[10, 110, 230, 340, 460, 590, 710, 830, 950, 1070].map((x) => (
                <rect
                  key={`s-${x}`}
                  x={x}
                  y="22"
                  width="36"
                  height="1.5"
                  fill="#94a3b8"
                  opacity="0.18"
                />
              ))}
            </svg>
          ))}
        </div>
      </div>

      {/* Layer 4: Anchored Heavy-Duty Caminhão-Prancha Carrying White Truck */}
      <div className="relative z-10 flex h-full items-end justify-center px-2 pb-2 sm:px-6 sm:pb-4 md:justify-start lg:px-10">
        <svg
          viewBox="0 0 680 260"
          className="h-auto w-full max-w-[460px] drop-shadow-[0_14px_24px_rgba(0,0,0,0.75)] sm:max-w-[540px] lg:max-w-[580px]"
          role="img"
          aria-label="Ilustração animada do caminhão-prancha da Delo Diesel transportando caminhão em rodovia"
        >
          <defs>
            {/* Safety yellow metallic cab shading */}
            <linearGradient id="cabYellowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fde047" />
              <stop offset="45%" stopColor="#f5c518" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>

            {/* White cargo truck metallic shading */}
            <linearGradient id="cargoWhiteGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="60%" stopColor="#e2e8f0" />
              <stop offset="100%" stopColor="#94a3b8" />
            </linearGradient>

            {/* Steel flatbed deck */}
            <linearGradient id="bedSteelGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#475569" />
              <stop offset="50%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>

            {/* Windshield glass */}
            <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e3a5f" />
              <stop offset="50%" stopColor="#0b192c" />
              <stop offset="100%" stopColor="#040d17" />
            </linearGradient>

            {/* Volumetric headlight beam */}
            <linearGradient id="headlightCone" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#fef9c3" stopOpacity="0.82" />
              <stop offset="45%" stopColor="#fde047" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#fde047" stopOpacity="0" />
            </linearGradient>

            {/* Radial wheel rim chrome */}
            <radialGradient id="alloyRimGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f8fafc" />
              <stop offset="60%" stopColor="#94a3b8" />
              <stop offset="100%" stopColor="#334155" />
            </radialGradient>

            {/* Tire rubber */}
            <radialGradient id="tireRubberGrad" cx="50%" cy="50%" r="50%">
              <stop offset="62%" stopColor="#111827" />
              <stop offset="88%" stopColor="#1f2937" />
              <stop offset="100%" stopColor="#030712" />
            </radialGradient>
          </defs>

          {/* Ground Contact Shadow under the Prancha */}
          <ellipse cx="290" cy="233" rx="255" ry="11" fill="#020617" opacity="0.82" />

          {/* Volumetric Headlight Beam projecting onto the scrolling asphalt */}
          <g className="anim-headlight">
            <polygon
              points="526,184 678,162 678,236 522,202"
              fill="url(#headlightCone)"
            />
            <polygon
              points="528,187 665,182 665,222 524,196"
              fill="url(#headlightCone)"
              opacity="0.6"
            />
          </g>

          {/* ==============================================================
              SUSPENDED BODY GROUP (Cab + Flatbed + Secured White Cargo)
              Oscillates subtly on air-ride suspension while wheels stay grounded
              ============================================================== */}
          <g className="anim-suspension">
            {/* ---- CARGO TRUCK SECURED ON FLATBED ---- */}
            <g className="anim-engine-idle">
              {/* Cargo truck rear frame & fifth wheel */}
              <rect x="78" y="138" width="136" height="12" rx="2" fill="#1e293b" />
              <rect x="115" y="133" width="38" height="6" rx="1" fill="#334155" />
              {/* Rear mudguard */}
              <path d="M126 135h54c6 0 10 4 10 10v6h-68v-11c0-3 2-5 4-5z" fill="#0f172a" />

              {/* Cargo truck wheels (stationary / subtle micro-flex on deck) */}
              {[136, 174, 294].map((wx) => (
                <g key={wx} transform={`translate(${wx}, 151)`}>
                  <circle r="19" fill="url(#tireRubberGrad)" />
                  <circle r="10.5" fill="url(#alloyRimGrad)" />
                  <circle r="4.5" fill="#1e293b" />
                </g>
              ))}

              {/* Cargo White Cab */}
              <path
                d="M206 146 V60 c0-7 6-13 13-13 h64 c8 0 16 4 21 11 l20 28 c4 5 6 11 6 18 v42 z"
                fill="url(#cargoWhiteGrad)"
              />
              {/* Cargo Cab Roof Aerodynamic Fairing */}
              <path
                d="M208 55 c16-14 48-15 72-8 l-12 6 h-58 z"
                fill="#f8fafc"
              />
              {/* Cargo Windshield */}
              <path
                d="M276 62 h24 l17 24 v16 h-41 z"
                fill="url(#glassGrad)"
              />
              <path d="M282 65 h12 l-4 28 h-8 z" fill="#ffffff" opacity="0.12" />
              {/* Side Window */}
              <path d="M238 64 h30 v24 h-30 z" fill="url(#glassGrad)" />
              {/* Cargo Grille & Bumper */}
              <rect x="314" y="108" width="14" height="24" rx="2" fill="#334155" />
              <line x1="316" y1="114" x2="326" y2="114" stroke="#94a3b8" strokeWidth="1.5" />
              <line x1="316" y1="120" x2="326" y2="120" stroke="#94a3b8" strokeWidth="1.5" />
              <line x1="316" y1="126" x2="326" y2="126" stroke="#94a3b8" strokeWidth="1.5" />
              <rect x="206" y="134" width="126" height="12" rx="2" fill="#cbd5e1" />
              {/* Cargo Tie-Down Safety Straps */}
              <line x1="126" y1="150" x2="88" y2="173" stroke="#f59e0b" strokeWidth="3.5" />
              <line x1="294" y1="154" x2="334" y2="173" stroke="#f59e0b" strokeWidth="3.5" />
              {/* Wheel Chocks */}
              <polygon points="270,171 280,171 276,163" fill="#eab308" />
              <polygon points="310,171 320,171 316,163" fill="#eab308" />
            </g>

            {/* ---- PRANCHA STEEL FLATBED DECK ---- */}
            <rect x="52" y="170" width="328" height="14" rx="2" fill="url(#bedSteelGrad)" />
            {/* Safety yellow side trim rail on flatbed */}
            <rect x="52" y="172" width="328" height="4" fill="#f5c518" />
            {/* Hydraulic tilt cylinders & side toolboxes */}
            <rect x="228" y="184" width="68" height="22" rx="2" fill="#1e293b" stroke="#475569" strokeWidth="1" />
            <rect x="304" y="184" width="44" height="20" rx="2" fill="#334155" />
            {/* Aluminum diesel fuel tank */}
            <rect x="354" y="184" width="38" height="24" rx="6" fill="url(#alloyRimGrad)" />
            {/* Amber side marker LEDs along flatbed */}
            {[74, 142, 210, 278, 346].map((mx) => (
              <rect key={mx} x={mx} y="173" width="6" height="2.2" rx="1" fill="#fde047" />
            ))}
            {/* Rear LED tail light */}
            <rect x="52" y="174" width="5" height="9" rx="1" fill="#ef4444" />

            {/* ---- PRANCHA HEAVY-DUTY YELLOW CAB ---- */}
            {/* Cab lower chassis */}
            <rect x="380" y="170" width="144" height="36" rx="3" fill="#0f172a" />
            {/* Exhaust stack behind cab */}
            <rect x="384" y="72" width="8" height="98" rx="3" fill="#94a3b8" />
            <path d="M384 74 l-6-8 h8 l6 8 z" fill="#cbd5e1" />

            {/* Main Yellow Cab Shell */}
            <path
              d="M394 178 V84 c0-9 7-16 16-16 h66 c11 0 21 6 27 15 l20 34 c4 7 6 14 6 22 v39 z"
              fill="url(#cabYellowGrad)"
            />

            {/* Cab Sun Visor */}
            <path d="M472 72 h26 l7 9 h-33 z" fill="#1e293b" />

            {/* Amber Roof Warning Beacon + Glow */}
            <g transform="translate(435, 60)">
              <circle cx="0" cy="4" r="14" fill="#f59e0b" opacity="0.25" className="anim-beacon" />
              <rect x="-8" y="3" width="16" height="5" rx="2" fill="#f59e0b" />
              <rect x="-5" y="4" width="10" height="3" rx="1" fill="#fef08a" className="anim-beacon" />
            </g>

            {/* Front Windshield */}
            <path
              d="M472 86 h27 l17 30 v18 h-44 z"
              fill="url(#glassGrad)"
            />
            <path d="M476 89 h12 l-5 38 h-7 z" fill="#ffffff" opacity="0.16" />

            {/* Side Door Window */}
            <path d="M424 88 h38 v38 h-38 z" fill="url(#glassGrad)" />
            {/* Door seam & handle */}
            <path d="M418 86 v84 h52 v-42" fill="none" stroke="#92400e" strokeWidth="1.2" opacity="0.6" />
            <rect x="424" y="136" width="9" height="3" rx="1" fill="#1e293b" />

            {/* Side Mirror */}
            <rect x="466" y="96" width="10" height="24" rx="2" fill="#1e293b" stroke="#64748b" strokeWidth="1" />

            {/* Delo Diesel Badge on Door */}
            <rect x="430" y="146" width="32" height="10" rx="2" fill="#040d17" opacity="0.85" />
            <text
              x="446"
              y="153.5"
              textAnchor="middle"
              fill="#f5c518"
              fontSize="6.5"
              fontWeight="800"
              fontStyle="italic"
              fontFamily="Barlow Condensed, sans-serif"
            >
              DELO 24H
            </text>

            {/* Heavy Front Grille */}
            <rect x="502" y="138" width="24" height="34" rx="3" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
            {[144, 150, 156, 162, 168].map((gy) => (
              <line key={gy} x1="505" y1={gy} x2="523" y2={gy} stroke="#94a3b8" strokeWidth="1.6" />
            ))}

            {/* Chrome & Steel Front Bumper */}
            <path d="M498 176 h34 c3 0 5 2 5 5 v17 c0 3-2 5-5 5 h-34 z" fill="#1e293b" />
            <rect x="502" y="180" width="28" height="4" rx="1" fill="#cbd5e1" />

            {/* Glowing LED Headlight Assembly */}
            <rect x="518" y="183" width="12" height="11" rx="2.5" fill="#fef08a" />
            <circle cx="524" cy="188.5" r="3.5" fill="#ffffff" />

            {/* Wheel Arch Cutout Highlights */}
            <path d="M430 206 a32 32 0 0 1 64 0" fill="#020617" />
            <path d="M90 206 a30 30 0 0 1 60 0" fill="#020617" />
            <path d="M158 206 a30 30 0 0 1 60 0" fill="#020617" />
          </g>

          {/* ==============================================================
              ROTATING WHEELS (Anchored firmly on asphalt plane y=206)
              ============================================================== */}
          {[
            { cx: 120, cy: 206, r: 26 }, // Rear drive axle 1
            { cx: 188, cy: 206, r: 26 }, // Rear drive axle 2
            { cx: 462, cy: 206, r: 27 }, // Front steer axle
          ].map((wheel, idx) => (
            <g key={idx} transform={`translate(${wheel.cx}, ${wheel.cy})`}>
              {/* Rotating assembly */}
              <g className="anim-wheel-spin">
                {/* Rubber tire */}
                <circle r={wheel.r} fill="url(#tireRubberGrad)" />
                {/* Subtle tire tread notches */}
                <circle
                  r={wheel.r - 1.5}
                  fill="none"
                  stroke="#030712"
                  strokeWidth="3"
                  strokeDasharray="4 4"
                />
                {/* Sidewall highlight ring */}
                <circle
                  r={wheel.r - 5.5}
                  fill="none"
                  stroke="#374151"
                  strokeWidth="1.2"
                  opacity="0.7"
                />
                {/* Machined steel/alloy rim */}
                <circle r={wheel.r - 11} fill="url(#alloyRimGrad)" />
                {/* Ventilation holes (creates unmistakable crisp rotation perception) */}
                {[0, 60, 120, 180, 240, 300].map((deg) => (
                  <circle
                    key={deg}
                    cx={Math.cos((deg * Math.PI) / 180) * (wheel.r - 16)}
                    cy={Math.sin((deg * Math.PI) / 180) * (wheel.r - 16)}
                    r="2.4"
                    fill="#1e293b"
                  />
                ))}
                {/* Center axle hub */}
                <circle r="6" fill="#0f172a" stroke="#cbd5e1" strokeWidth="1.2" />
                <circle r="2.2" fill="#f5c518" />
              </g>
              {/* Static top fender shadow (non-rotating realism) */}
              <path
                d={`M-${wheel.r} 0 A${wheel.r} ${wheel.r} 0 0 1 ${wheel.r} 0`}
                fill="rgba(0,0,0,0.28)"
              />
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}
