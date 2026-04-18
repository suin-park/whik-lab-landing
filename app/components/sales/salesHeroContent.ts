/**
 * /sales 히어로 전용 카피 — SalesHero, SalesHeroVisual에서만 import
 */

export const salesHeroContent = {
  promoHighlight: "오픈 기념 기간 한정 패키지",
  badges: ["소상공인 판매 시작용", "3영업일 제작"],
  headline: "30만원으로 시작하는\n판매 스타터 패키지",
  sub: "자체 개발 AI 툴과 최적화된 파이프라인으로\n가격 부담을 줄이고, 품질을 보장합니다",
  includes: [
    "브랜드/상품 소개형 단일 페이지 제작",
    "썸네일 또는 광고용 메인 이미지 1종",
    "유입 및 클릭 확인 페이지 제공",
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
      { key: "landing", title: "상품 소개형 페이지 제작", micro: "제품 소개 / CTA" },
      { key: "sns", title: "메인 이미지 1종", micro: "카드형 대표 이미지" },
      { key: "dashboard", title: "유입 및 클릭 확인 세팅", micro: "유입 및 클릭 확인 페이지 구현" },
    ],
  },
} as const;
