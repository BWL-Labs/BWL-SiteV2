/* Per-route SEO copy. Titles and descriptions are taken from each page's own
   H1 and opening paragraph rather than invented, so what a search or answer
   engine quotes matches what the visitor reads. */

export const SITE = {
  name: "Blackware Labs",
  url: "https://blackwarelabs.com",
  tagline: "A micro-product studio for anyone who has to be chosen",
  email: "support@blackwarelabs.com",
  locations: ["Dubai", "New Delhi"],
} as const;

export type RouteSeo = {
  path: string;
  title: string;
  description: string;
  /** service pages describe an offering; used to emit Service structured data */
  service?: { name: string; priceFrom?: number; currency?: string };
};

export const ROUTES: RouteSeo[] = [
  {
    path: "/",
    title: "Blackware Labs — brand, websites and B2B pipeline tools",
    description:
      "A micro-product studio for anyone who has to be chosen. Brand design, websites and portfolios, interactive marketing assets, and B2B sales activation. Dubai and New Delhi.",
  },
  {
    path: "/about",
    title: "About — a studio built for pipeline",
    description:
      "A marketing studio in four parts: brand design, websites and portfolios, interactive marketing assets, and B2B sales activation. Senior people, fixed scope, fixed dates.",
  },
  {
    path: "/contact",
    title: "Contact — tell us what you're selling",
    description:
      "Leave a few details and a strategist comes back within one working day with a first read and two ways in. No deck, no discovery call to book a discovery call.",
  },
  {
    path: "/brand-design",
    title: "Brand design — a brand that survives the sales call",
    description:
      "Positioning, naming, identity systems, and the messaging spine everything else hangs from. Built to hold up in a boardroom and on a banner ad. From $399, nine weeks typical.",
    service: { name: "Brand design", priceFrom: 399, currency: "USD" },
  },
  {
    path: "/website-and-portfolio",
    title: "Websites and portfolios — your site should qualify, not decorate",
    description:
      "Sites and work portfolios that make the case for you. Fast, structured around the sale, and easy for your team to keep alive after launch. Live in 7 days.",
    service: { name: "Website and portfolio", currency: "USD" },
  },
  {
    path: "/interactive-assets",
    title: "Interactive assets — tools prospects actually finish",
    description:
      "Calculators, configurators, benchmarks, and product tours marketing can actually ship. Interactive assets that qualify a buyer while they use them.",
    service: { name: "Interactive assets and advergames", currency: "USD" },
  },
  {
    path: "/b2b-answer-engine",
    title: "B2B answer engine placement — getting cited by AI answer engines",
    description:
      "When your buyers ask ChatGPT, Perplexity, Gemini or Claude which tool to pick, GEO and AEO work decides whether you are in the answer. Retainers from $3,200/mo.",
    service: { name: "B2B answer engine placement", priceFrom: 3200, currency: "USD" },
  },
  {
    path: "/lead-detective",
    title: "Lead Detective — lead quality shouldn't be a manual job",
    description:
      "Lead Detective ingests your leads, filters out the noise, and routes only the ones worth a reply into your CRM. Real-time scoring and automatic assignment.",
    service: { name: "Lead Detective", currency: "USD" },
  },
  {
    path: "/mypen",
    title: "Mypen — cold email fails when it feels cold",
    description:
      "AI research on every recipient, then a genuinely personalized email for each one. Per-recipient drafting with zero templates.",
    service: { name: "Mypen", currency: "USD" },
  },
  {
    path: "/researchify",
    title: "Researchify — hours of account research, cut to minutes",
    description:
      "Deep, source-verified intelligence on any target account: firmographics, buying signals, and the key people, configured to your own research brief.",
    service: { name: "Researchify", currency: "USD" },
  },
  {
    path: "/self-serve-buying",
    title: "Self-serve buying — most buyers won't book a call",
    description:
      "67% of B2B buyers now prefer to evaluate without talking to sales. A self-serve path that lets them choose a plan, configure it, and check out on their own.",
    service: { name: "Self-serve buying experience", currency: "USD" },
  },
  {
    path: "/privacy-policy",
    title: "Privacy policy",
    description:
      "How Blackware Labs collects, uses, and stores information from this site and from client engagements.",
  },
  {
    path: "/terms-and-conditions",
    title: "Terms and conditions",
    description:
      "The terms that govern use of this site and engagements with Blackware Labs.",
  },
];

export const bySlug = (path: string) =>
  ROUTES.find((r) => r.path === path) ?? ROUTES[0];
