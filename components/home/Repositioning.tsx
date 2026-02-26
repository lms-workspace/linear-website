"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { fadeUp, transitionBase } from "@/lib/animations";
import { motion } from "framer-motion";

const OLD_WAY = [
  "Hiring a full team: 6 figures in salaries before they produce anything",
  "Agencies: cookie-cutter strategies, slow execution, enterprise pricing",
  "Freelancers: inconsistent, unaccountable, can't see the full picture",
  "Result: wasted budget, fragmented strategy, no one owns the outcome",
];

const LMS_WAY = [
  "One integrated partner who owns strategy, creative, technology, and AI",
  "Built for speed — systems and execution from day one",
  "AI-powered at every layer — content, automation, research, development",
  "Measurable outcomes with full transparency",
  "One expert. All capabilities. Results that move your business.",
];

export function Repositioning() {
  return (
    <Section id="repositioning" className="!pt-[var(--space-2xl)] !pb-[var(--space-2xl)]">
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
            marginBottom: "var(--space-xl)",
          }}
        >
          The old model is broken.
        </motion.h2>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          style={{ gap: "var(--space-lg)" }}
        >
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ ...transitionBase, delay: 0.1 }}
            className="rounded-[var(--radius-lg)] p-6"
            style={{
              background: "var(--color-surface-1)",
              border: "1px solid var(--color-border)",
              color: "var(--color-text-secondary)",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                fontSize: "var(--text-h3)",
                color: "var(--color-text-muted)",
                marginBottom: "var(--space-md)",
              }}
            >
              The Old Way
            </h3>
            <ul className="list-disc list-inside space-y-2" style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body)" }}>
              {OLD_WAY.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ ...transitionBase, delay: 0.2 }}
            className="rounded-[var(--radius-lg)] p-6"
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
              className="gradient-text"
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                fontSize: "var(--text-h3)",
                marginBottom: "var(--space-md)",
              }}
            >
              The LMS Way
            </h3>
            <ul className="space-y-2" style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body)", color: "var(--color-text-primary)" }}>
              {LMS_WAY.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span style={{ color: "var(--color-accent-primary)" }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
