import React from 'react';
import { Calendar, Globe } from 'lucide-react';
import { Language } from '../types';
import { SPA_LOGO_URL, UI_TRANSLATIONS, getWhatsAppBookingUrl } from '../data/services';

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenBooking: () => void;
  onSelectCategory: (category: string) => void;
  activeCategory: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onLanguageChange,
  onOpenBooking,
  onSelectCategory,
}) => {
  const t = UI_TRANSLATIONS[language];

  const handleNavClick = (catId: string) => {
    onSelectCategory(catId);
    const catalogElement = document.getElementById('catalogo-servicos');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#C5A059]/30 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 sm:h-20 flex items-center justify-between gap-4">
        {/* Zone 1: Brand Wordmark with circular icon badge */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C5A059]"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full p-[2px] bg-gradient-to-tr from-[#C5A059] via-[#E6CA85] to-[#A87932] shadow-sm shrink-0">
            <img
              src={SPA_LOGO_URL}
              alt="Amarii Spa Logo"
              className="w-full h-full object-cover rounded-full bg-[#F5EFEB]"
              onError={(e) => {
                // Graceful fallback to styled monogram
                (e.currentTarget as HTMLElement).style.display = 'none';
              }}
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif-luxury text-lg sm:text-2xl font-bold tracking-wider text-[#2A2421] leading-none">
              AMARII
            </span>
            <span className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#8C7A6B] font-medium leading-tight">
              {t.brandSubtitle}
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#5A524C]">
          <button
            onClick={() => handleNavClick('all')}
            className="hover:text-[#B38C40] transition-colors whitespace-nowrap cursor-pointer"
          >
            {language === 'pt' ? 'Todos os Serviços' : 'All Services'}
          </button>
          <button
            onClick={() => handleNavClick('faciais')}
            className="hover:text-[#B38C40] transition-colors whitespace-nowrap cursor-pointer"
          >
            {language === 'pt' ? 'Faciais' : 'Facials'}
          </button>
          <button
            onClick={() => handleNavClick('corporais')}
            className="hover:text-[#B38C40] transition-colors whitespace-nowrap cursor-pointer"
          >
            {language === 'pt' ? 'Corporais' : 'Body'}
          </button>
          <button
            onClick={() => handleNavClick('laser')}
            className="hover:text-[#B38C40] transition-colors whitespace-nowrap cursor-pointer"
          >
            {language === 'pt' ? 'Depilação a Laser' : 'Laser Removal'}
          </button>
          <button
            onClick={() => handleNavClick('consulta')}
            className="hover:text-[#B38C40] transition-colors whitespace-nowrap cursor-pointer"
          >
            {language === 'pt' ? 'Avaliação' : 'Consultation'}
          </button>
        </nav>

        {/* Zone 3: Actions - Language Selector & Booking CTA */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          {/* Language Switcher */}
          <div className="flex items-center p-0.5 border border-[#C5A059]/40 bg-[#F5EFEB] text-xs font-semibold">
            <Globe className="w-3.5 h-3.5 text-[#8C7A6B] ml-1.5 mr-1 hidden sm:block" />
            <button
              onClick={() => onLanguageChange('pt')}
              aria-label="Versão em Português"
              className={`px-2 py-1 transition-all cursor-pointer ${
                language === 'pt'
                  ? 'bg-[#C5A059] text-white shadow-xs'
                  : 'text-[#6A6058] hover:text-[#2A2421]'
              }`}
            >
              PT
            </button>
            <button
              onClick={() => onLanguageChange('en')}
              aria-label="English Version"
              className={`px-2 py-1 transition-all cursor-pointer ${
                language === 'en'
                  ? 'bg-[#C5A059] text-white shadow-xs'
                  : 'text-[#6A6058] hover:text-[#2A2421]'
              }`}
            >
              EN
            </button>
          </div>

          {/* Primary Action Button - Direct WhatsApp to +1 (781) 692-7644 */}
          <a
            href={getWhatsAppBookingUrl(null, language)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium tracking-wide text-white bg-gradient-to-r from-[#A87932] via-[#C5A059] to-[#996515] hover:opacity-95 shadow-sm transition-all cursor-pointer whitespace-nowrap"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>{t.bookButton}</span>
          </a>
        </div>
      </div>
    </header>
  );
};
