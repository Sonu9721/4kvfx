"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  baseSize: number;
  opacity: number;
  baseOpacity: number;
  speedY: number;
  speedX: number;
  twinkleSpeed: number;
  twinklePhase: number;
  isFourPoint: boolean;
  color: string;
}

interface ShootingStar {
  x: number;
  y: number;
  dx: number;
  dy: number;
  length: number;
  speed: number;
  opacity: number;
  active: boolean;
}

export default function GalaxyBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Star[] = [];
    let shootingStar: ShootingStar = {
      x: 0,
      y: 0,
      dx: 0,
      dy: 0,
      length: 0,
      speed: 0,
      opacity: 0,
      active: false
    };
    let width = 0;
    let height = 0;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      stars = [];
      const area = width * height;
      // Classy, balanced star density (very spaced and minimal)
      const starCount = Math.min(160, Math.max(65, Math.floor(area / 12000)));

      // Subtle white and ice-blue star particles only (no pink/vibrant tones)
      const colors = [
        "rgba(255, 255, 255, ",     // Pure white
        "rgba(212, 228, 255, ",     // Subtle ice-blue
        "rgba(235, 240, 255, ",     // Faint ice-white
        "rgba(255, 255, 255, ",     // Pure white
      ];

      for (let i = 0; i < starCount; i++) {
        const isTwinkler = Math.random() < 0.3; // 30% twinkling stars
        const isFourPoint = isTwinkler && Math.random() < 0.12; // Very few elegant flare stars

        const baseOpacity = isFourPoint 
          ? 0.4 + Math.random() * 0.3  // Subdued flare star opacity
          : isTwinkler 
          ? 0.2 + Math.random() * 0.35 // Subdued twinkling star opacity
          : 0.05 + Math.random() * 0.2;

        const baseSize = isFourPoint 
          ? 1.8 + Math.random() * 1.2  // Classy, minimal flare size
          : isTwinkler 
          ? 0.8 + Math.random() * 0.7 
          : 0.4 + Math.random() * 0.4;

        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: baseSize,
          baseSize,
          opacity: baseOpacity,
          baseOpacity,
          // Moving / running mode - slow diagonal drift downwards
          speedY: 0.03 + Math.random() * 0.05,
          speedX: (Math.random() - 0.5) * 0.02,
          twinkleSpeed: 0.006 + Math.random() * 0.015,
          twinklePhase: Math.random() * Math.PI * 2,
          isFourPoint,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    const drawFourPointStar = (
      c: CanvasRenderingContext2D,
      cx: number,
      cy: number,
      size: number,
      opacity: number
    ) => {
      c.save();
      c.globalAlpha = opacity;
      c.fillStyle = "#ffffff";
      
      c.beginPath();
      // Draw curves for a soft, premium lens flare star shape
      c.moveTo(cx, cy - size);
      c.quadraticCurveTo(cx, cy, cx + size, cy);
      c.quadraticCurveTo(cx, cy, cx, cy + size);
      c.quadraticCurveTo(cx, cy, cx - size, cy);
      c.quadraticCurveTo(cx, cy, cx, cy - size);
      c.closePath();
      c.fill();
      
      // Elegant star rays
      c.strokeStyle = "rgba(255, 255, 255, 0.25)";
      c.lineWidth = 0.5;
      c.beginPath();
      c.moveTo(cx - size * 2.0, cy);
      c.lineTo(cx + size * 2.0, cy);
      c.moveTo(cx, cy - size * 2.0);
      c.lineTo(cx, cy + size * 2.0);
      c.stroke();

      // Core glow
      const radial = c.createRadialGradient(cx, cy, 0, cx, cy, size * 0.3);
      radial.addColorStop(0, "rgba(255, 255, 255, 0.9)");
      radial.addColorStop(1, "rgba(255, 255, 255, 0)");
      c.fillStyle = radial;
      c.beginPath();
      c.arc(cx, cy, size * 0.3, 0, Math.PI * 2);
      c.fill();

      c.restore();
    };

    const spawnShootingStar = () => {
      if (shootingStar.active) return;
      
      const startX = Math.random() * (width * 0.6);
      const startY = Math.random() * (height * 0.3);
      const angle = (12 + Math.random() * 15) * Math.PI / 180; 
      const speed = 7 + Math.random() * 8;

      shootingStar = {
        x: startX,
        y: startY,
        dx: Math.cos(angle) * speed,
        dy: Math.sin(angle) * speed,
        length: 60 + Math.random() * 70,
        speed,
        opacity: 0.65, // Moody, subdued opacity
        active: true
      };
    };

    const updateAndDrawShootingStar = (c: CanvasRenderingContext2D) => {
      if (!shootingStar.active) {
        if (Math.random() < 0.0003) { // Lower spawn rate
          spawnShootingStar();
        }
        return;
      }

      shootingStar.x += shootingStar.dx;
      shootingStar.y += shootingStar.dy;
      shootingStar.opacity -= 0.012;

      if (shootingStar.opacity <= 0 || shootingStar.x > width || shootingStar.y > height) {
        shootingStar.active = false;
        return;
      }

      c.save();
      const grad = c.createLinearGradient(
        shootingStar.x, shootingStar.y,
        shootingStar.x - shootingStar.dx * (shootingStar.length / shootingStar.speed),
        shootingStar.y - shootingStar.dy * (shootingStar.length / shootingStar.speed)
      );
      grad.addColorStop(0, `rgba(255, 255, 255, ${shootingStar.opacity})`);
      grad.addColorStop(0.2, `rgba(99, 102, 241, ${shootingStar.opacity * 0.3})`); // Subtle indigo tail highlight
      grad.addColorStop(1, "rgba(255, 255, 255, 0)");

      c.strokeStyle = grad;
      c.lineWidth = 1.0;
      c.beginPath();
      c.moveTo(shootingStar.x, shootingStar.y);
      c.lineTo(
        shootingStar.x - shootingStar.dx * (shootingStar.length / shootingStar.speed),
        shootingStar.y - shootingStar.dy * (shootingStar.length / shootingStar.speed)
      );
      c.stroke();
      c.restore();
    };

    const animate = () => {
      // Exact color stops matching the steel-blue cosmic reference image:
      // - 0.00: RGB(9, 39, 81) center steel-blue glow
      // - 0.15: RGB(7, 33, 70) inner transition
      // - 0.28: RGB(2, 20, 50) deep navy-blue transition
      // - 0.50: RGB(1, 10, 33) dark midnight-blue vignette
      // - 0.75: RGB(0, 2, 16) outer dark space
      // - 1.00: RGB(0, 0, 14) corner dark vignette
      const cx = width / 2;
      const cy = height / 2;
      const r = Math.sqrt(cx * cx + cy * cy);

      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
      grad.addColorStop(0.0, "rgba(9, 39, 81, 1.0)");
      grad.addColorStop(0.15, "rgba(7, 33, 70, 1.0)");
      grad.addColorStop(0.28, "rgba(2, 20, 50, 1.0)");
      grad.addColorStop(0.50, "rgba(1, 10, 33, 1.0)");
      grad.addColorStop(0.75, "rgba(0, 2, 16, 1.0)");
      grad.addColorStop(1.0, "rgba(0, 0, 14, 1.0)");

      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Update and draw stars
      stars.forEach((star) => {
        star.y += star.speedY;
        star.x += star.speedX;

        if (star.y > height) {
          star.y = 0;
          star.x = Math.random() * width;
        }
        if (star.x > width) {
          star.x = 0;
        } else if (star.x < 0) {
          star.x = width;
        }

        star.twinklePhase += star.twinkleSpeed;
        const oscillate = Math.sin(star.twinklePhase);
        const currentOpacity = Math.max(0.03, star.baseOpacity + oscillate * 0.3);
        const currentSize = Math.max(0.2, star.baseSize + oscillate * (star.isFourPoint ? 0.5 : 0.1));

        if (star.isFourPoint) {
          drawFourPointStar(ctx, star.x, star.y, currentSize * 1.6, currentOpacity);
        } else {
          ctx.beginPath();
          ctx.arc(star.x, star.y, currentSize, 0, Math.PI * 2);
          ctx.fillStyle = `${star.color}${currentOpacity})`;
          ctx.fill();
        }
      });

      updateAndDrawShootingStar(ctx);

      animationFrameId = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener("resize", resize);
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none -z-20 block"
      style={{ opacity: 0.95 }}
    />
  );
}
