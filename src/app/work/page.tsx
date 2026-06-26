import type { Metadata } from "next";
import { instagramPosts } from "@/lib/content";
import ManualInstagramGrid from "@/components/ManualInstagramGrid";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected VFX, 3D animation and visual effects projects by 4K Visuals.",
};

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <header className="animate-fade-up mb-12">
        <h1 className="text-4xl font-medium sm:text-5xl">Our work</h1>
      </header>

      {/* Professional VFX quotation */}
      <Reveal className="animate-fade-up mb-16 border-l-2 border-accent pl-6 py-2">
        <blockquote className="text-xl italic font-light md:text-2xl text-foreground/90 leading-relaxed">
          &ldquo;Visual effects is the art of invisible storytelling&mdash;where cutting-edge technology meets raw imagination to craft realities that inspire, engage, and leave a lasting impact.&rdquo;
        </blockquote>
        <cite className="mt-3 block text-sm not-italic uppercase tracking-wider text-accent font-medium">
          &mdash; 4K Visuals
        </cite>
      </Reveal>

      {/* Instagram feed */}
      {instagramPosts.length > 0 && (
        <div className="mt-8 max-w-[935px] mx-auto">
          <ManualInstagramGrid posts={instagramPosts} />
        </div>
      )}
    </div>
  );
}

