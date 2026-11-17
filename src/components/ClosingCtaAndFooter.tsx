import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { FIRM_INFO } from '../data/firmData';
import { WhatsAppIcon, buildWhatsAppUrl } from './WhatsAppIcon';

export function ClosingCtaAndFooter() {
  const whatsappHref = buildWhatsAppUrl(FIRM_INFO.defaultWhatsappMessage);

  return (
    <>
      {/* Seção 7: Chamada Final */}
      <section className="bg-[#0F1E36] text-white border-t border-[#C5A059]/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-20 text-center">
          <div className="w-12 h-[2px] bg-[#C5A059] mx-auto mb-5 sm:mb-6" aria-hidden="true" />
          <h2
            className="font-serif text-[26px] sm:text-4xl lg:text-[42px] font-semibold text-white leading-[1.2] tracking-tight mb-3.5 sm:mb-4"
            style={{ textWrap: 'balance' }}
          >
            Não deixe suas dúvidas virarem prejuízos.
          </h2>
          <p className="text-[15px] sm:text-lg text-slate-200 leading-[1.6] max-w-2xl mx-auto mb-7 sm:mb-8">
            Converse agora com a equipe do Fernando Santana Advogados e entenda os caminhos jurídicos para o seu caso.
          </p>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-6 sm:px-7 py-3.5 sm:py-4 min-h-[48px] sm:min-h-[52px] text-[15px] sm:text-base font-semibold text-white bg-[#1E8E5A] hover:bg-[#17774B] rounded-md shadow-sm transition-colors duration-150 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F1E36]"
          >
            <WhatsAppIcon className="w-5 h-5 shrink-0" />
            <span>Falar no WhatsApp Agora</span>
          </a>
        </div>
      </section>

      {/* Rodapé Institucional */}
      <footer className="bg-[#0A1526] text-slate-300 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-20 sm:py-14">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10">
            {/* Coluna 1: Identidade + OAB */}
            <div className="md:col-span-5">
              <p className="font-serif text-xl font-semibold text-white tracking-tight mb-3">
                Fernando Santana <span className="text-[#C5A059] font-normal">Advogados</span>
              </p>
              <p className="text-[14.5px] sm:text-sm text-slate-300 leading-relaxed max-w-sm mb-4">
                Mais de duas décadas de atuação dedicada à defesa estratégica nas áreas Trabalhista, de Família e do Consumidor, com atendimento transparente e humanizado.
              </p>
              <p className="text-xs font-medium text-[#C5A059] tabular-nums">
                {FIRM_INFO.oabSociety}
              </p>
            </div>

            {/* Coluna 2: Links Rápidos */}
            <div className="md:col-span-3">
              <h3 className="text-sm font-semibold text-white mb-3 sm:mb-4">
                Navegação
              </h3>
              <ul className="space-y-1 sm:space-y-2.5 text-[15px] sm:text-sm">
                <li>
                  <a
                    href="#areas-de-atuacao"
                    className="inline-block py-1.5 sm:py-0 hover:text-[#C5A059] transition-colors"
                  >
                    Áreas de Atuação
                  </a>
                </li>
                <li>
                  <a
                    href="#o-escritorio"
                    className="inline-block py-1.5 sm:py-0 hover:text-[#C5A059] transition-colors"
                  >
                    O Escritório
                  </a>
                </li>
                <li>
                  <a
                    href="#equipe"
                    className="inline-block py-1.5 sm:py-0 hover:text-[#C5A059] transition-colors"
                  >
                    Equipe
                  </a>
                </li>
                <li>
                  <a
                    href="#duvidas"
                    className="inline-block py-1.5 sm:py-0 hover:text-[#C5A059] transition-colors"
                  >
                    Perguntas Frequentes
                  </a>
                </li>
              </ul>
            </div>

            {/* Coluna 3: Contato */}
            <div className="md:col-span-4">
              <h3 className="text-sm font-semibold text-white mb-3 sm:mb-4">
                Contato e Atendimento
              </h3>
              <ul className="space-y-3.5 sm:space-y-3 text-[14.5px] sm:text-sm">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-1 sm:mt-0.5" aria-hidden="true" />
                  <span className="leading-relaxed">{FIRM_INFO.address}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#C5A059] shrink-0" aria-hidden="true" />
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-1 sm:py-0 hover:text-white transition-colors tabular-nums"
                  >
                    WhatsApp: {FIRM_INFO.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#C5A059] shrink-0" aria-hidden="true" />
                  <a
                    href={`mailto:${FIRM_INFO.email}`}
                    className="py-1 sm:py-0 hover:text-white transition-colors break-all sm:break-normal"
                  >
                    {FIRM_INFO.email}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#C5A059] shrink-0" aria-hidden="true" />
                  <span>{FIRM_INFO.hours}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Linha Inferior */}
          <div className="mt-8 sm:mt-10 pt-6 border-t border-white/10 text-xs text-slate-400 leading-relaxed">
            <p>
              © 2026 Fernando Santana Advogados. Todos os direitos reservados. Este site tem caráter meramente informativo, em conformidade com o Código de Ética e Disciplina da OAB.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
