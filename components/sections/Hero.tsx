"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Download, Eye } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CustomImage } from "@/components/ui/Image";
import { staggerContainer, fadeInUp, scale, floating } from "@/components/animations/variants";
import { RESUME_URL } from "@/lib/constants";

/**
 * Hero section with animated gradient background and staggered text entrance
 * Professional introduction with CTA buttons
 */
export const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    projectsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-950 via-secondary-900 to-primary-950">
        {/* Animated radial gradients */}
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.15),transparent_50%)]"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]"
          animate={{
            backgroundPosition: ["100% 100%", "0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
        
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-400/20 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <Container className="relative z-10 py-12 md:py-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col lg:flex-row items-center lg:items-center gap-8 lg:gap-16 max-w-7xl mx-auto"
        >
          {/* Profile Photo - Left Side */}
          <motion.div
            variants={scale}
            className="flex-shrink-0 w-full lg:w-auto"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="relative w-64 h-96 md:w-72 md:h-[28rem] lg:w-80 lg:h-[32rem] rounded-2xl overflow-hidden border-4 border-primary-500/40 shadow-2xl shadow-primary-500/30 bg-secondary-900/50 backdrop-blur-sm"
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 40px rgba(99, 102, 241, 0.6)",
                borderColor: "rgba(99, 102, 241, 0.6)",
              }}
              animate={{
                boxShadow: [
                  "0 0 25px rgba(99, 102, 241, 0.3)",
                  "0 0 40px rgba(99, 102, 241, 0.5)",
                  "0 0 25px rgba(99, 102, 241, 0.3)",
                ],
                borderColor: [
                  "rgba(99, 102, 241, 0.4)",
                  "rgba(139, 92, 246, 0.5)",
                  "rgba(99, 102, 241, 0.4)",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <motion.img
                src="/images/profile/saikat-ghosh.jpg"
                alt="Saikat Ghosh - Technical Consultant at Salesforce"
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="absolute inset-0 w-full h-full object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/images/placeholder.png";
                }}
              />
              {/* Animated gradient overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-primary-950/20 via-transparent to-transparent pointer-events-none"
                animate={{
                  opacity: [0.3, 0.1, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>

          {/* Content - Right Side */}
          <motion.div
            className="flex-1 text-center lg:text-left space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {/* Name */}
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <motion.span
                className="text-secondary-100 inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Saikat
              </motion.span>
              <motion.span
                className="text-primary-400 inline-block ml-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Ghosh
              </motion.span>
            </motion.h1>

            {/* Title */}
            <motion.div
              variants={fadeInUp}
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.h2
                className="text-2xl md:text-3xl lg:text-4xl font-semibold text-secondary-300 mb-3"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Technical Consultant at Salesforce
              </motion.h2>
              <motion.div
                className="flex items-center justify-center lg:justify-start gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <span className="text-secondary-400 text-xl md:text-2xl">|</span>
                <motion.h2
                  className="text-2xl md:text-3xl lg:text-4xl font-semibold text-secondary-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Salesforce Developer
                </motion.h2>
              </motion.div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-secondary-400 mb-10 max-w-2xl lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Technical Consultant at Salesforce with 5.5+ years of experience designing and delivering 
              SaaS solutions. 11X Salesforce Certified professional specializing in Health Cloud, Life Sciences, 
              AgentForce, Experience Cloud, and enterprise integrations. 🏆 5-Star Trailhead Ranger
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <Button
                variant="primary"
                size="lg"
                icon={Eye}
                onClick={scrollToProjects}
                className="w-full sm:w-auto"
              >
                View Projects
              </Button>
              <Link href={RESUME_URL} download className="w-full sm:w-auto">
                <Button
                  variant="secondary"
                  size="lg"
                  icon={Download}
                  iconPosition="left"
                  className="w-full"
                >
                  Download Resume
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={() => {
              const aboutSection = document.getElementById("about");
              aboutSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex flex-col items-center text-secondary-400 hover:text-secondary-200 transition-colors"
            aria-label="Scroll to about section"
          >
            <span className="text-sm mb-2">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ChevronDown className="h-6 w-6" />
            </motion.div>
          </motion.button>
        </motion.div>
      </Container>
    </section>
  );
};
