import React, { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryFilters } from './components/CategoryFilters';
import { ServiceCard } from './components/ServiceCard';
import { Footer } from './components/Footer';
import { SERVICES, UI_TRANSLATIONS, getWhatsAppBookingUrl } from './data/services';
import { Language, ServiceCategory } from './types';
import { MessageSquare, Sparkles } from 'lucide-react';

export default function App() {
  const [language, setLanguage] = useState<Language>('pt');
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');

  const t = UI_TRANSLATIONS[language];

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      all: SERVICES.length,
      faciais: 0,
      corporais: 0,
      laser: 0,
      consulta: 0,
    };
    SERVICES.forEach((srv) => {
      if (counts[srv.category] !== undefined) {
        counts[srv.category]++;
      }
    });
    return counts;
  }, []);

  // Filtered services by selected category
  const filteredServices = useMemo(() => {
    if (activeCategory === 'all') return SERVICES;
    return SERVICES.filter((srv) => srv.category === activeCategory);
  }, [activeCategory]);

  const handleViewServices = () => {
    const catalogElement = document.getElementById('catalogo-servicos');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappGeneralUrl = getWhatsAppBookingUrl(null, language);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2A2421] flex flex-col font-sans selection:bg-[#E2D2B0] selection:text-[#2A2421]">
      {/* Top Header */}
      <Navbar
        language={language}
        onLanguageChange={setLanguage}
        onOpenBooking={() => {}}
        onSelectCategory={(cat) => setActiveCategory(cat as ServiceCategory)}
        activeCategory={activeCategory}
      />

      {/* Hero Section with Circle Logo & Intro copy */}
      <Hero
        language={language}
        onViewServices={handleViewServices}
        onOpenBooking={() => {}}
      />

      {/* Main Catalog Section */}
      <main id="catalogo-servicos" className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 pt-10 sm:pt-14 space-y-8">
        {/* Section Header with Subtle Gold Accent */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#8C7A6B]">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>AMARII COLLECTION</span>
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-4.5xl font-medium text-[#2A2421]">
            {language === 'pt' ? 'Catálogo de Procedimentos' : 'Treatment Catalog'}
          </h2>
          <p className="text-xs sm:text-sm text-[#8C7A6B]">
            {filteredServices.length} {t.allServicesCount}
          </p>
        </div>

        {/* Categories: 100% visible on mobile and desktop */}
        <CategoryFilters
          language={language}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          categoryCounts={categoryCounts}
        />

        {/* Services Grid: Square border, golden border, circular photo inside, name, description, benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 pt-2">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              language={language}
            />
          ))}
        </div>
      </main>

      {/* Footer with Disclaimer & Agendar meu horário */}
      <Footer language={language} />

      {/* Floating Mobile Booking Button - Direct to WhatsApp */}
      <div className="fixed bottom-4 right-4 z-30 sm:hidden">
        <a
          href={whatsappGeneralUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-[#A87932] via-[#C5A059] to-[#996515] text-white shadow-xl border border-white/20 active:scale-95 transition-all text-xs font-semibold tracking-wide uppercase"
          aria-label={t.bookMyTime}
        >
          <MessageSquare className="w-4 h-4" />
          <span>{t.bookButton}</span>
        </a>
      </div>
    </div>
  );
}
