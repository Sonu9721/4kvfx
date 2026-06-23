"use client";

// Full-bleed YouTube background that autoplays muted and loops.
// The iframe is scaled up to cover the hero area without letterboxing.
export default function HeroVideo({ youTubeId }: { youTubeId: string }) {
  const src =
    `https://www.youtube.com/embed/${youTubeId}` +
    `?autoplay=1&mute=1&loop=1&playlist=${youTubeId}` +
    `&controls=0&showinfo=0&modestbranding=1&rel=0&playsinline=1&disablekb=1`;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <iframe
        src={src}
        title="4K Visuals showreel"
        allow="autoplay; encrypted-media"
        className="absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2"
      />
      {/* Dark overlay so the text stays readable */}
      <div className="absolute inset-0 bg-black/55" />
    </div>
  );
}
