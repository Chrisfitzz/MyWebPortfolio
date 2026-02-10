"use client";

import { useEffect, useRef } from "react";

export default function GalaxyParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
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

    // Increased particle count slightly
    const particles = Array.from({ length: 500 }).map(() => ({
      angle: Math.random() * Math.PI * 2,
      radius: Math.random() * Math.min(w, h) * 0.5,
      speed: 0.0003 + Math.random() * 0.0006,
      size: Math.random() * 1.2 + 0.3,
      color: Math.random() > 0.9 ? "crimson" : "white", // slightly more crimson
      twinkleOffset: Math.random() * 1000,
    }));

    const animate = (time: number) => {
      ctx.clearRect(0, 0, w, h);

      particles.forEach((p) => {
        p.angle += p.speed;
        const x = w / 2 + Math.cos(p.angle) * p.radius;
        const y = h / 2 + Math.sin(p.angle) * p.radius;

        // Twinkle effect, more dramatic
        const alpha =
            p.color === "crimson"
                ? 0.25 + 0.15 * Math.sin(time / 400 + p.twinkleOffset) // base brighter, bigger swing
                : 0.18 + 0.1 * Math.sin(time / 600 + p.twinkleOffset);

        // Make crimson particles slightly bigger
        const size = p.color === "crimson" ? p.size * 1.5 : p.size;

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle =
            p.color === "crimson"
                ? `rgba(230, 59, 31, ${alpha})`
                : `rgba(255, 255, 255, ${alpha})`;
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
