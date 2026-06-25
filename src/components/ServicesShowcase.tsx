"use client";

import { useState } from "react";
import Link from "next/link";
import Icon from "./Icon";

interface ServiceItem {
  icon: "movie" | "ai" | "color" | "concept" | "tv";
  title: string;
  text: string;
  videoSrc: string;
  bullets: string[];
  galleryImages: string[];
}

const SERVICES_DATA: ServiceItem[] = [
  {
    title: "VFX, 3D & CGI",
    text: "Cinematic visual effects, 3D animation and CGI for film, TV and advertising.",
    icon: "movie",
    videoSrc: "/instagram/videos/bhooth-bangla-reel.mp4",
    bullets: ["CGI environments", "Simulation FX", "Photoreal rendering"],
    galleryImages: [
      "/work/gallery/65b9f39a8a614.jpg",
      "/work/gallery/6455771f3e9c3.png",
      "/work/gallery/6455763ec6fc2.png"
    ]
  },
  {
    title: "AI filmmaking",
    text: "AI-powered filmmaking and creative execution for faster, premium output.",
    icon: "ai",
    videoSrc: "/instagram/videos/ig-0001.mp4",
    bullets: ["AI story generation", "Character creation", "Automated production"],
    galleryImages: [
      "/instagram/dariyaa-full-song.jpg",
      "/instagram/dariyaa-teaser.jpg",
      "/instagram/ig-0003.jpg"
    ]
  },
  {
    title: "DI color grading",
    text: "Professional grading that shapes the final look, mood and tone.",
    icon: "color",
    videoSrc: "/instagram/videos/ig-0160.mp4",
    bullets: ["Film look creation", "Color balancing", "HDR mastering"],
    galleryImages: [
      "/work/beforeafter/2b.png",
      "/work/beforeafter/1b.png",
      "/work/gallery/645577ef213ba.png"
    ]
  },
  {
    title: "Concept & pre-production",
    text: "Concept, storyboard and pre-production powered by VFX and AI.",
    icon: "concept",
    videoSrc: "/instagram/videos/ig-0138.mp4",
    bullets: ["Storyboarding", "Mood boards", "Shot planning"],
    galleryImages: [
      "/work/beforeafter/3a.png",
      "/work/beforeafter/4a.png",
      "/work/beforeafter/1a.png"
    ]
  },
  {
    title: "Digital content",
    text: "Short-format content, music videos and social media campaigns.",
    icon: "tv",
    videoSrc: "/instagram/videos/ig-0012.mp4",
    bullets: ["Reels production", "Music videos", "Campaign assets"],
    galleryImages: [
      "/instagram/bhooth-bangla-reel.jpg",
      "/instagram/dariyaa-song-out.jpg",
      "/instagram/ig-0013.jpg"
    ]
  }
];

export default function ServicesShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative border-b border-border bg-transparent py-24 select-none overflow-hidden z-20">
      <div className="mx-auto max-w-[1700px] px-6">
        <p className="mb-14 text-sm uppercase tracking-[0.2em] text-muted text-center xl:text-left xl:max-w-6xl xl:mx-auto">
          What we do
        </p>

        <div className="services-container">
          {SERVICES_DATA.map((service, i) => {
            const isHovered = hoveredIndex === i;

            return (
              <div
                key={service.title}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`service-card ${isHovered ? "expanded" : ""}`}
              >
                {/* Widescreen Video area */}
                <div className="service-video-container bg-black/60">
                  {isHovered && (
                    <video
                      src={service.videoSrc}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                {/* Card Title & Icon Header */}
                <div className="service-header-wrap">
                  <Icon name={service.icon} className="service-card-icon" />
                  <h3 className="service-card-title">{service.title}</h3>
                </div>

                {/* Default state description (fades out on expand) */}
                <p className="service-card-desc-default">{service.text}</p>

                {/* Expanded content area (fades in sequentially) */}
                <div className="expanded-content-grid">
                  <div className="expanded-left">
                    <p className="expanded-desc-text">{service.text}</p>
                    <div className="service-cta">
                      <Link href="/contact" className="cta-button">
                        Explore Service
                      </Link>
                    </div>
                  </div>

                  <div className="expanded-right">
                    <div className="service-bullets">
                      <ul className="bullets-list">
                        {service.bullets.map((b) => (
                          <li key={b}>
                            <span className="check">✓</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="service-gallery">
                      <div className="gallery-row">
                        {service.galleryImages.map((img, idx) => (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={img}
                            alt=""
                            key={idx}
                            className="gallery-thumb"
                            loading="lazy"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
