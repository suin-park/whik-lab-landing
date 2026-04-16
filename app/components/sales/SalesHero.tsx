"use client";

import { motion } from "framer-motion";
import { Clapperboard, LayoutTemplate, Link2, LineChart } from "lucide-react";
import { staggerContainer, fadeUp, fadeUpSlow } from "../motionPresets";
import { salesHero } from "../../data/salesPageContent";
import SalesHeroVisual from "./SalesHeroVisual";

function scrollToContact() {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
}

const heroIcons = [LayoutTemplate, Clapperboard, Link2, LineChart];

type Props = {
  onOpenChat: () => void;
};

export default function SalesHero({ onOpenChat }: Props) {
  const subLines = salesHero.sub.split("\n");
  const headlineLines = salesHero.headline.split("\n");

  return (
    <motion.section
      variants={staggerContainer(0.05, 0.08)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="section pt-2 md:pt-16 pb-14 md:pb-20 grid md:grid-cols-2 gap-10 items-center"
    >
      <div className="space-y-6">
        <motion.div variants={fadeUp} className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-semibold tracking-wide text-emerald-300/90">
            {salesHero.eyebrow}
          </span>
          <span className="text-xs text-neutral-300 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
            {salesHero.label}
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.08] tracking-[-0.02em]"
        >
          {headlineLines.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </motion.h1>

        <motion.p variants={fadeUpSlow} className="sub max-w-[34rem] text-base leading-relaxed">
          {subLines.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </motion.p>

        <motion.ul variants={fadeUpSlow} className="grid sm:grid-cols-2 gap-2 text-sm text-neutral-300 max-w-md">
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

        <motion.div variants={fadeUpSlow} className="flex flex-wrap gap-3 pt-1">
          <button
            type="button"
            onClick={onOpenChat}
            className="btn-primary"
            aria-label="내 제품도 가능한지 확인하기"
          >
            {salesHero.ctaPrimary}
          </button>
          <button type="button" onClick={scrollToContact} className="btn-ghost" aria-label="바로 문의하기">
            {salesHero.ctaSecondary}
          </button>
        </motion.div>

        <motion.div variants={fadeUpSlow} className="flex items-center gap-3 pt-1 text-xs text-neutral-500">
          <div className="h-px w-10 bg-white/15" />
          판매 지원 · Whik Lab
        </motion.div>
      </div>

      <SalesHeroVisual />
    </motion.section>
  );
}
