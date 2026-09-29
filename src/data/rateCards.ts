import birthday_rate from '../assets/birthday_rate_card.PNG';
import wedding_rate1 from '../assets/wedding_rate1.png';
import wedding_rate2 from '../assets/wedding_rate2.PNG';
export interface RateCardItem {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  image: string; // The conceptual JPG image
  alt: string;
  description: string;
  highlights: string[];
}

export const RATE_CARDS: RateCardItem[] = [
  {
    id: 'birthday',
    name: 'Birthday Shoots',
    badge: 'Milestone & Celebration',
    tagline: 'Vibrant, authentic documentation of your personal milestone.',
    image: birthday_rate,
    alt: 'Tublack Imagery Birthday Shoots Rate Card Lagos',
    description: 'Perfect for milestone birthdays, private birthday dinners, or luxury studio portraits.',
    highlights: [
      'Dedicated coverage',
      'Studio or location across Lagos',
      'Perfectly edited master images',
    ],
  },
  {
    id: 'wedding-package-1',
    name: 'Platinum & Platinum2 Packages',
    badge: 'The Platinum Wedding Packages',
    tagline: 'Comprehensive, elegant coverage of your sacred day and reception.',
    image: wedding_rate1 ,
    alt: 'Tublack Imagery Wedding Package I Rate Card Lagos',
    description: 'Designed for the full wedding experience.',
    highlights: [
      'Pre Wedding Shoot',
      'Drone Shots',
      '2 Photographers and 2 Videographers',
    ],
  },
  {
    id: 'wedding-package-2',
    name: 'Silver, Gold & Gold II Packages',
    badge: 'Wedding Package II',
    tagline: 'The complete luxury documentation from preparations to grand send-off.',
    image: wedding_rate2,
    alt: 'Tublack Imagery Wedding Package II Heirloom Collection Rate Card Lagos',
    description: 'The pinnacle experience for multi-day Traditional + White wedding celebrations across Lagos or destination.',
    highlights: [
      'Pre Wedding Shoot',
      '2 Photographers and 2 Videographers',
      'Synthetic Photobook & Frame',
    ],
  },
];
