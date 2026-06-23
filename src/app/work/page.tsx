import type { Metadata } from "next";
import Link from "next/link";
import { projects, gallery, instagramPosts } from "@/lib/content";
import GalleryGrid from "@/components/GalleryGrid";
import ManualInstagramGrid from "@/components/ManualInstagramGrid";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected VFX, 3D animation and visual effects projects by 4K Visuals for Bollywood film, TV and OTT.",
};

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <header className="animate-fade-up mb-14">
        <h1 className="text-4xl font-medium sm:text-5xl">Our work</h1>
        <p className="mt-4 max-w-2xl text-muted">
          A selection of visual effects, 3D animation and digital content we have
          crafted for film, television and OTT.
        </p>
      </header>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 3) * 80}>
            <Link href={`/work/${p.slug}`}>
              <article className="group relative aspect-[16/10] overflow-hidden rounded-lg border border-border bg-surface">
              {p.thumb ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={p.thumb}
                  alt={`${p.title} — ${p.category} for ${p.client}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-xs text-muted">
                  project image
                </div>
              )}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-sm font-medium">{p.title}</p>
                  <p className="text-xs text-muted">
                    {p.client} · {p.category}
                  </p>
                </div>
              </article>
            </Link>
          </Reveal>
        ))}
      </div>

      {/* Full portfolio gallery */}
      <div className="mt-20">
        <Reveal className="mb-10">
          <h2 className="text-2xl font-medium sm:text-3xl">Gallery</h2>
          <p className="mt-3 max-w-2xl text-muted">
            A wider look at shots and stills from across our projects. Click any
            image to view it full size.
          </p>
        </Reveal>
        <GalleryGrid images={gallery} />
      </div>

      {/* Instagram feed */}
      {instagramPosts.length > 0 && (
        <div className="mt-20">
          <Reveal className="mb-10">
            <h2 className="text-2xl font-medium sm:text-3xl">Instagram</h2>
            <p className="mt-3 max-w-2xl text-muted">
              Latest from{" "}
              <a
                href="https://instagram.com/4k_visuals_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:opacity-80"
              >
                @4k_visuals_
              </a>
              .
            </p>
          </Reveal>
          <ManualInstagramGrid posts={instagramPosts} />
        </div>
      )}
    </div>
  );
}
