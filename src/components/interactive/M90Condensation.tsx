"use client";

import { useEffect, useRef } from "react";
import styles from "./M90Condensation.module.css";

type Drop = {
  x: number;
  y: number;
  radius: number;
  speed: number;
  phase: number;
};

function seedDrops(count: number): Drop[] {
  return Array.from({ length: count }, (_, index) => ({
    x: ((index * 47) % 101) / 100,
    y: ((index * 71) % 103) / 100,
    radius: 1.8 + (index % 5) * 0.7,
    speed: 0.18 + (index % 7) * 0.025,
    phase: index * 0.63,
  }));
}

const DROPS = seedDrops(54);

export function M90Condensation() {
  const hostRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    if (!host || !canvas) return undefined;

    const context = canvas.getContext("2d");
    if (!context) return undefined;

    const motionQuery = typeof window.matchMedia === "function"
      ? window.matchMedia("(prefers-reduced-motion: reduce)")
      : undefined;
    let reducedMotion = motionQuery?.matches ?? false;
    let visible = true;
    let documentVisible = !document.hidden;
    let frame = 0;
    let width = 1;
    let height = 1;
    let dpr = 1;
    let startedAt = performance.now();

    const draw = (now: number) => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.save();
      context.scale(dpr, dpr);

      const elapsed = reducedMotion ? 0 : (now - startedAt) / 1000;
      for (const drop of DROPS) {
        const travel = reducedMotion ? 0 : (elapsed * drop.speed) % 1.22;
        const yRatio = (drop.y + travel) % 1.18;
        const x = drop.x * width + Math.sin(elapsed * 0.35 + drop.phase) * 5;
        const y = yRatio * height;
        const radius = drop.radius * (0.92 + Math.sin(elapsed * 0.45 + drop.phase) * 0.08);

        const gradient = context.createRadialGradient(
          x - radius * 0.35,
          y - radius * 0.45,
          Math.max(0.2, radius * 0.08),
          x,
          y,
          radius * 1.25,
        );
        gradient.addColorStop(0, "rgba(255,255,255,0.52)");
        gradient.addColorStop(0.36, "rgba(242,229,206,0.12)");
        gradient.addColorStop(1, "rgba(95,90,82,0.16)");

        context.fillStyle = gradient;
        context.beginPath();
        context.ellipse(x, y, radius * 0.78, radius, 0, 0, Math.PI * 2);
        context.fill();
        context.strokeStyle = "rgba(95,90,82,0.18)";
        context.lineWidth = 0.65;
        context.stroke();
      }

      context.restore();
    };

    const resize = () => {
      const bounds = host.getBoundingClientRect();
      width = Math.max(1, bounds.width);
      height = Math.max(1, bounds.height);
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.max(1, Math.round(width * dpr));
      canvas.height = Math.max(1, Math.round(height * dpr));
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      draw(performance.now());
    };

    const tick = (now: number) => {
      draw(now);
      frame = visible && documentVisible && !reducedMotion ? window.requestAnimationFrame(tick) : 0;
    };

    const start = () => {
      if (reducedMotion) {
        draw(performance.now());
        return;
      }
      if (!frame && visible && documentVisible) frame = window.requestAnimationFrame(tick);
    };

    const stop = () => {
      if (frame) window.cancelAnimationFrame(frame);
      frame = 0;
    };

    const handleVisibility = () => {
      documentVisible = !document.hidden;
      if (documentVisible) start();
      else stop();
    };

    const handleMotionChange = (event: MediaQueryListEvent) => {
      reducedMotion = event.matches;
      startedAt = performance.now();
      stop();
      start();
    };

    const resizeObserver = typeof ResizeObserver !== "undefined" ? new ResizeObserver(resize) : null;
    const intersectionObserver = typeof IntersectionObserver !== "undefined"
      ? new IntersectionObserver(([entry]) => {
          visible = entry?.isIntersecting ?? true;
          if (visible) start();
          else stop();
        }, { rootMargin: "320px" })
      : null;

    resizeObserver?.observe(host);
    intersectionObserver?.observe(host);
    if (!resizeObserver) window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", handleVisibility);
    motionQuery?.addEventListener?.("change", handleMotionChange);

    resize();
    start();

    return () => {
      stop();
      resizeObserver?.disconnect();
      intersectionObserver?.disconnect();
      if (!resizeObserver) window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibility);
      motionQuery?.removeEventListener?.("change", handleMotionChange);
    };
  }, []);

  return (
    <div ref={hostRef} className={styles.host} aria-hidden="true" data-m90-condensation>
      <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />
    </div>
  );
}
