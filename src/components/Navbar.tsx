"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { site, nav } from "@/lib/content";

export default function Navbar() {
  const [logoWidth, setLogoWidth] = useState(120);
  const [logoTop, setLogoTop] = useState("23px");

  useEffect(() => {
    const handleResize = () => {
      const isDesktop = window.innerWidth >= 640;
      setLogoWidth(isDesktop ? 224 : 120);
      setLogoTop(isDesktop ? "4px" : "23px");
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
          <div style={{ position: "absolute", top: logoTop, left: 0 }}>
            <Image
              src="/brand/logo.png"
              alt={site.name}
              width={144}
              height={48}
              className="h-[40px] sm:h-[72px] w-auto max-w-none"
              priority
            />
          </div>
        </Link>

        {/* Navigation links (always visible) */}
        <div className="flex items-center gap-1 sm:gap-7 text-[9.5px] sm:text-sm text-muted">
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
