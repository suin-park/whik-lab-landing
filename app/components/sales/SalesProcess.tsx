"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "../motionPresets";
import { salesProcess } from "../../data/salesPageContent";

export default function SalesProcess() {
  const steps = salesProcess.steps;
  return (
    <motion.section
      id="sales-process"
      variants={staggerContainer(0.05, 0.06)}
      initial="show"
      animate="show"
      className="section"
    >
      <motion.h2 variants={fadeUp} className="h2">
        {salesProcess.title}
      </motion.h2>

      <ol className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {steps.map((step, i, arr) => (
          <motion.li
            key={step.title}
            variants={fadeUp}
            className="group relative card p-4 flex flex-col gap-2 text-left hover:translate-y-[-2px] transition-transform"
          >
            <div className="flex items-center gap-2">
              <span className="grid place-items-center w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400/80 to-violet-400/80 text-black text-sm font-semibold">
                {i + 1}
              </span>
              <span className="font-medium">{step.title}</span>
            </div>
            <p className="sub text-xs leading-relaxed">{step.desc}</p>

            {i < arr.length - 1 && (
              <span
                className="hidden lg:block absolute top-8 right-[-10px] w-5 h-[2px] bg-gradient-to-r from-white/25 to-white/0"
                aria-hidden
              />
            )}
          </motion.li>
        ))}
      </ol>
    </motion.section>
  );
}
