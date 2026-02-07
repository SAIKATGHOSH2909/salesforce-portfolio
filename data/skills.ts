/**
 * Skills data organized by category
 * Salesforce-specific technologies with Lucide React icons
 */

import { Skill } from "@/types";

export const skills: Skill[] = [
  {
    id: "salesforce-platform",
    category: "Salesforce Platform",
    icon: "Cloud",
    description: "Core platform expertise across multiple Salesforce clouds",
    technologies: [
      "Salesforce Configuration & Customization",
      "Health Cloud & Life Sciences Cloud",
      "Sales, Service & Experience Cloud",
      "AgentForce",
      "Custom Objects",
      "Reports & Dashboards",
    ],
  },
  {
    id: "backend",
    category: "Backend Development",
    icon: "Code",
    description: "Apex development, integrations, and data architecture",
    technologies: [
      "Apex (Synchronous & Asynchronous)",
      "Apex Triggers",
      "Apex Classes",
      "SOQL & SOSL",
      "Lightning Flows",
      "OmniStudio (FlexCards, Integration Procedures, DataRaptors)",
    ],
  },
  {
    id: "frontend",
    category: "Frontend & UI/UX",
    icon: "Layout",
    description: "Lightning Web Components and modern UI development",
    technologies: [
      "Lightning Web Components (LWC)",
      "Aura Components",
      "Visualforce & JavaScript",
      "Experience Cloud Portal Development (Multilingual, Custom UI)",
      "Lightning Design System",
      "HTML & CSS",
    ],
  },
  {
    id: "integration",
    category: "Integrations",
    icon: "Plug",
    description: "Enterprise integrations and API development",
    technologies: [
      "REST & SOAP API Integrations (Inbound & Outbound)",
      "CTI Integrations (NICE, Genesys)",
      "Snowflake Integration",
      "Outlook Integration (Email & Event Sync)",
      "SSO Setup (SAML, OAuth)",
      "OAuth & Named Credentials",
    ],
  },
  {
    id: "devops",
    category: "DevOps & Tools",
    icon: "Settings",
    description: "Development tools and version control",
    technologies: [
      "VS Code & Copado",
      "Salesforce CLI",
      "Git & GitHub",
      "Release Management",
      "Change Sets",
      "Deployment",
    ],
  },
];
