"use client";

import React from "react";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { staggerItem } from "@/components/animations/variants";
import { architecturePractices } from "@/data/architecture";
import { ArchitecturePractice } from "@/types";

/**
 * Architecture section showcasing best practices
 * Enterprise-level patterns and design principles
 */
export const Architecture: React.FC = () => {
  const getIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName] as React.ComponentType<{
      className?: string;
    }>;
    return IconComponent || LucideIcons.Code;
  };

  return (
    <Section
      id="architecture"
      title="Architecture & Best Practices"
      subtitle="Enterprise Patterns"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {architecturePractices.map((practice: ArchitecturePractice, index: number) => {
          const Icon = getIcon(practice.icon);
          
          return (
            <motion.div
              key={practice.id}
              variants={staggerItem}
            >
              <Card variant="glass" hover className="h-full group">
                <motion.div
                  className="flex items-start gap-4 mb-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="p-3 bg-gradient-to-br from-primary-500/20 to-accent-indigo/20 rounded-lg group-hover:from-primary-500/30 group-hover:to-accent-indigo/30 transition-colors"
                    animate={{
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                  >
                    <Icon className="h-6 w-6 text-primary-400" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-secondary-100 flex-1 group-hover:text-primary-300 transition-colors">
                    {practice.title}
                  </h3>
                </motion.div>
                
                <p className="text-secondary-400 mb-4 leading-relaxed">
                  {practice.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-secondary-200 mb-2">
                    Key Practices:
                  </h4>
                  {practice.keyPoints.map((point, pointIndex) => (
                    <motion.div
                      key={pointIndex}
                      className="text-sm text-secondary-300 flex items-start gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: pointIndex * 0.1 }}
                    >
                      <motion.span
                        className="text-primary-400 mt-1.5 flex-shrink-0"
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: pointIndex * 0.2,
                        }}
                      >
                        ✓
                      </motion.span>
                      <span>{point}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};
