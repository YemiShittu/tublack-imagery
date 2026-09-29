import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Rate Cards', href: '#rate-cards' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
  className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
    isScrolled
      ? 'bg-slate-50/98 backdrop-blur-md border-b border-slate-200 shadow-sm py-2'
      : 'bg-slate-50/95 backdrop-blur-md border-b border-slate-200/70 py-2.5'
  }`}
>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Brand Wordmark / Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            aria-label="Tublack Imagery Home"
            className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b1b38] rounded"
          >
            <BrandLogo className="w-[180px] sm:w-[220px]" />
          </a>

          {/* Zone 2: Navigation Links (Clean text, subtle hover, no pills) */}
          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-7 lg:gap-9 text-xs lg:text-sm font-medium tracking-wide text-slate-600"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="relative py-1 transition-colors duration-150 hover:text-[#0b1b38] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#0b1b38] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary CTA */}
          <div className="flex items-center gap-3">
            <button
              onClick={onBookClick}
              className="hidden sm:inline-flex items-center justify-center gap-1.5 px-4 lg:px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-white bg-[#0b1b38] hover:bg-[#142850] transition-all duration-200 rounded shadow-sm focus-visible:ring-2 focus-visible:ring-[#0b1b38]"
            >
              <span>Book a Shoot</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-sky-300" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
              className="md:hidden p-2 text-[#0b1b38] hover:bg-slate-100 rounded focus-visible:ring-2 focus-visible:ring-[#0b1b38]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-label="Mobile navigation menu"
          className="md:hidden bg-slate-50 border-b border-slate-200 px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top duration-200 shadow-xl"
        >
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-base font-medium text-slate-700 hover:text-[#0b1b38] py-1.5 border-b border-slate-100"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold tracking-wider uppercase text-white bg-[#0b1b38] hover:bg-[#142850] rounded transition-colors shadow-sm"
            >
              <span>Book a Shoot</span>
              <ArrowUpRight className="w-4 h-4 text-sky-300" />
            </button>
          </div>

          <div className="text-[11px] text-slate-500 text-center pt-2">
            Lagos, Nigeria · Victoria Island · Ikoyi · Lekki
          </div>
        </div>
      )}
    </header>
  );
};
