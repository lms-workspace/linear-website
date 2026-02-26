import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export default function Home() {
  return (
    <>
      <Section id="home">
        <Container>
          <p
            style={{
              color: "var(--color-text-secondary)",
              maxWidth: "40ch",
              paddingTop: "var(--space-2xl)",
            }}
          >
            Design system foundation is active. Background is{" "}
            <code style={{ fontFamily: "var(--font-mono)" }}>--color-bg</code>.
          </p>
        </Container>
      </Section>
    </>
  );
}
