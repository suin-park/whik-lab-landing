/** Sales 랜딩(/sales) 정적 카피 — 페이지는 조립만, 문구는 여기서 관리 */

export const salesAudience = {
  title: "이런 분께 필요합니다",
  sub: "제품은 있는데, 판매 구조가 아직 없는 분들",
  cards: [
    { icon: "box", title: "제품은 있는데", sub: "어떻게 보여줄지 막막한 경우" },
    { icon: "page", title: "판매 페이지 없음", sub: "제품 소개용 페이지가 없는 경우" },
    { icon: "test", title: "광고 전 테스트", sub: "반응부터 보고 시작하고 싶은 경우" },
    { icon: "video", title: "짧은 홍보 필요", sub: "쇼츠/릴스용 영상이나 이미지가 필요한 경우" },
    { icon: "contact", title: "판매 현황 확인 필요", sub: "정밀한 판매 데이터가 필요한 경우" },
    { icon: "small", title: "작게 시작", sub: "큰 비용 전에 가볍게 시작" },
  ],
} as const;

export const salesServices = {
  title: "휙랩이 제공하는 판매에 필요한 모든 것",
  sub: "페이지, 영상, 비주얼, 문의 연결, 운영 등",
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
      blurb: "판매 시작에 필요한 최소 구성을 빠르게 제작",
      features: [
        "브랜드/상품 소개형 단일 페이지 제작",
        "기존 웹사이트 간단 수정 가능",
        "썸네일 또는 광고용 메인 이미지 1종",
        "유입 및 클릭 확인 페이지 제공",
        "기본 수정 1회",
      ],
    },
    {
      name: "Page + Video",
      blurb: "판매 페이지와 홍보 콘텐츠를 함께 준비하는 패키지",
      features: [
        "5~7페이지 내외 웹사이트",
        "기존 웹사이트 간단 수정 가능",
        "썸네일 또는 광고용 메인 이미지 3종",
        "유입 및 클릭 확인 페이지 제공",
        "브랜드 홍보용 모션 그래픽 영상 1종",
        "카카오 기본 자동응답 세팅 가능",
        "기본 수정 3회",
      ],
    },
    {
      name: "Sales Setup",
      blurb: "작은 판매 테스트를 실제로 돌려볼 수 있는 운영형 패키지",
      features: [
        "판매 시작용 웹사이트 구축",
        "기존 웹사이트 간단 수정 가능",
        "문의 확인용 기본 관리 화면",
        "썸네일 또는 광고용 메인 이미지 5종",
        "분석용 기본 대시보드 및 웹사이트 운영 관리 화면 제공",
        "브랜드 홍보용 모션 그래픽 영상 1종",
        "카카오 기본 자동응답 세팅 가능",
        "기본 수정 5회",
        "제품 3D/AR 및 확장 기능은 별도 협의",
      ],
    },
  ],
} as const;

export const salesFaqItems = [
  {
    q: "쇼핑몰 전체 제작도 가능한가요?",
    a: "네 가능합니다. 자세한 사항은 상담 및 미팅을 통해 안내해 드립니다.",
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
