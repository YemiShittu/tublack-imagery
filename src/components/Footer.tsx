import React from 'react';
import { BrandLogo } from './BrandLogo';
import { SITE_CONFIG } from '../data/config';
import { MapPin, Mail, Phone, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Rate Cards', href: '#rate-cards' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#061024] border-t border-slate-800/80 pt-16 sm:pt-20 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-slate-800/80">
          {/* Column 1: Brand & Tagline */}
          <div className="lg:col-span-5">
          <BrandLogo className="w-[170px] sm:w-[200px]" />
            <p className="mt-4 text-sm text-slate-300 font-light max-w-sm leading-relaxed">
              {SITE_CONFIG.tagline}
            </p>
            <p className="mt-2 text-xs text-slate-400">
              Professional photography in Lagos, Nigeria. Specializing in weddings, milestone
              celebrations, and expressive portraits.
            </p>

            {/* Geographic Coverage */}
            <div className="mt-6 flex items-start gap-2 text-xs text-slate-300">
              <MapPin className="w-4 h-4 text-[#60a5fa] shrink-0 mt-0.5" />
              <span>Studio &amp; on-location sessions across {SITE_CONFIG.studioAreas}</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.25em] text-white font-medium mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-[#60a5fa] transition-colors duration-150 py-0.5 inline-block text-slate-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Direct Inquiries */}
          <div className="lg:col-span-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-white font-medium mb-4">
              Direct Inquiries
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#60a5fa]" />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-white transition-colors text-slate-300"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#60a5fa]" />
                <a
                  href={`tel:${SITE_CONFIG.phoneDisplay}`}
                  className="hover:text-white transition-colors text-slate-300"
                >
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </li>
            </ul>

            {/* Social Media Links */}
            <div className="mt-6 pt-6 border-t border-slate-800/80">
              <p className="text-[11px] uppercase tracking-wider text-slate-400 mb-3">
                Social Channels
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-medium">
                {SITE_CONFIG.socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-[#60a5fa] transition-colors"
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Tublack Imagery. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-1.5 hover:text-[#60a5fa] transition-colors focus-visible:outline-none"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
