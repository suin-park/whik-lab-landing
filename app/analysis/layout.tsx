import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "판매 운영 데이터 | Whik AI Lab",
  description: "AI 기반 문의, 반응, 판매 흐름을 한눈에 정리합니다.",
  alternates: { canonical: "/analysis" },
};

export default function AnalysisLayout({ children }: { children: React.ReactNode }) {
  return children;
}

