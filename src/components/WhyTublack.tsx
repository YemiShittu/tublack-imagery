import React from 'react';

const PILLARS = [
  {
    number: '01',
    title: 'Intentional Storytelling',
    description:
      'Every photograph should contribute meaningfully to the overarching story of the occasion. We build cohesive visual chapters rather than fragmented snapshots.',
  },
  {
    number: '02',
    title: 'Attention to Detail',
    description:
      'From subtle micro-expressions and tearful embraces to the intricate beading of traditional attire, nothing important is overlooked.',
  },
  {
    number: '03',
    title: 'Natural Moments',
    description:
      'We prioritize authentic interactions over stiff, forced poses. Our relaxed direction allows your true personality and chemistry to emerge effortlessly.',
  },
  {
    number: '04',
    title: 'Professional Experience',
    description:
      'Clear contracts, prompt communication, transparent rate cards, and a dependable delivery timeline from your first enquiry to final heirloom delivery.',
  },
];

export const WhyTublack: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#0b1b38] border-t border-slate-800 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-[0.28em] text-[#60a5fa] font-semibold mb-3">
            The Approach
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-normal tracking-tight">
            Why Tublack Imagery
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            A commitment to creative restraint, thoughtful preparation, and respectful presence on
            your most meaningful days.
          </p>
        </div>

        {/* Clean Editorial Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="relative p-6 sm:p-8 bg-[#071329] border border-white/10 rounded-xl flex flex-col justify-between hover:border-[#60a5fa]/40 transition-colors duration-200 shadow-lg"
            >
              <div>
                <span className="font-mono text-xs tracking-widest text-[#60a5fa] block mb-4 font-semibold">
                  [{pillar.number}]
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-white font-medium mb-3">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
