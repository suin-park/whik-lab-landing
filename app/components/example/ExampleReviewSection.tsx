"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { fadeUp, staggerContainer, hoverLift } from "../motionPresets";
import type { ExampleProduct } from "../../data/exampleProduct";

function Stars({ score }: { score: number }) {
  const full = Math.round(score);
  return (
    <div className="flex items-center gap-1" aria-label={`별점 ${score}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < full ? "text-amber-500" : "text-neutral-200"}`}
          aria-hidden
        />
      ))}
    </div>
  );
}

export default function ExampleReviewSection({
  rating,
  items,
}: {
  rating: ExampleProduct["rating"];
  items: ExampleProduct["reviewsSample"];
}) {
  return (
    <motion.section
      variants={staggerContainer(0.05, 0.06)}
      initial="show"
      animate="show"
      className="section"
      aria-label="리뷰 느낌 섹션"
    >
      <motion.h2 variants={fadeUp} className="h2">
        Sample Reviews
      </motion.h2>
      <motion.div variants={fadeUp} className="mt-3 flex items-center gap-3 flex-wrap">
        <span className="text-sm text-neutral-900 font-semibold">{rating.score.toFixed(1)}</span>
        <Stars score={rating.score} />
        <span className="text-sm text-neutral-600">리뷰 {rating.reviews.toLocaleString()}개</span>
      </motion.div>

      <div className="mt-7 grid md:grid-cols-3 gap-4">
        {items.map((r) => (
          <motion.article
            key={r.title}
            variants={fadeUp}
            {...hoverLift}
            className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm hover:bg-neutral-50 hover:border-neutral-300 transition-all"
          >
            <div className="text-base font-semibold text-neutral-900 leading-snug">{r.title}</div>
            <div className="mt-2 text-sm text-neutral-700 leading-relaxed">{r.body}</div>
            <div className="mt-4 text-[11px] text-neutral-500">{r.meta}</div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}

