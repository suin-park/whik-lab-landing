"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Layers, LayoutDashboard, Files } from "lucide-react";
import { staggerContainer, fadeUp, fadeUpSlow } from "../motionPresets";

const productShots = [
  {
    src: "https://bszzdeyquwfgmruvopfe.supabase.co/storage/v1/object/public/package-thumbnails/3d-locker.png",
    alt: "3D Locker 서비스 대시보드 화면",
  },
  {
    src: "https://bszzdeyquwfgmruvopfe.supabase.co/storage/v1/object/public/package-thumbnails/WhikStudio.png",
    alt: "Whik Studio 편집 화면",
  },
] as const;

const cards = [
  {
    icon: Layers,
    title: "AI 제작 파이프라인",
    desc: "반복 제작 시간을 줄여 더 빠르게 진행합니다",
  },
  {
    icon: LayoutDashboard,
    title: "내부 운영 툴",
    desc: "수정과 관리 흐름을 간결하게 정리합니다",
  },
  {
    icon: Files,
    title: "필요한 결과물 묶음 제작",
    desc: "페이지, 이미지, 확인 구조까지 한 번에 준비합니다",
  },
] as const;

export default function SalesWhyReasonableSection() {
  return (
    <motion.section
      id="why-reasonable"
      variants={staggerContainer(0.05, 0.06)}
      initial="show"
      animate="show"
      className="section"
      aria-labelledby="why-reasonable-heading"
    >
      <motion.h2 variants={fadeUp} id="why-reasonable-heading" className="h2">
        왜 빠르고 합리적으로 제작할 수 있을까요?
      </motion.h2>
      <motion.p variants={fadeUp} className="sub mt-2 text-sm max-w-2xl leading-relaxed">
        자체 보유한 AI 제작 파이프라인과 내부 운영 툴을 활용해 반복 작업을 줄이고, 필요한 제작물을 더
        빠르게 정리합니다.
      </motion.p>

      <motion.div
        variants={fadeUpSlow}
        className="mt-7 grid md:grid-cols-2 gap-4"
        aria-label="자체 운영 서비스 및 툴 화면"
      >
        {productShots.map((shot) => (
          <figure
            key={shot.src}
            className="overflow-hidden rounded-2xl border border-white/10 bg-black/35 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]"
          >
            <div className="relative aspect-[16/10] w-full bg-neutral-900/80">
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 560px"
                priority={false}
              />
            </div>
          </figure>
        ))}
      </motion.div>

      <motion.div
        variants={fadeUpSlow}
        className="mt-6 md:mt-7 grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {cards.map((c, i) => {
          const Icon = c.icon;
          return (
            <div
              key={c.title}
              className={`rounded-2xl border border-white/10 bg-black/25 p-4 md:p-5 h-full ${
                i === 2 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl border border-emerald-300/20 bg-emerald-400/10 grid place-items-center shrink-0">
                  <Icon className="w-5 h-5 text-emerald-200/90" aria-hidden />
                </div>
                <div className="min-w-0">
                  <div className="text-[15px] font-semibold tracking-tight text-white/95 leading-snug">
                    {c.title}
                  </div>
                  <p className="mt-1 text-sm text-neutral-300/75 leading-relaxed">{c.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>
    </motion.section>
  );
}
