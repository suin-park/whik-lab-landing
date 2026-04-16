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

export default function SalesHeroVisual() {
  const { preview } = salesHeroContent;

  return (
    <motion.div
      variants={fadeUpSlow}
      className="card p-5 md:p-6 relative overflow-hidden border-white/10 w-full max-w-lg md:max-w-none mx-auto md:mx-0 h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-violet-500/10 pointer-events-none" />

      <div className="relative space-y-4">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[10px] font-semibold tracking-[0.22em] text-emerald-200/80">
            {preview.label}
          </span>
        </div>
        <h2 className="text-lg md:text-xl font-semibold text-white leading-snug">{preview.title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
          {/* 판매 랜딩 */}
          <div className="rounded-2xl border border-white/10 bg-black/30 overflow-hidden flex flex-col">
            <div className="px-3 pt-3">
              <div className="text-[11px] font-semibold text-neutral-100/90">{preview.blocks[0].title}</div>
              <div className="text-[10px] text-neutral-400/80 mt-0.5">{preview.blocks[0].micro}</div>
            </div>
            <div className="relative flex-1 min-h-[140px] mt-3 mx-3 mb-3 rounded-xl overflow-hidden border border-white/10">
              <Link href="/example" className="absolute inset-0 block group" aria-label="판매 랜딩 예시 보기">
                <Image
                  src={LANDING_PREVIEW_SRC}
                  alt="판매 랜딩 예시"
                  fill
                  sizes="(max-width: 768px) 90vw, 260px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none opacity-90 group-hover:opacity-100 transition-opacity" />
              </Link>
            </div>
          </div>

          {/* 문의 연결 */}
          <div className="rounded-2xl border border-white/10 bg-black/30 overflow-hidden flex flex-col">
            <div className="px-3 pt-3">
              <div className="text-[11px] font-semibold text-neutral-100/90">{preview.blocks[1].title}</div>
              <div className="text-[10px] text-neutral-400/80 mt-0.5">{preview.blocks[1].micro}</div>
            </div>
            <div className="px-3 pb-3 pt-3 flex-1">
              <div className="h-full rounded-xl border border-white/10 bg-white/[0.03] p-3 flex flex-col justify-between">
                <div className="flex flex-wrap gap-2">
                  <span className="text-[10px] text-neutral-200/80 rounded-full border border-white/10 bg-black/20 px-2 py-1">
                    카카오톡
                  </span>
                  <span className="text-[10px] text-neutral-200/80 rounded-full border border-white/10 bg-black/20 px-2 py-1">
                    문의폼
                  </span>
                </div>
                <div className="mt-3 h-1.5 w-full rounded bg-white/10" />
              </div>
            </div>
          </div>

          {/* SNS 비주얼 */}
          <div className="rounded-2xl border border-white/10 bg-black/30 overflow-hidden flex flex-col">
            <div className="px-3 pt-3">
              <div className="text-[11px] font-semibold text-neutral-100/90">{preview.blocks[2].title}</div>
              <div className="text-[10px] text-neutral-400/80 mt-0.5">{preview.blocks[2].micro}</div>
            </div>
            <div className="p-3 pt-3 flex-1">
              <div className="h-full min-h-[140px] rounded-xl border border-white/10 relative overflow-hidden bg-black/20">
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
        </div>
      </div>
    </motion.div>
  );
}
