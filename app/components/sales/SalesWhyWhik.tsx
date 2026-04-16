"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "../motionPresets";
import { salesWhy } from "../../data/salesPageContent";

export default function SalesWhyWhik() {
  return (
    <motion.section
      id="why-whik"
      variants={staggerContainer(0.05, 0.06)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      className="section"
    >
      <motion.h2 variants={fadeUp} className="h2 max-w-3xl">
        {salesWhy.title}
      </motion.h2>
      <div className="mt-6 space-y-4 max-w-3xl">
        {salesWhy.paragraphs.map((p, i) => (
          <motion.p key={i} variants={fadeUp} className="text-neutral-300 leading-relaxed">
            {p}
          </motion.p>
        ))}
      </div>
    </motion.section>
  );
}
