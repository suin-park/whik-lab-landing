"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Play, ShoppingBag, Globe, Sparkles } from "lucide-react";
import { fadeUp, fadeUpSlow } from "../motionPresets";
import { salesHero } from "../../data/salesPageContent";

function FlowPill({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-3 py-2 rounded-xl border border-white/10 bg-white/[0.04] text-sm text-neutral-200">
      {children}
    </div>
  );
}

function Arrow() {
  return <ArrowRight className="w-4 h-4 text-white/25 shrink-0" aria-hidden />;
}

function MockCard({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
        <span className="text-emerald-200">{icon}</span>
        <div className="text-xs font-semibold tracking-wide text-neutral-200">{title}</div>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

export default function SalesHeroVisual() {
  return (
    <motion.div
      variants={fadeUpSlow}
      className="card p-5 md:p-6 relative overflow-hidden"
      aria-label="판매 지원 결과물 시각화"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-violet-500/10 pointer-events-none" />

      <div className="relative space-y-5">
        <motion.div variants={fadeUp} className="flex items-center justify-between gap-3">
          <div className="text-sm font-medium text-neutral-300">{salesHero.visualTitle}</div>
          <div className="hidden sm:flex items-center gap-2 text-[11px] text-neutral-500">
            <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1">
              <Sparkles className="w-3.5 h-3.5 text-emerald-200" aria-hidden />
              결과물 중심
            </span>
          </div>
        </motion.div>

        {/* Flow */}
        <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2">
          <FlowPill>
            <span className="inline-flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-emerald-200" aria-hidden />
              제품
            </span>
          </FlowPill>
          <Arrow />
          <FlowPill>소개 페이지</FlowPill>
          <Arrow />
          <FlowPill>
            <span className="inline-flex items-center gap-2">
              <Play className="w-4 h-4 text-emerald-200" aria-hidden />
              홍보 영상
            </span>
          </FlowPill>
          <Arrow />
          <FlowPill>
            <span className="inline-flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-emerald-200" aria-hidden />
              문의 연결
            </span>
          </FlowPill>
        </motion.div>

        {/* Mock outputs */}
        <div className="grid sm:grid-cols-2 gap-3">
          <MockCard
            title="Landing Page"
            icon={<Globe className="w-4 h-4" aria-hidden />}
          >
            <div className="rounded-xl border border-white/10 bg-black/20 overflow-hidden">
              <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/10 bg-white/[0.03]">
                <span className="w-2 h-2 rounded-full bg-white/20" />
                <span className="w-2 h-2 rounded-full bg-white/15" />
                <span className="w-2 h-2 rounded-full bg-white/10" />
                <span className="ml-2 text-[11px] text-neutral-500 truncate">your-brand / landing</span>
              </div>
              <div className="p-3 space-y-2">
                <div className="h-2.5 w-24 rounded bg-white/15" />
                <div className="h-5 w-3/4 rounded bg-white/10" />
                <div className="h-2.5 w-2/3 rounded bg-white/10" />
                <div className="flex gap-2 pt-2">
                  <div className="h-8 w-24 rounded-lg bg-white text-black text-xs font-semibold grid place-items-center">
                    문의하기
                  </div>
                  <div className="h-8 w-20 rounded-lg border border-white/15 bg-white/5 text-xs grid place-items-center text-neutral-200">
                    더보기
                  </div>
                </div>
              </div>
            </div>
          </MockCard>

          <MockCard
            title="Promo Video"
            icon={<Play className="w-4 h-4" aria-hidden />}
          >
            <div className="rounded-xl border border-white/10 bg-black/20 overflow-hidden">
              <div className="relative aspect-video grid place-items-center bg-gradient-to-br from-white/10 to-white/5">
                <div className="w-12 h-12 rounded-full bg-white/10 border border-white/15 grid place-items-center">
                  <Play className="w-5 h-5 text-emerald-200 ml-0.5" aria-hidden />
                </div>
                <div className="absolute bottom-2 left-2 text-[11px] text-neutral-400">
                  Shorts / Reels
                </div>
                <div className="absolute bottom-2 right-2 text-[11px] text-neutral-500">15s</div>
              </div>
              <div className="p-3">
                <div className="h-2.5 w-28 rounded bg-white/12" />
                <div className="h-2.5 w-2/3 rounded bg-white/10 mt-2" />
              </div>
            </div>
          </MockCard>

          <MockCard
            title="Contact Flow"
            icon={<MessageCircle className="w-4 h-4" aria-hidden />}
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                <div className="text-xs text-neutral-300">카카오톡 문의</div>
                <div className="text-[11px] text-neutral-500">1-click</div>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                <div className="text-xs text-neutral-300">문의 폼</div>
                <div className="text-[11px] text-neutral-500">name · email</div>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                <div className="text-xs text-neutral-300">상담 신청</div>
                <div className="text-[11px] text-neutral-500">CTA</div>
              </div>
            </div>
          </MockCard>

          <MockCard
            title="Analytics"
            icon={<Sparkles className="w-4 h-4" aria-hidden />}
          >
            <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
              <div className="text-sm font-semibold text-emerald-100">판매 운영 대시보드</div>
              <div className="mt-2 text-xs text-neutral-300 leading-relaxed">
                문의, 반응, 전환 흐름을 한눈에 확인합니다.
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {["KPI", "퍼널", "AI 인사이트"].map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2 py-1 rounded-full border border-white/10 bg-white/5 text-neutral-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </MockCard>
        </div>
      </div>
    </motion.div>
  );
}

