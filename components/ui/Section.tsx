"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeInUp, staggerContainer } from "@/components/animations/variants";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  subtitle?: string;
  id?: string;
  children: React.ReactNode;
}

/**
 * Section wrapper component with scroll-triggered animations
 * Provides consistent spacing and reveal animations
 */
export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ title, subtitle, id, className, children, ...props }, ref) => {
    const sectionRef = React.useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    
    return (
      <section
        ref={ref || sectionRef}
        id={id}
        className={cn("py-20 md:py-32", className)}
        {...props}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {(title || subtitle) && (
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUp}
              className="mb-12 text-center"
            >
              {subtitle && (
                <p className="text-sm font-semibold text-primary-400 uppercase tracking-wider mb-2">
                  {subtitle}
                </p>
              )}
              {title && (
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-100">
                  {title}
                </h2>
              )}
            </motion.div>
          )}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {children}
          </motion.div>
        </div>
      </section>
    );
  }
);

Section.displayName = "Section";
