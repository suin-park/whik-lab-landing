"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "AI 개발자가 없어도 가능한가요?",
    a: "가능합니다. 기획 정리부터 시제품 제작까지 함께 진행합니다.",
  },
  {
    q: "예산은 어느 정도 필요한가요?",
    a: "범위에 따라 다릅니다. 보통 핵심 기능부터 작게 시작해 먼저 검증합니다.",
  },
  {
    q: "제작 기간은 얼마나 걸리나요?",
    a: "기능 범위에 따라 다르지만, 빠른 MVP 형태로 먼저 제작할 수 있습니다.",
  },
  {
    q: "정부 과제나 투자용 제안서 제작도 가능한가요?",
    a: "가능합니다. 시제품과 함께 설명 자료 정리도 지원합니다.",
  },
  {
    q: "비즈니스 모델 검증 단계에서도 함께할 수 있나요?",
    a: "가능합니다. 핵심 가설을 정리하고, 먼저 시제품으로 빠르게 검증합니다.",
  },
  {
  q: "지분형(Equity-for-Service) 진행도 가능한가요?",
  a: "가능합니다. 조건(지분·IP·베스팅)은 상담 후 상호 합의로 확정합니다."
  },
  {
  q: "미팅은 어떻게 진행되나요?",
  a: "대면 또는 Zoom으로 진행합니다. 일정과 방식은 협의해 조정합니다."
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="section">
      <h2 className="h2">자주 묻는 질문 (FAQ)</h2>
      <div className="mt-6 space-y-3">
        {faqs.map((item, i) => (
          <div
            key={i}
            className={`faq-item ${open === i ? "open" : ""}`}
          >
            <button
              className="faq-q"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <span>{item.q}</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  open === i ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {open === i && <div className="faq-a">{item.a}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}



















