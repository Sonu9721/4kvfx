"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Icon from "./Icon";

interface ServiceItem {
  icon: "movie" | "ai" | "color" | "concept" | "tv";
  title: string;
  text: string;
  featuredImage: string;
  bullets: string[];
}

const SERVICES_DATA: ServiceItem[] = [
  {
    title: "VFX, 3D & CGI",
    text: "Cinematic visual effects, 3D animation and CGI for film, TV and advertising.",
    icon: "movie",
    featuredImage: "/work/gallery/65b9f39a8a614.jpg",
    bullets: ["CGI environments", "Simulation FX", "Photoreal rendering"]
  },
  {
    title: "AI filmmaking",
    text: "AI-powered filmmaking and creative execution for faster, premium output.",
    icon: "ai",
    featuredImage: "/instagram/dariyaa-full-song.jpg",
    bullets: ["AI story generation", "Character creation", "Automated production"]
  },
  {
    title: "DI color grading",
    text: "Professional grading that shapes the final look, mood and tone.",
    icon: "color",
    featuredImage: "/work/beforeafter/2b.png",
    bullets: ["Film look creation", "Color balancing", "HDR mastering"]
  },
  {
    title: "Concept & pre-production",
    text: "Concept, storyboard and pre-production powered by VFX and AI.",
    icon: "concept",
    featuredImage: "/work/beforeafter/3a.png",
    bullets: ["Storyboarding", "Mood boards", "Shot planning"]
  },
  {
    title: "Digital content",
    text: "Short-format content, music videos and social media campaigns.",
    icon: "tv",
    featuredImage: "/instagram/bhooth-bangla-reel.jpg",
    bullets: ["Reels production", "Music videos", "Campaign assets"]
  }
];

export default function ServicesShowcase() {
  const [scalingIndex, setScalingIndex] = useState<number | null>(null);
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);
  const [initialRect, setInitialRect] = useState<DOMRect | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [windowSize, setWindowSize] = useState(() => {
    if (typeof window !== "undefined") {
      return { width: window.innerWidth, height: window.innerHeight };
    }
    return { width: 1200, height: 800 };
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const handleCardClick = (index: number) => {
    if (activeCardIndex !== null || scalingIndex !== null) return;
    setScalingIndex(index);

    setTimeout(() => {
      const element = document.getElementById(`service-card-${index}`);
      if (element) {
        const rect = element.getBoundingClientRect();
        setInitialRect(rect);
        setActiveCardIndex(index);
        setIsExpanded(false);
        setScalingIndex(null);

        // Allow DOM to mount the modal, then trigger transition
        setTimeout(() => {
          setIsExpanded(true);
        }, 50);
      }
    }, 250);
  };

  const handleClose = useCallback(() => {
    if (activeCardIndex === null) return;
    setIsExpanded(false);
    setTimeout(() => {
      setActiveCardIndex(null);
      setInitialRect(null);
    }, 800);
  }, [activeCardIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleClose]);

  // Calculate coordinates for FLIP animation
  const windowWidth = windowSize.width;
  const windowHeight = windowSize.height;

  let targetW = 700;
  let targetH = 520;

  if (windowWidth < 768) {
    targetW = windowWidth * 0.95;
    targetH = windowHeight * 0.85;
  } else if (windowWidth < 1024) {
    targetW = windowWidth * 0.9;
    targetH = windowHeight * 0.75;
  }

  const targetLeft = (windowWidth - targetW) / 2;
  const targetTop = (windowHeight - targetH) / 2;

  const sx = initialRect ? initialRect.width / targetW : 1;
  const sy = initialRect ? initialRect.height / targetH : 1;
  const tx = initialRect ? initialRect.left - targetLeft : 0;
  const ty = initialRect ? initialRect.top - targetTop : 0;

  const cardStyle: React.CSSProperties = {
    width: `${targetW}px`,
    height: `${targetH}px`,
    left: `${targetLeft}px`,
    top: `${targetTop}px`,
    transform: isExpanded
      ? "translate3d(0, 0, 0) scale(1) rotateY(180deg)"
      : `translate3d(${tx}px, ${ty}px, 0) scale(${sx}, ${sy}) rotateY(0deg)`
  };

  const activeService = activeCardIndex !== null ? SERVICES_DATA[activeCardIndex] : null;

  return (
    <section className="relative border-b border-border bg-transparent py-24 select-none overflow-hidden z-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-14 text-sm uppercase tracking-[0.2em] text-muted text-center xl:text-left">
          What we do
        </p>

        {/* Static horizontal / wrapping grid */}
        <div className={`services-grid ${activeCardIndex !== null ? "blurred" : ""}`}>
          {SERVICES_DATA.map((service, i) => {
            const isScaling = scalingIndex === i;

            return (
              <div
                id={`service-card-${i}`}
                key={service.title}
                onClick={() => handleCardClick(i)}
                className={`service-card-static ${isScaling ? "scaling" : ""}`}
              >
                <Icon name={service.icon} className="service-card-icon" />
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc-default">{service.text}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dark blur backdrop */}
      {activeCardIndex !== null && (
        <div
          onClick={handleClose}
          className={`modal-backdrop-blur ${isExpanded ? "visible" : ""}`}
        />
      )}

      {/* FLIP 3D Flipping Modal Card */}
      {activeCardIndex !== null && activeService && (
        <div className={`modal-card ${isExpanded ? "expanded" : ""}`} style={cardStyle}>
          {/* Front Face of the card */}
          <div className="card-face card-face-front">
            <Icon name={activeService.icon} className="service-card-icon" />
            <h3 className="service-card-title">{activeService.title}</h3>
            <p className="service-card-desc-default">{activeService.text}</p>
          </div>

          {/* Back Face of the card */}
          <div className="card-face card-face-back">
            {/* Close X Button */}
            <button
              onClick={handleClose}
              className="absolute right-4 top-4 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white/80 transition-colors hover:bg-black/80 hover:text-white"
              aria-label="Close details"
            >
              ✕
            </button>

            {/* Featured Image */}
            <div className="featured-image-container">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activeService.featuredImage}
                alt=""
                className="featured-image"
              />
            </div>

            {/* Details Content below image */}
            <div className="back-content-container">
              <h3 className="back-title">{activeService.title}</h3>
              <p className="back-desc">{activeService.text}</p>

              <div className="back-details-row">
                {/* Bullet Highlights */}
                <div className="back-highlights">
                  <ul className="bullets-list">
                    {activeService.bullets.map((b) => (
                      <li key={b}>
                        <span className="check">✓</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Explore CTA Button */}
                <div className="back-cta">
                  <Link href="/contact" onClick={handleClose} className="cta-button">
                    Explore Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
