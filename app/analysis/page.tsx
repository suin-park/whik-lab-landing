"use client";

import { useState } from "react";
import QuoteChatModal from "../components/QuoteChatModal";
import AnalysisHero from "../components/analysis/AnalysisHero";
import KpiCards from "../components/analysis/KpiCards";
import FunnelSection from "../components/analysis/FunnelSection";
import TopPerformanceSection from "../components/analysis/TopPerformanceSection";
import InsightsSection from "../components/analysis/InsightsSection";
import ActionSection from "../components/analysis/ActionSection";
import FooterNote from "../components/analysis/FooterNote";
import {
  demoFunnel,
  demoKpis,
  insights,
  quickActions,
  topContents,
  topProducts,
} from "../data/demoAnalysisData";

export default function AnalysisPage() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <main className="min-h-dvh bg-[#f4f6f8] text-neutral-900">
      <div className="space-y-10 md:space-y-12 pt-4 pb-14">
        <AnalysisHero onOpenContact={() => setChatOpen(true)} />

        <KpiCards items={demoKpis} />

        <FunnelSection steps={demoFunnel} />

        <TopPerformanceSection products={topProducts} contents={topContents} />

        <InsightsSection items={insights} />

        <ActionSection items={quickActions} />

        <FooterNote />
      </div>

      <QuoteChatModal open={chatOpen} onClose={() => setChatOpen(false)} variant="sales" />
    </main>
  );
}

