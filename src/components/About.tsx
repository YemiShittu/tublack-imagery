import React from 'react';
import { Camera, MapPin, Eye, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-white border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Column */}
          <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-xl">
            <video
                  src="src/assets/about.mp4"
                  autoPlay
                  muted
                  playsInline
                  onTimeUpdate={(e) => {
                    if (e.currentTarget.currentTime >= 10) {
                      e.currentTarget.currentTime = 0;
                      e.currentTarget.play();
                    }
                  }}
                  className="w-full h-full object-cover object-center"
                >
                Your browser does not support video playback.
              </video>

            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

            {/* Discreet badge */}
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-lg bg-[#0b1b38]/90 backdrop-blur-md border border-white/10 text-white">
              <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-sky-300 whitespace-nowrap">
                <Camera className="w-3.5 h-3.5 shrink-0" />
                <span>Based in Lagos · Capturing across Nigeria &amp; West Africa</span>
              </div>
            </div>
          </div>

            {/* Subtle decorative geometric border offset */}
            <div className="hidden sm:block absolute -bottom-4 -right-4 w-full h-full border border-slate-200 rounded-xl -z-10 pointer-events-none" />
          </div>

          {/* Editorial Narrative Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-[#1d4ed8] font-semibold mb-3">
              <MapPin className="w-3.5 h-3.5" />
              <span>Lagos, Nigeria</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#0b1b38] font-normal tracking-tight">
              Behind the lens
            </h2>

            <div className="mt-6 space-y-5 text-sm sm:text-base text-slate-600 font-light leading-relaxed">
              <p>
                Tublack Imagery was established with a singular conviction: that the most powerful
                photographs are not manufactured through rigid poses, but discovered in the quiet,
                spontaneous pauses between grand moments.
              </p>

              <p>
                Working out of Lagos, Nigeria, our studio documents weddings, milestone birthdays,
                and portraits with deep appreciation for cultural richness and emotional truth.
              </p>

            </div>

            {/* Studio Values Checklist */}
            <div className="mt-8 pt-8 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
            
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#0b1b38]">
                    Unforced Compositions
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5"><i>
                    "We guide gently rather than dictate, letting your genuine ease shine."
                    </i>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
            
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
