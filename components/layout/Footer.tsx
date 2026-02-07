"use client";

import React from "react";
import Link from "next/link";
import { Linkedin, Github, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SOCIAL_LINKS } from "@/lib/constants";

/**
 * Footer component with social links and copyright
 */
export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-secondary-800 bg-secondary-950/50 backdrop-blur-sm">
      <Container>
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-secondary-400">
            © {currentYear} Salesforce Developer Portfolio. All rights reserved.
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-400 hover:text-primary-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-400 hover:text-primary-400 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={SOCIAL_LINKS.email}
              className="text-secondary-400 hover:text-primary-400 transition-colors"
              aria-label="Send Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
