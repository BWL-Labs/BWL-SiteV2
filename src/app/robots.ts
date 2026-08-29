import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";

/* Answer-engine crawlers are allowed explicitly rather than left to the
   wildcard. Blackware sells answer-engine placement, so being readable by
   GPTBot, PerplexityBot, ClaudeBot and Google-Extended is the product working
   on its own site. CCBot is the exception: it feeds training corpora rather
   than a citable search index, so it earns no access. */
const ANSWER_ENGINES = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "ClaudeBot",
  "Claude-User",
  "anthropic-ai",
  "Google-Extended",
  "Applebot-Extended",
  "Bingbot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...ANSWER_ENGINES.map((ua) => ({ userAgent: ua, allow: "/" })),
      { userAgent: "CCBot", disallow: "/" },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
