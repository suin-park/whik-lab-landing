"use client";

import { motion } from "framer-motion";
import { Clock, Image as ImageIcon, LayoutTemplate, Link2 } from "lucide-react";
import { staggerContainer, fadeUp, fadeUpSlow } from "../motionPresets";
import { salesHeroContent } from "./salesHeroContent";
import SalesHeroVisual from "./SalesHeroVisual";

function scrollToContact() {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
}

const includeIcons = [LayoutTemplate, Link2, ImageIcon, Clock];

type Props = {
  onOpenChat: () => void;
};

export default function SalesHero({ onOpenChat }: Props) {
  const copy = salesHeroContent;
  const headlineLines = copy.headline.split("\n");
  const subLines = copy.sub.split("\n");

  return (
    <motion.section
      variants={staggerContainer(0.05, 0.08)}
      initial="show"
      animate="show"
      className="section pt-4 md:pt-12 pb-16 md:pb-20 mb-0 grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-start"
    >
      <div className="space-y-4 md:space-y-5 max-w-xl">
        <motion.div variants={fadeUp} className="flex items-center gap-2 flex-wrap">
          {copy.badges.map((b) => (
            <span
              key={b}
              className="text-[11px] text-neutral-200/90 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1"
            >
              {b}
            </span>
          ))}
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="tracking-[-0.03em] max-w-[22rem] sm:max-w-[28rem] space-y-1"
        >
          <span className="block text-[2.05rem] sm:text-[2.5rem] md:text-[3rem] font-semibold text-white leading-[1.08]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300">
              30만원
            </span>
            <span className="text-white/95">으로 시작하는</span>
          </span>
          {headlineLines[1] && (
            <span className="block text-[2.05rem] sm:text-[2.5rem] md:text-[3rem] font-semibold text-white leading-[1.08]">
              {headlineLines[1]}
            </span>
          )}
        </motion.h1>

        <motion.p variants={fadeUpSlow} className="text-sm md:text-base text-neutral-300/80 leading-relaxed max-w-[26rem]">
          {subLines.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </motion.p>

        <motion.div variants={fadeUpSlow} className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-lg pt-1">
          {copy.includes.map((line, i) => {
            const Icon = includeIcons[i] ?? LayoutTemplate;
            return (
              <div
                key={line}
                className="group flex items-center gap-2 rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] px-3 py-2 min-h-0 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] hover:border-emerald-300/20 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_0_22px_rgba(16,185,129,0.08)] transition"
              >
                <Icon className="w-3.5 h-3.5 text-emerald-300/80 shrink-0 group-hover:text-emerald-200/90 transition-colors" aria-hidden />
                <span className="text-[13px] leading-snug text-neutral-100/90">{line}</span>
              </div>
            );
          })}
        </motion.div>

        <motion.div variants={fadeUpSlow} className="flex flex-col sm:flex-row gap-2.5 pt-2">
          <button
            type="button"
            onClick={scrollToContact}
            className="order-1 min-h-[48px] px-6 rounded-xl inline-flex items-center justify-center text-[15px] font-semibold tracking-tight bg-white text-black hover:bg-white/90 transition shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_12px_30px_rgba(0,0,0,0.35)]"
            aria-label={copy.ctaPrimary}
          >
            {copy.ctaPrimary}
          </button>
          <button
            type="button"
            onClick={onOpenChat}
            className="order-2 min-h-[48px] px-6 rounded-xl inline-flex items-center justify-center text-[15px] font-medium tracking-tight bg-white/[0.06] text-white/90 border border-white/10 hover:bg-white/[0.08] hover:border-white/15 transition"
            aria-label="AI 견적 상담 챗봇 열기"
          >
            {copy.ctaSecondary}
          </button>
        </motion.div>

        <motion.div variants={fadeUpSlow} className="pt-1 text-[11px] md:text-xs text-neutral-400/60 max-w-[30rem]">
          <p>{copy.noticePrimary}</p>
          <p className="leading-relaxed">{copy.noticeSecondary}</p>
        </motion.div>
      </div>

      <SalesHeroVisual />
    </motion.section>
  );
}
