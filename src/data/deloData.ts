import heroWorkshopImg from '../assets/images/hero_diesel_workshop_1794685782789.jpg';
import highwaySunsetImg from '../assets/images/banner_highway_sunset_1794685784889.jpg';
import serviceEngineImg from '../assets/images/service_diesel_engine_1794685783061.jpg';
import serviceInjectorImg from '../assets/images/service_electronic_injector_1794685784116.jpg';
import serviceFlatbedImg from '../assets/images/service_flatbed_truck_1794685784116.jpg';
import serviceExcavatorImg from '../assets/images/service_heavy_equipment_1794685784514.jpg';
import serviceEmergencyImg from '../assets/images/service_emergency_24h_1794685785803.jpg';

export type ServiceId =
  | 'mecanica-diesel'
  | 'injecao-eletronica'
  | 'caminhao-prancha'
  | 'equipamentos-pesados'
  | 'socorro-24h';

export interface ServiceItem {
  id: ServiceId;
  title: string;
  shortDesc: string;
  image: string;
  imageAlt: string;
  category: 'oficina' | 'resgate';
  highlights: string[];
  ctaLabel: string;
}

/**
 * Dados comerciais oficiais da Delo Diesel.
 * ATENÇÃO: Telefone/WhatsApp e link do Perfil da Empresa no Google usam valores provisórios
 * baseados no layout aprovado até confirmação oficial do número e endereço completo.
 */
export const BUSINESS_INFO = {
  name: 'Delo Diesel',
  tagline: 'Oficina Mecânica Especializada',
  foundedYear: 1999,
  googleRating: '4,6',
  googleReviewsCount: 83,
  // Valor provisório idêntico ao layout aprovado — substituir pelo telefone oficial do Perfil Google
  phoneDisplay: '(31) 9 9999-9999',
  phoneHref: 'tel:+5531999999999',
  whatsappNumber: '5531999999999',
  isProvisionalContact: true,
  googleProfileNote:
    'Consulte o endereço atualizado e rotas diretamente no Perfil da Empresa no Google.',
  officialLogoPath: '/assets/aistudio/Screenshot_20261104_133623_Google_1a0e27ff.jpg',
};

