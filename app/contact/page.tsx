import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export default function Contact() {
  return (
    <>
      <Section id="contact">
        <Container>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-h1)",
              color: "var(--color-text-primary)",
              marginBottom: "var(--space-lg)",
            }}
          >
            Contact
          </h1>
          <p style={{ color: "var(--color-text-secondary)" }}>
            Get in touch — contact form and details coming soon.
          </p>
        </Container>
      </Section>
    </>
  );
}
