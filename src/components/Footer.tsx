import React from 'react';
import { MessageSquare, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { UI_TRANSLATIONS, SPA_LOGO_URL, WHATSAPP_DISPLAY, getWhatsAppBookingUrl } from '../data/services';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const t = UI_TRANSLATIONS[language];
  const whatsappUrl = getWhatsAppBookingUrl(null, language);

  return (
    <footer className="mt-16 sm:mt-24 border-t border-[#C5A059]/40 bg-[#FAF7F2] relative">
      {/* Disclaimer Section requested by user */}
      <div className="bg-[#F5EFEB] border-b border-[#EAE3D6] py-5 px-4 sm:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm text-[#8C7A6B] italic font-medium leading-relaxed">
            {t.disclaimer}
          </p>
        </div>
      </div>

      {/* Main Footer Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center space-y-7">
        {/* Circular Logo & Name */}
        <div className="flex flex-col items-center justify-center space-y-3">
          <div className="w-16 h-16 rounded-full p-0.5 bg-gradient-to-tr from-[#C5A059] to-[#996515] shadow-sm">
            <img
              src={SPA_LOGO_URL}
              alt="Amarii Logo"
              className="w-full h-full object-cover rounded-full bg-white"
              onError={(e) => {
                (e.currentTarget as HTMLElement).style.display = 'none';
              }}
            />
          </div>
          <div>
            <span className="font-serif-luxury text-2xl font-bold tracking-wider text-[#2A2421] block">
              AMARII
            </span>
            <span className="text-xs uppercase tracking-[0.25em] text-[#8C7A6B]">
              Beauty Spa
            </span>
          </div>
        </div>

        {/* Quiet Subtitle & WhatsApp Direct Contact */}
        <div className="max-w-md mx-auto space-y-1.5 text-xs sm:text-sm text-[#5A524C]">
          <p>{t.spaLocation}</p>
          <p className="font-medium text-[#2A2421]">
            <span className="text-[#8C7A6B]">{t.directWhatsApp}</span>{' '}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#A87932] underline font-mono font-semibold"
            >
              {WHATSAPP_DISPLAY}
            </a>
          </p>
        </div>

        {/* Golden Divider */}
        <div className="flex items-center justify-center gap-3">
          <span className="h-[1px] w-16 bg-[#C5A059]/40" />
          <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
          <span className="h-[1px] w-16 bg-[#C5A059]/40" />
        </div>

        {/* Agendar meu horário Direct WhatsApp Button */}
        <div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold tracking-wider uppercase text-white bg-gradient-to-r from-[#A87932] via-[#C5A059] to-[#996515] hover:brightness-105 active:scale-[0.99] transition-all shadow-md cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>{t.bookMyTime}</span>
          </a>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-[#EAE3D6] text-xs text-[#9E948B]">
          <p>© {new Date().getFullYear()} AMARII Beauty Spa. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
