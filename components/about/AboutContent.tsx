"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SplitText } from "@/components/ui/SplitText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { MagneticButton } from "@/components/ui/MagneticButton";

type ChapterProps = {
  number: string;
  title: string;
  children: React.ReactNode;
};

function Chapter({ number, title, children }: ChapterProps) {
  return (
    <div className="py-20 md:py-32 border-t border-[color:rgba(15,10,31,0.08)]">
      <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8 lg:gap-16">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
            Chapter {number}
          </p>
          <ScrollReveal direction="up" distance={20}>
            <h2 className="font-display font-bold text-text-primary text-3xl md:text-4xl leading-[1.1] mt-3">
              {title}
            </h2>
          </ScrollReveal>
        </div>
        <div className="flex flex-col gap-6 max-w-[64ch]">{children}</div>
      </div>
    </div>
  );
}

type BodyProps = {
  children: React.ReactNode;
  delay?: number;
};

function Body({ children, delay = 0 }: BodyProps) {
  return (
    <ScrollReveal direction="up" distance={20} delay={delay}>
      <p className="text-text-secondary text-lg md:text-xl leading-relaxed">
        {children}
      </p>
    </ScrollReveal>
  );
}

function ChapterCloser({ children }: { children: React.ReactNode }) {
  return (
    <ScrollReveal direction="up" distance={20}>
      <p className="font-display font-semibold text-text-primary text-2xl md:text-3xl leading-tight pt-2">
        {children}
      </p>
    </ScrollReveal>
  );
}

type BenefitProps = {
  label: string;
  children: React.ReactNode;
  delay?: number;
};

function Benefit({ label, children, delay = 0 }: BenefitProps) {
  return (
    <ScrollReveal direction="up" distance={20} delay={delay}>
      <div>
        <h3 className="font-display font-bold text-text-primary text-xl mb-3">
          {label}
        </h3>
        <p className="text-text-secondary leading-relaxed">{children}</p>
      </div>
    </ScrollReveal>
  );
}

