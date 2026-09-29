import fs from 'fs';
import path from 'path';

const publicDir = path.resolve('public');
const imagesDir = path.join(publicDir, 'images');
const rateCardsDir = path.join(imagesDir, 'rate-cards');

fs.mkdirSync(rateCardsDir, { recursive: true });

function createPhotoSvg({
  title,
  subtitle,
  category,
  accentColor = '#60a5fa',
  bgGradient = ['#0c1c38', '#060d17'],
  aspectRatio = '4/3',
}) {
  let [w, h] = [800, 600];
  if (aspectRatio === '16/9') [w, h] = [960, 540];
  if (aspectRatio === '3/4') [w, h] = [600, 800];
  if (aspectRatio === '1/1') [w, h] = [700, 700];

  const cameraIcon = `
    <rect x="${w/2 - 40}" y="${h/2 - 30}" width="80" height="60" rx="10" fill="none" stroke="${accentColor}" stroke-width="2" opacity="0.6"/>
    <circle cx="${w/2}" cy="${h/2}" r="18" fill="none" stroke="${accentColor}" stroke-width="2.5" opacity="0.8"/>
    <circle cx="${w/2}" cy="${h/2}" r="8" fill="${accentColor}" opacity="0.3"/>
    <rect x="${w/2 - 20}" y="${h/2 - 40}" width="20" height="10" rx="3" fill="${accentColor}" opacity="0.5"/>
  `;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="100%" height="100%">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${bgGradient[0]}"/>
      <stop offset="50%" stop-color="#091424"/>
      <stop offset="100%" stop-color="${bgGradient[1]}"/>
    </linearGradient>
    <radialGradient id="vignette" cx="50%" cy="50%" r="60%">
      <stop offset="50%" stop-color="#000000" stop-opacity="0"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0.8"/>
    </radialGradient>
    <pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse">
      <circle cx="20" cy="20" r="0.7" fill="#fff" opacity="0.04"/>
      <circle cx="70" cy="40" r="0.8" fill="#fff" opacity="0.03"/>
      <circle cx="45" cy="80" r="0.6" fill="#fff" opacity="0.05"/>
      <circle cx="85" cy="15" r="0.5" fill="#fff" opacity="0.03"/>
      <circle cx="10" cy="65" r="0.7" fill="#fff" opacity="0.04"/>
    </pattern>
  </defs>

  <!-- Background base -->
  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  
  <!-- Subtle photographic framing & golden ratio lines -->
  <line x1="${w*0.33}" y1="0" x2="${w*0.33}" y2="${h}" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
  <line x1="${w*0.66}" y1="0" x2="${w*0.66}" y2="${h}" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
  <line x1="0" y1="${h*0.33}" x2="${w}" y2="${h*0.33}" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
  <line x1="0" y1="${h*0.66}" x2="${w}" y2="${h*0.66}" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
  
  <!-- Film Grain Pattern -->
  <rect width="${w}" height="${h}" fill="url(#grain)"/>

  <!-- Center Framing Elements -->
  <rect x="30" y="30" width="${w - 60}" height="${h - 60}" fill="none" stroke="${accentColor}" stroke-width="1" opacity="0.2"/>
  <rect x="40" y="40" width="${w - 80}" height="${h - 80}" fill="none" stroke="#ffffff" stroke-width="0.5" opacity="0.1"/>

  <!-- Crosshair viewfinder markers -->
  <path d="M 40 55 L 40 40 L 55 40" fill="none" stroke="${accentColor}" stroke-width="1.5" opacity="0.8"/>
  <path d="M ${w - 55} 40 L ${w - 40} 40 L ${w - 40} 55" fill="none" stroke="${accentColor}" stroke-width="1.5" opacity="0.8"/>
  <path d="M 40 ${h - 55} L 40 ${h - 40} L 55 ${h - 40}" fill="none" stroke="${accentColor}" stroke-width="1.5" opacity="0.8"/>
  <path d="M ${w - 55} ${h - 40} L ${w - 40} ${h - 40} L ${w - 40} ${h - 55}" fill="none" stroke="${accentColor}" stroke-width="1.5" opacity="0.8"/>

  <!-- Icon Graphic -->
  ${cameraIcon}

  <!-- Vignette -->
  <rect width="${w}" height="${h}" fill="url(#vignette)"/>

  <!-- Bottom Editorial Typography Overlay -->
  <rect x="0" y="${h - 110}" width="${w}" height="110" fill="url(#bg)" opacity="0.95"/>
  <line x1="40" y1="${h - 110}" x2="${w - 40}" y2="${h - 110}" stroke="${accentColor}" stroke-width="0.8" opacity="0.4"/>

  <text x="50" y="${h - 80}" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="600" letter-spacing="3" fill="${accentColor}" text-transform="uppercase">${category} · LAGOS</text>
  <text x="50" y="${h - 48}" font-family="'Cormorant Garamond', Georgia, serif" font-size="24" font-weight="600" fill="#f8fafc">${title}</text>
  <text x="50" y="${h - 26}" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" fill="#94a3b8">${subtitle}</text>

  <!-- Tublack Stamp with signature style -->
  <text x="${w - 50}" y="${h - 45}" text-anchor="end" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="700" letter-spacing="2" fill="#ffffff">TuBLack</text>
  <text x="${w - 50}" y="${h - 28}" text-anchor="end" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" letter-spacing="4" fill="${accentColor}">IMAGERY</text>
</svg>`;
}

function createRateCardSvg({
  title,
  tier,
  tagline,
  idealFor,
  features,
  accent = '#60a5fa',
  bg = ['#0c1b38', '#070e1a']
}) {
  const w = 720;
  const h = 980;

  const featureItems = features.map((f, i) => `
    <g transform="translate(60, ${410 + i * 54})">
      <circle cx="10" cy="10" r="4" fill="${accent}" opacity="0.9"/>
      <text x="32" y="14" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" fill="#f8fafc" font-weight="400">${f}</text>
    </g>
  `).join('');

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="100%" height="100%">
  <defs>
    <linearGradient id="rcbg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${bg[0]}"/>
      <stop offset="40%" stop-color="#0a172e"/>
      <stop offset="100%" stop-color="${bg[1]}"/>
    </linearGradient>
    <radialGradient id="rcglow" cx="50%" cy="15%" r="65%">
      <stop offset="0%" stop-color="#1d4ed8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- Background -->
  <rect width="${w}" height="${h}" fill="url(#rcbg)"/>
  <rect width="${w}" height="${h}" fill="url(#rcglow)"/>

  <!-- Outer Editorial Borders in Navy & Sky -->
  <rect x="25" y="25" width="${w - 50}" height="${h - 50}" fill="none" stroke="${accent}" stroke-width="1.2" opacity="0.4"/>
  <rect x="35" y="35" width="${w - 70}" height="${h - 70}" fill="none" stroke="#ffffff" stroke-width="0.5" opacity="0.15"/>

  <!-- Corner embellishments -->
  <path d="M 35 55 L 35 35 L 55 35" fill="none" stroke="${accent}" stroke-width="2"/>
  <path d="M ${w - 55} 35 L ${w - 35} 35 L ${w - 35} 55" fill="none" stroke="${accent}" stroke-width="2"/>
  <path d="M 35 ${h - 55} L 35 ${h - 35} L 55 ${h - 35}" fill="none" stroke="${accent}" stroke-width="2"/>
  <path d="M ${w - 55} ${h - 35} L ${w - 35} ${h - 35} L ${w - 35} ${h - 55}" fill="none" stroke="${accent}" stroke-width="2"/>

  <!-- Header Branding with TuBLack IMAGERY -->
  <text x="${w/2}" y="85" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="28" letter-spacing="4" fill="#ffffff" font-weight="800">TuBLack</text>
  <text x="${w/2}" y="106" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" letter-spacing="6" fill="${accent}" font-weight="600" text-transform="uppercase">IMAGERY · LAGOS</text>

  <line x1="80" y1="135" x2="${w - 80}" y2="135" stroke="${accent}" stroke-width="0.8" opacity="0.4"/>

  <!-- Package Tier & Title -->
  <text x="${w/2}" y="185" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" letter-spacing="4" fill="${accent}" font-weight="600" text-transform="uppercase">${tier}</text>
  <text x="${w/2}" y="240" text-anchor="middle" font-family="'Cormorant Garamond', Georgia, serif" font-size="44" font-weight="600" fill="#ffffff">${title}</text>
  <text x="${w/2}" y="280" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" fill="#cbd5e1" font-style="italic">"${tagline}"</text>

  <!-- Ideal For pill text -->
  <rect x="${w/2 - 190}" y="315" width="380" height="34" rx="4" fill="#ffffff" fill-opacity="0.06" stroke="${accent}" stroke-width="0.8" stroke-opacity="0.4"/>
  <text x="${w/2}" y="337" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" fill="#e2e8f0">${idealFor}</text>

  <!-- Divider -->
  <line x1="60" y1="380" x2="${w - 60}" y2="380" stroke="#ffffff" stroke-width="0.5" opacity="0.1"/>
  <text x="60" y="398" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" letter-spacing="2" fill="${accent}" font-weight="600" text-transform="uppercase">PACKAGE DELIVERABLES</text>

  <!-- Features list -->
  ${featureItems}

  <!-- Footer / Consultation Callout -->
  <rect x="50" y="${h - 170}" width="${w - 100}" height="95" rx="6" fill="#081426" stroke="${accent}" stroke-width="0.8" stroke-opacity="0.4"/>
  <text x="${w/2}" y="${h - 135}" text-anchor="middle" font-family="'Cormorant Garamond', Georgia, serif" font-size="20" fill="#ffffff" font-weight="600">Customized Quotes &amp; Destination Availability</text>
  <text x="${w/2}" y="${h - 108}" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" fill="#94a3b8">Every occasion is unique. Contact us to tailor hours, locations, or deliverables.</text>

  <!-- Bottom Contact note -->
  <text x="${w/2}" y="${h - 48}" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#64748b" letter-spacing="1">hello@tublackimagery.com · Lagos, Nigeria · +234 800 000 0000</text>
</svg>`;
}

