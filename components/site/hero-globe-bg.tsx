"use client";

import { useEffect, useRef } from "react";

// Ambient rotating wireframe globe: latitude rings (static ellipses) plus
// meridian lines and marker dots computed each frame from a rotating angle,
// with simple backface culling (things on the far side fade out) to fake
// depth without any 3D library. Pure canvas, no dependencies. Respects
// prefers-reduced-motion by rendering a single static frame.
export function HeroGlobeBg({ className = "" }: { className?: string }) {
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
    let cx = 0;
    let cy = 0;
    let R = 0;

    const MERIDIANS = 7;
    const LATITUDES = 4;
    const markers = Array.from({ length: 10 }, () => ({
      lat: (Math.random() - 0.5) * Math.PI * 0.8,
      lon: Math.random() * Math.PI * 2,
      phase: Math.random() * Math.PI * 2,
    }));

    function resize() {
      const rect = canvas!.parentElement!.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Position the globe toward the right edge, partly off-canvas, like a
      // distant planet — reads better in a wide hero than a centered globe.
      R = Math.min(width, height) * 0.42;
      cx = width * 0.82;
      cy = height * 0.5;
    }

    function draw(t: number) {
      ctx!.clearRect(0, 0, width, height);
      const theta = reduceMotion ? 0 : t * 0.00012;

      // Outer circle
      ctx!.beginPath();
      ctx!.arc(cx, cy, R, 0, Math.PI * 2);
      ctx!.strokeStyle = "rgba(255, 255, 255, 0.12)";
      ctx!.lineWidth = 1;
      ctx!.stroke();

      // Latitude rings — horizontal ellipses, squished more near the poles
      for (let i = 1; i < LATITUDES; i++) {
        const f = i / LATITUDES; // 0..1
        const y = cy - R + f * 2 * R;
        const halfWidth = Math.sqrt(Math.max(0, R * R - (y - cy) * (y - cy)));
        ctx!.beginPath();
        ctx!.ellipse(cx, y, halfWidth, halfWidth * 0.14, 0, 0, Math.PI * 2);
        ctx!.strokeStyle = "rgba(255, 255, 255, 0.08)";
        ctx!.stroke();
      }

      // Meridians — vertical ellipses, rotating via theta
      for (let i = 0; i < MERIDIANS; i++) {
        const offset = (i / MERIDIANS) * Math.PI * 2;
        const rx = Math.abs(R * Math.cos(theta + offset));
        ctx!.beginPath();
        ctx!.ellipse(cx, cy, Math.max(rx, 0.001), R, 0, 0, Math.PI * 2);
        ctx!.strokeStyle = "rgba(255, 255, 255, 0.08)";
        ctx!.stroke();
      }

      // Marker dots, pseudo-3D positioned and rotating with the globe
      for (const m of markers) {
        const lon = m.lon + theta;
        const x = cx + R * Math.cos(m.lat) * Math.sin(lon);
        const y = cy + R * Math.sin(m.lat);
        const depth = Math.cos(lon); // >0 = near side, <0 = far side
        if (depth < -0.15) continue; // simple backface cull

        const pulse = reduceMotion ? 0.6 : (Math.sin(t * 0.0015 + m.phase) + 1) / 2;
        const alpha = Math.max(0, depth) * (0.3 + pulse * 0.4);
        ctx!.beginPath();
        ctx!.arc(x, y, 2, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(236, 168, 214, ${alpha})`;
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
