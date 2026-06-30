import type { Metadata } from "next";
import CareersList from "@/components/CareersList";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join 4K Visuals — a Mumbai VFX studio. Open roles for compositors, roto/paint artists, 3D generalists, matchmove artists, and AI Automation - Generative AI Developers.",
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

      <CareersList />

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