const photoAssets = [
  {
    file: 'hero.jpg',
    svgFile: 'hero.svg',
    title: 'The Royal Wedding Soirée',
    subtitle: 'Capturing unconditional celebration and romance in Victoria Island',
    category: 'Weddings',
    aspectRatio: '16/9',
    accentColor: '#60a5fa',
    bgGradient: ['#0d1d3b', '#060d17']
  },
  {
    file: 'about.jpg',
    svgFile: 'about.svg',
    title: 'Behind The Lens',
    subtitle: 'Intentional storytelling, authentic emotion, and creative craft',
    category: 'Studio',
    aspectRatio: '4/3',
    accentColor: '#38bdf8',
    bgGradient: ['#0b1a33', '#050a12']
  },
  {
    file: 'wedding-01.jpg',
    svgFile: 'wedding-01.svg',
    title: 'Adeola & Babatunde',
    subtitle: 'Eko Hotel & Suites Grand Ballroom, Lagos',
    category: 'Weddings',
    aspectRatio: '4/3',
    accentColor: '#60a5fa',
    bgGradient: ['#0e1e3d', '#070e1a']
  },
  {
    file: 'wedding-02.jpg',
    svgFile: 'wedding-02.svg',
    title: 'The Yoruba Engagement',
    subtitle: 'Rich Aso-Ebi, coral beads & royal heritage',
    category: 'Weddings',
    aspectRatio: '3/4',
    accentColor: '#38bdf8',
    bgGradient: ['#0a1830', '#050c17']
  },
  {
    file: 'wedding-03.jpg',
    svgFile: 'wedding-03.svg',
    title: 'Intimate Coastal Vows',
    subtitle: 'Landmark Beach golden hour romance',
    category: 'Weddings',
    aspectRatio: '4/3',
    accentColor: '#60a5fa',
    bgGradient: ['#0b1a36', '#060e1c']
  },
  {
    file: 'birthday-01.jpg',
    svgFile: 'birthday-01.svg',
    title: 'The 30th Milestone Soirée',
    subtitle: 'Victoria Island rooftop celebration & candlelit moments',
    category: 'Birthdays',
    aspectRatio: '3/4',
    accentColor: '#38bdf8',
    bgGradient: ['#0c1a33', '#060d19']
  },
  {
    file: 'birthday-02.jpg',
    svgFile: 'birthday-02.svg',
    title: 'Golden Jubilee Gala',
    subtitle: 'Ikoyi private residence 50th birthday dinner',
    category: 'Birthdays',
    aspectRatio: '4/3',
    accentColor: '#60a5fa',
    bgGradient: ['#0b1830', '#050c18']
  },
  {
    file: 'birthday-03.jpg',
    svgFile: 'birthday-03.svg',
    title: 'Joy & Midnight Toast',
    subtitle: 'High energy birthday celebration with closest friends',
    category: 'Birthdays',
    aspectRatio: '4/3',
    accentColor: '#38bdf8',
    bgGradient: ['#0d1d3a', '#060f1e']
  },
  {
    file: 'portrait-01.jpg',
    svgFile: 'portrait-01.svg',
    title: 'The Creative Director',
    subtitle: 'Editorial portrait in Lagos creative studio',
    category: 'Portraits',
    aspectRatio: '3/4',
    accentColor: '#60a5fa',
    bgGradient: ['#0a172e', '#050a14']
  },
  {
    file: 'portrait-02.jpg',
    svgFile: 'portrait-02.svg',
    title: 'Radiance & Expression',
    subtitle: 'Natural studio lighting and organic skin textures',
    category: 'Portraits',
    aspectRatio: '3/4',
    accentColor: '#38bdf8',
    bgGradient: ['#0c1b36', '#060d1a']
  },
  {
    file: 'portrait-03.jpg',
    svgFile: 'portrait-03.svg',
    title: 'Executive Monolith',
    subtitle: 'Lagos corporate leadership & board portrait',
    category: 'Portraits',
    aspectRatio: '4/3',
    accentColor: '#93c5fd',
    bgGradient: ['#091529', '#040912']
  },
  {
    file: 'event-01.jpg',
    svgFile: 'event-01.svg',
    title: 'Lagos Cultural & Art Soirée',
    subtitle: 'Exclusive gallery opening and private exhibition',
    category: 'Events',
    aspectRatio: '16/9',
    accentColor: '#60a5fa',
    bgGradient: ['#0b1933', '#060e1c']
  },
  {
    file: 'event-02.jpg',
    svgFile: 'event-02.svg',
    title: 'Annual Corporate Gala',
    subtitle: 'Civic Centre Victoria Island awards night',
    category: 'Events',
    aspectRatio: '4/3',
    accentColor: '#38bdf8',
    bgGradient: ['#0a1830', '#050c17']
  },
  {
    file: 'couple-01.jpg',
    svgFile: 'couple-01.svg',
    title: 'Lekki Canopy Boardwalk',
    subtitle: 'Natural connection surrounded by serene greenery',
    category: 'Couples',
    aspectRatio: '4/3',
    accentColor: '#60a5fa',
    bgGradient: ['#08172b', '#040b15']
  },
  {
    file: 'couple-02.jpg',
    svgFile: 'couple-02.svg',
    title: 'Ilashe Private Beach Twilight',
    subtitle: 'Candid laughter against the Atlantic horizon',
    category: 'Couples',
    aspectRatio: '16/9',
    accentColor: '#38bdf8',
    bgGradient: ['#0e1f3d', '#070f1e']
  },
  {
    file: 'lifestyle-01.jpg',
    svgFile: 'lifestyle-01.svg',
    title: 'Lagos Urban Aesthetic',
    subtitle: 'Architectural lines and refined contemporary styling',
    category: 'Lifestyle',
    aspectRatio: '4/3',
    accentColor: '#60a5fa',
    bgGradient: ['#0b1a33', '#050d1a']
  },
  {
    file: 'lifestyle-02.jpg',
    svgFile: 'lifestyle-02.svg',
    title: 'Editorial Street Elegance',
    subtitle: 'High street Victoria Island movement & light',
    category: 'Lifestyle',
    aspectRatio: '3/4',
    accentColor: '#38bdf8',
    bgGradient: ['#0a172f', '#050b16']
  },
  {
    file: 'prewedding-01.jpg',
    svgFile: 'prewedding-01.svg',
    title: 'Cinema at Twilight',
    subtitle: 'Ikoyi bridge pre-wedding editorial story',
    category: 'Pre-Wedding',
    aspectRatio: '16/9',
    accentColor: '#60a5fa',
    bgGradient: ['#0d1c38', '#070e1b']
  }
];

