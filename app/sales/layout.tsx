import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "판매 지원 파트너 | Whik Lab",
  description:
    "소규모 브랜드를 위한 판매용 랜딩페이지, 홍보 모션 그래픽 영상, 문의 전환 구조를 빠르게 정리합니다. 랜딩·영상·문의 연결·작은 판매 테스트까지 Whik Lab과 가볍게 시작하세요.",
  alternates: { canonical: "/sales" },
  openGraph: {
    title: "판매 지원 파트너 | Whik Lab",
    description:
      "랜딩페이지, 판매용 영상, 문의 전환 구조를 빠르게 정리합니다. 소규모 브랜드의 판매 시작을 돕습니다.",
    url: "/sales",
  },
};

export default function SalesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
