export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  idealFor: string;
  previewImage: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'weddings',
    number: '01',
    title: 'Wedding Photography',
    tagline: 'Timeless visuals of your sacred union.',
    description:
      'Capture the raw emotion, delicate details, and grand celebrations of your wedding day. From preparations and emotional vows to vibrant ceremonies, we preserve every chapter with perfection.',
    deliverables: [
      'Comprehensive full-day or multi-day coverage',
      '2 dedicated photographer and 2 dedicated videographers',
      'High-resolution retouched master gallery',
    ],
    idealFor: 'White Weddings, Traditional Engagements & Destination Ceremonies',
    previewImage: '/images/wedding-01.jpg',
  },
  {
    id: 'birthdays',
    number: '02',
    title: 'Birthday Photography',
    tagline: 'Celebrate your life, personality, and milestones.',
    description:
      'Professional coverage for milestone birthdays, dinners, and celebrations. We capture the laughter, energy, candid camaraderie, and your personal style.',
    deliverables: [
      'Dedicated event & portrait session coverage',
      '1-Min reel capturing the highlights of your celebration',
      'Perfectly edited soft copies',
    ],
    idealFor: 'Milestone 21st, 30th, 40th, 50th & 60th Jubilees, Dinners & Parties',
    previewImage: '/images/birthday-01.jpg',
  },
  {
    id: 'portraits',
    number: '03',
    title: 'Portrait Photography',
    tagline: 'Artistic and expressive portraits.',
    description:
      'Personal, executive, and creative portrait sessions designed around your individuality. Whether for career elevation or personal milestones, we capture the perfect images that command respect and convey character.',
    deliverables: [
      'Studio or on-location sessions',
      'Creative direction & guidance',
      'High-end magazine-grade skin and tone retouching',
    ],
    idealFor: 'Executives, Creatives, Thought Leaders & Personal Branding',
    previewImage: '/images/portrait-01.jpg',
  },
  {
    id: 'events',
    number: '04',
    title: 'Event Photography',
    tagline: 'Crisp coverage of momentous gatherings.',
    description:
      'Professional coverage for corporate events, cultural exhibitions, product launches, and high-profile social events. We document atmosphere, key speakers, VIP interactions, and brand moments.',
    deliverables: [
      'Multi-angle documentation and ambient storytelling',
      'High-resolution library formatted for print & digital PR',
      'Dedicated on-site lead photographer',
    ],
    idealFor: 'Corporate Galas, Conferences, Brand Launches & Art Soirées',
    previewImage: '/images/event-01.jpg',
  },
  {
    id: 'pre-wedding',
    number: '05',
    title: 'Pre-Wedding Photography',
    tagline: 'Visual poetry that tells your story.',
    description:
      'Beautifully planned couple sessions that celebrate your bond before the altar. We specialize in creating cinema grade romantic portraits.',
    deliverables: [
      'Curated 2-to-3 location shoot schedule',
      'Display-ready images for wedding invitations & receptions',
      'Digital guestbook album layout',
    ],
    idealFor: 'Engaged Couples, Save-the-Date Campaigns & Rehearsal Stories',
    previewImage: '/images/prewedding-01.jpg',
  },
  {
    id: 'lifestyle',
    number: '06',
    title: 'Lifestyle Photography',
    tagline: 'Editorial narratives for individuals and conscious brands.',
    description:
      'Natural, modern, and editorial photography for personal archives, digital creators, and artisanal fashion labels. We craft visual stories that resonate with your audience and elevate your brand identity.',
    deliverables: [
      'Editorial lookbook & storytelling captures',
      'Natural light and location versatility',
      'Web and high-res print deliverables',
    ],
    idealFor: 'Fashion Brands, Creators, Lifestyle Narratives & Lookbooks',
    previewImage: '/images/lifestyle-01.jpg',
  },
];
