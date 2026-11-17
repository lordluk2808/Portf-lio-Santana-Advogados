import { FIRM_INFO } from '../data/firmData';
import { WhatsAppIcon, buildWhatsAppUrl } from './WhatsAppIcon';

export function FloatingWhatsApp() {
  const href = buildWhatsAppUrl(FIRM_INFO.defaultWhatsappMessage);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Iniciar atendimento pelo WhatsApp"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 inline-flex items-center justify-center gap-2.5 w-12 h-12 sm:w-auto sm:px-4 rounded-full bg-[#1E8E5A] hover:bg-[#17774B] text-white shadow-lg transition-transform duration-150 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F1E36] focus-visible:ring-offset-2"
    >
      <WhatsAppIcon className="w-6 h-6 sm:w-5 sm:h-5 shrink-0" />
      <span className="hidden sm:inline text-xs font-semibold whitespace-nowrap">
        Falar no WhatsApp
      </span>
    </a>
  );
}
