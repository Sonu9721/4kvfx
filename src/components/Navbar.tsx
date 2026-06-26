import Link from "next/link";
import Image from "next/image";
import { site, nav } from "@/lib/content";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label={site.name}
        >
          <Image
            src="/brand/logo.png"
            alt={site.name}
            width={96}
            height={32}
            className="h-8 w-auto"
            priority
          />
        </Link>

        {/* Navigation links (always visible) */}
        <div className="flex items-center gap-2 text-[11px] min-[360px]:gap-3 min-[390px]:text-xs min-[400px]:gap-4 sm:gap-7 sm:text-sm text-muted">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
