"use client";

import React from "react";
import { motion } from "framer-motion";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Certifications } from "@/components/sections/Certifications";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Architecture } from "@/components/sections/Architecture";
import { Contact } from "@/components/sections/Contact";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StructuredData } from "@/components/SEO/StructuredData";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { pageTransition } from "@/components/animations/variants";

/**
 * Main page component assembling all sections
 * Page-level animations and smooth transitions
 */
export default function Home() {
  return (
    <>
      <StructuredData />
      <ScrollProgress />
      <Header />
      <motion.main
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransition}
        className="min-h-screen"
      >
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Experience />
        <Projects />
        <Architecture />
        <Contact />
        <Footer />
      </motion.main>
    </>
  );
}
