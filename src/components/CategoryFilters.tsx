import React from 'react';
import { Language, ServiceCategory } from '../types';
import { CATEGORIES } from '../data/services';

interface CategoryFiltersProps {
  language: Language;
  activeCategory: ServiceCategory;
  onSelectCategory: (cat: ServiceCategory) => void;
  categoryCounts: Record<string, number>;
}

export const CategoryFilters: React.FC<CategoryFiltersProps> = ({
  language,
  activeCategory,
  onSelectCategory,
  categoryCounts,
}) => {
  return (
    <div className="w-full">
      {/* Category Buttons: fully visible on mobile via responsive wrap/grid */}
      <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-2 sm:gap-2.5">
        {CATEGORIES.map((cat, idx) => {
          const isActive = activeCategory === cat.id;
          const count = categoryCounts[cat.id] ?? 0;
          const isLastOddOnMobile = idx === CATEGORIES.length - 1 && CATEGORIES.length % 2 !== 0;

          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id as ServiceCategory)}
              className={`px-3 py-2.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium transition-all border cursor-pointer flex items-center justify-between sm:justify-center gap-2 ${
                isLastOddOnMobile ? 'col-span-2 sm:col-span-1' : ''
              } ${
                isActive
                  ? 'bg-gradient-to-r from-[#A87932] via-[#C5A059] to-[#996515] text-white border-[#C5A059] shadow-sm font-semibold'
                  : 'bg-white text-[#5A524C] border-[#C5A059]/40 hover:border-[#C5A059] hover:bg-[#F5EFEB]'
              }`}
            >
              <span className="truncate">{cat[language]}</span>
              <span
                className={`text-[11px] px-2 py-0.5 font-mono tabular-nums shrink-0 ${
                  isActive
                    ? 'bg-black/25 text-white'
                    : 'bg-[#F5EFEB] text-[#8C7A6B] border border-[#C5A059]/20'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
