"use client";

import { motion } from "framer-motion";
import { Clapperboard, LayoutTemplate, Link2, LineChart } from "lucide-react";
import { staggerContainer, fadeUp, fadeUpSlow, hoverLift } from "../motionPresets";
import { salesHero } from "../../data/salesPageContent";

function scrollToContact() {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
}

const heroIcons = [LayoutTemplate, Clapperboard, Link2, LineChart];

type Props = {
  onOpenChat: () => void;
};

export default function SalesHero({ onOpenChat }: Props) {
  return (
    <motion.section
      variants={staggerContainer(0.05, 0.08)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="section pt-2 md:pt-16 pb-14 md:pb-20 grid md:grid-cols-2 gap-10 items-center"
    >
      <div className="space-y-7">
        <motion.p variants={fadeUp} className="text-xs font-semibold tracking-wide text-emerald-300/90">
          {salesHero.eyebrow}
        </motion.p>
        <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight space-y-2">
          <span className="block">{salesHero.headline}</span>
        </motion.h1>

        <motion.p variants={fadeUpSlow} className="sub max-w-xl text-base leading-relaxed">
          {salesHero.sub}
        </motion.p>

        <motion.ul variants={fadeUpSlow} className="grid sm:grid-cols-2 gap-2 text-sm text-neutral-300">
          {salesHero.bullets.map((b, i) => {
            const Icon = heroIcons[i] ?? LayoutTemplate;
            return (
              <li key={b} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2">
                <Icon className="w-4 h-4 text-emerald-300/90 shrink-0" aria-hidden />
                <span>{b}</span>
              </li>
            );
          })}
        </motion.ul>

        <motion.div variants={fadeUpSlow} className="flex flex-wrap gap-3">
          <button type="button" onClick={scrollToContact} className="btn-primary">
            {salesHero.ctaPrimary}
          </button>
          <button type="button" onClick={onOpenChat} className="btn-ghost" aria-label="판매 상담 챗봇 열기">
            {salesHero.ctaSecondary}
          </button>
        </motion.div>

        <motion.div variants={fadeUpSlow} className="flex items-center gap-3 pt-2 text-xs text-neutral-500">
          <div className="h-px w-10 bg-white/15" />
          판매 지원 · Whik Lab
        </motion.div>
      </div>

      <motion.div
        variants={fadeUpSlow}
        className="card p-6 md:p-8 relative overflow-hidden"
        {...hoverLift}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-violet-500/10 pointer-events-none" />
        <div className="relative space-y-5">
          <p className="text-sm font-medium text-neutral-300">한 번에 정리하는 시작 구조</p>
          <div className="space-y-4">
            {salesHero.bullets.map((label, i) => {
              const Icon = heroIcons[i] ?? LayoutTemplate;
              return (
                <div key={label} className="flex items-start gap-3">
                  <span className="grid place-items-center w-10 h-10 rounded-xl bg-white/10 border border-emerald-400/20">
                    <Icon className="w-5 h-5 text-emerald-200" aria-hidden />
                  </span>
                  <div>
                    <div className="font-medium text-white">{label}</div>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      {i === 0 && "한 페이지에 메시지와 문의 동선을 담습니다."}
                      {i === 1 && "쇼츠·릴스에 맞는 짧은 포맷으로 제작합니다."}
                      {i === 2 && "카톡·폼·상담 예약 등 실제 연결을 맞춥니다."}
                      {i === 3 && "작은 테스트부터 범위를 제안합니다."}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-xs text-neutral-500 leading-relaxed pt-2 border-t border-white/10">
            지금 단계에 맞는 범위만 빠르게 정리해 바로 쓸 수 있는 형태로 전달합니다.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}
