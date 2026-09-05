/* A single generated photograph of a fanned hand of tabbed identity dividers,
   framing the hero the way the artifact carousel further down this page
   pays off: this is what "the system" looks like before you open it.

   Generated fresh rather than lifted from a reference photo, so it carries
   no other brand's name or content, only Blackware's own palette. */
export function BrandHeroFan() {
  return (
    <div
      style={{
        position: "relative",
        borderRadius: 20,
        overflow: "hidden",
        border: "1px solid rgba(255,255,250,.1)",
        boxShadow: "0 40px 80px -36px rgba(8,7,5,.55)",
        aspectRatio: "928 / 1152",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/uploads/brand-hero-fan.webp"
        alt="A fanned hand of five identity-system reference cards, each tabbed and numbered"
        decoding="async"
        fetchPriority="high"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          display: "block",
        }}
      />
    </div>
  );
}

export default BrandHeroFan;
