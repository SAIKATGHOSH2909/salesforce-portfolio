"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Scroll progress indicator
 * Shows progress bar at top of page while scrolling
 */
export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-primary-500/20 z-50 origin-left"
      style={{ scaleX }}
    >
      <motion.div
        className="h-full bg-gradient-to-r from-primary-500 via-accent-indigo to-primary-600"
        style={{ scaleX }}
      />
    </motion.div>
  );
};
