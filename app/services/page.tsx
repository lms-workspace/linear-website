import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export default function Services() {
  return (
    <>
      <Section id="services">
        <Container>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-h1)",
              color: "var(--color-text-primary)",
              marginBottom: "var(--space-lg)",
            }}
          >
            Services &amp; Capabilities
          </h1>
          <p style={{ color: "var(--color-text-secondary)" }}>
            Full services and capabilities page — content coming soon.
          </p>
        </Container>
      </Section>
    </>
  );
}
