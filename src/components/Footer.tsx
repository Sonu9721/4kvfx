import Link from "next/link";
import { site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <span>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </span>
        <div className="flex gap-5">
          <a href={site.social.instagram} className="transition-colors hover:text-foreground" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href={site.social.youtube} className="transition-colors hover:text-foreground" target="_blank" rel="noopener noreferrer">
            YouTube
          </a>
          <a href={site.social.linkedin} className="transition-colors hover:text-foreground" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
        <Link href="/contact" className="text-accent transition-opacity hover:opacity-80">
          {site.email}
        </Link>
      </div>
    </footer>
  );
}
