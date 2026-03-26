"use client";

import { SplitText } from "@/components/ui/SplitText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import Link from "next/link";

export function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="dark-section relative overflow-hidden min-h-[80vh] flex items-center justify-center"
    >
      {/* Gradient mesh background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: `
              radial-gradient(ellipse 60% 50% at 30% 50%, rgba(124, 58, 237, 0.25), transparent),
              radial-gradient(ellipse 50% 60% at 70% 50%, rgba(99, 102, 241, 0.2), transparent)
            `,
          }}
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-[900px]">
        <SplitText
          as="h2"
          mode="chars"
          stagger={0.02}
          duration={0.5}
          className="font-display font-normal leading-[0.95] tracking-[-0.03em] mb-8 bg-gradient-to-r from-[#8B5CF6] via-[#A78BFA] to-[#6366F1] bg-clip-text text-transparent"
          {...{ style: { fontSize: "clamp(3.5rem, 8vw, 120px)" } } as React.HTMLAttributes<HTMLElement>}
        >
          Ready to deploy?
        </SplitText>

        <ScrollReveal direction="up" distance={30} delay={0.3}>
          <p className="text-white/50 text-2xl leading-relaxed max-w-[44ch] mx-auto mb-12">
            One call. No pitch. A clear picture of what&apos;s possible —
            and a timeline to build it.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" distance={20} delay={0.5}>
          <div className="flex flex-wrap justify-center gap-5">
            <MagneticButton strength={0.3}>
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center px-12 py-6 bg-gradient-to-r from-[#7C3AED] to-[#6366F1] text-white font-body font-bold text-xl rounded-full overflow-hidden transition-all duration-200 hover:shadow-[0_0_100px_rgba(124,58,237,0.4)]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                <span className="relative">Begin your build</span>
              </Link>
            </MagneticButton>
            <MagneticButton strength={0.3}>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-12 py-6 font-body font-bold text-xl text-white border border-white/10 bg-white/[0.03] backdrop-blur-sm rounded-full transition-all duration-300 hover:border-[#8B5CF6]/40 hover:bg-[#8B5CF6]/5"
              >
                View capabilities
              </Link>
            </MagneticButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
