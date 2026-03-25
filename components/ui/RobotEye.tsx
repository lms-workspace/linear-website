"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";

/**
 * Robot eye — the site's personality.
 * Follows the user's cursor. Blinks periodically.
 * Replaces the meaningless ambient blob with something that has intent.
 * The user feels watched. The site is alive.
 *
 * Inspired by Las Vegas Sphere 4D animations.
 */
export function RobotEye({ className = "" }: { className?: string }) {
  const eyeRef = useRef<HTMLDivElement>(null);
  const irisRef = useRef<HTMLDivElement>(null);
  const lidTopRef = useRef<HTMLDivElement>(null);
  const lidBottomRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  // Follow cursor
  useEffect(() => {
    const iris = irisRef.current;
    if (!iris) return;

    const onMove = (e: MouseEvent) => {
      const rect = iris.parentElement?.getBoundingClientRect();
      if (!rect) return;

      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const maxMove = 12;
      const clampedDist = Math.min(dist, 200);
      const moveX = (dx / Math.max(dist, 1)) * (clampedDist / 200) * maxMove;
      const moveY = (dy / Math.max(dist, 1)) * (clampedDist / 200) * maxMove;

      gsap.to(iris, {
        x: moveX,
        y: moveY,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // Blink loop
  useEffect(() => {
    const lidTop = lidTopRef.current;
    const lidBottom = lidBottomRef.current;
    if (!lidTop || !lidBottom) return;

    const blink = () => {
      const tl = gsap.timeline();
      tl.to(lidTop, { scaleY: 1, duration: 0.08, ease: "power2.in" });
      tl.to(lidBottom, { scaleY: 1, duration: 0.08, ease: "power2.in" }, "<");
      tl.to(lidTop, { scaleY: 0, duration: 0.12, ease: "power2.out" });
      tl.to(lidBottom, { scaleY: 0, duration: 0.12, ease: "power2.out" }, "<");
    };

    // Random blink every 2-5 seconds
    const scheduleBlink = () => {
      const delay = 2000 + Math.random() * 3000;
      setTimeout(() => {
        blink();
        // Sometimes double-blink
        if (Math.random() < 0.3) {
          setTimeout(blink, 200);
        }
        scheduleBlink();
      }, delay);
    };

    // Initial blink after 1s
    setTimeout(blink, 1000);
    scheduleBlink();
  }, []);

  // Glow pulse
  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    gsap.to(glow, {
      opacity: 0.4,
      scale: 1.15,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <div ref={eyeRef} className={`relative ${className}`}>
      {/* Outer glow */}
      <div
        ref={glowRef}
        className="absolute inset-[-40%] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(204, 255, 0, 0.2), transparent 65%)",
          opacity: 0.25,
        }}
      />

      {/* Eye socket — dark ellipse */}
      <div
        className="relative rounded-[50%] overflow-hidden"
        style={{
          width: 80,
          height: 48,
          background: "radial-gradient(ellipse, #111 0%, #000 100%)",
          boxShadow: "0 0 30px rgba(204, 255, 0, 0.15), inset 0 0 20px rgba(0,0,0,0.8)",
        }}
      >
        {/* Iris */}
        <div
          ref={irisRef}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: 22,
            height: 22,
            background: "radial-gradient(circle, #CCFF00 0%, #8aaa00 60%, #444 100%)",
            boxShadow: "0 0 12px rgba(204, 255, 0, 0.6), 0 0 4px rgba(204, 255, 0, 0.9) inset",
          }}
        >
          {/* Pupil */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black"
            style={{ width: 8, height: 8 }}
          />
          {/* Highlight */}
          <div
            className="absolute rounded-full bg-white/60"
            style={{ width: 4, height: 4, top: 4, right: 5 }}
          />
        </div>

        {/* Top eyelid */}
        <div
          ref={lidTopRef}
          className="absolute top-0 left-0 right-0 origin-top"
          style={{
            height: "50%",
            background: "linear-gradient(to bottom, #09090B, #09090B 80%, #111)",
            transform: "scaleY(0)",
          }}
        />

        {/* Bottom eyelid */}
        <div
          ref={lidBottomRef}
          className="absolute bottom-0 left-0 right-0 origin-bottom"
          style={{
            height: "50%",
            background: "linear-gradient(to top, #09090B, #09090B 80%, #111)",
            transform: "scaleY(0)",
          }}
        />
      </div>
    </div>
  );
}
