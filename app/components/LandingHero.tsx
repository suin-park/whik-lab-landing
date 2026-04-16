"use client";

import { motion } from "framer-motion";
import { Clapperboard, LayoutTemplate, Link2, LineChart } from "lucide-react";
import { staggerContainer, fadeUp, fadeUpSlow } from "./motionPresets";
import { landingHero } from "../data/landingHeroContent";
import LandingHeroVisual from "./LandingHeroVisual";

const heroIcons = [LayoutTemplate, Clapperboard, Link2, LineChart];

function scrollToContact() {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
}

type Props = {
  onOpenChat: () => void;
};

export default function LandingHero({ onOpenChat }: Props) {
  const headlineLines = landingHero.headline.split("\n");
  const subLines = landingHero.sub.split("\n");
  const descLines = landingHero.description.split("\n");

  return (
    <motion.section
      variants={staggerContainer(0.05, 0.08)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="section pt-2 md:pt-20 pb-14 md:pb-20 grid md:grid-cols-2 gap-10 items-start md:items-center"
    >
      <div className="space-y-5 md:space-y-6">
        <motion.div variants={fadeUp} className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-semibold tracking-wide text-emerald-300/90">{landingHero.eyebrow}</span>
          <span className="text-xs text-neutral-300 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
            {landingHero.label}
          </span>
          <span className="text-[11px] font-semibold text-emerald-100/95 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2.5 py-1">
            {landingHero.priceBadge}
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="text-[1.65rem] sm:text-4xl md:text-5xl lg:text-[3.15rem] font-semibold leading-[1.12] tracking-[-0.02em] max-w-[20rem] sm:max-w-[22rem] md:max-w-[26rem]"
        >
          {headlineLines.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </motion.h1>

        <motion.p variants={fadeUpSlow} className="sub max-w-[22rem] md:max-w-[26rem] text-base leading-relaxed">
          {subLines.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </motion.p>

        <motion.p
          variants={fadeUpSlow}
          className="text-sm text-neutral-400 max-w-[22rem] md:max-w-[26rem] leading-relaxed"
        >
          {descLines.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </motion.p>

        <motion.ul variants={fadeUpSlow} className="grid sm:grid-cols-2 gap-2 text-sm text-neutral-300 max-w-lg">
          {landingHero.bullets.map((b, i) => {
            const Icon = heroIcons[i] ?? LayoutTemplate;
            return (
              <li key={b} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2">
                <Icon className="w-4 h-4 text-emerald-300/90 shrink-0" aria-hidden />
                <span>{b}</span>
              </li>
            );
          })}
        </motion.ul>

        <motion.div variants={fadeUpSlow} className="flex flex-col sm:flex-row flex-wrap gap-3 pt-1">
          <button type="button" onClick={scrollToContact} className="btn-primary order-1" aria-label={landingHero.ctaPrimary}>
            {landingHero.ctaPrimary}
          </button>
          <button type="button" onClick={onOpenChat} className="btn-ghost order-2" aria-label={landingHero.ctaSecondary}>
            {landingHero.ctaSecondary}
          </button>
        </motion.div>

        <motion.p
          variants={fadeUpSlow}
          className="text-[11px] md:text-xs text-neutral-500 max-w-[26rem] leading-relaxed border-t border-white/10 pt-4"
        >
          {landingHero.disclaimer}
        </motion.p>
      </div>

      <LandingHeroVisual visualTitle={landingHero.visualTitle} />
    </motion.section>
  );
}
