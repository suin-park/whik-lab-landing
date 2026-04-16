"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp, fadeUpSlow } from "../motionPresets";
import { salesPackages } from "../../data/salesPageContent";

export default function SalesPackages() {
  return (
    <motion.section
      id="packages"
      variants={staggerContainer(0.05, 0.06)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="section"
    >
      <motion.h2 variants={fadeUp} className="h2">
        {salesPackages.title}
      </motion.h2>

      <div className="mt-8 grid md:grid-cols-3 gap-5 items-stretch">
        {salesPackages.tiers.map((tier) => (
          <motion.article key={tier.name} variants={fadeUp} className="card p-6 flex flex-col h-full">
            <div className="text-xs font-semibold uppercase tracking-wide text-emerald-300/90">{tier.name}</div>
            <p className="sub text-sm mt-2 leading-relaxed">{tier.blurb}</p>
            <ul className="mt-4 space-y-2 text-sm text-neutral-300 flex-1">
              {tier.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <span className="text-emerald-400/90 shrink-0">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>

      <motion.p variants={fadeUpSlow} className="sub text-sm mt-6 max-w-3xl leading-relaxed">
        {salesPackages.footnote}
      </motion.p>
    </motion.section>
  );
}
