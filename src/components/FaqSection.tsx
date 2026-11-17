import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data/firmData';

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="duvidas"
      className="bg-white border-t border-slate-200/80 py-12 sm:py-20 lg:py-24"
    >
      <div className="max-w-[800px] mx-auto px-4 sm:px-6">
        <div className="text-left sm:text-center mb-8 sm:mb-12">
          <p className="text-sm font-semibold tracking-wide text-[#C5A059] mb-2">
            Esclarecimentos
          </p>
          <h2
            className="font-serif text-[26px] sm:text-4xl font-semibold text-[#0F1E36] leading-[1.2] tracking-tight"
            style={{ textWrap: 'balance' }}
          >
            Dúvidas Frequentes
          </h2>
          <p className="text-[15px] sm:text-base text-[#2B303A]/85 leading-relaxed mt-2.5 sm:mt-3">
            Informações práticas sobre como funciona nosso primeiro contato e o acompanhamento do seu processo.
          </p>
        </div>

        <div className="space-y-3 sm:space-y-3.5">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            const panelId = `faq-panel-${item.id}`;
            const buttonId = `faq-button-${item.id}`;

            return (
              <div
                key={item.id}
                className={`border rounded-lg bg-white transition-colors duration-150 ${
                  isOpen ? 'border-[#C5A059]/70 shadow-xs' : 'border-slate-200'
                }`}
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => handleToggle(item.id)}
                    className="w-full px-4 sm:px-6 py-4 sm:py-5 min-h-[56px] text-left flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] rounded-lg"
                  >
                    <span className="font-serif text-[16px] sm:text-lg font-semibold text-[#0F1E36] leading-snug">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#C5A059] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-4 sm:px-6 pb-5 pt-2.5 text-[15px] text-[#2B303A]/90 leading-[1.65] border-t border-slate-100"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
