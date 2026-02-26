import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export default function Work() {
  return (
    <>
      <Section id="work">
        <Container>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-h1)",
              color: "var(--color-text-primary)",
              marginBottom: "var(--space-lg)",
            }}
          >
            Work
          </h1>
          <p style={{ color: "var(--color-text-secondary)" }}>
            Portfolio — apps, dashboards, websites. Content coming soon.
          </p>
        </Container>
      </Section>
    </>
  );
}
