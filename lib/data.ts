// All marketing copy & content data, mirrored from the design prototype.

const U = (id: string, w = 1200, q = 78) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=${q}&auto=format&fit=crop`;

export const IMAGES = {
  hero: U("1567767292278-a4f21aa2d36e", 2000, 80),
  heroCleaner: "/images/cleaner-hero.jpeg",
  heroTeam: "/images/hero-team.jpeg",
  ctaKitchen: U("1556911220-bff31c812dba", 2000, 80),
  servicesHeader: U("1502672260266-1c1ef2d93688", 2000, 80),
  aboutHeader: U("1505693416388-ac5ce068fe85", 2000, 80),
  aboutStory: U("1581578731548-c64695cc6952", 1100, 78),
  bookHeader: U("1586023492125-27b2c045efd7", 2000, 80),
  testimonialsHeader: U("1493809842364-78817add7ffb", 2000, 80),
  galleryHeader: U("1620626011761-996317b8d101", 2000, 80),
  contactHeader: U("1497215728101-856f4ea42174", 2000, 80),
};

export const WHY_CARDS = [
  {
    title: "Licensed & Fully Insured",
    desc: "Every job is covered. You don't have to wonder whether your home or business is protected — it is. We carry full liability insurance so you can open the door with complete peace of mind.",
  },
  {
    title: "Eco-Friendly Products",
    desc: "We use EPA-recognized, non-toxic cleaning products that are safe for your children, your pets, and your surfaces. Better for your home. Better for the environment. No compromise on results.",
  },
  {
    title: "Professionally Trained Staff",
    desc: "Our team doesn't just show up — they come prepared. Every cleaner is trained to our standard, background-checked, and held accountable to a detailed quality checklist on every visit.",
  },
  {
    title: "Satisfaction, Guaranteed",
    desc: "If something isn't right, we come back and fix it. No arguments or fine print. That's the Raya Elite standard, and we've maintained it across every single client we've served.",
  },
];

export const SERVICES_PREVIEW = [
  {
    title: "Residential Deep Clean",
    price: "Starting at $189",
    desc: "Your home deserves more than a surface wipe-down. Our residential deep clean covers every room, corner, and surface — from baseboards to ceiling fans — so you can walk in and actually breathe easy.",
    img: U("1586023492125-27b2c045efd7", 1100, 75),
  },
  {
    title: "Office & Commercial Cleaning",
    price: "Custom Pricing",
    desc: "A clean workspace isn't just about appearances. It reduces sick days, improves focus, and tells your clients you run a tight operation. We work around your schedule — including evenings and weekends.",
    img: U("1497366811353-6870744d04b2", 1100, 75),
  },
  {
    title: "Move-In / Move-Out Cleaning",
    price: "Starting at $279",
    desc: "One less thing to worry about during one of the most stressful transitions you'll make. We get the space spotless for when you're handing over keys or walking into your new beginning.",
    img: U("1505693416388-ac5ce068fe85", 1100, 75),
  },
];

export const HOW_STEPS = [
  {
    n: "1",
    title: "Request a Quote or Book Online",
    desc: "Tell us about your space and what you need. It takes under two minutes. You'll hear back from us the same day — often within the hour.",
  },
  {
    n: "2",
    title: "We Show Up and Do the Work",
    desc: "Our team arrives on time, in uniform, with everything needed to do the job properly. You don't need to lift a finger — or be home if you'd rather not be.",
  },
  {
    n: "3",
    title: "You Walk Into a Spotless Space",
    desc: "That's it. No follow-up calls asking if you're happy. We get it right the first time — and if anything was missed, we return and fix it, no questions asked.",
  },
];

export type ClientServed = { title: string; desc: string; img: string };

export const CLIENTS_SERVE: ClientServed[] = [
  {
    title: "Residential Homeowners",
    desc: "Your home is your sanctuary. We treat it that way — arriving prepared, working carefully, and leaving every room exactly as it should be.",
    img: U("1586023492125-27b2c045efd7", 900, 75),
  },
  {
    title: "Commercial Offices",
    desc: "A well-maintained workspace signals professionalism before anyone says a word. We keep your office clean, consistent, and ready for business every single day.",
    img: U("1497366811353-6870744d04b2", 900, 75),
  },
  {
    title: "Banks & Financial Institutions",
    desc: "High-traffic environments with high standards of presentation. We work discreetly, thoroughly, and on schedules that keep your operations uninterrupted.",
    img: U("1524758631624-e2822e304c36", 900, 75),
  },
  {
    title: "Government Agencies",
    desc: "Compliance, reliability, and discretion are non-negotiable in government facilities. Our team is background-checked, fully insured, and experienced in regulated environments.",
    img: U("1497366216548-37526070297c", 900, 75),
  },
  {
    title: "Embassies & Diplomatic Residences",
    desc: "These are spaces where presentation carries real weight. We bring the level of care, professionalism, and attention to detail that diplomatic settings demand — without exception.",
    img: U("1505693416388-ac5ce068fe85", 900, 75),
  },
  {
    title: "Non-Profit Organizations",
    desc: "You stretch every dollar to serve your mission. We offer reliable, high-quality cleaning that respects your budget and keeps your space welcoming for the people you serve.",
    img: U("1502672260266-1c1ef2d93688", 900, 75),
  },
];

export const LOCATIONS = [
  "Bethesda, MD",
  "Rockville, MD",
  "Silver Spring, MD",
  "Gaithersburg, MD",
  "Chevy Chase, MD",
  "Potomac, MD",
  "College Park, MD",
  "Bowie, MD",
  "Annapolis, MD",
  "Washington, DC",
];

export const QUOTE_HELP_OPTIONS = [
  "Residential Cleaning",
  "Office & Commercial Cleaning",
  "Move-In / Move-Out Cleaning",
  "Post-Construction Cleaning",
  "Government or Agency Facility",
  "Embassy or Diplomatic Residence",
  "Not Sure Yet",
];

export const HOME_REVIEWS = [
  { quote: "Raya Elite transformed our home before a family event. Immaculate, on time, and so professional.", name: "Patricia M.", location: "Bethesda, MD", initial: "P" },
  { quote: "Our firm's offices have never looked better. Reliable, discreet, and meticulous every single week.", name: "Daniel R.", location: "Washington, D.C.", initial: "D" },
  { quote: "Got my full deposit back. The move-out clean was flawless from top to bottom. Highly recommend.", name: "Sofia L.", location: "Silver Spring, MD", initial: "S" },
  { quote: "Eco-friendly products that are safe for our kids, and a team that genuinely cares. We book monthly now.", name: "James & Aisha T.", location: "Potomac, MD", initial: "J" },
  { quote: "Spotless lobbies and meticulous detail throughout. Our clients notice the difference the moment they arrive.", name: "Branch Manager", location: "Regional Bank, MD", initial: "B" },
  { quote: "An elite standard, truly. They treat your home as if it were their own. We recommend them to everyone.", name: "Grace N.", location: "Chevy Chase, MD", initial: "G" },
];

export type ServicePackage = {
  name: string;
  price: string;
  badge?: string;
  img: string;
  items: string[];
};

export const SERVICE_PACKAGES: ServicePackage[] = [
  { name: "Standard Clean", price: "From $129", img: U("1493809842364-78817add7ffb", 900, 75), items: ["Dusting & all surfaces", "Floors vacuumed & mopped", "Kitchen & bath sanitized", "Trash removal"] },
  { name: "Deep Clean", price: "From $189", badge: "Most Popular", img: U("1556911220-bff31c812dba", 900, 75), items: ["Everything in Standard", "Baseboards & detail work", "Inside cabinet fronts", "Scale & grout treatment"] },
  { name: "Move-In / Move-Out", price: "From $279", img: U("1505693416388-ac5ce068fe85", 900, 75), items: ["Full empty-home clean", "Inside cabinets & drawers", "Appliance interiors", "Walls & fixtures wiped"] },
  { name: "Office & Commercial", price: "Custom", img: U("1497366811353-6870744d04b2", 900, 75), items: ["Recurring scheduling", "Restrooms & breakrooms", "Lobbies & common areas", "After-hours available"] },
  { name: "Post-Construction", price: "From $399", img: U("1600585154340-be6161a56a0c", 900, 75), items: ["Dust & debris removal", "Paint & adhesive spots", "Window & fixture detail", "Final white-glove polish"] },
  { name: "Government & Embassy", price: "By Quote", badge: "By Quote", img: U("1497215728101-856f4ea42174", 900, 75), items: ["Cleared, vetted personnel", "Compliance documentation", "Flexible secure access", "Capability statement"] },
];

export const RES_PRICING = [
  { home: "Studio", std: "$119", deep: "$169" },
  { home: "1 Bedroom", std: "$139", deep: "$189" },
  { home: "2 Bedroom", std: "$169", deep: "$229" },
  { home: "3 Bedroom", std: "$209", deep: "$279" },
  { home: "4 Bedroom", std: "$259", deep: "$339" },
  { home: "5 Bedroom +", std: "$309", deep: "$409" },
];

export const COM_PRICING = [
  { size: "Small Office (under 2,000 sq ft)", rate: "From $149 / visit" },
  { size: "Medium (2,000 – 5,000 sq ft)", rate: "From $0.09 / sq ft" },
  { size: "Large (5,000 – 10,000 sq ft)", rate: "Custom Quote" },
  { size: "Institutional (10,000+ sq ft)", rate: "Custom Quote" },
];

export const ADDONS = [
  { name: "Inside Oven", price: "$35", desc: "Full degrease and detail of the oven interior, racks, and door glass." },
  { name: "Inside Refrigerator", price: "$30", desc: "Empty, wipe, and sanitize all shelves, drawers, and surfaces." },
  { name: "Interior Windows", price: "$45", desc: "Streak-free cleaning of reachable interior window glass and sills." },
  { name: "Laundry Service", price: "$25", desc: "Wash, dry, and fold one standard load while we clean." },
  { name: "Carpet Shampoo", price: "$60", desc: "Deep hot-water extraction for high-traffic carpeted areas." },
  { name: "Home Organization", price: "$50 / hr", desc: "Closets, pantries, and spaces tidied and neatly arranged." },
  { name: "Post-Event Cleanup", price: "From $99", desc: "Rapid reset after gatherings, parties, and corporate events." },
];

export const FAQS = [
  { q: "Do I need to be home during the cleaning?", a: "Not at all. Many clients provide secure entry instructions and return to a spotless space. Our teams are fully background-checked and insured." },
  { q: "Are your products safe for children and pets?", a: "Yes. We use EPA Safer Choice, eco-friendly products that are safe for children, pets, and sensitive households." },
  { q: "How long does a typical clean take?", a: "A standard clean takes 2–4 hours depending on home size; deep cleans and move-outs take longer. We confirm an estimate when you book." },
  { q: "Are you licensed and insured?", a: "Absolutely. Raya Elite is Maryland licensed, bonded, and fully insured. Documentation is available on request for commercial clients." },
  { q: "Do you bring your own supplies?", a: "Yes. Our teams arrive fully equipped with professional-grade equipment and eco-friendly supplies at no extra charge." },
  { q: "What if I'm not satisfied?", a: "Your satisfaction is guaranteed. If anything is not right, let us know within 24 hours and we return to re-clean at no cost." },
  { q: "How do I book a cleaning?", a: "Book online in under two minutes on our booking page, or request a custom quote for commercial and government work." },
  { q: "Do you offer recurring service discounts?", a: "Yes. Weekly, bi-weekly, and monthly plans receive preferred pricing. Ask about recurring rates when you book." },
];

export const VALUES = [
  { title: "Integrity", desc: "We treat your home and workplace with the same respect we'd give our own." },
  { title: "Excellence", desc: "We don't leave until it's right. Detail is the difference, and we obsess over it." },
  { title: "Trust", desc: "Bonded, insured, and background-checked. A partner you can rely on, every visit." },
];

export const LEADERSHIP = [
  { name: "King Aguguo", role: "Managing Partner", bio: "Leads Raya Elite with a relentless focus on service quality and client trust across the DMV region.", initial: "KA" },
  { name: "Yaidio Diakite", role: "Operations Director", bio: "Oversees field operations and team training, ensuring an elite standard on every single job.", initial: "YD" },
];

export const CERTS = [
  "Maryland Business License",
  "Bonded & Insured",
  "EPA Safer Choice Products",
  "Background-Checked Team",
  "Google 5-Star Rated",
];

export const STAT_DEFS = [
  { target: 500, decimals: 0, suffix: "+", label: "Clients Served" },
  { target: 100, decimals: 0, suffix: "%", label: "Satisfaction Guarantee" },
  { target: 5, decimals: 1, suffix: "", label: "Google Star Rating" },
  { target: 7, decimals: 0, suffix: " Days", label: "A Week Available" },
];

export const BOOK_REASSURANCE = [
  "Satisfaction Guaranteed",
  "Background-Checked Staff",
  "Flexible Scheduling",
  "Cancel or Reschedule Anytime",
];

export type Testimonial = {
  cat: string;
  quote: string;
  name: string;
  location: string;
  initial: string;
};

export const TESTIMONIALS: Testimonial[] = [
  { cat: "Residential", quote: "Raya Elite transformed our home before a family event. Immaculate, on time, and wonderfully professional.", name: "Patricia M.", location: "Bethesda, MD", initial: "P" },
  { cat: "Commercial", quote: "Our firm's offices have never looked better. Reliable, discreet, and meticulous every single week.", name: "Daniel R.", location: "Office Manager, D.C.", initial: "D" },
  { cat: "Move-In/Out", quote: "Got my full deposit back. The move-out clean was flawless from top to bottom. Highly recommend them.", name: "Sofia L.", location: "Silver Spring, MD", initial: "S" },
  { cat: "Government", quote: "Vetted, punctual, and fully compliant. Exactly the standard our facility required. A trusted partner.", name: "Procurement Lead", location: "Federal Agency, D.C.", initial: "G" },
  { cat: "Residential", quote: "Eco-friendly products that are safe for our kids, and a team that genuinely cares. We book monthly now.", name: "James & Aisha T.", location: "Potomac, MD", initial: "J" },
  { cat: "Commercial", quote: "Spotless lobbies and meticulous detail throughout. Our clients notice the difference the moment they arrive.", name: "Branch Manager", location: "Regional Bank, MD", initial: "B" },
  { cat: "Move-In/Out", quote: "Booked online in two minutes and the team arrived the same week. The apartment absolutely sparkled.", name: "Kevin O.", location: "Rockville, MD", initial: "K" },
  { cat: "Residential", quote: "An elite standard, truly. They treat your home as if it were their own. We recommend them to everyone.", name: "Grace N.", location: "Chevy Chase, MD", initial: "G" },
  { cat: "Government", quote: "Discreet, professional, and remarkably thorough. A genuinely trusted partner for our residence.", name: "Facilities Office", location: "Embassy, D.C.", initial: "E" },
];

export const TEST_FILTERS = ["All", "Residential", "Commercial", "Move-In/Out", "Government"];

export type GalleryItem = {
  title: string;
  cat: string;
  tag: string;
  img: string;
};

export const GALLERY: GalleryItem[] = [
  { title: "Kitchen Deep Clean", cat: "Deep Clean", tag: "Before / After", img: U("1556911220-bff31c812dba") },
  { title: "Master Bath Restoration", cat: "Residential", tag: "Before / After", img: U("1620626011761-996317b8d101") },
  { title: "Corporate Lobby", cat: "Office & Commercial", tag: "Completed", img: U("1497366216548-37526070297c") },
  { title: "Move-Out Apartment", cat: "Move-In/Out", tag: "Before / After", img: U("1493809842364-78817add7ffb") },
  { title: "Living Room Detail", cat: "Residential", tag: "Completed", img: U("1502672260266-1c1ef2d93688") },
  { title: "Post-Construction Suite", cat: "Post-Construction", tag: "Before / After", img: U("1600585154340-be6161a56a0c") },
  { title: "Executive Office", cat: "Office & Commercial", tag: "Completed", img: U("1497366811353-6870744d04b2") },
  { title: "Hardwood Floor Polish", cat: "Deep Clean", tag: "Completed", img: U("1586023492125-27b2c045efd7") },
  { title: "Embassy Residence", cat: "Office & Commercial", tag: "Completed", img: U("1505693416388-ac5ce068fe85") },
  { title: "Family Home Refresh", cat: "Residential", tag: "Completed", img: U("1567767292278-a4f21aa2d36e") },
  { title: "Studio Move-In", cat: "Move-In/Out", tag: "Before / After", img: U("1524758631624-e2822e304c36") },
  { title: "Bank Branch Floor", cat: "Office & Commercial", tag: "Completed", img: U("1497215728101-856f4ea42174") },
];

export const GALLERY_FILTERS = [
  "All",
  "Residential",
  "Office & Commercial",
  "Move-In/Out",
  "Deep Clean",
  "Post-Construction",
];

export const SERVICE_OPTIONS = ["Residential", "Commercial", "Government", "Embassy", "Other"];
export const HEAR_OPTIONS = ["Google Search", "Referral", "Social Media", "Drove By One of Our Teams", "Other"];
