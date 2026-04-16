/**
 * /sales 히어로 전용 카피 — SalesHero, SalesHeroVisual에서만 import
 */

export const salesHeroContent = {
  badges: ["소상공인 판매 시작용", "3영업일 제작", "Starter Package"],
  headline: "30만원으로 시작하는\n판매 스타터 패키지",
  sub: "페이지, 문의 연결, SNS 비주얼까지\n작게 시작할 수 있게 핵심만 빠르게 제작합니다",
  includes: [
    "1페이지 판매 랜딩",
    "SNS 대표 비주얼 1종",
    "판매 시작용 대시보드 제작",
    "자료 수령 후 3영업일 제작",
  ],
  noticePrimary: "수정 1회 포함",
  noticeSecondary:
    "촬영, 영상, 3D, 광고 운영, 추가 페이지는 별도 협의",
  ctaPrimary: "30만원 스타터 문의하기",
  ctaSecondary: "AI 상담 챗봇",
  sampleHref: "/example",

  preview: {
    label: "STARTER PREVIEW",
    title: "제작 결과 예시",
    blocks: [
      { key: "landing", title: "판매 랜딩", micro: "제품 소개 / CTA" },
      { key: "sns", title: "SNS 비주얼", micro: "카드형 대표 이미지" },
      { key: "dashboard", title: "판매 시작용 운영 보드", micro: "판매 시작용 운영 대시보드 구현" },
    ],
  },
} as const;
