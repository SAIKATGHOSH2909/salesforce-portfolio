/**
 * Framer Motion transition configurations
 * Consistent timing and easing for smooth animations
 */

import { Transition } from "framer-motion";

/**
 * Default smooth transition
 */
export const smoothTransition: Transition = {
  duration: 0.3,
  ease: [0.4, 0, 0.2, 1], // Custom cubic bezier
};

/**
 * Fast transition for micro-interactions
 */
export const fastTransition: Transition = {
  duration: 0.2,
  ease: "easeOut",
};

/**
 * Slow transition for major animations
 */
export const slowTransition: Transition = {
  duration: 0.6,
  ease: "easeOut",
};

/**
 * Spring animation for natural motion
 */
export const springTransition: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
};

/**
 * Gentle spring for subtle animations
 */
export const gentleSpring: Transition = {
  type: "spring",
  stiffness: 200,
  damping: 25,
};

/**
 * Bouncy spring for playful interactions
 */
export const bouncySpring: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 20,
};
