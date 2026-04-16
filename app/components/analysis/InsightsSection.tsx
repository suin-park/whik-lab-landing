"use client";

import { FlaskConical, Moon, Sparkles, Video } from "lucide-react";
import type { Insight } from "../../data/demoAnalysisData";

const iconMap = {
  moon: Moon,
  bottle: FlaskConical,
  video: Video,
  test: Sparkles,
} as const;

export default function InsightsSection({ items }: { items: Insight[] }) {
  return (
    <section className="section pt-0" aria-label="AI 인사이트">
      <div className="rounded-3xl border border-[#e7e7e4] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05)] p-6 md:p-8">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-neutral-900">AI 인사이트</h2>
            <p className="mt-2 text-sm text-neutral-600">데이터를 보고 해석한 다음 액션을 쉬운 문장으로 제안합니다.</p>
          </div>
          <span className="text-[11px] px-2.5 py-1.5 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-800">
            AI Insights
          </span>
        </div>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it) => {
            const Icon = iconMap[it.icon];
            return (
              <div key={it.title} className="rounded-3xl border border-[#e7e7e4] bg-neutral-50 p-5">
                <div className="flex items-start gap-3">
                  <span className="grid place-items-center w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200">
                    <Icon className="w-5 h-5 text-emerald-700" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-neutral-900 leading-snug">{it.title}</div>
                    <div className="mt-2 text-xs text-neutral-600 leading-relaxed">{it.summary}</div>
                  </div>
                </div>
                <div className="mt-4 text-xs text-neutral-700 leading-relaxed">
                  <span className="font-semibold text-neutral-900">추천:</span> {it.action}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

