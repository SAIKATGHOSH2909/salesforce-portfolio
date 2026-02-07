"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Award, GraduationCap } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { staggerItem, fadeInUp } from "@/components/animations/variants";
import { aboutContent } from "@/data/about";

/**
 * About section showcasing consultant and developer expertise
 * Enterprise-focused positioning with animated content reveal
 */
export const About: React.FC = () => {
  return (
    <Section id="about" title={aboutContent.title} subtitle={aboutContent.subtitle}>
      <div className="max-w-4xl mx-auto">
        {/* Main Description */}
        <motion.div
          variants={fadeInUp}
          className="mb-12 space-y-6 text-lg text-secondary-300 leading-relaxed"
        >
          <p>{aboutContent.description}</p>
          <p>{aboutContent.consultantMindset}</p>
          <p>{aboutContent.developerExpertise}</p>
        </motion.div>

        {/* Certifications & Education */}
        {(aboutContent.certifications || aboutContent.education) && (
          <motion.div
            variants={fadeInUp}
            className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {aboutContent.certifications && (
              <Card variant="glass" hover>
                <motion.div
                  className="flex items-start gap-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="p-3 bg-primary-500/10 rounded-lg"
                    animate={{
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Award className="h-6 w-6 text-primary-400" />
                  </motion.div>
                  <div>
                    <h4 className="text-xl font-semibold text-secondary-100 mb-2">
                      Certifications
                    </h4>
                    <p className="text-secondary-300 mb-1">
                      {aboutContent.certifications.count}
                    </p>
                    {aboutContent.certifications.additional && (
                      <p className="text-secondary-400 text-sm">
                        {aboutContent.certifications.additional}
                      </p>
                    )}
                    {aboutContent.certifications.highlight && (
                      <p className="text-primary-400 text-sm mt-2">
                        {aboutContent.certifications.highlight}
                      </p>
                    )}
                  </div>
                </motion.div>
              </Card>
            )}
            {aboutContent.education && (
              <Card variant="glass" hover>
                <motion.div
                  className="flex items-start gap-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="p-3 bg-primary-500/10 rounded-lg"
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <GraduationCap className="h-6 w-6 text-primary-400" />
                  </motion.div>
                  <div>
                    <h4 className="text-xl font-semibold text-secondary-100 mb-2">
                      Education
                    </h4>
                    <p className="text-secondary-300 mb-1">
                      {aboutContent.education.degree}
                    </p>
                    <p className="text-secondary-400 text-sm mb-1">
                      {aboutContent.education.institution}
                    </p>
                    <p className="text-primary-400 text-sm">
                      {aboutContent.education.grade}
                    </p>
                  </div>
                </motion.div>
              </Card>
            )}
          </motion.div>
        )}

        {/* Focus Areas */}
        <motion.div
          variants={fadeInUp}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold text-secondary-100 mb-6">
            Focus Areas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {aboutContent.focusAreas.map((area, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="h-5 w-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <span className="text-secondary-300">{area}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Industry Experience & Customer Credentials */}
        {(aboutContent.industryExperience || aboutContent.customerCredentials) && (
          <motion.div
            variants={fadeInUp}
            className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {aboutContent.industryExperience && (
              <Card variant="glass" hover>
                <h4 className="text-xl font-semibold text-secondary-100 mb-4">
                  Industry Experience
                </h4>
                <div className="flex flex-wrap gap-2">
                  {aboutContent.industryExperience.map((industry, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 text-sm bg-primary-500/10 text-primary-300 rounded-lg border border-primary-500/20"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </Card>
            )}
            {aboutContent.customerCredentials && (
              <Card variant="glass" hover>
                <h4 className="text-xl font-semibold text-secondary-100 mb-4">
                  Customer Credentials
                </h4>
                <div className="space-y-2">
                  {aboutContent.customerCredentials.map((customer, index) => (
                    <div
                      key={index}
                      className="text-sm text-secondary-300 flex items-start gap-2"
                    >
                      <span className="text-primary-400 mt-1.5">▸</span>
                      <span>{customer}</span>
                    </div>
                  ))}
                </div>
              </Card>
            )}
          </motion.div>
        )}

        {/* Values */}
        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {aboutContent.values.map((value, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
            >
              <Card variant="glass" hover>
                <h4 className="text-xl font-semibold text-secondary-100 mb-2">
                  {value.title}
                </h4>
                <p className="text-secondary-400">
                  {value.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};
