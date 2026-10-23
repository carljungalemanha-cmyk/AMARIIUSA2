import React, { useState } from 'react';
import { Clock, MessageSquare, Sparkles } from 'lucide-react';
import { ServiceItem, Language } from '../types';
import { UI_TRANSLATIONS, getWhatsAppBookingUrl } from '../data/services';

interface ServiceCardProps {
  service: ServiceItem;
  language: Language;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  language,
}) => {
  const t = UI_TRANSLATIONS[language];
  const [imgError, setImgError] = useState(false);

  const whatsappUrl = getWhatsAppBookingUrl(service, language);

  return (
    <article className="group relative bg-white border border-[#C5A059] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden">
      {/* Top golden metallic accent line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-[#A87932] via-[#E8D19B] to-[#996515]" />

      <div>
        {/* ROUND / CIRCULAR PHOTO AS REQUESTED */}
        <div className="pt-6 pb-2 px-4 flex flex-col items-center relative">
          {/* Badge (Lançamento / Promoção / etc) */}
          {service.badge && (
            <div className="mb-3 inline-block bg-[#2A2421] text-[#E8D19B] border border-[#C5A059] px-2.5 py-0.5 text-[10px] font-semibold tracking-wider uppercase shadow-xs">
              {service.badge[language]}
            </div>
          )}

          {/* Golden framed circular photo container */}
          <div className="relative group-hover:scale-[1.02] transition-transform duration-300">
            <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full p-1 bg-white border-2 border-[#C5A059] shadow-md ring-2 ring-[#C5A059]/20 flex items-center justify-center overflow-hidden">
              {!imgError ? (
                <img
                  src={service.image}
                  alt={service.name[language]}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-full transition-transform duration-700 ease-out group-hover:scale-105"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-full h-full rounded-full flex flex-col items-center justify-center p-4 text-center bg-gradient-to-br from-[#F5EFEB] to-[#EBE2D5]">
                  <Sparkles className="w-6 h-6 text-[#C5A059] mb-1" />
                  <span className="font-serif-luxury text-xs text-[#2A2421] line-clamp-2">
                    {service.name[language]}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 pt-3 space-y-3.5">
          {/* Metadata: Duration & Category */}
          <div className="flex items-center justify-center gap-2 text-xs text-[#8C7A6B] font-medium tracking-wide uppercase">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
              {service.duration}
            </span>
            <span aria-hidden="true" className="text-[#C5A059]">·</span>
            <span className="bg-[#FAF7F2] px-2 py-0.5 border border-[#C5A059]/30 text-[11px] font-medium text-[#2A2421]">
              {service.category}
            </span>
          </div>

          {/* Service Name */}
          <h3 className="font-serif-luxury text-xl sm:text-2xl text-center text-[#2A2421] font-semibold leading-snug group-hover:text-[#A87932] transition-colors">
            {service.name[language]}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-[#5A524C] text-center leading-relaxed font-light">
            {service.description[language]}
          </p>

          {/* Key Benefits (Benefícios) */}
          <div className="pt-3 border-t border-[#EAE3D6] space-y-2">
            <span className="text-[11px] font-semibold tracking-wider uppercase text-[#8C7A6B] block">
              {t.benefitsTitle}
            </span>
            <ul className="space-y-1.5">
              {service.benefits[language].map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-[#4A423D] leading-snug">
                  <span className="text-[#C5A059] text-[10px] mt-0.5 shrink-0">✦</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer / Price & DIRECT WHATSAPP ACTION */}
      <div className="p-5 sm:p-6 pt-3 bg-[#FAF7F2] border-t border-[#EAE3D6] flex items-center justify-between gap-4">
        <div>
          {service.originalPrice && (
            <span className="block text-xs text-[#8C7A6B] line-through font-mono">
              {t.originalPricePrefix}{service.originalPrice}
            </span>
          )}
          <div className="flex items-baseline gap-1">
            <span className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#2A2421] tabular-nums">
              {service.price[language]}
            </span>
          </div>
        </div>

        {/* Direct WhatsApp link to +1 (781) 692-7644 */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-xs sm:text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-[#A87932] via-[#C5A059] to-[#996515] hover:opacity-95 shadow-xs active:scale-[0.98] transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>{t.bookButton}</span>
        </a>
      </div>
    </article>
  );
};
