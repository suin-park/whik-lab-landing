"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUpSlow } from "../motionPresets";
import { salesHeroContent } from "./salesHeroContent";

const LANDING_PREVIEW_SRC =
  "https://bszzdeyquwfgmruvopfe.supabase.co/storage/v1/object/public/package-thumbnails/page_preview_fin.png";
const SNS_VISUAL_SRC =
  "https://bszzdeyquwfgmruvopfe.supabase.co/storage/v1/object/public/package-thumbnails/keycut_01.png";
const DASHBOARD_PREVIEW_SRC =
  "https://bszzdeyquwfgmruvopfe.supabase.co/storage/v1/object/public/package-thumbnails/analysis.png";

export default function SalesHeroVisual() {
  const { preview } = salesHeroContent;

  return (
    <motion.div
      variants={fadeUpSlow}
      className="card p-3 md:p-4 relative overflow-hidden border-white/10 w-full max-w-lg md:max-w-none mx-auto md:mx-0 self-start"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-violet-500/10 pointer-events-none" />

      <div className="relative space-y-2 md:space-y-3">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[10px] font-semibold tracking-[0.22em] text-emerald-200/80">
            {preview.label}
          </span>
        </div>
        <h2 className="text-lg md:text-xl font-semibold text-white leading-snug">{preview.title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 md:gap-3 pt-0.5 items-stretch">
          {/* 판매 랜딩 */}
          <div className="rounded-2xl border border-white/10 bg-black/30 overflow-hidden flex flex-col h-full min-h-0">
            <div className="flex flex-1 flex-col justify-center gap-2 px-2.5 py-2.5 md:px-3 md:py-3">
              <div className="text-center space-y-1">
                <div className="text-[12px] font-semibold text-neutral-100/90 leading-snug">{preview.blocks[0].title}</div>
                <div className="text-[10px] text-neutral-400/80 leading-snug">{preview.blocks[0].micro}</div>
              </div>
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-white/10 bg-black/20 shrink-0">
                <Link href="/example" className="absolute inset-0 block group" aria-label="판매 랜딩 예시 보기">
                  <Image
                    src={LANDING_PREVIEW_SRC}
                    alt="판매 랜딩 예시"
                    fill
                    sizes="(max-width: 768px) 90vw, 260px"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none opacity-90 group-hover:opacity-100 transition-opacity" />
                </Link>
              </div>
            </div>
          </div>

          {/* SNS 비주얼 */}
          <div className="rounded-2xl border border-white/10 bg-black/30 overflow-hidden flex flex-col h-full min-h-0">
            <div className="flex flex-1 flex-col justify-center gap-2 px-2.5 py-2.5 md:px-3 md:py-3">
              <div className="text-center space-y-1">
                <div className="text-[12px] font-semibold text-neutral-100/90 leading-snug">{preview.blocks[1].title}</div>
                <div className="text-[10px] text-neutral-400/80 leading-snug">{preview.blocks[1].micro}</div>
              </div>
              <div className="relative aspect-[16/10] rounded-xl border border-white/10 overflow-hidden bg-black/20 shrink-0">
                <Image
                  src={SNS_VISUAL_SRC}
                  alt="SNS 대표 비주얼 예시"
                  fill
                  sizes="(max-width: 768px) 90vw, 260px"
                  className="object-cover object-center"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

          {/* 판매 시작용 운영 보드 */}
          <Link
            href="/analysis"
            aria-label="판매 시작용 운영 대시보드 예시 보기"
            className="group rounded-2xl border border-white/10 bg-black/30 overflow-hidden flex flex-col h-full min-h-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/40 hover:border-white/15 transition"
          >
            <div className="flex flex-1 flex-col justify-center gap-2 px-2.5 py-2.5 md:px-3 md:py-3">
              <div className="text-center space-y-1">
                <div className="text-[12px] font-semibold text-neutral-100/90 leading-snug">{preview.blocks[2].title}</div>
                <div className="text-[10px] text-neutral-400/80 leading-snug">{preview.blocks[2].micro}</div>
              </div>
              <div className="relative aspect-[16/10] rounded-xl border border-white/10 overflow-hidden bg-black/20 shrink-0">
                <Image
                  src={DASHBOARD_PREVIEW_SRC}
                  alt="판매 시작용 운영 대시보드 예시"
                  fill
                  sizes="(max-width: 768px) 90vw, 260px"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.01]"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </Link>
        </div>

        <div className="pt-2 md:pt-3">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2 md:px-4 md:py-2.5 text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-cyan-500/10 pointer-events-none" />
            <p className="relative text-[13px] md:text-[15px] font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white/95 via-emerald-100/90 to-white/90">
              판매 스타터 패키지로 빠르게 상품화해 보세요!
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
