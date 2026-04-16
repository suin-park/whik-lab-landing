"use client";

import Link from "next/link";
import { BarChart3 } from "lucide-react";

export default function AnalysisHero({ onOpenContact }: { onOpenContact: () => void }) {
  return (
    <header className="section pt-3 pb-0">
      <div className="flex items-center justify-between gap-3">
        <Link href="/sales" className="text-sm text-neutral-700 hover:text-neutral-900">
          ← Sales Support
        </Link>
        <button
          type="button"
          onClick={onOpenContact}
          className="h-9 px-4 text-sm leading-none inline-flex items-center justify-center rounded-xl bg-neutral-900 text-white font-semibold hover:bg-neutral-800 transition shadow-sm"
        >
          상담 문의
        </button>
      </div>

      <div className="mt-6 rounded-3xl border border-[#e7e7e4] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05)] p-6 md:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-widest text-neutral-500 uppercase">
              <BarChart3 className="w-4 h-4 text-emerald-700" aria-hidden />
              Demo Dashboard
            </div>
            <h1 className="mt-2 text-2xl md:text-3xl font-semibold text-neutral-900">판매 운영 데이터</h1>
            <p className="mt-2 text-sm md:text-base text-neutral-600">
              AI 기반 문의, 반응, 판매 흐름을 한눈에 정리합니다.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-2">
            {["AI Insights", "Sales Analytics", "Demo Dashboard"].map((t) => (
              <span
                key={t}
                className="text-[11px] px-2.5 py-1.5 rounded-full border border-[#e7e7e4] bg-neutral-50 text-neutral-700"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 md:hidden">
          {["Demo Dashboard", "AI Insights", "Sales Analytics"].map((t) => (
            <span
              key={t}
              className="text-[11px] px-2.5 py-1.5 rounded-full border border-[#e7e7e4] bg-neutral-50 text-neutral-700"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}

