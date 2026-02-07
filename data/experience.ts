/**
 * Professional experience data
 * Enterprise-focused roles and achievements
 */

import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Technical Consultant",
    company: "Salesforce",
    location: "Bangalore, India",
    startDate: "2024-07-01",
    endDate: undefined, // Present
    logoUrl: "/images/companies/salesforce-logo.png",
    technologies: [
      "Apex",
      "Lightning Web Components",
      "Sales Cloud",
      "Service Cloud",
      "Flows",
      "REST API",
      "SOAP API",
      "Platform Events",
      "Integration",
      "Release Management",
    ],
    achievements: [
      "Working as Technical Consultant at Salesforce, providing expert guidance and technical solutions to enterprise clients",
      "Architecting and implementing scalable Salesforce solutions that align with business objectives and technical best practices",
      "Collaborating with cross-functional teams to deliver customized Salesforce implementations",
      "Conducting technical assessments and providing strategic recommendations for Salesforce platform optimization",
      "Leading client engagements to ensure successful Salesforce project delivery",
      "Mentoring team members and sharing knowledge on Salesforce best practices and emerging technologies",
    ],
  },
  {
    id: "exp-2",
    role: "Salesforce Developer",
    company: "Cognizant",
    location: "Kolkata, West Bengal, India",
    startDate: "2020-08-01",
    endDate: "2024-07-31",
    logoUrl: "/images/companies/cognizant-logo.png",
    technologies: [
      "Apex",
      "Lightning Web Components",
      "Visualforce",
      "Sales Cloud",
      "Service Cloud",
      "Flows",
      "Workflows",
      "Process Builder",
      "REST API",
      "SOAP API",
      "Data Migration",
      "Reports & Dashboards",
      "Security",
    ],
    achievements: [
      "Developed custom Salesforce solutions using Apex, Lightning Web Components, and declarative tools for enterprise clients",
      "Successfully integrated external systems with Salesforce using REST and SOAP APIs, enabling seamless data flow",
      "Managed Salesforce release management activities, ensuring smooth deployments across multiple environments",
      "Implemented complex business logic using Apex triggers, classes, and batch processes with comprehensive test coverage",
      "Created custom Lightning Web Components and Visualforce pages to enhance user experience and meet specific business requirements",
      "Designed and implemented automated workflows using Flows, Process Builder, and Workflow Rules to streamline business processes",
      "Performed data migration activities, ensuring data integrity and accuracy during large-scale data imports",
      "Developed custom reports and dashboards providing actionable insights to stakeholders",
      "Implemented security and sharing models, including profiles, permission sets, and sharing rules",
      "Collaborated with business analysts and stakeholders to gather requirements and deliver solutions that meet business needs",
    ],
  },
];
