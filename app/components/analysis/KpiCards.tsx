"use client";

import type { Kpi } from "../../data/demoAnalysisData";

function DeltaPill({ tone, text }: { tone: "up" | "down" | "neutral"; text: string }) {
  const cls =
    tone === "up"
      ? "border-emerald-200 bg-emerald-50 text-emerald-800"
      : tone === "down"
        ? "border-red-200 bg-red-50 text-red-700"
        : "border-neutral-200 bg-neutral-50 text-neutral-700";
  return <span className={`text-[11px] px-2 py-1 rounded-full border ${cls}`}>{text}</span>;
}

export default function KpiCards({ items }: { items: Kpi[] }) {
  return (
    <section className="section pt-0" aria-label="KPI 요약">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((k) => (
          <div
            key={k.label}
            className="rounded-3xl border border-[#e7e7e4] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05)] p-5"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="text-sm font-medium text-neutral-700">{k.label}</div>
              <DeltaPill tone={k.delta.tone} text={k.delta.text} />
            </div>
            <div className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900">{k.value}</div>
            <div className="mt-1 text-sm text-neutral-600">{k.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

