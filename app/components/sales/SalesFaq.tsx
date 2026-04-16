"use client";

import FAQ from "../FAQ";
import { salesFaqItems } from "../../data/salesPageContent";

export default function SalesFaq() {
  return <FAQ title="자주 묻는 질문" items={salesFaqItems} id="faq" />;
}
