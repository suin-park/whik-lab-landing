"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp, hoverLift } from "../motionPresets";
import { salesAudience } from "../../data/salesPageContent";

export default function SalesAudience() {
  return (
    <motion.section
      id="audience"
      variants={staggerContainer(0.05, 0.07)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      className="section"
    >
      <motion.h2 variants={fadeUp} className="h2">
        {salesAudience.title}
      </motion.h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {salesAudience.items.map((text) => (
          <motion.div
            key={text}
            variants={fadeUp}
            {...hoverLift}
            className="rounded-xl border border-white/10 bg-neutral-900/80 px-5 py-4 text-sm md:text-[15px] text-neutral-200 leading-snug
                       hover:bg-neutral-800/90 hover:border-white/15 transition-all duration-300"
          >
            {text}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
