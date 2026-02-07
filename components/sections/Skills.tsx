"use client";

import React from "react";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { staggerItem, hoverScale } from "@/components/animations/variants";
import { skills } from "@/data/skills";
import { Skill } from "@/types";

/**
 * Skills section with responsive grid layout
 * Skill cards with icons, categories, and technology lists
 */
export const Skills: React.FC = () => {
  const getIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName] as React.ComponentType<{
      className?: string;
    }>;
    return IconComponent || LucideIcons.Code;
  };

  return (
    <Section
      id="skills"
      title="Skills & Expertise"
      subtitle="Technologies & Tools"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {skills.map((skill: Skill, index: number) => {
          const Icon = getIcon(skill.icon);
          
          return (
            <motion.div
              key={skill.id}
              variants={staggerItem}
            >
              <Card variant="glass" hover className="h-full group">
                <div className="flex items-start gap-4 mb-4">
                  <motion.div
                    className="p-2 bg-primary-500/10 rounded-lg group-hover:bg-primary-500/20 transition-colors"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="h-6 w-6 text-primary-400" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-secondary-100 mb-1">
                      {skill.category}
                    </h3>
                    {skill.description && (
                      <p className="text-sm text-secondary-400 mb-3">
                        {skill.description}
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="space-y-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      className="text-sm text-secondary-300 flex items-center gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: techIndex * 0.05 }}
                    >
                      <motion.span
                        className="h-1.5 w-1.5 rounded-full bg-primary-400"
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: techIndex * 0.2,
                        }}
                      />
                      {tech}
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
