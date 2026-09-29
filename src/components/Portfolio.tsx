import React, { useState, useMemo } from 'react';
import {
  PORTFOLIO_ITEMS,
  PORTFOLIO_CATEGORIES,
  CategoryFilter,
  PortfolioItem,
} from '../data/portfolio';
import { Maximize2, MapPin } from 'lucide-react';

interface PortfolioProps {
  onSelectPhoto: (item: PortfolioItem) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectPhoto }) => {
  const [activeCategory, setActiveCategory] =
    useState<CategoryFilter>('All');

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') {
      return PORTFOLIO_ITEMS;
    }

    return PORTFOLIO_ITEMS.filter(
      (item) => item.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <section
      id="portfolio"
      className="py-24 sm:py-32 bg-white border-t border-slate-200/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[#1d4ed8] font-semibold mb-3">
              Selected Works
            </p>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#0b1b38] font-normal tracking-tight">
              The Portfolio
            </h2>
          </div>

          <p className="text-sm text-slate-600 max-w-md font-light leading-relaxed">
            A curated collection of weddings, milestone birthdays, and
            editorial portraits photographed across Lagos and destination
            locations.
          </p>
        </div>

        {/* Category Filter Bar */}
        <div
          role="tablist"
          aria-label="Filter portfolio by category"
          className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar"
        >
          {PORTFOLIO_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;

            return (
              <button
                key={cat}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-all duration-150 rounded shrink-0 whitespace-nowrap focus-visible:ring-2 focus-visible:ring-[#0b1b38] ${
                  isActive
                    ? 'bg-[#0b1b38] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:text-[#0b1b38] hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Natural-Image Editorial Gallery */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              onClick={() => onSelectPhoto(item)}
              className="group relative mb-6 sm:mb-8 break-inside-avoid overflow-hidden rounded-xl bg-white border border-slate-200/90 cursor-pointer shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  loading="lazy"
                  decoding="async"
                  className="block w-full h-auto transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Expand Icon */}
                <div className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Text Details */}
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex items-center gap-2 text-[11px] font-semibold text-sky-300 uppercase tracking-wider mb-1">
                    <span>{item.category}</span>
                   
                  </div>

                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-[#64748b]">
            <p className="text-sm">
              No photographs found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};