import { SITE, ROUTES } from "./seo";

/** Organization plus the service catalogue, emitted once site-wide.
 *  This is the entity record an answer engine reads to know who Blackware Labs
 *  is, what it sells, and where it operates. */
export function OrganizationJsonLd() {
  const services = ROUTES.filter((r) => r.service);
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    url: SITE.url,
    description: SITE.tagline,
    email: SITE.email,
    address: SITE.locations.map((l) => ({
      "@type": "PostalAddress",
      addressLocality: l,
    })),
    areaServed: SITE.locations.map((l) => ({ "@type": "Place", name: l })),
    makesOffer: services.map((r) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: r.service!.name,
        url: `${SITE.url}${r.path}`,
        description: r.description,
      },
      ...(r.service!.priceFrom
        ? {
            price: r.service!.priceFrom,
            priceCurrency: r.service!.currency ?? "USD",
          }
        : {}),
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
