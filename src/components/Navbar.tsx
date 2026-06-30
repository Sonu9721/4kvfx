"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { site, nav } from "@/lib/content";

export default function Navbar() {
  const [logoWidth, setLogoWidth] = useState(112);

  useEffect(() => {
    const handleResize = () => {
      setLogoWidth(window.innerWidth >= 640 ? 224 : 112);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link
          href="/"
          style={{
            position: "relative",
            zIndex: 50,
            display: "flex",
            alignItems: "center",
            width: `${logoWidth}px`,
            height: "32px",
            flexShrink: 0
          }}
          aria-label={site.name}
        >
          <div className="absolute top-[8px] sm:top-[4px] left-0">
            <Image
              src="/brand/logo.png"
              alt={site.name}
              width={144}
              height={48}
              className="h-[36px] sm:h-[72px] w-auto max-w-none"
              priority
            />
          </div>
        </Link>

        {/* Navigation links (always visible) */}
        <div className="flex items-center gap-1.5 sm:gap-7 text-[10px] sm:text-sm text-muted">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link font-medium transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
