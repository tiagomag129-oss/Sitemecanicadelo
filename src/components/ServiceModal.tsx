import { useEffect } from 'react';
import { Check, MessageCircle, X } from 'lucide-react';
import { ServiceItem, buildWhatsAppUrl } from '../data/deloData';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onStartRequest: (service: ServiceItem) => void;
}

export function ServiceModal({ service, onClose, onStartRequest }: ServiceModalProps) {
  useEffect(() => {
    if (!service) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [service, onClose]);

  if (!service) return null;

  const quickWaUrl = buildWhatsAppUrl(
    `Olá, Delo Diesel! Gostaria de atendimento para: ${service.title}.`
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-3 backdrop-blur-sm sm:p-4"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl border border-white/15 bg-[#071626] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-40 w-full overflow-hidden bg-[#040d17] sm:h-48">
          <img
            src={service.image}
            alt={service.imageAlt}
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#071626] via-[#071626]/45 to-transparent"
            aria-hidden="true"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar detalhes do serviço"
            className="absolute top-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#040d17]/80 text-white ring-1 ring-white/20 transition-colors hover:bg-[#f5c518] hover:text-[#040d17]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="px-4 pb-5 pt-2 sm:px-6 sm:pb-6">
          <p className="text-xs font-semibold tracking-wider text-[#f5c518] uppercase">
            {service.category === 'resgate' ? 'Atendimento Emergencial & Transporte' : 'Oficina Especializada'}
          </p>
          <h3
            id="service-modal-title"
            className="mt-1 font-display text-2xl font-extrabold italic text-white sm:text-3xl"
          >
            {service.title}
          </h3>
          <p className="mt-1 text-sm text-slate-300">{service.shortDesc}</p>

          <ul className="mt-4 space-y-2.5">
            {service.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-slate-200">
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#f5c518] text-[#040d17]">
                  <Check className="h-3 w-3 stroke-[3]" aria-hidden="true" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <button
              type="button"
              onClick={() => onStartRequest(service)}
              className="inline-flex min-h-[44px] w-full flex-1 items-center justify-center gap-2 rounded-lg bg-[#f5c518] px-5 py-2.5 text-sm font-extrabold text-[#040d17] transition-colors hover:bg-[#fde047] sm:w-auto"
            >
              <span>{service.ctaLabel}</span>
            </button>

            <a
              href={quickWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-[#16a34a] px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#15803d] sm:w-auto"
            >
              <MessageCircle className="h-4 w-4 fill-current" aria-hidden="true" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
