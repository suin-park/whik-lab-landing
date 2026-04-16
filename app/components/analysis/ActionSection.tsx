"use client";

import type { ActionCard } from "../../data/demoAnalysisData";

export default function ActionSection({ items }: { items: ActionCard[] }) {
  return (
    <section className="section pt-0" aria-label="추천 액션">
      <div className="mb-4">
        <h2 className="text-xl md:text-2xl font-semibold text-neutral-900">추천 액션</h2>
        <p className="mt-2 text-sm text-neutral-600">데이터를 바탕으로 바로 적용해볼 수 있는 다음 단계입니다.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((a) => (
          <div
            key={a.title}
            className="rounded-3xl border border-[#e7e7e4] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05)] p-5"
          >
            <div className="text-sm font-semibold text-neutral-900">{a.title}</div>
            <div className="mt-2 text-sm text-neutral-600 leading-relaxed">{a.desc}</div>
            <div className="mt-4">
              <span className="inline-flex items-center justify-center rounded-xl px-3 py-2 bg-neutral-100 border border-[#e7e7e4] text-sm font-semibold text-neutral-900">
                {a.cta}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

