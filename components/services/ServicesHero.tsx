"use client";

import { Container } from "@/components/ui/Container";
import { fadeUp, transitionBase } from "@/lib/animations";
import { motion } from "framer-motion";

export function ServicesHero() {
  return (
    <section
      id="services-hero"
      className="hero-grid-bg relative overflow-hidden flex items-center min-h-[60vh]"
      style={{ background: "var(--color-bg)" }}
    >
      {/* Subtle gradient glow */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: "min(60vw, 400px)",
          height: "min(60vw, 400px)",
          right: "-10%",
          top: "50%",
          transform: "translateY(-50%)",
          background: "var(--gradient-glow)",
          animation: "glow-blob-breathe 6s ease-in-out infinite",
        }}
      />
      <Container as="div" className="relative z-10">
        <motion.h1
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={transitionBase}
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(2.5rem, 5vw, 56px)",
            lineHeight: 1.1,
            color: "var(--color-text-primary)",
            marginBottom: "var(--space-lg)",
          }}
        >
          The full stack. All of it.
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ ...transitionBase, delay: 0.1 }}
          style={{
            color: "var(--color-text-secondary)",
            fontFamily: "var(--font-body)",
            fontWeight: 400,
            fontSize: 18,
            lineHeight: 1.6,
            maxWidth: "52ch",
          }}
        >
          Linear Marketing Solutions is not a vendor. We are the operating layer
          your business has been missing. From brand strategy to AI agent
          development, we build and run the systems that move companies forward.
        </motion.p>
      </Container>
    </section>
  );
}
