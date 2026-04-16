"use client";

import Link from "next/link";
import { useState } from "react";
import QuoteChatModal from "../components/QuoteChatModal";
import ExampleHero from "../components/example/ExampleHero";
import ExampleHighlights from "../components/example/ExampleHighlights";
import ExampleStorySection from "../components/example/ExampleStorySection";
import ExamplePromoSection from "../components/example/ExamplePromoSection";
import ExampleFeatureGrid from "../components/example/ExampleFeatureGrid";
import ExampleUsageSection from "../components/example/ExampleUsageSection";
import ExampleReviewSection from "../components/example/ExampleReviewSection";
import ExampleFaq from "../components/example/ExampleFaq";
import { exampleProduct } from "../data/exampleProduct";

export default function ExamplePage() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <main className="min-h-dvh bg-neutral-50 text-neutral-900 space-y-14 md:space-y-16 pt-4">
      {/* Lightweight top bar */}
      <header className="section pt-3 pb-0">
        <div className="flex items-center justify-between gap-3">
          <Link href="/sales" className="text-sm text-neutral-700 hover:text-neutral-900">
            ← Sales Support
          </Link>
          <button type="button" onClick={() => setChatOpen(true)} className="text-sm text-neutral-600 hover:text-neutral-900">
            제작 상담
          </button>
        </div>
      </header>

      <ExampleHero
        product={exampleProduct}
        onBuyNow={() => setChatOpen(true)}
        onAddToCart={() => setChatOpen(true)}
        onRequestPage={() => setChatOpen(true)}
      />

      <ExampleHighlights summary={exampleProduct.summaryBar} />

      <ExampleStorySection blocks={exampleProduct.story} />

      <ExamplePromoSection />

      <ExampleFeatureGrid items={exampleProduct.features} />

      <ExampleUsageSection steps={exampleProduct.usageSteps} recommend={exampleProduct.recommend} />

      <ExampleReviewSection rating={exampleProduct.rating} items={exampleProduct.reviewsSample} />

      <ExampleFaq items={exampleProduct.faq} />

      <footer className="section pt-0 text-sm text-neutral-600">
        <div className="flex flex-wrap items-center gap-4 justify-between border-t border-neutral-200 pt-6">
          <div>© Whik lnc.</div>
          <div className="flex gap-4">
            <Link href="/sales" className="hover:text-neutral-900">
              Sales Support
            </Link>
            <Link href="/" className="hover:text-neutral-900">
              AI Lab 홈
            </Link>
          </div>
        </div>
      </footer>

      <QuoteChatModal open={chatOpen} onClose={() => setChatOpen(false)} variant="sales" />
    </main>
  );
}

