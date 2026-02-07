"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { CustomImage } from "@/components/ui/Image";
import { staggerItem, fadeInUp } from "@/components/animations/variants";
import { experiences } from "@/data/experience";
import { formatDateRange, calculateDuration } from "@/lib/utils";

/**
 * Experience timeline with vertical layout
 * Animated line with staggered reveals for each role
 */
export const Experience: React.FC = () => {
  return (
    <Section
      id="experience"
      title="Professional Experience"
      subtitle="Career Timeline"
    >
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-primary-600 to-primary-500 opacity-30" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={staggerItem}
                className="relative pl-20"
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-6 top-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, type: "spring", stiffness: 200 }}
                >
                  <div className="relative">
                    <motion.div
                      className="absolute inset-0 bg-primary-500 rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut",
                      }}
                    />
                    <motion.div
                      className="relative bg-primary-500 rounded-full w-4 h-4 border-4 border-secondary-950"
                      whileHover={{ scale: 1.3 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    />
                  </div>
                </motion.div>

                {/* Timeline content */}
                <Card variant="glass" hover className="ml-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-secondary-100 mb-1">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-secondary-300 mb-2">
                        {exp.logoUrl ? (
                          <div className="relative w-6 h-6 rounded overflow-hidden flex-shrink-0">
                            <CustomImage
                              src={exp.logoUrl}
                              alt={`${exp.company} logo`}
                              fill
                              className="object-contain"
                              fallbackSrc="/images/companies/placeholder-logo.png"
                            />
                          </div>
                        ) : (
                          <Briefcase className="h-4 w-4 flex-shrink-0" />
                        )}
                        <span className="font-medium">{exp.company}</span>
                        {exp.location && (
                          <>
                            <span className="text-secondary-500">•</span>
                            <span className="text-sm">{exp.location}</span>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <div className="text-sm font-medium text-primary-400 mb-1">
                        {formatDateRange(exp.startDate, exp.endDate)}
                      </div>
                      <div className="text-xs text-secondary-500">
                        {calculateDuration(exp.startDate, exp.endDate)}
                      </div>
                    </div>
                  </div>

                  {/* Technologies */}
                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-2 py-1 text-xs bg-primary-500/10 text-primary-300 rounded-md border border-primary-500/20"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: techIndex * 0.05 }}
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: "rgba(99, 102, 241, 0.2)",
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  )}

                  {/* Achievements */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-secondary-200 mb-2">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          className="text-sm text-secondary-400 flex items-start gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: achIndex * 0.1 }}
                        >
                          <motion.span
                            className="text-primary-400 mt-1.5"
                            animate={{
                              rotate: [0, 10, -10, 0],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: achIndex * 0.3,
                            }}
                          >
                            ▸
                          </motion.span>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
