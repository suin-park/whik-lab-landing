"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "./motionPresets";

export type ContactConsultSectionProps = {
  id?: string;
  title: string;
  subtitle: string;
  submitLabel: string;
};

export default function ContactConsultSection({
  id = "contact",
  title,
  subtitle,
  submitLabel,
}: ContactConsultSectionProps) {
  const [contactLoading, setContactLoading] = useState(false);
  const [contactOk, setContactOk] = useState<null | boolean>(null);
  const [contactError, setContactError] = useState<string | null>(null);

  async function handleContactSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setContactLoading(true);
    setContactOk(null);
    setContactError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      company: String(formData.get("company") || ""),
      message: String(formData.get("message") || ""),
      website: String(formData.get("website") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const j = await res.json();
      if (!res.ok || !j.ok) throw new Error(j.error || "Failed to send");
      setContactOk(true);
      form.reset();
    } catch (err: unknown) {
      setContactOk(false);
      const message = err instanceof Error ? err.message : String(err);
      setContactError(message || "Failed to send");
    } finally {
      setContactLoading(false);
    }
  }

  return (
    <motion.section
      variants={staggerContainer(0.05, 0.07)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      id={id}
      className="section"
    >
      <motion.div variants={fadeUp} className="card p-6">
        <h2 className="h2">{title}</h2>
        <p className="sub mt-1">{subtitle}</p>
        <form className="mt-6 grid md:grid-cols-2 gap-4" onSubmit={handleContactSubmit}>
          <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

          <input
            name="name"
            placeholder="이름"
            className="rounded-xl px-4 py-3 bg-white/5 placeholder:text-neutral-500 border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
            required
            maxLength={100}
          />
          <input
            name="company"
            placeholder="회사명"
            className="rounded-xl px-4 py-3 bg-white/5 placeholder:text-neutral-500 border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
            maxLength={200}
          />
          <input
            name="email"
            type="email"
            placeholder="이메일"
            className="rounded-xl px-4 py-3 bg-white/5 placeholder:text-neutral-500 border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
            required
          />
          <input
            name="phone"
            placeholder="연락처 (선택)"
            className="rounded-xl px-4 py-3 bg-white/5 placeholder:text-neutral-500 border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
            maxLength={50}
          />
          <textarea
            name="message"
            placeholder="문의 내용"
            className="md:col-span-2 rounded-xl px-4 py-3 bg-white/5 h-36 placeholder:text-neutral-500 border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
            required
            maxLength={5000}
          />

          <div className="md:col-span-2 flex items-center gap-3 flex-wrap">
            <button
              type="submit"
              disabled={contactLoading}
              className="btn-primary disabled:opacity-60 transition-opacity"
            >
              {contactLoading ? "전송 중..." : submitLabel}
            </button>

            {contactOk === true && (
              <span className="text-emerald-400 text-sm">문의가 접수되었습니다. 확인 후 연락드리겠습니다.</span>
            )}
            {contactOk === false && <span className="text-red-400 text-sm">전송 실패: {contactError}</span>}
          </div>
        </form>
      </motion.div>
    </motion.section>
  );
}
