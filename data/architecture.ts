/**
 * Architecture and best practices content
 * Showcasing enterprise-level thinking and patterns
 */

import { ArchitecturePractice } from "@/types";

export const architecturePractices: ArchitecturePractice[] = [
  {
    id: "trigger-framework",
    title: "Trigger Framework",
    icon: "Layers",
    description: `Implementing scalable trigger frameworks that handle complex business logic 
      while maintaining code quality and testability. Using handler patterns, context detection, 
      and bulkification to ensure governor limit compliance.`,
    keyPoints: [
      "Handler pattern with base interfaces",
      "Context-aware execution (before/after insert/update/delete)",
      "Automatic bulkification",
      "Comprehensive error handling and logging",
      "100% test coverage",
      "Centralized trigger management",
    ],
  },
  {
    id: "governor-limits",
    title: "Governor Limit Optimization",
    icon: "Gauge",
    description: `Proactive governor limit management through efficient SOQL queries, 
      bulkification patterns, and strategic use of asynchronous processing. Every solution 
      is designed with limits in mind from day one.`,
    keyPoints: [
      "SOQL query optimization (selective queries, field-level security)",
      "Bulkification in all Apex code",
      "Strategic use of @future, Queueable, and Batch Apex",
      "Platform Events for decoupled processing",
      "Change Data Capture for efficient data sync",
      "Monitoring and alerting for limit usage",
    ],
  },
  {
    id: "security-first",
    title: "Security-First Design",
    icon: "Shield",
    description: `Building security into every layer of the application. From field-level 
      security to sharing models, every solution prioritizes data protection and compliance 
      with enterprise security standards.`,
    keyPoints: [
      "Principle of least privilege",
      "Field-level and object-level security",
      "Apex managed sharing for complex scenarios",
      "Encryption at rest and in transit",
      "Security audit trails",
      "Regular security reviews and penetration testing",
    ],
  },
  {
    id: "scalable-data",
    title: "Scalable Data Models",
    icon: "Database",
    description: `Designing data models that scale from thousands to millions of records. 
      Using custom objects, relationships, and indexing strategies to ensure performance 
      at enterprise scale.`,
    keyPoints: [
      "Normalized data structures",
      "Strategic use of custom objects",
      "Efficient relationship design",
      "Indexing and selective queries",
      "Data archiving strategies",
      "Performance testing at scale",
    ],
  },
  {
    id: "integration-patterns",
    title: "Integration Architecture",
    icon: "Network",
    description: `Designing robust integration patterns using REST, SOAP, Platform Events, 
      and Change Data Capture. Building resilient systems that handle failures gracefully 
      and maintain data consistency.`,
    keyPoints: [
      "RESTful API design",
      "Idempotent operations",
      "Error handling and retry logic",
      "Platform Events for real-time sync",
      "Change Data Capture for efficient updates",
      "Monitoring and alerting",
    ],
  },
  {
    id: "lwc-performance",
    title: "LWC Performance",
    icon: "Zap",
    description: `Optimizing Lightning Web Components for speed and efficiency. Using wire 
      services, lazy loading, and efficient data fetching to create lightning-fast user 
      experiences.`,
    keyPoints: [
      "Wire services for efficient data fetching",
      "Lazy loading and code splitting",
      "Client-side caching",
      "Minimal server roundtrips",
      "Platform Events instead of polling",
      "Performance profiling and optimization",
    ],
  },
];
