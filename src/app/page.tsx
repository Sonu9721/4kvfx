import Link from "next/link";
import Icon from "@/components/Icon";
import HeroVideo from "@/components/HeroVideo";
import Reveal from "@/components/Reveal";
import { site, services, projects, stats } from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[88vh] items-center justify-center overflow-hidden border-b border-border">
        {site.showreelYouTubeId ? (
          <HeroVideo youTubeId={site.showreelYouTubeId} />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1a1a1a,#0a0a0a)]" />
        )}
        <div className="animate-fade-up relative z-10 mx-auto max-w-3xl px-6 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-accent">
            Mumbai · Est. {site.founded}
          </p>
          <h1 className="text-4xl font-medium leading-tight sm:text-6xl">
            {site.tagline}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted sm:text-lg">
            {site.description}
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href={`https://www.youtube.com/watch?v=${site.showreelYouTubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              <Icon name="play" className="h-4 w-4" />
              Watch showreel
            </a>
            <Link
              href="/work"
              className="rounded-md border border-white/30 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white"
            >
              View our work
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="mb-12 text-sm uppercase tracking-[0.2em] text-muted">
            What we do
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="h-full rounded-lg border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent">
                  <Icon name={s.icon as never} className="h-7 w-7 text-accent" />
                  <h3 className="mt-5 text-lg font-medium">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {s.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats / trust */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-16 sm:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="text-center">
              <p className="text-3xl font-medium text-accent sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm text-muted">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured work */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12 flex items-end justify-between">
            <p className="text-sm uppercase tracking-[0.2em] text-muted">
              Featured work
            </p>
            <Link href="/work" className="text-sm text-accent hover:opacity-80">
              View all →
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 6).map((p, i) => (
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
        </div>
      </section>

      {/* Clients */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <p className="mb-10 text-sm uppercase tracking-[0.2em] text-muted">
            Trusted by
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/clients.jpg"
            alt="Clients of 4K Visuals including Sony, Zee, Colors, Star, Pepsico, P&G, Big Magic and more"
            className="mx-auto w-full max-w-4xl rounded-lg"
          />
        </div>
      </section>

      {/* Contact CTA */}
      <section>
        <Reveal className="mx-auto max-w-3xl px-6 py-24 text-center">
          <h2 className="text-3xl font-medium sm:text-4xl">
            Have a project in mind?
          </h2>
          <p className="mt-4 text-muted">
            Let&apos;s create something cinematic together.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-md bg-accent px-7 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Start a project
          </Link>
        </Reveal>
      </section>
    </>
  );
}
