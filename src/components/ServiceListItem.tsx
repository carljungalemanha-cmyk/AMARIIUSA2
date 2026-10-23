import React from 'react';
import { Clock, MessageSquare } from 'lucide-react';
import { ServiceItem, Language } from '../types';
import { UI_TRANSLATIONS, getWhatsAppBookingUrl } from '../data/services';

interface ServiceListItemProps {
  service: ServiceItem;
  language: Language;
}

export const ServiceListItem: React.FC<ServiceListItemProps> = ({
  service,
  language,
}) => {
  const t = UI_TRANSLATIONS[language];
  const whatsappUrl = getWhatsAppBookingUrl(service, language);

  return (
    <div className="bg-white border border-[#C5A059] p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4 flex-1">
        {/* Circular photo with gold border */}
        <div className="relative w-18 h-18 sm:w-20 sm:h-20 shrink-0 rounded-full overflow-hidden border-2 border-[#C5A059] p-0.5 bg-white shadow-xs">
          <img
            src={service.image}
            alt={service.name[language]}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Text information */}
        <div className="space-y-1.5 flex-1 min-w-0">
          <div className="flex items-center gap-2 text-xs text-[#8C7A6B] uppercase font-medium">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-[#C5A059]" />
              {service.duration}
            </span>
            <span aria-hidden="true" className="text-[#C5A059]">·</span>
            <span>{service.category}</span>
          </div>

          <h3 className="font-serif-luxury text-lg sm:text-xl font-semibold text-[#2A2421] leading-snug">
            {service.name[language]}
          </h3>

          <p className="text-xs text-[#5A524C] line-clamp-2 leading-relaxed">
            {service.description[language]}
          </p>

          <div className="text-[11px] text-[#8C7A6B] flex items-center gap-1.5 truncate pt-0.5">
            <span className="text-[#C5A059]">✦</span>
            <span className="truncate">{service.benefits[language][0]}</span>
          </div>
        </div>
      </div>

      {/* Pricing & DIRECT WHATSAPP ACTION */}
      <div className="flex items-center justify-between md:flex-col md:items-end gap-3 pt-3 md:pt-0 border-t md:border-t-0 border-[#EAE3D6] shrink-0">
        <div className="text-left md:text-right">
          {service.originalPrice && (
            <span className="block text-[11px] text-[#8C7A6B] line-through font-mono">
              {t.originalPricePrefix}{service.originalPrice}
            </span>
          )}
          <span className="font-serif-luxury text-xl font-bold text-[#2A2421] tabular-nums">
            {service.price[language]}
          </span>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-xs font-semibold tracking-wide text-white bg-gradient-to-r from-[#A87932] via-[#C5A059] to-[#996515] hover:opacity-95 shadow-xs transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>{t.bookButton}</span>
        </a>
      </div>
    </div>
  );
};
