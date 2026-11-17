import { ASSOCIATES, FOUNDER } from '../data/firmData';
import { FadeInOnScroll } from './FadeInOnScroll';
import { ResilientImage, WhatsAppIcon, buildWhatsAppUrl } from './WhatsAppIcon';

export function TeamSection() {
  const founderWhatsappHref = buildWhatsAppUrl(
    'Olá! Gostaria de agendar uma consulta jurídica com a equipe do Dr. Fernando Santana.'
  );

  return (
    <section id="equipe" className="bg-[#F8F9FA] py-12 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeInOnScroll>
          <div className="max-w-2xl mb-8 sm:mb-12">
            <p className="text-sm font-semibold tracking-wide text-[#C5A059] mb-2">
              Nossa Equipe
            </p>
            <h2
              className="font-serif text-[26px] sm:text-4xl font-semibold text-[#0F1E36] leading-[1.2] tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              Conheça quem estará à frente da sua defesa
            </h2>
            <p className="text-[15px] sm:text-base text-[#2B303A]/85 leading-relaxed mt-2.5 sm:mt-3">
              Uma equipe liderada por profissionais experientes, comprometidos com o rigor técnico e o acolhimento humano.
            </p>
          </div>
        </FadeInOnScroll>

        {/* Featured Horizontal Card: Founder */}
        <FadeInOnScroll delay={100}>
          <article className="bg-white border border-slate-200/90 rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-12 mb-6 sm:mb-8">
          <div className="md:col-span-4 h-[290px] sm:h-[360px] md:h-auto md:min-h-[360px] bg-[#0F1E36]">
            <ResilientImage
              src={FOUNDER.image}
              alt={FOUNDER.imageAlt}
              fallbackTitle={FOUNDER.name}
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="md:col-span-8 p-5 sm:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[13px] sm:text-sm text-slate-600 mb-2.5 sm:mb-3">
                <span className="font-semibold text-[#C5A059]">{FOUNDER.role}</span>
                <span aria-hidden="true">·</span>
                <span className="tabular-nums font-medium text-[#0F1E36]">
                  {FOUNDER.oab}
                </span>
                <span aria-hidden="true">·</span>
                <span>{FOUNDER.specialty}</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#0F1E36] tracking-tight mb-3 sm:mb-4">
                {FOUNDER.name}
              </h3>

              <p className="text-[15px] sm:text-base text-[#2B303A] leading-[1.65] max-w-2xl">
                {FOUNDER.bio}
              </p>
            </div>

            <div className="pt-5 sm:pt-6 mt-5 sm:mt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-between gap-4">
              <p className="text-[13px] sm:text-sm text-slate-500">
                Atendimento presencial em São Paulo e online em todo o Brasil.
              </p>
              <a
                href={founderWhatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 min-h-[46px] text-[15px] sm:text-sm font-semibold text-white bg-[#1E8E5A] hover:bg-[#17774B] rounded-md transition-colors duration-150 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E8E5A]"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <span>Agendar Análise do Caso</span>
              </a>
            </div>
          </div>
          </article>
        </FadeInOnScroll>

        {/* Associates 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {ASSOCIATES.map((member, index) => {
            const staggerDelay = (index * 100) as 0 | 100 | 200;
            return (
              <FadeInOnScroll key={member.id} delay={staggerDelay} className="flex">
                <article className="w-full bg-white border border-slate-200/90 rounded-lg overflow-hidden flex flex-col">
                  <div className="h-[270px] sm:h-[310px] md:h-auto md:aspect-[4/4.5] w-full bg-[#0F1E36] overflow-hidden">
                    <ResilientImage
                      src={member.image}
                      alt={member.imageAlt}
                      fallbackTitle={member.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  <div className="p-5 sm:p-6 flex-1 flex flex-col">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] sm:text-xs text-slate-600 mb-2">
                      <span className="font-semibold text-[#C5A059]">
                        {member.specialty}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="tabular-nums font-medium text-[#0F1E36]">
                        {member.oab}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-semibold text-[#0F1E36] mb-2">
                      {member.name}
                    </h3>

                    <p className="text-[14.5px] sm:text-sm text-[#2B303A]/90 leading-[1.6]">
                      {member.bio}
                    </p>
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
