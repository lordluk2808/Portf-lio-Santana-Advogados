import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { PRACTICE_AREAS } from '../data/firmData';
import { FadeInOnScroll } from './FadeInOnScroll';
import { buildWhatsAppUrl } from './WhatsAppIcon';

export function PracticeAreas() {
  const [selectedTopics, setSelectedTopics] = useState<Record<string, number | null>>({});

  const toggleTopic = (areaId: string, topicIndex: number) => {
    setSelectedTopics((prev) => ({
      ...prev,
      [areaId]: prev[areaId] === topicIndex ? null : topicIndex,
    }));
  };

  return (
    <section id="areas-de-atuacao" className="bg-[#F8F9FA] py-12 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeInOnScroll>
          <div className="max-w-2xl mb-8 sm:mb-12">
            <p className="text-sm font-semibold tracking-wide text-[#C5A059] mb-2">
              Áreas de Atuação
            </p>
            <h2
              className="font-serif text-[26px] sm:text-4xl font-semibold text-[#0F1E36] leading-[1.2] tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              Como podemos defender você hoje?
            </h2>
            <p className="text-[15px] sm:text-base text-[#2B303A]/85 leading-relaxed mt-2.5 sm:mt-3">
              Conheça nossas frentes de atuação e entenda como atuamos para garantir seus direitos.
            </p>
          </div>
        </FadeInOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {PRACTICE_AREAS.map((area, areaIdx) => {
            const activeTopicIdx = selectedTopics[area.id] ?? null;
            const activeMessage =
              activeTopicIdx !== null
                ? area.topics[activeTopicIdx].message
                : area.defaultMessage;
            const ctaHref = buildWhatsAppUrl(activeMessage);
            const staggerDelay = (areaIdx * 100) as 0 | 100 | 200;

            return (
              <FadeInOnScroll key={area.id} delay={staggerDelay} className="flex">
                <article
                  className="group relative w-full bg-white border border-slate-200/90 rounded-lg p-5 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-slate-300 overflow-hidden"
                >
                {/* Gold Top Border Highlight on Hover */}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-[3px] bg-transparent group-hover:bg-[#C5A059] transition-colors duration-200"
                />

                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className="text-xs font-semibold tracking-wider text-[#C5A059] tabular-nums">
                      {area.index}
                    </span>
                  </div>

                  <h3 className="font-serif text-[22px] sm:text-2xl font-semibold text-[#0F1E36] tracking-tight mb-2.5 sm:mb-3">
                    {area.title}
                  </h3>

                  <p className="text-[15px] text-[#2B303A] leading-[1.6] mb-5 sm:mb-6">
                    {area.description}
                  </p>

                  {/* Interactive topic selector to pre-fill the WhatsApp message */}
                  <div className="border-t border-slate-100 pt-4 mb-5 sm:mb-6">
                    <p className="text-[13px] font-medium text-slate-500 mb-2.5">
                      Selecione um assunto para agilizar o atendimento:
                    </p>
                    <ul className="space-y-1.5">
                      {area.topics.map((topic, idx) => {
                        const isSelected = activeTopicIdx === idx;
                        return (
                          <li key={topic.label}>
                            <button
                              type="button"
                              onClick={() => toggleTopic(area.id, idx)}
                              aria-pressed={isSelected}
                              className={`w-full text-left text-[13.5px] sm:text-sm py-2.5 px-3 min-h-[44px] rounded-md flex items-center gap-2.5 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] ${
                                isSelected
                                  ? 'bg-[#0F1E36]/5 text-[#0F1E36] font-medium'
                                  : 'text-[#2B303A]/85 hover:bg-slate-50 hover:text-[#0F1E36]'
                              }`}
                            >
                              <span
                                className={`w-4 h-4 rounded-sm border flex items-center justify-center shrink-0 transition-colors ${
                                  isSelected
                                    ? 'bg-[#C5A059] border-[#C5A059] text-white'
                                    : 'border-slate-300 bg-white'
                                }`}
                              >
                                {isSelected && <Check className="w-3 h-3" strokeWidth={2.5} />}
                              </span>
                              <span className="leading-snug">{topic.label}</span>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>

                <div className="pt-3 sm:pt-4 border-t border-slate-100">
                  <a
                    href={ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 min-h-[44px] text-[15px] font-semibold text-[#1E8E5A] hover:text-[#156942] transition-colors py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E8E5A] rounded-sm"
                  >
                    <span>{area.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1" />
                  </a>
                </div>
                </article>
              </FadeInOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
