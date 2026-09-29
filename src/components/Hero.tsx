import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import heroWedding from '../assets/hero_wedding.jpg';

interface HeroProps {
  onBookClick: () => void;
  onPortfolioClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onPortfolioClick }) => {
  return (
    <section
      id="home"
      className="relative pt-32 sm:pt-36 md:pt-40 pb-16 sm:pb-24 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Heading Content */}
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center mb-10 sm:mb-14">
          {/* Geographic trust marker */}
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-[#1d4ed8] font-semibold mb-4">
            <span>Lagos, Nigeria</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Editorial &amp; Fine Art Photography</span>
          </div>

          {/* Primary Page H1 in Deep Navy */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-[#0b1b38] tracking-tight leading-[1.08] max-w-4xl text-balance">
            Photography that <span className="italic font-normal text-[#1d4ed8]">tells your story.</span>
          </h1>

          {/* Supporting Copy in Slate */}
          <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl font-light leading-relaxed text-balance">
            Professional photography for weddings, birthdays, portraits, events and unforgettable
            moments.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <button
              onClick={onBookClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-semibold tracking-wider uppercase text-white bg-[#0b1b38] hover:bg-[#142850] transition-all duration-200 rounded shadow-md focus-visible:ring-2 focus-visible:ring-[#0b1b38]"
            >
              <span>Book a Shoot</span>
              <ArrowUpRight className="w-4 h-4 text-sky-300" />
            </button>

            <button
              onClick={onPortfolioClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#0b1b38] bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-all duration-200 rounded focus-visible:ring-2 focus-visible:ring-[#0b1b38]"
            >
              <span>View Portfolio</span>
            </button>
          </div>
        </div>

        {/* Large Prominent Hero Photography Showcase */}
<div className="relative max-w-6xl mx-auto rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-slate-200/90 group">
  <div className="aspect-[16/10] sm:aspect-[16/9] w-full relative overflow-hidden bg-slate-100">
    <img
      src={heroWedding}
      alt="Tublack Imagery - Editorial Wedding and Portrait Photography in Lagos, Nigeria"
      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.015]"
      fetchPriority="high"
      loading="eager"
      decoding="async"
    />

    {/* Subtle Gradient Scrim */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

    {/* Corner Viewfinder Marks */}
    <div className="absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2 border-white/80 pointer-events-none" />
    <div className="absolute top-4 right-4 w-5 h-5 border-t-2 border-r-2 border-white/80 pointer-events-none" />
    <div className="absolute bottom-4 left-4 w-5 h-5 border-b-2 border-l-2 border-white/80 pointer-events-none" />
    <div className="absolute bottom-4 right-4 w-5 h-5 border-b-2 border-r-2 border-white/80 pointer-events-none" />

    {/* Bottom Photo Metadata Caption */}
    <div className="absolute bottom-5 inset-x-6 sm:inset-x-8 flex items-center justify-between text-white text-xs">
      <div className="flex items-center gap-2 font-medium tracking-wide">
        <span className="w-2 h-2 rounded-full bg-emerald-400" />

        <span className="uppercase text-[11px] tracking-wider text-slate-200">
          A Beautiful Moment
        </span>

        <span aria-hidden="true" className="text-slate-400">
          ·
        </span>

        <span className="text-slate-300">
          Lagos, Nigeria
        </span>
      </div>

      <div className="hidden sm:block text-[11px] text-slate-300 uppercase tracking-widest font-mono">
        Tublack Imagery Archive
      </div>
    </div>
  </div>
</div>

        {/* Scroll indicator */}
        <div className="mt-12 sm:mt-16 text-center animate-bounce opacity-70">
          <a
            href="#intro"
            aria-label="Scroll to introduction"
            className="p-2 text-slate-400 hover:text-[#0b1b38] transition-colors inline-block"
          >
            <ArrowDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
