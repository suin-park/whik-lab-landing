export type ExampleProduct = {
  brand: string;
  name: string;
  category: string;
  subtitle: string;
  price: {
    current: string;
    original?: string;
    discountLabel?: string;
  };
  rating: { score: number; reviews: number };
  tags: string[];
  perks: string[];
  options: {
    volume: { label: string; value: string }[];
    type: { label: string; value: string }[];
  };
  summaryBar: { label: string; value: string }[];
  story: { title: string; copy: string; tone: "calm" | "fresh" | "clean"; imageUrl: string }[];
  features: { title: string; sub: string; icon: "leaf" | "drop" | "spark" | "gift" }[];
  usageSteps: { title: string; sub: string }[];
  recommend: { title: string; sub: string }[];
  reviewsSample: { title: string; body: string; meta: string }[];
  faq: { q: string; a: string }[];
};

export const exampleProduct: ExampleProduct = {
  brand: "LUMIERE",
  name: "Calming Daily Serum",
  category: "저자극 데일리 세럼",
  subtitle: "매일 부담 없이 쓰는 저자극 수분 진정 세럼",
  price: {
    current: "32,000원",
    original: "39,000원",
    discountLabel: "18% 할인",
  },
  rating: { score: 4.8, reviews: 128 },
  tags: ["저자극", "데일리 케어", "비건 포뮬러", "민감 피부용"],
  perks: ["끈적임 없는 산뜻한 마무리", "민감한 날에도 부담 없는 사용감", "매일 사용하기 좋은 진정 보습 포뮬러"],
  options: {
    volume: [
      { label: "30ml", value: "30" },
      { label: "50ml", value: "50" },
    ],
    type: [
      { label: "단품", value: "single" },
      { label: "2개 세트", value: "set" },
    ],
  },
  summaryBar: [
    { label: "피부 타입", value: "민감/건성" },
    { label: "사용감", value: "가볍고 산뜻함" },
    { label: "추천 시간", value: "아침/저녁" },
    { label: "특징", value: "무향/저자극" },
  ],
  story: [
    {
      title: "피부가 예민한 날에도",
      copy: "부담 없이 사용할 수 있도록",
      tone: "calm",
      imageUrl:
        "https://bszzdeyquwfgmruvopfe.supabase.co/storage/v1/object/public/package-thumbnails/sub_01.png",
    },
    {
      title: "가볍게 흡수되고",
      copy: "끈적임 없이 마무리되는 데일리 세럼",
      tone: "fresh",
      imageUrl:
        "https://bszzdeyquwfgmruvopfe.supabase.co/storage/v1/object/public/package-thumbnails/sub_02.png",
    },
    {
      title: "매일 쓰는 제품일수록",
      copy: "성분과 사용감이 중요합니다",
      tone: "clean",
      imageUrl:
        "https://bszzdeyquwfgmruvopfe.supabase.co/storage/v1/object/public/package-thumbnails/sub_03.png",
    },
  ],
  features: [
    { icon: "leaf", title: "저자극 포뮬러", sub: "민감한 날에도 편안하게" },
    { icon: "drop", title: "빠른 흡수력", sub: "가볍게 스며드는 텍스처" },
    { icon: "spark", title: "데일리 보습", sub: "매일 쓰기 좋은 진정 보습" },
    { icon: "gift", title: "깔끔한 마무리", sub: "끈적임 없이 산뜻하게" },
  ],
  usageSteps: [
    { title: "세안 후 첫 단계", sub: "토너 다음, 세럼을 가볍게" },
    { title: "1~2회 펌핑", sub: "손바닥에 덜어 양 조절" },
    { title: "얼굴 전체 흡수", sub: "부드럽게 펴 바른 뒤 마무리" },
  ],
  recommend: [
    { title: "민감 피부가 걱정되는 분", sub: "자극이 부담스러운 날" },
    { title: "가벼운 보습을 원하는 분", sub: "끈적임 없는 사용감" },
    { title: "데일리 진정이 필요한 분", sub: "매일 꾸준한 케어" },
  ],
  reviewsSample: [
    { title: "흡수가 빨라서 아침에도 부담 없어요", body: "끈적임이 거의 없고, 메이크업 전에 써도 좋아요.", meta: "Sample Review · 30ml · 민감" },
    { title: "향이 강하지 않아서 매일 쓰기 좋아요", body: "무향에 가까워서 편안합니다. 자극감도 거의 없었어요.", meta: "Sample Review · 50ml · 건성" },
    { title: "상세페이지처럼 딱 정리돼서 믿음이 가요", body: "핵심만 빠르게 보여줘서 제품 이해가 쉬웠어요.", meta: "Sample Review · 단품" },
  ],
  faq: [
    { q: "민감성 피부도 사용할 수 있나요?", a: "데모 페이지용 더미 제품입니다. 실제 제작 시에는 제품 성분/가이드를 기반으로 안전한 표현으로 구성해드립니다." },
    { q: "아침/저녁 모두 사용 가능한가요?", a: "네. 사용 루틴에 맞춰 아침/저녁 시나리오로도 구성 가능합니다." },
    { q: "다른 제품과 함께 써도 되나요?", a: "제품 특성에 따라 권장 조합을 정리하고, 과장 없는 표현으로 안내드립니다." },
    { q: "결제 기능도 붙일 수 있나요?", a: "가능합니다. 다만 이 페이지는 포트폴리오 데모로, 기본은 문의/상담 전환 중심으로 구성했습니다." },
  ],
};

