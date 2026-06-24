// All marketing copy & content data, mirrored from the design prototype.

const U = (id: string, w = 1200, q = 78) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=${q}&auto=format&fit=crop`;

export const IMAGES = {
  hero: U("1567767292278-a4f21aa2d36e", 2000, 80),
  heroCleaner: "/images/cleaner-hero.jpeg",
  heroTeam: "/images/newHero.jpeg",
  ctaKitchen: U("1556911220-bff31c812dba", 2000, 80),
  servicesHeader: "/images/office-cleaning.jpeg",
  aboutHeader: "/images/team-cleaning.jpeg",
  aboutStory: "/images/cleaning-lady.jpeg",
  bookHeader: "/images/cleaning-lady.jpeg",
  testimonialsHeader: "/images/team-cleaning.jpeg",
  galleryHeader: "/images/van.jpeg",
  contactHeader: "/images/office-cleaning.jpeg",
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
    img: "/images/service-residential.png",
  },
  {
    title: "Office & Commercial Cleaning",
    price: "Custom Pricing",
    desc: "A clean workspace isn't just about appearances. It reduces sick days, improves focus, and tells your clients you run a tight operation. We work around your schedule — including evenings and weekends.",
    img: "/images/service-office.png",
  },
  {
    title: "Move-In / Move-Out Cleaning",
    price: "Starting at $279",
    desc: "One less thing to worry about during one of the most stressful transitions you'll make. We get the space spotless for when you're handing over keys or walking into your new beginning.",
    img: "/images/service-moveinout.png",
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
  { quote: "Great value and more. The move-out clean was flawless from top to bottom. Highly recommend.", name: "Sofia L.", location: "Silver Spring, MD", initial: "S" },
  { quote: "Eco-friendly products that are safe for our kids, and a team that genuinely cares. We book monthly now.", name: "James & Aisha T.", location: "Potomac, MD", initial: "J" },
  { quote: "Spotless lobbies and meticulous detail throughout. Our clients notice the difference the moment they arrive.", name: "Branch Manager", location: "Regional Bank, MD", initial: "B" },
  { quote: "An elite standard, truly. They treat your home as if it were their own. We recommend them to everyone.", name: "Grace N.", location: "Chevy Chase, MD", initial: "G" },
];

export type ServicePackage = {
  name: string;
  price: string;
  badge?: string;
  img: string;
  desc: string;
  items: string[];
  cta: string;
  ctaHref: string;
};

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    name: "Standard Clean",
    price: "From $129",
    badge: "Great for Regular Upkeep",
    img: "/images/service-residential.png",
    desc: "We cover the surfaces you see every day — kitchens, bathrooms, living areas, and bedrooms — wiped down, vacuumed, and mopped to a consistent standard. This is the service most of our recurring clients start with, and keep coming back to.",
    items: [
      "Kitchen surfaces, appliance exteriors, and sink",
      "Bathroom fixtures, mirrors, and floors",
      "Vacuuming and mopping throughout",
      "Dusting furniture and accessible surfaces",
      "Emptying trash bins",
      "Making beds (linens provided by client)",
    ],
    cta: "Book This Service",
    ctaHref: "/book",
  },
  {
    name: "Deep Clean",
    price: "From $189",
    badge: "Most Popular",
    img: "/images/cleaning-lady.jpeg",
    desc: "This is what your space needs when a standard clean won't cut it — after a long winter, before a big occasion, or simply when it's been a while and you want it done properly. We go further, stay longer, and leave nothing untouched.",
    items: [
      "Everything in the Standard Clean",
      "Inside oven and microwave",
      "Inside refrigerator",
      "Baseboards, door frames, and light switches",
      "Ceiling fans and vents",
      "Window sills and tracks",
      "Cabinet exteriors and handles",
      "Grout scrubbing in bathrooms and kitchen",
    ],
    cta: "Book This Service",
    ctaHref: "/book",
  },
  {
    name: "Move-In / Move-Out Clean",
    price: "From $279",
    badge: "Best Value",
    img: "/images/service-moveinout.png",
    desc: "Moving is stressful enough without worrying about the state of the space you're leaving or walking into. We handle the cleaning thoroughly and on your timeline — so you can focus on the transition, not the to-do list.",
    items: [
      "Full deep clean of entire property",
      "Inside all cabinets and drawers",
      "Inside all appliances",
      "Walls spot-cleaned",
      "Window interiors",
      "Garage sweep (where applicable)",
      "All floors cleaned to move-ready standard",
    ],
    cta: "Book This Service",
    ctaHref: "/book",
  },
  {
    name: "Office & Commercial Cleaning",
    price: "Custom Pricing",
    img: "/images/service-office.png",
    desc: "A well-maintained office tells people something before anyone opens their mouth. We keep your workspace clean, presentable, and consistently serviced — on a schedule that fits around your team, not the other way around.",
    items: [
      "Workstations and desks wiped down",
      "Reception and common areas cleaned",
      "Restroom sanitation",
      "Kitchen and break room",
      "Trash removal and liner replacement",
      "Floors vacuumed and mopped",
      "Glass and partition surfaces cleaned",
      "Evening and weekend scheduling available",
    ],
    cta: "Book This Service",
    ctaHref: "/book",
  },
  {
    name: "Post-Construction Clean",
    price: "From $399",
    img: "/images/office-cleaning.jpeg",
    desc: "Construction dust settles everywhere — on surfaces you can see and plenty you can't. Our post-construction clean removes debris, dust, and residue from every corner so the finished space looks the way it was meant to, not the way it was left.",
    items: [
      "Removal of construction dust from all surfaces",
      "Window cleaning inside and out",
      "Floor scrubbing and polishing",
      "Paint overspray and adhesive removal (standard)",
      "Fixtures and fittings wiped down",
      "Sanitization of bathrooms and kitchen",
      "Final walkthrough inspection before handoff",
    ],
    cta: "Get a Quote",
    ctaHref: "/contact",
  },
  {
    name: "Government, Embassy & Diplomatic Cleaning",
    price: "Custom Proposal",
    badge: "Specialized Service",
    img: "/images/team-cleaning.jpeg",
    desc: "These environments carry a higher expectation — and they should. We work with government agencies and diplomatic residences that require reliability, discretion, and a standard of cleanliness that reflects the weight of the space. Our team is background-checked, fully insured, and experienced in regulated and sensitive environments.",
    items: [
      "Full-facility cleaning to agency or mission standards",
      "Background-checked, vetted cleaning personnel",
      "Flexible scheduling including off-hours and weekends",
      "Capability statement available on request",
      "SAM.gov and compliance documentation (in progress)",
      "Formal proposal provided for all government contracts",
    ],
    cta: "Request a Proposal",
    ctaHref: "/contact",
  },
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
  { name: "Inside Oven", price: "$35", desc: "Full interior clean, including racks and door glass. Grease, baked-on residue, and odors removed." },
  { name: "Inside Refrigerator", price: "$30", desc: "Shelves, drawers, and door compartments emptied, cleaned, and sanitized." },
  { name: "Interior Windows", price: "$45 / window", desc: "Glass, frames, and sills cleaned from the inside. Streak-free finish." },
  { name: "Laundry", price: "$25", desc: "Wash and transfer (client provides detergent). Folding available on request." },
  { name: "Carpet Shampooing", price: "$60 / room", desc: "Hot water extraction for a deeper clean than vacuuming alone provides." },
  { name: "Home Organization", price: "$50 / hr", desc: "Decluttering, organizing, and staging for rooms that need more than just cleaning." },
  { name: "Post-Event Cleanup", price: "From $99", desc: "After a gathering, dinner, or event — we bring the space back to exactly how it was before your guests arrived." },
];

export const FAQS = [
  { q: "Do I need to be home during the cleaning?", a: "No — and most of our regular clients aren't. Many leave a key or access code and come back to a clean space. Every member of our team is background-checked, bonded, and insured. Your home is in good hands either way." },
  { q: "Are your cleaning products safe for children and pets?", a: "Yes. We use EPA-recognized, non-toxic products across all residential jobs. If you or someone in your household has specific sensitivities or allergies, tell us when you book and we'll make the right substitutions." },
  { q: "How long does a cleaning typically take?", a: "It depends on the size and condition of your space. A standard clean for a two-bedroom home usually takes two to three hours. A deep clean or move-out job will take longer. We'll give you an estimated timeframe when we confirm your booking." },
  { q: "Are you licensed and insured?", a: "Yes. Raya Elite is a licensed Maryland business, fully bonded, and carries liability insurance on every job. You're covered — and so are we." },
  { q: "Do you bring your own supplies and equipment?", a: "We bring everything — cleaning products, tools, and materials. You don't need to have a single thing waiting for us. Just tell us when you need us and what needs doing." },
  { q: "What if I'm not satisfied with the results?", a: "Let us know within 24 hours and we'll come back and address it at no additional charge." },
  { q: "How do I book a recurring service?", a: "The easiest way is through our online booking page. Select your preferred frequency — weekly, biweekly, or monthly — and we'll set up a recurring schedule from there. Recurring clients receive priority scheduling and preferred pricing." },
  { q: "Can you handle large commercial facilities, government offices, or embassies?", a: "Yes. For larger commercial contracts, government facilities, and embassy or diplomatic properties, we provide a formal proposal and capability statement. Use the contact page to reach us and we'll take it from there." },
];

export const VALUES = [
  {
    title: "Integrity",
    desc: "We treat your home or office the way we'd want someone to treat ours. That means being honest about what a job entails, showing up when we say we will, and never cutting corners because we think you won't notice. You hired us because you have standards. We hold ourselves to them too.",
  },
  {
    title: "Excellence",
    desc: "We don't leave until it's right. Every cleaner on our team works from a detailed checklist — not because we don't trust their judgment, but because consistency is what separates a good clean from a great one. Excellence isn't an accident. It's a system.",
  },
  {
    title: "Trust",
    desc: "You're letting people into your space. That's not something we take lightly. Every member of our team is background-checked, bonded, and insured before they step through your door. And when something doesn't meet your expectations, we make it right.",
  },
];

export const LEADERSHIP = [
  {
    name: "King Aguguo",
    role: "Managing Partner",
    bio: "King brings the vision, the standards, and the drive that define what Raya Elite is at its core. His focus has always been simple: build a company that clients can genuinely rely on — and keep earning that trust on every visit. Under his leadership, Raya Elite has grown into one of Maryland's most trusted cleaning services for residential, commercial, and government clients.",
    initial: "KA",
  },
  {
    name: "Yaidio Diakite",
    role: "Operations Director",
    bio: "Yaidio keeps everything running with the precision the work demands. From team scheduling and quality control to supply management and client satisfaction follow-through — the operational backbone of Raya Elite runs through her. Her commitment to consistency is a large part of why clients keep coming back.",
    initial: "YD",
  },
];

export type Cert = { label: string; desc: string; status: string };

export const CERTS: Cert[] = [
  { label: "Maryland Licensed Business", desc: "Registered and licensed to operate in the state of Maryland.", status: "Active" },
  { label: "Bonded & Fully Insured", desc: "Full liability coverage on every job. You're protected — and so is your property.", status: "Active" },
  { label: "EPA Safer Choice Products", desc: "We use cleaning products recognized by the EPA for safety and environmental responsibility.", status: "Active" },
  { label: "Background-Checked Team", desc: "Every cleaner undergoes a thorough background check before joining our team.", status: "Active — all staff" },
  { label: "Google 5-Star Rated", desc: "Our rating reflects the standard we hold ourselves to on every visit.", status: "Verified" },
  { label: "SAM.gov Registration", desc: "Federal registration enabling us to work with government agencies and pursue public contracts.", status: "In Progress" },
  { label: "MBE Certification", desc: "Minority Business Enterprise designation — currently in application.", status: "In Progress" },
  { label: "WOSB Certification", desc: "Women-Owned Small Business federal certification — currently in application.", status: "In Progress" },
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
  { cat: "Move-In/Out", quote: "Great value and more. The move-out clean was flawless from top to bottom. Highly recommend.", name: "Sofia L.", location: "Silver Spring, MD", initial: "S" },
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
  { title: "Kitchen Deep Clean", cat: "Deep Clean", tag: "Before / After", img: "/images/cleaning-lady.jpeg" },
  { title: "Master Bath Restoration", cat: "Residential", tag: "Before / After", img: "/images/service-residential.png" },
  { title: "Corporate Lobby", cat: "Office & Commercial", tag: "Completed", img: "/images/office-cleaning.jpeg" },
  { title: "Move-Out Apartment", cat: "Move-In/Out", tag: "Before / After", img: "/images/service-moveinout.png" },
  { title: "Living Room Detail", cat: "Residential", tag: "Completed", img: "/images/cleaning-lady.jpeg" },
  { title: "Post-Construction Suite", cat: "Post-Construction", tag: "Before / After", img: "/images/office-cleaning.jpeg" },
  { title: "Executive Office", cat: "Office & Commercial", tag: "Completed", img: "/images/service-office.png" },
  { title: "Hardwood Floor Polish", cat: "Deep Clean", tag: "Completed", img: "/images/service-residential.png" },
  { title: "Embassy Residence", cat: "Office & Commercial", tag: "Completed", img: "/images/team-cleaning.jpeg" },
  { title: "Family Home Refresh", cat: "Residential", tag: "Completed", img: "/images/cleaning-lady.jpeg" },
  { title: "Studio Move-In", cat: "Move-In/Out", tag: "Before / After", img: "/images/service-moveinout.png" },
  { title: "Bank Branch Floor", cat: "Office & Commercial", tag: "Completed", img: "/images/van.jpeg" },
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

export const BLOG_PREVIEW = [
  {
    cat: "Residential",
    title: "What to Expect From a White-Glove Cleaning Service",
    desc: "Most cleaning services wipe down the obvious surfaces and call it done. A white-glove service works differently. It's methodical, detail-oriented, and held to a standard most people only experience once before they refuse to go back to anything less.",
    href: "/blog",
    img: U("1586023492125-27b2c045efd7", 900, 75),
  },
  {
    cat: "Deep Cleaning",
    title: "How Often Should You Deep Clean Your Home?",
    desc: "A regular clean maintains your home. A deep clean restores it. If you've never had one — or it's been longer than you'd like to admit — this guide tells you exactly what to expect, what gets covered, and how to know when it's time.",
    href: "/blog",
    img: U("1556911220-bff31c812dba", 900, 75),
  },
  {
    cat: "Moving",
    title: "Move-In Cleaning Checklist: What Gets Missed — And How We Fix It",
    desc: "There are corners in every property that the previous occupant never thought about and the next one will notice immediately. This checklist covers the areas that consistently get overlooked, and exactly how our team handles each one.",
    href: "/blog",
    img: U("1505693416388-ac5ce068fe85", 900, 75),
  },
];

export const HOMEPAGE_FAQS = [
  {
    q: "Do I need to be home when your team arrives?",
    a: "No. Many of our clients give us a key or access code and return to a clean home. Every member of our team is background-checked, bonded, and insured. Your space is in safe hands whether you're there or not.",
  },
  {
    q: "How much does a cleaning cost?",
    a: "It depends on the size of your space, the type of clean, and how often you need us. We don't believe in quoting blind — which is why we ask a few quick questions before giving you a number. Every quote we send is accurate, itemized, and comes with no hidden fees.",
  },
  {
    q: "What if I'm not happy with the results?",
    a: "We come back and fix it — simple as that. If anything was missed or didn't meet your standard, let us know within 24 hours and we'll return at no additional charge. Our satisfaction guarantee isn't a slogan. It's our policy.",
  },
  {
    q: "Do you offer discounts for regular cleaning?",
    a: "Yes. Clients who book recurring service — weekly, biweekly, or monthly — receive preferred pricing and priority scheduling. It's our way of rewarding the clients who trust us with their space on an ongoing basis.",
  },
  {
    q: "Are your cleaning products safe for children and pets?",
    a: "Yes. We use EPA-recognized, non-toxic products across all of our residential jobs. If you have specific sensitivities or allergies, let us know when you book and we'll make sure the right products are used in your home.",
  },
  {
    q: "Do you bring your own supplies and equipment?",
    a: "We bring everything. Our team arrives fully equipped — cleaning products, tools, and materials included. You don't need to provide a single thing. Just tell us what needs doing and we'll handle the rest.",
  },
  {
    q: "Can you handle large commercial facilities, government offices, or embassy properties?",
    a: "Yes. We work with commercial offices, government agencies, and diplomatic residences across Maryland and the DC metro area. For larger contracts or specialized environments, we provide a formal proposal and capability statement. Reach out through our contact page and we'll take it from there.",
  },
];
