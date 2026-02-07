"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { hoverLift } from "@/components/animations/variants";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "bordered";
  hover?: boolean;
  children: React.ReactNode;
}

/**
 * Reusable Card component with glassmorphism and hover effects
 * Supports multiple variants for different use cases
 */
export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ variant = "default", hover = true, className, children, ...props }, ref) => {
    const baseStyles = "rounded-xl p-6 transition-all";
    
    const variants = {
      default: "bg-secondary-900/40 border border-secondary-800/50",
      glass: "glass backdrop-blur-md",
      bordered: "bg-secondary-900/60 border-2 border-secondary-700/50",
    };
    
    const Component = hover ? motion.div : "div";
    const motionProps = hover
      ? {
          variants: hoverLift,
          initial: "rest",
          whileHover: "hover",
        }
      : {};
    
    return (
      <Component
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        {...(motionProps as any)}
        {...(props as any)}
      >
        {children}
      </Component>
    );
  }
);

Card.displayName = "Card";
