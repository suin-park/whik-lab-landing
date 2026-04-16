"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { ExampleProduct } from "../../data/exampleProduct";

export default function ExampleFaq({ items }: { items: ExampleProduct["faq"] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="section">
      <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900">자주 묻는 질문</h2>
      <p className="mt-2 text-sm text-neutral-600">구매/제작 문의에서 자주 나오는 질문을 짧게 정리합니다.</p>

      <div className="mt-6 space-y-3">
        {items.map((item, i) => {
          const isOpen = open === i;
          return (
            <div
              key={`${item.q}-${i}`}
              className={`rounded-2xl border ${isOpen ? "border-neutral-300" : "border-neutral-200"} bg-white shadow-sm overflow-hidden`}
            >
              <button
                type="button"
                className="flex items-center justify-between w-full text-left px-5 py-4 text-base font-medium text-neutral-900"
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span>{item.q}</span>
                <ChevronDown className={`w-5 h-5 text-neutral-500 transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </button>
              {isOpen && <div className="px-5 pb-4 text-sm text-neutral-700 leading-relaxed">{item.a}</div>}
            </div>
          );
        })}
      </div>
    </section>
  );
}

