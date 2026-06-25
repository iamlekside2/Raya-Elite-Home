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

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "what-to-expect-from-a-white-glove-cleaning-service",
    cat: "Residential",
    title: "What to Expect From a White-Glove Cleaning Service",
    excerpt:
      "Most cleaning services wipe down the obvious surfaces and call it done. A white-glove service works differently — methodical, detail-oriented, and held to a standard most people only experience once before they refuse to go back to anything less.",
    img: "/images/cleaning-lady.jpeg",
    date: "June 2026",
    read: "5 min read",
    intro:
      "There's a meaningful difference between a space that has been tidied and a space that has been cleaned to a standard. A white-glove service lives in that gap — the details you only notice once they've been handled properly. Here's what that actually looks like in practice.",
    blocks: [
      {
        h: "It starts with a checklist, not a guess",
        p: "A white-glove clean isn't improvised. Every visit follows a detailed, room-by-room checklist so nothing depends on memory or mood. The baseboards, the switch plates, the tops of door frames — the places most services skip because no one checks them — are exactly the places a white-glove standard begins.",
      },
      {
        h: "The details most services miss",
        p: "Ask any homeowner where a cleaning usually falls short and you'll hear the same answers. A proper service treats these as the baseline, not the upsell:",
        ul: [
          "Baseboards, door frames, and light switches wiped, not skipped",
          "Inside the microwave and around appliance edges, not just the fronts",
          "Window sills, tracks, and blinds dusted",
          "Under and behind moveable items, not cleaned around them",
          "Fixtures and handles polished so they actually shine",
        ],
      },
      {
        h: "Consistency is the real product",
        p: "Anyone can do one good clean. The hard part — and the reason white-glove service costs more — is delivering the same result every single visit, regardless of which team member is assigned. That consistency comes from training, accountability, and a quality check at the end of every job.",
      },
      {
        h: "What you should expect from your provider",
        ul: [
          "A clear scope before the visit so you know exactly what's included",
          "Background-checked, uniformed staff who treat your home with respect",
          "Eco-friendly, non-toxic products safe for children and pets",
          "A satisfaction guarantee — if something's missed, they come back and fix it",
        ],
      },
      {
        h: "The bottom line",
        p: "White-glove cleaning isn't about luxury for its own sake. It's about a standard you can rely on without having to inspect the work yourself. Once you've experienced it, the difference is hard to un-see — which is exactly why our clients rarely go back.",
      },
    ],
  },
  {
    slug: "how-often-should-you-deep-clean-your-home",
    cat: "Deep Cleaning",
    title: "How Often Should You Deep Clean Your Home?",
    excerpt:
      "A regular clean maintains your home. A deep clean restores it. This guide tells you exactly what to expect, what gets covered, and how to know when it's time.",
    img: "/images/service-residential.png",
    date: "June 2026",
    read: "4 min read",
    intro:
      "Standard cleaning keeps your home presentable week to week. A deep clean is a different job entirely — it reaches the build-up that routine cleaning never touches. The question most people ask is simply: how often do I actually need one?",
    blocks: [
      {
        h: "Standard clean vs. deep clean",
        p: "A standard clean handles the visible, everyday surfaces — floors, counters, bathrooms, dusting. A deep clean goes after the accumulated grime: inside the oven and fridge, grout, baseboards, vents, behind appliances, and the spots that quietly collect dust and residue over months.",
      },
      {
        h: "A simple schedule that works for most homes",
        ul: [
          "Every 3–6 months for the average household",
          "Every 2–3 months if you have pets, young children, or allergies",
          "Before or after a major event — holidays, parties, house guests",
          "At move-in or move-out, always",
          "Seasonally — a spring and autumn deep clean keeps build-up from ever taking hold",
        ],
      },
      {
        h: "Signs it's time for a deep clean",
        p: "Your home will tell you. Watch for these:",
        ul: [
          "Dust returns within a day of cleaning",
          "Bathroom grout or shower glass looks dull no matter what you do",
          "The kitchen has a faint lingering odor you can't place",
          "Allergy symptoms flare up indoors",
          "It's simply been longer than you'd like to admit",
        ],
      },
      {
        h: "What a deep clean includes",
        p: "When we deep clean, we cover everything in a standard visit plus inside the oven and microwave, inside the refrigerator, baseboards, door frames and switches, ceiling fans and vents, window sills and tracks, cabinet exteriors, and full grout scrubbing in bathrooms and the kitchen.",
      },
      {
        h: "The takeaway",
        p: "Think of deep cleaning as maintenance for your home's baseline, not an emergency response. Two to four times a year keeps everything fresh and makes every routine clean in between noticeably easier — and more effective.",
      },
    ],
  },
  {
    slug: "move-in-cleaning-checklist-what-gets-missed",
    cat: "Moving",
    title: "Move-In Cleaning Checklist: What Gets Missed — And How We Fix It",
    excerpt:
      "There are corners in every property the previous occupant never thought about and the next one will notice immediately. This checklist covers the areas that consistently get overlooked.",
    img: "/images/service-moveinout.png",
    date: "June 2026",
    read: "6 min read",
    intro:
      "An empty home looks clean. It rarely is. Without furniture to hide behind, every overlooked corner is suddenly in plain view — which is exactly why a move-in clean is one of the most worthwhile services you can book. Here's what gets missed, and how a proper team handles it.",
    blocks: [
      {
        h: "Why an empty home needs more, not less",
        p: "People assume a vacant property is a quick job. The opposite is true. With nothing in the way, you can finally reach inside every cabinet, behind every appliance, and into every corner — and all of it needs attention before you move a single box in.",
      },
      {
        h: "The kitchen — where most cleans fall short",
        ul: [
          "Inside every cabinet and drawer, top to bottom",
          "Inside and behind the refrigerator and oven",
          "Range hood, filters, and backsplash",
          "Sink, faucet, and garbage disposal area",
          "Toe-kicks and the gaps beside appliances",
        ],
      },
      {
        h: "Bathrooms — beyond the obvious",
        ul: [
          "Inside vanity cabinets and drawers",
          "Grout, caulk lines, and shower tracks",
          "Exhaust fan covers and light fixtures",
          "Behind the toilet and along the base",
          "Mirror edges and medicine cabinet interiors",
        ],
      },
      {
        h: "The whole-home details",
        ul: [
          "Baseboards, door frames, and every light switch",
          "Inside closets and along closet shelving",
          "Window interiors, sills, and tracks",
          "Air vents and return covers",
          "Spot-cleaned walls and wiped fixtures throughout",
        ],
      },
      {
        h: "Move-out? The same rules apply",
        p: "If you're leaving, this same checklist is what stands between you and your full deposit. Landlords and property managers inspect exactly the places that are easy to skip. A professional move-out clean is almost always cheaper than the deductions it prevents.",
      },
      {
        h: "How we handle it",
        p: "Our move-in/move-out service runs the full checklist above as standard, on your timeline — so you can focus on the move itself and walk into a space that's genuinely ready, not just empty.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
