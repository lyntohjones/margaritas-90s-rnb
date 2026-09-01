"use client";

import { useEffect, useRef } from "react";
import styles from "./M90GalleryHeading.module.css";

type Plate = {
  x: number;
  y: number;
  width: number;
  height: number;
  angle: number;
  color: string;
};

const PLATES: Plate[] = [
  { x: 0.08, y: 0.22, width: 0.17, height: 0.24, angle: -0.11, color: "#EF3F23" },
  { x: 0.27, y: 0.1, width: 0.14, height: 0.19, angle: 0.08, color: "#D7C5A4" },
  { x: 0.52, y: 0.08, width: 0.16, height: 0.22, angle: -0.05, color: "#AAA681" },
  { x: 0.74, y: 0.16, width: 0.18, height: 0.25, angle: 0.1, color: "#EAB29C" },
  { x: 0.12, y: 0.62, width: 0.18, height: 0.23, angle: 0.07, color: "#202020" },
  { x: 0.34, y: 0.7, width: 0.14, height: 0.18, angle: -0.09, color: "#EF3F23" },
  { x: 0.58, y: 0.68, width: 0.17, height: 0.22, angle: 0.06, color: "#D7C5A4" },
  { x: 0.79, y: 0.58, width: 0.13, height: 0.19, angle: -0.08, color: "#AAA681" },
];

function drawHalftone(
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  ink: string,
) {
  context.save();
  context.globalAlpha = 0.18;
  context.fillStyle = ink;
  const gap = Math.max(7, Math.min(width, height) / 9);
  const radius = Math.max(0.8, gap * 0.12);
  for (let py = y + gap / 2; py < y + height; py += gap) {
    for (let px = x + gap / 2; px < x + width; px += gap) {
      context.beginPath();
      context.arc(px, py, radius, 0, Math.PI * 2);
      context.fill();
    }
  }
  context.restore();
}

export function M90GalleryHeading() {
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
    let currentShift = 0;
    let targetShift = 0;
    let width = 1;
    let height = 1;
    let dpr = 1;

    const render = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.save();
      context.scale(dpr, dpr);

      const sweep = currentShift * width * 0.055;
      PLATES.forEach((plate, index) => {
        const plateWidth = width * plate.width;
        const plateHeight = height * plate.height;
        const baseX = width * plate.x - plateWidth / 2;
        const baseY = height * plate.y - plateHeight / 2;
        const stagger = ((index % 4) - 1.5) * sweep * 0.45;
        const x = baseX + sweep + stagger;
        const y = baseY + Math.sin((currentShift + index) * 0.7) * 3;

        context.save();
        context.translate(x + plateWidth / 2, y + plateHeight / 2);
        context.rotate(plate.angle + currentShift * 0.015 * (index % 2 ? -1 : 1));
        context.translate(-plateWidth / 2, -plateHeight / 2);
        context.fillStyle = plate.color;
        context.fillRect(0, 0, plateWidth, plateHeight);
        drawHalftone(
          context,
          0,
          0,
          plateWidth,
          plateHeight,
          plate.color === "#202020" ? "#F2E5CE" : "#202020",
        );
        context.restore();
      });

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
      render();
    };

    const tick = () => {
      currentShift += (targetShift - currentShift) * 0.08;
      render();
      frame = visible && documentVisible && !reducedMotion ? window.requestAnimationFrame(tick) : 0;
    };

    const start = () => {
      if (reducedMotion) {
        currentShift = 0;
        targetShift = 0;
        render();
        return;
      }
      if (!frame && visible && documentVisible) frame = window.requestAnimationFrame(tick);
    };

    const stop = () => {
      if (frame) window.cancelAnimationFrame(frame);
      frame = 0;
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (reducedMotion) return;
      const bounds = host.getBoundingClientRect();
      const normalized = (event.clientX - bounds.left) / Math.max(1, bounds.width);
      targetShift = Math.max(-1, Math.min(1, (normalized - 0.5) * 2));
    };

    const handlePointerLeave = () => {
      targetShift = 0;
    };

    const handleVisibility = () => {
      documentVisible = !document.hidden;
      if (documentVisible) start();
      else stop();
    };

    const handleMotionChange = (event: MediaQueryListEvent) => {
      reducedMotion = event.matches;
      if (reducedMotion) {
        stop();
        currentShift = 0;
        targetShift = 0;
        render();
      } else {
        start();
      }
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
    host.addEventListener("pointermove", handlePointerMove, { passive: true });
    host.addEventListener("pointerleave", handlePointerLeave, { passive: true });
    document.addEventListener("visibilitychange", handleVisibility);
    motionQuery?.addEventListener?.("change", handleMotionChange);

    resize();
    start();

    return () => {
      stop();
      resizeObserver?.disconnect();
      intersectionObserver?.disconnect();
      if (!resizeObserver) window.removeEventListener("resize", resize);
      host.removeEventListener("pointermove", handlePointerMove);
      host.removeEventListener("pointerleave", handlePointerLeave);
      document.removeEventListener("visibilitychange", handleVisibility);
      motionQuery?.removeEventListener?.("change", handleMotionChange);
    };
  }, []);

  return (
    <div ref={hostRef} className={styles.stage} aria-hidden="true" data-m90-gallery-heading>
      <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />
    </div>
  );
}
