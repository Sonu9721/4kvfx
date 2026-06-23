import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import TeamCard from "@/components/TeamCard";
import { site, services, clients, team } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "4K Visuals is a Mumbai VFX and 3D animation studio established in 2012, working with leading broadcasters and production houses.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="animate-fade-up text-4xl font-medium sm:text-5xl">
        About {site.name}
      </h1>

      <div className="animate-fade-up mt-8 space-y-6 text-lg leading-relaxed text-muted">
        <p>
          {site.name} is a Mumbai-based VFX, 3D animation, CGI, AI filmmaking and
          creative production studio built for the fast-evolving world of
          entertainment, advertising and digital content.
        </p>
        <p>
          The studio brings together cinematic visual effects, advanced AI
          workflows and creative production capabilities to deliver powerful
          visual solutions for films, television, advertising films, web
          promotions, digital campaigns and large-scale visual storytelling.
        </p>
        <p>
          Founded in {site.founded} by Chandra Bhan Kushwaha, Abhijaat Dhongade
          and Arvind Yadav, {site.name} is backed by VFX industry experience
          dating back to 2007. The founders bring strong technical command,
          cinematic understanding and deep production expertise, giving the studio
          a solid foundation in both creativity and execution.
        </p>
        <p>
          From complex VFX shots to AI-powered filmmaking, from brand films to
          digital content, {site.name} delivers visuals designed to look
          cinematic, premium and future-ready. The studio&apos;s services include
          VFX &amp; 3D animation, CGI, AI filmmaking, AI advertising, AI pipeline
          automation, DI color grading, editing, concept &amp; design, creative
          execution, corporate branding, pre-production support and digital
          content creation.
        </p>
        <p>
          With a strong blend of senior VFX experience and advanced AI-driven
          workflows, {site.name} helps creators, brands and production houses move
          faster, execute smarter and deliver visually striking content built for
          today&apos;s entertainment and advertising landscape.
        </p>
      </div>

      <Reveal className="mt-14">
        <h2 className="text-2xl font-medium">What we do</h2>
        <ul className="mt-6 space-y-3 text-muted">
          {services.map((s) => (
            <li key={s.title} className="flex gap-3">
              <span className="text-accent">—</span>
              <span>
                <span className="text-foreground">{s.title}.</span> {s.text}
              </span>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal className="mt-14">
        <h2 className="text-2xl font-medium">Leadership</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 80} className="h-full">
              <TeamCard member={m} />
            </Reveal>
          ))}
        </div>
      </Reveal>

      <Reveal className="mt-14">
        <h2 className="text-2xl font-medium">Clients</h2>
        <p className="mt-4 text-muted">
          We are proud to have worked with {clients.join(", ")} and many more.
        </p>
      </Reveal>
    </div>
  );
}
