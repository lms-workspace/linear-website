export interface Project {
  id: string;
  title: string;
  categories: string[];
  result: string;
}

export const PROJECTS: Project[] = [
  {
    id: "p2p",
    title: "Point 2 Point Communications",
    categories: ["Website", "Brand System", "Marketing"],
    result:
      "Full rebrand and digital presence for nanoFIBER product line. 50+ marketing assets delivered.",
  },
  {
    id: "bayville",
    title: "Bayville Bakery & Deli",
    categories: ["Marketing", "Social Strategy"],
    result:
      "Organic growth system and content framework for local NJ bakery.",
  },
  {
    id: "commit",
    title: "Commit Fitness (@fit.blake)",
    categories: ["Brand", "Content", "Social"],
    result:
      "160K+ following built across platforms. Millions of views. Full content and sales funnel system.",
  },
  {
    id: "lm-fitness",
    title: "LM Fitness Center",
    categories: ["Operations", "Marketing"],
    result:
      "Scaled personal training revenue from $5K to $53K/month through SOPs, strategy, and outreach systems.",
  },
  {
    id: "crm-dashboard",
    title: "Custom CRM Dashboard",
    categories: ["Dashboard", "Automation"],
    result:
      "Client dashboard built with real-time reporting and automated lead tracking.",
  },
  {
    id: "ai-agent",
    title: "Custom AI Agent Build",
    categories: ["AI Agent"],
    result:
      "Autonomous business assistant deployed for operations team.",
  },
  {
    id: "saas-waitlist",
    title: "SaaS Landing + Waitlist System",
    categories: ["Website", "App"],
    result: "Placeholder — ready for real project",
  },
  {
    id: "brand-kit",
    title: "Brand System Export Kit",
    categories: ["Brand System"],
    result: "Hard-coded brand kit with full export system",
  },
];

export const ALL_CATEGORIES = Array.from(
  new Set(PROJECTS.flatMap((p) => p.categories))
).sort();
