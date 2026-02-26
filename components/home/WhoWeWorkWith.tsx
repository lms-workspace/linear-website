"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { fadeUp, transitionBase } from "@/lib/animations";
import { motion } from "framer-motion";

const FIT_ITEMS = [
  "You need marketing, technology, and AI under one roof",
  "You're done paying for strategy that never gets executed",
  "You want systems that work without you managing them daily",
  "You're ready to compete like an enterprise brand — without enterprise overhead",
  "You want a partner who is accountable to outcomes, not just deliverables",
];

export function WhoWeWorkWith() {
  return (
    <Section id="who-we-work-with">
      <Container as="div">
        <motion.h2
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={transitionBase}
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "var(--text-h2)",
            color: "var(--color-text-primary)",
            marginBottom: "var(--space-md)",
          }}
        >
          Built for businesses ready to move.
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ ...transitionBase, delay: 0.05 }}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-body)",
            color: "var(--color-text-secondary)",
            lineHeight: 1.6,
            maxWidth: "65ch",
            marginBottom: "var(--space-xl)",
          }}
        >
          LMS works with founders, operators, and growth-stage companies who are
          done waiting for results. Our clients range from local businesses
          building their first real marketing system to multi-location companies
          and distributors who need execution without bureaucracy.
        </motion.p>
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ ...transitionBase, delay: 0.1 }}
          className="rounded-[var(--radius-lg)] p-6 max-w-2xl"
          style={{
            background: "var(--color-surface-2)",
            border: "1px solid transparent",
            backgroundImage:
              "linear-gradient(var(--color-surface-2), var(--color-surface-2)), var(--gradient-brand)",
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
            boxShadow: "var(--shadow-glow)",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              fontSize: "var(--text-h3)",
              color: "var(--color-text-primary)",
              marginBottom: "var(--space-md)",
            }}
          >
            You&apos;re a fit if:
          </h3>
          <ul className="space-y-3" style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {FIT_ITEMS.map((item, i) => (
              <li
                key={i}
                className="flex gap-3 items-start"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-body)",
                  color: "var(--color-text-primary)",
                  lineHeight: 1.5,
                }}
              >
                <span
                  className="flex-shrink-0 mt-0.5"
                  style={{
                    background: "var(--gradient-brand)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontWeight: 700,
                  }}
                >
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </Container>
    </Section>
  );
}
