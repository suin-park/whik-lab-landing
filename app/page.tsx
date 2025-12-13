"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp, fadeUpSlow, hoverLift } from "./components/motionPresets";
import FAQ from "./components/FAQ";
import VideoModal from "./components/VideoModal";
import QuoteChatModal from "./components/QuoteChatModal";
import ImageCarouselModal from "./components/ImageCarouselModal";

export default function Page() {
  const [open, setOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [videoId, setVideoId] = useState<string | null>(null);
  const [galleryOpen, setGalleryOpen] = useState(false);

  const worksImages = [
    { src: "/case/work_1.png", alt: "Whik Works 1" },
    { src: "/case/work_2.png", alt: "Whik Works 2" },
    { src: "/case/work_3.png", alt: "Whik Works 3" },
    { src: "/case/work_4.png", alt: "Whik Works 4" },
    { src: "/case/work_5.png", alt: "Whik Works 5" },
  ];
  
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

  // 카드 타입 선언: disabled, videoId, gallery 모두 선택(optional)
  type CaseCard = {
    t: string;              // 타이틀
    s: string;              // 서브텍스트
    img: string;            // 썸네일 경로
    videoId?: string;       // 비디오 모달용
    gallery?: "works";      // 갤러리 모달용
    href?: string;          // 외부 링크
    disabled?: boolean;     // 비활성 카드
  };

  // cases를 명시적으로 타입 지정
  const cases: CaseCard[] = [
    { t: "사진 한 장 → 3D 모델 자동 생성", s: "AI 이미지 분석 및 뎁스 추출 / AR 연동", href: "https://3d-locker.com", img: "/3d-thumb2.png" },
    { t: "AI로 웹툰 제작 자동화", s: "AI 스토리 가이드, 제작 가이드, AI 프롬프트 추천", videoId: "6rCVn3087DM", img: "/case/case-webtoon.png" },
    { t: "AI를 활용한 견적, 계약 및 프로젝트 관리", s: "반복적인 견적/계약/프로젝트 관리의 자동화", gallery: "works", img: "/case/case-works.png" },
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
      <motion.section
        variants={staggerContainer(0.05, 0.08)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="section pt-2 md:pt-20 pb-14 md:pb-20 grid md:grid-cols-2 gap-10 items-center"
      >
        <div className="space-y-7">
          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-semibold leading-relaxed space-y-1">
            <span className="block">아이디어 기획 2주,</span>
            <span className="block">시제품 제작 2주.</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-fuchsia-300">
              한 달 안에 사업
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-fuchsia-300">
              프로토타입 완성하기!
            </span>
          </motion.h1>

          <motion.p variants={fadeUpSlow} className="sub max-w-xl text-base">
            AI 기반 사업 기획부터 시제품 제작, 소개 자료까지 원스톱으로 제공합니다.
          </motion.p>
          <motion.div variants={fadeUpSlow} className="flex gap-3">
            <a href="#contact" className="btn-primary">무료 컨설팅 신청</a>
            <button type="button" onClick={()=>setChatOpen(true)} className="btn-ghost" aria-label="AI 견적 상담 챗봇 열기">
              AI 상담 챗봇
            </button>
          </motion.div>

          {/* 신뢰 라인 */}
          <motion.div variants={fadeUpSlow} className="flex items-center gap-3 pt-3 text-xs text-neutral-400">
            <div className="h-px w-10 bg-white/20" /> Made with Whik Lab
          </motion.div>
        </div>

        {/* 3D Locker 카드 */}
        <motion.a
          href="https://3d-locker.com"
          target="_blank"
          rel="noopener noreferrer"
          variants={fadeUpSlow}
          className="card p-0 overflow-hidden group block cursor-pointer"
          {...hoverLift}
        >
          {/* 이미지 영역 */}
          <div className="relative w-full aspect-[16/9] overflow-hidden">
            <Image
              src="/3d-thumb2.png"
              alt="3D Locker"
              fill
              className="object-cover object-left-top transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          
          {/* 정보 영역 */}
          <div className="p-6 md:p-8 space-y-4">
            {/* 상단: 로고와 배지 */}
            <div className="flex items-center justify-between">
              <div className="relative w-32 h-8 md:w-36 md:h-9">
                <Image
                  src="/logo_white.svg"
                  alt="3D Locker"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-300/10 border border-sky-300/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-300 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-300"></span>
                </span>
                <span className="text-xs md:text-sm font-medium text-sky-300">공식 오픈</span>
              </div>
            </div>
            
            {/* 제목과 설명 */}
            <div className="space-y-2">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold leading-tight">
                이미지 한 장으로 시작하는
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-fuchsia-300">완전한 3D 워크플로우</span>
              </h3>
              <p className="text-sm md:text-base text-neutral-400 leading-relaxed">
                AI 기반 3D 생성부터 AR, 프린팅까지 하나로 연결
              </p>
            </div>
          </div>
        </motion.a>
      </motion.section>

      {/* Problems */}
      <motion.section
        variants={staggerContainer(0.05, 0.07)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        className="section"
      >
        <motion.h2 variants={fadeUp} className="h2">많은 기업이 이런 고민을 합니다</motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <motion.div
            variants={fadeUp}
            {...hoverLift}
            className="grid place-items-center text-center rounded-xl bg-neutral-900 px-6 py-6 
            text-base md:text-lg text-neutral-200 font-medium
            hover:bg-neutral-800 hover:text-white transition-all duration-300"
          >
            어디서부터 AI를 도입해야 할지 모르겠습니다
          </motion.div>
          <motion.div
            variants={fadeUp}
            {...hoverLift}
            className="grid place-items-center text-center rounded-xl bg-neutral-900 px-6 py-6 
            text-base md:text-lg text-neutral-200 font-medium
            hover:bg-neutral-800 hover:text-white transition-all duration-300"
          >
            내부에 개발 리소스가 부족합니다
          </motion.div>
          <motion.div
            variants={fadeUp}
            {...hoverLift}
            className="grid place-items-center text-center rounded-xl bg-neutral-900 px-6 py-6 
            text-base md:text-lg text-neutral-200 font-medium
            hover:bg-neutral-800 hover:text-white transition-all duration-300"
          >
            투자자·고객에게 보여줄 시제품이 필요합니다
          </motion.div>
        </div>
      </motion.section>

      {/* Solution */}
      <motion.section
        variants={staggerContainer(0.05, 0.06)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        id="services"
        className="section"
      >
        <motion.h2 variants={fadeUp} className="h2">Whik의 3단계 패키지로 해결합니다</motion.h2>

        <div className="mt-6 grid md:grid-cols-3 gap-5">
          {/* 1) 기획 컨설팅 */}
          <motion.article variants={fadeUp} className="card-ring p-5">
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
          </motion.article>

          {/* 2) 시제품 제작(PoC) */}
          <motion.article variants={fadeUp} className="card-ring p-5">
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
          </motion.article>

          {/* 3) 소개 자료 제작 */}
          <motion.article variants={fadeUp} className="card-ring p-5">
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
          </motion.article>
        </div>
      </motion.section>

      {/* Case Studies */}
      <motion.section
        variants={staggerContainer(0.05, 0.08)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        id="cases"
        className="section"
      >
        <motion.h2 variants={fadeUp} className="h2">아이디어를 눈에 보이는 형태로 만듭니다</motion.h2>
        <div className="mt-6 grid md:grid-cols-3 gap-5">
          {cases.map((c) => {
            const disabled = !!c.disabled;

            return (
              <motion.article key={c.t} variants={fadeUp}>
                <motion.button
                  {...(!disabled ? hoverLift : {})}
                  disabled={disabled}
                  onClick={() => {
                    if (disabled) return;
                    if (c.href) {
                      window.open(c.href, "_blank", "noopener,noreferrer");
                      return;
                    }
                    if (c.gallery === "works") {
                      setGalleryOpen(true);
                      return;
                    }
                    if (c.videoId) {
                      setVideoId(c.videoId);
                      setOpen(true);
                    }
                  }}
                  aria-label={
                    disabled
                      ? `${c.t}는 준비 중`
                      : c.gallery === "works"
                        ? "Whik Works 갤러리 보기"
                        : `${c.t} 시연 보기`
                  }
                  className={`relative w-full card overflow-hidden transition ${
                    disabled
                      ? "opacity-60 cursor-not-allowed"
                      : "cursor-pointer"
                  }`}
                >
                  <div className="aspect-video relative">
                    <Image
                      src={c.img}
                      alt={c.t}
                      fill
                      className={c.img === "/3d-thumb2.png" || c.img === "/case/case-webtoon.png" ? "object-cover object-left-top" : "object-cover"}
                    />
                    {disabled && (
                      <span className="absolute top-3 right-3 px-2 py-1 text-xs rounded-lg bg-white/15 border border-white/20">
                        Coming soon
                      </span>
                    )}
                  </div>
                  <div className="p-4 text-left">
                    <div className="font-medium">{c.t}</div>
                    <div className="sub text-sm">{c.s}</div>
                  </div>
                </motion.button>
              </motion.article>
            );
          })}
        </div>
      </motion.section>

      {/* Process + Pricing */}
      <motion.section
        variants={staggerContainer(0.05, 0.06)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        id="process"
        className="section"
      >
        <motion.h2 variants={fadeUp} className="h2">프로세스와 비용 구조</motion.h2>

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
            <motion.li
              key={step}
              variants={fadeUp}
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
            </motion.li>
          ))}
        </ol>

        {/* 비용 피처 콜아웃 */}
        <motion.div
          variants={staggerContainer(0.1, 0.07)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="mt-5 grid md:grid-cols-3 gap-4 text-sm"
        >
          {[
            { color: "bg-sky-300/80", title: "착수금 30%", desc: "기획 컨설팅" },
            { color: "bg-emerald-300/80", title: "중도금 40%", desc: "시제품 제작" },
            { color: "bg-fuchsia-300/80", title: "잔금 30%", desc: "소개 자료 제작" },
          ].map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="card p-4 flex flex-col items-center justify-center text-center gap-2"
            >
              <div className={`w-2 h-2 rounded-full ${item.color}`} />
              <div className="font-medium">{item.title}</div>
              <div className="sub">{item.desc}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* 안내 문구 */}
        <motion.p variants={fadeUpSlow} className="sub text-xs mt-3">
          * 업종·범위에 따라 견적이 달라질 수 있습니다. 상세 내용은 미팅에서 안내드립니다.
        </motion.p>
      </motion.section>

      {/* Contact */}
      <motion.section
        variants={staggerContainer(0.05, 0.07)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        id="contact"
        className="section"
      >
        <motion.div variants={fadeUp} className="card p-6">
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
        </motion.div>
      </motion.section>

      {/* FAQ */}
      <FAQ />

      {/* 모달들 */}
      <VideoModal
        open={open}
        onClose={() => setOpen(false)}
        videoId={videoId ?? "03eeHR_qX5E"}
      />
      <QuoteChatModal open={chatOpen} onClose={()=>setChatOpen(false)} />
      <ImageCarouselModal
        open={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        images={worksImages}
        startIndex={0}
      />

      {/* Footer */}
      <footer className="section pt-0 text-sm text-neutral-500">
        <div className="flex flex-wrap items-center gap-4 justify-between border-t border-white/10 pt-6">
          <div>© Whik lnc.</div>
          <div className="flex gap-4">
            <a href="#">http://whik.co.kr</a>
          </div>
        </div>
      </footer>
    </main>
  );
}