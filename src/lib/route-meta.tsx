import type { Metadata } from "next";
import { SITE, bySlug } from "./seo";

/** Metadata for one route: canonical, Open Graph and Twitter, built from the
 *  page's own copy so a shared link quotes the same words as the page. */
export function routeMetadata(path: string): Metadata {
  const r = bySlug(path);
  const url = `${SITE.url}${path === "/" ? "" : path}`;
  return {
    title: r.title,
    description: r.description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName: SITE.name,
      title: r.title,
      description: r.description,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: r.title,
      description: r.description,
    },
  };
}

/** Service structured data for the routes that describe an offering. Answer
 *  engines read this to state what is sold, by whom, and from what price. */
export function RouteJsonLd({ path }: { path: string }) {
  const r = bySlug(path);
  if (!r.service) return null;
  const url = `${SITE.url}${path}`;
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: r.service.name,
    description: r.description,
    url,
    serviceType: r.service.name,
    provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
    areaServed: SITE.locations.map((l) => ({ "@type": "Place", name: l })),
  };
  if (r.service.priceFrom) {
    data.offers = {
      "@type": "Offer",
      url,
      price: r.service.priceFrom,
      priceCurrency: r.service.currency ?? "USD",
      availability: "https://schema.org/InStock",
    };
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
