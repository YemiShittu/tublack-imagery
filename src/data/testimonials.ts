export interface Testimonial {
  id: string;
  quote: string;
  shootType: string;
  date: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote:
      'Tublack Imagery captured our wedding exactly the way we hoped. Thank you for this, the pictures are so beautiful.',
    shootType: 'Wedding & Traditional Engagement',
    date: 'September 2026',
  },
  {
    id: 't2',
    quote:
      "People haven't stopped talking about the pictures. The way you captured the essence of the event was phenomenal. I can't thank you enough for making my 50th birthday so memorable.",
    shootType: 'Milestone 50th Birthday',
    
    date: 'January 2026',
  },
  {
    id: 't3',
    quote:
      'I needed executive portraits that felt authentic rather than stiff or generic. Tublack Imagery understood the balance immediately. The lighting, tone, and direction made me feel completely relaxed in front of the lens.',
    shootType: 'Executive Portrait Session',
    date: 'February 2026',
  },
  {
    id: 't4',
    quote:
      "Our pre-wedding shoot was one of the most memorable afternoons we’ve had. They found angles and the pictures are so beautiful. OMG I'm loving this",
    shootType: 'Pre-Wedding Couple Session',
    date: 'November 2025',
  },
];
