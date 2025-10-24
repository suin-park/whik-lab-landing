"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "AI 개발자가 없어도 가능한가요?",
    a: "네. Whik AI Lab은 기획 중심의 PoC 제작을 전문으로 하며, 고객의 아이디어나 기획서만 있어도 실행 가능한 시제품을 설계하고 제작합니다.",
  },
  {
    q: "예산은 어느 정도 필요한가요?",
    a: "일반적인 PoC 단위 프로젝트의 경우 약 200만 원~1000만 원 사이에서 진행됩니다. 정확한 금액은 요구사항과 기능 범위에 따라 조정됩니다.",
  },
  {
    q: "제작 기간은 얼마나 걸리나요?",
    a: "평균적으로 2~3주 내외에 1차 시제품(PoC)을 완성합니다. 이후 피드백 및 보완 단계를 거쳐 최종 결과물을 전달합니다.",
  },
  {
    q: "정부 과제나 투자용 제안서 제작도 가능한가요?",
    a: "네. 내부 보고서, 투자 제안용 PDF, 전시/데모용 영상 등 목적에 맞는 자료 제작까지 포함한 패키지를 제공합니다.",
  },
  {
    q: "비즈니스 모델 검증 단계에서도 함께할 수 있나요?",
    a: "물론입니다. AI 솔루션의 기획·검증 단계에서 시장성과 기술적 타당성을 동시에 점검하며, 이후 확장 개발까지 연계 가능합니다.",
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
