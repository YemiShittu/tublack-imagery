import React from 'react';

export const BrandIntro: React.FC = () => {
  return (
    <section id="intro" className="py-20 sm:py-28 md:py-36 bg-[#f8fafc] border-y border-slate-200/70 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Subtle kicker */}
        <p className="text-xs uppercase tracking-[0.3em] text-[#1d4ed8] font-semibold mb-5">
          Tublack Imagery · Creative Direction
        </p>

        {/* Section Heading */}
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#0b1b38] font-normal leading-tight tracking-tight text-balance">
          Moments worth remembering.
        </h2>

        {/* Brand Statement Paragraph */}
        <p className="mt-8 text-base sm:text-xl md:text-2xl text-slate-600 font-light leading-relaxed text-balance">
          Tublack Imagery captures authentic moments with a thoughtful eye for detail, emotion and
          storytelling. From intimate portraits to celebrations filled with energy, we create
          photographs that allow you to relive the moments that matter.
        </p>

        {/* Editorial Trust Separators */}
        <div className="mt-12 pt-10 border-t border-slate-200 flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs tracking-wider uppercase text-slate-500">
          <span>Lagos Studio &amp; On-Location</span>
          <span aria-hidden="true" className="text-[#1d4ed8]">·</span>
          <span>Fine Art Retouching</span>
          <span aria-hidden="true" className="text-[#1d4ed8]">·</span>
          <span>Heirloom Print Curation</span>
          <span aria-hidden="true" className="text-[#1d4ed8]">·</span>
          <span>Destination Inquiries</span>
        </div>
      </div>
    </section>
  );
};
