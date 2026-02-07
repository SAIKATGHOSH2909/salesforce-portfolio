"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { CustomImage } from "@/components/ui/Image";
import { staggerItem } from "@/components/animations/variants";
import { certifications } from "@/data/certifications";
import { Certification } from "@/types";

/**
 * Certifications section showcasing professional certifications
 * Displays Salesforce and other certifications with badges
 */
export const Certifications: React.FC = () => {
  return (
    <Section
      id="certifications"
      title="Certifications"
      subtitle="Professional Credentials"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {certifications.map((cert: Certification) => (
            <motion.div
              key={cert.id}
              variants={staggerItem}
            >
              <Card variant="glass" hover className="h-full flex flex-col items-center text-center group">
                {/* Certification Badge */}
                <motion.div
                  className="mb-4 relative w-24 h-24 md:w-28 md:h-28"
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {cert.badgeUrl ? (
                    <CustomImage
                      src={cert.badgeUrl}
                      alt={`${cert.name} badge`}
                      fill
                      className="object-contain"
                      fallbackSrc="/images/certifications/placeholder-badge.png"
                    />
                  ) : (
                    <motion.div
                      className="w-full h-full bg-primary-500/10 rounded-lg flex items-center justify-center border border-primary-500/20 group-hover:bg-primary-500/20 transition-colors"
                      animate={{
                        boxShadow: [
                          "0 0 0px rgba(99, 102, 241, 0)",
                          "0 0 20px rgba(99, 102, 241, 0.3)",
                          "0 0 0px rgba(99, 102, 241, 0)",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Award className="h-12 w-12 text-primary-400" />
                    </motion.div>
                  )}
                </motion.div>

                {/* Certification Name */}
                <motion.h3
                  className="text-lg font-semibold text-secondary-100 mb-2"
                  whileHover={{ color: "#818cf8" }}
                  transition={{ duration: 0.2 }}
                >
                  {cert.name}
                </motion.h3>

                {/* Issuer */}
                <p className="text-sm text-secondary-400 mb-2">
                  {cert.issuer}
                </p>

                {/* Issue Date */}
                <p className="text-xs text-secondary-500 mb-4">
                  Issued: {new Date(cert.issueDate).toLocaleDateString("en-US", { 
                    month: "short", 
                    year: "numeric" 
                  })}
                </p>

                {/* Verification Link */}
                {cert.verificationUrl && (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-primary-400 hover:text-primary-300 transition-colors mt-auto"
                  >
                    Verify
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-secondary-300">
            <span className="font-semibold text-primary-400">11X Salesforce Certified</span> • 
            <span className="font-semibold text-primary-400"> 3X Copado Certified</span>
          </p>
          <p className="text-sm text-secondary-500 mt-2">
            🏆 5-Star Trailhead Ranger
          </p>
        </motion.div>
      </div>
    </Section>
  );
};