export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encoded}`;
}

export const HERO_IMAGES = {
  workshop: heroWorkshopImg,
  highwaySunset: highwaySunsetImg,
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'mecanica-diesel',
    title: 'Mecânica Diesel Especializada',
    shortDesc: 'Soluções completas para seu veículo.',
    image: serviceEngineImg,
    imageAlt: 'Motor diesel pesado em manutenção especializada na oficina Delo Diesel',
    category: 'oficina',
    highlights: [
      'Manutenção preventiva e corretiva para veículos diesel',
      'Serviços mecânicos especializados para caminhões e utilitários',
      'Reparos mecânicos gerais com foco em durabilidade e segurança',
      'Atendimento técnico experiente desde 1999',
    ],
    ctaLabel: 'Solicitar orçamento mecânico',
  },
  {
    id: 'injecao-eletronica',
    title: 'Injeção Eletrônica',
    shortDesc: 'Diagnóstico e reparo de alta precisão.',
    image: serviceInjectorImg,
    imageAlt: 'Bico injetor eletrônico diesel de alta precisão em bancada técnica',
    category: 'oficina',
    highlights: [
      'Diagnóstico eletrônico avançado para sistemas diesel',
      'Avaliação precisa de falhas de alimentação e desempenho',
      'Manutenção e reparação focada em eficiência de consumo',
      'Suporte técnico para caminhões, carros e frotas',
    ],
    ctaLabel: 'Agendar diagnóstico eletrônico',
  },
  {
    id: 'caminhao-prancha',
    title: 'Caminhão Prancha',
    shortDesc: 'Transporte seguro para seu veículo.',
    image: serviceFlatbedImg,
    imageAlt: 'Caminhão-prancha Delo Diesel realizando transporte pesado em rodovia',
    category: 'resgate',
    highlights: [
      'Caminhão-prancha preparado para transporte e resgate',
      'Remoção segura para caminhões, carros e máquinas pesadas',
      'Fixação reforçada e operação conduzida por equipe experiente',
      'Integração direta com o atendimento na oficina mecânica',
    ],
    ctaLabel: 'Solicitar caminhão-prancha',
  },
  {
    id: 'equipamentos-pesados',
    title: 'Equipamentos Pesados',
    shortDesc: 'Manutenção para máquinas industriais.',
    image: serviceExcavatorImg,
    imageAlt: 'Escavadeira hidráulica e equipamento pesado atendido pela Delo Diesel',
    category: 'oficina',
    highlights: [
      'Atendimento especializado para máquinas e equipamentos pesados',
      'Manutenção mecânica diesel para frotas de obra e construção',
      'Transporte e resgate com caminhão-prancha quando necessário',
      'Suporte focado em reduzir o tempo de máquina parada',
    ],
    ctaLabel: 'Atendimento para máquinas',
  },
  {
    id: 'socorro-24h',
    title: 'Socorro 24 Horas',
    shortDesc: 'Onde você estiver, a qualquer hora!',
    image: serviceEmergencyImg,
    imageAlt: 'Sinalização rodoviária noturna representando o socorro 24 horas Delo Diesel',
    category: 'resgate',
    highlights: [
      'Plantão 24 horas para emergências mecânicas e resgate',
      'Atendimento para carros, caminhões e equipamentos pesados',
      'Acionamento rápido via WhatsApp ou telefone direto',
      'Suporte completo com caminhão-prancha e equipe técnica',
    ],
    ctaLabel: 'Acionar socorro 24h agora',
  },
];

export const CREDIBILITY_ITEMS = [
  {
    id: 'rapido',
    title: 'Atendimento Rápido e Eficiente',
    description: 'Triagem ágil para oficina ou resgate emergencial.',
    icon: 'shield',
  },
  {
    id: 'equipe',
    title: 'Equipe Especializada',
    description: 'Experiência prática em linha pesada e diesel desde 1999.',
    icon: 'users',
  },
  {
    id: 'tecnologia',
    title: 'Tecnologia de Ponta',
    description: 'Diagnóstico eletrônico e precisão nos reparos.',
    icon: 'gear',
  },
  {
    id: 'qualidade',
    title: 'Qualidade Garantida',
    description: 'Nota 4,6 estrelas com 83 avaliações reais no Google.',
    icon: 'award',
  },
] as const;

export const FAQS = [
  {
    question: 'Quais tipos de veículos e máquinas a Delo Diesel atende?',
    answer:
      'Atendemos veículos a diesel em geral, caminhões, carros e equipamentos pesados, oferecendo manutenção preventiva, corretiva, diagnóstico eletrônico, injeção diesel e reparos gerais.',
  },
  {
    question: 'Como funciona o Caminhão-Prancha e o Socorro 24 Horas?',
    answer:
      'Nosso atendimento de Socorro 24 Horas funciona a qualquer hora para carros, caminhões e equipamentos pesados. Quando necessário, deslocamos o caminhão-prancha para resgate e transporte seguro até a oficina ou destino combinado.',
  },
  {
    question: 'Qual a diferença entre agendar manutenção na oficina e pedir socorro?',
    answer:
      'Para revisões, diagnóstico eletrônico e reparos programados, você solicita um orçamento na oficina. Em caso de pane na via, obra ou parada inesperada, utilize o canal de Socorro 24 Horas para acionamento imediato.',
  },
  {
    question: 'Onde encontro o endereço oficial e horários da Delo Diesel?',
    answer:
      'As informações oficiais de localização, rotas e avaliações verificadas (4,6 estrelas em 83 avaliações) estão disponíveis no Perfil da Empresa no Google.',
  },
];
