"use client";

import { useState, useRef, useEffect } from "react";

// Realistic 3D Film Reel Spool Component
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
function FilmReel({ 
  id, 
  className = "", 
  style = {}, 
  speed = "25s", 
  reverse = false 
}: { 
  id: string; 
  className?: string; 
  style?: React.CSSProperties; 
  speed?: string; 
  reverse?: boolean;
}) {
  return (
    <div 
      className={`relative pointer-events-none ${className}`} 
      style={{ 
        transformStyle: 'preserve-3d',
        ...style 
      }}
    >
      {/* Bottom Flange */}
      <div className="absolute inset-0" style={{ transform: 'translateZ(0px)', transformStyle: 'preserve-3d' }}>
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_14px_22px_rgba(0,0,0,0.95)]">
          <circle cx="50" cy="50" r="45" fill="#0f1013" />
          <circle cx="50" cy="50" r="45" stroke="#1f2127" strokeWidth="1" fill="none" />
        </svg>
      </div>
      
      {/* Film Roll Core */}
      <div className="absolute inset-0" style={{ transform: 'translateZ(5px)', transformStyle: 'preserve-3d', animation: `spin ${speed} linear infinite ${reverse ? 'reverse' : ''}` }}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="35" fill="#08090b" />
          {/* Film wound wraps */}
          <circle cx="50" cy="50" r="32" stroke="#121317" strokeWidth="1.2" fill="none" />
          <circle cx="50" cy="50" r="29" stroke="#1a1b21" strokeWidth="1.2" fill="none" />
          <circle cx="50" cy="50" r="26" stroke="#121317" strokeWidth="1.2" fill="none" />
          <circle cx="50" cy="50" r="23" stroke="#22242a" strokeWidth="1.2" fill="none" />
          <circle cx="50" cy="50" r="20" stroke="#121317" strokeWidth="1.2" fill="none" />
          <circle cx="50" cy="50" r="17" stroke="#1a1b21" strokeWidth="1.2" fill="none" />
          <circle cx="50" cy="50" r="14" stroke="#121317" strokeWidth="1.2" fill="none" />
          <circle cx="50" cy="50" r="11" stroke="#22242a" strokeWidth="1.2" fill="none" />
        </svg>
      </div>
      
      {/* Top Flange */}
      <div className="absolute inset-0" style={{ transform: 'translateZ(10px)', transformStyle: 'preserve-3d' }}>
        <svg viewBox="0 0 100 100" className="w-full h-full" style={{ animation: `spin ${speed} linear infinite ${reverse ? 'reverse' : ''}` }}>
          <defs>
            <linearGradient id={`metal-grad-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#181a1f" />
              <stop offset="20%" stopColor="#515560" />
              <stop offset="40%" stopColor="#0e0f12" />
              <stop offset="60%" stopColor="#757c8c" />
              <stop offset="80%" stopColor="#121316" />
              <stop offset="100%" stopColor="#282c33" />
            </linearGradient>
            <linearGradient id={`gold-rim-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#90690e" />
              <stop offset="30%" stopColor="#cc9f44" />
              <stop offset="50%" stopColor="#f5ecd8" />
              <stop offset="70%" stopColor="#cc9f44" />
              <stop offset="100%" stopColor="#90690e" />
            </linearGradient>
            <mask id={`reel-mask-${id}`}>
              <rect x="0" y="0" width="100" height="100" fill="white" />
              <circle cx="50" cy="50" r="8" fill="black" />
              <circle cx="75" cy="50" r="11" fill="black" />
              <circle cx="62.5" cy="71.65" r="11" fill="black" />
              <circle cx="37.5" cy="71.65" r="11" fill="black" />
              <circle cx="25" cy="50" r="11" fill="black" />
              <circle cx="37.5" cy="28.35" r="11" fill="black" />
              <circle cx="62.5" cy="28.35" r="11" fill="black" />
            </mask>
          </defs>
          
          {/* Main flange plate */}
          <circle cx="50" cy="50" r="45" fill={`url(#metal-grad-${id})`} mask={`url(#reel-mask-${id})`} />
          
          {/* Shiny metallic gold outer rim */}
          <circle cx="50" cy="50" r="45" stroke={`url(#gold-rim-${id})`} strokeWidth="1.2" fill="none" className="opacity-90" />
          
          {/* Subtle reflection overlay */}
          <circle cx="50" cy="50" r="45" stroke="rgba(255,255,255,0.12)" strokeWidth="0.6" fill="none" />
          <circle cx="50" cy="50" r="43.5" stroke="rgba(0,0,0,0.4)" strokeWidth="0.6" fill="none" />
          
          {/* Inner ring detailing */}
          <circle cx="50" cy="50" r="16" stroke={`url(#gold-rim-${id})`} strokeWidth="0.8" fill="none" className="opacity-60" />
          
          {/* Central brass spindle hub */}
          <circle cx="50" cy="50" r="8" fill={`url(#gold-rim-${id})`} />
          <circle cx="50" cy="50" r="5" fill="#060608" />
          {/* Center spindle details */}
          <path d="M48 50 L52 50 M50 48 L50 52" stroke={`url(#gold-rim-${id})`} strokeWidth="1" />
        </svg>
      </div>
    </div>
  );
}

