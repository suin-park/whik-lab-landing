"use client";

import { useState } from "react";
import QuoteChatModal from "../components/QuoteChatModal";
import ContactConsultSection from "../components/ContactConsultSection";
import SalesPageHeader from "../components/sales/SalesPageHeader";
import SalesHero from "../components/sales/SalesHero";
import SalesAudience from "../components/sales/SalesAudience";
import SalesServices from "../components/sales/SalesServices";
import SalesProblemValue from "../components/sales/SalesProblemValue";
import SalesProcess from "../components/sales/SalesProcess";
import SalesPackages from "../components/sales/SalesPackages";
import SalesWhyWhik from "../components/sales/SalesWhyWhik";
import SalesFaq from "../components/sales/SalesFaq";
import SalesFinalCta from "../components/sales/SalesFinalCta";
import { salesContact } from "../data/salesPageContent";

export default function SalesPage() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <main className="space-y-24 md:space-y-28 pt-6">
      <SalesPageHeader />
      <SalesHero onOpenChat={() => setChatOpen(true)} />
      <SalesAudience />
      <SalesServices />
      <SalesProblemValue />
      <SalesProcess />
      <SalesPackages />
      <SalesWhyWhik />
      <ContactConsultSection
        title={salesContact.title}
        subtitle={salesContact.subtitle}
        submitLabel={salesContact.submitLabel}
      />
      <SalesFaq />
      <SalesFinalCta onOpenChat={() => setChatOpen(true)} />

      <footer className="section pt-0 text-sm text-neutral-500">
        <div className="flex flex-wrap items-center gap-4 justify-between border-t border-white/10 pt-6">
          <div>© Whik lnc.</div>
          <div className="flex gap-4">
            <a href="https://whik.co.kr" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-300">
              whik.co.kr
            </a>
            <a href="/" className="hover:text-neutral-300">
              AI Lab 홈
            </a>
          </div>
        </div>
      </footer>

      <QuoteChatModal open={chatOpen} onClose={() => setChatOpen(false)} variant="sales" />
    </main>
  );
}
