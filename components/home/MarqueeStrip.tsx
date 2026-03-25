"use client";

import { InfiniteMarquee } from "@/components/ui/InfiniteMarquee";

const WORDS = [
  "STRATEGY",
  "AUTOMATION",
  "INTELLIGENCE",
  "DEPLOYMENT",
  "GROWTH",
  "INFRASTRUCTURE",
  "AI-NATIVE",
  "SYSTEMS",
];

export function MarqueeStrip() {
  return (
    <div className="py-8 border-y border-white/[0.08] overflow-hidden">
      <InfiniteMarquee speed={50} gap="0px" pauseOnHover>
        {WORDS.map((word) => (
          <span
            key={word}
            className="font-display font-light text-[clamp(2rem,4vw,3.5rem)] text-text-primary/15 uppercase tracking-wider whitespace-nowrap px-8 hover:text-accent/30 transition-colors duration-500"
          >
            {word}
            <span className="text-accent/30 mx-8">/</span>
          </span>
        ))}
      </InfiniteMarquee>
    </div>
  );
}
