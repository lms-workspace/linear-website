"use client";

import { useRef } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SplitText } from "@/components/ui/SplitText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SERVICE_ICONS, type ServiceIconKey } from "./icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

type ServiceDetail = {
  title: string;
  description: string;
  icon: ServiceIconKey;
};

type RelatedService = {
  href: string;
  title: string;
  description: string;
};

type ServicePageLayoutProps = {
  /** Badge text above the headline */
  badge: string;
  /** Main headline */
  headline: string;
  /** Intro paragraph */
  intro: string;
  /** Extended description paragraphs */
  body: string[];
  /** What's included — capability cards */
  services: ServiceDetail[];
  /** Why this matters — key differentiators */
  differentiators: { title: string; description: string }[];
  /** Related service pages */
  related: RelatedService[];
};

function ServiceCard({
  title,
  description,
  iconKey,
}: {
  title: string;
  description: string;
  iconKey: ServiceIconKey;
}) {
  const Icon = SERVICE_ICONS[iconKey] ?? SERVICE_ICONS.content;
  return (
    <div
      data-service-card
      className="group relative rounded-2xl p-6 bg-surface-1 border border-border shadow-[var(--shadow-card)] overflow-hidden transition-all duration-300 hover:border-accent/30 hover:shadow-[var(--shadow-glow)] hover:-translate-y-0.5"
    >
      <span className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent to-accent-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-accent/10 text-accent mb-4">
        <Icon />
      </span>
      <h3 className="font-body font-semibold text-text-primary text-lg mb-2">
        {title}
      </h3>
      <p className="text-text-secondary leading-relaxed text-base">
        {description}
      </p>
    </div>
  );
}

export function ServicePageLayout({
  badge,
  headline,
  intro,
  body,
  services,
  differentiators,
  related,
}: ServicePageLayoutProps) {
  const gridRef = useRef<HTMLDivElement>(null);
  const diffRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll("[data-service-card]");
    gsap.fromTo(
      cards,
      { y: 40, opacity: 0, scale: 0.96 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: { each: 0.06, from: "start" },
        ease: "power2.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  useGSAP(() => {
    if (!diffRef.current) return;
    const items = diffRef.current.querySelectorAll("[data-diff-item]");
    gsap.fromTo(
      items,
      { x: 40, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: diffRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-bg pt-40 pb-20">
        <Container as="div" className="relative z-10">
          <span className="font-mono text-accent text-xs tracking-[0.3em] uppercase block mb-4">
            {badge}
          </span>
          <SplitText
            as="h1"
            mode="words"
            stagger={0.06}
            duration={0.7}
            scrollTrigger={false}
            className="font-display font-bold text-text-primary leading-[1.1] mb-6"
            {...{ style: { fontSize: "clamp(2.5rem, 5vw, 64px)" } } as React.HTMLAttributes<HTMLElement>}
          >
            {headline}
          </SplitText>
          <ScrollReveal direction="up" distance={30} delay={0.3} start="top 95%">
            <p className="text-text-secondary text-xl leading-relaxed max-w-[56ch]">
              {intro}
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* Extended body */}
      <section className="light-section py-16 md:py-24">
        <Container as="div">
          <div className="max-w-[720px] space-y-6">
            {body.map((paragraph, i) => (
              <ScrollReveal key={i} direction="up" distance={20} delay={0.1 + i * 0.1}>
                <p className="text-text-secondary text-lg leading-relaxed">
                  {paragraph}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* What's included */}
      <section className="light-section py-16 md:py-24 border-t border-border">
        <Container as="div">
          <span className="font-mono text-accent text-xs tracking-[0.3em] uppercase block mb-4">
            What&apos;s Included
          </span>
          <SplitText
            as="h2"
            mode="words"
            stagger={0.04}
            className="font-display font-normal text-text-primary leading-[0.95] tracking-[-0.02em] mb-12"
            {...{ style: { fontSize: "clamp(2rem, 4vw, 48px)" } } as React.HTMLAttributes<HTMLElement>}
          >
            Capabilities deployed under this pillar.
          </SplitText>
          <div
            ref={gridRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {services.map((s) => (
              <ServiceCard
                key={s.title}
                title={s.title}
                description={s.description}
                iconKey={s.icon}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Why this matters */}
      <section className="light-section py-16 md:py-24 border-t border-border">
        <Container as="div">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <span className="font-mono text-accent text-xs tracking-[0.3em] uppercase block mb-4">
                Why It Matters
              </span>
              <SplitText
                as="h2"
                mode="words"
                stagger={0.04}
                className="font-display font-normal text-text-primary leading-[0.95] tracking-[-0.02em]"
                {...{ style: { fontSize: "clamp(2rem, 4vw, 48px)" } } as React.HTMLAttributes<HTMLElement>}
              >
                Built different. On purpose.
              </SplitText>
            </div>
            <div ref={diffRef} className="flex flex-col gap-0">
              {differentiators.map((d, i) => (
                <div
                  key={d.title}
                  data-diff-item
                  className="py-6 border-b border-border"
                >
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-accent/40 text-sm mt-1 shrink-0">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="font-body font-semibold text-text-primary text-lg mb-2">
                        {d.title}
                      </h3>
                      <p className="text-text-secondary leading-relaxed">
                        {d.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Related services */}
      <section className="light-section py-16 md:py-24 border-t border-border">
        <Container as="div">
          <span className="font-mono text-accent text-xs tracking-[0.3em] uppercase block mb-4">
            Related Services
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {related.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="group rounded-2xl p-6 bg-surface-1 border border-border transition-all duration-300 hover:border-accent/30 hover:shadow-[var(--shadow-glow)] hover:-translate-y-0.5"
              >
                <h3 className="font-body font-semibold text-text-primary text-lg mb-2 group-hover:text-accent transition-colors">
                  {r.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {r.description}
                </p>
                <span className="font-mono text-accent text-xs tracking-wider uppercase">
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="dark-section py-20 md:py-28">
        <Container as="div" className="text-center">
          <SplitText
            as="h2"
            mode="words"
            stagger={0.04}
            className="font-display font-normal text-white leading-[0.95] tracking-[-0.02em] mb-6"
            {...{ style: { fontSize: "clamp(2rem, 5vw, 56px)" } } as React.HTMLAttributes<HTMLElement>}
          >
            Ready to deploy?
          </SplitText>
          <ScrollReveal direction="up" distance={20} delay={0.2}>
            <p className="text-white/60 text-lg mb-10 max-w-[40ch] mx-auto">
              One call. Full assessment. No pitch deck.
            </p>
          </ScrollReveal>
          <MagneticButton strength={0.25}>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-[#7C3AED] to-[#6366F1] text-white font-body font-semibold text-lg rounded-full transition-all duration-150 hover:shadow-[0_0_60px_rgba(124,58,237,0.3)]"
            >
              Start a project
            </Link>
          </MagneticButton>
        </Container>
      </section>
    </>
  );
}
