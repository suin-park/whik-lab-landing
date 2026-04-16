/** Sales 랜딩(/sales) 정적 카피 — 페이지는 조립만, 문구는 여기서 관리 */

export const salesHero = {
  eyebrow: "Sales Support",
  label: "소규모 브랜드용",
  priceBadge: "30만원 Starter",
  headline: "30만원부터 시작하는\n판매 스타터 패키지",
  sub: "제품 소개 페이지, 홍보 영상, 문의 연결까지\n작게 시작할 수 있게 한 번에 정리해드립니다",
  description:
    "제품은 있는데 어떻게 보여주고 팔아야 할지 막막하다면,\n바로 판매에 쓸 수 있는 기본 구조부터 빠르게 세팅해드립니다.",
  bullets: ["제품 소개 페이지", "홍보 모션그래픽 영상", "문의 연결", "소규모 판매 테스트"],
  ctaPrimary: "30만원 스타터 문의하기",
  ctaSecondary: "내 제품도 가능한지 확인하기",
  disclaimer:
    "스타터 패키지는 기본형 기준이며, 촬영/3D/추가 페이지는 별도 협의입니다.",
  visualTitle: "30만원 스타터 구성",
} as const;

export const salesAudience = {
  title: "이런 분께 필요합니다",
  sub: "제품은 있는데, 판매 구조가 아직 없는 분들",
  cards: [
    { icon: "box", title: "제품은 있는데", sub: "어떻게 보여줄지 막막한 경우" },
    { icon: "page", title: "판매 페이지 없음", sub: "제품 소개용 페이지가 없는 경우" },
    { icon: "test", title: "광고 전 테스트", sub: "반응부터 보고 시작하고 싶은 경우" },
    { icon: "video", title: "짧은 홍보 필요", sub: "쇼츠·릴스용 영상이 필요한 경우" },
    { icon: "contact", title: "문의 연결 부족", sub: "카톡·문의 흐름이 없는 경우" },
    { icon: "small", title: "작게 시작", sub: "큰 비용 전에 가볍게 시작" },
  ],
} as const;

export const salesServices = {
  title: "판매에 필요한 4가지를 한 번에 정리합니다",
  sub: "페이지, 영상, 비주얼, 문의 연결, 운영까지",
  modules: [
    { label: "Page", title: "제품 소개 페이지", sub: "핵심 정보와 CTA 정리" },
    { label: "Video", title: "홍보 모션 그래픽 영상", sub: "쇼츠/릴스용 구성 가능" },
    { label: "Visual", title: "제품 비주얼 제작", sub: "자체 운영중인 3D Locker를 활용하여 AR 구현 가능" },
    { label: "Analytics", title: "판매 운영 대시보드", sub: "문의/반응 흐름을 한눈에" },
  ],
} as const;

export const salesProcess = {
  title: "간단하게 시작할 수 있도록 진행합니다",
  steps: [
    { title: "문의", desc: "현재 판매하려는 제품과 필요한 내용을 간단히 알려주세요." },
    { title: "간단 상담", desc: "어떤 페이지와 어떤 콘텐츠가 필요한지 빠르게 정리합니다." },
    { title: "자료 전달", desc: "제품 사진, 문구, 참고 자료를 전달받습니다." },
    { title: "제작", desc: "랜딩페이지와 필요한 판매용 콘텐츠를 제작합니다." },
    { title: "오픈 및 연결", desc: "문의 버튼, 상담 링크, 프로모션 동선을 연결해 바로 활용할 수 있게 정리합니다." },
  ],
} as const;

export const salesPackages = {
  title: "필요한 범위에 따라 가볍게 시작할 수 있습니다",
  footnote:
    "상세 범위와 비용은 제품 성격과 필요한 작업 범위에 따라 달라질 수 있습니다. 처음 문의 주실 때 간단한 제품 정보만 보내주셔도 됩니다.",
  tiers: [
    {
      name: "Starter",
      blurb: "가볍게 시작하는 판매용 페이지",
      features: [
        "1페이지 랜딩페이지 제작",
        "핵심 문구 정리",
        "문의 버튼 연결",
        "기본 수정 1회",
      ],
    },
    {
      name: "Page + Video",
      blurb: "페이지와 홍보 모션 그래픽 영상을 함께 구성하는 패키지",
      features: [
        "1페이지 랜딩페이지 제작",
        "홍보 모션 그래픽 영상 1개",
        "문의 전환 구조 연결",
        "기본 수정 1회",
      ],
    },
    {
      name: "Sales Setup",
      blurb: "작은 판매 테스트를 위한 구성 패키지",
      features: [
        "1페이지 랜딩페이지 제작",
        "홍보 모션 그래픽 영상",
        "문의 및 상담 구조 연결",
        "판매 테스트용 구성 제안",
        "기본 수정 1회",
      ],
    },
  ],
} as const;

export const salesFaqItems = [
  {
    q: "쇼핑몰 전체 제작도 가능한가요?",
    a: "가능한 범위는 상담 후 안내드리며, 이 페이지에서는 우선 판매 시작에 필요한 랜딩페이지 중심으로 안내드립니다.",
  },
  {
    q: "사진이나 문구가 아직 정리되지 않았는데 괜찮을까요?",
    a: "네. 현재 가지고 계신 자료를 기준으로 어느 정도까지 진행 가능한지 먼저 함께 정리해드립니다.",
  },
  {
    q: "영상도 꼭 함께 해야 하나요?",
    a: "아닙니다. 페이지 중심으로 시작할 수도 있고, 필요한 경우 홍보 모션 그래픽 영상만 추가하는 방식도 가능합니다.",
  },
  {
    q: "공동판매나 인플루언서 연결도 가능한가요?",
    a: "필요 시 방향을 함께 검토할 수 있으며, 현재 단계에 맞는 방식으로 가볍게 시작하는 것을 우선으로 제안드립니다.",
  },
] as const;

export const salesContact = {
  title: "판매 지원이 필요하시면 알려주세요",
  subtitle: "제품 종류와 판매 채널을 간단히 적어주시면 확인 후 연락드립니다.",
  submitLabel: "무료 판매 상담 신청",
} as const;

export const salesHeader = {
  cta: "무료 판매 상담",
  nav: [
    { label: "대상", href: "#audience" },
    { label: "서비스", href: "#sales-services" },
    { label: "진행", href: "#sales-process" },
    { label: "패키지", href: "#packages" },
    { label: "문의", href: "#contact" },
    { label: "FAQ", href: "#faq" },
  ],
} as const;
