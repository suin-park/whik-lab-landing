"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "../motionPresets";
import { salesProblemValue } from "../../data/salesPageContent";

export default function SalesProblemValue() {
  return (
    <motion.section
      id="problem-value"
      variants={staggerContainer(0.05, 0.06)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      className="section"
    >
      <motion.h2 variants={fadeUp} className="h2 max-w-3xl">
        {salesProblemValue.title}
      </motion.h2>
      <motion.div variants={fadeUp} className="mt-6 card p-6 md:p-8 max-w-4xl space-y-4">
        {salesProblemValue.body.map((p, i) => (
          <p key={i} className="text-neutral-300 leading-relaxed">
            {p}
          </p>
        ))}
      </motion.div>
    </motion.section>
  );
}
