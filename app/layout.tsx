import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saikat Ghosh - Technical Consultant at Salesforce | 9X Certified",
  description: "Technical Consultant at Salesforce with 5+ years of experience. 9X Salesforce Certified professional specializing in Apex, Lightning Web Components, REST/SOAP API integrations, Flows, and enterprise Salesforce solutions.",
  keywords: [
    "Saikat Ghosh",
    "Salesforce Technical Consultant",
    "Salesforce Developer",
    "9X Salesforce Certified",
    "Apex Developer",
    "Lightning Web Components",
    "Salesforce Integration",
    "REST API",
    "SOAP API",
    "Sales Cloud",
    "Service Cloud",
    "Salesforce Platform Developer",
    "Copado Certified",
  ],
  authors: [{ name: "Saikat Ghosh" }],
  openGraph: {
    title: "Saikat Ghosh - Technical Consultant at Salesforce",
    description: "Technical Consultant at Salesforce | 9X Salesforce Certified | 5+ years experience in enterprise Salesforce solutions",
    type: "website",
    url: "https://www.linkedin.com/in/saikat-ghosh-178558159/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