photoAssets.forEach(p => {
  const svgContent = createPhotoSvg(p);
  fs.writeFileSync(path.join(imagesDir, p.svgFile), svgContent);
  fs.writeFileSync(path.join(imagesDir, p.file), svgContent);
});

const rateCards = [
  {
    file: 'birthday-rate-card.jpg',
    svgFile: 'birthday-rate-card.svg',
    tier: 'Celebration Collection',
    title: 'Birthday Shoots',
    tagline: 'Energy, personality, and unforgettable milestone memories.',
    idealFor: 'Milestone Birthdays · Private Dinners · Studio & Outdoor Shoots',
    features: [
      'Up to 3 hours of dedicated professional coverage',
      'Lead photographer + creative assistant',
      'Studio or location of your choice across Lagos',
      '40+ professionally color-graded high-resolution photos',
      'Online private gallery with 1-year cloud access',
      'Same-week preview delivery (within 72 hours)',
      'High-resolution print release included'
    ],
    accent: '#38bdf8',
    bg: ['#0b1b38', '#060e1a']
  },
  {
    file: 'wedding-rate-card-1.jpg',
    svgFile: 'wedding-rate-card-1.svg',
    tier: 'Classic Collection',
    title: 'Wedding Package I',
    tagline: 'Timeless coverage for your sacred celebration and reception.',
    idealFor: 'Traditional Weddings or White Wedding Reception Coverage',
    features: [
      'Up to 8 hours of comprehensive wedding day coverage',
      '2 professional photographers (Lead + Second Shooter)',
      'Pre-wedding consultation & wedding timeline planning',
      '250+ fully retouched high-resolution images',
      'Cinematic highlights slide show & private web gallery',
      'Custom luxury 20-page 10x10 leather-bound photo album',
      'Turnaround within 3 to 4 weeks with expedited sneak peek'
    ],
    accent: '#60a5fa',
    bg: ['#0d2042', '#070f1e']
  },
  {
    file: 'wedding-rate-card-2.jpg',
    svgFile: 'wedding-rate-card-2.svg',
    tier: 'Heirloom Grand Collection',
    title: 'Wedding Package II',
    tagline: 'The ultimate royal documentation from preparation to the afterparty.',
    idealFor: 'Multi-Day Celebrations, Traditional + White Wedding Grandeur',
    features: [
      'Full-day coverage across both Traditional & White Wedding',
      '3 photographers (Lead, Second Shooter, Detail Specialist)',
      'Complimentary Pre-Wedding Couple Shoot in Lagos',
      '500+ master retouched high-resolution images',
      'Grand 30-page 12x12 bespoke Italian leather heirloom album',
      'Two duplicate 8x8 parent albums for both families',
      'Luxury branded USB keepsake box + private VIP cloud vault'
    ],
    accent: '#93c5fd',
    bg: ['#0e2246', '#081224']
  }
];

rateCards.forEach(rc => {
  const svg = createRateCardSvg(rc);
  fs.writeFileSync(path.join(rateCardsDir, rc.svgFile), svg);
  fs.writeFileSync(path.join(rateCardsDir, rc.file), svg);
});

console.log('Successfully updated assets with logo brand colors!');
