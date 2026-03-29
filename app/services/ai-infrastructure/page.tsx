import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/services/ServicePageLayout";

export const metadata: Metadata = {
  title: "AI Infrastructure — Custom AI Agents & Automation | LMS",
  description:
    "Custom AI agent development, workflow automation, CRM integration, OpenClaw deployment, and AI-powered content systems. AI as infrastructure, not an afterthought.",
};

export default function AIInfrastructurePage() {
  return (
    <ServicePageLayout
      badge="AI Infrastructure"
      headline="AI deployed as infrastructure. Not a chatbot on your homepage."
      intro="This is where LMS separates from every other agency. We don't just use AI — we build AI systems into your business operations. Custom agents, automated workflows, intelligent CRMs, and tools that work while you sleep."
      body={[
        "Most companies are experimenting with AI. Trying ChatGPT for blog posts. Maybe an AI chatbot on their website. That's not infrastructure — that's tourism. LMS builds AI into the operating layer of your business.",
        "We develop custom AI agents designed around your specific workflows, data, and business logic. These aren't generic tools — they're purpose-built systems that handle content production, lead routing, analytics, reporting, customer support, and internal operations autonomously.",
        "We deploy OpenClaw — the most powerful open-source AI agent platform available — for businesses that want a persistent, autonomous AI assistant across every channel. WhatsApp, Slack, Gmail, iMessage, your CRM. One agent, every channel. Your data stays yours.",
        "Beyond agents, we build workflow automation that eliminates manual overhead. CRM pipelines that route leads intelligently. Content systems that produce at scale with human quality control. Reporting dashboards that update themselves. The goal: your business runs smarter every week without adding headcount.",
      ]}
      services={[
        { title: "Custom AI Agent Development", description: "Purpose-built agents designed around your workflows, data, and specific business logic.", icon: "agent" },
        { title: "OpenClaw Setup & Integration", description: "Full personal AI assistant setup — installation, configuration, skill development, and team onboarding across every channel.", icon: "openclaw" },
        { title: "Workflow Automation", description: "End-to-end automation of repetitive processes using AI-assisted logic and trigger systems.", icon: "workflow" },
        { title: "CRM Building & Integration", description: "Custom CRM configuration, pipeline architecture, and lead flow automation.", icon: "crm" },
        { title: "AI-Powered Content Systems", description: "Scalable content production pipelines that combine AI generation with human quality control.", icon: "contentAi" },
        { title: "Custom Tool Development", description: "Proprietary tools, internal platforms, and API integrations built for your exact needs.", icon: "tools" },
      ]}
      differentiators={[
        { title: "Infrastructure, not experiments", description: "We don't demo AI tools and leave. We build AI systems that run your business operations — agents, automations, and integrations that work autonomously." },
        { title: "Your data stays yours", description: "OpenClaw runs on your infrastructure. Your conversations, your customer data, your business logic — never shared with third-party AI providers." },
        { title: "Compounding intelligence", description: "Every agent interaction generates data. Every data point improves the system. After 30 days, your AI infrastructure knows your business better than most employees." },
        { title: "One operator builds it all", description: "No vendor coordination. No API middlemen. LMS builds the agent, connects the CRM, automates the workflow, and monitors the output. One system, one operator." },
      ]}
      related={[
        { href: "/services/ai-education", title: "AI Education", description: "Team training, tool onboarding, and operational integration for AI tools." },
        { href: "/services/web-development", title: "Web & App Dev", description: "Production-grade websites, dashboards, and platforms — built from scratch." },
        { href: "/services/business-operations", title: "Business Operations", description: "CRM systems, analytics dashboards, sales enablement, and process architecture." },
      ]}
    />
  );
}
