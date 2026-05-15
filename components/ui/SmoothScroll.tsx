"use client";

import { usePathname } from "next/navigation";
import { ReactLenis } from "@studio-freight/react-lenis";

const BARE_ROUTES = new Set(["/nanofiber-infocomm"]);

/**
 * Lenis smooth scroll wrapper.
 * Wraps the entire app for momentum-based scrolling (like makemepulse.com).
 * Duration controls inertia — higher = more ice-slide feel.
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname && BARE_ROUTES.has(pathname)) return <>{children}</>;
  return (
    <ReactLenis
      root
      options={{
        duration: 1.6,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 2,
      }}
    >
      {children}
    </ReactLenis>
  );
}
