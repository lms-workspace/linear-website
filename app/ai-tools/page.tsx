import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export default function AITools() {
  return (
    <>
      <Section id="ai-tools">
        <Container>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-h1)",
              color: "var(--color-text-primary)",
              marginBottom: "var(--space-lg)",
            }}
          >
            AI Tools &amp; OpenClaw Setup
          </h1>
          <p style={{ color: "var(--color-text-secondary)" }}>
            AI tools and OpenClaw setup — content coming soon.
          </p>
        </Container>
      </Section>
    </>
  );
}
