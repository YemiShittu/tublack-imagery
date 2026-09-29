import birthdays1 from '../assets/optimized/birthdays1.JPG';
import birthdays2 from '../assets/optimized/birthdays2.JPG';
import birthdays3 from '../assets/optimized/birthdays3.JPG';

import couples1 from '../assets/optimized/couples1.jpg';
import couples2 from '../assets/optimized/couples2.jpg';
import couples3 from '../assets/optimized/couples3.jpg';

import events1 from '../assets/optimized/events1.jpg';
import events2 from '../assets/optimized/events2.jpg';

import lifestyle1 from '../assets/optimized/lifestyle1.JPG';
import lifestyle2 from '../assets/optimized/lifestyle2.JPG';

import portraits1 from '../assets/optimized/portraits1.JPG';
import portraits2 from '../assets/optimized/portraits2.jpg';
import portraits3 from '../assets/optimized/portraits3.jpg';

import weddings1 from '../assets/optimized/weddings1.jpg';
import weddings2 from '../assets/optimized/weddings2.jpg';
import weddings3 from '../assets/optimized/weddings3.jpg';

export interface PortfolioItem {
  id: string;
  category:
    | 'Weddings'
    | 'Birthdays'
    | 'Portraits'
    | 'Events'
    | 'Couples'
    | 'Lifestyle';

  image: string;

  aspect: 'wide' | 'tall' | 'square';

}

export const PORTFOLIO_CATEGORIES = [
  'All',
  'Weddings',
  'Birthdays',
  'Portraits',
  'Events',
  'Couples',
  'Lifestyle',
] as const;

export type CategoryFilter = (typeof PORTFOLIO_CATEGORIES)[number];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'p1',
    category: 'Weddings',
    image: weddings1,
    aspect: 'tall',
  
  },

  {
    id: 'p2',
    category: 'Weddings',
    image: weddings2,
    aspect: 'wide',
  
  },

  {
    id: 'p3',
    category: 'Birthdays',
    image: birthdays1,
    aspect: 'tall',
  },

  {
    id: 'p4',
    category: 'Portraits',
    image: portraits1,
    aspect: 'tall',
  },

  {
    id: 'p5',
    category: 'Birthdays',
    image: birthdays2,
    aspect: 'tall',
  },

  {
    id: 'p6',
    category: 'Weddings',
    image: weddings3,
    aspect: 'tall',
  },

  {
    id: 'p7',
    category: 'Events',
    image: events1,
    aspect: 'wide',
  },

  {
    id: 'p8',
    category: 'Couples',
    image: couples1,
    aspect: 'tall',
  },

  {
    id: 'p9',
    category: 'Portraits',
    image: portraits2,
    aspect: 'tall',
  },

  {
    id: 'p10',
    category: 'Couples',
    image: couples2,
    aspect: 'tall',
  },

  {
    id: 'p11',
    category: 'Birthdays',
    image: birthdays3,
    aspect: 'tall',
  },

  {
    id: 'p12',
    category: 'Lifestyle',
    image: lifestyle1,
    aspect: 'tall',
  },

  {
    id: 'p13',
    category: 'Portraits',
    image: portraits3,
    aspect: 'tall',
  },

  {
    id: 'p14',
    category: 'Events',
    image: events2,
    aspect: 'tall',

  },

  {
    id: 'p15',
    category: 'Lifestyle',
    image: lifestyle2,
    aspect: 'tall',
  },

  {
    id: 'p16',
    category: 'Couples',
    image: couples3,
    aspect: 'tall',
    
  },
];