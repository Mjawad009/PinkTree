"use client";

import { useEffect, useRef } from "react";

// Ambient dot grid: a field of small dots where a handful pulse gently at
// random. Pure canvas, no dependencies. Respects prefers-reduced-motion by
// rendering a single static frame instead of animating.
export function HeroDotsBg({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let dots: { x: number; y: number; phase: number; speed: number; active: boolean }[] = [];

    function resize() {
      const rect = canvas!.parentElement!.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const spacing = 42;
      const cols = Math.ceil(width / spacing) + 1;
      const rows = Math.ceil(height / spacing) + 1;
      dots = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          dots.push({
            x: c * spacing,
            y: r * spacing,
            phase: Math.random() * Math.PI * 2,
            speed: 0.4 + Math.random() * 0.5,
            active: Math.random() < 0.12,
          });
        }
      }
    }

    function draw(t: number) {
      ctx!.clearRect(0, 0, width, height);
      for (const d of dots) {
        let alpha = 0.06;
        let radius = 1.1;
        if (d.active) {
          const pulse = reduceMotion ? 0.5 : (Math.sin(t * 0.001 * d.speed + d.phase) + 1) / 2;
          alpha = 0.06 + pulse * 0.22;
          radius = 1.1 + pulse * 1.1;
        }
        ctx!.beginPath();
        ctx!.arc(d.x, d.y, radius, 0, Math.PI * 2);
        ctx!.fillStyle = d.active ? `rgba(236, 168, 214, ${alpha})` : `rgba(255, 255, 255, ${alpha})`;
        ctx!.fill();
      }
    }

    resize();
    draw(0);

    let raf = 0;
    if (!reduceMotion) {
      const loop = (t: number) => {
        draw(t);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    }

    const onResize = () => resize();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${className}`}
    />
  );
}
