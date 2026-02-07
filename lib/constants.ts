/**
 * Application-wide constants
 */

export const SITE_CONFIG = {
  name: "Saikat Ghosh - Salesforce Portfolio",
  title: "Saikat Ghosh - Technical Consultant at Salesforce",
  description: "Technical Consultant at Salesforce | 11X Salesforce Certified | 5.5+ years experience in Health Cloud, Life Sciences, AgentForce, Experience Cloud, and enterprise Salesforce solutions",
  url: "https://saikatghosh.dev",
} as const;

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/saikat-ghosh-178558159/",
  github: "https://github.com/saikatghosh", // Update with actual GitHub if available
  email: "mailto:saikat.ghosh@example.com", // Update with actual email
} as const;

export const RESUME_URL = "/resume.pdf";

export const ANIMATION_DURATION = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
  slower: 0.8,
} as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;
