"use client";

import { useEffect, useRef, useState } from "react";

const POSTS_PER_BATCH = 6;

type BeholdPost = {
  id: string;
  timestamp: string;
  permalink: string;
  mediaType: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM" | string;
  isReel?: boolean;
  caption?: string;
  prunedCaption?: string;
  mediaUrl?: string;
  thumbnailUrl?: string;
  sizes?: {
    medium?: { mediaUrl: string };
    large?: { mediaUrl: string };
    full?: { mediaUrl: string };
  };
};

type BeholdFeedResponse = {
  username?: string;
  posts?: BeholdPost[];
};

function getPostImage(post: BeholdPost) {
  return (
    post.sizes?.medium?.mediaUrl ||
    post.sizes?.large?.mediaUrl ||
    post.thumbnailUrl ||
    post.mediaUrl ||
    ""
  );
}

export default function BeholdFeed({ feedId }: { feedId: string }) {
  const [posts, setPosts] = useState<BeholdPost[]>([]);
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_BATCH);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadFeed() {
      try {
        setIsLoading(true);
        setHasError(false);

        const response = await fetch(`https://feeds.behold.so/${feedId}`);

        if (!response.ok) {
          throw new Error("Instagram feed failed to load");
        }

        const data = (await response.json()) as BeholdFeedResponse;
        const orderedPosts = [...(data.posts || [])].sort(
          (a, b) =>
            new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime(),
        );

        if (!cancelled) {
          setPosts(orderedPosts);
          setVisibleCount(POSTS_PER_BATCH);
        }
      } catch {
        if (!cancelled) {
          setHasError(true);
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    }

    if (feedId) {
      loadFeed();
    }

    return () => {
      cancelled = true;
    };
  }, [feedId]);

  useEffect(() => {
    if (!loadMoreRef.current || visibleCount >= posts.length) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleCount((current) =>
            Math.min(current + POSTS_PER_BATCH, posts.length),
          );
        }
      },
      { rootMargin: "600px 0px" },
    );

    observer.observe(loadMoreRef.current);

    return () => observer.disconnect();
  }, [posts.length, visibleCount]);

  if (!feedId) return null;

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square animate-pulse rounded-sm bg-white/10"
          />
        ))}
      </div>
    );
  }

  if (hasError || posts.length === 0) {
    return (
      <div className="rounded-lg border border-border bg-surface p-8 text-center">
        <p className="text-sm text-muted">
          Instagram feed is taking a moment to load. Visit{" "}
          <a
            href="https://www.instagram.com/4k_visuals_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:opacity-80"
          >
            @4k_visuals_
          </a>
          .
        </p>
      </div>
    );
  }

  const visiblePosts = posts.slice(0, visibleCount);

  return (
    <>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
        {visiblePosts.map((post) => {
          const image = getPostImage(post);
          const label =
            post.prunedCaption || post.caption || "Open Instagram post";
          const isVideo = post.mediaType === "VIDEO" || post.isReel;

          return (
            <a
              key={post.id}
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="group relative aspect-square overflow-hidden rounded-sm bg-surface"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image}
                alt=""
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-75"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition group-hover:bg-black/35 group-hover:opacity-100">
                {isVideo ? (
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-background">
                    <span className="ml-1 block h-0 w-0 border-y-[8px] border-l-[12px] border-y-transparent border-l-background" />
                  </span>
                ) : (
                  <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-medium text-background">
                    View
                  </span>
                )}
              </div>
              {isVideo && (
                <span className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-black/50">
                  <span className="ml-0.5 block h-0 w-0 border-y-[5px] border-l-[8px] border-y-transparent border-l-white" />
                </span>
              )}
            </a>
          );
        })}
      </div>
      {visibleCount < posts.length && (
        <div ref={loadMoreRef} className="h-12" aria-hidden="true" />
      )}
    </>
  );
}
