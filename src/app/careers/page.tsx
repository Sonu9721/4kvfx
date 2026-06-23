import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { roles, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join 4K Visuals — a Mumbai VFX studio. Open roles for compositors, roto/paint artists, 3D generalists and matchmove artists.",
};

export default function CareersPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <header className="mb-14 max-w-2xl">
        <h1 className="text-4xl font-medium sm:text-5xl">Careers</h1>
        <p className="mt-4 text-muted">
          We&apos;re always looking for talented artists who care about craft.
          Work on Bollywood, TV and OTT projects with a team that pushes every
          frame.
        </p>
      </header>

      <div className="space-y-4">
        {roles.map((r, i) => (
          <Reveal key={r.title} delay={i * 70}>
            <div className="flex flex-col gap-4 rounded-lg border border-border bg-surface p-6 transition-colors hover:border-accent sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-medium">{r.title}</h2>
                <p className="text-sm text-muted">{r.type}</p>
                <p className="mt-1 text-sm text-muted">{r.text}</p>
              </div>
              <a
                href={`mailto:${site.email}?subject=${encodeURIComponent(
                  "Application — " + r.title
                )}`}
                className="shrink-0 rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
              >
                Apply
              </a>
            </div>
          </Reveal>
        ))}
      </div>

      <p className="mt-10 text-sm text-muted">
        Don&apos;t see your role? Send your reel and CV to{" "}
        <a href={`mailto:${site.email}`} className="text-accent hover:opacity-80">
          {site.email}
        </a>
        .
      </p>
    </div>
  );
}
