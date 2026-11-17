import { Compass, Eye, MessageSquare, ShieldCheck } from 'lucide-react';
import { METHODOLOGY_PILLARS, MethodologyPillar } from '../data/firmData';
import { FadeInOnScroll } from './FadeInOnScroll';
import { ResilientImage } from './WhatsAppIcon';

function PillarIcon({ icon }: { icon: MethodologyPillar['icon'] }) {
  const iconClass = 'w-5 h-5 text-[#C5A059] shrink-0';
  switch (icon) {
    case 'eye':
      return <Eye className={iconClass} strokeWidth={1.75} />;
    case 'compass':
      return <Compass className={iconClass} strokeWidth={1.75} />;
    case 'message':
      return <MessageSquare className={iconClass} strokeWidth={1.75} />;
    case 'shield':
      return <ShieldCheck className={iconClass} strokeWidth={1.75} />;
  }
}

export function Methodology() {
  return (
    <section
      id="o-escritorio"
      className="bg-white border-y border-slate-200/80 py-12 sm:py-20 lg:py-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Institutional Column + Office Photo */}
          <FadeInOnScroll className="lg:col-span-5">
            <p className="text-sm font-semibold tracking-wide text-[#C5A059] mb-2">
              Diferenciais e Metodologia
            </p>
            <h2
              className="font-serif text-[26px] sm:text-[34px] font-semibold text-[#0F1E36] leading-[1.2] tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              Mais de 20 anos de experiência aliados a uma advocacia moderna e acessível.
            </h2>
            <p className="text-[15px] sm:text-base text-[#2B303A]/85 leading-[1.6] sm:leading-relaxed mt-3 sm:mt-4 mb-6 sm:mb-7">
              Sabemos que buscar um advogado geralmente ocorre em momentos de tensão. Por isso, eliminamos o &ldquo;juridiquês&rdquo; e priorizamos a transparência em cada etapa do seu processo.
            </p>

            <figure className="rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
              <div className="aspect-[16/10] sm:aspect-video w-full overflow-hidden">
                <ResilientImage
                  src="/src/assets/images/office_meeting_room_1794935942770.jpg"
                  alt="Sala de reuniões do escritório Fernando Santana Advogados com divisórias de vidro, mesa de madeira e iluminação natural."
                  fallbackTitle="Fernando Santana Advogados — Sala de Reuniões"
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="px-4 py-3 text-[13px] sm:text-xs text-slate-600 leading-snug bg-[#F8F9FA] border-t border-slate-200">
                Estrutura preparada para atendimento presencial na Av. Paulista e reuniões por videoconferência.
              </figcaption>
            </figure>
          </FadeInOnScroll>

          {/* Right 4 Pillars Column */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {METHODOLOGY_PILLARS.map((pillar, index) => {
              const staggerDelay = ((index % 4) * 100) as 0 | 100 | 200 | 300;
              return (
                <FadeInOnScroll key={pillar.id} delay={staggerDelay} className="flex">
                  <div className="w-full bg-[#F8F9FA] border border-slate-200/90 rounded-lg p-5 sm:p-6 flex flex-col justify-between transition-colors duration-150 hover:border-[#C5A059]/60">
                    <div>
                      <div className="flex items-center justify-between mb-4 sm:mb-5">
                        <div className="w-10 h-10 rounded-md bg-[#0F1E36] flex items-center justify-center">
                          <PillarIcon icon={pillar.icon} />
                        </div>
                        <span className="text-xs font-medium text-slate-400 tabular-nums">
                          0{index + 1}
                        </span>
                      </div>
                      <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#0F1E36] mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-[15px] text-[#2B303A]/90 leading-[1.6]">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </FadeInOnScroll>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
