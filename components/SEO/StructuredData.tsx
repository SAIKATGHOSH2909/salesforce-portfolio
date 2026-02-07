/**
 * Structured Data (JSON-LD) component for SEO
 * Provides search engines with structured information about the portfolio
 */

export const StructuredData: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Saikat Ghosh",
    jobTitle: "Technical Consultant at Salesforce",
    description: "Technical Consultant at Salesforce with 5+ years of experience. 9X Salesforce Certified professional specializing in Apex, Lightning Web Components, integrations, and enterprise Salesforce solutions.",
    url: "https://www.linkedin.com/in/saikat-ghosh-178558159/",
    sameAs: [
      "https://www.linkedin.com/in/saikat-ghosh-178558159/",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "St. Thomas' College of Engineering & Technology",
    },
    knowsAbout: [
      "Salesforce",
      "Apex",
      "Lightning Web Components",
      "Sales Cloud",
      "Service Cloud",
      "REST API",
      "SOAP API",
      "Salesforce Integration",
      "Flow Builder",
      "Platform Events",
      "Data Migration",
      "Release Management",
      "Enterprise Software Development",
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Salesforce Certified Administrator",
        recognizedBy: {
          "@type": "Organization",
          name: "Salesforce",
        },
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Salesforce Certified Platform Developer",
        recognizedBy: {
          "@type": "Organization",
          name: "Salesforce",
        },
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Copado Certified Fundamentals",
        recognizedBy: {
          "@type": "Organization",
          name: "Copado",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};
