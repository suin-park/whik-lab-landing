"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import FAQ from "./components/FAQ";
import VideoModal from "./components/VideoModal";
import QuoteChatModal from "./components/QuoteChatModal";

export default function Page() {
  const [open, setOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [videoId, setVideoId] = useState<string | null>(null);
  
  // Contact form state
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
      website: String(formData.get("website") || ""), // honeypot
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

  const cases = [
    { t: "사진 한 장 → 3D 모델 자동 생성", s: "제품 가상 배치, AR/뷰어 연동", videoId: "03eeHR_qX5E", img: "/case/case-3d.png" },
    { t: "AI로 웹툰 제작 자동화", s: "프롬프트 가이드, 레이어·핀 기반 모션", videoId: "6rCVn3087DM", img: "/case/case-webtoon.png" },
    { t: "관광/헬스 PoC", s: "다국어 번역, 대화형 안내, 자동 요약", disabled: true, img: "/case/case-health.png" },
  ];
  return (
    <main className="space-y-24 md:space-y-32 pt-6">
      {/* Header */}
      <header className="section pt-6">
        {/* 글래스 박스 */}
        <div className="h-16 md:h-18 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl
                        shadow-[0_0_0_1px_rgba(255,255,255,0.04)] px-4 md:px-6
                        flex items-center justify-between">
          {/* 좌측 로고 */}
          <Link href="/" className="flex items-center pl-2 md:pl-4">
            <Image
              src="/logo.svg?v=4"
              alt="Whik AI Lab Logo"
              width={160}
              height={52}
              priority
              className="object-contain h-16 md:h-18 filter-none"
              style={
                {
                  imageRendering: 'crisp-edges',
                  WebkitImageRendering: 'crisp-edges',
                  msInterpolationMode: 'nearest-neighbor',
                } as React.CSSProperties
              }
            />
          </Link>

          {/* 네비게이션 */}
          <nav className="hidden md:flex items-center gap-2">
            {["사례","서비스","프로세스","문의"].map((t, i) => (
              <a
                key={i}
                href={["#cases","#services","#process","#contact"][i]}
                className="nav-link"
              >
                {t}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a href="#contact" className="btn-primary h-9 px-4 text-sm leading-none">
            무료 컨설팅
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="section grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-7">
          <h1 className="text-4xl md:text-6xl font-semibold leading-relaxed space-y-1">
            <span className="block">아이디어 기획 2주,</span>
            <span className="block">시제품 제작 2주.</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-fuchsia-300">
              한 달 안에 사업
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-fuchsia-300">
              프로토타입 완성하기!
            </span>
          </h1>

          <p className="sub max-w-xl text-base">
            AI 기반 사업 기획부터 시제품 제작, 소개 자료까지 원스톱으로 제공합니다.
          </p>
          <div className="flex gap-3">
            <a href="#contact" className="btn-primary">무료 컨설팅 신청</a>
            <button type="button" onClick={()=>setChatOpen(true)} className="btn-ghost" aria-label="AI 견적 상담 챗봇 열기">
              AI 상담 챗봇
            </button>
          </div>

          {/* 신뢰 라인 */}
          <div className="flex items-center gap-3 pt-3 text-xs text-neutral-400">
            <div className="h-px w-10 bg-white/20" /> Made with Whik Company
          </div>
        </div>

        {/* 데모 영상 박스 */}
        <div className="card p-2">
          <div className="relative aspect-video rounded-xl overflow-hidden ring-1 ring-white/10 shadow-[0_0_30px_rgba(0,0,0,0.4)]">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/03eeHR_qX5E?rel=0&modestbranding=1"
              title="Whik Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="section">
        <h2 className="h2">많은 기업이 이런 고민을 합니다</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="grid place-items-center text-center rounded-xl bg-neutral-900 px-6 py-6 
            text-base md:text-lg text-neutral-200 font-medium
            hover:bg-neutral-800 hover:text-white transition-all duration-300">
            어디서부터 AI를 도입해야 할지 모르겠습니다
          </div>
          <div className="grid place-items-center text-center rounded-xl bg-neutral-900 px-6 py-6 
            text-base md:text-lg text-neutral-200 font-medium
            hover:bg-neutral-800 hover:text-white transition-all duration-300">
            내부에 개발 리소스가 부족합니다
          </div>
          <div className="grid place-items-center text-center rounded-xl bg-neutral-900 px-6 py-6 
            text-base md:text-lg text-neutral-200 font-medium
            hover:bg-neutral-800 hover:text-white transition-all duration-300">
            투자자·고객에게 보여줄 시제품이 필요합니다
          </div>
        </div>
      </section>

      {/* Solution */}
      <section id="services" className="section">
        <h2 className="h2">Whik의 3단계 패키지로 해결합니다</h2>

        <div className="mt-6 grid md:grid-cols-3 gap-5">
          {/* 1) 기획 컨설팅 */}
          <article className="card-ring p-5">
            <div className="flex items-start gap-4">
              <span className="step-badge">1</span>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <div className="step-icon">🧭</div>
                  <h3 className="step-title">기획 컨설팅</h3>
                </div>
                <p className="step-sub mt-2">
                  업무·산업 분석 후 적용 가능한 사업 시나리오 정의
                </p>
                <ul className="mt-3 text-sm text-neutral-300 list-disc list-inside space-y-1">
                  <li>산출물: AI 도입 기획서, UX 흐름</li>
                  <li>워크숍: 킥오프/요구사항 정리</li>
                </ul>
              </div>
            </div>
          </article>

          {/* 2) 시제품 제작(PoC) */}
          <article className="card-ring p-5">
            <div className="flex items-start gap-4">
              <span className="step-badge">2</span>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <div className="step-icon">⚙️</div>
                  <h3 className="step-title">시제품 제작(PoC)</h3>
                </div>
                <p className="step-sub mt-2">
                  핵심 기능을 작동하는 데모로 구현
                </p>
                <ul className="mt-3 text-sm text-neutral-300 list-disc list-inside space-y-1">
                  <li>산출물: 웹/앱 데모, 시연 영상</li>
                  <li>옵션: 샌드박스·목업 연동</li>
                </ul>
              </div>
            </div>
          </article>

          {/* 3) 소개 자료 제작 */}
          <article className="card-ring p-5">
            <div className="flex items-start gap-4">
              <span className="step-badge">3</span>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <div className="step-icon">🗂️</div>
                  <h3 className="step-title">소개 자료 제작</h3>
                </div>
                <p className="step-sub mt-2">
                  내부 보고·투자 제안용 문서와 페이지 제작
                </p>
                <ul className="mt-3 text-sm text-neutral-300 list-disc list-inside space-y-1">
                  <li>산출물: 제안서 PDF, 요약 랜딩</li>
                  <li>브랜딩: 썸네일/에셋 제공</li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Case Studies */}
      <section id="cases" className="section">
        <h2 className="h2">아이디어를 눈에 보이는 형태로 만듭니다.</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-5">
          {cases.map((c) => {
            const disabled = c.disabled;
            return (
              <article
                key={c.t}
                role={disabled ? undefined : "button"}
                tabIndex={disabled ? -1 : 0}
                onClick={disabled ? undefined : () => { setVideoId(c.videoId ?? null); setOpen(true); }}
                className={`card overflow-hidden transition ${
                  disabled
                    ? "opacity-60 cursor-not-allowed"
                    : "cursor-pointer hover:translate-y-[-2px]"
                }`}
                aria-label={disabled ? undefined : `${c.t} 시연 보기`}
              >
                <div className="aspect-video relative">
                  <Image
                    src={c.img}
                    alt={c.t}
                    fill
                    className="object-cover"
                  />
                  {disabled && (
                    <span className="absolute top-3 right-3 px-2 py-1 text-xs rounded-lg bg-white/15 border border-white/20">
                      Coming soon
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <div className="font-medium">{c.t}</div>
                  <div className="sub text-sm">{c.s}</div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Process + Pricing */}
      <section id="process" className="section">
        <h2 className="h2">프로세스와 비용 구조</h2>

        {/* 타임라인 */}
        <ol className="mt-6 grid md:grid-cols-6 gap-4">
          {[
            "상담 접수",
            "킥오프",
            "기획서",
            "시제품",
            "소개 자료",
            "전달/검수",
          ].map((step, i, arr) => (
            <li
              key={step}
              className="group relative card p-4 flex flex-col items-center justify-center text-center gap-2
                         hover:translate-y-[-2px]"
            >
              <div className="inline-flex flex-col items-center justify-center gap-2">
                <span className="grid place-items-center w-8 h-8 rounded-full
                                 bg-gradient-to-br from-sky-400/70 to-fuchsia-400/70 text-black font-semibold">
                  {i + 1}
                </span>
                <span className="font-medium">{step}</span>
                <p className="sub text-xs text-neutral-400">
                  {[
                    "요구 사항 브리핑 / 일정 조율",
                    "목표·범위 정의 / 레퍼런스 정리",
                    "UX 흐름·기능 명세 초안",
                    "작동 데모(PoC) 제작",
                    "내부 보고·투자 제안 자료",
                    "납품·피드백 반영",
                  ][i]}
                </p>
              </div>

              {/* 커넥터(마지막 카드 제외) */}
              {i < arr.length - 1 && (
                <span
                  className="hidden md:block absolute top-6 right-[-12px] w-6 h-[2px]
                             bg-gradient-to-r from-white/30 to-white/0"
                />
              )}
            </li>
          ))}
        </ol>

        {/* 비용 피처 콜아웃 */}
        <div className="mt-5 grid md:grid-cols-3 gap-4 text-sm">
          {[
            { color: "bg-sky-300/80", title: "착수금 30%", desc: "기획 컨설팅" },
            { color: "bg-emerald-300/80", title: "중도금 40%", desc: "시제품 제작" },
            { color: "bg-fuchsia-300/80", title: "잔금 30%", desc: "소개 자료 제작" },
          ].map((item) => (
            <div
              key={item.title}
              className="card p-4 flex flex-col items-center justify-center text-center gap-2"
            >
              <div className={`w-2 h-2 rounded-full ${item.color}`} />
              <div className="font-medium">{item.title}</div>
              <div className="sub">{item.desc}</div>
            </div>
          ))}
        </div>

        {/* 안내 문구 */}
        <p className="sub text-xs mt-3">
          * 업종·범위에 따라 견적이 달라질 수 있습니다. 상세 내용은 미팅에서 안내드립니다.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <div className="card p-6">
          <h2 className="h2">사업 아이디어, 지금 실현해 보세요!</h2>
          <p className="sub mt-1">간단한 내용을 남겨주시면 1 영업일 내 담당자가 직접 연락드립니다.</p>
          <form className="mt-6 grid md:grid-cols-2 gap-4" onSubmit={handleContactSubmit}>
            {/* honeypot (화면에 안보이게) */}
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
            
            <div className="md:col-span-2 flex items-center gap-3">
              <button 
                type="submit"
                disabled={contactLoading}
                className="btn-primary disabled:opacity-60 transition-opacity"
              >
                {contactLoading ? "전송 중..." : "무료 컨설팅 신청"}
              </button>
              
              {contactOk === true && (
                <span className="text-emerald-400 text-sm">문의가 접수되었습니다! 곧 연락드리겠습니다.</span>
              )}
              {contactOk === false && (
                <span className="text-red-400 text-sm">전송 실패: {contactError}</span>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* 모달들 */}
      <VideoModal
        open={open}
        onClose={() => setOpen(false)}
        videoId={videoId ?? "03eeHR_qX5E"}
      />
      <QuoteChatModal open={chatOpen} onClose={()=>setChatOpen(false)} />

      {/* Footer */}
      <footer className="section pt-0 text-sm text-neutral-500">
        <div className="flex flex-wrap items-center gap-4 justify-between border-t border-white/10 pt-6">
          <div>© Whik AI Lab</div>
          <div className="flex gap-4">
            <a href="#">Whik Company: http://whik.co.kr</a>
          </div>
        </div>
      </footer>
    </main>
  );
}