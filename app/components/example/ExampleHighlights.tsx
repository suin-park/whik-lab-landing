"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../motionPresets";
import type { ExampleProduct } from "../../data/exampleProduct";

export default function ExampleHighlights({ summary }: { summary: ExampleProduct["summaryBar"] }) {
  return (
    <motion.section
      variants={staggerContainer(0.04, 0.05)}
      initial="show"
      animate="show"
      className="section pt-0"
      aria-label="구매 포인트 요약"
    >
      <motion.div variants={fadeUp} className="rounded-2xl border border-neutral-200 bg-white overflow-hidden shadow-sm">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {summary.map((item) => (
            <div
              key={item.label}
              className="p-4 md:p-5 border-neutral-200 border-b md:border-b-0 md:border-r last:border-r-0"
            >
              <div className="text-[11px] tracking-widest text-neutral-500 uppercase">{item.label}</div>
              <div className="mt-1 text-sm font-semibold text-neutral-900">{item.value}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}

