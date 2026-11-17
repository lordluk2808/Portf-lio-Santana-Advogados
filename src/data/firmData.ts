export interface PracticeArea {
  id: string;
  index: string;
  title: string;
  description: string;
  ctaLabel: string;
  defaultMessage: string;
  topics: {
    label: string;
    message: string;
  }[];
}

export interface AuthorityMetric {
  value: string;
  description: string;
}

export interface MethodologyPillar {
  id: string;
  title: string;
  description: string;
  icon: 'eye' | 'compass' | 'message' | 'shield';
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  oab: string;
  specialty: string;
  bio: string;
  image: string;
  imageAlt: string;
  isFounder?: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const WHATSAPP_PHONE = '5511994823100';

export const FIRM_INFO = {
  name: 'Fernando Santana Advogados',
  oabSociety: 'Sociedade de Advogados inscrita na OAB/SP sob o nº 24.810',
  phoneDisplay: '(11) 99482-3100',
  email: 'contato@fernandosantana.adv.br',
  address: 'Av. Paulista, 1.374 — Conj. 1102, Bela Vista, São Paulo/SP · CEP 01310-100',
  hours: 'Segunda a Sexta, das 09h às 18h',
  defaultWhatsappMessage:
    'Olá! Gostaria de agendar uma consulta inicial com a equipe do Fernando Santana Advogados.',
};

export const AUTHORITY_METRICS: AuthorityMetric[] = [
  {
    value: '+20 Anos',
    description: 'de atuação ininterrupta e sólida experiência nos tribunais.',
  },
  {
    value: 'Atendimento Ágil',
    description: 'com análise individualizada de cada caso.',
  },
  {
    value: 'Atuação Multidisciplinar',
    description: 'com foco exclusivo em Trabalho, Família e Consumidor.',
  },
];

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'trabalho',
    index: '01',
    title: 'Direito do Trabalho',
    description:
      'Defesa técnica para trabalhadores e empresas. Atuamos em rescisões indiretas, cálculo de verbas rescisórias, horas extras, reconhecimento de vínculo, assédio moral e acidentes de trabalho.',
    ctaLabel: 'Tirar dúvida trabalhista',
    defaultMessage:
      'Olá! Gostaria de tirar uma dúvida sobre Direito do Trabalho com a equipe do Fernando Santana Advogados.',
    topics: [
      {
        label: 'Rescisão indireta e cálculo de verbas rescisórias',
        message:
          'Olá! Gostaria de analisar um caso de rescisão indireta / cálculo de verbas rescisórias.',
      },
      {
        label: 'Horas extras, acúmulo de função e vínculo empregatício',
        message:
          'Olá! Preciso de orientação sobre horas extras ou reconhecimento de vínculo empregatício.',
      },
      {
        label: 'Assédio moral, estabilidade e acidentes de trabalho',
        message:
          'Olá! Gostaria de conversar sobre um caso envolvendo assédio moral ou acidente de trabalho.',
      },
    ],
  },
  {
    id: 'familia',
    index: '02',
    title: 'Direito de Família',
    description:
      'Condução discreta, empática e firme em momentos delicados. Especialistas em divórcio consensual ou litigioso, guarda de filhos, pensão alimentícia, partilha de bens e inventários.',
    ctaLabel: 'Falar sobre Direito de Família',
    defaultMessage:
      'Olá! Gostaria de falar sobre um assunto de Direito de Família com total sigilo.',
    topics: [
      {
        label: 'Divórcio consensual ou litigioso e partilha de bens',
        message:
          'Olá! Gostaria de orientação jurídica sobre divórcio e partilha de bens.',
      },
      {
        label: 'Guarda de filhos, convivência e pensão alimentícia',
        message:
          'Olá! Preciso de atendimento sobre guarda de filhos ou pensão alimentícia.',
      },
      {
        label: 'Inventários, testamentos e planejamento sucessório',
        message:
          'Olá! Gostaria de tirar dúvidas sobre inventário e partilha sucessória.',
      },
    ],
  },
  {
    id: 'consumidor',
    index: '03',
    title: 'Direito do Consumidor',
    description:
      'Proteção contra práticas abusivas de bancos, planos de saúde, companhias aéreas e empresas de serviços. Atuação em negativação indevida, falhas na prestação de serviços e revisões contratuais.',
    ctaLabel: 'Analisar meu caso de consumo',
    defaultMessage:
      'Olá! Gostaria que a equipe analisasse um caso de Direito do Consumidor.',
    topics: [
      {
        label: 'Negativação indevida e fraudes ou abusos bancários',
        message:
          'Olá! Sofri uma negativação indevida ou cobrança abusiva bancária e preciso de análise.',
      },
      {
        label: 'Negativa de cobertura por planos de saúde',
        message:
          'Olá! Preciso de auxílio urgente referente a negativa de plano de saúde.',
      },
      {
        label: 'Atraso ou cancelamento de voos e revisão contratual',
        message:
          'Olá! Gostaria de avaliar meus direitos por falha na prestação de serviços ou revisão contratual.',
      },
    ],
  },
];

