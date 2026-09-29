import React from 'react';
import { TESTIMONIALS } from '../data/testimonials';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#f8fafc] border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-xs uppercase tracking-[0.28em] text-[#1d4ed8] font-semibold mb-3">
            Client Words
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#0b1b38] font-normal tracking-tight">
            Kind Words &amp; Reflections
          </h2>
          <p className="mt-3 text-sm text-slate-600 font-light">
            Genuine experiences from couples, celebrants, and families across Lagos.
          </p>
        </div>

        {/* Testimonials Grid with pristine white cards on off-white background */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-8 sm:p-10 bg-white border border-slate-200/90 rounded-xl flex flex-col justify-between relative shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div>
                <Quote className="w-8 h-8 text-[#1d4ed8]/30 mb-5" />
                <p className="font-serif text-lg sm:text-xl text-[#0b1b38] italic font-normal leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-[#0b1b38] tracking-wide">{t.client}</h4>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                    <span>{t.shootType}</span>
                    <span aria-hidden="true" className="text-slate-300">·</span>
                    <span>{t.location}</span>
                  </div>
                </div>
                <div className="text-[11px] font-mono text-slate-400">{t.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

