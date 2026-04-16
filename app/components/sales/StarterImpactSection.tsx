"use client";

import { motion } from "framer-motion";
import { FileText, Image as ImageIcon, Workflow, Minus, Check } from "lucide-react";
import { staggerContainer, fadeUp, fadeUpSlow } from "../motionPresets";

const impactCards = [
  {
    icon: FileText,
    title: "제품 소개 페이지 확보",
    desc: "제품 설명과 핵심 정보, 구매 유도 흐름을 한 곳에 정리합니다",
  },
  {
    icon: ImageIcon,
    title: "SNS 대표 비주얼 확보",
    desc: "바로 업로드하거나 광고 테스트에 활용할 수 있는 대표 이미지를 만듭니다",
  },
  {
    icon: Workflow,
    title: "판매 시작 구조 정리",
    desc: "제품만 있는 상태에서 벗어나 실제로 보여주고 테스트할 수 있는 기본 구성을 갖춥니다",
  },
] as const;

const beforeItems = [
  { text: "제품만 있음", value: 20 },
  { text: "소개 페이지 없음", value: 12 },
  { text: "홍보용 대표 비주얼 없음", value: 16 },
  { text: "어디서부터 시작할지 막막함", value: 10 },
] as const;

const afterItems = [
  { text: "1페이지 소개 구조 완성", value: 88 },
  { text: "SNS 대표 비주얼 확보", value: 82 },
  { text: "판매 시작용 기본 구성 정리", value: 84 },
  { text: "바로 테스트 가능한 상태로 전환", value: 90 },
] as const;

function ImpactBar({
  value,
  tone,
}: {
  value: number;
  tone: "before" | "after";
}) {
  return (
    <div className="h-2 w-full rounded-full bg-white/5 border border-white/10 overflow-hidden">
      <div
        className={
          tone === "after"
            ? "h-full rounded-full bg-gradient-to-r from-emerald-400/70 via-teal-300/70 to-cyan-300/70"
            : "h-full rounded-full bg-white/15"
        }
        style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
      />
    </div>
  );
}

export default function StarterImpactSection() {
  return (
    <motion.section
      id="starter-impact"
      variants={staggerContainer(0.05, 0.06)}
      initial="show"
      animate="show"
      className="section"
    >
      <motion.h2 variants={fadeUp} className="h2">
        스타터 도입 후 이렇게 달라집니다
      </motion.h2>
      <motion.p variants={fadeUp} className="sub mt-2 text-sm max-w-2xl">
        복잡하게 준비하지 않아도 판매 시작에 필요한 기본 구조를 빠르게 갖출 수 있습니다
      </motion.p>

      <motion.div
        variants={fadeUpSlow}
        className="mt-7 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] via-white/[0.03] to-transparent p-5 md:p-6"
      >
        <div className="grid lg:grid-cols-3 gap-4">
          {impactCards.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="rounded-2xl border border-white/10 bg-black/25 p-4 md:p-5 h-full"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl border border-emerald-300/20 bg-emerald-400/10 grid place-items-center shrink-0">
                    <Icon className="w-5 h-5 text-emerald-200/90" aria-hidden />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[15px] font-semibold tracking-tight text-white/95 leading-snug">
                      {c.title}
                    </div>
                    <p className="mt-1 text-sm text-neutral-300/75 leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-5 grid md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-white/10 bg-black/20 p-4 md:p-5">
            <div className="text-xs font-semibold tracking-[0.22em] text-neutral-300/70 uppercase">
              도입 전
            </div>
            <div className="mt-4 space-y-3">
              {beforeItems.map((it) => (
                <div key={it.text} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full border border-white/10 bg-white/[0.03] grid place-items-center shrink-0">
                      <Minus className="w-3.5 h-3.5 text-neutral-400/70" aria-hidden />
                    </span>
                    <div className="text-sm font-medium text-neutral-200/80">{it.text}</div>
                  </div>
                  <ImpactBar value={it.value} tone="before" />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-emerald-300/18 bg-emerald-500/[0.07] p-4 md:p-5">
            <div className="text-xs font-semibold tracking-[0.22em] text-emerald-200/85 uppercase">
              도입 후
            </div>
            <div className="mt-4 space-y-3">
              {afterItems.map((it) => (
                <div key={it.text} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full border border-emerald-300/25 bg-emerald-400/10 grid place-items-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-emerald-200/90" aria-hidden />
                    </span>
                    <div className="text-sm font-semibold text-white/90">{it.text}</div>
                  </div>
                  <ImpactBar value={it.value} tone="after" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

