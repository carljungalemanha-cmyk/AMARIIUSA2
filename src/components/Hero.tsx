import React, { useState } from 'react';
import { Sparkles, ArrowDown, Calendar } from 'lucide-react';
import { Language } from '../types';
import { SPA_LOGO_URL, UI_TRANSLATIONS, getWhatsAppBookingUrl } from '../data/services';

interface HeroProps {
  language: Language;
  onViewServices: () => void;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  language,
  onViewServices,
  onOpenBooking,
}) => {
  const t = UI_TRANSLATIONS[language];
  const [logoLoaded, setLogoLoaded] = useState(true);

  return (
    <section className="relative overflow-hidden pt-8 pb-14 sm:pt-14 sm:pb-20 border-b border-[#C5A059]/20 bg-gradient-to-b from-[#F5EFEB] to-[#FAF7F2]">
      {/* Subtle luxury ambient pattern in background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#C5A059 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* SPA LOGO IN CIRCLE AS REQUESTED */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="relative group">
            {/* Outer golden glow & rings */}
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-[#C5A059] via-[#E8D19B] to-[#996515] opacity-75 blur-xs group-hover:opacity-100 transition duration-500" />
            
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full p-1 bg-white shadow-xl ring-2 ring-[#C5A059]/60 flex items-center justify-center overflow-hidden">
              {logoLoaded ? (
                <img
                  src={SPA_LOGO_URL}
                  alt="Amarii Beauty Spa Logo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-full transition-transform duration-700 group-hover:scale-105"
                  onError={() => setLogoLoaded(false)}
                />
              ) : (
                /* Sophisticated fallback monogram in case network drops */
                <div className="w-full h-full rounded-full bg-[#F5EFEB] flex flex-col items-center justify-center text-[#996515] p-4 text-center">
                  <Sparkles className="w-6 h-6 text-[#C5A059] mb-1" />
                  <span className="font-serif-luxury font-bold text-lg tracking-wider text-[#2A2421]">
                    AMARII
                  </span>
                  <span className="text-[9px] uppercase tracking-widest text-[#8C7A6B]">
                    Beauty Spa
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* EXACT INTRO TEXT REQUESTED */}
        <div className="space-y-4 max-w-2xl mx-auto">
          {/* Welcome Heading */}
          <h1 className="font-serif-luxury text-3xl sm:text-5xl lg:text-5.5xl font-normal text-[#2A2421] tracking-tight text-balance leading-tight">
            {t.heroWelcome}
          </h1>

          {/* Subtitle */}
          <p className="font-serif-luxury text-xl sm:text-2xl text-[#8C7A6B] italic font-medium">
            {t.heroSubtitle}
          </p>

          {/* Golden Divider */}
          <div className="flex items-center justify-center gap-3 py-1">
            <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#C5A059]" />
            <span className="w-2 h-2 rotate-45 border border-[#C5A059] bg-[#FAF7F2]" />
            <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#C5A059]" />
          </div>

          {/* Main Introductory Description */}
          <p className="text-sm sm:text-base text-[#5A524C] leading-relaxed max-w-xl mx-auto font-light">
            {t.heroParagraph}
          </p>
        </div>

        {/* ACTION BUTTONS */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <button
            onClick={onViewServices}
            className="w-full sm:w-auto px-7 py-3 text-sm font-semibold tracking-wide uppercase text-white bg-gradient-to-r from-[#A87932] via-[#C5A059] to-[#996515] hover:brightness-105 active:scale-[0.99] transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
          >
            <span>{t.viewAllServices}</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>

          <a
            href={getWhatsAppBookingUrl(null, language)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 text-sm font-medium tracking-wide text-[#2A2421] bg-white border border-[#C5A059] hover:bg-[#F5EFEB] transition-all shadow-xs cursor-pointer flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4 text-[#A87932]" />
            <span>{t.bookMyTime}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
