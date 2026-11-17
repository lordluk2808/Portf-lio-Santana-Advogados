import { FIRM_INFO, FOUNDER } from '../data/firmData';
import { ResilientImage, WhatsAppIcon, buildWhatsAppUrl } from './WhatsAppIcon';

export function Hero() {
  const whatsappHref = buildWhatsAppUrl(FIRM_INFO.defaultWhatsappMessage);

  return (
    <section
      id="topo"
      className="bg-[#0F1E36] text-white border-b border-[#C5A059]/25"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-9 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left 60% Text Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="text-[13px] sm:text-sm font-semibold tracking-[0.04em] text-[#C5A059] mb-3 sm:mb-4">
              Mais de 20 anos de tradição e excelência jurídica
            </p>

            <h1
              className="font-serif font-semibold text-white leading-[1.16] tracking-tight mb-4 sm:mb-6"
              style={{
                fontSize: 'clamp(1.75rem, 4.2vw, 3.35rem)',
                textWrap: 'balance',
              }}
            >
              Segurança jurídica e defesa estratégica para proteger o que é seu por direito.
            </h1>

            <p className="text-[15px] sm:text-lg text-slate-200 leading-[1.6] sm:leading-relaxed max-w-2xl mb-6 sm:mb-8">
              Atuação especializada e humanizada nas áreas Trabalhista, de Família e do Consumidor. Mais de duas décadas de experiência transformando problemas complexos em soluções seguras.
            </p>

            <div className="flex flex-col items-stretch sm:items-start gap-2.5 sm:gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-5 sm:px-6 py-3.5 min-h-[48px] text-[15px] sm:text-base font-semibold text-white bg-[#1E8E5A] hover:bg-[#17774B] rounded-md shadow-sm transition-colors duration-150 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F1E36]"
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0" />
                <span>Iniciar Atendimento pelo WhatsApp</span>
              </a>

              <p className="text-[13px] sm:text-sm text-slate-300 text-center sm:text-left tracking-[0.01em]">
                Atendimento ágil, sigiloso e direto com nossa equipe jurídica.
              </p>
            </div>
          </div>

          {/* Right 40% Portrait Column */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative w-full h-[310px] sm:h-[420px] lg:h-full lg:min-h-[480px] rounded-lg overflow-hidden border border-[#C5A059]/30 bg-[#0A1526]">
              <ResilientImage
                src={FOUNDER.image}
                alt={FOUNDER.imageAlt}
                fallbackTitle={FOUNDER.name}
                eager
                className="w-full h-full object-cover object-top"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-28 sm:h-32 bg-gradient-to-t from-[#0A1526]/92 via-[#0A1526]/50 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
                <p className="font-serif text-base sm:text-lg font-semibold text-white leading-snug">
                  {FOUNDER.name}
                </p>
                <p className="text-xs sm:text-sm text-[#C5A059] mt-0.5">
                  {FOUNDER.role} · {FOUNDER.oab}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
