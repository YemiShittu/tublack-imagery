import React from 'react';
import { MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../data/config';

export const WhatsAppButton: React.FC = () => {
  return (
    <aside aria-label="Quick WhatsApp contact" className="fixed bottom-6 right-6 z-30">
      <a
        href={SITE_CONFIG.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Tublack Imagery"
        className="group flex items-center gap-2.5 px-4 py-3 bg-[#0b1b38] hover:bg-[#142850] text-white border border-slate-700/60 hover:border-sky-400 rounded-full shadow-xl transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#0b1b38]"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#25D366]"></span>
        </span>
        <MessageCircle className="w-4 h-4 text-[#25D366]" />
        <span className="text-xs font-medium tracking-wide pr-1">Chat on WhatsApp</span>
      </a>
    </aside>
  );
};
