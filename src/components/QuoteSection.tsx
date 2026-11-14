import { FormEvent, useEffect, useState } from 'react';
import { CheckCircle2, MessageCircle, PhoneCall, ShieldAlert, Wrench } from 'lucide-react';
import { BUSINESS_INFO, SERVICES, ServiceId, buildWhatsAppUrl } from '../data/deloData';

export type RequestMode = 'oficina' | 'socorro';

interface QuoteSectionProps {
  mode: RequestMode;
  onModeChange: (mode: RequestMode) => void;
  selectedServiceId: ServiceId;
  onServiceChange: (id: ServiceId) => void;
}

const VEHICLE_TYPES = [
  'Caminhão / Frota Diesel',
  'Carro / Utilitário',
  'Equipamento Pesado / Máquina',
] as const;

export function QuoteSection({
  mode,
  onModeChange,
  selectedServiceId,
  onServiceChange,
}: QuoteSectionProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [vehicleType, setVehicleType] = useState<string>(VEHICLE_TYPES[0]);
  const [details, setDetails] = useState('');
  const [error, setError] = useState('');
  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);

  useEffect(() => {
    setSubmittedUrl(null);
    setError('');
  }, [mode, selectedServiceId]);

  const selectedService =
    SERVICES.find((s) => s.id === selectedServiceId) ?? SERVICES[0];

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const cleanedPhone = phone.replace(/\D/g, '');
    if (!name.trim()) {
      setError('Informe seu nome ou empresa para continuarmos o atendimento.');
      return;
    }
    if (cleanedPhone.length < 10) {
      setError('Informe um telefone/WhatsApp válido com DDD (ex.: 31 99999-9999).');
      return;
    }

    setError('');
    const intentLabel =
      mode === 'socorro' ? 'CHAMADO SOCORRO 24 HORAS / PRANCHA' : 'ORÇAMENTO NA OFICINA';

    const message = [
      `Olá, Delo Diesel! Solicito atendimento via site:`,
      `• Tipo: ${intentLabel}`,
      `• Serviço: ${selectedService.title}`,
      `• Veículo/Equipamento: ${vehicleType}`,
      `• Nome/Empresa: ${name.trim()}`,
      `• Telefone de retorno: ${phone.trim()}`,
      details.trim() ? `• Detalhes/Local: ${details.trim()}` : null,
    ]
      .filter(Boolean)
      .join('\n');

    const waUrl = buildWhatsAppUrl(message);
    setSubmittedUrl(waUrl);
  }

  return (
    <section
      id="orcamento"
      className="border-t border-white/10 bg-gradient-to-b from-[#071626] to-[#040d17] py-10 sm:py-14 lg:py-16"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-white/15 bg-[#05101d] shadow-2xl">
          {/* Header Bar */}
          <div className="border-b border-white/10 bg-[#071626] px-4 py-5 sm:px-8 sm:py-6">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <div>
                <h2 className="font-display text-3xl font-extrabold italic tracking-tight text-white sm:text-4xl">
                  Atendimento <span className="text-[#f5c518]">Imediato</span>
                </h2>
                <p className="mt-1 text-sm text-slate-300">
                  Escolha entre orçamento programado na oficina ou acionamento de socorro 24 horas.
                </p>
              </div>

              {/* Interactive Mode Switch (Oficina vs Socorro 24h) */}
              <div className="grid w-full grid-cols-2 rounded-lg border border-white/15 bg-[#040d17] p-1 md:inline-flex md:w-auto">
                <button
                  type="button"
                  onClick={() => onModeChange('oficina')}
                  className={`inline-flex min-h-[42px] items-center justify-center gap-1.5 rounded-md px-2.5 py-2 text-xs font-bold whitespace-nowrap transition-colors sm:gap-2 sm:px-3.5 sm:text-sm ${
                    mode === 'oficina'
                      ? 'bg-[#f5c518] text-[#040d17]'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <Wrench className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Orçamento Oficina</span>
                </button>
                <button
                  type="button"
                  onClick={() => onModeChange('socorro')}
                  className={`inline-flex min-h-[42px] items-center justify-center gap-1.5 rounded-md px-2.5 py-2 text-xs font-bold whitespace-nowrap transition-colors sm:gap-2 sm:px-3.5 sm:text-sm ${
                    mode === 'socorro'
                      ? 'bg-[#f5c518] text-[#040d17]'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <ShieldAlert className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Socorro 24h / Prancha</span>
                </button>
              </div>
            </div>
          </div>

          {/* Form Body */}
          <form onSubmit={handleSubmit} className="p-4 sm:p-8" noValidate>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
              <div>
                <label htmlFor="delo-name" className="block text-xs font-semibold text-slate-200 uppercase tracking-wide">
                  Seu nome ou empresa *
                </label>
                <input
                  id="delo-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex.: Carlos Silva / Transportadora"
                  className="mt-1.5 min-h-[44px] w-full rounded-lg border border-white/15 bg-[#071626] px-4 py-2.5 text-sm text-white placeholder-slate-400 focus:border-[#f5c518] focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="delo-phone" className="block text-xs font-semibold text-slate-200 uppercase tracking-wide">
                  Telefone / WhatsApp com DDD *
                </label>
                <input
                  id="delo-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(31) 9 9999-9999"
                  className="mt-1.5 min-h-[44px] w-full rounded-lg border border-white/15 bg-[#071626] px-4 py-2.5 text-sm text-white placeholder-slate-400 tabular-nums focus:border-[#f5c518] focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="delo-vehicle" className="block text-xs font-semibold text-slate-200 uppercase tracking-wide">
                  Tipo de veículo / equipamento
                </label>
                <select
                  id="delo-vehicle"
                  value={vehicleType}
                  onChange={(e) => setVehicleType(e.target.value)}
                  className="mt-1.5 min-h-[44px] w-full rounded-lg border border-white/15 bg-[#071626] px-4 py-2.5 text-sm text-white focus:border-[#f5c518] focus:outline-none"
                >
                  {VEHICLE_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="delo-service" className="block text-xs font-semibold text-slate-200 uppercase tracking-wide">
                  Serviço desejado
                </label>
                <select
                  id="delo-service"
                  value={selectedServiceId}
                  onChange={(e) => onServiceChange(e.target.value as ServiceId)}
                  className="mt-1.5 min-h-[44px] w-full rounded-lg border border-white/15 bg-[#071626] px-4 py-2.5 text-sm text-white focus:border-[#f5c518] focus:outline-none"
                >
                  {SERVICES.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="delo-details" className="block text-xs font-semibold text-slate-200 uppercase tracking-wide">
                  {mode === 'socorro'
                    ? 'Localização aproximada e situação da emergência'
                    : 'Descreva o serviço ou sintoma do veículo'}
                </label>
                <textarea
                  id="delo-details"
                  rows={3}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder={
                    mode === 'socorro'
                      ? 'Ex.: Rodovia / km, cidade, modelo do caminhão ou máquina e necessidade de prancha...'
                      : 'Ex.: Revisão preventiva, falha de injeção eletrônica, reparo mecânico...'
                  }
                  className="mt-1.5 w-full rounded-lg border border-white/15 bg-[#071626] px-4 py-2.5 text-sm text-white placeholder-slate-400 focus:border-[#f5c518] focus:outline-none"
                />
              </div>
            </div>

            {error && (
              <p role="alert" className="mt-4 rounded-lg border border-red-500/40 bg-red-950/50 px-4 py-2.5 text-sm text-red-200">
                {error}
              </p>
            )}

            {submittedUrl && (
              <div className="mt-5 flex flex-col justify-between gap-4 rounded-xl border border-emerald-500/40 bg-emerald-950/40 p-4 sm:flex-row sm:items-center">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-bold text-white">
                      Solicitação preparada com sucesso!
                    </p>
                    <p className="text-xs text-emerald-200">
                      Clique ao lado para enviar seus dados diretamente para o WhatsApp da equipe Delo Diesel.
                    </p>
                  </div>
                </div>
                <a
                  href={submittedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] shrink-0 items-center justify-center gap-2 rounded-lg bg-[#16a34a] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#15803d]"
                >
                  <MessageCircle className="h-4 w-4 fill-current" aria-hidden="true" />
                  <span>Enviar no WhatsApp</span>
                </a>
              </div>
            )}

            <div className="mt-6 flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <button
                  type="submit"
                  className="inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-lg bg-[#f5c518] px-6 py-3 text-sm font-extrabold text-[#040d17] shadow-lg shadow-amber-500/15 transition-all hover:bg-[#fde047] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  <span>
                    {mode === 'socorro'
                      ? 'Preparar Chamado Socorro 24h'
                      : 'Solicitar Orçamento via WhatsApp'}
                  </span>
                </button>

                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-[#f5c518] hover:text-[#f5c518] sm:w-auto"
                >
                  <PhoneCall className="h-4 w-4 text-[#f5c518]" aria-hidden="true" />
                  <span className="tabular-nums">Ligar: {BUSINESS_INFO.phoneDisplay}</span>
                </a>
              </div>

              {BUSINESS_INFO.isProvisionalContact && (
                <p className="text-[11px] text-slate-400">
                  Canal provisório: confirmar número oficial no Perfil da Empresa no Google.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