// List of all cropped brand logos (flattened)
const BRAND_LOGOS = [
  { id: "whatsapp", name: "WhatsApp", path: "/brand-logos/whatsapp.jpg" },
  { id: "sprite", name: "Sprite", path: "/brand-logos/sprite.jpg" },
  { id: "eno", name: "ENO", path: "/brand-logos/eno.jpg" },
  { id: "tanishq", name: "Tanishq", path: "/brand-logos/tanishq.jpg" },
  { id: "daawat", name: "Daawat", path: "/brand-logos/daawat.jpg" },
  { id: "mother_dairy", name: "Mother Dairy", path: "/brand-logos/mother_dairy.jpg" },
  { id: "lnt", name: "L&T", path: "/brand-logos/lnt.jpg" },
  { id: "adani", name: "Adani Airports", path: "/brand-logos/adani.jpg" },
  { id: "stayfree", name: "Stayfree", path: "/brand-logos/stayfree.jpg" },
  { id: "himalaya", name: "Himalaya", path: "/brand-logos/himalaya.jpg" },
  { id: "icici", name: "ICICI Prudential", path: "/brand-logos/icici.jpg" },
  { id: "cipla", name: "Cipla", path: "/brand-logos/cipla.jpg" },
  { id: "angel_one", name: "Angel One", path: "/brand-logos/angel_one.jpg" },
  { id: "hdfc_life", name: "HDFC Life", path: "/brand-logos/hdfc_life.jpg" },
  { id: "canara_hsbc", name: "Canara HSBC", path: "/brand-logos/canara_hsbc.jpg" },
  { id: "jsw_cement", name: "JSW Cement", path: "/brand-logos/jsw_cement.jpg" },
  { id: "tata_tea", name: "TATA Tea Agni", path: "/brand-logos/tata_tea.jpg" },
  { id: "pro_ease", name: "Pro-ease", path: "/brand-logos/pro_ease.jpg" },
  { id: "everest", name: "Everest", path: "/brand-logos/everest.jpg" },
  { id: "aditya_birla", name: "Aditya Birla Group", path: "/brand-logos/aditya_birla.jpg" },
  { id: "png_jewellers", name: "PNG Jewellers", path: "/brand-logos/png_jewellers.jpg" },
  { id: "kurkure", name: "Kurkure", path: "/brand-logos/kurkure.jpg" },
  { id: "hair_care", name: "Hair & Care", path: "/brand-logos/hair_care.jpg" },
  { id: "ownid", name: "Ownid", path: "/brand-logos/ownid.jpg" },
];

// Shuffle entrance directions for organic LED board assembly
const SHUFFLE_DIRECTIONS = [
  { x: -220, y: 0, z: -80, rX: -8, rY: -8 },    // Left
  { x: 220, y: 0, z: -80, rX: 8, rY: 8 },      // Right
  { x: 0, y: -180, z: -60, rX: -8, rY: 0 },    // Top
  { x: 0, y: 180, z: -60, rX: 8, rY: 0 },      // Bottom
  { x: -160, y: -130, z: -80, rX: -6, rY: -6 }, // Top-Left
  { x: 160, y: -130, z: -80, rX: -6, rY: 6 },   // Top-Right
  { x: -160, y: 130, z: -80, rX: 6, rY: -6 },   // Bottom-Left
  { x: 160, y: 130, z: -80, rX: 6, rY: 6 },    // Bottom-Right
];

// Asymmetrical mosaic layout offsets (breaks grid linearity, matching reference image)
const SHUFFLE_OFFSETS = [
  { x: -8, y: -20 }, { x: 6, y: 15 },  { x: -5, y: -10 }, { x: 10, y: 18 },  { x: -8, y: -24 }, { x: 9, y: 10 },
  { x: -12, y: 16 },  { x: 8, y: -12 }, { x: -6, y: -18 }, { x: 11, y: 20 },  { x: -10, y: -8 },  { x: 5, y: 14 },
  { x: -10, y: -12 }, { x: 8, y: 18 },  { x: -6, y: -6 },   { x: 12, y: 10 },  { x: -5, y: -20 }, { x: 8, y: 15 },
  { x: -12, y: 12 },  { x: 6, y: -15 }, { x: -9, y: -18 }, { x: 10, y: 14 },  { x: -8, y: 8 },   { x: 9, y: -10 }
];