export const METHODOLOGY_PILLARS: MethodologyPillar[] = [
  {
    id: 'transparencia',
    title: 'Transparência Total',
    description:
      'Você acompanha cada movimentação do seu processo com explicações claras, sem termos técnicos inacessíveis.',
    icon: 'eye',
  },
  {
    id: 'estrategia',
    title: 'Estratégia Personalizada',
    description:
      'Não usamos modelos prontos. Cada caso é estudado em detalhes para construir a tese jurídica mais sólida.',
    icon: 'compass',
  },
  {
    id: 'agilidade',
    title: 'Agilidade Digital',
    description:
      'Atendimento rápido via WhatsApp e reuniões online, permitindo resolver suas questões sem burocracia desnecessária.',
    icon: 'message',
  },
  {
    id: 'sigilo',
    title: 'Ética e Sigilo Absoluto',
    description:
      'Rigoroso compromisso com a confidencialidade das suas informações pessoais, familiares e patrimoniais.',
    icon: 'shield',
  },
];

export const FOUNDER: TeamMember = {
  id: 'fernando-santana',
  name: 'Dr. Fernando Santana',
  role: 'Sócio-Fundador',
  oab: 'OAB/SP nº 184.920',
  specialty: 'Direito do Trabalho e Processo Civil',
  bio: 'Advogado inscrito na OAB/SP sob o nº 184.920. Há mais de 20 anos atua na defesa intransigente dos direitos dos trabalhadores, famílias e consumidores. Especialista em Direito do Trabalho e Processo Civil, pauta sua carreira pela ética, combatividade técnica e atendimento próximo ao cliente.',
  image: '/src/assets/images/hero_fernando_santana_1794935943034.jpg',
  imageAlt:
    'Retrato institucional do Dr. Fernando Santana, sócio-fundador do escritório, em sala corporativa com iluminação natural.',
  isFounder: true,
};

export const ASSOCIATES: TeamMember[] = [
  {
    id: 'camila-ribeiro',
    name: 'Dra. Camila Ribeiro',
    role: 'Advogada Associada',
    oab: 'OAB/SP 312.408',
    specialty: 'Especialista em Direito de Família',
    bio: 'Pós-graduada em Direito Civil e das Famílias, com atuação dedicada à condução discreta de divórcios, guarda e planejamento sucessório.',
    image: '/src/assets/images/associate_camila_ribeiro_1794935944242.jpg',
    imageAlt:
      'Retrato profissional da Dra. Camila Ribeiro, especialista em Direito de Família.',
  },
  {
    id: 'rafael-mendes',
    name: 'Dr. Rafael Mendes',
    role: 'Advogado Associado',
    oab: 'OAB/SP 348.715',
    specialty: 'Especialista em Direito do Consumidor',
    bio: 'Mestre em Relações de Consumo, focado na defesa contra abusos bancários, negativas de planos de saúde e responsabilidade civil.',
    image: '/src/assets/images/associate_rafael_mendes_1794935944159.jpg',
    imageAlt:
      'Retrato profissional do Dr. Rafael Mendes, especialista em Direito do Consumidor.',
  },
  {
    id: 'beatriz-vasconcelos',
    name: 'Dra. Beatriz Vasconcelos',
    role: 'Advogada Associada',
    oab: 'OAB/SP 379.104',
    specialty: 'Especialista em Direito do Trabalho',
    bio: 'Especializada em contencioso trabalhista estratégico, revisão técnica de verbas rescisórias e negociações individuais ou sindicais.',
    image: '/src/assets/images/associate_beatriz_vasconcelos_1794935944543.jpg',
    imageAlt:
      'Retrato profissional da Dra. Beatriz Vasconcelos, especialista em Direito do Trabalho.',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'primeiro-atendimento',
    question: 'Como funciona o primeiro atendimento pelo WhatsApp?',
    answer:
      'Ao clicar nos botões desta página, você será direcionado para nossa triagem inicial. Nossa equipe ouvirá um breve resumo do seu caso para identificar a área jurídica e agendar uma consulta com o advogado especialista responsável.',
  },
  {
    id: 'presencial-ou-online',
    question: 'Preciso ir até o escritório presencialmente?',
    answer:
      'Não necessariamente. Realizamos atendimentos completos por videoconferência e assinatura digital de documentos, atendendo clientes com total segurança e comodidade, além do atendimento presencial em nosso escritório.',
  },
  {
    id: 'documentos',
    question: 'Quais documentos preciso separar para analisar meu caso?',
    answer:
      'Para a primeira conversa, basta relatar o ocorrido. Caso já possua contratos, prints de conversas, comprovantes de pagamento, carteira de trabalho ou notificações, nossa equipe indicará exatamente o que enviar.',
  },
  {
    id: 'acompanhamento',
    question: 'Como acompanhar o andamento do meu processo?',
    answer:
      'Mantemos um canal direto de comunicação com nossos clientes, enviando atualizações claras sempre que houver novidades relevantes no tribunal.',
  },
];
