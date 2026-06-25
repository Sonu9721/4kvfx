"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { InstagramPost } from "@/lib/content";

export default function ManualInstagramGrid({
  posts,
}: {
  posts: InstagramPost[];
}) {
  const [active, setActive] = useState<InstagramPost | null>(null);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setActive(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const lightbox = active && (
    <div
      onClick={() => setActive(null)}
      className="modal-backdrop fixed inset-0 z-[200] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="modal-panel relative w-full max-w-sm overflow-hidden rounded-xl border border-border bg-surface"
      >
        <button
          onClick={() => setActive(null)}
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-lg text-white/80 transition-colors hover:text-white"
          aria-label="Close"
        >
          ✕
        </button>
        {active.video ? (
          <video
            key={active.video}
            src={active.video}
            poster={active.image}
            controls
            autoPlay
            playsInline
            className="max-h-[80vh] w-full bg-black object-contain"
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={active.image}
            alt={active.title}
            className="max-h-[70vh] w-full object-cover"
          />
        )}
        <div className="p-4">
          {active.title && active.title !== "4K Visuals" && (
            <p className="mb-3 line-clamp-2 text-sm text-muted">{active.title}</p>
          )}
          <a
            href={active.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-accent transition-opacity hover:opacity-80"
          >
            {active.type === "video" ? "Watch reel on Instagram" : "View on Instagram"}
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="instagram-grid">
        {posts.map((post) => (
          <button
            key={post.image}
            onClick={() => setActive(post)}
            aria-label={post.title}
            className="instagram-tile group"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.image}
              alt=""
              className="instagram-tile-image"
              loading="lazy"
            />
            {post.type === "video" && (
              <span className="instagram-video-icon">
                <span className="instagram-video-play-triangle" />
              </span>
            )}
          </button>
        ))}
      </div>
      {active && createPortal(lightbox, document.body)}
    </>
  );
}
