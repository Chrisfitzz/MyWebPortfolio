"use client";

import { useEffect, useRef } from "react";

export default function GalaxyParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = window.innerWidth;
    let h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };
    window.addEventListener("resize", resize);

    // ⭐ Slightly toned-down particle settings
    const particles = Array.from({ length: 520 }).map(() => ({
      angle: Math.random() * Math.PI * 2,
      radius: Math.random() * Math.min(w, h) * 0.5,
      speed: 0.0005 + Math.random() * 0.0007,
      size: Math.random() * 1.6 + 0.6, // smaller than before
      color:
          Math.random() > 0.9
              ? "pink"
              : Math.random() > 0.8
                  ? "teal"
                  : "white",
      twinkleOffset: Math.random() * 1000,
    }));

    const teal = { r: 94, g: 234, b: 212 };
    const pink = { r: 255, g: 97, b: 136 };
    const darkStar = { r: 25, g: 25, b: 25 };

    const animate = (time: number) => {
      ctx.clearRect(0, 0, w, h);

      const isNegative =
          document.documentElement.getAttribute("data-theme") === "negative";

      particles.forEach((p) => {
        p.angle += p.speed;
        const x = w / 2 + Math.cos(p.angle) * p.radius;
        const y = h / 2 + Math.sin(p.angle) * p.radius;

        // ⭐ Slightly reduced alpha intensity
        const base =
            p.color === "pink"
                ? 0.28 + 0.16 * Math.sin(time / 500 + p.twinkleOffset)
                : p.color === "teal"
                    ? 0.22 + 0.14 * Math.sin(time / 550 + p.twinkleOffset)
                    : 0.16 + 0.09 * Math.sin(time / 700 + p.twinkleOffset);


        let alpha = Math.max(0, Math.min(1, base));

        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);

        if (!isNegative) {
          // Normal mode
          if (p.color === "pink") {
            ctx.fillStyle = `rgba(${pink.r},${pink.g},${pink.b},${alpha})`;
          } else if (p.color === "teal") {
            ctx.fillStyle = `rgba(${teal.r},${teal.g},${teal.b},${alpha})`;
          } else {
            ctx.fillStyle = `rgba(255,255,255,${alpha})`;
          }
        } else {
          // Negative mode (muted, dark tones)
          if (p.color === "pink") {
            alpha = Math.min(1, alpha * 1.3);
            ctx.fillStyle = `rgba(${pink.r},${pink.g},${pink.b},${alpha})`;
          } else if (p.color === "teal") {
            const darkTeal = { r: 10, g: 120, b: 110 };
            alpha = Math.min(1, alpha * 1.3);
            ctx.fillStyle = `rgba(${darkTeal.r},${darkTeal.g},${darkTeal.b},${alpha})`;
          } else {
            alpha = Math.min(1, alpha * 1.4);
            ctx.fillStyle = `rgba(${darkStar.r},${darkStar.g},${darkStar.b},${alpha})`;
          }
        }

        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
      <canvas
          ref={canvasRef}
          className="fixed top-0 left-0 z-0 pointer-events-none"
      />
  );
}
