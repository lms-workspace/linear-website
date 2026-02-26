"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SERVICE_ICONS, type ServiceIconKey } from "./icons";
import type { Pillar } from "./data";
import { fadeUp, transitionBase } from "@/lib/animations";
import { motion } from "framer-motion";

interface ServicePillarProps {
  pillar: Pillar;
  index: number;
}

function CapabilityCard({
  title,
  description,
  iconKey,
  cardIndex,
}: {
  title: string;
  description: string;
  iconKey: ServiceIconKey;
  cardIndex: number;
}) {
  const Icon = SERVICE_ICONS[iconKey] ?? SERVICE_ICONS.content;
  return (
    <motion.div
      variants={fadeUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      transition={{ ...transitionBase, delay: cardIndex * 0.03 }}
      className="group block rounded-[var(--radius-lg)] p-5 transition-all duration-300 hover:shadow-[var(--shadow-glow)] hover:-translate-y-0.5 border relative overflow-hidden"
      style={{
        background: "var(--color-surface-2)",
        borderColor: "var(--color-border)",
      }}
    >
      <span
        className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "var(--gradient-brand)" }}
      />
      <span
        className="inline-block mb-3"
        style={{ color: "var(--color-accent-primary)" }}
      >
        <Icon />
      </span>
      <h3
        className="gradient-text mb-2"
        style={{
          fontFamily: "var(--font-body)",
          fontWeight: 600,
          fontSize: "var(--text-h3)",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "var(--text-body)",
          color: "var(--color-text-secondary)",
          lineHeight: 1.5,
        }}
      >
        {description}
      </p>
    </motion.div>
  );
}

export function ServicePillar({ pillar, index }: ServicePillarProps) {
  return (
    <Section id={pillar.id} className="!py-[var(--space-2xl)]">
      <div
        className="w-full border-t"
        style={{ borderColor: "var(--color-border)" }}
      />
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
            marginTop: "var(--space-xl)",
            marginBottom: "var(--space-sm)",
          }}
        >
          {pillar.title}
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
            marginBottom: "var(--space-xl)",
            maxWidth: "60ch",
          }}
        >
          {pillar.tagline}
        </motion.p>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          style={{ gap: "var(--space-lg)" }}
        >
          {pillar.capabilities.map((cap, i) => (
            <CapabilityCard
              key={cap.title}
              title={cap.title}
              description={cap.description}
              iconKey={cap.icon}
              cardIndex={index * 10 + i}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