interface TiltState {
  id: string;
  rotateX: number;
  rotateY: number;
  x: number;
  y: number;
}

const STATIC_PARTICLES = [
  { width: 3.5, height: 4.2, left: 12, top: 45, delay: 1.2, duration: 18 },
  { width: 2.1, height: 2.1, left: 45, top: 78, delay: 0.5, duration: 22 },
  { width: 4.8, height: 3.2, left: 88, top: 15, delay: 4.1, duration: 15 },
  { width: 2.7, height: 2.9, left: 34, top: 62, delay: 2.8, duration: 25 },
  { width: 3.9, height: 4.0, left: 67, top: 28, delay: 5.3, duration: 19 },
  { width: 2.4, height: 2.2, left: 19, top: 91, delay: 0.1, duration: 14 },
  { width: 4.5, height: 4.7, left: 53, top: 50, delay: 3.6, duration: 21 },
  { width: 3.0, height: 3.1, left: 82, top: 73, delay: 6.2, duration: 26 },
  { width: 2.2, height: 2.5, left: 29, top: 12, delay: 1.9, duration: 17 },
  { width: 4.1, height: 4.3, left: 74, top: 88, delay: 4.8, duration: 20 },
  { width: 3.7, height: 3.5, left: 61, top: 37, delay: 2.4, duration: 23 },
  { width: 2.8, height: 2.6, left: 5, top: 59, delay: 0.9, duration: 16 },
  { width: 4.9, height: 4.1, left: 93, top: 41, delay: 3.1, duration: 24 },
  { width: 3.3, height: 3.2, left: 40, top: 95, delay: 5.7, duration: 22 }
];

