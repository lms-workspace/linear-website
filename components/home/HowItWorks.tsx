"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { fadeUp, transitionBase } from "@/lib/animations";
import { motion } from "framer-motion";
import Link from "next/link";

const STEPS = [
  {
    number: "01",
    title: "Discovery Call",
    body: "We learn your business, goals, current stack, and gaps. No pitch. Just clarity. This call is the foundation of everything we build together.",
  },
  {
    number: "02",
    title: "System Design",
    body: "We map your full operating picture — marketing, technology, automation, and growth. You get a clear plan before a single dollar is spent.",
  },
  {
    number: "03",
    title: "Build & Execute",
    body: "We build, launch, optimize, and scale. You get a partner who owns outcomes, not just deliverables. Weekly check-ins, full transparency, measurable results.",
  },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works">
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
          Simple entry. Serious depth.
        </motion.h2>

        {/* Desktop: horizontal flow with gradient connector */}
        <div className="hidden md:flex relative items-stretch gap-0">
          <div
            className="absolute top-8 left-[16.66%] right-[16.66%] h-[2px] -z-[0]"
            style={{
              background: "var(--gradient-brand)",
              opacity: 0.6,
            }}
          />
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ ...transitionBase, delay: i * 0.1 }}
              className="flex-1 flex flex-col items-center text-center px-4 relative z-10"
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 14,
                  color: "var(--color-accent-primary)",
                  marginBottom: "var(--space-sm)",
                }}
              >
                Step {step.number}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  fontSize: "var(--text-h3)",
                  color: "var(--color-text-primary)",
                  marginBottom: "var(--space-md)",
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-body)",
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.6,
                  maxWidth: "28ch",
                }}
              >
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile: vertical stack */}
        <div className="flex flex-col md:hidden gap-8">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ ...transitionBase, delay: i * 0.1 }}
              className="flex gap-4"
            >
              <div
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                style={{
                  background: "var(--gradient-brand)",
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  fontWeight: 600,
                  color: "white",
                }}
              >
                {step.number}
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 600,
                    fontSize: "var(--text-h3)",
                    color: "var(--color-text-primary)",
                    marginBottom: "var(--space-sm)",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-body)",
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.6,
                  }}
                >
                  {step.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ ...transitionBase, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-[var(--radius-md)] text-white font-medium transition-all hover:brightness-110 hover:shadow-[var(--shadow-glow)]"
            style={{
              background: "var(--gradient-brand)",
              fontFamily: "var(--font-body)",
              fontSize: 18,
            }}
          >
            Book Your Discovery Call
          </Link>
        </motion.div>
      </Container>
    </Section>
  );
}
