"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Droplets, ShieldCheck, Sparkles } from "lucide-react";
import { fadeUp, staggerContainer, hoverLift } from "../motionPresets";

const PROMO_IMAGE_URL =
  "https://bszzdeyquwfgmruvopfe.supabase.co/storage/v1/object/public/package-thumbnails/cosmetic_preview_01.png";

const points = [
  { icon: Sparkles, title: "산뜻한 마무리", sub: "끈적임 없이 가볍게" },
  { icon: Droplets, title: "데일리 사용감", sub: "아침/저녁 루틴에" },
  { icon: ShieldCheck, title: "민감 피부 고려", sub: "부담 적은 진정 케어" },
] as const;

export default function ExamplePromoSection() {
  return (
    <motion.section
      variants={staggerContainer(0.05, 0.06)}
      initial="show"
      animate="show"
      className="section"
      aria-label="프로모션 상세 섹션"
    >
      <motion.div variants={fadeUp} className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="rounded-3xl border border-neutral-200 bg-white shadow-sm overflow-hidden">
          <div className="relative aspect-[16/11]">
            <Image
              src={PROMO_IMAGE_URL}
              alt="프로모션 이미지"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="text-[11px] font-semibold tracking-widest text-neutral-500 uppercase">Key message</div>
          <div className="text-2xl md:text-3xl font-semibold leading-snug text-neutral-900">
            매일 부담 없이 쓰는
            <br />
            <span className="text-neutral-700">저자극 진정 보습 세럼</span>
          </div>
          <div className="text-sm text-neutral-600">이미지 중심 섹션 + 짧은 포인트 카드로 상세 흐름을 만들 수 있습니다.</div>

          <div className="mt-6 grid sm:grid-cols-3 gap-3">
            {points.map((p) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  variants={fadeUp}
                  {...hoverLift}
                  className="rounded-2xl border border-neutral-200 bg-white shadow-sm p-4"
                >
                  <div className="grid place-items-center w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200">
                    <Icon className="w-5 h-5 text-emerald-700" aria-hidden />
                  </div>
                  <div className="mt-3 text-sm font-semibold text-neutral-900">{p.title}</div>
                  <div className="mt-1 text-xs text-neutral-600">{p.sub}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

