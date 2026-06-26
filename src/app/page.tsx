import Link from "next/link";
import Icon from "@/components/Icon";
import HeroVideo from "@/components/HeroVideo";
import Reveal from "@/components/Reveal";
import BrandShowcase from "@/components/BrandShowcase";
import { site } from "@/lib/content";
import ServicesShowcase from "@/components/ServicesShowcase";

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
              className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
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

      {/* Services Showcase Redesign */}
      <ServicesShowcase />
      {/* Brands Section */}
      <BrandShowcase />

      {/* Partners Section */}
      <section className="bg-transparent py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <Reveal className="mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold bg-accent/10 px-4 py-1.5 rounded-full border border-accent/20">
              Broadcast Partners
            </span>
            <h2 className="mt-6 text-3xl font-medium sm:text-4xl">Our Channel Partners</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted">
              Proudly collaborating with leading television networks and digital streaming platforms to deliver content.
            </p>
          </Reveal>

          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center max-w-4xl mx-auto mt-8">
            <Reveal delay={80}>
              <div className="overflow-hidden rounded-xl bg-transparent transition-transform duration-300 hover:scale-105 h-full flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/partners/partner-1.png"
                  alt="Sony Group channels"
                  className="w-full h-auto object-contain"
                />
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="overflow-hidden rounded-xl bg-transparent transition-transform duration-300 hover:scale-105 h-full flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/partners/partner-2.png"
                  alt="Sony Group channels part 2"
                  className="w-full h-auto object-contain"
                />
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div className="overflow-hidden rounded-xl bg-transparent transition-transform duration-300 hover:scale-105 h-full flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/partners/partner-3.png"
                  alt="Colors Viacom18 channels"
                  className="w-full h-auto object-contain"
                />
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="overflow-hidden rounded-xl bg-transparent transition-transform duration-300 hover:scale-105 h-full flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/partners/partner-4.png"
                  alt="OTT Digital platforms"
                  className="w-full h-auto object-contain"
                />
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="overflow-hidden rounded-xl bg-transparent transition-transform duration-300 hover:scale-105 h-full flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/partners/partner-5.png"
                  alt="Star Disney channels"
                  className="w-full h-auto object-contain"
                />
              </div>
            </Reveal>

            <Reveal delay={480}>
              <div className="overflow-hidden rounded-xl bg-transparent transition-transform duration-300 hover:scale-105 h-full flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/partners/partner-6.png"
                  alt="Zee Group channels"
                  className="w-full h-auto object-contain"
                />
              </div>
            </Reveal>
          </div>
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
            className="mt-8 inline-block rounded-md bg-accent px-7 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Start a project
          </Link>
        </Reveal>
      </section>
    </>
  );
}