export function AboutContent() {
  return (
    <Section id="about" className="light-section !pt-0 relative">
      <Container>
        <div className="pt-24 md:pt-40 pb-12 md:pb-16">
          <SplitText
            as="h1"
            mode="words"
            stagger={0.04}
            duration={0.7}
            scrollTrigger={false}
            className="font-display font-bold text-text-primary leading-[1.05] max-w-[28ch]"
            {...({
              style: { fontSize: "clamp(2.5rem, 5.5vw, 64px)" },
            } as React.HTMLAttributes<HTMLElement>)}
          >
            LMS is a full-scale marketing agency that builds custom AI solutions for established businesses.
          </SplitText>

          <div className="mt-10 max-w-[64ch] flex flex-col gap-6 text-text-secondary text-lg md:text-xl leading-relaxed">
            <ScrollReveal direction="up" distance={20} delay={0.1}>
              <p>
                The work ranges from automated content posting up to agentic
                orchestration acting as Chief of Staff, CEO, or CMO — sized to
                your business.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" distance={20} delay={0.15}>
              <p>
                Every system is designed around your actual sales pipeline and
                revenue goals.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" distance={20} delay={0.2}>
              <p>
                You get our team and the stack we&apos;ve built, at a fraction
                of the cost of an agency or in-house team.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" distance={20} delay={0.25}>
              <p className="font-display font-semibold text-text-primary text-xl md:text-2xl">
                Less liability. Less time. More effectiveness.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </Container>

      <Container>
        <Chapter number="01" title="A lean firm operating at agency scale.">
          <Body>
            LMS runs as a one-operator firm with two layers of leverage: a
            custom AI stack we built (called Silas), and outside specialists
            brought in when a job calls for them.
          </Body>
          <Body delay={0.05}>
            Silas is a Claude Code distribution we engineered for marketing
            operations. It holds the memory of every client, every decision,
            every deliverable we&apos;ve shipped. On any given day, we can run
            six parallel Silas instances. Each one handles a distinct surface:
            client content systems, code shipping, knowledge infrastructure,
            visual production, pipeline monitoring.
          </Body>
          <Body delay={0.1}>
            In practice that means we&apos;re refining the LMS site, shipping
            a campaign for nanoFIBER (Point-to-Point Communications&apos;
            product line), processing the file intake system for Permits and
            More, building visuals for Cold Blood Tattoos, and updating client
            knowledge bases. All concurrent. All without a project manager.
          </Body>
          <ChapterCloser>
            What would normally take a four-person agency runs through one
            operator and the stack.
          </ChapterCloser>
        </Chapter>

        <Chapter
          number="02"
          title="The same architecture, sized to your business."
        >
          <Body>
            At the small end, the work looks like brand identity, a clean
            website, local search setup, or a workflow system designed around
            how the owner actually operates. Heritage RV, Cold Blood Tattoos,
            and Permits and More each fit here. We build the foundation, ship
            what the business needs to function, and stay on retainer for
            changes.
          </Body>
          <Body delay={0.05}>
            In the middle, the work compounds. For Point-to-Point
            Communications&apos; nanoFIBER line, we run a content engine,
            monitor distributor catalogs across four sites, ship trade-show
            campaigns (InfoComm 2026, NAB 2026), and operate a shared CRM with
            the client&apos;s sales lead. The work runs continuously across
            content, trade shows, distributor relationships, and the sales
            handoff.
          </Body>
          <Body delay={0.1}>
            At the large end, the system runs a function. ACX Technologies
            hired us as a CEO-level research arm for a $5–10M raise: four
            reports, 80+ funding sources, vetted strategic options. With
            Stillwell Peptides, LMS operates as a partnership closer to chief
            of staff than to vendor, covering brand, marketing, ops, with a
            part-ownership trajectory.
          </Body>
          <ChapterCloser>
            The architecture underneath each engagement is the same custom AI
            stack we run for ourselves. The surface area scales to the
            business.
          </ChapterCloser>
        </Chapter>

        <Chapter number="03" title="Sales and marketing under one roof.">
          <Body>
            Most marketing agencies stop at the lead. They hand the contact to
            the sales team and call it done. Marketing optimizes for traffic
            and form fills. Sales optimizes for closed deals. The two metrics
            drift apart, and within a quarter no one knows which campaigns
            actually drove revenue.
          </Body>
          <Body delay={0.05}>
            Our setup keeps it under one roof. The same operator who writes
            the content also configures the CRM, sets the lead scoring,
            monitors the pipeline, and watches what closes. For Point-to-Point
            Communications, that means we sit inside a shared CRM with the
            client&apos;s sales lead. We see which LinkedIn posts brought
            which OEM contacts, which contacts converted to quotes, which
            quotes closed. The next week&apos;s content reflects what&apos;s
            working. Feedback loops measured in days.
          </Body>
          <Body delay={0.1}>
            The same pattern holds across the roster. ACX Technologies&apos;
            marketing surface IS the capital raise. Every report we deliver
            moves the conversation with funders forward, and we&apos;re in the
            room when those conversations happen. Heritage RV&apos;s website
            conversions feed into the sales pipeline. Cold Blood
            Tattoos&apos; brand work translates to studio bookings.
          </Body>
          <ChapterCloser>
            Every system we build is wired to the business outcome that pays
            for it.
          </ChapterCloser>
        </Chapter>

        <Chapter
          number="04"
          title="A fraction of the cost. Built to compound."
        >
          <Body>
            Hiring a team means salaries, W-2s, payroll, benefits, HR, and the
            standing liability of having employees on the books. Agencies look
            cheaper at the surface, but they carry their own overhead, mark up
            the work, and frequently subcontract execution to smaller shops
            anyway — you pay agency margins for delivery that happens
            elsewhere.
          </Body>
          <Body delay={0.05}>
            We&apos;re the other path. One operator and a custom AI stack we
            built. The cost structure works at every tier because the
            headcount stays at one and the leverage scales through software.
          </Body>
          <Body delay={0.1}>
            Two engagement structures: we can design and build the system,
            then hand it to you — you take it from there and run it yourself.
            Or we design, build, and operate the system on the back end while
            you go grow the business or take time off.
          </Body>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 mt-4 pt-8 border-t border-[color:rgba(15,10,31,0.08)]">
            <Benefit label="Less liability.">
              No W-2s. No payroll. No HR. No exposure to staff turnover, no
              risk of a specialist walking out with the institutional
              knowledge.
            </Benefit>
            <Benefit label="Less time." delay={0.05}>
              No four-week agency kickoff. No specialist handoffs. First
              deliverable in days.
            </Benefit>
            <Benefit label="Direct line." delay={0.1}>
              You talk to the operator doing the work — no account managers,
              no coordination layer. Requests and timelines flex
              mid-engagement. A new ask Tuesday morning ships by Friday. No
              change-order paperwork.
            </Benefit>
            <Benefit label="More effectiveness." delay={0.15}>
              The operator who builds the system is the one configuring it
              for your business. Context never leaves the work. The AI stack
              underneath gets sharper every week. Month twelve of an LMS
              retainer buys objectively more than month one did.
            </Benefit>
          </div>
        </Chapter>

        <div className="pt-20 md:pt-28 pb-24 md:pb-32 border-t border-[color:rgba(15,10,31,0.08)]">
          <ScrollReveal direction="up" distance={20}>
            <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-text-muted mb-4 text-center">
              Build with us
            </p>
            <h2 className="font-display font-bold text-text-primary text-3xl md:text-5xl leading-[1.1] max-w-[24ch] mx-auto mb-10 text-center">
              Operate at agency scale without the agency cost.
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" distance={20} delay={0.1}>
            <div className="flex justify-center">
              <MagneticButton strength={0.25}>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-10 py-5 bg-text-primary text-white font-body font-semibold text-lg rounded-full transition-all duration-150 hover:brightness-110"
                >
                  Start a conversation
                </Link>
              </MagneticButton>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </Section>
  );
}
