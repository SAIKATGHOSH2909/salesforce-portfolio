/**
 * TypeScript type definitions for the portfolio application
 */

export interface Experience {
  id: string;
  role: string;
  company: string;
  location?: string;
  startDate: string;
  endDate?: string;
  achievements: string[];
  technologies?: string[];
  logoUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  businessProblem: string;
  solution: string;
  technologies: string[];
  impact?: {
    metric: string;
    value: string;
  }[];
  details?: string;
  category: "Sales Cloud" | "Service Cloud" | "Custom Development" | "Integration" | "Security" | "Performance";
  imageUrls?: string[];
  thumbnailUrl?: string;
}

export interface Skill {
  id: string;
  category: string;
  technologies: string[];
  icon: string; // Lucide icon name
  description?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export interface ArchitecturePractice {
  id: string;
  title: string;
  description: string;
  keyPoints: string[];
  icon: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  badgeUrl?: string;
  verificationUrl?: string;
  credentialId?: string;
}
