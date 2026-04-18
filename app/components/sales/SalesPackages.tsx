"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp, fadeUpSlow } from "../motionPresets";
import { salesPackages } from "../../data/salesPageContent";

export default function SalesPackages() {
  return (
    <motion.section
      id="packages"
      variants={staggerContainer(0.05, 0.06)}
      initial="show"
      animate="show"
      className="section"
    >
      <motion.h2 variants={fadeUp} className="h2">
        {salesPackages.title}
      </motion.h2>

      <div className="mt-8 grid md:grid-cols-3 gap-5 items-stretch">
        {salesPackages.tiers.map((tier) => (
          <motion.article key={tier.name} variants={fadeUp} className="card p-6 flex flex-col h-full relative overflow-hidden">
            <div className="flex items-start justify-between gap-3">
              <div className="text-xs font-semibold uppercase tracking-wide text-emerald-300/90">{tier.name}</div>
              <div className="text-[11px] font-semibold tracking-tight rounded-full border border-emerald-300/25 bg-gradient-to-r from-emerald-500/15 via-white/[0.06] to-cyan-500/15 px-2.5 py-1 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_0_18px_rgba(16,185,129,0.08)]">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-teal-200 to-cyan-200">
                  {tier.name === "Starter"
                    ? "30만원 (VAT 별도)"
                    : tier.name === "Page + Video"
                      ? "100만원 (VAT 별도)"
                      : "200만원 (VAT 별도)"}
                </span>
              </div>
            </div>
            <p className="sub text-sm mt-2 leading-relaxed">{tier.blurb}</p>
            <ul className="mt-4 space-y-2 text-sm text-neutral-300 flex-1">
              {tier.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <span className="text-emerald-400/90 shrink-0">✓</span>
                  <span className="whitespace-pre-line leading-relaxed">{f}</span>
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
