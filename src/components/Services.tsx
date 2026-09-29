import React from 'react';
import { SERVICES } from '../data/services';
import { Check } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-24 sm:py-32 bg-white border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#0b1b38] font-normal tracking-tight">
              Photography Services
            </h2>
          </div>


        </div>

        {/* Clean Editorial Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group p-8 bg-white border border-slate-200/90 rounded-xl flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300"
            >
              <div>
                {/* Clean human editorial numbering & tag */}
                <div className="flex items-center justify-between text-xs text-slate-400 mb-6">
                  
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-[#0b1b38] font-medium leading-snug">
                  {service.title}
                </h3>
                <p className="text-xs font-semibold text-[#1d4ed8] mt-1.5">{service.tagline}</p>

                <p className="mt-4 text-sm text-slate-600 font-light leading-relaxed">
                  {service.description}
                </p>

                {/* Deliverables list */}
                <div className="mt-6 pt-6 border-t border-slate-100 space-y-2.5">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Inclusions:
                  </p>
                  {service.deliverables.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-[#1d4ed8] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-[#0b1b38] bg-slate-100 hover:bg-[#0b1b38] hover:text-white rounded transition-colors text-center border border-slate-200 hover:border-[#0b1b38]"
                >
                  Enquire for {service.title}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
