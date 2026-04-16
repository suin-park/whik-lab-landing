"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, hoverLift } from "../motionPresets";
import type { ExampleProduct } from "../../data/exampleProduct";

function StepCard({ n, title, sub }: { n: number; title: string; sub: string }) {
  return (
    <motion.article
      variants={fadeUp}
      {...hoverLift}
      className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm hover:bg-neutral-50 hover:border-neutral-300 transition-all"
    >
      <div className="flex items-start gap-3">
        <span className="step-badge text-sm shrink-0">{n}</span>
        <div>
          <div className="text-base font-semibold text-neutral-900">{title}</div>
          <div className="mt-1 text-sm text-neutral-600">{sub}</div>
        </div>
      </div>
    </motion.article>
  );
}

function RecommendCard({ title, sub }: { title: string; sub: string }) {
  return (
    <motion.article
      variants={fadeUp}
      {...hoverLift}
      className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm hover:bg-neutral-50 hover:border-neutral-300 transition-all"
    >
      <div className="text-base font-semibold text-neutral-900">{title}</div>
      <div className="mt-1 text-sm text-neutral-600">{sub}</div>
    </motion.article>
  );
}

export default function ExampleUsageSection({
  steps,
  recommend,
}: {
  steps: ExampleProduct["usageSteps"];
  recommend: ExampleProduct["recommend"];
}) {
  return (
    <motion.section
      variants={staggerContainer(0.05, 0.06)}
      initial="show"
      animate="show"
      className="section"
      aria-label="사용 방법 및 추천 대상"
    >
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <motion.h2 variants={fadeUp} className="h2">
            사용 방법
          </motion.h2>
          <motion.p variants={fadeUp} className="sub mt-2 text-sm">
            단계 카드로 간단히 안내합니다.
          </motion.p>
          <div className="mt-7 grid gap-4">
            {steps.map((s, i) => (
              <StepCard key={s.title} n={i + 1} title={s.title} sub={s.sub} />
            ))}
          </div>
        </div>

        <div>
          <motion.h2 variants={fadeUp} className="h2">
            이런 분께 추천
          </motion.h2>
          <motion.p variants={fadeUp} className="sub mt-2 text-sm">
            대상별로 스캔되는 카드 구성도 가능합니다.
          </motion.p>
          <div className="mt-7 grid gap-4">
            {recommend.map((r) => (
              <RecommendCard key={r.title} title={r.title} sub={r.sub} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

