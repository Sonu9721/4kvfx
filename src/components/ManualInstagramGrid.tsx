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
      <div className="grid grid-cols-3 gap-[3px] bg-black">
        {posts.map((post) => (
          <button
            key={post.image}
            onClick={() => setActive(post)}
            aria-label={post.title}
            className="group relative block aspect-[4/5] w-full appearance-none overflow-hidden border-0 bg-surface p-0"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.image}
              alt=""
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-75"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition group-hover:bg-black/35 group-hover:opacity-100">
              {post.type === "video" ? (
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-background">
                  <span className="ml-1 block h-0 w-0 border-y-[8px] border-l-[12px] border-y-transparent border-l-background" />
                </span>
              ) : (
                <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-medium text-background">
                  View
                </span>
              )}
            </div>
            {post.type === "video" && (
              <span className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-black/50">
                <span className="ml-0.5 block h-0 w-0 border-y-[5px] border-l-[8px] border-y-transparent border-l-white" />
              </span>
            )}
          </button>
        ))}
      </div>
      {active && createPortal(lightbox, document.body)}
    </>
  );
}
