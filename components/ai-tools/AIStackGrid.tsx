"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, transitionBase } from "@/lib/animations";
import { AI_STACK } from "./aiStackData";

export function AIStackGrid() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-60px" }}
      className="layout-grid"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
        gap: "var(--space-lg)",
      }}
    >
      {AI_STACK.map((tool) => (
        <motion.div
          key={tool.id}
          variants={fadeUp}
          transition={transitionBase}
          style={{
            background: "var(--color-surface-1)",
            borderRadius: "var(--radius-lg)",
            border: "1px solid var(--color-border)",
            padding: "var(--space-lg)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "var(--space-md)",
          }}
        >
          {/* Logo placeholder — labeled for swap */}
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: "var(--radius-md)",
              background:
                "linear-gradient(135deg, var(--color-surface-2), var(--color-bg))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                color: "var(--color-text-muted)",
              }}
            >
              logo
            </span>
          </div>
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "var(--text-body)",
              color: "var(--color-text-primary)",
            }}
          >
            {tool.name}
          </h3>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 14,
              color: "var(--color-text-secondary)",
              lineHeight: 1.5,
            }}
          >
            {tool.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}
