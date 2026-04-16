export type Kpi = {
  label: string;
  value: string;
  sub: string;
  delta: { text: string; tone: "up" | "down" | "neutral" };
};

export type FunnelStep = { label: string; value: number; hint?: string };

export type RankedItem = { name: string; metric: string; badge?: string };

export type Insight = {
  icon: "moon" | "bottle" | "video" | "test";
  title: string;
  summary: string;
  action: string;
};

export type ActionCard = { title: string; desc: string; cta: string };

export const demoKpis: Kpi[] = [
  { label: "오늘 문의", value: "12", sub: "어제 대비", delta: { text: "+3", tone: "up" } },
  { label: "이번 주 문의", value: "46", sub: "지난 주 대비", delta: { text: "+8", tone: "up" } },
  { label: "클릭률", value: "8.4%", sub: "메인 페이지 기준", delta: { text: "안정적", tone: "neutral" } },
  { label: "상담 전환", value: "5건", sub: "이번 주 누적", delta: { text: "+1", tone: "up" } },
];

export const demoFunnel: FunnelStep[] = [
  { label: "페이지 방문", value: 1240 },
  { label: "상품 확인", value: 420, hint: "상세 섹션 진입" },
  { label: "문의 버튼 클릭", value: 96 },
  { label: "상담 신청 완료", value: 18 },
];

export const topProducts: RankedItem[] = [
  { name: "LUMIERE Calming Daily Serum", metric: "조회 1,140", badge: "상승" },
  { name: "Daily Glow Sun Cream", metric: "조회 820", badge: "유지" },
  { name: "Pure Balance Toner", metric: "조회 640", badge: "상승" },
];

export const topContents: RankedItem[] = [
  { name: "제품 소개 페이지", metric: "클릭 312", badge: "상위" },
  { name: "숏폼 홍보 영상", metric: "클릭 226", badge: "상승" },
  { name: "카카오 문의 버튼", metric: "클릭 168", badge: "전환" },
];

export const insights: Insight[] = [
  {
    icon: "moon",
    title: "저녁 시간대 문의 반응이 높습니다",
    summary: "오후 7시 이후 문의 클릭 비율이 가장 높습니다.",
    action: "저녁 시간대 광고 또는 CTA 노출을 강화해보세요.",
  },
  {
    icon: "bottle",
    title: "30ml 옵션의 관심도가 더 높습니다",
    summary: "상세페이지에서 30ml 선택 비율이 50ml보다 높습니다.",
    action: "메인 노출 옵션을 30ml 중심으로 재구성해보세요.",
  },
  {
    icon: "video",
    title: "숏폼 영상 유입 반응이 좋습니다",
    summary: "직접 유입보다 숏폼 유입의 문의 클릭률이 더 높습니다.",
    action: "영상 하단 CTA 문구를 더 명확하게 넣어보세요.",
  },
  {
    icon: "test",
    title: "문의 버튼 문구 테스트가 필요합니다",
    summary: "“구매문의”보다 “무료 상담” 표현이 더 높은 반응을 만들 수 있습니다.",
    action: "CTA 문구 A/B 테스트를 추천합니다.",
  },
];

export const quickActions: ActionCard[] = [
  { title: "CTA 문구 바꾸기", desc: "‘구매문의’ → ‘무료 상담’로 변경", cta: "적용 예시 보기" },
  { title: "카카오 문의 버튼 상단 배치", desc: "첫 화면에 문의 버튼을 더 빨리 노출", cta: "상세 보기" },
  { title: "30ml 옵션 우선 노출", desc: "기본 선택값을 30ml로 변경", cta: "상세 보기" },
  { title: "숏폼 영상 첫 장면 교체", desc: "첫 1초에 혜택/효과를 더 강하게", cta: "적용 예시 보기" },
];

