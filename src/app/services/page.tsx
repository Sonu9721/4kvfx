import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { servicesDetailed } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Services by 4K Visuals — VFX, 3D animation & CGI, AI filmmaking, DI color grading, concept & pre-production, and digital content production.",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <header className="animate-fade-up mb-14 max-w-2xl">
        <h1 className="text-4xl font-medium sm:text-5xl">Services</h1>
        <p className="mt-4 text-muted">
          From cinematic VFX to AI-powered filmmaking — a full creative pipeline
          built for films, advertising and digital content.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {servicesDetailed.map((s, i) => (
          <Reveal key={s.title} delay={(i % 2) * 80}>
            <div className="h-full rounded-lg border border-border bg-surface p-8 transition-colors hover:border-accent">
              <span className="text-sm text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-3 text-xl font-medium">{s.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-16 rounded-lg border border-border bg-surface p-10 text-center">
          <h2 className="text-2xl font-medium">Need a custom pipeline?</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted">
            We work as an extension of your team — secure, reliable and built
            around your delivery schedule.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-md bg-accent px-7 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Talk to us
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
