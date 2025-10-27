"use client";
import type { Variants } from "framer-motion";

export const staggerContainer = (delay = 0, stagger = 0.06): Variants => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delay, staggerChildren: stagger, when: "beforeChildren" },
  },
});

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12, filter: "blur(2px)" },
  show:   { opacity: 1, y: 0,  filter: "blur(0px)", transition: { duration: 0.4, ease: "easeOut" } },
};

export const fadeUpSlow: Variants = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.6, ease: "easeOut" } },
};

export const hoverLift = { whileHover: { y: -2 }, whileTap: { scale: 0.98 } };

