export type BlogBlock = { h?: string; p?: string; ul?: string[] };

export type BlogPost = {
  slug: string;
  cat: string;
  title: string;
  excerpt: string;
  img: string;
  date: string;
  read: string;
  intro: string;
  blocks: BlogBlock[];
};

// Blog content is used exactly as supplied by the client. Full article bodies
// will be added verbatim when provided; for now each post shows the given copy.
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "what-to-expect-from-a-white-glove-cleaning-service",
    cat: "Residential",
    title: "What to Expect From a White-Glove Cleaning Service",
    excerpt:
      "Most cleaning services wipe down the obvious surfaces and call it done. A white-glove service works differently. It's methodical, detail-oriented, and held to a standard most people only experience once before they refuse to go back to anything less.",
    img: "/images/cleaning-lady.jpeg",
    date: "June 2026",
    read: "",
    intro:
      "Most cleaning services wipe down the obvious surfaces and call it done. A white-glove service works differently. It's methodical, detail-oriented, and held to a standard most people only experience once before they refuse to go back to anything less.",
    blocks: [],
  },
  {
    slug: "how-often-should-you-deep-clean-your-home",
    cat: "Deep Cleaning",
    title: "How Often Should You Deep Clean Your Home?",
    excerpt:
      "A regular clean maintains your home. A deep clean restores it. If you've never had one — or it's been longer than you'd like to admit — this guide tells you exactly what to expect, what gets covered, and how to know when it's time.",
    img: "/images/service-residential.png",
    date: "June 2026",
    read: "",
    intro:
      "A regular clean maintains your home. A deep clean restores it. If you've never had one — or it's been longer than you'd like to admit — this guide tells you exactly what to expect, what gets covered, and how to know when it's time.",
    blocks: [],
  },
  {
    slug: "move-in-cleaning-checklist-what-gets-missed",
    cat: "Moving",
    title: "Move-In Cleaning Checklist: What Gets Missed — And How We Fix It",
    excerpt:
      "There are corners in every property that the previous occupant never thought about and the next one will notice immediately. This checklist covers the areas that consistently get overlooked, and exactly how our team handles each one.",
    img: "/images/service-moveinout.png",
    date: "June 2026",
    read: "",
    intro:
      "There are corners in every property that the previous occupant never thought about and the next one will notice immediately. This checklist covers the areas that consistently get overlooked, and exactly how our team handles each one.",
    blocks: [],
  },
];

export function getPost(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
