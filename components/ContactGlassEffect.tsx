"use client";

import { useEffect, useRef } from "react";

export default function ContactGlassEffect() {
  const orbRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const orb = orbRef.current;
    if (!orb) return;

    let raf: number;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      currentX = lerp(currentX, mouseX, 0.07);
      currentY = lerp(currentY, mouseY, 0.07);
      orb.style.transform = `translate(${currentX - 200}px, ${currentY - 200}px)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={containerRef} className="cge-root" aria-hidden="true">
      {/* Cursor-following glow orb */}
      <div ref={orbRef} className="cge-cursor-orb" />

      {/* Static floating glass shapes */}
      <div className="cge-glass cge-g1" />
      <div className="cge-glass cge-g2" />
      <div className="cge-glass cge-g3" />
      <div className="cge-glass cge-g4" />

      {/* Floating accent rings */}
      <div className="cge-ring cge-r1" />
      <div className="cge-ring cge-r2" />
    </div>
  );
}
