"use client";

import type { FunnelStep } from "../../data/demoAnalysisData";

function formatNumber(n: number) {
  return n.toLocaleString();
}

export default function FunnelSection({ steps }: { steps: FunnelStep[] }) {
  const max = Math.max(...steps.map((s) => s.value));

  return (
    <section className="section pt-0" aria-label="문의 전환 흐름">
      <div className="rounded-3xl border border-[#e7e7e4] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05)] p-6 md:p-8">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-neutral-900">문의 전환 흐름</h2>
          <p className="mt-2 text-sm text-neutral-600">어떤 단계에서 반응이 줄어드는지 빠르게 확인할 수 있습니다.</p>
        </div>

        <div className="mt-6 grid gap-3">
          {steps.map((s, idx) => {
            const ratio = max ? Math.round((s.value / max) * 100) : 0;
            const prev = idx > 0 ? steps[idx - 1]!.value : null;
            const drop = prev ? Math.round((s.value / prev) * 100) : null;

            return (
              <div key={s.label} className="rounded-2xl border border-[#e7e7e4] bg-neutral-50 p-4">
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <div className="font-semibold text-neutral-900">{s.label}</div>
                  <div className="text-sm text-neutral-700">
                    {formatNumber(s.value)}
                    {drop !== null && <span className="ml-2 text-xs text-neutral-500">({drop}%)</span>}
                  </div>
                </div>
                {s.hint && <div className="mt-1 text-xs text-neutral-500">{s.hint}</div>}

                <div className="mt-3 h-2 rounded-full bg-white border border-[#e7e7e4] overflow-hidden">
                  <div className="h-full bg-neutral-900" style={{ width: `${Math.max(6, ratio)}%` }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

