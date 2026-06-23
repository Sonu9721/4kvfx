import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/content";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — ${project.category}`,
    description: project.brief,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <article className="mx-auto max-w-4xl px-6 py-16">
      <Link href="/work" className="text-sm text-muted hover:text-accent">
        ← Back to work
      </Link>

      <header className="mt-6">
        <p className="text-sm uppercase tracking-[0.2em] text-accent">
          {project.client} · {project.category}
        </p>
        <h1 className="mt-3 text-4xl font-medium sm:text-5xl">{project.title}</h1>
      </header>

      {/* Hero video or image */}
      <div className="mt-10 aspect-video overflow-hidden rounded-lg border border-border bg-surface">
        {project.video ? (
          <iframe
            src={project.video}
            title={project.title}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : project.thumb ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.thumb}
            alt={`${project.title} — ${project.category} for ${project.client}`}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-muted">
            project video / still
          </div>
        )}
      </div>

      {/* Details */}
      <div className="mt-12 grid gap-10 sm:grid-cols-3">
        <div>
          <h2 className="text-sm uppercase tracking-[0.15em] text-muted">Brief</h2>
          <p className="mt-3 text-sm leading-relaxed">{project.brief}</p>
        </div>
        <div>
          <h2 className="text-sm uppercase tracking-[0.15em] text-muted">
            Challenge
          </h2>
          <p className="mt-3 text-sm leading-relaxed">{project.challenge}</p>
        </div>
        <div>
          <h2 className="text-sm uppercase tracking-[0.15em] text-muted">
            Our process
          </h2>
          <p className="mt-3 text-sm leading-relaxed">{project.process}</p>
        </div>
      </div>

      {/* Before / after breakdown */}
      {project.beforeAfter && project.beforeAfter.length > 0 && (
        <div className="mt-14">
          <h2 className="mb-5 text-sm uppercase tracking-[0.15em] text-muted">
            Before / after
          </h2>
          <div className="space-y-6">
            {project.beforeAfter.map((ba, i) => (
              <div key={i} className="grid gap-4 sm:grid-cols-2">
                <figure className="relative overflow-hidden rounded-lg border border-border">
                  <span className="absolute left-3 top-3 z-10 rounded bg-black/70 px-2 py-1 text-xs text-muted">
                    Before
                  </span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={ba.before}
                    alt={`${project.title} — original plate ${i + 1}`}
                    className="aspect-video w-full object-cover"
                  />
                </figure>
                <figure className="relative overflow-hidden rounded-lg border border-border">
                  <span className="absolute left-3 top-3 z-10 rounded bg-accent px-2 py-1 text-xs text-background">
                    After
                  </span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={ba.after}
                    alt={`${project.title} — final VFX shot ${i + 1}`}
                    className="aspect-video w-full object-cover"
                  />
                </figure>
              </div>
            ))}
          </div>
        </div>
      )}

      {project.credits && (
        <p className="mt-12 text-sm text-muted">{project.credits}</p>
      )}

      <div className="mt-16 border-t border-border pt-10 text-center">
        <p className="text-lg">Like what you see?</p>
        <Link
          href="/contact"
          className="mt-5 inline-block rounded-md bg-accent px-7 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          Start a project
        </Link>
      </div>
    </article>
  );
}
