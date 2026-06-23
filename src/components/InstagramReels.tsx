"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

// Renders Instagram reels using Instagram's official embed.
// Pass an array of reel URLs (e.g. https://www.instagram.com/reel/ABC123/).
export default function InstagramReels({ urls }: { urls: string[] }) {
  useEffect(() => {
    const id = "instagram-embed-script";
    if (!document.getElementById(id)) {
      const s = document.createElement("script");
      s.id = id;
      s.src = "https://www.instagram.com/embed.js";
      s.async = true;
      document.body.appendChild(s);
    } else {
      window.instgrm?.Embeds.process();
    }
  }, [urls]);

  if (urls.length === 0) return null;

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {urls.map((url) => (
        <blockquote
          key={url}
          className="instagram-media mx-auto w-full"
          data-instgrm-permalink={url}
          data-instgrm-version="14"
          style={{ background: "var(--surface)", border: 0, margin: 0 }}
        />
      ))}
    </div>
  );
}
