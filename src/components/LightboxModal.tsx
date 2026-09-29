import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Camera } from 'lucide-react';
import { PortfolioItem } from '../data/portfolio';

interface LightboxModalProps {
  item: PortfolioItem | null;
  rateCardUrl?: string | null;
  rateCardTitle?: string | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  hasNext?: boolean;
  hasPrev?: boolean;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  rateCardUrl,
  rateCardTitle,
  onClose,
  onNext,
  onPrev,
  hasNext = false,
  hasPrev = false,
}) => {
  const isOpen = Boolean(item || rateCardUrl);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' && onNext && hasNext) {
        onNext();
      } else if (e.key === 'ArrowLeft' && onPrev && hasPrev) {
        onPrev();
      }
    },
    [onClose, onNext, onPrev, hasNext, hasPrev]
  );

  useEffect(() => {
    if (!isOpen) return;
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item ? item.title : rateCardTitle || 'Image View'}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6 md:p-8 animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Top bar controls */}
      <div
        className="absolute top-4 right-4 z-20 flex items-center gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close viewer"
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-[#38bdf8]"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Prev button */}
      {hasPrev && onPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Previous photograph"
          className="absolute left-3 md:left-6 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-[#38bdf8]"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Next button */}
      {hasNext && onNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Next photograph"
          className="absolute right-3 md:right-6 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-[#38bdf8]"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Main content modal container */}
      <div
        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Rate card viewer mode */}
        {rateCardUrl ? (
          <div className="flex flex-col items-center max-h-[85vh] w-full">
            <div className="relative overflow-hidden rounded-lg border border-white/10 shadow-2xl max-h-[80vh]">
              <img
                src={rateCardUrl}
                alt={rateCardTitle || 'Tublack Imagery Rate Card'}
                className="max-h-[78vh] w-auto object-contain mx-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            {rateCardTitle && (
              <div className="mt-4 text-center">
                <h3 className="font-serif text-xl font-medium text-white">{rateCardTitle}</h3>
                <p className="text-xs text-[#94a3b8] mt-1">Click outside or press ESC to return</p>
              </div>
            )}
          </div>
        ) : item ? (
          /* Portfolio photograph mode */
          <div className="flex flex-col w-full max-h-[88vh]">
            <div className="relative overflow-hidden rounded-lg border border-white/10 bg-[#070e1a] shadow-2xl flex items-center justify-center max-h-[72vh]">
              <img
                src={item.image}
                alt={item.title}
                className="max-h-[70vh] w-auto max-w-full object-contain mx-auto"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Photo metadata footer */}
            <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm text-[#e2e8f0]">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#60a5fa] uppercase tracking-wider font-semibold mb-1">
                  <span>{item.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{item.year}</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#94a3b8] mt-0.5 max-w-xl">
                  {item.description}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-[#94a3b8] mt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#38bdf8]" />
                  <span>{item.location}</span>
                </div>
              </div>

              {/* Technical EXIF Info */}
              {item.exif && (
                <div className="shrink-0 rounded bg-white/5 border border-white/10 px-3.5 py-2 text-right">
                  <div className="flex items-center gap-1.5 text-[11px] text-[#38bdf8] uppercase font-medium justify-end">
                    <Camera className="w-3.5 h-3.5" />
                    <span>Technical EXIF</span>
                  </div>
                  <div className="text-xs text-white mt-1 font-mono">
                    {item.exif.camera} · {item.exif.lens}
                  </div>
                  <div className="text-[11px] text-[#94a3b8] font-mono mt-0.5">
                    {item.exif.aperture} · {item.exif.shutter} · ISO {item.exif.iso}
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
