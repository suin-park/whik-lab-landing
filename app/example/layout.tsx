import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "제품 상세 데모 | Whik Lab",
  description:
    "실제 판매용 제품 상세 페이지처럼 보이는 데모입니다. 결제 기능 없이, 문의/상담 전환 중심으로 구성된 제품 소개 페이지 예시를 확인하세요.",
  alternates: { canonical: "/example" },
  openGraph: {
    title: "제품 상세 데모 | Whik Lab",
    description:
      "쿠팡/무신사 감각의 제품 상세 UX를 참고한 포트폴리오 데모. 문의/상담 CTA 중심으로 구성됩니다.",
    url: "/example",
  },
};

export default function ExampleLayout({ children }: { children: React.ReactNode }) {
  return children;
}

