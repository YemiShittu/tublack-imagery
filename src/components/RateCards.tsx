import React from 'react';
import { RATE_CARDS, RateCardItem } from '../data/rateCards';
import { Maximize2, ArrowUpRight, Sparkles } from 'lucide-react';

interface RateCardsProps {
  onViewRateCard: (card: RateCardItem) => void;
  onDiscussShoot: () => void;
}

export const RateCards: React.FC<RateCardsProps> = ({ onViewRateCard, onDiscussShoot }) => {
  return (
    <section id="rate-cards" className="py-24 sm:py-32 bg-[#f8fafc] border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#0b1b38] font-normal tracking-tight">
           Rate Cards
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 font-light leading-relaxed">
            Transparent collections crafted for celebratory milestones, weddings, and
            grand unions. <br></br>Click any rate card to inspect details in full
            resolution.
          </p>
        </div>

        {/* 3 Dedicated Rate Card Graphics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {RATE_CARDS.map((card, index) => {
            const isFeatured = index === 1; // Wedding Package I is popular choice

            return (
              <div
                key={card.id}
                className={`group relative flex flex-col bg-white border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                  isFeatured
                    ? 'border-[#0b1b38] shadow-lg ring-1 ring-[#0b1b38]/10'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                {/* Featured Badge if applicable */}
                {isFeatured && (
                  <div className="bg-[#0b1b38] text-white text-[11px] font-semibold tracking-widest uppercase py-1.5 text-center flex items-center justify-center gap-1.5 shadow-sm">
                    <Sparkles className="w-3.5 h-3.5 text-sky-300" />
                    <span>Most Popular Wedding Collection</span>
                  </div>
                )}

                {/* Clickable Rate Card Graphic Presentation */}
                <div
                  onClick={() => onViewRateCard(card)}
                  className="relative aspect-[3/4] w-full overflow-hidden cursor-pointer bg-slate-50"
                  title={`Click to view ${card.name} rate card full size`}
                >
                  <img
                    src={card.image}
                    alt={card.alt}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain p-3 transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  />

                  {/* Hover Inspect Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center p-4 text-center">
                    <div className="p-3 rounded-full bg-[#0b1b38] text-white shadow-lg mb-2">
                      <Maximize2 className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-white bg-black/75 px-3 py-1 rounded">
                      Inspect Rate Card
                    </span>
                  </div>
                </div>

                {/* Card Summary Details */}
                <div className="p-6 flex flex-col justify-between flex-1 border-t border-slate-100">
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-[#1d4ed8] font-semibold">
                      {card.badge}
                    </div>
                    <h3 className="font-serif text-2xl text-[#0b1b38] font-medium mt-1">{card.name}</h3>
                    <p className="text-xs text-slate-600 font-light mt-2 leading-relaxed">
                      {card.description}
                    </p>

                    <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5">
                      {card.highlights.slice(0, 3).map((h, i) => (
                        <div key={i} className="text-xs text-slate-700 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#1d4ed8] shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <button
                      onClick={() => onViewRateCard(card)}
                      className="w-full py-2.5 px-4 text-xs font-semibold tracking-wider uppercase text-[#0b1b38] bg-slate-100 hover:bg-[#0b1b38] hover:text-white rounded transition-all duration-200 flex items-center justify-center gap-2 border border-slate-200 hover:border-[#0b1b38]"
                    >
                      <span>View Full Rate Card</span>
                      <Maximize2 className="w-3.5 h-3.5 text-[#1d4ed8] group-hover:text-white" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom High-Impact Deep Navy Callout */}
        <div className="mt-16 max-w-3xl mx-auto p-8 sm:p-12 rounded-2xl bg-[#0b1b38] text-white border border-slate-800 text-center shadow-xl">
          <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">
            Need something different?
          </h3>
          <p className="mt-3 text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-xl mx-auto">
            Every shoot is different. Tell us what you have in mind and we'll help you find the
            right photography package for your occasion.
          </p>

          <div className="mt-7">
            <button
              onClick={onDiscussShoot}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#0b1b38] bg-white hover:bg-slate-100 rounded transition-all duration-200 shadow-md"
            >
              <span>Discuss Your Shoot</span>
              <ArrowUpRight className="w-4 h-4 text-[#0b1b38]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
