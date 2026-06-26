export const SITE = {
  name: "Raya Elite Home & Office Cleaning Services LLC",
  shortName: "Raya Elite",
  tagline: "An Elite Standard — Every Time",
  phone: "(240) 555-0147",
  email: "info@rayaelitecleaning.com",
  hours: ["Mon–Sat 7AM–6PM", "Sun 8AM–4PM"],
  area: "Maryland & Washington D.C.",
  url: "https://rayaelitecleaning.com",
} as const;

export type NavItem = { label: string; href: string };

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Book", href: "/book" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const TRUST_BADGES = [
  "Google 5-Star Rated",
  "Maryland Licensed",
  "Bonded & Insured",
  "Eco-Friendly",
  "Background-Checked Team",
  "Satisfaction Guarantee",
];

export const FOOTER_SERVICES = [
  "Residential Cleaning",
  "Commercial Cleaning",
  "Move-In / Move-Out",
  "Airbnb Turnover",
  "Embassy & Government",
];

export const FOOTER_COMPANY: { label: string; href: string }[] = [
  { label: "About Raya Elite", href: "/about" },
  { label: "Our Team", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Client Reviews", href: "/testimonials" },
  { label: "Contact Us", href: "/contact" },
];

export const SOCIALS = ["Instagram", "Facebook", "LinkedIn", "TikTok"];

// Tidio live-chat public key. Paste the key here (the xxxx in
// //code.tidio.co/xxxx.js) OR set NEXT_PUBLIC_TIDIO_KEY in the env.
// The chat widget appears automatically once either is filled in.
export const TIDIO_PUBLIC_KEY = "";
