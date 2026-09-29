/**
 * Tublack Imagery - Premium Photography Website
 * Lagos, Nigeria
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandIntro } from './components/BrandIntro';
import { Portfolio } from './components/Portfolio';
import { Services } from './components/Services';
import { RateCards } from './components/RateCards';
import { About } from './components/About';
import { WhyTublack } from './components/WhyTublack';
import { Testimonials } from './components/Testimonials';
import { ContactForm } from './components/ContactForm';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { PORTFOLIO_ITEMS, PortfolioItem } from './data/portfolio';
import { RateCardItem } from './data/rateCards';

export default function App() {
  const [selectedPhoto, setSelectedPhoto] = useState<PortfolioItem | null>(null);
  const [selectedRateCard, setSelectedRateCard] = useState<RateCardItem | null>(null);
  const [inquiryService, setInquiryService] = useState<string>('Wedding');

  // Smooth scroll helper
  const scrollTo = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Lightbox Next/Prev handlers
  const currentPhotoIndex = selectedPhoto
    ? PORTFOLIO_ITEMS.findIndex((p) => p.id === selectedPhoto.id)
    : -1;

  const handleNextPhoto = () => {
    if (currentPhotoIndex >= 0 && currentPhotoIndex < PORTFOLIO_ITEMS.length - 1) {
      setSelectedPhoto(PORTFOLIO_ITEMS[currentPhotoIndex + 1]);
    }
  };

  const handlePrevPhoto = () => {
    if (currentPhotoIndex > 0) {
      setSelectedPhoto(PORTFOLIO_ITEMS[currentPhotoIndex - 1]);
    }
  };

  const handleOpenFeaturedItem = (itemId: string) => {
    const item = PORTFOLIO_ITEMS.find((p) => p.id === itemId);
    if (item) {
      setSelectedPhoto(item);
    }
  };

  const handleSelectServiceFromCard = (serviceTitle: string) => {
    setInquiryService(serviceTitle);
    scrollTo('contact');
  };

  return (
    <div className="min-h-screen bg-[#070e1a] text-[#eaf0f8] flex flex-col font-sans selection:bg-[#1d4ed8] selection:text-white">
      {/* Sticky Navigation */}
      <Navbar onBookClick={() => scrollTo('contact')} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onBookClick={() => scrollTo('contact')}
          onPortfolioClick={() => scrollTo('portfolio')}
        />

        {/* Brand Statement / Intro */}
        <BrandIntro />

        {/* Major Portfolio Gallery */}
        <Portfolio onSelectPhoto={(photo) => setSelectedPhoto(photo)} />

        {/* Services Section */}
        <Services onSelectService={handleSelectServiceFromCard} />

        {/* Rate Cards Section */}
        <RateCards
          onViewRateCard={(card) => setSelectedRateCard(card)}
          onDiscussShoot={() => scrollTo('contact')}
        />

        {/* About Section */}
        <About />

        {/* Why Tublack Imagery */}
        <WhyTublack />

        {/* Client Testimonials */}
        <Testimonials />

        {/* Contact / Booking Form */}
        <ContactForm initialService={inquiryService} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action */}
      <WhatsAppButton />

      {/* Lightbox / High-Resolution Modal */}
      <LightboxModal
        item={selectedPhoto}
        rateCardUrl={selectedRateCard?.image}
        rateCardTitle={selectedRateCard?.name}
        onClose={() => {
          setSelectedPhoto(null);
          setSelectedRateCard(null);
        }}
        onNext={handleNextPhoto}
        onPrev={handlePrevPhoto}
        hasNext={currentPhotoIndex >= 0 && currentPhotoIndex < PORTFOLIO_ITEMS.length - 1}
        hasPrev={currentPhotoIndex > 0}
      />
    </div>
  );
}
