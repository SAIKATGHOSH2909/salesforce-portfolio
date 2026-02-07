/**
 * Project case studies
 * Enterprise Salesforce implementations with business impact
 */

import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Sales Cloud Implementation & Customization",
    category: "Sales Cloud",
    thumbnailUrl: "/images/projects/sales-cloud-implementation.jpg",
    imageUrls: [
      "/images/projects/sales-cloud-implementation-1.jpg",
      "/images/projects/sales-cloud-implementation-2.jpg",
    ],
    businessProblem: `A mid-market organization needed to implement Sales Cloud to streamline 
      their sales processes and improve visibility into sales pipeline. The existing manual 
      processes were causing delays, inconsistent data, and lack of real-time insights for 
      sales leadership.`,
    solution: `Led the end-to-end Sales Cloud implementation including requirement gathering, 
      solution design, and custom development. Configured Sales Cloud objects, fields, and 
      relationships. Built custom Lightning Web Components for opportunity management and 
      created automated workflows using Flow Builder. Developed comprehensive reports and 
      dashboards for sales analytics.`,
    technologies: [
      "Sales Cloud",
      "Lightning Web Components",
      "Flow Builder",
      "Apex",
      "Reports & Dashboards",
      "Custom Objects",
    ],
    impact: [
      {
        metric: "Sales Visibility",
        value: "100% pipeline visibility",
      },
      {
        metric: "Process Efficiency",
        value: "40% reduction in sales cycle time",
      },
      {
        metric: "User Adoption",
        value: "95% user adoption rate",
      },
    ],
    details: `Configured Sales Cloud with custom fields and objects to match business processes. 
      Built Lightning Web Components for enhanced user experience in opportunity management. 
      Created automated workflows for lead assignment, opportunity routing, and approval processes. 
      Developed real-time dashboards providing sales leadership with actionable insights. 
      Conducted user training sessions and provided ongoing support.`,
  },
  {
    id: "project-2",
    title: "REST API Integration with External Systems",
    category: "Integration",
    thumbnailUrl: "/images/projects/api-integration.jpg",
    imageUrls: [
      "/images/projects/api-integration-1.jpg",
      "/images/projects/api-integration-2.jpg",
    ],
    businessProblem: `An enterprise client needed to integrate Salesforce with multiple external 
      systems including ERP, billing, and customer support platforms. Manual data entry was 
      causing errors, delays, and data inconsistencies across systems.`,
    solution: `Designed and implemented REST API integrations connecting Salesforce with external 
      systems. Built Apex classes for API callouts with proper error handling and retry logic. 
      Created Platform Events for real-time data synchronization. Implemented data transformation 
      logic to ensure data consistency across systems.`,
    technologies: [
      "REST API",
      "SOAP API",
      "Apex",
      "Platform Events",
      "Integration",
      "Error Handling",
    ],
    impact: [
      {
        metric: "Data Accuracy",
        value: "99.9% data accuracy",
      },
      {
        metric: "Time Savings",
        value: "80% reduction in manual data entry",
      },
      {
        metric: "Real-time Sync",
        value: "Near real-time data synchronization",
      },
    ],
    details: `Developed REST API integrations using Apex HTTP callouts with proper authentication 
      and error handling. Implemented retry logic for failed API calls and created monitoring 
      dashboards for integration health. Used Platform Events for event-driven architecture 
      enabling real-time updates. Built data transformation layers to map data between systems 
      ensuring consistency.`,
  },
  {
    id: "project-3",
    title: "Custom Lightning Web Component Development",
    category: "Custom Development",
    thumbnailUrl: "/images/projects/lwc-development.jpg",
    imageUrls: [
      "/images/projects/lwc-development-1.jpg",
    ],
    businessProblem: `A client needed custom user interfaces that weren't available in standard 
      Salesforce functionality. The existing Visualforce pages were outdated and didn't provide 
      the modern user experience expected by end users.`,
    solution: `Developed custom Lightning Web Components using modern JavaScript (ES6+) and 
      Lightning Design System. Built reusable components with proper error handling and loading 
      states. Implemented efficient data fetching using wire services and Apex methods. Created 
      responsive designs that work seamlessly on desktop and mobile devices.`,
    technologies: [
      "Lightning Web Components",
      "JavaScript (ES6+)",
      "Apex",
      "Lightning Design System",
      "Wire Services",
    ],
    impact: [
      {
        metric: "User Experience",
        value: "Modern, responsive interface",
      },
      {
        metric: "Performance",
        value: "Fast load times with optimized queries",
      },
      {
        metric: "Reusability",
        value: "Reusable component library",
      },
    ],
    details: `Built custom Lightning Web Components following Salesforce best practices. 
      Implemented proper component architecture with separation of concerns. Used wire services 
      for efficient data fetching and Apex methods for complex business logic. Created 
      responsive designs using Lightning Design System ensuring consistent UI/UX. Implemented 
      error handling and loading states for better user experience.`,
  },
  {
    id: "project-4",
    title: "Flow Automation & Process Optimization",
    category: "Custom Development",
    thumbnailUrl: "/images/projects/flow-automation.jpg",
    imageUrls: [
      "/images/projects/flow-automation-1.jpg",
    ],
    businessProblem: `A client had multiple manual processes that were time-consuming and 
      error-prone. Business users were spending significant time on repetitive tasks that 
      could be automated, impacting productivity and data accuracy.`,
    solution: `Analyzed business processes and designed automated workflows using Flow Builder. 
      Created complex flows with decision logic, loops, and subflows. Integrated flows with 
      Apex invocable actions for advanced functionality. Migrated legacy Workflow Rules and 
      Process Builder automations to modern Flow Builder.`,
    technologies: [
      "Flow Builder",
      "Process Builder",
      "Workflow Rules",
      "Apex Invocable Actions",
      "Automation",
    ],
    impact: [
      {
        metric: "Time Savings",
        value: "70% reduction in manual tasks",
      },
      {
        metric: "Data Accuracy",
        value: "95% improvement in data quality",
      },
      {
        metric: "User Productivity",
        value: "Significant productivity gains",
      },
    ],
    details: `Designed and implemented complex flows to automate business processes including 
      lead routing, opportunity assignment, case escalation, and approval workflows. Created 
      reusable subflows for common processes. Integrated flows with Apex invocable actions 
      for advanced business logic. Migrated legacy automations to Flow Builder following 
      Salesforce best practices. Provided training and documentation for administrators.`,
  },
  {
    id: "project-5",
    title: "Data Migration & Management",
    category: "Custom Development",
    thumbnailUrl: "/images/projects/data-migration.jpg",
    imageUrls: [
      "/images/projects/data-migration-1.jpg",
    ],
    businessProblem: `A client needed to migrate large volumes of historical data from legacy 
      systems to Salesforce. The data was in various formats and required cleaning, transformation, 
      and validation before import. Manual data entry was not feasible given the volume.`,
    solution: `Planned and executed comprehensive data migration strategy. Performed data 
      analysis and cleansing activities. Created data transformation scripts and mapping 
      documents. Used Data Loader and Bulk API for efficient data import. Implemented data 
      validation rules and error handling. Created custom Apex classes for complex data 
      transformations and validations.`,
    technologies: [
      "Data Loader",
      "Bulk API",
      "Apex",
      "Data Migration",
      "Data Validation",
      "ETL Processes",
    ],
    impact: [
      {
        metric: "Data Volume",
        value: "Millions of records migrated",
      },
      {
        metric: "Data Quality",
        value: "98% data accuracy",
      },
      {
        metric: "Time Efficiency",
        value: "Automated migration process",
      },
    ],
    details: `Developed comprehensive data migration plan including data analysis, cleansing, 
      transformation, and validation strategies. Created data mapping documents and transformation 
      logic. Used Data Loader and Bulk API for efficient bulk data operations. Built custom 
      Apex classes for complex data transformations and validations. Implemented error handling 
      and data quality checks. Provided post-migration support and data reconciliation.`,
  },
  {
    id: "project-6",
    title: "Salesforce Release Management & Deployment",
    category: "Custom Development",
    thumbnailUrl: "/images/projects/release-management.jpg",
    imageUrls: [
      "/images/projects/release-management-1.jpg",
    ],
    businessProblem: `A client organization struggled with managing Salesforce releases across 
      multiple environments. Deployments were manual, error-prone, and lacked proper version 
      control. There was no clear process for tracking changes and managing releases.`,
    solution: `Established comprehensive release management processes and best practices. 
      Implemented version control using Git and Salesforce CLI. Created deployment pipelines 
      and change sets. Developed documentation and processes for code review, testing, and 
      deployment. Trained team members on release management best practices.`,
    technologies: [
      "Salesforce CLI",
      "Git & GitHub",
      "Change Sets",
      "Metadata API",
      "Release Management",
      "CI/CD",
    ],
    impact: [
      {
        metric: "Deployment Success",
        value: "95% successful deployments",
      },
      {
        metric: "Time Savings",
        value: "50% reduction in deployment time",
      },
      {
        metric: "Process Efficiency",
        value: "Streamlined release process",
      },
    ],
    details: `Established release management framework including version control, code review 
      processes, and deployment procedures. Implemented Git-based version control for Salesforce 
      metadata. Created deployment pipelines using Salesforce CLI and change sets. Developed 
      comprehensive testing strategies and deployment checklists. Provided training and 
      documentation for the team. Implemented rollback procedures for failed deployments.`,
  },
];
