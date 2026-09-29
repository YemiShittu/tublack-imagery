
export const SITE_CONFIG = {
  brandName: 'Tublack Imagery',
  tagline: 'Photography that tells your story.',
  location: 'Lagos, Nigeria',
  studioAreas: 'Nigeria',
  email: 'info@tublackimagery.com',
  phoneNumbers: [
    {
      display: '+234 808 427 5652',
      whatsapp: '2348084275652',
    },
    {
      display: '+234 902 288 1138',
      whatsapp: '2349022881138',
    },
  ],
  whatsappNumber: '2348084275652',
  get whatsappUrl() {
    const message = encodeURIComponent(
      "Hello Tublack Imagery! I'm interested in booking a photography shoot in Lagos. I'd love to discuss packages and availability."
    );
    return `https://wa.me/${this.whatsappNumber}?text=${message}`;
  },
  socials: [
    { name: 'Instagram', handle: '@tublackimagery', href: 'https://instagram.com/tublackimagery' },
    { name: 'TikTok', handle: '@tublackimagery', href: 'https://tiktok.com/@tublackimagery' },
    { name: 'WhatsApp', handle: '+234 XXXXXXXXXX', href: `https://wa.me/234XXXXXXXXXX` },
  ],
  workingHours: 'Mon - Sun: 8:00 AM - 7:00 PM'
};
