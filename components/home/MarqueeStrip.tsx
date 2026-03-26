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
    <div className="py-10 border-y border-black/[0.06] overflow-hidden bg-white">
      <InfiniteMarquee speed={50} gap="0px" pauseOnHover>
        {WORDS.map((word) => (
          <span
            key={word}
            className="font-display font-light text-[clamp(2.5rem,5vw,4.5rem)] text-[#18181B]/10 uppercase tracking-wider whitespace-nowrap px-8 hover:text-[#7C3AED]/20 transition-colors duration-500"
          >
            {word}
            <span className="text-[#7C3AED]/20 mx-8">/</span>
          </span>
        ))}
      </InfiniteMarquee>
    </div>
  );
}
