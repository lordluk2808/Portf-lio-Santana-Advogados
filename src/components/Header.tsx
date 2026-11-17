import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { FIRM_INFO } from '../data/firmData';
import { WhatsAppIcon, buildWhatsAppUrl } from './WhatsAppIcon';

const NAV_LINKS = [
  { href: '#areas-de-atuacao', label: 'Áreas de Atuação' },
  { href: '#o-escritorio', label: 'O Escritório' },
  { href: '#equipe', label: 'Equipe' },
  { href: '#duvidas', label: 'Dúvidas' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const whatsappHref = buildWhatsAppUrl(FIRM_INFO.defaultWhatsappMessage);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-200 ${
        isScrolled
          ? 'bg-[#0F1E36]/92 backdrop-blur-md border-b border-white/10 shadow-sm'
          : 'bg-[#0F1E36] border-b border-white/10'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4 sm:gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#topo"
          className="font-serif text-base sm:text-xl font-semibold tracking-tight text-white whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] rounded-sm"
        >
          Fernando Santana <span className="text-[#C5A059] font-normal">Advogados</span>
        </a>

        {/* Zone 2: Concise single-line Navigation Links */}
        <nav
          aria-label="Navegação principal"
          className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-200"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 hover:text-white transition-colors duration-150 whitespace-nowrap shrink-0 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1.5px] after:bg-[#C5A059] hover:after:w-full after:transition-all after:duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 min-h-[40px] text-xs sm:text-sm font-semibold text-white bg-[#1E8E5A] hover:bg-[#17774B] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <WhatsAppIcon className="w-4 h-4 shrink-0" />
            <span>Falar com Especialista</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 text-white hover:text-[#C5A059] transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0F1E36] border-t border-white/10 px-4 py-4">
          <nav aria-label="Navegação móvel" className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-3.5 min-h-[48px] flex items-center text-[15px] font-medium text-slate-200 hover:text-white hover:bg-white/5 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-white/10">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-4 py-3.5 min-h-[48px] text-[15px] font-semibold text-white bg-[#1E8E5A] hover:bg-[#17774B] rounded-md transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <span>Falar com Especialista</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
