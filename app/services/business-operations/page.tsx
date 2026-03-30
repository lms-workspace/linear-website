import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/services/ServicePageLayout";

export const metadata: Metadata = {
  title: "Business Operations — CRM, Analytics & Sales Enablement | LMS",
  description:
    "Business development strategy, CRM systems, analytics dashboards, sales enablement, and process architecture. The connective tissue that keeps your business running.",
};

export default function BusinessOperationsPage() {
  return (
    <ServicePageLayout
      badge="Business Operations"
      headline="The connective tissue. Strategy, systems, and support."
      intro="Marketing drives leads. Technology builds the platform. But operations is what keeps the machine running — CRM pipelines, analytics dashboards, sales enablement, and process architecture that turns chaos into clarity."
      body={[
        "Business operations is the layer most agencies ignore. They'll build you a website and run some ads, but when it comes to how your sales team actually follows up on leads, how your pipeline data flows into reports, or how your team coordinates across tools — you're on your own.",
        "LMS builds the systems that connect everything. CRM configuration and pipeline architecture so leads don't fall through cracks. Custom analytics dashboards so you see real-time performance, not last month's PDF. Sales enablement materials — decks, SOPs, outreach sequences — that give your team leverage instead of busywork.",
        "We handle business development strategy for companies entering new markets or launching new products. Market entry planning. Partnership development. Revenue growth roadmaps. The kind of strategic thinking that usually requires a VP of Ops — except we build the systems to execute on it, not just the PowerPoint.",
        "For companies with distributor or channel partner networks, we build branded onboarding experiences that get partners selling faster. Process documentation, workflow design, and coordination systems that scale without adding overhead.",
      ]}
      services={[
        { title: "Business Development Strategy", description: "Market entry planning, partnership development, and revenue growth roadmaps.", icon: "bizdev" },
        { title: "Sales Support & Enablement", description: "Sales decks, SOPs, outreach systems, and pipeline support that gives your team leverage.", icon: "sales" },
        { title: "Operations & Logistics", description: "Process documentation, workflow design, team coordination systems, and operational clarity.", icon: "ops" },
        { title: "Custom Reporting & Analytics", description: "Performance dashboards, KPI tracking, and data-driven decision systems.", icon: "analytics" },
        { title: "CRM Building & Integration", description: "Custom CRM configuration, pipeline architecture, and lead flow automation.", icon: "crm" },
        { title: "Distributor & Partner Onboarding", description: "Branded onboarding experiences for distributors and channel partners.", icon: "partner" },
      ]}
      differentiators={[
        { title: "Systems, not spreadsheets", description: "We don't hand you a CSV and a Notion template. We build live dashboards, automated pipelines, and CRM workflows that run without manual input." },
        { title: "Connected to marketing", description: "Your operations systems feed directly into your marketing data. Lead quality, conversion rates, and revenue attribution — all in one view." },
        { title: "Built for your team", description: "Every SOP, dashboard, and workflow is designed for the people who actually use it. We observe your team's process before we redesign it." },
        { title: "Scales without headcount", description: "The goal is always: handle more volume without adding people. Automation, smart routing, and self-updating reports do the heavy lifting." },
      ]}
      related={[
        { href: "/services/ai-infrastructure", title: "AI Infrastructure", description: "Custom agents, workflow automation, CRM integration, and tool development." },
        { href: "/services/growth-engine", title: "Growth Engine", description: "Full-funnel strategy, brand systems, campaign architecture, and market intelligence." },
        { href: "/services/web-development", title: "Web & App Dev", description: "Production-grade websites, dashboards, and platforms — built from scratch." },
      ]}
    />
  );
}
