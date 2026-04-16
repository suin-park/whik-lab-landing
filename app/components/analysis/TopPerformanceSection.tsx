"use client";

import { ArrowUpRight } from "lucide-react";
import type { RankedItem } from "../../data/demoAnalysisData";

function Badge({ text }: { text?: string }) {
  if (!text) return null;
  const cls =
    text === "상승"
      ? "border-emerald-200 bg-emerald-50 text-emerald-800"
      : text === "전환"
        ? "border-sky-200 bg-sky-50 text-sky-800"
        : "border-neutral-200 bg-neutral-50 text-neutral-700";
  return <span className={`text-[11px] px-2 py-1 rounded-full border ${cls}`}>{text}</span>;
}

function ListCard({ title, items }: { title: string; items: RankedItem[] }) {
  return (
    <div className="rounded-3xl border border-[#e7e7e4] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05)] p-6">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
        <button type="button" className="text-sm text-neutral-600 hover:text-neutral-900 inline-flex items-center gap-1">
          상세 보기 <ArrowUpRight className="w-4 h-4" aria-hidden />
        </button>
      </div>
      <div className="mt-4 space-y-3">
        {items.map((it, idx) => (
          <div key={it.name} className="flex items-center justify-between gap-3 rounded-2xl border border-[#e7e7e4] bg-neutral-50 p-4">
            <div className="min-w-0">
              <div className="text-sm font-semibold text-neutral-900 truncate">
                {idx + 1}. {it.name}
              </div>
              <div className="mt-1 text-xs text-neutral-600">{it.metric}</div>
            </div>
            <Badge text={it.badge} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TopPerformanceSection({ products, contents }: { products: RankedItem[]; contents: RankedItem[] }) {
  return (
    <section className="section pt-0" aria-label="반응이 좋은 항목">
      <div className="mb-4">
        <h2 className="text-xl md:text-2xl font-semibold text-neutral-900">반응이 좋은 항목</h2>
        <p className="mt-2 text-sm text-neutral-600">어떤 제품과 콘텐츠가 실제 문의에 더 가까운지 예시로 보여줍니다.</p>
      </div>
      <div className="grid lg:grid-cols-2 gap-4">
        <ListCard title="인기 제품 TOP 3" items={products} />
        <ListCard title="반응 좋은 콘텐츠" items={contents} />
      </div>
    </section>
  );
}