export default function BrandShowcase() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [tiltState, setTiltState] = useState<TiltState | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [cols, setCols] = useState(6);
  
  // Mouse position coordinates relative to the brand section box
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMouseOver, setIsMouseOver] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCols(2);
      } else if (window.innerWidth < 1024) {
        setCols(4);
      } else {
        setCols(6);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);



  // Track global cursor coordinates inside showcase section for backdrop light-glow follow
  const handleContainerMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  // 3D Magnetic card tilt tracking
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateY = ((x - centerX) / centerX) * 12;
    const rotateX = -((y - centerY) / centerY) * 12;

    setTiltState({ id, rotateX, rotateY, x, y });
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
    setTiltState(null);
  };

  return (
    <section 
      ref={containerRef} 
      onMouseMove={handleContainerMouseMove}
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => {
        setIsMouseOver(false);
        setTiltState(null);
        setHoveredId(null);
      }}
      className="relative overflow-hidden border-b border-border bg-transparent py-24 select-none"
    >
      
      {/* Background VFX Environment Atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        
        {/* Soft floating dust particles */}
        {isVisible && STATIC_PARTICLES.map((p, idx) => (
          <div
            key={idx}
            className="absolute bg-accent/20 rounded-full blur-[1px] animate-float-particle"
            style={{
              width: `${p.width}px`,
              height: `${p.height}px`,
              left: `${p.left}%`,
              top: `${p.top}%`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}

        {/* Static subtle blur gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(255,94,0,0.025)_0%,transparent_70%)] blur-[120px]" />
        
        {/* Global Mouse-Follow Spotlight backdrop behind the brand grid */}
        <div 
          className="absolute w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,94,0,0.035)_0%,transparent_70%)] blur-[80px] pointer-events-none transition-opacity duration-1000 -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            opacity: isMouseOver ? 1 : 0,
          }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-accent font-semibold bg-accent/10 px-4 py-1.5 rounded-full border border-accent/20">
            Client Portfolio
          </span>
          <h2 className="mt-6 text-3xl font-medium sm:text-4xl tracking-tight bg-gradient-to-b from-white via-white to-neutral-400 bg-clip-text text-transparent">
            Brands We Work With
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted">
            Delivering cinematic visual effects, 3D CGI environments, and visual productions for leading premium brands.
          </p>
        </div>

        {/* Brand Showcase Grid with 3D perspective enabled */}
        <div 
          className="relative grid gap-x-6 gap-y-10 grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 justify-center py-6"
          style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
        >


          {BRAND_LOGOS.map((logo, i) => {
            const isHovered = hoveredId === logo.id;
            const isAnyHovered = hoveredId !== null;
            const isSibling = isAnyHovered && !isHovered;

            // Fetch shuffle direction coordinates and asymmetrical offsets mapping
            const dir = SHUFFLE_DIRECTIONS[i % SHUFFLE_DIRECTIONS.length];
            const offset = SHUFFLE_OFFSETS[i % SHUFFLE_OFFSETS.length];

            // Apple ease staggered entrance delays row-by-row and col-by-col
            const colIndex = i % cols;
            const rowIndex = Math.floor(i / cols);
            const staggerDelay = isVisible 
              ? `${(rowIndex * 80) + (colIndex * 30)}ms` 
              : "0ms";
            
            // Floating delay
            const floatDelay = `${i * 180}ms`;

            // Calculate translation offsets for push-away (radial repulsion) effect
            let pushX = 0;
            let pushY = 0;

            if (isSibling && hoveredId) {
              const hoveredGlobalIndex = BRAND_LOGOS.findIndex((l) => l.id === hoveredId);
              const row = Math.floor(i / cols);
              const col = i % cols;
              const hRow = Math.floor(hoveredGlobalIndex / cols);
              const hCol = hoveredGlobalIndex % cols;

              const dRow = row - hRow;
              const dCol = col - hCol;
              const dist = Math.sqrt(dCol * dCol + dRow * dRow);

              if (dist > 0) {
                const strength = 12; // px displacement offset
                pushX = (dCol / dist) * strength;
                pushY = (dRow / dist) * strength;
              }
            }

            // Fetch active tilt parameters if hovered
            const currentTilt = (isHovered && tiltState && tiltState.id === logo.id) ? tiltState : null;
            const rotateX = currentTilt ? currentTilt.rotateX : 0;
            const rotateY = currentTilt ? currentTilt.rotateY : 0;
            
            // Cursor follow reflective highlight mask inside the card
            const spotlightStyle = currentTilt ? {
              background: `radial-gradient(circle at ${currentTilt.x}px ${currentTilt.y}px, rgba(255, 94, 0, 0.08) 0%, transparent 60%)`
            } : {};

            return (
              <div
                key={logo.id}
                onMouseEnter={() => setHoveredId(logo.id)}
                onMouseMove={(e) => handleMouseMove(e, logo.id)}
                onMouseLeave={handleMouseLeave}
                className={`relative aspect-[324/160] rounded-xl overflow-hidden cursor-pointer border bg-[#0d0e12]/60 backdrop-blur-md transition-all duration-[1400ms] will-change-transform ${
                  isVisible 
                    ? `opacity-100 scale-100 rotate-0 animate-brand-float-${(i % 4) + 1}` 
                    : "opacity-0"
                }`}
                style={{
                  transitionDelay: staggerDelay,
                  animationDelay: floatDelay,
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  filter: isVisible ? (isSibling ? "blur(1.5px)" : "blur(0px)") : "blur(8px)",
                  transform: !isVisible
                    ? `translate3d(${dir.x + offset.x}px, ${dir.y + offset.y}px, ${dir.z}px) scale(0.82) rotateX(${dir.rX}deg) rotateY(${dir.rY}deg)`
                    : isHovered
                    ? `scale(1.18) translate3d(${offset.x}px, ${offset.y}px, 70px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
                    : isSibling
                    ? `translate3d(${offset.x + pushX}px, ${offset.y + pushY}px, -20px) scale(0.95)`
                    : `translate3d(${offset.x}px, ${offset.y}px, 0px) scale(1)`,
                  borderColor: isHovered
                    ? "rgba(255, 94, 0, 0.45)"
                    : "rgba(255, 255, 255, 0.04)",
                  boxShadow: isHovered
                    ? "0 30px 60px -15px rgba(0, 0, 0, 0.9), 0 0 20px 2px rgba(255, 94, 0, 0.18), inset 0 1px 0 0 rgba(255,255,255,0.08)"
                    : "0 4px 12px rgba(0, 0, 0, 0.45), inset 0 1px 0 0 rgba(255, 255, 255, 0.02)",
                  opacity: isSibling ? 0.55 : 1,
                  zIndex: isHovered ? 30 : 10,
                }}
              >
                {/* Logo Image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo.path}
                  alt={logo.name}
                  className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-700 ease-out"
                />

                {/* Glass Card Inner border lines layout */}
                <div className="absolute inset-0 rounded-xl pointer-events-none border border-white/5" />

                {/* Cursor-follow spotlight reflective sheen overlay inside the card */}
                <div 
                  className="absolute inset-0 pointer-events-none transition-opacity duration-200 z-20"
                  style={{
                    opacity: isHovered ? 1 : 0,
                    ...spotlightStyle
                  }}
                />

                {/* Orange rim neon glow activation backdrop */}
                <div
                  className="absolute inset-0 opacity-0 pointer-events-none transition-opacity duration-500"
                  style={{
                    opacity: isHovered ? 1 : 0,
                    background: "linear-gradient(135deg, rgba(255,94,0,0.06) 0%, transparent 50%, rgba(255,94,0,0.06) 100%)",
                  }}
                />

                {/* laser shine sweep light effect */}
                <div
                  className="absolute inset-y-0 -left-full w-1/2 skew-x-[-25deg] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
                  style={{
                    transition: isHovered ? "left 0.75s ease-out" : "none",
                    left: isHovered ? "150%" : "-100%",
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
