"use client";

import { motion } from "framer-motion";
import { Droplets, Gift, Leaf, Sparkles } from "lucide-react";
import { fadeUp, staggerContainer, hoverLift } from "../motionPresets";
import type { ExampleProduct } from "../../data/exampleProduct";

const iconMap = {
  leaf: Leaf,
  drop: Droplets,
  spark: Sparkles,
  gift: Gift,
} as const;

export default function ExampleFeatureGrid({ items }: { items: ExampleProduct["features"] }) {
  return (
    <motion.section
      variants={staggerContainer(0.05, 0.06)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      className="section"
      aria-label="핵심 특징"
    >
      <motion.h2 variants={fadeUp} className="h2">
        핵심 특징
      </motion.h2>
      <motion.p variants={fadeUp} className="sub mt-2 text-sm">
        짧고 확실하게 보이는 3~4개 포인트로 구성합니다.
      </motion.p>

      <div className="mt-7 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((it) => {
          const Icon = iconMap[it.icon] ?? Sparkles;
          return (
            <motion.article
              key={it.title}
              variants={fadeUp}
              {...hoverLift}
              className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm
                         hover:bg-neutral-50 hover:border-neutral-300 transition-all duration-300 h-full"
            >
              <div className="flex items-start gap-3">
                <span className="grid place-items-center w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200">
                  <Icon className="w-5 h-5 text-emerald-700" aria-hidden />
                </span>
                <div className="min-w-0">
                  <div className="text-base font-semibold text-neutral-900">{it.title}</div>
                  <div className="mt-1 text-sm text-neutral-600 leading-snug">{it.sub}</div>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </motion.section>
  );
}

